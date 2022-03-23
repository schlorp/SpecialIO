
export default class InputHandler{
    constructor(paddle){
        document.addEventListener('keydown', (event) =>{
            switch(event.keyCode){
                case 68:
                    paddle.moveright();
                    break;
                case 65:
                    paddle.moveleft();
                    break;
            }
        });
        document.addEventListener('keyup', (event) =>{
            switch(event.keyCode){
                case 68:
                    if(paddle.speed > 0)
                        paddle.stop();
                    break;
                case 65:
                    if(paddle.speed <0)
                        paddle.stop();
                    break;
            }
        });
    }
}