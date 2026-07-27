import m from "mithril";
import { MenuPages } from "../MenuPages";
import { MenuMisc } from "../MenuMisc";

export const AccountsView = () => {
    return {
        view: () => {
            return (
                <>
                    {/* Header */}
                    <header class="primary-container">
                        <nav>
                            <MenuPages />
                            <h6 class="max">Accounts</h6>
                            <button class="circle transparent">
                                <i>add_box</i>
                                <span class="tooltip bottom">Add an account</span>
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