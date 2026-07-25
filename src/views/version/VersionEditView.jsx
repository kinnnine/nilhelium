import m from "mithril";

export const VersionEditView = () => {
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
                            <h6 class="max">version_name / New Version</h6>
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
                                            <h6>Version Name</h6>
                                            <div>Name of this Eaglercraft version</div>
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
                                            <h6>Assets EPK/EPW Data</h6>
                                            <div>Encoded base64 string of the assets.epk/.epw file</div>
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
                                            <h6>Assets EPK/EPW Identification</h6>
                                            <div>Identify trusted and valid against NilHelium's assets.epk/.epw sha256 checksum list</div>
                                        </div>
                                        <label class="switch">
                                            <input type="checkbox"></input>
                                            <span></span>
                                        </label>
                                    </nav>
                                </div>
                                <div class="field middle-align">
                                    <nav>
                                        <div class="max">
                                            <h6>Assets EPK/EPW Identification Status</h6>
                                            <div>Disabled</div>
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