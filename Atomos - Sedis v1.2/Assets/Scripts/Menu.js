//Script que cria o Menu Básico do showroom
var skin:GUISkin;
var skinT:GUISkin;
var valorGrade : int = 0;
var Opcoes : String[] = ["Dalton", "Thompsom", "Rutheford", "Bohr"];
var Atomos: GameObject[];
var zoom:float=0;
var mostrar:boolean=true;
//Cada modelo possui 2 textos descritivos
var TextoA:String[]; //Tamanho 5
var TextoB:String[];
//Somado em Y pixels dos Box dos Textos
var tamyA:int[];
var tamyB:int[];
//Somado em X pixels dos Box dos Textos
var tamxA:int[];
var tamxB:int[];
var textura:Texture2D[];
private var mostrarA:boolean=true; //Mostra o Texto B;
private var mostrarB:boolean=false; //Mostra o Texto B;

function OnGUI () {
	GUI.skin=skin;
	mostrar = GUI.Toggle(Rect(20, 10, 100, 30), mostrar, "Mostrar Menu");
	//barra de ferramentas
	if(mostrar){
		valorGrade = GUI.SelectionGrid (Rect (10, 50, 150, Opcoes.Length*50), valorGrade, Opcoes, 1);
	}
	
	//zoom
	zoom = GUI.VerticalScrollbar (Rect ((Screen.width/2)+130-15, Screen.height-140, 30, 100), zoom, 0.5, 4.0, 0.0);
	GUI.Label(Rect (550, Screen.height-30, 80, 30),"Zoom");
	
	//guardando a cor da GUI
	var corO=GUI.color;
	
	//Exibindo o Texto A
	if(mostrarA){
		GUI.Box(Rect(45,300,400+tamxA[valorGrade],120+tamyA[valorGrade]),TextoA[valorGrade]);
		GUI.color=Color.cyan;
	}
	GUI.skin=skinT;
	if(GUI2.Botao(Rect(0,300,50,100),textura[0])){
		mostrarA=!mostrarA;
	}
	GUI.color=corO;
	GUI.skin=skin;	
	
	//Exibindo o Texto B
	if(mostrarB){
		GUI.Box(Rect(405,10,510+tamxB[valorGrade],200+tamyB[valorGrade]),TextoB[valorGrade]);
		GUI.color=Color.cyan;
	}
	GUI.skin=skinT;
	if(GUI2.Botao(Rect(Screen.width-50,10,50,100),textura[1])){
		mostrarB=!mostrarB;
	}
	GUI.color=corO;
	GUI.skin=skin;	
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