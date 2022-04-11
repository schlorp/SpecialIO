export default class Score{
    constructor(gamewidth, gameheigth){
        this.gamewidth = gamewidth;
        this.gameheigth = gameheigth;

        this.lives = 3;
        this.Points = 0;
    }

    Draw(ctx){
        //score text
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillText("Score: " + this.Points, this.gamewidth -this.gamewidth, this.gameheigth - 2);

        //point text
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.textAlign = "left";
        ctx.fillText("Lives: " + this.lives, this.gamewidth -this.gamewidth, this.gameheigth - 35);
    }

    GetLives(){
        return this.lives;
    }
    GetPoints(){
        return this.Points;
    }
    SetLives(sum){
        this.lives -= sum;
    }
    SetPoints(sum){
        this.Points += sum;
    }
}