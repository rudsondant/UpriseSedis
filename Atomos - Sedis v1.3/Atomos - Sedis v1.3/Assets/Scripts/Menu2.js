#pragma strict

var windowOpen : boolean = false;
var valorGrade : int = 0;
var valorGrade2 : int = 0;
var Opcoes : String[] = ["1", "2", "3", "4", "5"];
var Opcoes2 : String[] =["Dalton","Thompson","Rutherford","Bohr","Nuvem de elétrons"];
var Atomos: GameObject[];
var zoom:float=0;
var mostrar:boolean=true;
var windowRect : Rect = Rect (270, 110, 485, 300);
var Dalton : GameObject;
var Thompson :GameObject;
var Rutherford :GameObject;
var nuvem : GameObject;
var Bohr : GameObject;
var respostas = new Array  (0,0,0,0,0) ;
var newArray = new Array  (1,2,3,4,5);
var pontuacao: int = 0;


function Start () {



var myArray = new Array (1,2,3,4,5);
for(var k=0;k<5;k++){
	print(newArray[k]);}
for (var j = 4; j > 0; j--) {
        var r = Random.Range(0,j);
        var tmp = newArray[j];
        newArray[j] = newArray[r];
        newArray[r] = tmp;
        }
for(var i = 0;i<5;i++){
		if(newArray[i] == 1){
		Atomos[i] = Dalton;
		}
		if(newArray[i] == 2){
		Atomos[i] = Thompson;
		}
		if(newArray[i] == 3){
		Atomos[i] = Rutherford;
		}
		if(newArray[i] == 4){
		Atomos[i] = Bohr;
		}
		if(newArray[i] == 5){
		Atomos[i] = nuvem;
		}
			}
for(var l=0;l<5;l++){
	print(newArray[l]);}
		
}

function Update () {

	
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




function OnGUI () {

valorGrade = GUI.SelectionGrid (Rect (10, 25, 140, 400), valorGrade, Opcoes, 1);
//valorGrade2 = GUI.SelectionGrid (Rect (170,25,700,70),valorGrade2, Opcoes2, 5);
if (GUI.Button (Rect (170, 25, 150, 75), "Dalton")) {
	respostas[valorGrade] = 1;}
if (GUI.Button (Rect (320,25,150,75), "Thompson")){
	respostas[valorGrade] = 2;}
if (GUI.Button (Rect (470, 25, 150, 75), "Rutherford")) {
	respostas[valorGrade] = 3;}
if (GUI.Button (Rect (620,25,150,75), "Bohr")){
	respostas[valorGrade] = 4;}
if (GUI.Button (Rect (770,25,150,75), "Nuvem de Elétrons")){
	respostas[valorGrade] = 5;}
if (GUI.Button (Rect (770,400,150,30), "Calcular resultado")){
	windowOpen = true;
	}
if (windowOpen){
	windowRect = GUI.Window (0, windowRect, DoMyWindow, "Resultado");
	print("oi");}
		


//zoom
zoom = GUI.VerticalScrollbar (Rect (Screen.width-50, 80, 30, 100), zoom, 0.5, 4.0, 0.0);
GUI.Label(Rect (Screen.width-60, 50, 80, 30),"Zoom");
}
function DoMyWindow(windowID : int){
	checar();
	GUI.Label (Rect (170,15,150,100), "Sua pontuação foi de " +pontuacao);
	//guiText = "Sua pontuação foi de" +pontuacao; 
	//guiText.text = pontuacao.ToString();
	if (GUI.Button (Rect (0,100,160,100), "Recomeçar")){
            Application.LoadLevel("ShowRoomJogo");}
    if (GUI.Button (Rect (160,100,160,100), "Menu Inicial")){
    	Application.LoadLevel("newMenuInicial");}
    if (GUI.Button (Rect (320,100,160,100), "Fechar")){
    windowOpen = false;}
    	}


function checar(){
	pontuacao = 0;
	for(var i = 0;i<5;i++){
		if(respostas[i] == newArray[i]){
			pontuacao = pontuacao+1;}
			}
}