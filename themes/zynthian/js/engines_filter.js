
function do_engines_filter() {
	var chkcat = null;
	$('div#engines_filter_cat input:checked').each(function() {
		chkcat = $(this).val()
		console.log("checked cat => " + chkcat)
	});
	var chktaglist = [];
	$('div#engines_filter_tag input:checked').each(function() {
		chktaglist.push($(this).val())
	});
	$('article.product-card').each(function() {
		var cat = $(this).attr('data-cat')
		var taglist = $(this).attr('data-tag').split(',')
		let inters = taglist.filter(x => chktaglist.includes(x));
		if (cat==chkcat && inters.length==chktaglist.length) $(this).fadeIn(400);
		else $(this).fadeOut(400);
	});
}

$(document).on('change', 'div#engines_filter_cat input', function () {
	do_engines_filter();
});

$(document).on('change', 'div#engines_filter_tag input', function () {
	do_engines_filter();
});

$(document).ready(do_engines_filter);
