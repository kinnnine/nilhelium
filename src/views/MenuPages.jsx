import m from "mithril";

export const MenuPages = () => {
    return {
        view: () => {
            return (
                <>
                    <div>
                        <button class="circle transparent">
                            <i>menu</i>
                        </button>
                        <menu class="no-wrap">
                            <li><a href="#!/instances">Instances</a></li>
                            <li><a href="#!/versions">Versions</a></li>
                            <li><a href="#!/profiles">Profiles</a></li>
                        </menu>
                    </div>
                </>
            )
        }
    };
};