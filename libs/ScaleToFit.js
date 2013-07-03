$(document).ready(function() {/*was 748*/

	var altez = ($(document).height() / 768);
	var altezZ = ($(document).height());
	
	$("#Stage").css({
				'transform': 'scale(' + altez + ')',
		'-webkit-transform': 'scale(' + altez + ')',
			'-ms-transform': 'scale(' + altez + ')',
		   '-moz-transform': 'scale(' + altez + ')',
		     '-o-transform': 'scale(' + altez + ')'
	});

	$("body").css({
		'height': altezZ
	});
/* 	$(".Menu").css({'-webkit-transform': 'scale(1.2)'}); */


/*
if (window.matchMedia("(orientation: landscape)").matches) {

	var altez = ($(document).width() / 1024);
	
	$("#Stage").css({
				'transform': 'scale(' + altez + ')',
		'-webkit-transform': 'scale(' + altez + ')',
			'-ms-transform': 'scale(' + altez + ')',
		   '-moz-transform': 'scale(' + altez + ')',
		     '-o-transform': 'scale(' + altez + ')'
	});

   
}
*/

});