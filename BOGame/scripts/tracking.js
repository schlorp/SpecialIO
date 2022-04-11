let detections = {};
export var xpos = 0;
export var ypos = 0;
export var camfound = false;
export var gothands = false;

export default class Tracking {
    constructor(){
    }
    
    track(){
        const videoElement = document.getElementsByClassName('input_video')[0];
        const canvas = document.getElementById("Gamescreen");
        const ctx = canvas.getContext('2d');
        
        function gotHands(results) {
          //indicating that the camera works and the tracking is running properly
          camfound = true;

          detections = results;
          if (detections.multiHandLandmarks[0]) {
            xpos = detections.multiHandLandmarks[0][8].x * 1280;
            ypos = detections.multiHandLandmarks[0][8].y * 720;
            gothands = true;
          }
          else{
            gothands = false;
          }
        }


        //essential for tracking(getting the camera and grabbing the hand position from there using the mediapipe machine learning model)
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