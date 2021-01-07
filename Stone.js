class Stone{
constructor(x,y,width,height){
var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2

}

this.body=Bodies.rectangle(x,y,width,height,options)
this.Stone=loadImage("img/Plucking mangoes/stone.png")
World.add(world,this.body)
}

display(){

var pos=this.body.position
image(this.Stone,pos.x,pos.y,30,30)

}

    
}