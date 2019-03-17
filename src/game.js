const Ghost = require('./ghosts');
const ctx = document.getElementById("game-canvas").getContext('2d');
const Laser = require('./laser');

class Game {
    constructor(){

        this.startWidth = 0;
        this.startHeight = 0;
        this.width = 800;
        this.height = 500;
        this.dimensions = {
            startWidth: this.startWidth+3, //3
            maxWidth: this.width-28, //772
            startHeight: this.startHeight+3, //3
            maxHeight: this.height-18, //482
        }

        let g = new Ghost(this.dimensions);
        let g2 = new Ghost(this.dimensions);
        let g3 = new Ghost(this.dimensions);


        let laser = new Laser('vertical', ctx);
        let laser2 = new Laser('asdf', ctx); //horizontal

        let ghosts = [g, g2, g3];
        this.lasers = [laser, laser2];

        this.drawGhost = this.drawGhost.bind(this);
        this.drawLaser = this.drawLaser.bind(this);
        this.drawGhost(ghosts);
        
    }

    drawGhost(ghostArray) {
        requestAnimationFrame(() => {
            ctx.clearRect(this.startWidth, this.startHeight, this.width, this.height);
            this.drawGhost(ghostArray);
            this.drawLaser(this.lasers);
            if (this.lasers[0].laserArray.length > 0) this.lasers[0].drawLaser();
            if (this.lasers[1].laserArray.length > 0) this.lasers[1].drawLaser();
        });
        for (let i = 0; i < ghostArray.length; i++) {
            ctx.drawImage(ghostArray[i].icon, ghostArray[i].xpos, ghostArray[i].ypos, ghostArray[i].radius, ghostArray[i].radius )
            ghostArray[i].moveDirection();
            ghostArray[i].dimensions = this.dimensions
            // if(i === 2){
            //     ghostArray[i].dimensions = {
            //         startWidth: 50, //3
            //         maxWidth: 600, //772
            //         startHeight: 50, //3
            //         maxHeight: 400, //482
            //     }
            // }
        }
    }

    drawLaser(laserArray){
        for (let i = 0; i < laserArray.length; i++) {
            ctx.drawImage(laserArray[i].icon, laserArray[i].xpos, laserArray[i].ypos, 55, 40)
            laserArray[i].move();
            laserArray[i].whichLaserShoots();
            if(laserArray.length > 0) this.dimensions = laserArray[i].laserArray[laserArray.length-1].returnValues();
            debugger
        }
    }
}

module.exports = Game;