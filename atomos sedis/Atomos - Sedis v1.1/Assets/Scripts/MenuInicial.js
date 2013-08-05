#pragma strict

function OnGUI () {
	
	GUI.Box (Rect (0,0,Screen.width,Screen.height), "Átomos");

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.Button (Rect (Screen.width/5.5,Screen.height/4,Screen.width/1.5,Screen.height/4.2), "Modo Estória")) {
		Application.LoadLevel ("ShowRoom");
	}

	// Make the second button.
	if (GUI.Button (Rect (Screen.width/5.5,2*Screen.height/4,Screen.width/1.5,Screen.height/4.2), "Modo Jogo")) {
		Application.LoadLevel ("ShowRoomJogo");
	}
	
	if(GUI.Button (Rect(Screen.width/5.5,3*Screen.height/4,Screen.width/1.5,Screen.height/4.2), "Créditos")){
		Application.LoadLevel ("creditos");
}
}