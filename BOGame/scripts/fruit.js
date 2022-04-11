export default class Fruit{
    constructor(gamewidth, gameheigth){
        this.gamewidth = gamewidth;
        this.gameheigth = gameheigth;

        this.pos = {
            x:0,
            y:0,
        };
        this.dropspeed = 1;

        this.size = 100;
        this.image;
        this.images = [
            document.getElementById("img_apple"),
            document.getElementById("img_banana"),
            document.getElementById("img_greenapple"),
            document.getElementById("img_mango"),
            document.getElementById("img_pineapple"),
            document.getElementById("img_watermelon")
        ];
    }

    SetImage(){
        //loop thru the images and grab a random one
        let arraylength = this.images.length;
        let random = Math.floor(Math.random() * arraylength);
        
        for(let i = 0; i < arraylength; i ++){
            if(i == random){
                this.image = this.images[i];
            }
        }
        return 0;
    }
    
    CheckBottomCol(){
        if(this.pos.y + this.size > this.gameheigth){
            return true;
        }
        return false;
    }

    draw(ctx, xpos){
        //draw the image on a random pos
        this.pos.x = xpos;
        ctx.drawImage(this.image, this.pos.x,this.pos.y, this.size, this.size);
    }
    Update(deltaTime){
        //update once per frame
        this.pos.y += this.dropspeed;
    }

    GetObject(){
        //the fruit object
        let object = {x: this.pos.x, y: this.pos.y, size: this.size, width: this.size, height: this.size};
        return object;
    }
    

}