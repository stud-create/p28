class Launcherobject
{
	constructor(bodyA,pointB)
	{
		var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
		this.pointB = pointB
		this.bodyA = bodyA
		this.launcherobject = Constraint.create(options)
		World.add(world, this.launcherobject)

	}

    fly(){
        this.launcherobject.bodyA=null
    }
	attach(bodyA){
		this.launcherobject.bodyA = bodyA
	}
  display(){
if(this.launcherobject.bodyA){

	var posA = this.bodyA.position
	var posB = this.pointB
	line(posA.x,posA.y,posB.x,posB.y)
}


  }


}
			