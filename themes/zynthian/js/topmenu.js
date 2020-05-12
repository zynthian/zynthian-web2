
var last_scrolTop = 0;
window.onscroll = function() {
	var class_trtime = 1000;
	var fade_trtime = 400;
	if (! $("header.header > .landscape").is(':visible')){

		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			$("header.header > .portrait").addClass("portrait_sticky", class_trtime)
		} else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
			$("header.header > .portrait").removeClass("portrait_sticky", class_trtime)
		} 

		if (document.body.scrollTop + document.documentElement.scrollTop > last_scrolTop) {
			$("header.header > .portrait").fadeOut(fade_trtime);
		} else {
			$("header.header > .portrait").fadeIn(fade_trtime);
		}
		last_scrolTop = document.body.scrollTop + document.documentElement.scrollTop

	} else {
		$("header.header > .portrait").hide()
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			$("header.header > .landscape").addClass("landscape_sticky", class_trtime)
		} else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
			$("header.header > .landscape").removeClass("landscape_sticky", class_trtime)
		}
	}
};

window.onresize = window.onscroll;

