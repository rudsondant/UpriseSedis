class MaterialNode_Reflect extends MaterialNode {
//mul((float3x3)_Object2World, reflect( -viewDir, surfaceNormal ))
function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "Reflection";
	inputs.Add(new MaterialNodeSocket(this));
	inputs.Add(new MaterialNodeSocket(this));
	outputs.Add(new MaterialNodeSocket(this));
	
	//tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	//tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	tagInfos.Add(new MaterialNodeTagInfo("UVDefs",""));
	
	inputs[0].title = "Dir";
	inputs[1].title = "SurfaceNormal";
	inputs[0].value = 0.0;
	inputs[1].value = 0.0;
	outputs[0].title = "Out";
}

function GenTagInfos() {
	tagInfos[0].onceOnly = true;
	tagInfos[0].value = "float3 worldRefl;";
	//float3 worldRefl = ;
	//half4 reflcol = texCUBE(_Cube, WorldReflectionVector(IN, UnpackNormal(Normal)));
	outputs[0].value = "WorldReflectionVector(IN, UnpackNormal(";
	if (inputs[1].connections.length > 0)
		outputs[0].value += ""+inputs[1].connections[0].value;
	else
		outputs[0].value += "normal";
	outputs[0].value += "))";
	
}

}
