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
                            <button class="circle transparent">
                                <i>add_box</i>
                            </button>
                            <MenuMisc />
                        </nav>
                    </header>
                    {/* Header */}
                    {/* Instances */}
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
                                </button>
                                <button class="circle transparent">
                                    <i>stop_circle</i>
                                </button>
                                <button class="circle transparent">
                                    <i>terminal</i>
                                </button>
                                <button class="circle transparent">
                                    <i>edit_square</i>
                                </button>
                                <button class="circle transparent">
                                    <i>delete</i>
                                </button>
                            </nav>
                        </article>
                    </section>
                    {/* Instances */}
                </>
            )
        },
    };
};