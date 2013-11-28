$(document).ready(function() {/*was 748*/

	var altez = ($(window).height() / 768);
	var altezZ = ($(window).height());
	
/*
	var width = $("#Stage").outerWidth();
	var larga = ($(document).width()-width);
*/

	$("body").css({
		'height': altezZ
	});
	
	

		$("#Stage").css({
				'transform': 'scale(' + altez + ')',
		'-webkit-transform': 'scale(' + altez + ')',
			'-ms-transform': 'scale(' + altez + ')',
		   '-moz-transform': 'scale(' + altez + ')',
		     '-o-transform': 'scale(' + altez + ')'
	    });
	


/* 	alert($(".SnowyChristmasQ1").css("width")); */


	
/* 	$(window).load(function () { */
		
/*
		var width = $("#Stage").outerWidth();
	    var larga = ($(document).width());
	    
	    $("#Stage").css("left", (larga - width)/2);
*/
	    
/* 	}); */


	



	
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