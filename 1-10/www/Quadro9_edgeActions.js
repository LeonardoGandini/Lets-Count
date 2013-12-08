/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){var e=t.$(".fumello").position();e.top>=100&&t.getComposition().getStage().getSymbol("FUMELLO").play("USCITA")}function i(){navigator.userAgent.match(/android/gi)&&(src="/android_asset/www/"+src)}function s(){e(".ranas1").css({"z-index":"0"});e(".ranas2").css({"z-index":"0"});e(".ranas3").css({"z-index":"0"});e(".ranas4").css({"z-index":"0"});e(".ranas5").css({"z-index":"0"});e(".ranas6").css({"z-index":"0"});e(".ranas7").css({"z-index":"0"});t.getSymbol("rana1").stop(0);t.getSymbol("rana2").stop(0);t.getSymbol("rana3").stop(0);t.getSymbol("rana4").stop(0);t.getSymbol("rana5").stop(0);t.getSymbol("rana6").stop(0);t.getSymbol("rana7").stop(0)}function o(){function n(){(function(){u("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})();setTimeout(function(){l("audio/quadri/Q7.mp3")},2e3)}function u(e){i();o=new Media(e);o.play()}function a(){o&&o.pause()}function l(e){i();f=new Media(e);f.play()}function w(e){i();b=new Media(e);b.play()}function S(e){i();AudioAudioWaterSplash=new Media(e);AudioAudioWaterSplash.play()}function T(e){i();x=new Media(e);x.play()}s();document.addEventListener("deviceready",n,!1);var o=null,f=null,c=null,h=null,p=null,d=null,v=null,m=null,g=null,y={suono1:function(t){i();c=new Media(t);c.play()},suono2:function(t){i();h=new Media(t);h.play()},suono3:function(t){i();p=new Media(t);p.play()},suono4:function(t){i();d=new Media(t);d.play()},suono5:function(t){i();v=new Media(t);v.play()},suono6:function(t){i();m=new Media(t);m.play()},suono7:function(t){i();g=new Media(t);g.play()}};e(".numeris").hide();e(".reload").hide();var b=null;e(".triggers").bind(toccomagico,function(){e(this).addClass("clicked");var n=e(".clicked").length;t.getSymbol(".menu").play();y["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});setTimeout(function(){t.getSymbol(".menu").play("chiusura")},3e3);w("audio/boing_01.mp3");e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani");n>=7&&e(".reload").fadeIn()});e(".reload").bind(toccomagico,function(){t.getSymbol(this).play("in");s();e(".triggers").removeClass("clicked");e(".numeris").hide();e(".reload").fadeOut();t.$(".fumnum1").css({"background-image":"url(images/svgBWNum1.svg)"});t.$(".fumnum2").css({"background-image":"url(images/svgBWNum2.svg)"});t.$(".fumnum3").css({"background-image":"url(images/svgBWNum3.svg)"});t.$(".fumnum4").css({"background-image":"url(images/svgBWNum4.svg)"});t.$(".fumnum5").css({"background-image":"url(images/svgBWNum5.svg)"});t.$(".fumnum6").css({"background-image":"url(images/svgBWNum6.svg)"});t.$(".fumnum7").css({"background-image":"url(images/svgBWNum7.svg)"});t.$(".fumnum8").css({"background-image":"url(images/svgBWNum8.svg)"});t.$(".fumnum9").css({"background-image":"url(images/svgBWNum9.svg)"});t.$(".fumnum10").css({"background-image":"url(images/svgBWNum10.svg)"})});var E=null;t.$("triggerwater1").bind(toccomagico,function(){t.getSymbol("ninfeabig1-water").play("in");S("audio/watersplash.mp3")});t.$("triggerwater2").bind(toccomagico,function(){t.getSymbol("ninfeabig2-water").play("in");S("audio/watersplash.mp3")});t.$("TriggerRana1").bind(toccomagico,function(){t.getSymbol("rana1").play("in");t.getSymbol("ninfeabig1-water").play("in");r()});t.$("TriggerRana2").bind(toccomagico,function(){t.getSymbol("rana2").play("in");t.getSymbol("ninfeabig1-water").play("in");r()});t.$("TriggerRana3").bind(toccomagico,function(){t.getSymbol("rana3").play("in");t.getSymbol("ninfeabig2-water").play("in");r()});t.$("TriggerRana4").bind(toccomagico,function(){t.getSymbol("rana4").play("in");t.getSymbol("ninfeabig2-water").play("in");r()});t.$("TriggerRana5").bind(toccomagico,function(){t.getSymbol("rana5").play("in");t.getSymbol("ninfeabig2-water").play("in");r()});t.$("TriggerRana6").bind(toccomagico,function(){t.getSymbol("rana6").play("in");t.getSymbol("ninfeabig1-water").play("in");r()});t.$("TriggerRana7").bind(toccomagico,function(){t.getSymbol("rana7").play("in");t.getSymbol("ninfeabig1-water").play("in");r()});var x=null;t.$("Trigger-Pecora").bind(toccomagico,function(){t.getSymbol("Pecora").play("in");T("audio/pecora.mp3")});t.$("trigger-coda").bind(toccomagico,function(){t.getSymbol("Scoiattolo").play("coda")});var N=0;setInterval(function(){t.getSymbol("Scoiattolo").play("coda")},4500);setInterval(function(){switch(N++%3){case 0:t.getSymbol("ninfeabig1-water").play("in");break;case 1:t.getSymbol("ninfeabig2-water").play("in")}},7e3);t.getSymbol("FUMELLO").play("ENTRATA");e(".fumello").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("ENTRATA")});e(".fume").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("USCITA")});e(".playvoce").bind(toccomagico,function(){t.getSymbol(this).play("in");l("audio/quadri/Q7.mp3")});avanti="Quadro8.html";indietro="Quadro6.html";e(".next, .prev, .musica, .home").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".testina").bind(toccomagico,function(){t.getSymbol(".menu").play()});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"});e(".musica").toggle(function(){e(".musicasvg").css({"background-image":"url(images/svg-musicBW.svg)"});a()},function(){e(".musicasvg").css({"background-image":"url(images/svg-music.svg)"});(function(){u("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()});t.$("giuncamento").toggle(function(){t.getSymbol("giuncamento").play("soffiogiunchiuno")},function(){t.getSymbol("giuncamento").play("soffiogiunchidue")})}yepnope({load:["cordova.js"],complete:o});toccomagico="touchstart MSPointerDown pointerdown";t.$("TriggerRana1").css({"z-index":"150"});t.$("TriggerRana2").css({"z-index":"150"});t.$("TriggerRana3").css({"z-index":"150"});t.$("TriggerRana4").css({"z-index":"150"});t.$("TriggerRana5").css({"z-index":"150"});t.$("TriggerRana6").css({"z-index":"150"});t.$("TriggerRana7").css({"z-index":"150"})})})("stage");(function(e){})("numerazio");(function(e){})("play");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)})})("FUMELLO");(function(e){})("MENUz");(function(e){i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()})})("Menu");(function(e){})("musica");(function(e){})("testina");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("reload");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2339,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",529,function(e,t){e.stop(0)})})("Scoiattolo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2e3,function(e,t){e.stop(0)})})("Pecora");(function(t){i.bindTriggerAction(n,t,"Default Timeline",851,function(e,t){e.stop()});i.bindTriggerAction(n,t,"Default Timeline",198,function(t,n){e(".ranas1").css({"z-index":"99"})})})("rana1");(function(t){i.bindTriggerAction(n,t,"Default Timeline",198,function(t,n){e(".ranas2").css({"z-index":"99"})});i.bindTriggerAction(n,t,"Default Timeline",851,function(e,t){e.stop()})})("rana2");(function(t){i.bindTriggerAction(n,t,"Default Timeline",198,function(t,n){e(".ranas3").css({"z-index":"99"})});i.bindTriggerAction(n,t,"Default Timeline",851,function(e,t){e.stop()})})("rana3");(function(t){i.bindTriggerAction(n,t,"Default Timeline",198,function(t,n){e(".ranas4").css({"z-index":"99"})});i.bindTriggerAction(n,t,"Default Timeline",851,function(e,t){e.stop()})})("rana4");(function(t){i.bindTriggerAction(n,t,"Default Timeline",198,function(t,n){e(".ranas5").css({"z-index":"99"})});i.bindTriggerAction(n,t,"Default Timeline",851,function(e,t){e.stop()})})("rana5");(function(t){i.bindTriggerAction(n,t,"Default Timeline",198,function(t,n){e(".ranas6").css({"z-index":"99"})});i.bindTriggerAction(n,t,"Default Timeline",851,function(e,t){e.stop()})})("rana6");(function(t){i.bindTriggerAction(n,t,"Default Timeline",198,function(t,n){e(".ranas7").css({"z-index":"99"})});i.bindTriggerAction(n,t,"Default Timeline",851,function(e,t){e.stop()})})("rana7");(function(e){})("giunco");(function(e){i.bindTriggerAction(n,e,"Default Timeline",8e3,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",14250,function(e,t){e.stop(0)})})("giuncamento");(function(e){i.bindTriggerAction(n,e,"Default Timeline",3078,function(e,t){e.stop(0)})})("giuncame-water");(function(e){i.bindTriggerAction(n,e,"Default Timeline",3750,function(e,t){e.stop(0)})})("ninfeabig-water");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2500,function(e,t){e.stop(0)})})("ninfeabig2-water")})(jQuery,AdobeEdge,"Quadro-09");