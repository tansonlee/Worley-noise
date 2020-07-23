class Particle {
    constructor(x, y) {
        this.xoff = random(1000000);
        this.yoff = random(1000000);
        this.x = noise(this.xoff)*width;
        this.y = noise(this.yoff)*height;
        this.r = 8;
    }

    show() {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r, this.r);
    }

    move() {
        this.xoff += 0.005;
        this.yoff += 0.005;
        this.x = noise(this.xoff)*width;
        this.y = noise(this.yoff)*height;
    }
}