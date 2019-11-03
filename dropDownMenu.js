
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="dropDownMenu.js"></script>


$(document).ready(function(){
	var t = document.getElementById("comp-jzih67asdropWrapper");
	var loginTimer;
	$("#comp-jzih67as9bg").mouseenter(function(){ //log in button
		t.style.visibility = 'inherit';
	});
	$("#comp-jzih67asdropWrapper").mouseenter(function(){ //tenant & agent login container
		clearTimeOut(loginTimer);
	});
	$("#comp-jzih67as9bg").mouseleave(function(){ //log in button
		loginTimer = setTimeout(function(){ t.style.visibility = 'hidden';}, 2500);
	});
	$("#comp-jzih67asdropWrapper").mouseleave(function(){ //tenant & agent login container
		loginTimer = setTimeout(function(){ t.style.visibility = 'hidden';}, 2500);
	});
});
