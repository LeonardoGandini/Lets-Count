/***********************
* Adobe Edge Preloader
*
* Do Not Edit this file
*
***********************/window.AdobeEdge=window.AdobeEdge||{};if(!AdobeEdge.yepnope){(function(e,t,n){function r(e){return"[object Function]"==d.call(e)}function i(e){return"string"==typeof e}function s(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function u(){var e=v.shift();m=1,e?e.t?h(function(){("c"==e.t?k.injectCss:k.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),u()):m=0}function a(e,n,r,i,s,a,f){function l(t){if(!d&&o(c.readyState)&&(w.r=d=1,!m&&u(),c.onload=c.onreadystatechange=null,t)){"img"!=e&&h(function(){b.removeChild(c)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var f=f||k.errorTimeout,c=t.createElement(e),d=0,g=0,w={t:r,s:n,e:s,a:a,x:f};1===T[n]&&(g=1,T[n]=[]),"object"==e?c.data=n:(c.src=n,c.type=e),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,w),"img"!=e&&(g||2===T[n]?(b.insertBefore(c,y?null:p),h(l,f)):T[n].push(c))}function f(e,t,n,r,s){return m=0,t=t||"j",i(e)?a("c"==t?E:w,e,t,this.i++,n,r,s):(v.splice(this.i++,0,e),1==v.length&&u()),this}function l(){var e=k;return e.loader={load:f,i:0},e}var c=t.documentElement,h=e.setTimeout,p=t.getElementsByTagName("script")[0],d={}.toString,v=[],m=0,g="MozAppearance"in c.style,y=g&&!!t.createRange().compareNode,b=y?c:p.parentNode,c=e.opera&&"[object Opera]"==d.call(e.opera),c=!!t.attachEvent&&!c,w=g?"object":c?"script":"img",E=c?"script":w,S=Array.isArray||function(e){return"[object Array]"==d.call(e)},x=[],T={},N={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}},C,k;k=function(e){function t(e){var e=e.split("!"),t=x.length,n=e.pop(),r=e.length,n={url:n,origUrl:n,prefixes:e},i,s,o;for(s=0;s<r;s++)o=e[s].split("="),(i=N[o.shift()])&&(n=i(n,o));for(s=0;s<t;s++)n=x[s](n);return n}function o(e,i,s,o,u){var a=t(e),f=a.autoCallback;a.url.split(".").pop().split("?").shift(),a.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),a.instead?a.instead(e,i,s,o,u):(T[a.url]?a.noexec=!0:T[a.url]=1,s.load(a.url,a.forceCSS||!a.forceJS&&"css"==a.url.split(".").pop().split("?").shift()?"c":n,a.noexec,a.attrs,a.timeout),(r(i)||r(f))&&s.load(function(){l(),i&&i(a.origUrl,u,o),f&&f(a.origUrl,u,o),T[a.url]=2})))}function u(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}),o(e,f,t,0,u);else if(Object(e)===e)for(p in h=function(){var t=0,n;for(n in e)e.hasOwnProperty(n)&&t++;return t}(),e)e.hasOwnProperty(p)&&(!n&&!--h&&(r(f)?f=function(){var e=[].slice.call(arguments);l.apply(this,e),c()}:f[p]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),c()}}(l[p])),o(e[p],f,t,p,u))}else!n&&c()}var u=!!e.test,a=e.load||e.both,f=e.callback||s,l=f,c=e.complete||s,h,p;n(u?e.yep:e.nope,!!a),a&&n(a)}var a,f,c=this.yepnope.loader;if(i(e))o(e,0,c,0);else if(S(e))for(a=0;a<e.length;a++)f=e[a],i(f)?o(f,0,c,0):S(f)?k(f):Object(f)===f&&u(f,c);else Object(e)===e&&u(e,c)},k.addPrefix=function(e,t){N[e]=t},k.addFilter=function(e){x.push(e)},k.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",C=function(){t.removeEventListener("DOMContentLoaded",C,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=u,e.yepnope.injectJs=function(e,n,r,i,a,f){var l=t.createElement("script"),c,d,i=i||k.errorTimeout;l.src=e;for(d in r)l.setAttribute(d,r[d]);n=f?u:n||s,l.onreadystatechange=l.onload=function(){!c&&o(l.readyState)&&(c=1,n(),l.onload=l.onreadystatechange=null)},h(function(){c||(c=1,n(1))},i),a?l.onload():p.parentNode.insertBefore(l,p)},e.yepnope.injectCss=function(e,n,r,i,o,a){var i=t.createElement("link"),f,n=a?u:n||s;i.href=e,i.rel="stylesheet",i.type="text/css";for(f in r)i.setAttribute(f,r[f]);o||(p.parentNode.insertBefore(i,p),h(n,0))}})(this,document);AdobeEdge.yepnope=window.yepnope}(function(e){function r(e){var t=n.style,r;for(i=0;i<e.length;i++)if(r=e[i],t[r]!==void 0)return!0;return!1}function s(){n.cssText="background-color:rgba(150,255,150,.5)";return(""+n.style.backgroundColor).indexOf("rgba")==0?!0:!1}function c(e){e=""+e;if(!a&&e.indexOf("rgba")==0){var t=e.lastIndexOf(",");t>0&&(e="rgb("+e.substring(5,t)+")")}return e}function h(){for(var e=0;e<AdobeEdge._preloaders.length;e++)AdobeEdge._preloaders[e]()}function p(){AdobeEdge._playWhenReady=!0;for(var e=0;e<AdobeEdge._readyplayers.length;e++)AdobeEdge._readyplayers[e]()}function d(n){t[n]&&(n=t[n]);AdobeEdge.preload.got[n]=!0;n==AdobeEdge.preload.last&&(!AdobeEdge.bootstrapLoading||AdobeEdge._playWhenReady?AdobeEdge.okToLaunchComposition(e):l=!0,AdobeEdge.preload.busy=!1,AdobeEdge.preload.q.length>0&&(n=AdobeEdge.preload.q.pop(),AdobeEdge.requestResources(n.files,n.callback)))}function N(e,t){AdobeEdge.preload=AdobeEdge.preload||[];AdobeEdge.preload.q=AdobeEdge.preload.q||[];t||!_()?v=e:AdobeEdge.preload.busy?AdobeEdge.preload.q.push({files:e,callback:d}):AdobeEdge.requestResources(e,d)}function C(e){var t={};t.num=parseFloat(e);typeof e=="string"&&(t.units=e.match(/[a-zA-Z%]+$/));t.units&&typeof t.units=="object"&&(t.units=t.units[0]);return t}function k(e){var t=e;e!=="auto"&&(e=C(e),!e||!e.units)&&(t+="px");return t}function L(e,t){if(String(e.className).indexOf(t)!=-1)return e;for(var n=e.childNodes,r=0;r<n.length;r++){var i=L(n[r],t);if(i!=0)return i}return!1}function A(t,n,r){var i=document.getElementsByTagName("body")[0],r=r||L(i,e),s,o,u,a;r?r.style.position!="absolute"&&r.style.position!="relative"&&(r.style.position="relative"):r=i;for(var f=0;f<t.length;f++){i=t[f];i.type=="image"?(s=document.createElement("img"),s.src=i.fill[1]):s=document.createElement("div");s.id=i.id;a=s.style;if(i.type=="text"){if(o=i.font){o[0]&&o[0]!==""&&(a.fontFamily=o[0]);typeof o[1]!="object"&&(o[1]=[o[1]]);o[1][1]||(o[1][1]="px");o[1][0]&&o[1][0]!==""&&(a.fontSize=o[1][0]+o[1][1]);o[2]&&o[2]!==""&&(a.color=c(o[2]));o[3]&&o[3]!==""&&(a.fontWeight=o[3]);o[4]&&o[4]!==""&&(a.textDecoration=i.font[4]);o[5]&&o[5]!==""&&(a.fontStyle=i.font[5])}i.align&&i.align!="auto"&&(a.textAlign=i.align);i.position&&(a.position=i.position);(!i.rect[2]||i.rect[2]<=0)&&(!i.rect[3]||i.rect[3]<=0)&&(a.whiteSpace="nowrap");s.innerHTML=i.text}n&&(s.className=n);a.position="absolute";o=i.rect[0];u=i.rect[1];if(i.transform&&i.transform[0]){var l=i.transform[0][0],h=C(l);if(h&&h.units&&(l=h.num,h.units=="%"&&i.rect[2])){var h=i.rect[2],p=C(i.rect[2]);p&&p.units&&(h=p.num,p.units=="%"&&(h=h/100*r.offsetWidth));l=l/100*h;r.offsetWidth>0&&(l=l/r.offsetWidth*100)}if(h=C(o))o=h.num;o+=l;h.units||(h.units="px");o+=h.units;if(i.transform[0].length>1){l=i.transform[0][1];if((h=C(l))&&h.units)if(l=h.num,h.units=="%"&&i.rect[3]){h=i.rect[3];(p=C(i.rect[3]))&&p.units&&(h=p.num,p.units=="%"&&(h=h/100*r.offsetHeight));l=l/100*h;r.offsetHeight>0&&(l=l/r.offsetHeight*100)}if(h=C(u))u=h.num;u+=l;h.units||(h.units="px");u+=h.units}}a.left=k(o);a.top=k(u);a.width=k(i.rect[2]);a.height=k(i.rect[3]);i.linkURL&&(S[s.id]=i,s.onclick=function(){var e=S[this.id];e.linkTarget?window.open(e.linkURL,e.linkTarget):window.location.href=e.linkURL},a.cursor="pointer");r.appendChild(s);if(i.c)for(a=0;a<i.c.length;a++)A(i.c[a],n,s)}}function _(){return o?E&&!u?!1:!0:!1}function D(){window.AdobeEdge.loaded=!0;O({event:"begin"});_()?(g&&g.dom&&A(g.dom,"edgePreload"+e),v&&!b&&(N(v),v=void 0)):m&&m.dom&&(w&&w({event:"done",progress:1,reason:"downlevel"}),A(m.dom))}var t,n=document.createElement("div"),o=r(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"]),u=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,a=s(),f=window.JSON&&window.JSON.parse&&window.JSON.stringify,l=!1;AdobeEdge._preloaders=AdobeEdge._preloaders||[];AdobeEdge._preloaders.push(function(){v&&(N(v),v=void 0)});AdobeEdge._readyplayers=AdobeEdge._readyplayers||[];AdobeEdge._readyplayers.push(function(){l&&AdobeEdge.okToLaunchComposition(e)});AdobeEdge.requestResources=AdobeEdge.requestResources||function(e,t){AdobeEdge.yepnope.errorTimeout=4e3;AdobeEdge.preload.busy=!0;AdobeEdge.preload.got=AdobeEdge.preload.got||{};var n,r=e.length,i=[],s;for(n=0;n<r;n++){s=e[n];if(typeof s=="string")url=s,s={load:url};else if(url=s.yep||s.load,s.callback){var o=s.callback;s.callback=function(e,n,r){o(e,n,r)&&t(e,n,r)}}s.callback||(s.callback=t);AdobeEdge.preload.got[url]||(i.push(s),AdobeEdge.preload.last=url)}i.length&&AdobeEdge.yepnope(i)};var v,m,g,y,b,w,E,S={},x,T,O=function(e){e?O&&setTimeout(O,20):e={event:"loading",progress:0};w&&w(e)},M=[];window.AdobeEdge.bootstrapListeners||(window.AdobeEdge.bootstrapListeners=[]);window.AdobeEdge.bootstrapCallback=function(e){window.AdobeEdge.bootstrapListeners.push(e);if(M.length>0)for(var t=0;t<M.length;t++)e(M[t])};window.AdobeEdge.preloadComplete||(window.AdobeEdge.preloadComplete={});window.AdobeEdge.preloadComplete[e]=function(e){AdobeEdge.$_(".edgePreload"+e).css("display","none");O=null;w&&w({event:"done",progress:1,reason:"complete"});M.push(e);for(var t=window.AdobeEdge.bootstrapListeners.length,n=0;n<t;n++)try{window.AdobeEdge.bootstrapListeners[n](e)}catch(r){console.log("bootstrap error "+r)}};window.AdobeEdge=window.AdobeEdge||{};window.AdobeEdge.framework="jquery";document.addEventListener?window.addEventListener("load",D,!1):document.attachEvent&&window.attachEvent("onload",D);E=!0;y=!0;t={};x=[{load:"edge_includes/jquery-1.7.1.min.js"},{load:"edge_includes/edge.2.0.1.min.js"},{load:"Quadro8_edge.js"},{load:"Quadro8_edgeActions.js"}];if(AdobeEdge.bootstrapLoading){b=!0;AdobeEdge.loadResources=h;AdobeEdge.playWhenReady=p}N(x,y);g={dom:[]};m={dom:[]}})("Quadro-08");