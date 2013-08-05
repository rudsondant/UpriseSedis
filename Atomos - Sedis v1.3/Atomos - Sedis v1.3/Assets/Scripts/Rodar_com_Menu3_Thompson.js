#pragma strict
#pragma implicit
#pragma downcast

var roty = 0;
var rotx = 0;
var eixox:GameObject;
var eixoy:GameObject;
var NumeroNoMenu=0;
var abrir:boolean=false;
var tampa:GameObject;

function Update(){
//transform.localEulerAngles.x=rotx;
eixoy.transform.localEulerAngles.y=roty;
eixox.transform.localEulerAngles.x=rotx;
tampa.SetActiveRecursively(!abrir);
}


function OnGUI(){
if (Camera.main.GetComponent(Menu).valorGrade == NumeroNoMenu){
roty = GUI.HorizontalScrollbar (Rect ((Screen.width/2)-50, Screen.height-40, 100, 30), roty, 0.1, -90.0, 91.0);
GUI.Label(Rect ((Screen.width/2)-50, Screen.height-70, 100, 30),"Rotação: "+roty +"°");
rotx = GUI.VerticalScrollbar(Rect ((Screen.width/2)-130, Screen.height-140, 30, 100), rotx, 0.1, 91.0, -90.0);
GUI.Label(Rect ((Screen.width/2)-150, Screen.height-30, 100, 30),"Rotação: "+rotx +"°");
abrir = GUI.Toggle(Rect((Screen.width/2)-50, Screen.height-90, 100, 30), abrir, "Seccionar");
}
}