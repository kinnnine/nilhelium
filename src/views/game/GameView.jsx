import m from 'mithril';

export const GameView = () => {
    return {
        oncreate: () => {
            document.body.removeAttribute('class');
            document.body.id = "game_frame";
            document.body.style = "margin:0px;width:100%;height:100%;overflow:hidden;background-color:white;";
        },
        view: () => {
            return (
                <>
                </>
            )
        }
    };
};