
var last_scrolTop = 0;
window.onscroll = function() {
	if (! $("header.header > .landscape").is(':visible')){
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			$("header.header > .portrait").addClass("portrait_sticky")
		} else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
			$("header.header > .portrait").removeClass("portrait_sticky")
		}
		if (! $("header.header .header__panel.portrait").is(':visible')) {
			if (document.body.scrollTop + document.documentElement.scrollTop > last_scrolTop) {
				$("header.header > .portrait").addClass("portrait_hiden");
			} else {
				$("header.header > .portrait").removeClass("portrait_hiden");
			}
			last_scrolTop = document.body.scrollTop + document.documentElement.scrollTop
		}
	} else {
		$("header.header > .portrait").hide()
		if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
			$("header.header > .landscape").addClass("landscape_sticky")
		} else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100) {
			$("header.header > .landscape").removeClass("landscape_sticky")
		}
	}
};

window.onresize = window.onscroll;

$(document).ready(function() {
	$("header.header .header__mobile-menu .nav-link").click(function() {
		console.log("CLOSE MENU!");
		$("header.header .header__panel.portrait").removeClass("header__panel--on");
	});
});

