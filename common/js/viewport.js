var baseW = 640;	//基準となるブレークポイント
function updateMetaViewport(){
	var viewportContent;
	var w = window.outerWidth;
	if(w < baseW){
		viewportContent = "width=320";
	}else{
		viewportContent = "width=device-width";
	}
	document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}

//イベントハンドラ登録
window.addEventListener("resize", updateMetaViewport, false);
window.addEventListener("orientationchange", updateMetaViewport, false);

//初回イベント強制発動
var ev = document.createEvent("UIEvent");
ev.initEvent("resize", true, true);
window.dispatchEvent(ev);