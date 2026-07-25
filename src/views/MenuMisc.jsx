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
                            <li><a href="#!/settings">Settings</a></li>
                            <li><a href="#!/about">About</a></li>
                        </menu>
                    </div>
                </>
            )
        }
    };
};