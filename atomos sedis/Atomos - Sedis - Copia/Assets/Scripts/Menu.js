var valorGrade : int = 0;
var Opcoes : String[] = ["Dalton", "Thompsom", "Rutheford", "Bohr"];
var Atomos: GameObject[];
var zoom:float=0;
var mostrar:boolean=true;
function OnGUI () {
mostrar = GUI.Toggle(Rect(10, 10, 100, 30), mostrar, "Mostrar Menu");
//barra de ferramentas
if(mostrar){
valorGrade = GUI.SelectionGrid (Rect (10, 25, 140, 400), valorGrade, Opcoes, 1);
}
//zoom
zoom = GUI.VerticalScrollbar (Rect (Screen.width-50, 80, 30, 100), zoom, 0.5, 4.0, 0.0);
GUI.Label(Rect (Screen.width-60, 50, 80, 30),"Zoom");
}
function Update(){
if(transform.position.x>Atomos[valorGrade].transform.position.x){
	if(transform.position.x!=Atomos[valorGrade].transform.position.x){
		transform.position.x -=0.5;
	}
}
if(transform.position.x<Atomos[valorGrade].transform.position.x){
	if(transform.position.x!=Atomos[valorGrade].transform.position.x){
		transform.position.x+=0.5;
	}
}

Camera.main.transform.position.z=zoom-5;
}