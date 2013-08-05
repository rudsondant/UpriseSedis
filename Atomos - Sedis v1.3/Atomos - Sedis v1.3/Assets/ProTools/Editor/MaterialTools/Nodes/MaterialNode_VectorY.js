class MaterialNode_VectorY extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Vector.Y";
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	inputs[0].title = "In";
	inputs[0].value = Vector4(0,0,0,0);
	outputs[0].title = "Y";

}

function GenTagInfos() {
	outputs[0].value = "(";
	if (inputs[0].connections.length > 0)
		outputs[0].value += ""+inputs[0].connections[0].value;
	else 
		outputs[0].value += ""+inputs[0].GetValue();
	outputs[0].value += ".y)";
}

}
