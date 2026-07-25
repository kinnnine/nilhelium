import m from "mithril";
import { MenuPages } from "../MenuPages";
import { MenuMisc } from "../MenuMisc";

export const InstancesView = () => {
    return {
        view: () => {
            return (
                <>
                    {/* Header */}
                    <header class="primary-container">
                        <nav>
                            <MenuPages />
                            <h6 class="max">Instances</h6>
                            <button onclick={() => m.route.set("/instance/edit")} class="circle transparent">
                                <i>add_box</i>
                                <span class="tooltip bottom">Create New Instance</span>
                            </button>
                            <MenuMisc />
                        </nav>
                    </header>
                    {/* Header */}
                    {/* Instances */}
                    <main class="compact">
                        <section>
                            <article class="secondary-container">
                                <div class="row">
                                    <div class="max">
                                        <h5>Example</h5>
                                        <div>Version: 1.8.8_u53_-wasm-gc | Playtime: 0d 0h 0m </div>
                                    </div>
                                </div>
                                <nav>
                                    <button class="circle transparent">
                                        <i>play_circle</i>
                                        <span class="tooltip bottom">Launch</span>
                                    </button>
                                    <button class="circle transparent">
                                        <i>stop_circle</i>
                                        <span class="tooltip bottom">Close</span>
                                    </button>
                                    <button class="circle transparent">
                                        <i>terminal</i>
                                        <span class="tooltip bottom">View Log</span>
                                    </button>
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
                    {/* Instances */}
                </>
            )
        },
    };
};