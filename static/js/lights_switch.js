jQuery(document).ready(function(){

	jQuery('img#lights_switch').css('display', 'block');

	jQuery(document).on('switch_lights', function() {
		var lights = Cookies.get('lights');
		if (lights !== 'off') {
			lights = 'on';
			if (Cookies.get('lights') !== lights) {
				Cookies.set('lights', lights);
			}
			var src = jQuery('img#lights_switch').attr('src');
			src = src.replace('-off.png', '-on.png');
			jQuery('img#lights_switch').attr('src', src);
			jQuery('.lights_css').remove();
		} else {
			var src = jQuery('img#lights_switch').attr('src');
			src = src.replace('-on.png', '-off.png');
			jQuery('img#lights_switch').attr('src', src);
			jQuery('head').append('<link type="text/css" class="lights_css" rel="stylesheet" href="/css/style-dark.css" />');
		}
	});

	jQuery('img#lights_switch').click(function(e) {
		e.preventDefault();
		var lights = Cookies.get('lights');
		if (lights !== 'off') {
			Cookies.set('lights', 'off');
			jQuery(document).trigger('switch_lights');
		} else {
			Cookies.set('lights', 'on');
			jQuery(document).trigger('switch_lights');
		}
	});

	jQuery(document).trigger('switch_lights');
});
