window.onload = function(){
	var t = document.getElementById('comp-jzih67as9'); 
	t.addEventListener("mouseover", mouseOver);
	t.addEventListener("mouseout", mouseOut);
}

function mouseOver(){
	//nav-login
	var t = document.getElementById('comp-jzih67asdropWrapper'); 
	t.visibility = "inherit";
}

function mouseOut(){
	//nav-login
	var t = document.getElementById('comp-jzih67asdropWrapper'); 
	t.visibility = "hidden";
}