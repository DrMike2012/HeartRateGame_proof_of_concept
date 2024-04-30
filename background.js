//background
document.addEventListener("DOMContentLoaded", function() {

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const GROUND_HEIGHT = canvas.height - 740;

//export the drawBackground function
window.drawBackground = drawBackground;
});

//background color white
function drawBackground(){
    ctx.fillStyle = "#FFFFFF"; 
    ctx.fillRect(0,0, canvas.clientWidth, canvas.height);  //white screen
    
    ctx.fillStyle = "#00BABA"; 
    ctx.fillRect(0,canvas.height-60, canvas.clientWidth, canvas.height - 740);   //teal ground
}