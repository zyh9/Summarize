document.addEventListener('mouseup',Up);
	function Up(){
		document.removeEventListener('mousemove',Move);
		document.removeEventListener('mouseup',Up);
	}
