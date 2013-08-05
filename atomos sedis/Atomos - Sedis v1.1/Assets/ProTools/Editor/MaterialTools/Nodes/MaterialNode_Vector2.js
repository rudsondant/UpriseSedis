class MaterialNode_Vector2 extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Vector2";
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	outputs[0].hiddenData = Vector2(1,1);
	outputs[0].title = "XY";
}

function GenTagInfos() {
	outputs[0].value = "(float2"+outputs[0].GetHiddenValue()+")";
	//outputs[0].value += "float2("+outputs[0].value.x+",";
	//outputs[0].value += ""+outputs[0].value.y+");";
}

}
