export default class Box{
    
    constructor(gamewidth, gameheigth){
        this.gamewidth = gamewidth;
        this.gameheigth = gameheigth;

        this.width = 50;
        this.heigth = 50;
        this.speed = {
            x:10,
            y:11
        };

        this.position = {
            x: 0,
            y: 0,
        };
    }

    draw(ctx, xpos, ypos){
        this.position.x = xpos;
        this.position.y = ypos;

        ctx.fillStyle = '#0ff';
        ctx.fillRect(this.position.x,  this.position.y, this.width, this.heigth);
    }


    update(deltaTime, xpos, ypos){
        this.position.x += this.speed.x / deltaTime;
        this.position.y += this.speed.y / deltaTime;
    }

}