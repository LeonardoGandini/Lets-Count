/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){var e=t.$(".fumello").position();e.top>=100&&t.getComposition().getStage().getSymbol("FUMELLO").play("USCITA")}function i(){function n(){(function(){s("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})();setTimeout(function(){a("audio/quadri/Q6.mp3")},2e3)}function s(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);i=new Media(e);i.play()}function o(){i&&i.pause()}function a(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);u=new Media(e);u.play()}function g(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);m=new Media(e);m.play()}function b(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);y=new Media(e);y.play()}function E(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);w=new Media(e);w.play()}function x(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);S=new Media(e);S.play()}document.addEventListener("deviceready",n,!1);var i=null,u=null,f=null,l=null,c=null,h=null,p=null,d=null,v={suono1:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);f=new Media(t);f.play()},suono2:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);l=new Media(t);l.play()},suono3:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);c=new Media(t);c.play()},suono4:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);h=new Media(t);h.play()},suono5:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);p=new Media(t);p.play()},suono6:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);d=new Media(t);d.play()}};e(".numeris").hide();e(".reload").css({display:"none"});e(".fiore").bind(toccomagico,function(){t.getSymbol(this).play("in")});var m=null;e(".foglie-spare").bind(toccomagico,function(){t.getSymbol(this).play("in");g("audio/grass1.mp3")});var y=null;e(".fogliebird").bind(toccomagico,function(){e(this).addClass("clicked");var n=e(".clicked").length;b("audio/cipQ6.mp3");t.getSymbol(".menu").play();v["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});setTimeout(function(){t.getSymbol(".menu").play("chiusura")},2500);e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani");if(n>=6){e(".reload").fadeIn();t.getSymbol("Scoiattolo").play("ultima6")}});e(".reload").bind(toccomagico,function(){t.getSymbol(this).play("in");t.getSymbol("Bird-1").play("resetto");t.getSymbol("Bird-2").play("resetto");t.getSymbol("Bird-3").play("resetto");t.getSymbol("Bird-4").play("resetto");t.getSymbol("Bird-5").play("resetto");t.getSymbol("Bird-6").play("resetto");e(".fogliebird").removeClass("clicked");t.$("[id^=Stage_temp]").css({color:"black"});e(".numeris").hide();e(".reload").fadeOut();t.$(".fumnum1").css({"background-image":"url(images/svgBWNum1.svg)"});t.$(".fumnum2").css({"background-image":"url(images/svgBWNum2.svg)"});t.$(".fumnum3").css({"background-image":"url(images/svgBWNum3.svg)"});t.$(".fumnum4").css({"background-image":"url(images/svgBWNum4.svg)"});t.$(".fumnum5").css({"background-image":"url(images/svgBWNum5.svg)"});t.$(".fumnum6").css({"background-image":"url(images/svgBWNum6.svg)"});t.$(".fumnum7").css({"background-image":"url(images/svgBWNum7.svg)"});t.$(".fumnum8").css({"background-image":"url(images/svgBWNum8.svg)"});t.$(".fumnum9").css({"background-image":"url(images/svgBWNum9.svg)"});t.$(".fumnum10").css({"background-image":"url(images/svgBWNum10.svg)"})});t.$("foglie-bird-1").bind(toccomagico,function(){t.getSymbol("Bird-1").play("in");r()});t.$("foglie-bird-2").bind(toccomagico,function(){t.getSymbol("Bird-2").play("in");r()});t.$("foglie-bird-3").bind(toccomagico,function(){t.getSymbol("Bird-3").play("in");r()});t.$("foglie-bird-4").bind(toccomagico,function(){t.getSymbol("Bird-4").play("in");r()});t.$("foglie-bird-5").bind(toccomagico,function(){t.getSymbol("Bird-5").play("in");r()});t.$("foglie-bird-6").bind(toccomagico,function(){t.getSymbol("Bird-6").play("in");r()});var w=null;t.$("trigger-mucca-testa").bind(toccomagico,function(){t.getSymbol("Mucca").play("testa");setTimeout(function(){E("audio/cow-bell.mp3")},850)});var S=null;t.$("trigger-mucca-coda").bind(toccomagico,function(){t.getSymbol("Mucca").play("coda");x("audio/Mucca2.mp3")});var T=0;t.$("trigger-mucca-corpo").bind(toccomagico,function(e){T++;if(!(T>=15))return!1;T=0;var n=null;function r(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);n=new Media(e);n.play()}r("audio/cowlong.mp3");t.getSymbol("Mucca").play("speciale")});t.$("trigger-coda").bind(toccomagico,function(){t.getSymbol("Scoiattolo").play("coda")});var N=0;setInterval(function(){t.getSymbol("Scoiattolo").play("coda")},1e4);var C=0;t.$("Scoiattolo").bind(toccomagico,function(e){C++;if(!(C>=6))return!1;C=0;t.getSymbol("Scoiattolo").play("speciale")});t.getSymbol("FUMELLO").play("ENTRATA");e(".fumello").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("ENTRATA")});e(".fume").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("USCITA")});e(".playvoce").bind(toccomagico,function(){t.getSymbol(this).play("in");a("audio/quadri/Q6.mp3")});avanti="Quadro7.html";e(".next, .prev, .musica, .home").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".testina").bind(toccomagico,function(){t.getSymbol(".menu").play()});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"});e(".musica").toggle(function(){e(".musicasvg").css({"background-image":"url(images/svg-musicBW.svg)"});o()},function(){e(".musicasvg").css({"background-image":"url(images/svg-music.svg)"});(function(){s("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()})}yepnope({load:["cordova.js"],complete:i});toccomagico="touchstart MSPointerDown pointerdown"})})("stage");(function(e){i.bindTriggerAction(n,e,"Default Timeline",865,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",2250,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",3614,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",5259,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",8053,function(e,t){e.stop(0)})})("Scoiattolo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2085,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",3380,function(e,t){e.stop(0)})})("Mucca");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1060,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",2366,function(e,t){e.stop(0)})})("Bird");(function(e){i.bindTriggerAction(n,e,"Default Timeline",645,function(e,t){e.stop(0)})})("foglie-bird");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1632,function(e,t){e.stop(0)})})("Fiore-Rosa");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1341,function(e,t){e.stop(0)})})("Fiore-Bianco");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2697,function(e,t){e.stop(0)})})("Fiore-Giallo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1e3,function(e,t){e.stop(0)})})("Fiore-Arancione");(function(e){})("foglie-spare");(function(e){})("numerazio");(function(e){})("play");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)})})("FUMELLO");(function(e){})("MENUz");(function(e){i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()})})("Menu");(function(e){})("musica");(function(e){})("testina");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("reload");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA")})(jQuery,AdobeEdge,"Quadro-06");