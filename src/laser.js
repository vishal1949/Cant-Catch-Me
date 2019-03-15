

class Laser {
    constructor(direction, ctx){
        this.ctx = ctx;
        this.icon = new Image();
        if(direction === 'vertical'){
            this.direction = 'vertical'
            this.icon.src = "img/sidwaysarrow.jpg";
            this.xpos = 775;
            this.ypos = 460;
        }else{
            this.direction = 'horizontal'
            this.icon.src = "img/arrow.png";
            this.xpos = 750;
            this.ypos = 480;
        }

        this.move = this.move.bind(this);
        this.moveHorizontal = this.moveHorizontal.bind(this);
        this.moveVertical = this.moveVertical.bind(this);
        this.shootLaser = this.shootLaser.bind(this);
        this.drawLaser = this.drawLaser.bind(this);
        this.whichLaserShoots = this.whichLaserShoots.bind(this);
    }

    move(){
        switch(this.direction){
            case 'vertical': 
                this.moveVertical(); break;
            case 'horizontal': this.moveHorizontal(); break;
            default: return null; 
        }
    }

    moveHorizontal(){
        if (window.keysdown[37] || window.keysdown[65] ) { 
            if(this.xpos > -30) this.xpos -= 5;
        } else if (window.keysdown[39] ||  window.keysdown[68]){
            if(this.xpos < 750)this.xpos +=5
        }
    }

    moveVertical(){
        if (window.keysdown[38] || window.keysdown[87]) { 
            if(this.ypos > -20) this.ypos -= 5;
        } else if (window.keysdown[40] || window.keysdown[83]) {
            if(this.ypos < 460) this.ypos += 5
        }
    }

    whichLaserShoots(){
        if (75 in window.keysdown || 90 in window.keysdown) {
            this.shootLaser('horizontal');
        } else if (76 in window.keysdown || 88 in window.keysdown) {
            this.shootLaser('vertical');
        }
    }

    shootLaser(direction){
        if (window.keysdown[75] || window.keysdown[90]){ // k or z
            this.drawLaser(direction);
        } else if (window.keysdown[76] || window.keysdown[88]){ //L or x
            this.drawLaser(direction);
        }
    }

    drawLaser(direction){
        if(direction !== 'vertical'){
            this.ctx.beginPath();
            this.ctx.moveTo(this.xpos + 29, this.ypos);
            this.ctx.strokeStyle = "white";
            this.ctx.lineTo(this.xpos + 29, 0);
            this.ctx.stroke();
        }else if(direction === 'vertical') {
            this.ctx.beginPath();
            this.ctx.moveTo(this.xpos , this.ypos +20 ) ;
            this.ctx.strokeStyle = "white";
            this.ctx.lineTo(0, this.ypos + 20);
            this.ctx.stroke();
        }
    }
}

module.exports = Laser;