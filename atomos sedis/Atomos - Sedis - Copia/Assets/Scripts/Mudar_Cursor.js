var cursorImage : Texture;

function Start() {
    Screen.showCursor = false;
}

function OnGUI() {
    var mousePos : Vector3 = Input.mousePosition;
    var pos : Rect = Rect(mousePos.x,Screen.height - mousePos.y,cursorImage.width,cursorImage.height);
    GUI.Label(pos,cursorImage);
}