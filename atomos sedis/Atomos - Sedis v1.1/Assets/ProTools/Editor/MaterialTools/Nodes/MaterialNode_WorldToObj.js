class MaterialNode_WorldToObj extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "WorldToObj";
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	outputs[0].value = 1.0;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	outputs[0].value = "(_World2Object)";
}

}
