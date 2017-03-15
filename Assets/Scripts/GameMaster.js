#pragma strict

static var currentScore : int = 0;

private var sizeX : float = 100;
private var sizeY : float = 25;
private var offsetX : float = Screen.width * 0.9;
private var offsetY : float = Screen.height * 0.9;


// GRAPHICAL USER INTERFACE:
function OnGUI () { 
	GUI.Box(new Rect (offsetX, offsetY, sizeX, sizeY), "Score: " + currentScore);

	if (currentScore == 15){
		GUI.Box(new Rect (Screen.width/2 - (sizeX * 3/2), offsetY, sizeX * 3, sizeY), "You caught all the coins!");
	}
}
