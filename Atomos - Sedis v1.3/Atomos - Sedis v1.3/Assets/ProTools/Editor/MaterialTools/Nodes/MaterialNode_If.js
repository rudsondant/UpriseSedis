class MaterialNode_If extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "If";
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	inputs[0].title = "A";
	inputs[1].title = "B";
	inputs[2].title = ">";
	inputs[3].title = "<";
	inputs[4].title = "==";
	inputs[5].title = "!=";
	//inputs[0].value = 0.0;
	//inputs[1].value = 0.0;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	outputs[0].value = "(IfStatement(";
		if (inputs[0].connections.length > 0)
			outputs[0].value += ""+inputs[0].connections[0].value+",";
		else 
			outputs[0].value += "0.0,";
			
		if (inputs[1].connections.length > 0)
			outputs[0].value += ""+inputs[1].connections[0].value+",";
		else 
			outputs[0].value += "0.0,";
			
		if (inputs[2].connections.length > 0)
			outputs[0].value += ""+inputs[2].connections[0].value+",";
		else 
			outputs[0].value += "float4(0,0,0,0),";
			
		if (inputs[3].connections.length > 0)
			outputs[0].value += ""+inputs[3].connections[0].value+",";
		else 
			outputs[0].value += "float4(0,0,0,0),";
			
		if (inputs[4].connections.length > 0)
			outputs[0].value += ""+inputs[4].connections[0].value+",";
		else 
			outputs[0].value += "float4(0,0,0,0),";
			
		if (inputs[5].connections.length > 0)
			outputs[0].value += ""+inputs[5].connections[0].value+",";
		else 
			outputs[0].value += "float4(0,0,0,0)";

	outputs[0].value += "))";
}

}
