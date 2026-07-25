import m from "mithril";

export const MenuMisc = () => {
    return {
        view: () => {
            return (
                <>
                    <div>
                        <button class="circle transparent">
                            <i>more_vert</i>
                        </button>
                        <menu class="left no-wrap">
                            <li onclick={() => m.route.set("/settings")}>Settings</li>
                            <li onclick={() => m.route.set("/about")}>About</li>
                        </menu>
                    </div>
                </>
            )
        }
    };
};