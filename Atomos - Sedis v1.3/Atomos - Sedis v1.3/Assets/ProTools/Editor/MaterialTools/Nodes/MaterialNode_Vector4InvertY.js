class MaterialNode_Vector4InvertY extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	size.x *= 1.2;
	title = "Vector4InvertY";
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	inputs[0].title = "In(V4)";
	inputs[0].value = Vector4(0,0,0,0);
	outputs[0].title = "XYZW";

}

function GenTagInfos() {
	outputs[0].value = "(";
	var outValue:String = "";
	if (inputs[0].connections.length > 0)
		outValue = ""+inputs[0].connections[0].value;
	else 
		outValue = ""+inputs[0].GetValue();
	outputs[0].value += "float4("+outValue+".x,1.0-("+outValue+".y),"+outValue+".z,"+outValue+".w)";
	outputs[0].value += ")";
}

}
