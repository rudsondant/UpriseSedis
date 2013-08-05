var roty = 0;
var rotx=0;
var eixo:GameObject;

function Update(){
transform.localEulerAngles.x+=rotx;
transform.localEulerAngles.y+=roty;
}

function OnMouseDown(){
if(Input.GetMouseButton(0)){
roty=Input.GetAxis("Mouse X")*Time.deltaTime;
rotx=Input.GetAxis("Mouse Y")*Time.deltaTime;
}
}