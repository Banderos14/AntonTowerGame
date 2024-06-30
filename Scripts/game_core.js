
let game = {}

let previousTime = 0.0;

function start() {
    game.canvas = document.getElementById('game-canvas');
    game.context = game.canvas.getContext('2d');
    
    //game.context.setTransform(1, 0, 0, 1, game.canvas.width / 2, game.canvas.height / 2);   
    game.context.translate(game.canvas.width/2, game.canvas.height/2);

    game.objects = [];

    var player = new Player(new Point(0,0));
    game.objects.push(player);

    game.wave = new Wave();

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

    // Clear background
    game.context.clearRect(-game.context.canvas.width / 2, -game.context.canvas.height / 2,  game.context.canvas.width,  game.context.canvas.height);

    // Render FPS stats in top left corner.
    game.context.font = "24px fantasy";
    game.context.fillStyle = "red";
    game.context.shadowColor = DEFAULT_SHADOW_COLOR;
    game.context.shadowBlur = DEFAULT_SHADOW_BLUR;
    game.context.fillText(game.fps, -game.context.canvas.width / 2 + 8, -game.context.canvas.height / 2 + 32);

    // Render all objects
    game.objects.forEach(obj => obj.draw(game.context));
}

function update(dt){
    // Calculate frame rate.
    game.fps = (1000/dt).toFixed(0); 

    // Update Wave
    game.wave.update(dt, game);

    // Update all objects
    game.objects.forEach(obj => obj.update(dt));

    game.objects = game.objects.filter(obj => !obj.isDestroyed)
}