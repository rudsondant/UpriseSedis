class MaterialNode_ParamVector4 extends MaterialNode {

function Awake(editorWindow:MaterialEditor) {
	super.Awake(editorWindow);
	title = "ParamVector";
	outputs.Add(new MaterialNodeSocket(this));
	
	tagInfos.Add(new MaterialNodeTagInfo("ShaderProperties",""));
	tagInfos.Add(new MaterialNodeTagInfo("CGDefs",""));
	//tagInfos.Add(new MaterialNodeTagInfo("FragBody",""));
	
	outputs[0].hiddenData = Vector4(1,1,1,1);
	outputs[0].title = "XYZW";
	
	var foundNodes:int = 0;
	for (i = 0; i < editor.nodes.length; i++) {
		if (editor.nodes[i].title == title) {
			foundNodes += 1;
		}
	}
	title2 = title+(foundNodes+1);
}

function GenTagInfos() {
	var sx:String = outputs[0].hiddenData.x.ToString(System.Globalization.CultureInfo.InvariantCulture.NumberFormat);
	var sy:String = outputs[0].hiddenData.y.ToString(System.Globalization.CultureInfo.InvariantCulture.NumberFormat);
	var sz:String = outputs[0].hiddenData.z.ToString(System.Globalization.CultureInfo.InvariantCulture.NumberFormat);
	var sw:String = outputs[0].hiddenData.w.ToString(System.Globalization.CultureInfo.InvariantCulture.NumberFormat);
	tagInfos[0].diffuseOnly = true;
	//Property
	tagInfos[0].value = "_"+title2+" (\""+title2+"\", Vector) = ("+sx+","+sy+","+sz+","+sw+")";
	//CGDef
	tagInfos[1].value = "float4 _"+title2+";";
	//Frag
	outputs[0].value = "(_"+title2+")";
}

}
