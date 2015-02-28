$(document).ready(function() {
	$(".panel-heading").on("click", function() {
		$(this).closest(".panel").children(".panel-body").slideToggle();
	});

	$(".panel-heading").children("a").on("mouseenter", function() {
		$(this).closest(".panel").children(".panel-body").slideToggle();
	})
	.on("mouseleave", function() {
		$(this).closest(".panel").children(".panel-body").slideToggle();
	});

	$(".panel-body").on("mouseenter", function() {
		$(this).addClass("highlight");
		$(this).closest(".panel").children(".panel-heading").children().addClass("selected");
	})
	.on("mouseleave", function() {
		$(this).removeClass("highlight");
		$(this).closest(".panel").children(".panel-heading").children().removeClass("selected");
	});
});