let detections = {};
import Box from "./box.js";
let box = new Box(1280, 720);
let xpos;
let ypos;
export default class Tracking {
    constructor(){
      this.x = xpos;
      this.y = ypos;
    }
    
    
    track(){
        const videoElement = document.getElementsByClassName('input_video')[0];
        //const canvasElement = document.getElementsByClassName('output_canvas')[0];
        //const canvasCtx = canvasElement.getContext('2d');
        const canvas = document.getElementById("Gamescreen");
        const ctx = canvas.getContext('2d');
        
        function gotHands(results) {
          detections = results;
          if (detections.multiHandLandmarks[0]) {
            let x = detections.multiHandLandmarks[0][8].x * 1280
            let y = detections.multiHandLandmarks[0][8].y * 720
            box.draw(ctx,parseInt(x),parseInt(y),1,1);
            xpos = detections.multiHandLandmarks[0][8].x;
          }
         
          // for(let i = 0; i < detections.multiHandLandmarks.length; i++){
          
          //   for(let j = 0; j < detections.multiHandLandmarks[i].length; j++){
          //     xpos = detections.multiHandLandmarks[i][j].x * 1280;
          //     ypos = detections.multiHandLandmarks[i][j].y * 720;
          //     box.draw(ctx,parseInt(xpos),parseInt(ypos),1,1);
          //     //console.log(parseInt(xpos), parseInt(ypos));
          //   }
          // }
        }
        





        //essential for tracking(getting the camera and grabbing the hand position from there)
        const hands = new Hands({locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
        }});
        hands.setOptions({
          maxNumHands: 1,
          modelComplexity: 0,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });
        hands.onResults(gotHands);
        
        const camera = new Camera(videoElement, {
          onFrame: async () => {
            await hands.send({image: videoElement});
          },
          width: 1280,
          height: 720
        });
        camera.start();
    }
}