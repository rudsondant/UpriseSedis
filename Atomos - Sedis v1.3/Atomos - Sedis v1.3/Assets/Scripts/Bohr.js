#pragma strict
#pragma implicit
#pragma downcast

//edita o atomo de Bohr
public var Animacao2:boolean=false;
var Aros:GameObject[];
var eletrons:GameObject[];
function Start(){
	animation["Todos"].speed = 2;
	//TodoRastro.animation["Rastros"].speed=2;
	animation.Play("Todos");
}

function OnGUI() {
	if (Camera.main.GetComponent(Menu).valorGrade == 3){
			if (GUI.Button(Rect(Screen.width-150,Screen.height-100,150,50),"Animação 1")){
				animation.Stop("Niveis");
				animation.Play("Todos");
				Animacao2=false;
		}
		
		if (GUI.Button(Rect(Screen.width-150,Screen.height-50,150,50),"Animação 2")){
			animation.Stop("Todos");
			animation.Play("Inter");
			animation.PlayQueued("Niveis", QueueMode.CompleteOthers);
			Animacao2=true;
		}
	}
}