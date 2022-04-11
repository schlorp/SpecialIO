import Collision from './collision.js';
export default class Pointer{
    
    constructor(gamewidth, gameheigth, spawner,score){
        this.gamewidth = gamewidth;
        this.gameheigth = gameheigth;

        this.collision = new Collision(this.gamewidth, this.gameheigth, score);
        this.spawner = spawner;

        this.image = document.getElementById("img_pointer");

        this.size = 25;

        this.position = {
            x: 0,
            y: 0,
        };
        this.fruitlist = this.spawner.Getlist();
    }

    draw(ctx, xpos, ypos){
        this.position.x = this.gamewidth - xpos;
        this.position.y = ypos;

        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    detectcollision(){
        //get the pointer object
        let pointerobject = {x: this.position.x, y: this.position.y, size: this.size, width: this.size, heigth: this.size};

        for(let i = 0; i < this.fruitlist.length; i++){
            //get the fruitobject
            let fruitobject = this.fruitlist[i].instance.GetObject();
            //detect if there is a collision between the two
            let index = this.fruitlist.indexOf(this.fruitlist[i]);
            this.collision.Detection(pointerobject, fruitobject, index, this.spawner);
        }
    }
}