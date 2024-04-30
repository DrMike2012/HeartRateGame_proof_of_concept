// create points variable
// add to points variable when characterx 

//create an array of values that represents characters current x position plus character width
// create additional arrays to represent characters position and vertical window and target horizontal and vertical windows
//create a for loop that iterates thru all the arrays
//any time arrays overlap in both x and y, player scores points at 1 point per second.  any time x values overlap but y does not, player loses points at 1 point per second

// Calculate dynamic window size for collision detection
const windowWidth = Math.max(characterWidth, TARGET_WIDTH);
const windowHeight = Math.max(characterHeight, TARGET_HEIGHT);

// Initialize player's score
let score = 0;

// Update score based on collisions
function updateScore(characterX, characterY, targetX, targetY) {
    // Calculate the boundaries of the character and target windows
    const characterLeft = characterX;
    const characterRight = characterX + characterWidth;
    const characterTop = characterY - characterHeight / 2;
    const characterBottom = characterY + characterHeight / 2;

    const targetLeft = targetX;
    const targetRight = targetX + TARGET_WIDTH 
    const targetTop = targetY - TARGET_HEIGHT / 2;
    const targetBottom = targetY + TARGET_HEIGHT / 2;

    // Check if character's window overlaps with target's window
    const xCollision = characterRight >= targetLeft && characterLeft <= targetRight;
    const yCollision = characterBottom >= targetTop && characterTop <= targetBottom;

    if (xCollision && yCollision) {
        // Collision detected, player scores points
        score += 1; // Increase score
    } else if (xCollision) {
        // Only x values overlap, player loses points
        score -= 1; // Decrease score
    }

    return score;
}


