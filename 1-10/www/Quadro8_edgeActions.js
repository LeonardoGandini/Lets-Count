/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){var e=t.$(".fumello").position();e.top>=100&&t.getComposition().getStage().getSymbol("FUMELLO").play("USCITA")}function i(){function n(){(function(){s("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})();setTimeout(function(){a("audio/quadri/Q8.mp3")},2e3)}function s(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);i=new Media(e);i.play()}function o(){i&&i.pause()}function a(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);u=new Media(e);u.play()}function b(e){navigator.userAgent.match(/android/gi)&&(e="/android_asset/www/"+e);y=new Media(e);y.play()}document.addEventListener("deviceready",n,!1);var i=null,u=null,f=null,l=null,c=null,h=null,p=null,d=null,v=null,m=null,g={suono1:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);f=new Media(t);f.play()},suono2:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);l=new Media(t);l.play()},suono3:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);c=new Media(t);c.play()},suono4:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);h=new Media(t);h.play()},suono5:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);p=new Media(t);p.play()},suono6:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);d=new Media(t);d.play()},suono7:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);v=new Media(t);v.play()},suono8:function(t){navigator.userAgent.match(/android/gi)&&(t="/android_asset/www/"+t);m=new Media(t);m.play()}};e(".numeris").hide();e(".reload").hide();e(".paperatutto2").hide();e(".paperatutto3").hide();e(".paperatutto4").hide();e(".paperatutto5").hide();e(".paperatutto6").hide();e(".paperatutto7").hide();e(".paperatutto8").hide();e(".trigduck2").hide();e(".trigduck3").hide();e(".trigduck4").hide();e(".trigduck5").hide();e(".trigduck6").hide();e(".trigduck7").hide();e(".trigduck8").hide();var y=null;e(".trigduck1").bind(toccomagico,function(){var n=1;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".trigduck2").bind(toccomagico,function(){var n=2;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".trigduck3").bind(toccomagico,function(){var n=3;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".trigduck4").bind(toccomagico,function(){var n=4;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".trigduck5").bind(toccomagico,function(){var n=5;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".trigduck6").bind(toccomagico,function(){var n=6;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".trigduck7").bind(toccomagico,function(){var n=7;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".trigduck8").bind(toccomagico,function(){var n=8;b("audio/duck.mp3");setTimeout(function(){t.getSymbol(".menu").play();r();g["suono"+n]("audio/numbers/S00"+n+".mp3");t.$(".fumnum"+n).css({"background-image":"url(images/svgNum"+n+".svg)"});e(".numeris").hide();t.getSymbol("numerazio").$("Num-"+n).show();t.getSymbol("numerazio").play("in");t.getSymbol("Scoiattolo").play("ani")},3e3);setTimeout(function(){t.getSymbol(".menu").play("chiusura")},6e3);e(".reload").fadeIn();e(this).fadeOut();t.getSymbol("paperatutto"+n).play("in")});e(".paperatutto1").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto1").getSymbol("papera1").play("testa");b("audio/duck.mp3")});e(".paperatutto2").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto2").getSymbol("papera2").play("testa");b("audio/duck.mp3")});e(".paperatutto3").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto3").getSymbol("papera3").play("testa");b("audio/duck.mp3")});e(".paperatutto4").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto4").getSymbol("papera4").play("testa");b("audio/duck.mp3")});e(".paperatutto5").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto5").getSymbol("papera5").play("testa");b("audio/duck.mp3")});e(".paperatutto6").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto6").getSymbol("papera6").play("testa");b("audio/duck.mp3")});e(".paperatutto7").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto7").getSymbol("papera7").play("testa");b("audio/duck.mp3")});e(".paperatutto8").bind(toccomagico,function(){t.getComposition().getStage().getSymbol("paperatutto8").getSymbol("papera8").play("testa");b("audio/duck.mp3")});e(".reload").bind(toccomagico,function(){t.getSymbol(this).play("in");t.getComposition().getStage().getSymbol("paperatutto1").stop(0);t.getComposition().getStage().getSymbol("paperatutto2").stop(0);t.getComposition().getStage().getSymbol("paperatutto3").stop(0);t.getComposition().getStage().getSymbol("paperatutto4").stop(0);t.getComposition().getStage().getSymbol("paperatutto5").stop(0);t.getComposition().getStage().getSymbol("paperatutto6").stop(0);t.getComposition().getStage().getSymbol("paperatutto7").stop(0);t.getComposition().getStage().getSymbol("paperatutto8").stop(0);e(".trigduck1").show();e(".trigduck2").show();e(".trigduck3").show();e(".trigduck4").show();e(".trigduck5").show();e(".trigduck6").show();e(".trigduck7").show();e(".trigduck8").show();e(".numeris").hide();e(".reload").fadeOut();t.$(".fumnum1").css({"background-image":"url(images/svgBWNum1.svg)"});t.$(".fumnum2").css({"background-image":"url(images/svgBWNum2.svg)"});t.$(".fumnum3").css({"background-image":"url(images/svgBWNum3.svg)"});t.$(".fumnum4").css({"background-image":"url(images/svgBWNum4.svg)"});t.$(".fumnum5").css({"background-image":"url(images/svgBWNum5.svg)"});t.$(".fumnum6").css({"background-image":"url(images/svgBWNum6.svg)"});t.$(".fumnum7").css({"background-image":"url(images/svgBWNum7.svg)"});t.$(".fumnum8").css({"background-image":"url(images/svgBWNum8.svg)"});t.$(".fumnum9").css({"background-image":"url(images/svgBWNum9.svg)"});t.$(".fumnum10").css({"background-image":"url(images/svgBWNum10.svg)"})});t.$("trigger-coda").bind(toccomagico,function(){t.getSymbol("Scoiattolo").play("coda")});var w=0;setInterval(function(){t.getSymbol("Scoiattolo").play("coda")},1e4);t.getSymbol("FUMELLO").play("ENTRATA");e(".fumello").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("ENTRATA")});e(".fume").bind(toccomagico,function(){t.getSymbol("FUMELLO").play("USCITA")});e(".playvoce").bind(toccomagico,function(){t.getSymbol(this).play("in");a("audio/quadri/Q8.mp3")});avanti="Quadro9.html";indietro="Quadro7.html";e(".next, .prev, .musica, .home").bind(toccomagico,function(){t.getSymbol(this).play("in")});e(".testina").bind(toccomagico,function(){t.getSymbol(".menu").play();r()});t.$(".next, .prev").css({"-webkit-filter":"drop-shadow(0 5px 10px rgba(0,0,0,.5))"});e(".musica").toggle(function(){e(".musicasvg").css({"background-image":"url(images/svg-musicBW.svg)"});o()},function(){e(".musicasvg").css({"background-image":"url(images/svg-music.svg)"});(function(){s("audio/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()});setInterval(function(){switch(w++%4){case 0:t.getComposition().getStage().getSymbol("giunco").play("breve");break;case 1:t.getComposition().getStage().getSymbol("giunco2").play("breve");break;case 2:t.getComposition().getStage().getSymbol("giunco3").play("breve");break;case 3:t.getComposition().getStage().getSymbol("giunco4").play("breve")}},6e3);setInterval(function(){switch(w++%4){case 0:t.getSymbol("wateruno").play("in");break;case 1:t.getSymbol("waterdue").play("in");break;case 2:t.getSymbol("watertre").play("in")}},3e3)}yepnope({load:["cordova.js"],complete:i});toccomagico="touchstart MSPointerDown pointerdown"})})("stage");(function(e){})("numerazio");(function(e){})("play");(function(e){i.bindTriggerAction(n,e,"Default Timeline",500,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1500,function(e,t){e.stop(0)})})("FUMELLO");(function(e){})("MENUz");(function(e){i.bindTriggerAction(n,e,"Default Timeline",196,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",384,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){});i.bindTriggerAction(n,e,"Default Timeline",223,function(e,t){e.play()});i.bindTriggerAction(n,e,"Default Timeline",14,function(e,t){e.getSymbol(".testina").play()});i.bindTriggerAction(n,e,"Default Timeline",236,function(e,t){e.getSymbol(".testina").play()})})("Menu");(function(e){})("musica");(function(e){})("testina");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(avanti,"_self")})})("NEXT");(function(e){i.bindTriggerAction(n,e,"Default Timeline",140,function(e,t){window.open(indietro,"_self")})})("PREV");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("reload");(function(e){i.bindTriggerAction(n,e,"Default Timeline",105e3,function(e,t){e.play(0)})})("NUVOLA");(function(e){i.bindTriggerAction(n,e,"Default Timeline",2062,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",529,function(e,t){e.stop(0)})})("Scoiattolo");(function(e){i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){e.stop()});i.bindTriggerAction(n,e,"Default Timeline",1684,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",5672,function(e,t){e.stop(0)})})("papera");(function(e){i.bindTriggerAction(n,e,"Default Timeline",4101,function(e,t){e.stop(0)});i.bindTriggerAction(n,e,"Default Timeline",7750,function(e,t){e.stop(0)})})("giunco");(function(t){i.bindTriggerAction(n,t,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,t,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto1").getSymbol("papera1").play("becco")});i.bindTriggerAction(n,t,"Default Timeline",919,function(t,n){e(".paperatutto2").fadeIn();e(".trigduck2").show()});i.bindTriggerAction(n,t,"Default Timeline",4234,function(e,t){e.getComposition().getStage().getSymbol("paperatutto1").getSymbol("papera1").play("testa")});i.bindTriggerAction(n,t,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto1");(function(t){i.bindTriggerAction(n,t,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,t,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto2").getSymbol("papera2").play("becco")});i.bindTriggerAction(n,t,"Default Timeline",919,function(t,n){e(".paperatutto3").fadeIn();e(".trigduck3").show()});i.bindTriggerAction(n,t,"Default Timeline",4234,function(e,t){e.getComposition().getStage().getSymbol("paperatutto2").getSymbol("papera2").play("testa")});i.bindTriggerAction(n,t,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto2");(function(t){i.bindTriggerAction(n,t,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,t,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto4").getSymbol("papera4").play("becco")});i.bindTriggerAction(n,t,"Default Timeline",919,function(t,n){e(".paperatutto5").fadeIn();e(".trigduck5").show()});i.bindTriggerAction(n,t,"Default Timeline",4250,function(e,t){e.getComposition().getStage().getSymbol("paperatutto4").getSymbol("papera4").play("testa")});i.bindTriggerAction(n,t,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto4");(function(e){i.bindTriggerAction(n,e,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,e,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto8").getSymbol("papera8").play("becco")});i.bindTriggerAction(n,e,"Default Timeline",4234,function(e,t){e.getComposition().getStage().getSymbol("paperatutto8").getSymbol("papera8").play("testa")});i.bindTriggerAction(n,e,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto8");(function(t){i.bindTriggerAction(n,t,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,t,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto6").getSymbol("papera6").play("becco")});i.bindTriggerAction(n,t,"Default Timeline",919,function(t,n){e(".paperatutto7").fadeIn();e(".trigduck7").show()});i.bindTriggerAction(n,t,"Default Timeline",4234,function(e,t){e.getComposition().getStage().getSymbol("paperatutto6").getSymbol("papera6").play("testa")});i.bindTriggerAction(n,t,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto6");(function(t){i.bindTriggerAction(n,t,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,t,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto3").getSymbol("papera3").play("becco")});i.bindTriggerAction(n,t,"Default Timeline",919,function(t,n){e(".paperatutto4").fadeIn();e(".trigduck4").show()});i.bindTriggerAction(n,t,"Default Timeline",4234,function(e,t){e.getComposition().getStage().getSymbol("paperatutto3").getSymbol("papera3").play("testa")});i.bindTriggerAction(n,t,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto3");(function(t){i.bindTriggerAction(n,t,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,t,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto5").getSymbol("papera5").play("becco")});i.bindTriggerAction(n,t,"Default Timeline",919,function(t,n){e(".paperatutto6").fadeIn();e(".trigduck6").show()});i.bindTriggerAction(n,t,"Default Timeline",4234,function(e,t){e.getComposition().getStage().getSymbol("paperatutto5").getSymbol("papera5").play("testa")});i.bindTriggerAction(n,t,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto5");(function(t){i.bindTriggerAction(n,t,"Default Timeline",0,function(e,t){e.getComposition().getStage().getSymbol("giunco").play("normale");e.getComposition().getStage().getSymbol("giunco2").play("normale");e.getComposition().getStage().getSymbol("giunco4").play("normale");e.getComposition().getStage().getSymbol("giunco3").play("normale")});i.bindTriggerAction(n,t,"Default Timeline",351,function(e,t){e.getComposition().getStage().getSymbol("paperatutto7").getSymbol("papera7").play("becco")});i.bindTriggerAction(n,t,"Default Timeline",919,function(t,n){e(".paperatutto8").fadeIn();e(".trigduck8").show()});i.bindTriggerAction(n,t,"Default Timeline",4234,function(e,t){e.getComposition().getStage().getSymbol("paperatutto7").getSymbol("papera7").play("testa")});i.bindTriggerAction(n,t,"Default Timeline",4500,function(e,t){e.stop()})})("paperatutto7");(function(e){i.bindTriggerAction(n,e,"Default Timeline",4117,function(e,t){e.stop(0)})})("fronde3WATER");(function(e){i.bindTriggerAction(n,e,"Default Timeline",4e3,function(e,t){e.stop(0)})})("fronde2WATER")})(jQuery,AdobeEdge,"Quadro-08");