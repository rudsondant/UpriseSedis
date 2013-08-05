class MaterialNode_UV1 extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "UV1";
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	tagInfos.Add(new MaterialNodeTagInfo("UVDefs",""));
	
	outputs[0].value = 1.0;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	tagInfos[0].onceOnly = true;
	tagInfos[0].value = "float2 uvCoords;";
	outputs[0].value = "(IN.uvCoords)";
	//1.143
}

}
