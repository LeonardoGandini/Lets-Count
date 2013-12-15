/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){var e=t.$(".fumello").position();e.top>=100&&t.getComposition().getStage().getSymbol("FUMELLO").play("USCITA")}function i(){function n(){(function(){s("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})();setTimeout(function(){a("audio/quadri/Q10.mp3")},2e3)}function s(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);i=new Media(e);i.play()}function o(){i&&i.pause()}function a(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);u=new Media(e);u.play()}function E(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);w=new Media(e);w.play()}function T(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);x=new Media(e);x.play()}document.addEventListener("deviceready",n,!1);var i=null,u=null,f=null,l=null,c=null,h=null,p=null,d=null,v=null,m=null,g=null,y=null,b={suono1:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);f=new Media(t);f.play()},suono2:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);l=new Media(t);l.play()},suono3:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);c=new Media(t);c.play()},suono4:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);h=new Media(t);h.play()},suono5:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);p=new Media(t);p.play()},suono6:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);d=new Media(t);d.play()},suono7:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);v=new Media(t);v.play()},suono8:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);m=new Media(t);m.play()},suono9:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);g=new Media(t);g.play()},suono10:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);y=new Media(t);y.play()}};e(".numeris").hide();e(".reload").hide();var w=null;e(".triggers").bind(toccomagico,function(){e(this).addClass("clicked");var n=e(".clicked").length;t.getSymbol(".menu").play();b["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});setTimeout(function(){t.getSymbol(".menu").play("chiusura")},3e3);E("audio/bee1.mp3");e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("scoiattolo-braccio-front").play("ani");t.getSymbol("Scoiattolo").play("ani");if(n>=10){e(".reload").fadeIn();t.getSymbol("scoiattolo-braccio-front").play("finale");t.getSymbol("Scoiattolo").play("finale")}});e(".reload").bind(toccomagico,function(){t.getSymbol(".reload").play("in");t.getComposition().getStage().getSymbol("lb1").stop(0);t.getComposition().getStage().getSymbol("lb2").stop(0);t.getComposition().getStage().getSymbol("lb3").stop(0);t.getComposition().getStage().getSymbol("lb4").stop(0);t.getComposition().getStage().getSymbol("lb5").stop(0);t.getComposition().getStage().getSymbol("lb6").stop(0);t.getComposition().getStage().getSymbol("lb7").stop(0);t.getComposition().getStage().getSymbol("lb8").stop(0);t.getComposition().getStage().getSymbol("lb9").stop(0);t.getComposition().getStage().getSymbol("lb10").stop(0);e(".triggers").removeClass("clicked");e(".numeris").hide();e(".reload").fadeOut();t.$(".fumnum1").css({"background-image":"url(images/svgBWNum1.svg)"});t.$(".fumnum2").css({"background-image":"url(images/svgBWNum2.svg)"});t.$(".fumnum3").css({"background-image":"url(images/svgBWNum3.svg)"});t.$(".fumnum4").css({"background-image":"url(images/svgBWNum4.svg)"});t.$(".fumnum5").css({"background-image":"url(images/svgBWNum5.svg)"});t.$(".fumnum6").css({"background-image":"url(images/svgBWNum6.svg)"});t.$(".fumnum7").css({"background-image":"url(images/svgBWNum7.svg)"});t.$(".fumnum8").css({"background-image":"url(images/svgBWNum8.svg)"});t.$(".fumnum9").css({"background-image":"url(images/svgBWNum9.svg)"});t.$(".fumnum10").css({"background-image":"url(images/svgBWNum10.svg)"})});t.$("trigger-lb1").bind(toccomagico,function(){t.getSymbol(".lb1").play("uscita");r()});t.$("trigger-lb2").bind(toccomagico,function(){t.getSymbol(".lb2").play("uscita");r()});t.$("trigger-lb3").bind(toccomagico,function(){t.getSymbol(".lb3").play("uscita");r()});t.$("trigger-lb4").bind(toccomagico,function(){t.getSymbol(".lb4").play("uscita");r()});t.$("trigger-lb5").bind(toccomagico,function(){t.getSymbol(".lb5").play("uscita");r()});t.$("trigger-lb6").bind(toccomagico,function(){t.getSymbol(".lb6").play("uscita");r()});t.$("trigger-lb7").bind(toccomagico,function(){t.getSymbol(".lb7").play("uscita");r()});t.$("trigger-lb8").bind(toccomagico,function(){t.getSymbol(".lb8").play("uscita");r()});t.$("trigger-lb9").bind(toccomagico,function(){t.getSymbol(".lb9").play("uscita");r()});t.$("trigger-lb10").bind(toccomagico,function(){t.getSymbol(".lb10").play("uscita");r()});t.$("trigger-coda").bind(toccomagico,function(){t.getSymbol("Scoiattolo").play("coda")});var S=0;setInterval(function(){t.getSymbol("Scoiattolo").play("coda")},1e4);t.getSymbol("FUMELLO").play("ENTRATA");e(".fumello").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("ENTRATA")});e(".fume").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("USCITA")});e(".playvoce").bind(toccomagico,function(){t.getSymbol(this).play("in");a("audio/quadri/Q10.mp3")});avanti="QuadroFinale.html";indietro="Quadro9.html";e(".next, .prev, .musica, .home").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".testina").bind(toccomagico,function(){t.getSymbol(".menu").play()});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"});e(".musica").toggle(function(){e(".musicasvg").css({"background-image":"url(images/svg-musicBW.svg)"});o()},function(){e(".musicasvg").css({"background-image":"url(images/svg-music.svg)"});(function(){s("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()});var x=null;e(".fiore").bind(toccomagico,function(){t.getSymbol(this).play("in");T("audio/grass1.mp3")})}yepnope({load:["cordova.js"],complete:i});toccomagico="touchstart MSPointerDown pointerdown"})})("stage");(function(e){})("numerazio");(function(e){})("play");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)})})("FUMELLO");(function(e){})("MENUz");(function(e){i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()})})("Menu");(function(e){})("musica");(function(e){})("testina");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("reload");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2500,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",529,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",5574,function(e,t){e.stop(0)})})("Scoiattolo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1250,function(e,t){e.stop()})})("lb");(function(e){})("ladybug");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1937,function(e,t){e.stop()})})("fiorelb");(function(e){i.bindTriggerAction(n,e,"Default Timeline",928,function(e,t){e.stop(0)})})("fiore");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1750,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",3911,function(e,t){e.stop(0)})})("scoiattolo-braccio-front");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1436,function(e,t){e.stop(0)})})("foglielb")})(jQuery,AdobeEdge,"Quadro-10");