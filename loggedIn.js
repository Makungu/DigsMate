window.onload = function() {
		var logInBtn = document.getElementById("comp-jzih67as9");	//log in  (show when logged out)
		var logOutBtn = document.getElementById("comp-jzih67as10"); //log out (show when logged in)
		var accountBtn = document.getElementById("comp-jwkfj64hlogin"); //account button (show when logged in)
		var tenantLoggedIn = document.getElementById("tenantLoggedIn"); //tenant logged in?
		var agentLoggedIn = document.getElementById("agentLoggedIn");   //agent logged in?
		if (tenantLoggedIn != null) { //tenant logged in
			//hides log in button and shows log out button.
			logInBtn.style.display = 'none';
			logOutBtn.style.display = 'inline-block';
			accountBtn.style.display = 'inline-block';
			//show tenant-only features and hide agent-only features
		} else if (agentLoggedIn != null){ //agent logged in
			logInBtn.stlye.display = 'none';
			logOutBtn.stlye.display = 'inline-block';
			accountBtn.style.display = 'inline-block';
			//show agent-only features and hide tenant-only features
		} else { //nobody be logged in
			logInBtn.style.display = 'inline-block';
			logOutBtn.style.display = 'none';
			accountBtn.style.display = 'none';
		}
	}