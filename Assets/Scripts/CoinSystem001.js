static var coinscollected : int = 0;

function OnGUI () 
{
	GUI.Label (Rect (10,10,200, 200), ("Coins: " + coinscollected));
}
