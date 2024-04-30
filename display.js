
let spaceBarPresses = [];
function calculateHeartRate() {  //calculate HR in 3 second increments
    const currentTime = Date.now();
    const hRateWindowTime = currentTime - 3000;  //three seconds ago

    const currentHrPresses = spaceBarPresses.filter(timestamp => timestamp >= hRateWindowTime);
    const heartRate = (currentHrPresses.length / 5) * 60;

    return Math.round(heartRate);
}

function displayHr(ctx) {
    const heartRate = calculateHeartRate();
    ctx.clearRect(0, 0, canvas.width, 50);
    ctx.fillStyle = "#000000"; // Black color
    ctx.font = "20px Arial"; // Font style and size
    ctx.fillText(`Heart Rate: ${heartRate} BPM`, 20, 40); // Display heart rate at (20, 40)

  //  setTimeout(() => displayHr(ctx), 3000); //update display every 3 seconds
}

// function startDisplay(ctx){
// displayHr(ctx);
// }

window.calculateHeartRate = calculateHeartRate;
window.displayHr = displayHr;



//SCORING DISPLAY
function displayScore(ctx, score) {
    ctx.fillStyle = "#000000"; 
    ctx.font = "20px Arial"; 
    ctx.fillText(`Score: ${score}`, 300, 40); // Display score at (20, 70)
}


function startDisplay(ctx, score) {
    displayHr(ctx);
    displayScore(ctx, score);
}

// Export functions for use in other modules
window.calculateHeartRate = calculateHeartRate;
window.displayHr = displayHr;
window.displayScore = displayScore;
window.startDisplay = startDisplay;