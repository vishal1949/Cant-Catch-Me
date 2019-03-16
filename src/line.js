class Line {
    constructor(x, y , direction, ctx){
        this.xpos = x;
        this.ypos = y;
        this.lastPosX = 0;
        this.lastPosY = 0;
        this.direction = direction;
        this.ctx = ctx;
        this.finalY = this.ypos; //Used for animating line
        this.finalX = this.xpos; //Used for animating line
        this.drawLine = this.drawLine.bind(this);
    }

    drawLine(){
        if (this.direction === 'horizontal') { //draws line vertical
            this.ctx.beginPath();
            this.ctx.moveTo(this.xpos + 29, this.ypos + 2);
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = "3";
            this.ctx.lineTo(this.xpos + 29, this.finalY);
            this.ctx.stroke();
            this.ctx.closePath();
            if(this.finalY > this.lastPosY){
                this.finalY -= 5;
            } else{
                this.lastPosY = this.finalY;
            }
        } else if (this.direction === 'vertical') { //draws line horizontal 
            this.ctx.beginPath();
            this.ctx.moveTo(this.xpos+3, this.ypos + 20);
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = "3";
            this.ctx.lineTo(this.finalX, this.ypos + 20);
            this.ctx.stroke();
            if (this.finalX > this.lastPosX){
                this.finalX -= 5;
            } else {
                this.lastPosX = this.finalX;
            }
        }
    }

    returnValues(){
        return{
            startWidth: this.lastPosX,
            maxWidth: this.xpos, //772
            startHeight: this.lastPosY, //3
            maxHeight: this.ypos, //482
        }
    }
}

module.exports = Line;