/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"${_Text}","touchstart",function(e,t){window.open("index.html","_self")});i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){function a(e){device.platform=="Android"&&(e="/android_asset/www/"+e);n=new Media(e);n.play()}function f(){n&&n.pause()}function l(){(function(){a("Suoni/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()}function c(e){device.platform=="Android"&&(e="/android_asset/www/"+e);r=new Media(e);r.play()}function h(e){device.platform=="Android"&&(e="/android_asset/www/"+e);i=new Media(e);i.play()}function p(e){device.platform=="Android"&&(e="/android_asset/www/"+e);s=new Media(e);s.play()}function d(e){device.platform=="Android"&&(e="/android_asset/www/"+e);o=new Media(e);o.play()}function v(e){device.platform=="Android"&&(e="/android_asset/www/"+e);u=new Media(e);u.play()}document.addEventListener("deviceready",l,!1);var n=null,r=null,i=null,s=null,o=null,u=null;e(".uno").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");c("Suoni/numbers/Singoli-one.mp3")});e(".due").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");h("Suoni/numbers/Singoli-two.mp3")});e(".tre").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");p("Suoni/numbers/Singoli-three.mp3")});e(".quattro").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");d("Suoni/numbers/Singoli-four.mp3")});e(".cinque").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in");v("Suoni/numbers/Singoli-five.mp3")});e(".musica").toggle(function(){e(".musica").css({"-webkit-filter":"saturate(0%)",opacity:"0.6"});f()},function(){e(".musica").css({"-webkit-filter":"saturate(100%)",opacity:"1"});(function(){a("Suoni/LaMadeline.mp3");setTimeout(arguments.callee,301200)})()})}navigator.userAgent.match(/MSIE/i)&&yepnope({load:["libs/cordovaIE.js"],complete:r});navigator.userAgent.match(/android/gi)&&yepnope({load:["libs/cordova.js"],complete:r});(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&yepnope({load:["libs/cordovaIOS.js"],complete:r});e("#prelo").css({display:"none"});e(".home, .musica").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in")})})})("stage");(function(e){})("Preloader");(function(e){})("musica");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("uno");(function(e){})("due");(function(e){})("tre");(function(e){})("quattro");(function(e){})("cinque");(function(e){})("Scoia")})(jQuery,AdobeEdge,"QuadroFinale");