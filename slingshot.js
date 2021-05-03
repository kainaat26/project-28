class SlingShot {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness : 0.009
              
        }

        this.pointB = pointB;
        this.slingshot = Constraint.create(options);
    World.add(world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null;
    }
  attach(body){
 this.slingshot.bodyA = body;
  }
    
    display(){
        if(this.slingshot.bodyA){
        var ptA = this.slingshot.bodyA.position;
        var ptB = this.pointB;
        strokeWeight(3);
        line(ptA.x,ptA.y,ptB.x,ptB.y);
        }
    }
}