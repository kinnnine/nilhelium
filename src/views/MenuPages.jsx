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
                            <li onclick={() => m.route.set("/instances")}>Instances</li>
                            <li onclick={() => m.route.set("/versions")}>Versions</li>
                            <li onclick={() => m.route.set("/accounts")}>Accounts</li>
                        </menu>
                    </div>
                </>
            )
        }
    };
};