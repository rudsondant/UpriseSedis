#pragma strict

var seno : GameObject;
var CurveSpeed : float = 5;
var MoveSpeed : float = 1;
var fTime: float = 0;
var vLastPos:Vector3 = Vector3.zero;
var vSin:Vector3 = Vector3.zero;
var vLin:Vector3 = Vector3.zero;


function start(){

 
 vLastPos = transform.position;
	yield WaitForSeconds(3.0);
	Destroy(gameObject);
}

function update(){
	  vLastPos = seno.transform.position;
 
       fTime += Time.deltaTime * CurveSpeed;
 
       vSin = Vector3(Mathf.Sin(fTime), -Mathf.Sin(fTime), 0);
       vLin = new Vector3(MoveSpeed, MoveSpeed, 0);
 
       seno.transform.position += (vSin + vLin) * Time.deltaTime;

}