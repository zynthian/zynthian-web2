(function () {
	'use strict';
	var siteLoader = function(){
		let loader = document.getElementById('loader');
		let duration = '20'
		if (typeof loader.dataset.duration!=="undefined" && loader.dataset.duration!==null) duration=loader.dataset.duration;
		console.log(duration);
		if (!!loader) {
			setTimeout(function(){ 
				loader.classList.add('loaded');
			}, duration);
			loader.addEventListener('animationend', () =>{
				loader.parentNode.removeChild(loader);
			})
		}
	}
	siteLoader();
})();
