let characterX = 300;    //start character about 1/3 from left edge of window
let characterY = canvas.height - 80; //character height is 25.  ground is 80 
const characterWidth = 25;
const characterHeight = 20;
//draw character at initial position
function drawCharacter(ctx) {
    ctx.fillStyle = "#000000"; //black
    ctx.fillRect(characterX, characterY, characterWidth, characterHeight); //locationX, locationY, width, height
}

let spacePressed = false;
let lastSpacePressTime = 0;
const spacePressThreshold = 1.5;


function updateCharacter() {
    if (characterY < canvas.height-75) {  //stop gravity effect once character is on the ground
        if (spacePressed && (Date.now() - lastSpacePressTime) <= (1000 / spacePressThreshold)) {
            characterY -= 1.5;  //falling doesn't happen but lifting can still happen from the ground
        }
        else {
            characterY += .3;   //character falling rate
        }
    }
    else {   //lift on spacepress
       if (spacePressed && (Date.now() - lastSpacePressTime) <= (1000 / spacePressThreshold)) {
            characterY -= 1.5;  //lift on spacebar press
       }
    }
}

//character
document.addEventListener("DOMContentLoaded", function () {

    let displayInterval;
    let displayIntervalRunning = false;

    function startDisplayInterval() {
        if (!displayInterval) {
            displayInterval = setInterval(displayHr, 3000);
            displayIntervalRunning = true;
        }
    }
    function stopDisplayInterval() {
        clearInterval(displayInterval);
        displayIntervalRunning = false;
    }

    drawCharacter(ctx);


    updateCharacter();
    
    // Event listener for keydown event (detect space bar press)
    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            spacePressed = true;
            lastSpacePressTime = Date.now();
            spaceBarPresses.push(lastSpacePressTime);
            stopDisplayInterval();
        }
    });

    // Event listener for keyup event (detect space bar release)
    document.addEventListener("keyup", function (event) {
        if (event.code === "Space") {
            spacePressed = false;
            startDisplayInterval();
        }
    });
});

