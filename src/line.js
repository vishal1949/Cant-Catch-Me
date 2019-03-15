class Line {
    constructor(x, y , direction, ctx){
        this.xpos = x;
        this.ypos = y;
        this.direction = direction;
        this.ctx = ctx;

        this.drawLine = this.drawLine.bind(this);

        // this.drawLine();
    }

    drawLine(){
        if (this.direction === 'horizontal') { //horizontal
            this.ctx.beginPath();
            this.ctx.moveTo(this.xpos + 29, this.ypos);
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = "3";
            this.ctx.lineTo(this.xpos + 29, 0);
            this.ctx.stroke();
        } else if (this.direction === 'vertical') {
            this.ctx.beginPath();
            this.ctx.moveTo(this.xpos, this.ypos + 20);
            this.ctx.strokeStyle = "black";
            this.ctx.lineWidth = "3";
            this.ctx.lineTo(0, this.ypos + 20);
            this.ctx.stroke();
        }
    }
}

module.exports = Line;