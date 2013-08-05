private var numEletrons:int;

function Start () {
	numEletrons=transform.childCount;
}

//Criando uma Coroutine
while(true) {
 while(numEletrons!=null)
	for (var eletron : Transform in transform) {
		if(Random.Range (0,2)==1){
			eletron.transform.active = true;
			} // lembrando que o intervalo 0<=x<2 com inteiros, ou seja 1 ou 0;

		yield WaitForSeconds (0.1);
		eletron.transform.active = false;
		yield;
	}
	//yield;
}