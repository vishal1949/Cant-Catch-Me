function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

class Ghost {
    constructor(){
        this.icon = new Image();
        this.icon.src = "img/ghost.jpg";
        this.xpos = getRandomInt(550);
        this.ypos = getRandomInt(350);
        this.velX = getRandomInt(7);
        this.velY = getRandomInt(7);
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
        // let radius = 10;
        this.xpos += this.velX;
        this.ypos += this.velY;
        if (this.xpos + this.radius > 800 || this.xpos < 3) {
            this.velX *= -1;
        }
        if (this.ypos + this.radius > 500 || this.ypos < 3) {
            this.velY *= -1;
        }
    }
}

module.exports = Ghost;

 