export default class Gamestate{
    constructor(){
        this.GAMESTATE = { 
            RUNNING: 0,
            MENU: 1,
            GAMEOVER: 2,
        };
    }

    GetState(){
        return this.GAMESTATE;
    }
}