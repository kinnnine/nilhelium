import m from "mithril";
import { VersionManager } from "../../libs/VersionManager";
import { FileHelper } from "../../libs/helpers/FileHelper";

export const VersionEditView = () => {
    return {
        oninit: (vnode) => {
            vnode.state.versionName = "";
            vnode.state.versionEPWFile = null;
            vnode.state.versionEPWIdentify = false;
            vnode.state.save = () => {
                VersionManager.addVersion(vnode.state.versionName, vnode.state.versionEPWIdentify, vnode.state.versionEPWFile);
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
                                            <div>Eaglercraft client's assets.epw file</div>
                                        </div>
                                        <label class="field border">
                                            {vnode.state.versionEPWFile
                                                ? <button class="tertiary" onclick={() => {
                                                    document.getElementById("epwFile").click();
                                                }}>
                                                    <i>file_open</i>
                                                    <span>Change</span>
                                                </button>
                                                :
                                                <button onclick={() => {
                                                    document.getElementById("epwFile").click();
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
                                            <input type="checkbox" checked={vnode.state.versionEPWIdentify}
                                                onchange={(e) => vnode.state.versionEPWIdentify = e.target.checked}></input>
                                            <span></span>
                                        </label>
                                    </nav>
                                </div>
                                <div class="field middle-align">
                                    <nav>
                                        <div class="max">
                                            <h6>Assets EPW Identification Status</h6>
                                            <div>Disabled (Not yet implemented)</div>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </section>
                    </main>
                    <input type="file" id="epwFile" accept=".epw" style="display:none;" onchange={(e) => {
                        vnode.state.versionEPWFile = e.target.files[0];
                        console.log(vnode.state.versionEPWFile);
                    }}></input>
                    {/* Edit Form */}
                </>
            )
        }
    };
};