class MaterialNode_Vector4 extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Vector4";
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	outputs[0].hiddenData = Vector4(1,1,1,1);
	outputs[0].title = "XYZW";
}

function GenTagInfos() {
	outputs[0].value = "(float4"+outputs[0].GetHiddenValue()+")";
	//outputs[0].value += "float4("+outputs[0].value.x+",";
	//outputs[0].value += ""+outputs[0].value.y+",";
	//outputs[0].value += ""+outputs[0].value.z+",";
	//outputs[0].value += ""+outputs[0].value.w+");";
}

}
