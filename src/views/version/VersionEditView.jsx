import m from "mithril";
import { VersionManager } from "../../libs/VersionManager";

export const VersionEditView = () => {
    return {
        oninit: (vnode) => {
            vnode.state.versionName = "";
            vnode.state.versionEPWData = "";
            vnode.state.versionEPWIdentify = false;
            vnode.state.save = () => {
                VersionManager.addVersion(vnode.state.versionName, vnode.state.versionEPWIdentify, vnode.state.versionEPWData);
            };
        },
        view: (vnode) => {
            return (
                <>
                    {/* Header */}
                    <header class="primary-container">
                        <nav>
                            <button onclick={() => window.history.back()} class="circle transparent">
                                <i>arrow_back</i>
                            </button>
                            <h6 class="max">version_name / New Version</h6>
                            <button onclick={() => vnode.state.save()} class="circle transparent">
                                <i>save</i>
                            </button>
                        </nav>
                    </header>
                    {/* Header */}
                    {/* Edit Form */}
                    <main class="compact">
                        <section>
                            <article class="transparent">
                                <div class="field middle-align">
                                    <nav>
                                        <div class="max">
                                            <h6>Version Name</h6>
                                            <div>Name of this Eaglercraft version</div>
                                        </div>
                                        <label class="field border">
                                            <input type="text" value={vnode.state.versionName} oninput={(e) => vnode.state.versionName = e.target.value}></input>
                                            <span></span>
                                        </label>
                                    </nav>
                                </div>
                                <div class="field middle-align">
                                    <nav>
                                        <div class="max">
                                            <h6>Assets EPW Data</h6>
                                            <div>Encoded base64 string of the assets.epw file</div>
                                        </div>
                                        <label class="field border">
                                            {vnode.state.versionEPWData
                                                ? <button class="tertiary" onclick={() => {
                                                    const btn = document.getElementById("epwTxtFile");
                                                    btn.click();
                                                }}>
                                                    <i>file_open</i>
                                                    <span>Change</span>
                                                </button>
                                                :
                                                <button onclick={() => {
                                                    const btn = document.getElementById("epwTxtFile");
                                                    btn.click();
                                                }}>
                                                    <i>file_open</i>
                                                    <span>Select</span>
                                                </button>
                                            }
                                        </label>
                                    </nav>
                                </div>
                                <div class="field middle-align">
                                    <nav>
                                        <div class="max">
                                            <h6>Assets EPW Identification</h6>
                                            <div>Identify trusted and valid against NilHelium's assets.epw sha256 checksum list</div>
                                        </div>
                                        <label class="switch">
                                            <input type="checkbox" checked={vnode.state.versionEPWIdentify} onchange={(e) => vnode.state.versionEPWIdentify = e.target.checked}></input>
                                            <span></span>
                                        </label>
                                    </nav>
                                </div>
                                <div class="field middle-align">
                                    <nav>
                                        <div class="max">
                                            <h6>Assets EPW Identification Status</h6>
                                            <div>Disabled</div>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </section>
                    </main>
                    <input type="file" id="epwTxtFile" accept=".txt" style="display:none;" onchange={(e) => {
                        vnode.state.versionEPWData = e.target.files[0];
                        console.log(vnode.state.versionEPWData);
                    }}></input>
                    {/* Edit Form */}
                </>
            )
        }
    };
};