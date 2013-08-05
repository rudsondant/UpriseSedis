#pragma strict
#pragma implicit
#pragma downcast

var Trigger:GameObject;
var FireWorks:GameObject;
var ativou:boolean=false;
var Bohr2:GameObject;
var Animacao2:boolean=false;
var salvo:boolean=false;
var posicao;
var posicaoDistante;
var preparar:boolean=false;
function Start () {
FireWorks.transform.particleEmitter.emit = false;

}

function Update(){


	if(Bohr2.GetComponent(Bohr).Animacao2){
		//Animacao2=true;
	}
	else{
		//Animacao2=false;
	}

	if(Animacao2==true && salvo==false){
		posicao=transform.localPosition.x;
		print(posicao);
		salvo=true;
	}
	
	if(Animacao2==true){
		if(transform.position!=Trigger.transform.position){
		FireWorks.particleEmitter.emit=true;
		}
		else{
		FireWorks.particleEmitter.emit=false;
		}
		//if(preparar==false )
	}
	else{
	FireWorks.particleEmitter.emit=false;
	}

}

function Fogos2(){
	

}
