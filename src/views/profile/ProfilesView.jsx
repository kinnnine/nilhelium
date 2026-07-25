import m from "mithril";
import { MenuPages } from "../MenuPages";
import { MenuMisc } from "../MenuMisc";

export const ProfilesView = () => {
    return {
        view: () => {
            return (
                <>
                    {/* Header */}
                    <header class="primary-container">
                        <nav>
                            <MenuPages />
                            <h6 class="max">Profiles</h6>
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