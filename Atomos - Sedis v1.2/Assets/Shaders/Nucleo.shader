//#EditorFriendly
//#node4:posx=-298.5:posy=-7.5:title=TexWithXform:title2=Emiter:input0=(0,0):input0type=Vector2:
//#node3:posx=-203.5:posy=106.5:title=TexWithXform:title2=Alpha:input0=(0,0):input0type=Vector2:
//#node2:posx=-207.5:posy=42.5:title=TexWithXform:title2=Specular:input0=(0,0):input0type=Vector2:
//#node1:posx=-191.5:posy=-39.5:title=TexWithXform:title2=Textura:input0=(0,0):input0type=Vector2:
//#masterNode:posx=0:posy=0:title=Master Node:input0linkindexnode=1:input0linkindexoutput=0:input1linkindexnode=4:input1linkindexoutput=0:input2linkindexnode=2:input2linkindexoutput=0:input4linkindexnode=3:input4linkindexoutput=0:
//#sm=3.0
//#blending=Normal
//#ShaderName
Shader "ShaderFusion/Nucleo" {
	Properties {
_Color ("Diffuse Color", Color) = (1.0, 1.0, 1.0, 1.0)
_SpecColor ("Specular Color", Color) = (1.0, 1.0, 1.0, 1.0)
_Cutoff ("Alpha cutoff", Range(0,1)) = 0.5
//#ShaderProperties
_Textura ("Textura", 2D) = "white" {}
_Emiter ("Emiter", 2D) = "white" {}
_Specular ("Specular", 2D) = "white" {}
_Alpha ("Alpha", 2D) = "white" {}
	}
	Category {
		SubShader { 
//#Blend
ZWrite On
//#CatTags
Tags { "RenderType"="Opaque" }
			//Tags { "RenderType"="Opaque" }
//#LOD
			LOD 400
//#GrabPass
		CGPROGRAM
//#LightingModelTag
#pragma surface surf ShaderFusion vertex:vert alphatest:_Cutoff
 //use custom lighting functions
 
 //custom surface output structure
 struct SurfaceShaderFusion {
	half3 Albedo;
	half3 Normal;
	half3 Emission;
	half Specular;
	half3 GlossColor; //Gloss is now three-channel
	half Alpha;
 };
 //forward lighting function
 inline half4 LightingShaderFusion (SurfaceShaderFusion s, half3 lightDir, half3 viewDir, half atten) {
	#ifndef USING_DIRECTIONAL_LIGHT
	lightDir = normalize(lightDir);
	#endif
	viewDir = normalize(viewDir);
	half3 h = normalize (lightDir + viewDir);
	
	half diff = max (0, dot (s.Normal, lightDir));
	
	float nh = max (0, dot (s.Normal, h));
	float spec = pow (nh, s.Specular*128.0);
	
	half4 c;
	//Use gloss colour instead of gloss
	c.rgb = (s.Albedo * _LightColor0.rgb * diff + _LightColor0.rgb * s.GlossColor * spec) * (atten * 2);
	//We use gloss luminance to determine its overbright contribution
	c.a = s.Alpha + _LightColor0.a * Luminance(s.GlossColor) * spec * atten;
	return c;
 }
 //deferred lighting function
 inline half4 LightingShaderFusion_PrePass (SurfaceShaderFusion s, half4 light) {
	//Use gloss colour instead of gloss
	half3 spec = light.a * s.GlossColor;
	
	half4 c;
	c.rgb = (s.Albedo * light.rgb + light.rgb * spec.rgb);
	//We use gloss luminance to determine its overbright contribution
	c.a = s.Alpha + Luminance(spec);
	return c;
 }
//#TargetSM
#pragma target 3.0
//#UnlitCGDefs
sampler2D _Textura;
sampler2D _Emiter;
sampler2D _Specular;
sampler2D _Alpha;
float4 _Color;
		struct Input {
		//float4 vertex;
//#UVDefs
float2 uv_Textura;
float2 uv_Emiter;
float2 uv_Specular;
float2 uv_Alpha;
		INTERNAL_DATA
		};
		
		void vert (inout appdata_full v, out Input o) {
			//v.vertex.xyz += v.normal * 1.0;
//#DeferredVertexBody
			//o.vertex = v.vertex;
		}
		void surf (Input IN, inout SurfaceShaderFusion o) {
			//float3 viewDir = ObjSpaceViewDir(IN.vertex);
			float4 normal = float4(0.5,0.5,1.0,0.5);
			float3 emissive = 0.0;
			float3 specular = 1.0;
			float gloss = 1.0;
			float3 diffuse = 1.0;
			float alpha = 1.0;
//#PreFragBody
float4 node1 = tex2D(_Textura,IN.uv_Textura.xy);
float4 node4 = tex2D(_Emiter,IN.uv_Emiter.xy);
float4 node2 = tex2D(_Specular,IN.uv_Specular.xy);
float4 node3 = tex2D(_Alpha,IN.uv_Alpha.xy);
//#FragBody
alpha = (node3);
specular = (node2);
emissive = (node4);
diffuse = (node1);
			
			o.Albedo = diffuse.rgb*_Color;
			o.Emission = emissive*_Color;
			o.GlossColor = specular*_SpecColor;//They are inverted O_o?
			o.Alpha = alpha;
			o.Specular = gloss;
			o.Normal = UnpackNormal(normal);
		}
		ENDCG
		}
	}
	//FallBack "Specular"
	FallBack "Transparent/Cutout/VertexLit"
}
