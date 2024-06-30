jQuery(document).ready(function($){
	//blank link
	$('a[href^=http]').not('[href*="'+location.hostname+'"]').not('[href*="mailto"]').attr({target:"_blank"});
});
