import Pointer from './pointer.js'
import Tracking from './tracking.js';
import {xpos,ypos,camfound,gothands} from './tracking.js';
import Spawner from './spawner.js';
import Score from './score.js';
import Gamestate from './gamestatehandler.js';

let canvas = document.getElementById("Gamescreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let gamestatehandler = new Gamestate();
let score = new Score(GAME_WIDTH, GAME_HEIGHT, ctx);
let spawner = new Spawner(GAME_WIDTH, GAME_HEIGHT, ctx, score);
let pointer = new Pointer(GAME_WIDTH, GAME_HEIGHT, spawner, score);
let track = new Tracking();



//deltatime
var lastTime = 0;

//spanwtimer
var lastSpawn = -1;
var SpawnRate = 1500;

var ResetTime = 5000;
var StartReset = -1;

function gameLoop(timestamp){
    //the deltatime
    var deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    const gamestate = gamestatehandler.GetState();

    function Start(){
        gamestate = gamestate.RUNNING;
    }
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
        if(score.GetLives() <=  0){
            document.location.reload();
        }
    }
    /*
    if(gamestate.GAMEOVER){
        var Time = Date.now();

        ctx.fillRect(0,0, GAME_WIDTH, GAME_HEIGHT);
        ctx.ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();

        ctx.font = "30pox Arial";
        ctx.fillStyle = "white";
        ctx.texAlign ="center";
        ctx.fillText("GAME OVER IT WIL RESET IN A FEW SECONDS", GAME_WIDTH/2, GAME_HEIGHT/2)

        if(Time > (StartReset > ResetTime)){
            gamestate = gamestate.RUNNING;
        }
    }
    */
    requestAnimationFrame(gameLoop);
}
track.track();

requestAnimationFrame(gameLoop);

