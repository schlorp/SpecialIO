export default class Collision{

    constructor(gamewidth, gameheight, score){
        this.gamewidth = gamewidth;
        this.gameheight = gameheight;
        this.score = score;

    }


    Detection(pointer, image, index, spawner){
        //detect if collision is possible
       if(pointer.x > image.x + image.width||
          pointer.x + pointer.width < image.x || 
          pointer.y > image.y + image.width||
          pointer.y + pointer.heigth < image.y
        ){
            //no collision
        }
        else{
            //on collision
            spawner.fruitlist.splice(index, 1);
            this.score.SetPoints(10);
        }
    }
}