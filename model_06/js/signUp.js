// Instantiate Variables


// Make Functions
function checkLoginForm(){
	if(
		$("#login-username").val()=="boop" &&
		$("#login-password").val()=="bop"
		){
		localStorage.loggedin = "blorp";
	} else {
		localStorage.removeItem("loggedin");
		console.log("I'm sorry Dave, I'm afraid I can't do that.");
	}
	checkStorage();
}
function checkStorage(ui){
	if(localStorage.loggedin === undefined) {
		$.mobile.navigate("#login");
	} else if( location.hash == "" || location.hash == "#login") {
		$.mobile.navigate("#monsterpage");
	}
}


// Run Code
// Document Ready
$(function(){




	$(document)
	.on("pagecontainerbeforeshow",function(e,ui){
		console.log(ui)
		checkStorage(ui);
		switch(ui.toPage[0].id){
			case "login":
				//run code
				console.log("You have just loaded the login")
				break;
			case "monsterpage":
				//run code
				console.log("Welcome to Monster Page")
				break;
			case "profilepage":
				//run code
				break;
		}
	})
	.on("submit","#form-login",function(e){
		e.preventDefault();

		console.log("honk")

		checkLoginForm();
	})
	.on("click",".js-logout",function(e){
		e.preventDefault();

		localStorage.removeItem("loggedin");
		checkStorage();
	})
});