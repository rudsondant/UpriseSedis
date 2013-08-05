#pragma strict
#pragma implicit
#pragma downcast

var Trigger:GameObject;
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

function Start () {
	Seta.active=false;
	FireWorks.transform.particleEmitter.emit = false;
	xOriginal=transform.localPosition.x;
}

while (true){
	if(animar){
		yield WaitForSeconds(0.05);
		animar=false;
		yield;
		continue;
	}

	if(Animacao2){
		yield WaitForSeconds(1);
		flag2=true;
	}
	else{
		flag2=false;
	}
	
	yield;
}

function Update(){

	Animacao2=Bohr2.GetComponent(Bohr).Animacao2;

	if(flag2==true){

		if(transform.localPosition.x!=xOriginal)
			animar=true;
		
		//if(transform.localPosition.x!=xOriginal && flag1){
			//animar=true;
			//flag1=false;
		//}
		
		if(animar){
			Seta.active=true;
			Seta.animation.Play();
		
		}
		
		else{
			Seta.active=false;
			Seta.animation.Stop();
		}
		
	}
	else{
		Seta.active=false;
	}
	
	//FOgos de Artifício
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
