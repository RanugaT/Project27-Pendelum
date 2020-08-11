class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        console.log(body1,body2,this.offsetX,this.offsetY)
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    
    
    
    display(){
        //if(this.rope.bodyA){
         var pointA = this.rope.bodyA.position;
         var pointB = this.rope.bodyB.position;
         var angle1 = pointB.x+this.offsetX
         var angle2 = pointB.y+this.offsetY
         strokeWeight(5);
         line(pointA.x, pointA.y, angle1, angle2);
        //} 
        
     }
     
 }