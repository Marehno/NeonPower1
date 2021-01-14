class Auto {
    constructor() {
        this.x = 500;
        this.y = 846;
        this.width = 87;
        this.height = 178;
    }

    update() {
        if (this.x > 832){
            this.x = 832;
        }
        if (this.x < 448){
            this.x = 448;
        }
        if (aPressed) this.moveLeft();
        if (dPressed) this.moveRight();
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.x -=5;
    }
    moveRight() {
        this.x +=5;
    }
}
const auto = new Auto();


