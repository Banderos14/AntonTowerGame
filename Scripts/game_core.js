
let game = {}

let previousTime = 0.0;

function start() {
    game.canvas = document.getElementById('game-canvas');
    game.context = game.canvas.getContext('2d');
   

    window.requestAnimationFrame(time => {
        previousTime = time;
      
        window.requestAnimationFrame(loop);
      });  
}

function loop(time) {

 // Compute the delta-time against the previous time
 const dt = time - previousTime;

 // Update the previous time
 previousTime = time;

 // Update your game
 update(dt);

 // Render your game
 render();

 // Repeat
 window.requestAnimationFrame(loop);
}

function render() {
    // Exit if game is not initialized.
    if (game == undefined || game.context == undefined) return;

    game.context.clearRect(0, 0,  game.context.canvas.width,  game.context.canvas.height);

    game.context.fillStyle = "#ff00ff";
    game.context.fillRect(0, 0,  game.context.canvas.width,  game.context.canvas.height);
    
    // set the canvas origin (0,0) to center canvas
    // All coordinates to the left of center canvas are negative
    // All coordinates below center canvas are negative
    game.context.translate( game.context.canvas.width/2, game.context.canvas.height/2);

    game.context.font = "24px serif";
    game.context.fillStyle = "red";
    game.context.fillText(game.fps, 0, 0);
}

function update(dt){
    game.fps = Math.floor(Math.random() * 1000);
}