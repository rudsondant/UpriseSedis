var numEletrons;
//var Eletrons1:Transform[];
//var Eletrons2:Transform[];
function Start () {
numEletrons=transform.childCount;

}
function Update(){
StartCoroutine(Apagar());
}
function Apagar () {

for (var eletron : Transform in transform) {
	if(Random.Range (0,2)==1){
		eletron.transform.active = true;
		} // lembrando que o intervalo 0<=x<2 com inteiros, ou seja 1 ou 0;

	else{
		eletron.transform.active = false;
		}
	yield WaitForSeconds (0.5);
}

}