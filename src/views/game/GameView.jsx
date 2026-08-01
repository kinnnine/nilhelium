import m from 'mithril';
import { InstanceManager } from "../../libs/InstanceManager";

export const GameView = () => {
    return {
        oncreate: async (vnode) => {
            const uuid = m.route.param('uuid');
            var game;
            await InstanceManager.registerInstance(uuid)
                .then((result) => {
                    game = result;
                })
                .catch((err) => {
                    console.error(err);
                });
            document.title = game.instance.name + " (" + game.version.name + ")";
            document.body.removeAttribute('class');
            document.body.id = "game_frame";
            document.body.style = "margin:0px;width:100%;height:100%;overflow:hidden;background-color:white;";
            console.log(game);
        },
        view: () => {
            return (
                <>
                </>
            )
        }
    };
};