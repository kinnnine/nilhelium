import m from "mithril";
import { InstanceManager } from "../../libs/InstanceManager";

export const InstanceEditView = () => {
    return {
        oninit: (vnode) => {
            vnode.state.instanceName = "";
            vnode.state.instanceAssignedVersion = "";
            vnode.state.save = () => {
                InstanceManager.addInstance(vnode.state.instanceName, vnode.state.instanceAssignedVersion);
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
                            <h6 class="max">instance_name / New Instance</h6>
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
                                            <h6>Instance Name</h6>
                                            <div>Name of this instance</div>
                                        </div>
                                        <label class="field border">
                                            <input type="text" value={vnode.state.instanceName} oninput={(e) => vnode.state.instanceName = e.target.value}></input>
                                            <span></span>
                                        </label>
                                    </nav>
                                </div>
                                <div class="field middle-align">
                                    <nav>
                                        <div class="max">
                                            <h6>Version</h6>
                                            <div>Assigned Eaglercraft version for this instance</div>
                                        </div>
                                        <div class="field suffix border">
                                            <select value={vnode.state.instanceAssignedVersion} onchange={(e) => vnode.state.instanceAssignedVersion = e.target.value}>
                                                <option value="test">1.8.8_u53_-wasm-gc</option>
                                            </select>
                                            <i>arrow_drop_down</i>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </section>
                    </main>
                    {/* Edit Form */}
                </>
            )
        }
    };
};