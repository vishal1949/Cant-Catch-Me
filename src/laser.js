

class Laser {
    constructor(direction){
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

        this.move()
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
        if (window.keysdown[37] || window.keysdown[65] ) { //&& this.xpos > 0
            this.xpos -= 5;
        } else if (window.keysdown[39] ||  window.keysdown[68]){
            this.xpos +=5
        }
        console.log(`horizontal xpos: ${this.xpos}`)
        //does soemthing
    }

    moveVertical(){
        if (window.keysdown[38] || window.keysdown[87]) { //&& this.xpos > 0
            this.ypos -= 5;
        } else if (window.keysdown[40] || window.keysdown[83]) {
            this.ypos += 5
        }
        console.log(`vertical xpos: ${this.ypos}`)
    }

    shootLaser(){
        
    }
}

module.exports = Laser;