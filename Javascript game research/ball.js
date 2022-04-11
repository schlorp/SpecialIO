export default class Ball{


    constructor(game){
        this.image = document.getElementById("img_ball");

        this.game_width = game.gamewidth;
        this.game_heigth = game.gameheigth;

        this.game = game;

        this.position = {x:0, y:0};
        this.speed = {x: 10, y: 11};
        this.size = 50;


    }
    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime){
        this.position.x += this.speed.x / deltaTime;
        this.position.y += this.speed.y / deltaTime;

        //wall collision on left or right
        if(this.position.x + this.size > this.game_width || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }
        //wall collison on top or bottom
        if(this.position.y + this.size > this.game_heigth || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        //check paddle collision
        let bottomOfBall = this.position.y + this.size;
        let topOfPaddle = this.game.paddle.position.y;
        let leftSideOfPaddle = this.game.paddle.position.x;
        let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

        if(bottomOfBall >= topOfPaddle 
            && this.position.x >= leftSideOfPaddle
            && this.position.x + this.size <= rightSideOfPaddle
            ){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}