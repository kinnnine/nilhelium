import m from "mithril";

export const SettingsView = () => {
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
                            <h6 class="max">Settings</h6>
                        </nav>
                    </header>
                    {/* Header */}
                </>
            )
        }
    };
};