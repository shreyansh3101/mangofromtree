class tree{
constructor(x,y,width,height){
var options={

isStatic:true,


}
this.body=Bodies.rectangle(x,y,width,height,options)
this.image=loadImage("img/Plucking mangoes/tree.png")
World.add(world,this.body)


}

display(){
var pos=this.body.position

image(this.image,pos.x,pos.y,400,400)



}





}