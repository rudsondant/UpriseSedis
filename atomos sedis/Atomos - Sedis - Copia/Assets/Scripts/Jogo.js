#pragma strict

function Start () {
var myArray = ['1','2','3','4','5'];
var newArray = shuffle(myArray);
var pontuacao: int = 0;
}

function Update () {

}

function shuffle(meuArray : Array){ 
  var i:float = 5;
  var j;
  var tempi:float;
  var tempj:float;
  if ( i == 0 ) return false;
  while ( --i ) {
     j = Mathf.Floor( (Random.value) * ( i + 1 ) );
     tempi = meuArray[i];
     tempj = meuArray[j];
     meuArray[i] = tempj;
     meuArray[j] = tempi;
   }

}




