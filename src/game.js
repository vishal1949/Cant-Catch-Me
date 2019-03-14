const Ghost = require('./ghosts');
const ctx = document.getElementById("game-canvas").getContext('2d');

class Game {
    constructor(){
        let g = new Ghost(ctx);
        let g2 = new Ghost(ctx);
        let g3 = new Ghost(ctx);
        let ghosts = [g, g2, g3];
        this.drawGhost = this.drawGhost.bind(this);
        this.drawGhost(ghosts)
    }
    drawGhost(ghostArray) {
        requestAnimationFrame(() => {
            ctx.clearRect(0, 0, 800, 500);
            this.drawGhost(ghostArray)
        });
        for (let i = 0; i < ghostArray.length; i++) {
            ctx.drawImage(ghostArray[i].icon, ghostArray[i].xpos, ghostArray[i].ypos, ghostArray[i].radius, ghostArray[i].radius )
            ghostArray[i].moveDirection();
        }
    }
}

module.exports = Game;