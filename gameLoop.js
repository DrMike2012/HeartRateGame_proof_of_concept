//const { updateScore } = require('./scoring.js');  //COMMENTED 428

startDisplay(ctx, 0);  //added 428

//main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    //draw background  -- call from background.js
    drawBackground();
   // drawTarget(ctx);
  //  updateTarget(ctx);
  
   newTarget(ctx);
    drawCharacter(ctx);
    updateCharacter();

    displayHr(ctx); //ADDED BACK 428


    const score = updateScore(characterX, characterY, targetX, targetY);  // ADDED 428
    displayScore(ctx, score);


    //request next frame
    requestAnimationFrame(gameLoop);

}
//start game loop
gameLoop();

