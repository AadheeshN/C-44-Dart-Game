class Dart {
    constructor(x, y, width, height) {
        var options = {
         isStatic: true,   
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);

        this.image = loadImage("assets/dartImage.jpg");
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}