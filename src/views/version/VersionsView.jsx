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
                            <button class="circle transparent">
                                <i>add_box</i>
                            </button>
                            <MenuMisc />
                        </nav>
                    </header>
                    {/* Header */}
                </>
            )
        }
    };
};