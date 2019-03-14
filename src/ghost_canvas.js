// let xpos = 300;
// let ypos = 300;

let xpos = getRandomInt(550);
let ypos = getRandomInt(350);
let velX = getRandomInt(5);
let velY = getRandomInt(5);
if(velY === 0 || velX === 0){
    velY++;
    velX++;
}

function drawCircleGhost(xpos, ypos, radius){
    let c = document.getElementById("game-canvas");
    let ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(xpos, ypos, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function moveDirection(){
    let radius = 10;
    let c = document.getElementById("game-canvas");
    let ctx = c.getContext('2d');
    ctx.clearRect(0, 0, 600, 400);
    drawCircleGhost(xpos, ypos, radius);
    xpos += velX;
    ypos += velY;
    if (xpos + radius > 600 || xpos - radius < 0) {
        velX *= -1;
    }
    if (ypos + radius > 400 || ypos - radius < 0) {
        velY *= -1;
    }
    requestAnimationFrame(() => moveDirection());
}



module.exports = drawCircleGhost;
module.exports = moveDirection;
