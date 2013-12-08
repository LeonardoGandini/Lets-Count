/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){var e=t.$(".fumello").position();e.top>=100&&t.getComposition().getStage().getSymbol("FUMELLO").play("USCITA")}function i(){navigator.userAgent.match(/android/gi)&&(src="/android_asset/www/"+src)}function s(){function n(){(function(){o("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})();setTimeout(function(){f("audio/quadri/Q9.mp3")},2e3)}function o(e){i();s=new Media(e);s.play()}function u(){s&&s.pause()}function f(e){i();a=new Media(e);a.play()}function E(e){i();w=new Media(e);w.play()}function x(e){i();S=new Media(e);S.play()}document.addEventListener("deviceready",n,!1);var s=null,a=null,l=null,c=null,h=null,p=null,d=null,v=null,m=null,g=null,y=null,b={suono1:function(t){i();l=new Media(t);l.play()},suono2:function(t){i();c=new Media(t);c.play()},suono3:function(t){i();h=new Media(t);h.play()},suono4:function(t){i();p=new Media(t);p.play()},suono5:function(t){i();d=new Media(t);d.play()},suono6:function(t){i();v=new Media(t);v.play()},suono7:function(t){i();m=new Media(t);m.play()},suono8:function(t){i();g=new Media(t);g.play()},suono9:function(t){i();y=new Media(t);y.play()}};e(".numeris").hide();e(".reload").hide();var w=null;e(".triggers").bind(toccomagico,function(){e(this).addClass("clicked");var n=e(".clicked").length;t.getSymbol(".menu").play();b["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});setTimeout(function(){t.getSymbol(".menu").play("chiusura")},3e3);E("audio/boingbunny.mp3");e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani");n>=9&&e(".reload").fadeIn()});e(".reload").bind(toccomagico,function(){t.getSymbol(this).play("in");t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny1").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny2").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny3").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny4").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny5").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny6").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny7").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny8").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("bunny9").stop(0);e(".triggers").removeClass("clicked");e(".numeris").hide();e(".reload").fadeOut();t.$(".fumnum1").css({"background-image":"url(images/svgBWNum1.svg)"});t.$(".fumnum2").css({"background-image":"url(images/svgBWNum2.svg)"});t.$(".fumnum3").css({"background-image":"url(images/svgBWNum3.svg)"});t.$(".fumnum4").css({"background-image":"url(images/svgBWNum4.svg)"});t.$(".fumnum5").css({"background-image":"url(images/svgBWNum5.svg)"});t.$(".fumnum6").css({"background-image":"url(images/svgBWNum6.svg)"});t.$(".fumnum7").css({"background-image":"url(images/svgBWNum7.svg)"});t.$(".fumnum8").css({"background-image":"url(images/svgBWNum8.svg)"});t.$(".fumnum9").css({"background-image":"url(images/svgBWNum9.svg)"});t.$(".fumnum10").css({"background-image":"url(images/svgBWNum10.svg)"})});var S=null;t.$("Trigger-Gufo").bind(toccomagico,function(){t.getSymbol("alberogufo").play("in");x("audio/gufo1.mp3")});t.$("trigger-bunny1").bind(toccomagico,function(){t.getSymbol(".bunny1").play("uscita");r()});t.$("trigger-bunny2").bind(toccomagico,function(){t.getSymbol(".bunny2").play("uscita");r()});t.$("trigger-bunny3").bind(toccomagico,function(){t.getSymbol(".bunny3").play("uscita");r()});t.$("trigger-bunny4").bind(toccomagico,function(){t.getSymbol(".bunny4").play("uscita");r()});t.$("trigger-bunny5").bind(toccomagico,function(){t.getSymbol(".bunny5").play("uscita");r()});t.$("trigger-bunny6").bind(toccomagico,function(){t.getSymbol(".bunny6").play("uscita");r()});t.$("trigger-bunny7").bind(toccomagico,function(){t.getSymbol(".bunny7").play("uscita");r()});t.$("trigger-bunny8").bind(toccomagico,function(){t.getSymbol(".bunny8").play("uscita");r()});t.$("trigger-bunny9").bind(toccomagico,function(){t.getSymbol(".bunny9").play("uscita");r()});t.$("trigger-coda").bind(toccomagico,function(){t.getSymbol("Scoiattolo").play("coda")});var T=0;setInterval(function(){t.getSymbol("Scoiattolo").play("coda")},5500);t.getSymbol("FUMELLO").play("ENTRATA");e(".fumello").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("ENTRATA")});e(".fume").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("USCITA")});e(".playvoce").bind(toccomagico,function(){t.getSymbol(this).play("in");f("audio/quadri/Q9.mp3")});avanti="Quadro10.html";indietro="Quadro8.html";e(".next, .prev, .musica, .home").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".testina").bind(toccomagico,function(){t.getSymbol(".menu").play()});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"});e(".musica").toggle(function(){e(".musicasvg").css({"background-image":"url(images/svg-musicBW.svg)"});u()},function(){e(".musicasvg").css({"background-image":"url(images/svg-music.svg)"});(function(){o("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()})}yepnope({load:["cordova.js"],complete:s});toccomagico="touchstart MSPointerDown pointerdown"})})("stage");(function(e){})("numerazio");(function(e){})("play");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)})})("FUMELLO");(function(e){})("MENUz");(function(e){i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()})})("Menu");(function(e){})("musica");(function(e){})("testina");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("reload");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2339,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",529,function(e,t){e.stop(0)})})("Scoiattolo");(function(e){})("cespuglissimo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1975,function(e,t){e.stop(0)})})("alberogufo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1250,function(e,t){e.stop()})})("bunny")})(jQuery,AdobeEdge,"Quadro-09");