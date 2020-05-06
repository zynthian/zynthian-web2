function init_engines_filter(){
	$(document).on('change', 'div#engines_filter_tag input', function () {
		var chklist = [];
		$('div#engines_filter_tag input:checked').each(function() {
			chklist.push($(this).val())
		});
		$('article.product-card').each(function() {
			var taglist = $(this).attr('data-tag').split(',')
			let inters = taglist.filter(x => chklist.includes(x));
			if (inters.length==chklist.length) $(this).fadeIn(400);
			else $(this).fadeOut(400);
		});
	});
}

init_engines_filter();
