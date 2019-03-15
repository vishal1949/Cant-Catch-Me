const Ghost = require('./ghosts');
const ctx = document.getElementById("game-canvas").getContext('2d');
const Laser = require('./laser');

class Game {
    constructor(){
        let g = new Ghost(ctx);
        let g2 = new Ghost(ctx);
        let g3 = new Ghost(ctx);

        let laser = new Laser('vertical');
        let laser2 = new Laser('asdf');

        let ghosts = [g, g2, g3];
        let lasers = [laser, laser2];

        this.drawGhost = this.drawGhost.bind(this);
        // this.drawLaser = this.drawLaser.bind(this);

        this.drawGhost(ghosts, lasers);
        // this.drawLaser(lasers);
        
    }
    drawGhost(ghostArray, laserArray) {
        requestAnimationFrame(() => {
            ctx.clearRect(0, 0, 800, 500);
            this.drawGhost(ghostArray, laserArray)
        });
        for (let i = 0; i < ghostArray.length; i++) {
            ctx.drawImage(ghostArray[i].icon, ghostArray[i].xpos, ghostArray[i].ypos, ghostArray[i].radius, ghostArray[i].radius )
            ghostArray[i].moveDirection();
        }
        for (let i = 0; i < laserArray.length; i++) {
            ctx.drawImage(laserArray[i].icon, laserArray[i].xpos, laserArray[i].ypos, 55, 40)
        }
    }
}

module.exports = Game;