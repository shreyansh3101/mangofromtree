class Mango{
constructor(x,y,width,height){
var options={
isStatic:true,
friction:1,
restitution:0


}
this.body=Bodies.rectangle(x,y,width,height,options)
this.Mango=loadImage("img/Plucking mangoes/mango.png")
World.add(world,this.body)

}

display(){
push()
var pos=this.body.position
image(this.Mango,pos.x,pos.y,40,40)
pop()

}








}