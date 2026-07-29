import m from "mithril";

export const ConfirmDialog = () => {
    return {
        toggle: (id, header, body, action) => {
            if (typeof id === 'string' &&
                typeof header === 'string' &&
                typeof body === 'string' &&
                typeof action === 'function'
            ) {
                const itself = "dialog#" + id;
                const element = document.querySelector(itself);
                if (element) {
                    const cancelBtn = element.querySelector('nav > button:first-child');
                    const confirmBtn = element.querySelector('nav > button:last-child');
                    element.querySelector('h5').textContent = header;
                    element.querySelector('div').textContent = body;
                    cancelBtn.addEventListener('click', function () {
                        confirmBtn.removeEventListener('click', action);
                    }, { once: true });
                    confirmBtn.addEventListener('click', action, { once: true });
                    document.getElementById(id + "-activate").click();
                } else {
                    return null;
                };
            } else {
                return null;
            };
        },
        view: (vnode) => {
            return (
                <>
                    <dialog id={vnode.attrs.id} class="bottom">
                        <h5></h5>
                        <div></div>
                        <nav class="right-align">
                            <button data-ui={"#" + vnode.attrs.id} class="border">Cancel</button>
                            <button data-ui={"#" + vnode.attrs.id}>Confirm</button>
                        </nav>
                    </dialog>
                    <button id={vnode.attrs.id + "-activate"} data-ui={"#" + vnode.attrs.id} style="display:none;"></button>
                </>
            )
        }
    };
};

export const OkayDialog = () => {
    return {
        toggle: (id, header, body, action) => {
            if (typeof id === 'string' &&
                typeof header === 'string' &&
                typeof body === 'string'
            ) {
                const itself = "#" + id;
                const element = document.querySelector(itself);
                if (element) {
                    element.querySelector("h5").textContent = header;
                    element.querySelector("div").textContent = body;
                    document.getElementById(id + "-activate").click();
                } else {
                    return null;
                };
            } else {
                return null;
            };
        },
        view: (vnode) => {
            return (
                <>
                    <dialog id={vnode.attrs.id} class="bottom">
                        <h5></h5>
                        <div></div>
                        <nav class="right-align">
                            <button data-ui={"#" + vnode.attrs.id}>Okay</button>
                        </nav>
                    </dialog>
                    <button id={vnode.attrs.id + "-activate"} data-ui={"#" + vnode.attrs.id} style="display:none;"></button>
                </>
            )
        }
    };
};