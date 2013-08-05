class MaterialNode_TextureLightmap extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Lightmap";
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	tagInfos.Add(new MaterialNodeTagInfo("UVDefs",""));
	
	inputs[0].title = "UV";
	inputs[0].value = Vector2(0,0);
	outputs[0].title = "RGBA";
}

function GenTagInfos() {
	var alreadyExists:boolean = false;
	for (i = 0; i < editor.nodes.length; i++) {
		if (editor.nodes[i] == this) continue;
		if (editor.nodes[i] instanceof MaterialNode_TextureLightmap) {
			alreadyExists = true;
		}
	}
	if (alreadyExists) {
		EditorUtility.DisplayDialog("Error!","Your shader network contains multiple \""+title+"\" nodes. You can only have one if these in the network. To add more textures use a Texture node.","Ok");
	}
	//Poperty
	tagInfos[0].diffuseOnly = true;
	tagInfos[0].value = "_LightMap (\"Lightmap\", 2D) = \"gray\" {LightmapMode}";
	//Def
	tagInfos[1].value = "sampler2D _LightMap;";
	tagInfos[2].onceOnly = true;
	tagInfos[2].value = "float2 uvCoords;";
	//Frag
	outputs[0].value = "(tex2D(_LightMap,";
	if (inputs[0].connections.length > 0) 
		outputs[0].value += inputs[0].connections[0].value;
	else
		outputs[0].value += "IN.uvCoords";
	outputs[0].value += "))";
	
	//tagInfos[2].value = "uniform float4 _LightMap_ST;";
	//tagInfos[3].value = "o.uv.zw = TRANSFORM_TEX(v.texcoord1,_LightMap);";
}

}