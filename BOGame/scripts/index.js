import Box from './box.js'
import Tracking from './tracking.js';

let canvas = document.getElementById("Gamescreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

let box = new Box(GAME_WIDTH, GAME_HEIGHT);
let track = new Tracking();

let lastTime = 0;

function gameLoop(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    
    
    //let xpos = track.xpos;
    //let ypos = track.ypos;
    
    //box.draw(ctx,parseInt(track.x),parseInt(track.y),1,1);
    

    requestAnimationFrame(gameLoop);
}
track.track();

requestAnimationFrame(gameLoop);

