class MaterialNode_Interpolate extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Lerp";
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	inputs[0].title = "A";
	inputs[1].title = "B";
	inputs[2].title = "Value";
	inputs[0].value = Vector4(0,0,0,0);
	inputs[1].value = Vector4(0,0,0,0);
	inputs[2].value = 0.5;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	/*
	outputs[0].value = "((";
	if (inputs[0].connections.length > 0)
		outputs[0].value += ""+inputs[0].connections[0].value;
	else 
		outputs[0].value += ""+inputs[0].GetValue();
	if (inputs[2].connections.length > 0)
		outputs[0].value += "*min(max(1.0-"+inputs[2].connections[0].value+",0.00000001),1.0)+(";
	else 
		outputs[0].value += "*min(max(1.0-"+inputs[2].GetValue()+",0.00000001),1.0)+(";
	if (inputs[1].connections.length > 0)
		outputs[0].value += ""+inputs[1].connections[0].value;
	else 
		outputs[0].value += ""+inputs[1].GetValue();
	if (inputs[2].connections.length > 0)
		outputs[0].value += "*min(max("+inputs[2].connections[0].value+",0.00000001),1.0))))";
	else 
		outputs[0].value += "*min(max("+inputs[2].GetValue()+",0.00000001),1.0))))";
	//outputs[0].value += "*"+inputs[2].value+")*0.5))";
	*/
	outputs[0].value = "(lerp(";
	if (inputs[0].connections.length > 0)
		outputs[0].value += ""+inputs[0].connections[0].value;
	else
		outputs[0].value += ""+inputs[0].GetValue();
	outputs[0].value += ",";
	
	if (inputs[1].connections.length > 0)
		outputs[0].value += ""+inputs[1].connections[0].value;
	else
		outputs[0].value += ""+inputs[1].GetValue();
	outputs[0].value += ",";
	
	if (inputs[2].connections.length > 0)
		outputs[0].value += ""+inputs[2].connections[0].value;
	else
		outputs[0].value += ""+inputs[2].GetValue();
	outputs[0].value += "))";
}

}
