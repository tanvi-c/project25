class ComputerArcher {
    constructor (x, y, width, height) {

        var options = {
            isStatic: true
        }
  
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("./assets/computerArcher.png");
  
      World.add(world, this.body);
      Matter.Body.setAngle(this.body, -PI/2);
    }
  
    display() {

      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      rotate(1.7);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
  
      pop();
    }
  }
  