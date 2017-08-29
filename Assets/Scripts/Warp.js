var warptarget : Transform;
var warptarget1 : Transform;

function Update () 
{
	
}

function OnTriggerEnter (col : Collider) 
{
	if (col.gameObject.tag == "warp001") 
	{
		this.transform.position = warptarget.position;
	}
	if (col.gameObject.tag == "warp003") 
	{
		this.transform.position = warptarget1.position;
	}
}