function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

class Ghost {
    constructor(dimensions){
        this.icon = new Image();
        this.icon.src = "img/ghost.jpg";
        this.xpos = getRandomInt(650);
        this.ypos = getRandomInt(450);
        this.dimensions = dimensions;
        let v = getRandomInt(3)
        if(v === 2){
            this.velX = 7
            this.velY = -7;
        }else if(v === 1){
            this.velX = -6;
            this.velY = 7;
        }else{
            this.velX = -7;
            this.velY = -8;
        }
        let r = getRandomInt(3);
        if(r === 1){
            this.radius = 20;
        }else if(r === 2){
            this.radius = 35;
        }else{
            this.radius = 50;
        }
        this.ctx = document.getElementById("game-canvas").getContext('2d');
        this.moveDirection = this.moveDirection.bind(this);
    }

    
    moveDirection() {
        this.xpos += this.velX;
        this.ypos += this.velY;
        if((this.xpos + this.radius) > this.dimensions.maxWidth || this.xpos < this.dimensions.startWidth){
            this.velX *= -1;
        }
        if((this.ypos + this.radius) > this.dimensions.maxHeight || this.ypos < this.dimensions.startHeight){
            this.velY *= -1;
        }
    }
}

module.exports = Ghost;


 