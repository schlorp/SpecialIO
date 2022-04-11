import Fruit from "./fruit.js";

export default class Spawner{
    constructor(gamewidth, gameheigth, ctx, score){
        this.gamewidth = gamewidth;
        this.gameheigth = gameheigth;
        this.ctx = ctx;
        this.score = score;


        this.fruitlist = [];
    }

    Spawn(){
        //spawn a fruit on a random pos.x and store it in a array
        let spawnpos = Math.floor(Math.random() * this.gamewidth);
        let fruit = {instance: new Fruit(this.gamewidth, this.gameheigth), spawnpos,};

        //checking if not spawned outside of the canvas
        if(spawnpos + fruit.instance.size > this.gamewidth){
            this.Spawn();
        }
        if(spawnpos + fruit.instance.size < this.gamewidth){
            this.fruitlist.push(fruit);
            fruit.instance.SetImage();
            fruit.instance.draw(this.ctx, spawnpos);
        }
    }

    Update(){
        for(let i = 0; i < this.fruitlist.length; i++){
            this.fruitlist[i].instance.Update();
            this.fruitlist[i].instance.draw(this.ctx, this.fruitlist[i].spawnpos);
            if(this.fruitlist[i].instance.CheckBottomCol()){
                this.fruitlist.splice(this.fruitlist[i], 1);
                this.score.SetLives(1);
            }
        }
    }

    Getlist(){
        return this.fruitlist;
    }
}