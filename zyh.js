var box  = document.getElementById('box');
box.addEventListener('mousedown',function(ev){
	var l = ev.clientX - this.offsetLeft;
	var t = ev.clientY - this.offsetTop;
})
