#pragma strict



static function Botao(posTam:Rect,textura:Texture2D):boolean{
	GUI.DrawTexture(posTam,textura);
	if(GUI.Button(posTam," ")){
		return true;
	}
	
	return false;
}
