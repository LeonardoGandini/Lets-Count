/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/(function(e,t,n){var r=t.Composition,i=t.Symbol;(function(t){i.bindElementAction(n,t,"${_Text}","touchstart",function(e,t){window.open("index.html","_self")});i.bindElementAction(n,t,"document","compositionReady",function(t,n){function r(){function n(e){device.platform=="Android"&&(e="/android_asset/www/"+e);t=new Media(e);t.play()}function r(){t&&t.pause()}function i(){n("Suoni/LaMadeline.mp3")}document.addEventListener("deviceready",i,!1);var t=null;e(".musica").toggle(function(){e(".musica").css({"-webkit-filter":"saturate(0%)",opacity:"0.6"});r()},function(){e(".musica").css({"-webkit-filter":"saturate(100%)",opacity:"1"});n("Suoni/LaMadeline.mp3")})}navigator.userAgent.match(/MSIE/i)&&yepnope({load:["libs/cordovaIE.js"],complete:r});navigator.userAgent.match(/android/gi)&&yepnope({load:["libs/cordova.js"],complete:r});(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i))&&yepnope({load:["libs/cordovaIOS.js"],complete:r});e("#prelo").css({display:"none"});e(".home, .musica, .uno, .due, .tre, .quattro, .cinque").bind("touchstart MSPointerDown",function(){t.getSymbol(this).play("in")})})})("stage");(function(e){})("Preloader");(function(e){})("musica");(function(e){i.bindTriggerAction(n,e,"Default Timeline",406,function(e,t){window.open("index.html","_self")})})("HOME_butt");(function(e){})("uno");(function(e){})("due");(function(e){})("tre");(function(e){})("quattro");(function(e){})("cinque");(function(e){})("Scoia")})(jQuery,AdobeEdge,"QuadroFinale");