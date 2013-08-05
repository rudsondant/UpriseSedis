#pragma strict
var Carga:GameObject;
function Start () {
	for(var eletron:Transform in transform){
		var novaCarga= Instantiate(Carga, eletron.position, eletron.rotation);
		novaCarga.transform.parent=eletron;
	}
}

function Update () {
	for(var eletron:Transform in transform){
		for(var carga:Transform in eletron){
			carga.LookAt(Camera.main.transform);
			eletron.LookAt(Camera.main.transform);
			//carga.position.y=eletron.position.y +0.1;
			carga.position.y=eletron.position.y+0.05;
			carga.position.z=eletron.position.z-0.2;
			carga.position.x=eletron.position.x;
			}
	}
}