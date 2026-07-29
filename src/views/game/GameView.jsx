import m from 'mithril';
import { InstanceManager } from "../../libs/InstanceManager";
import { VersionManager } from "../../libs/VersionManager";

export const GameView = () => {
    return {
        oninit: (vnode) => {
            vnode.state.instanceUUID = m.route.param('uuid');
            vnode.state.instanceName = "";
            vnode.state.instanceVersion = "";
            vnode.state.instance = null;
            vnode.state.version = null;
            const instance = InstanceManager.getInstance(vnode.state.instanceUUID);
            if (instance != null) {
                const version = VersionManager.getVersion(instance.version);
                if (version != null) {
                    vnode.state.instanceName = instance.name;
                    vnode.state.instanceVersion = version.name;
                    vnode.state.instance = instance;
                    vnode.state.version = version;
                } else {
                    throw new Error("Version failure");
                };
            } else {
                throw new Error("Instance failure");
            };
        },
        oncreate: async (vnode) => {
            document.title = vnode.state.instanceName + ' (' + vnode.state.instanceVersion + ')';
            document.body.removeAttribute('class');
            document.body.id = "game_frame";
            document.body.style = "margin:0px;width:100%;height:100%;overflow:hidden;background-color:white;";
            const blob = await VersionManager.getEPWFile(vnode.state.instance.version);
            console.log(blob);
        },
        view: () => {
            return (
                <>
                </>
            )
        }
    };
};