#pragma strict


var roty = 0;
var NumeroNoMenu=0;

function Update(){
//transform.localEulerAngles.x=rotx;
transform.localEulerAngles.y=roty;
}

function OnGUI(){
if (Camera.main.GetComponent(Menu).valorGrade == NumeroNoMenu){
roty = GUI.HorizontalScrollbar (Rect ((Screen.width/2)-50, Screen.height-40, 100, 30), roty, 0.1, -90.0, 91.0);
GUI.Label(Rect ((Screen.width/2)-50, Screen.height-70, 100, 30),"Rotação: "+roty +"°");
}
}