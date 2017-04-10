// Instantiate variables
var a=5;

// scope of global and local variable


// Create functions
function makeMath(num1,num2){
	return +num1 + +num2	
}

// js function return what it means (1)stop (2) give back value
// +num1, track value of number

function newThingClick(e){
	console.log(e);

	var $div = $("<div class='thing'>");
	$div.html($(this).parent().html());

	$div.find("span").html(($(".thing").length+1) + ". Thing");
	$(".thinglist").append($div);
}

//Run code
// Document Ready
$(function(){


	$("h1").html("hello"+makeMath(7,-3))


	

	// Accordion
	$(".accordion dt").on("click",function(){
		console.log("honk")
		// Go look up Jquery Traversal for other opinion
		$(this).next().slideDown()
			.siblings("dd").slideUp();

		// this is the thing just called this function
		// next slect the next element not next dt
	})

	// This is the thing maker
	// creat a list add and delete

	$(".thinglist")
		.on("click",".js-new-thing",newThingClick)
		.on("click",".js-rem-thing",function(){
			$(this).parent().remove();
		})
	$(".js-clear-things").on("click",function(){
			$(".thinglist").children().eq(0).siblings().remove();
		})

});



// event deligation	

// HW end of this week
// Sketch and wireform of midterm project
//Due on FriDay 




