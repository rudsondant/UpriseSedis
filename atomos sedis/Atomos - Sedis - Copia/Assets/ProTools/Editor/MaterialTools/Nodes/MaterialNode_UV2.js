class MaterialNode_UV2 extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "UV2";
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	tagInfos.Add(new MaterialNodeTagInfo("UVDefs",""));
	
	outputs[0].value = 1.0;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	var outputName:String = "uv2Coords";
	//for (i = 0; i < editor.nodes.length; i++) {
	//	if (editor.nodes[i] instanceof MaterialNode_TextureWithXForm) {
	//		outputName = "uv2_"+editor.nodes[i].title2;
	//	}
	//}
	if (outputName == "") return;
	tagInfos[0].onceOnly = true;
	tagInfos[0].value = "float2 "+outputName+";";
	outputs[0].value = "(IN."+outputName+")";
}

}
