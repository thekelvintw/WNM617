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
	if(localStorage.loggedin !== undefined) {
		// $("body").addClass("isloggedin");
		if(ui===undefined || ui.toPage[0].id=="login")
			$.mobile.navigate("#main-map");
	} else {
		// $("body").removeClass("isloggedin");
		$.mobile.navigate("#login");
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
			case "main-map":
				//run code
				console.log("Welcome to Main Map")
				break;
			case "profile":
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