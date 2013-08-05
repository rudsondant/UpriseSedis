function OnBecameInvisible () {
    GetComponent(TextMesh).characterSize = 0;
}
function OnBecameVisible() {
    GetComponent(TextMesh).characterSize = 0.3;
}