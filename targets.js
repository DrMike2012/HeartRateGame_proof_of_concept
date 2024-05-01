//targets



let targetX = 800;    //start character about 1/3 from left edge of window
let targetY = 710;

const TARGET_WIDTH = 200;
const TARGET_HEIGHT = 10;
const TARGET_SPEED = .5;

function newTarget(ctx) {
drawTarget(ctx);
updateTarget(ctx);

if (targetX <= 100){

    targetX = 900;
    targetY -= 50;
}

}


function drawTarget(ctx) {
    ctx.fillStyle = "#ff0000"; //red
    ctx.fillRect(targetX, targetY, TARGET_WIDTH, TARGET_HEIGHT); //locationX, locationY, width, height
    ctx.fillStyle = "#000000"; //black
    ctx.fillText( 790 - targetY + "BPM", targetX + 10, targetY + 12)
}

function updateTarget(ctx) {
    targetX -= TARGET_SPEED;
}




//100 BPM target
// function drawTarget100(ctx) {
//     ctx.fillStyle = "#ff0000"; //red
//     ctx.fillRect(targetX +800, targetY-60, TARGET_WIDTH, TARGET_HEIGHT); //locationX, locationY, width, height
//     ctx.fillStyle = "#000000"; //black
//     ctx.fillText("140 BPM", targetX + 800, targetY -60 )
// }

// function updateTarget100(ctx) {
//     targetX -= TARGET_SPEED;
// }