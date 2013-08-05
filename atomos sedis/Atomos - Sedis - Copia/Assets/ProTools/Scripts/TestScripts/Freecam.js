var mouseSpeed:float = 5.0;
var speed:float = 10.0;
var dynamicLight:Light;
private var lightOn:boolean = true;
function Start () {
	
}

function OnGUI() {
	if (dynamicLight) {
		lightOn = GUILayout.Toggle(lightOn, "Enable Dynamic Light.");
		dynamicLight.enabled = lightOn;
	}
}

function Update () {
	var h:float = 1 * Input.GetAxis ("Mouse X");
	var v:float = 1 * Input.GetAxis ("Mouse Y");
	transform.eulerAngles +=  Vector3(-v, h, 0)*mouseSpeed;
	if (Input.GetKey("w") || Input.GetKey("up")) {
		transform.position += transform.forward*speed*Time.deltaTime;
	}
	if (Input.GetKey("s") || Input.GetKey("down")) {
		transform.position += -transform.forward*speed*Time.deltaTime;
	}
	if (Input.GetKey("a") || Input.GetKey("left")) {
		transform.position += -transform.right*speed*Time.deltaTime;
	}
	if (Input.GetKey("d") || Input.GetKey("right")) {
		transform.position += transform.right*speed*Time.deltaTime;
	}
	if (Input.GetKey("space")) {
		transform.position += transform.up*speed*Time.deltaTime;
	}
	if (Input.GetKey("z")) {
		transform.position += -transform.up*speed*Time.deltaTime;
	}
}
