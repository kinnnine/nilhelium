import m from "mithril";

export const AboutView = () => {
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
                            <h6 class="max">About</h6>
                        </nav>
                    </header>
                    {/* Header */}
                </>
            )
        }
    };
};