function zoom_image(self) { // 팝업 열기
	document.getElementById('modal-popup').style.display = "block";
	document.getElementById('modal-image').src = self.getAttribute('src');
	document.getElementsByTagName('body')[0].style.cssText = "position: relative; width: 100%; height: 100%; overflow: hidden;";
}

function popup_close() { // 팝업 닫기
	document.getElementById('modal-popup').style.display = "none";
	document.getElementById('modal-image').src = "";
	document.getElementsByTagName('body')[0].style.cssText = "position: inherit; width: inherit; height: inherit; overflow: inherit;";
}