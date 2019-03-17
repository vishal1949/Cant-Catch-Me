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
            startHeight: this.startHeight+3, //3
            maxWidth: this.width-28, //772
            maxHeight: this.height-18, //482
        }

        let g = new Ghost(this.dimensions);
        let g2 = new Ghost(this.dimensions);
        let g3 = new Ghost(this.dimensions);


        let laser = new Laser('vertical', ctx);
        let laser2 = new Laser('horizontal', ctx); //horizontal

        let ghosts = [g, g2, g3];
        this.lasers = [laser, laser2];

        this.drawGhost = this.drawGhost.bind(this);
        this.drawLaser = this.drawLaser.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);

        this.drawGhost(ghosts);
        
    }

    updateDimensions(newDimension){
        if(this.dimensions[maxHeight] < newDimension[maxHeight]){
            this.dimensions[maxHeight] = newDimension[maxHeight];
        }
        if(this.dimensions[maxWidth] < newDimension[maxWidth]){
            this.dimensions[maxWidth] = newDimension[maxWidth];
        }
        
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
            ghostArray[i].dimensions = this.dimensions;
        }
    }

    drawLaser(lasers){
        for (let i = 0; i < lasers.length; i++) {
            ctx.drawImage(lasers[i].icon, lasers[i].xpos, lasers[i].ypos, 55, 40)
            lasers[i].move();
            let laserDirection = lasers[i].whichLaserShoots();
            // debugger
            if (laserDirection === 'vertical'){
                // this.updateDimensions(lasers[0].laserArray[lasers[0].laserArray.length - 1].returnValues())
                let newDimension = lasers[0].laserArray[lasers[0].laserArray.length - 1].returnValues();
                console.log(this.dimensions);
                debugger
                if (this.dimensions.maxHeight > newDimension.maxHeight) {
                    this.dimensions.maxHeight = newDimension.maxHeight;
                    console.log(this.dimensions);
                }
            } else if(laserDirection === 'horizontal'){
                // this.updateDimensions(lasers[1].laserArray[lasers[1].laserArray.length - 1].returnValues())
                let newDimension = lasers[1].laserArray[lasers[1].laserArray.length - 1].returnValues();
                if (this.dimensions.maxWidth > newDimension.maxWidth) {
                    this.dimensions.maxWidth = newDimension.maxWidth;
                }
            }
        }
    }
}

module.exports = Game;