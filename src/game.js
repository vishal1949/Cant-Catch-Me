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
        this.winner = null;

        let g = new Ghost(this.dimensions);
        let g2 = new Ghost(this.dimensions);
        let g3 = new Ghost(this.dimensions);


        let laser = new Laser('vertical', ctx);
        let laser2 = new Laser('horizontal', ctx); //horizontal

        this.ghosts = [g, g2, g3];
        this.lasers = [laser, laser2];

        this.drawGhost = this.drawGhost.bind(this);
        this.drawLaser = this.drawLaser.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.areaCalculator = this.areaCalculator.bind(this);
        this.locateGhost = this.locateGhost.bind(this);
        this.wait = this.wait.bind(this);

        this.drawGhost(this.ghosts);
        
    }


    locateGhost(){
        for(let i = 0; i < this.ghosts.length; i++){
            if(this.ghosts[i].xpos > this.dimensions.maxWidth){
                this.ghosts[i].xpos = 1000;
            }
            if(this.ghosts[i].ypos > this.dimensions.maxWidth){
                this.ghosts.ypos = 1000;
            }
        }
    }


    areaCalculator(){
        let area;
        area = this.dimensions.maxHeight * this.dimensions.maxWidth;
        return area;
    }

    gameOver(){
        let area = this.areaCalculator();
        if(
            (this.ghosts[0].xpos >= 950 || this.ghosts[0].ypos >= 950) &&
            (this.ghosts[1].xpos >= 950 || this.ghosts[1].ypos >= 950) &&
            (this.ghosts[2].xpos >= 950 || this.ghosts[2].ypos >= 950)
        ){
            alert(`YOU LOSE! Better luck next time. Your score is ${this.areaCalculator()}`);
            this.winner = false;
        }
        if(area < 15000){
            this.wait(2000);
            alert(`YOU WIN! Your score is ${this.areaCalculator()}`);
            this.winner = true;
        } 
        
    }

    wait(time) { //in seconds
    var start = new Date().getTime();
    var end = start;
    while (end < start + time) {
        end = new Date().getTime();
    }
}

    drawGhost(ghostArray) {
        if (this.winner === true || this.winner === false) return null;
        requestAnimationFrame(() => {
            ctx.clearRect(this.startWidth, this.startHeight, this.width, this.height);
            this.drawGhost(ghostArray);
            this.drawLaser(this.lasers);
            if (this.lasers[0].laserArray.length > 0) this.lasers[0].drawLaser();
            if (this.lasers[1].laserArray.length > 0) this.lasers[1].drawLaser();
            this.gameOver();
            this.locateGhost();
            
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
                let newDimension = lasers[0].laserArray[lasers[0].laserArray.length - 1].returnValues();
                if (this.dimensions.maxHeight > newDimension.maxHeight) {
                    this.dimensions.maxHeight = newDimension.maxHeight+20;
                }
            } else if(laserDirection === 'horizontal'){
                let newDimension;
                if (lasers[1].laserArray[lasers[1].laserArray.length - 1] !== undefined){
                    newDimension = lasers[1].laserArray[lasers[1].laserArray.length - 1].returnValues();
                    if (this.dimensions.maxWidth > newDimension.maxWidth) {
                        this.dimensions.maxWidth = newDimension.maxWidth+25;
                    }
                }
            }
        }
    }
}

module.exports = Game;