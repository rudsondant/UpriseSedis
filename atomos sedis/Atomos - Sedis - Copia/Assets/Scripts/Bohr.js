#pragma strict
#pragma implicit
#pragma downcast

//edita o atomo de Bohr
public var Animacao2:boolean=false;
var Aros:GameObject[];
var eletrons:GameObject[];
var Rastros:GameObject[];
var TodoRastro:GameObject;
function Start(){
animation["Todos"].speed = 2;
TodoRastro.animation["Rastros"].speed=2;
animation.Play("Todos");
}

function OnGUI() {
if (Camera.main.GetComponent(Menu).valorGrade == 3){
	if (GUI.Button(Rect(Screen.width-150,Screen.height-100,150,50),"Animação 1")){
		animation.Stop("Niveis");
		animation.Play("Todos");
TodoRastro.animation.Play("Rastros");
Animacao2=false;
}

if (GUI.Button(Rect(Screen.width-150,Screen.height-50,150,50),"Animação 2")){
animation.Stop("Todos");
TodoRastro.animation.Stop("Rastros");
animation.Play("Inter");
animation.PlayQueued("Niveis", QueueMode.CompleteOthers);
Animacao2=true;
//animation.Play("Niveis");
}
}
}
function Update(){
if(Animacao2==true){
	//var i=0;
	for(var i=0; i<Aros.Length; i++){
	//eletrons[i].GetComponent(TrailRenderer).enabled=false;
	Rastros[i].renderer.enabled=false;
	Aros[i].renderer.enabled=true;
	}
}
else{
print(eletrons.Length);
	for(var k=0; k<eletrons.Length; k++){
		Rastros[k].renderer.enabled=true;
		Aros[k].renderer.enabled=false;
		//eletrons[k].GetComponent(TrailRenderer).enabled=true;
	}
}

}