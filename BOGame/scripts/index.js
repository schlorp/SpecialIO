import Pointer from './pointer.js'
import Tracking from './tracking.js';
import {xpos,ypos,camfound,gothands} from './tracking.js';
import Spawner from './spawner.js';
import Score from './score.js';

let canvas = document.getElementById("Gamescreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;
const GAMESTATE = { 
    RUNNING: 0,
    MENU: 1,
    GAMEOVER: 2,
};

let score = new Score(GAME_WIDTH, GAME_HEIGHT, ctx);
let spawner = new Spawner(GAME_WIDTH, GAME_HEIGHT, ctx, score);
let pointer = new Pointer(GAME_WIDTH, GAME_HEIGHT, spawner, score);
let track = new Tracking();



//deltatime
var lastTime = 0;

//spanwtimer
var lastSpawn = -1;
var SpawnRate = 1500;


function gameLoop(timestamp){
    //the deltatime
    var deltaTime = timestamp - lastTime;
    lastTime = timestamp;


    //starts game if the camera is found and the tracking is running
    if(camfound){
        //spawntimer
        var Time = Date.now();
        if(Time >(lastSpawn + SpawnRate)){
            lastSpawn = Time;
            spawner.Spawn();
        }

        ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);

        spawner.Update();
        score.Draw(ctx); 
        if(gothands){
            pointer.detectcollision();
            pointer.draw(ctx,parseInt(xpos),parseInt(ypos)); 
        }
    }
    requestAnimationFrame(gameLoop);
}
track.track();

requestAnimationFrame(gameLoop);

