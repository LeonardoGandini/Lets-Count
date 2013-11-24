/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){function h(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);n=new Media(e);n.play()}function p(){n&&n.pause()}function d(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);r=new Media(e);r.play()}function v(){setTimeout(function(){d("Suoni/quadri/Q5.mp3")},2e3);(function(){h("Suoni/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()}function d(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);r=new Media(e);r.play()}function m(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);i=new Media(e);i.play()}function g(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);s=new Media(e);s.play()}function y(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);o=new Media(e);o.play()}function b(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);u=new Media(e);u.play()}function w(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);a=new Media(e);a.play()}function E(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);f=new Media(e);f.play()}function S(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);l=new Media(e);l.play()}function x(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);c=new Media(e);c.play()}document.addEventListener("deviceready",v,!1);var n=null,r=null,i=null,s=null,o=null,u=null,a=null,f=null,l=null,c=null;e(".playvoce").bind(toccomagico,function(){t.getSymbol(this).play("in");d("Suoni/quadri/Q5.mp3")});e(".MelaStat").bind(toccomagico,function(){t.getSymbol(this).play("in");m("Suoni/foglia.mp3")});e(".BirdPala, .BirdTerra").bind(toccomagico,function(){t.getSymbol(this).play("in");S("Suoni/cip01.mp3")});e(".triggerverme").bind(toccomagico,function(){x("Suoni/Lumaca01.mp3");t.getSymbol(".verme").play("in")});e(".MelaBella1").bind(toccomagico,function(){t.getSymbol(this).play("in");e(".Mela2Trigger").show();setTimeout(function(){g("Suoni/numbers/one.mp3");t.$(".uno").css({"-webkit-filter":"saturate(100%)",opacity:"1"})},860)});e(".Mela2Trigger").bind(toccomagico,function(){t.getSymbol(".MelaBella2").play("in");e(".Mela3Trigger").show();setTimeout(function(){y("Suoni/numbers/two.mp3");t.$(".due").css({"-webkit-filter":"saturate(100%)",opacity:"1"})},860)});e(".Mela3Trigger").bind(toccomagico,function(){t.getSymbol(".MelaBella3").play("in");e(".Mela4Trigger").show();setTimeout(function(){b("Suoni/numbers/three.mp3");t.$(".tre").css({"-webkit-filter":"saturate(100%)",opacity:"1"})},860)});e(".Mela4Trigger").bind(toccomagico,function(){t.getSymbol(".MelaBella4").play("in");e(".Mela5Trigger").show();setTimeout(function(){w("Suoni/numbers/four.mp3");t.$(".quattro").css({"-webkit-filter":"saturate(100%)",opacity:"1"})},860)});e(".Mela5Trigger").bind(toccomagico,function(){t.getSymbol(".MelaBella5").play("in");setTimeout(function(){E("Suoni/numbers/five.mp3");t.$(".cinque").css({"-webkit-filter":"saturate(100%)",opacity:"1"})},860)});e(".musica").toggle(function(){e(".musica").css({"-webkit-filter":"saturate(0%)",opacity:"0.6"});p()},function(){e(".musica").css({"-webkit-filter":"saturate(100%)",opacity:"1"});(function(){h("Suoni/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()})}yepnope({load:["cordova.js"],complete:r});toccomagico="touchstart MSPointerDown pointerdown";e("#prelo").css({display:"none"});t.getSymbol("FUMELLO").play("in");t.$(".Nuvola").css({"-webkit-filter":"drop-shadow(0 5px 15px rgba(0,0,0,.4))"});e(".fioreani").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".Mela2Trigger, .Mela3Trigger, .Mela4Trigger, .Mela5Trigger").hide();e(".Trigger-Mela-Easter").bind(toccomagico,function(){t.getSymbol(".melaeaster").play("in")});t.getSymbol(".codaani").play("in");e(".codatrigger").bind(toccomagico,function(){t.getSymbol(".codaani").play("animaziocoda")});avanti="QuadroFinale.html";indietro="Quadro4.html";e(".next, .prev, .home, .musica").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".testina").bind(toccomagico,function(){t.getSymbol(".menu").play()});t.$(".uno, .due, .tre, .quattro, .cinque").css({"-webkit-filter":"saturate(0%)",opacity:"0.4"});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"})})})("stage");(function(e){i.bindTriggerAction(n,e,"Default Timeline",614,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",1e3,function(e,t){e.play()});i.bindElementAction(n,e,"${_Rectangle}","touchstart MSPointerDown",function(e,t){e.play(1e3)});i.bindElementAction(n,e,"${_Fumello}","touchstart MSPointerDown",function(e,t){e.play()})})("FUMELLO");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA");(function(e){})("Preloader");(function(e){i.bindTriggerAction(n,e,"Default Timeline",37481,function(e,t){e.play(0)})})("Coda");(function(e){})("CodaAni");(function(e){})("Verme");(function(e){})("Mela-Statica");(function(e){i.bindTriggerAction(n,e,"Default Timeline",571,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",2104,function(e,t){e.getSymbol(".menu").play("in")});i.bindTriggerAction(n,e,"Default Timeline",3e3,function(e,t){e.stop();e.getSymbol(".menu").play(197)})})("Mela-Bella-1");(function(e){})("FioreGialllo");(function(e){})("FioreRosa");(function(e){})("FioreBlu");(function(e){})("Bird-Pala");(function(e){})("Bird-Tereno");(function(e){})("Scoiattolo");(function(e){})("Mela-Easter-Egg");(function(e){})("Down-level");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",2099,function(e,t){e.getSymbol(".menu").play("in")});i.bindTriggerAction(n,e,"Default Timeline",3e3,function(e,t){e.stop();e.getSymbol(".menu").play(197)})})("Mela-Bella-2");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",2098,function(e,t){e.getSymbol(".menu").play("in")});i.bindTriggerAction(n,e,"Default Timeline",3e3,function(e,t){e.stop();e.getSymbol(".menu").play(197)})})("Mela-Bella-3");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",2111,function(e,t){e.getSymbol(".menu").play("in")});i.bindTriggerAction(n,e,"Default Timeline",3e3,function(e,t){e.stop();e.getSymbol(".menu").play(197)})})("Mela-Bella-4");(function(e){i.bindTriggerAction(n,e,"Default Timeline",497,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",2104,function(e,t){e.getSymbol(".menu").play("in")});i.bindTriggerAction(n,e,"Default Timeline",3e3,function(e,t){e.stop();e.getSymbol(".menu").play(197)})})("Mela-Bella-5");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)})})("Menu");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("MENUz");(function(e){})("musica");(function(e){})("testina");(function(e){i.bindTriggerAction(n,e,"Default Timeline",72e3,function(e,t){e.play(0)})})("Farfalle");(function(e){})("play")})(jQuery,AdobeEdge,"Quadro05");