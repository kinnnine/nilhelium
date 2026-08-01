import m from 'mithril';
import { EaglerLoader } from '../../libs/EaglerLoader';

export const GameView = () => {
    return {
        oncreate: async (vnode) => {
            const instance_uuid = m.route.param('uuid');
            document.body.removeAttribute('class');
            document.body.id = "game_frame";
            document.body.style = "margin:0px;width:100%;height:100dvh;overflow:hidden;background-color:white;";
            await EaglerLoader.load(instance_uuid)
                .catch((err) => {
                    throw err;
                });
            await EaglerLoader.start()
                .catch((err) => {
                    throw err;
                });
        },
        view: () => {
            return (
                <>
                </>
            )
        }
    };
};