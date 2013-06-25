/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){yepnope({load:["libs/jplayer.min.js","libs/playBG-min.js"],complete:function(){}});e("#prelo").css({display:"none"});AudioFoglie=new Audio("Suoni/foglia.mp3");AudioApi=new Audio("Suoni/Bees.mp3");AudioUno=new Audio("Suoni/numbers/one.mp3");AudioDue=new Audio("Suoni/numbers/two.mp3");AudioTre=new Audio("Suoni/numbers/three.mp3");AudioQuattro=new Audio("Suoni/numbers/four.mp3");AudioRicci=new Audio("Suoni/Lumaca01.mp3");t.$(".Nuvola").css({"-webkit-filter":"drop-shadow(0 5px 15px rgba(0,0,0,.4))"});AudioQ4=new Audio("Suoni/quadri/Q4.mp3");AudioQ4.load();AudioQ4.play();e(".playvoce").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");AudioQ4.load();AudioQ4.play()});e(".fioreani, .FioreFragole").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in")});e(".FragStat").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");AudioFoglie.load();AudioFoglie.play()});e(".libellulaTrigger").bind("touchstart MSPointerDown",function(){t.getSymbol(".libellulalat").play("in")});e(".fragola2trigger, .fragola3trigger, .fragola4trigger").hide();e(".fragola1").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");e(".fragola2trigger").show()});e(".fragola2trigger").bind("touchstart MSPointerDown",function(){t.getSymbol(".fragola2").play("in");e(".fragola3trigger").show()});e(".fragola3trigger").bind("touchstart MSPointerDown",function(){t.getSymbol(".fragola3").play("in");e(".fragola4trigger").show()});e(".fragola4trigger").bind("touchstart MSPointerDown",function(){t.getSymbol(".fragola4").play("in")});t.getSymbol(".codaani").play("in");e(".codatrigger").bind("touchstart MSPointerDown",function(){t.getSymbol(".codaani").play("animaziocoda")});t.getSymbol("FUMELLO").play("in");e(".riccio").bind("touchstart MSPointerDown",function(){AudioRicci.load();AudioRicci.play();e(this).animate({top:"-=20px"},"200");e(this).animate({top:"+=20px"},"1")});avanti="Quadro5.html";indietro="Quadro3.html";e(".next, .prev, .home, .musica").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in")});e(".musica").toggle(function(){e(".musica").css({"-webkit-filter":"saturate(0%)",opacity:"0.6"})},function(){e(".musica").css({"-webkit-filter":"saturate(100%)",opacity:"1"})});e(".testina").bind("touchstart MSPointerDown",function(){t.getSymbol(".menu").play()});t.$(".uno, .due, .tre, .quattro, .cinque").css({"-webkit-filter":"saturate(0%)",opacity:"0.4"});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"})})})("stage");(function(e){i.bindTriggerAction(n,e,"Default Timeline",614,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",1e3,function(e,t){e.play()});i.bindElementAction(n,e,"${_Rectangle}","touchstart MSPointerDown",function(e,t){e.play(1e3)});i.bindElementAction(n,e,"${_Fumello}","touchstart MSPointerDown",function(e,t){e.play()})})("FUMELLO");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA");(function(e){})("Preloader");(function(e){i.bindTriggerAction(n,e,"Default Timeline",37500,function(e,t){e.play(0)})})("Coda");(function(e){})("CodaAni");(function(e){})("Cespuglio-Giuncoso");(function(e){})("Scoiattolo");(function(e){})("Fiore-Fragole");(function(e){})("FragoleStatiche");(function(e){i.bindTriggerAction(n,e,"Default Timeline",433,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",857,function(e,t){AudioUno.load();AudioUno.play();e.$(".uno").css({"-webkit-filter":"saturate(100%)",opacity:"1"})});i.bindTriggerAction(n,e,"Default Timeline",2336,function(e,t){e.getSymbol(".menu").play("in")});i.bindTriggerAction(n,e,"Default Timeline",3448,function(e,t){e.stop();e.getSymbol(".menu").play(197)})})("Fragola-1");(function(e){})("FragStat");(function(e){i.bindTriggerAction(n,e,"Default Timeline",25500,function(e,t){e.play(0)})})("Ricci");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2e4,function(e,t){e.play(0)})})("LibellulaAuto");(function(e){i.bindTriggerAction(n,e,"Default Timeline",428,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",1250,function(e,t){e.$(".due").css({"-webkit-filter":"saturate(100%)",opacity:"1"})});i.bindTriggerAction(n,e,"Default Timeline",902,function(e,t){AudioDue.load();AudioDue.play()});i.bindTriggerAction(n,e,"Default Timeline",3451,function(e,t){e.stop();e.getSymbol(".menu").play(197)});i.bindTriggerAction(n,e,"Default Timeline",2426,function(e,t){e.getSymbol(".menu").play("in")})})("Fragola-2");(function(e){i.bindTriggerAction(n,e,"Default Timeline",428,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",1250,function(e,t){e.$(".tre").css({"-webkit-filter":"saturate(100%)",opacity:"1"})});i.bindTriggerAction(n,e,"Default Timeline",878,function(e,t){AudioTre.load();AudioTre.play()});i.bindTriggerAction(n,e,"Default Timeline",2437,function(e,t){e.getSymbol(".menu").play("in")});i.bindTriggerAction(n,e,"Default Timeline",3651,function(e,t){e.stop();e.getSymbol(".menu").play(197)})})("Fragola-3");(function(e){i.bindTriggerAction(n,e,"Default Timeline",428,function(e,t){e.getSymbol(".scoiattolo").play("in");var n=e.$(".fumello").position();n.top>=100&&e.getComposition().getStage().getSymbol("FUMELLO").play(1e3)});i.bindTriggerAction(n,e,"Default Timeline",848,function(e,t){AudioQuattro.load();AudioQuattro.play();e.$(".quattro").css({"-webkit-filter":"saturate(100%)",opacity:"1"})});i.bindTriggerAction(n,e,"Default Timeline",3449,function(e,t){e.stop();e.getSymbol(".menu").play(197)});i.bindTriggerAction(n,e,"Default Timeline",2385,function(e,t){e.getSymbol(".menu").play("in")})})("Fragola-4");(function(e){})("libellulalat");(function(e){})("Down-level");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)})})("Menu");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("musica");(function(e){})("testina");(function(e){})("MENUz");(function(e){})("play")})(jQuery,AdobeEdge,"Quadro04");