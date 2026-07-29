import m from "mithril";
import { MenuPages } from "../MenuPages";
import { MenuMisc } from "../MenuMisc";
import { VersionManager } from "../../libs/VersionManager";
import { ConfirmDialog, OkayDialog } from "../Dialogs";

export const VersionsView = () => {
    return {
        oninit: (vnode) => {
            vnode.state.versions = VersionManager.getVersions();
            vnode.state.versionDeletion = (uuid) => {
                const version = VersionManager.getVersion(uuid);
                ConfirmDialog().toggle("version-deletion-dialog",
                    'Delete "' + version.name + '"?',
                    '"' + version.name + '" will be deleted forever, including files for this version!',
                    () => {
                        console.log("Action fired from verison: " + version);
                    }
                );
            };
        },
        view: (vnode) => {
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
                            {
                                Object.entries(vnode.state.versions).map(([id, item]) => (
                                    <article class="secondary-container">
                                        <div class="row">
                                            <div class="max">
                                                <h5>{item.name}</h5>
                                            </div>
                                        </div>
                                        <nav>
                                            <button class="circle transparent">
                                                <i>edit_square</i>
                                                <span class="tooltip bottom">Edit</span>
                                            </button>
                                            <button onclick={() => vnode.state.versionDeletion(id)}
                                                class="circle transparent">
                                                <i>delete</i>
                                                <span class="tooltip bottom">Delete</span>
                                            </button>
                                        </nav>
                                    </article>
                                ))
                            }
                        </section>
                    </main>
                    {/* Versions */}
                    {/* Dialogs */}
                    <ConfirmDialog id="version-deletion-dialog" />
                    {/* Dialogs */}
                </>
            )
        }
    };
};