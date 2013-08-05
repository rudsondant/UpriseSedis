class MaterialNode_Multiply extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Multiply";
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	inputs[0].title = "A";
	inputs[1].title = "B";
	inputs[0].value = 1.0;
	inputs[1].value = 1.0;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	outputs[0].value = "(";
	outputs[0].value += InputValue(0);
	outputs[0].value += " * ";
	outputs[0].value += InputValue(1);
	outputs[0].value += ")";
}

}
