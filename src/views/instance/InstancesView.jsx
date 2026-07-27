import m from "mithril";
import { MenuPages } from "../MenuPages";
import { MenuMisc } from "../MenuMisc";
import { InstanceManager } from "../../libs/InstanceManager";

export const InstancesView = () => {
    return {
        oninit: (vnode) => {
            vnode.state.instances = InstanceManager.getInstances();
            vnode.state.createWindow = (path, width = 854, height = 480) => {
                window.open(m.route.prefix + path, "_blank", "popup=true,width=" + width + ",height=" + height);
            };
        },
        view: (vnode) => {
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
                            {
                                Object.entries(vnode.state.instances || {}).map(([id, item]) => ( 
                                    <article class="secondary-container">
                                        <div class="row">
                                            <div class="max">
                                                <h5>{item.name}</h5>
                                                <div>Version: {item.version} | Playtime: {item.playtime} </div>
                                            </div>
                                        </div>
                                        <nav>
                                            <button onclick={() => vnode.state.createWindow("/game")} class="circle transparent">
                                                <i>play_circle</i>
                                                <span class="tooltip bottom">Launch</span>
                                            </button>
                                            <button class="circle transparent">
                                                <i>stop_circle</i>
                                                <span class="tooltip bottom">Stop</span>
                                            </button>
                                            <button onclick={() => vnode.state.createWindow("/game/log")} class="circle transparent">
                                                <i>terminal</i>
                                                <span class="tooltip bottom">View Log</span>
                                            </button>
                                            <button onclick={() => m.route.set("/instance/edit")} class="circle transparent">
                                                <i>edit_square</i>
                                                <span class="tooltip bottom">Edit</span>
                                            </button>
                                            <button class="circle transparent">
                                                <i>delete</i>
                                                <span class="tooltip bottom">Delete</span>
                                            </button>
                                        </nav>
                                    </article>
                                ))
                            }
                        </section>
                    </main>
                    {/* Instances */}
                </>
            )
        },
    };
};