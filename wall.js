class WALL {

    constructor(x, y, w, h) {
        var prop = { isStatic: true }
        this.body = Matter.Bodies.rectangle(x, y, w, h,prop);
        Matter.World.add(world,this.body);
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }

    display() {
        fill("red");
        rect(this.body.position.x, this.body.position.y, this.height, this.width);
    }

}
