class MaterialNode_Vector3 extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Vector3";
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	outputs[0].hiddenData = Vector3(1,1,1);
	outputs[0].title = "XYZ";
}

function GenTagInfos() {
	outputs[0].value = "(float3"+outputs[0].GetHiddenValue()+")";
	//outputs[0].value += "float3("+outputs[0].value.x+",";
	//outputs[0].value += ""+outputs[0].value.y+",";
	//outputs[0].value += ""+outputs[0].value.z+");";
}

}
