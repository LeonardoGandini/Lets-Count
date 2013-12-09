/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){var e=t.$(".fumello").position();e.top>=100&&t.getComposition().getStage().getSymbol("FUMELLO").play("USCITA")}function i(){navigator.userAgent.match(/android/gi)&&(src="/android_asset/www/"+src)}function s(){function n(){(function(){o("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})();setTimeout(function(){f("audio/quadri/Q9.mp3")},2e3)}function o(e){i();s=new Media(e);s.play()}function u(){s&&s.pause()}function f(e){i();a=new Media(e);a.play()}function S(e){i();E=new Media(e);E.play()}document.addEventListener("deviceready",n,!1);var s=null,a=null,l=null,c=null,h=null,p=null,d=null,v=null,m=null,g=null,y=null,b=null,w={suono1:function(t){i();l=new Media(t);l.play()},suono2:function(t){i();c=new Media(t);c.play()},suono3:function(t){i();h=new Media(t);h.play()},suono4:function(t){i();p=new Media(t);p.play()},suono5:function(t){i();d=new Media(t);d.play()},suono6:function(t){i();v=new Media(t);v.play()},suono7:function(t){i();m=new Media(t);m.play()},suono8:function(t){i();g=new Media(t);g.play()},suono9:function(t){i();y=new Media(t);y.play()},suono10:function(t){i();b=new Media(t);b.play()}};e(".numeris").hide();e(".reload").hide();var E=null;e(".triggers").bind(toccomagico,function(){e(this).addClass("clicked");var n=e(".clicked").length;t.getSymbol(".menu").play();w["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});setTimeout(function(){t.getSymbol(".menu").play("chiusura")},3e3);S("audio/boinglb.mp3");e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani");n>=10&&e(".reload").fadeIn()});e(".reload").bind(toccomagico,function(){t.getSymbol(this).play("in");t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb1").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb2").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb3").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb4").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb5").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb6").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb7").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb8").stop(0);t.getComposition().getStage().getSymbol("cespuglissimo").getSymbol("lb9").stop(0);e(".triggers").removeClass("clicked");e(".numeris").hide();e(".reload").fadeOut();t.$(".fumnum1").css({"background-image":"url(images/svgBWNum1.svg)"});t.$(".fumnum2").css({"background-image":"url(images/svgBWNum2.svg)"});t.$(".fumnum3").css({"background-image":"url(images/svgBWNum3.svg)"});t.$(".fumnum4").css({"background-image":"url(images/svgBWNum4.svg)"});t.$(".fumnum5").css({"background-image":"url(images/svgBWNum5.svg)"});t.$(".fumnum6").css({"background-image":"url(images/svgBWNum6.svg)"});t.$(".fumnum7").css({"background-image":"url(images/svgBWNum7.svg)"});t.$(".fumnum8").css({"background-image":"url(images/svgBWNum8.svg)"});t.$(".fumnum9").css({"background-image":"url(images/svgBWNum9.svg)"});t.$(".fumnum10").css({"background-image":"url(images/svgBWNum10.svg)"})});t.$("trigger-lb1").bind(toccomagico,function(){t.getSymbol(".lb1").play("uscita");r()});t.$("trigger-lb2").bind(toccomagico,function(){t.getSymbol(".lb2").play("uscita");r()});t.$("trigger-lb3").bind(toccomagico,function(){t.getSymbol(".lb3").play("uscita");r()});t.$("trigger-lb4").bind(toccomagico,function(){t.getSymbol(".lb4").play("uscita");r()});t.$("trigger-lb5").bind(toccomagico,function(){t.getSymbol(".lb5").play("uscita");r()});t.$("trigger-lb6").bind(toccomagico,function(){t.getSymbol(".lb6").play("uscita");r()});t.$("trigger-lb7").bind(toccomagico,function(){t.getSymbol(".lb7").play("uscita");r()});t.$("trigger-lb8").bind(toccomagico,function(){t.getSymbol(".lb8").play("uscita");r()});t.$("trigger-lb9").bind(toccomagico,function(){t.getSymbol(".lb9").play("uscita");r()});t.$("trigger-coda").bind(toccomagico,function(){t.getSymbol("Scoiattolo").play("coda")});var x=0;setInterval(function(){t.getSymbol("Scoiattolo").play("coda")},5500);t.getSymbol("FUMELLO").play("ENTRATA");e(".fumello").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("ENTRATA")});e(".fume").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("USCITA")});e(".playvoce").bind(toccomagico,function(){t.getSymbol(this).play("in");f("audio/quadri/Q10.mp3")});avanti="QuadroFinale.html";indietro="Quadro9.html";e(".next, .prev, .musica, .home, .fiore").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".testina").bind(toccomagico,function(){t.getSymbol(".menu").play()});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"});e(".musica").toggle(function(){e(".musicasvg").css({"background-image":"url(images/svg-musicBW.svg)"});u()},function(){e(".musicasvg").css({"background-image":"url(images/svg-music.svg)"});(function(){o("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()})}yepnope({load:["cordova.js"],complete:s});toccomagico="touchstart MSPointerDown pointerdown"})})("stage");(function(e){})("numerazio");(function(e){})("play");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)})})("FUMELLO");(function(e){})("MENUz");(function(e){i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()})})("Menu");(function(e){})("musica");(function(e){})("testina");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("reload");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2339,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",529,function(e,t){e.stop(0)})})("Scoiattolo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1250,function(e,t){e.stop()})})("lb");(function(e){})("ladybug");(function(e){i.bindTriggerAction(n,e,"Default Timeline",1937,function(e,t){e.stop()})})("fiorelb")})(jQuery,AdobeEdge,"Quadro-10");