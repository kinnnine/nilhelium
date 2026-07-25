import m from "mithril";
import { MenuPages } from "../MenuPages";
import { MenuMisc } from "../MenuMisc";

export const VersionsView = () => {
    return {
        view: () => {
            return (
                <>
                    {/* Header */}
                    <header class="primary-container">
                        <nav>
                            <MenuPages />
                            <h6 class="max">Versions</h6>
                            <button onclick={() => m.route.set("/version/edit")} class="circle transparent">
                                <i>add_box</i>
                                <span class="tooltip bottom">Create New Version</span>
                            </button>
                            <MenuMisc />
                        </nav>
                    </header>
                    {/* Header */}
                    {/* Versions */}
                    <main class="compact">
                        <section>
                            <article class="secondary-container">
                                <div class="row">
                                    <div class="max">
                                        <h5>1.8.8_u53_-wasm-gc</h5>
                                    </div>
                                </div>
                                <nav>
                                    <button class="circle transparent">
                                        <i>edit_square</i>
                                        <span class="tooltip bottom">Edit</span>
                                    </button>
                                    <button class="circle transparent">
                                        <i>delete</i>
                                        <span class="tooltip bottom">Delete</span>
                                    </button>
                                </nav>
                            </article>
                        </section>
                    </main>
                    {/* Versions */}
                </>
            )
        }
    };
};