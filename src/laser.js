

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

    move(direction){
        switch(direction){
            case 'vertical': moveVertical();
            case 'horizontal': moveHorizontal();
            default: return null;
        }
    }

    moveHorizontal(){
        if (key.left) { //&& this.xpos > 0
            this.xpos -= 5;
        }else{
            this.xpos +=5
        }
        //does soemthing
    }

    moveVertical(){
        if (key.down) { //&& this.xpos > 0
            this.ypos -= 5;
        } else {
            this.ypos += 5
        }
    }
}

module.exports = Laser;