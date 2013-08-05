#pragma strict
var backGround:Texture2D;
var skin:GUISkin;

function OnGUI () {
	GUI.skin=skin;
	//BackGround
	GUI.DrawTexture(Rect(-1,-2,Screen.width+2,Screen.height+4),backGround);

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (Screen.width-320,360,180,50), " ")) {
		Application.LoadLevel ("ShowRoom");
	}

	// Make the second button.
	if (GUI.Button (Rect (350,200,200,70), " ")) {
		Application.LoadLevel ("ShowRoomJogoNovo");
	}
	
	// Make the QUIT second button.
	if (GUI.Button (Rect (320,350,160,50), " ")) {
		Application.Quit();
	}
	
	
}