
function do_engines_filter() {
	var chkcat = null;
	$('div#engines_filter_cat input:checked').each(function() {
		chkcat = $(this).val()
		console.log("checked cat => " + chkcat)
	});

	var tagclass="";
	if (chkcat=="synthesizer") tagclass="synth";
	else if (chkcat=="effect") tagclass="fx"
	$('div#engines_filter_tag label').each(function() {
		if ($(this).hasClass(tagclass)) $(this).show(200);
		else $(this).hide(200);
	});

	var chktaglist = [];
	$('div#engines_filter_tag input:checked').each(function() {
		chktaglist.push($(this).val())
	});
	$('article.product-card').each(function() {
		var cat = $(this).attr('data-cat')
		var tag_condition = false
		if (chktaglist.includes("")) tag_condition = true
		else {
			var taglist = $(this).attr('data-tag').split(',')
			let inters = taglist.filter(x => chktaglist.includes(x));
			if (inters.length==chktaglist.length) tag_condition = true
		}
		if (cat==chkcat && tag_condition) $(this).fadeIn(400);
		else $(this).fadeOut(400);
	});
}

$(document).on('change', 'div#engines_filter_cat input', function () {
	$("div#engines_filter_tag input[value='']").prop("checked",true);
	do_engines_filter();
});

$(document).on('change', 'div#engines_filter_tag input', function () {
	do_engines_filter();
});

function onHashchange() {
	var cat=window.location.hash.substr(1)
	console.log("Category Hash: " + cat);
	if (cat) $("div#engines_filter_cat input[value='"+cat+"']").prop("checked",true);
	do_engines_filter();
}

$(document).ready(function() {
	$(window).on( 'hashchange', function(ev) {
		onHashchange()
	});
	onHashchange();
});

