#pragma strict
var Carga:GameObject;
var proportion:float = 0;
function Start () {
	
	for(var eletron:Transform in transform){
		var novaCarga= Instantiate(Carga, eletron.position, transform.rotation);
		novaCarga.transform.parent=eletron;
	novaCarga.transform.localScale -= Vector3(proportion,proportion,proportion); 
	}
}

function Update () {
	for(var eletron:Transform in transform){
		for(var carga:Transform in eletron){
			
			carga.LookAt(Camera.main.transform);
			//eletron.LookAt(Camera.main.transform);
			//carga.position.y=eletron.position.y +0.1;
			//carga.rotation=eletron.rotation;
			carga.position.y=eletron.position.y;//+0.05;
			carga.position.z=eletron.position.z-0.08;
			carga.position.x=eletron.position.x;
			}
	}
}