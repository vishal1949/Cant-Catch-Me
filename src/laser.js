

class Laser {
    constructor(direction){
        
        this.icon = new Image();
        if(direction === 'vertical'){
            this.icon.src = "img/sidwaysarrow.jpg";
            this.xpos = 775;
            this.ypos = 460;
        }else{
            this.icon.src = "img/arrow.png";
            this.xpos = 750;
            this.ypos = 480;
        }
    }
}

module.exports = Laser;