$(document).ready(function() {

	var altez = ($(document).height()/748);
	
	$("#Stage").css({
		'-webkit-transform': 'scale('+ altez +')',
				'transform': 'scale('+ altez +')',
			'-ms-transform': 'scale('+ altez +')',
		   '-moz-transform': 'scale('+ altez +')',
		     '-o-transform': 'scale('+ altez +')'
		});
/* 	$(".Menu").css({'-webkit-transform': 'scale(1.2)'}); */

});