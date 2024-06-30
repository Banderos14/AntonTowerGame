function startGame(){
    $("#start-button").css("display","none");
    $("#game-canvas").css("display","block");
    var canvas = document.getElementById( "game-canvas" );
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    start();
}