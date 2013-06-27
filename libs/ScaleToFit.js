$(document).ready(function() {

	var altez = ($(document).height() / 768);/*was 748*/
	var altezZ = ($(document).height());
	
	$("#Stage").css({
				'transform': 'scale(' + altez + ')',
		'-webkit-transform': 'scale(' + altez + ')',
			'-ms-transform': 'scale(' + altez + ')',
		   '-moz-transform': 'scale(' + altez + ')',
		     '-o-transform': 'scale(' + altez + ')'
	});
/*
	$(".edgePreloadQuadro01").css({
				'transform': 'scale(' + altez + ')',
		'-webkit-transform': 'scale(' + altez + ')',
			'-ms-transform': 'scale(' + altez + ')'
	});
*/
	$("body").css({
		'height': altezZ
	});
/* 	$(".Menu").css({'-webkit-transform': 'scale(1.2)'}); */




});