// Instantiate variables

// Make functions
function checkLoginForm(){
	if(
		$("#login-username").val()=="boop" &&
		$("#login-password").val()=="bop"
		){
		localStorage.loggedin = 1;
	} else {
		localStorage.removeItem("loggedin");
		console.log("I'm sorry Dave, I'm afraid I can't do that.");
	}
	checkStorage();
}
function checkStorage(){
	if(localStorage.loggedin !== undefined) {
		$("body").addClass("isloggedin");
	} else {
		$("body").removeClass("isloggedin");
	}
}



// Run Code

// Document Ready

$(function(){

	checkStorage();

	$("#login").on("submit",function(e){
		e.preventDefault();

		checkLoginForm();
	});

	$(".js-logout").on("click",function(e){
		e.preventDefault();

		localStorage.removeItem("loggedin");
		checkStorage();
	})
});
// when the form is summited but not only summit button
// Design they fail to log in