class SlingShot{
    constructor(bodyA, pointB){
        var option = {
          bodyA : bodyA,
          pointB : pointB,
          stiffness : 0.04,
          length : 10
        }
    this.pointB = pointB;
    this.body = Constraint.create(option);
    World.add(world, this.body);
    }

    fly(){
     this.body.bodyA = null;
    }

    display(){
     if(this.body.bodyA){
      var pointB = this.pointB;
      strokeWeight(2);
      line(this.body.bodyA.position.x, this.body.bodyA.position.y, pointB.x, pointB.y);
     }
    }
}