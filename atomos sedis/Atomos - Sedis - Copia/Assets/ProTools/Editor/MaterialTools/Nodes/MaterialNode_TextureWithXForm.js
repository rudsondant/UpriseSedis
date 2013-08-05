class MaterialNode_TextureWithXForm extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "TexWithXform";
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	tagInfos.Add(new MaterialNodeTagInfo("PreFragBody",""));
	tagInfos.Add(new MaterialNodeTagInfo("UVDefs",""));
	
	inputs[0].title = "UV";
	inputs[0].value = Vector2(0,0);
	outputs[0].title = "RGBA";
	
	var foundTextureNodes:int = 0;
	for (i = 0; i < editor.nodes.length; i++) {
		if (editor.nodes[i].title == title) {
			foundTextureNodes += 1;
		}
	}
	title2 = title+(foundTextureNodes+1);
	
}

function GenTagInfos() {
	//Poperty
	tagInfos[0].diffuseOnly = true;
	tagInfos[0].value = "_"+title2+" (\""+title2+"\", 2D) = \"white\" {}";
	//Def
	tagInfos[1].value = "sampler2D _"+title2+";";
	//FragDec
	tagInfos[2].value = "float4 "+shaderTitle+" = ";
	tagInfos[2].value += "tex2D(_"+title2+",";
	tagInfos[3].value = "float2 uv_"+title2+";";
	tagInfos[3].onceOnly = true;
	if (inputs[0].connections.length > 0) 
		tagInfos[2].value += inputs[0].connections[0].value;
	else
		tagInfos[2].value += "IN.uv_"+title2+".xy";
	tagInfos[2].value += ");";
	
	//Frag
	outputs[0].value = "("+shaderTitle+")";
}

}