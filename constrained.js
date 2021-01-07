class con{

constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.01,
length:0.5
}
this.pointB=pointB
this.chain=Constraint.create(options)
World.add(world,this.chain)


}

fly(){

this.chain.bodyA=null


}
display(){
    push()
var pointA=this.chain.bodyA.position
var pointB=this.pointB
stroke(0)
line(pointA.x,pointA.y,pointB.x,pointB.y)
pop()

}


}