constructor(body1,body2, offsetX, offsetY)
{
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={
        bodyA:body1
        bodyB:body2
        pointB{X:this.offsetX, y:this.offset:Y}
    }
    //console.log(options);
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
}

rope1=new rope(bobObject1.body, roofObject.body, -bobDiameter 2,0)

display()
{
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;

    strokeWeight(2);

    var AnchorIX=pointA.X
    var AnchorIY=pointA.y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2X=pointB.y+this.offsetY
}