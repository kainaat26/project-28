class Stone {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution: 0,
          friction:0,
          density:0.5
          
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("stone.png");
      World.add(world,this.body);
    }

    display(){
      push();
      fill("white");
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,30,30);
      pop();
    }
   }