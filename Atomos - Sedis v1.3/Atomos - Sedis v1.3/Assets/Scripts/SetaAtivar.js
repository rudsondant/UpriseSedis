#pragma strict
#pragma implicit
#pragma downcast

var Trigger:GameObject;
var TriggerB:GameObject;
var Seta:GameObject;
var ativou:boolean=false;
var Bohr2:GameObject;
var Animacao2:boolean=false;
var salvo:boolean=false;
var posicao;
var FireWorks:GameObject;
var xOriginal:float;

private var preparar:boolean=false;
private var flag1:boolean=false;
private var animar:boolean=false;
private var flag2:boolean=false; //Libera se já pode animar
private var animarSeta:boolean=false;

function Start () {
	Seta.active=false;
	FireWorks.transform.particleEmitter.emit = false;
	xOriginal=transform.localPosition.x;
}

while(true){
	if(animarSeta){
		Seta.active=true;
		Seta.animation["seta"].speed = 1.5;
		//Seta.animation.Play();
		yield WaitForSeconds(0.8);
		animarSeta=false;
	
	}
	else
		Seta.active=false;
		yield;


}


function Update(){

	Animacao2=Bohr2.GetComponent(Bohr).Animacao2;
	//Animação da seta -----------------------
	if(Animacao2==true){
		if(transform.position!=TriggerB.transform.position){
		animarSeta=true;
						//Seta.active=true;
						//Seta.animation["seta"].speed = 2;
			//Seta.animation.Play();
			
		}
		else{
			//Seta.active=false;
		}
	}
	else{
		//Seta.active=false;
	}
	
	//Fogos de Artifício--------------------------
	if(Animacao2==true){
		if(transform.position!=Trigger.transform.position){
			FireWorks.particleEmitter.emit=true;
		}
		else{
			FireWorks.particleEmitter.emit=false;
		}
	}
	else{
		FireWorks.particleEmitter.emit=false;
	}


}
