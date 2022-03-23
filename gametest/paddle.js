export default class Paddle{
    constructor(game){
        this.gameWidth = game.gamewidth;
        this.width = 150;
        this.heigth  = 20;

        this.maxspeed = 20;
        this.speed = 0;


        this.position = {
            x: game.gamewidth / 2 - this.width / 2,
            y: game.gameheigth - this.heigth - 10,
        };
    }

    moveright(){
        this.speed = this.maxspeed;
    } 
    moveleft(){
        this.speed = -this.maxspeed;
    }
    stop(){
        this.speed = 0;
    }



    draw(ctx){
        ctx.fillStyle = '#0ff';
        ctx.fillRect(this.position.x,this.position.y, this.width, this.heigth);
    }


    update(deltaTime){
        this.position.x += this.speed/ deltaTime;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.width > this.gameWidth) this.position.x = this.gameWidth - this.width;
    }
}