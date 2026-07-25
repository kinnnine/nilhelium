import m from "mithril";

export const InstanceEditView = () => {
    return {
        view: () => {
            return (
                <>
                    {/* Header */}
                    <header class="primary-container">
                        <nav>
                            <button onclick={() => window.history.back()} class="circle transparent">
                                <i>arrow_back</i>
                            </button>
                            <h6 class="max">instance_name / New Instance</h6>
                            <button class="circle transparent">
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
                                            <input type="text"></input>
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
                                            <select>
                                                <option>1.8.8_u53_-wasm-gc</option>
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