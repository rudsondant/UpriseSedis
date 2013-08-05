class MaterialNode_Subtract extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Subtract";
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	inputs[0].title = "A";
	inputs[1].title = "B";
	inputs[0].value = 0.0;
	inputs[1].value = 0.0;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	outputs[0].value = "(";
	if (inputs[0].connections.length > 0)
		outputs[0].value += ""+inputs[0].connections[0].value;
	else 
		outputs[0].value += ""+inputs[0].GetValue();
	outputs[0].value += " - ";
	if (inputs[1].connections.length > 0)
		outputs[0].value += ""+inputs[1].connections[0].value;
	else 
		outputs[0].value += ""+inputs[1].GetValue();
	outputs[0].value += ")";
	
}

}
