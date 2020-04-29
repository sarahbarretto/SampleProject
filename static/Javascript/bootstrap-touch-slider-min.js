/*

/!* Credits: Bootstrap, jQuery, TouchSwipe, Animate.css, FontAwesome*!/


!function(n){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],n):n("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(n){"use strict";function e(e){return!e||void 0!==e.allowPageScroll||void 0===e.swipe&&void 0===e.swipeStatus||(e.allowPageScroll=c),void 0!==e.click&&void 0===e.tap&&(e.tap=e.click),e||(e={}),e=n.extend({},n.fn.swipe.defaults,e),this.each(function(){var r=n(this),i=r.data(P);i||(i=new t(this,e),r.data(P,i))})}function t(e,t){function r(e){if(!(cn()||n(e.target).closest(t.excludedElements,Wn).length>0)){var r=e.originalEvent?e.originalEvent:e;if(!r.pointerType||"mouse"!=r.pointerType||0!=t.fallbackToMouseEvents){var i,o=r.touches,a=o?o[0]:r;return zn=E,o?Gn=o.length:t.preventDefaultEvents!==!1&&e.preventDefault(),Nn=0,Hn=null,Cn=null,Yn=null,Qn=0,_n=0,qn=0,Fn=1,Xn=0,Vn=wn(),un(),pn(0,a),!o||Gn===t.fingers||t.fingers===b||X()?(Bn=Mn(),2==Gn&&(pn(1,o[1]),_n=qn=mn(Zn[0].start,Zn[1].start)),(t.swipeStatus||t.pinchStatus)&&(i=U(r,zn))):i=!1,i===!1?(zn=S,U(r,zn),i):(t.hold&&(te=setTimeout(n.proxy(function(){Wn.trigger("hold",[r.target]),t.hold&&(i=t.hold.call(Wn,r,r.target))},this),t.longTapThreshold)),fn(!0),null)}}}function L(n){var e=n.originalEvent?n.originalEvent:n;if(zn!==x&&zn!==S&&!sn()){var r,i=e.touches,o=i?i[0]:e,a=dn(o);if(Jn=Mn(),i&&(Gn=i.length),t.hold&&clearTimeout(te),zn=y,2==Gn&&(0==_n?(pn(1,i[1]),_n=qn=mn(Zn[0].start,Zn[1].start)):(dn(i[1]),qn=mn(Zn[0].end,Zn[1].end),Yn=yn(Zn[0].end,Zn[1].end)),Fn=En(_n,qn),Xn=Math.abs(_n-qn)),Gn===t.fingers||t.fingers===b||!i||X()){if(Hn=On(a.start,a.end),Cn=On(a.last,a.end),q(n,Cn),Nn=xn(a.start,a.end),Qn=bn(),gn(Hn,Nn),r=U(e,zn),!t.triggerOnTouchEnd||t.triggerOnTouchLeave){var l=!0;if(t.triggerOnTouchLeave){var u=Dn(this);l=Pn(a.end,u)}!t.triggerOnTouchEnd&&l?zn=I(y):t.triggerOnTouchLeave&&!l&&(zn=I(x)),(zn==S||zn==x)&&U(e,zn)}}else zn=S,U(e,zn);r===!1&&(zn=S,U(e,zn))}}function k(n){var e=n.originalEvent?n.originalEvent:n,r=e.touches;if(r){if(r.length&&!sn())return ln(e),!0;if(r.length&&sn())return!0}return sn()&&(Gn=$n),Jn=Mn(),Qn=bn(),C()||!H()?(zn=S,U(e,zn)):t.triggerOnTouchEnd||t.triggerOnTouchEnd===!1&&zn===y?(t.preventDefaultEvents!==!1&&n.preventDefault(),zn=x,U(e,zn)):!t.triggerOnTouchEnd&&B()?(zn=x,N(e,zn,h)):zn===y&&(zn=S,U(e,zn)),fn(!1),null}function R(){Gn=0,Jn=0,Bn=0,_n=0,qn=0,Fn=1,un(),fn(!1)}function A(n){var e=n.originalEvent?n.originalEvent:n;t.triggerOnTouchLeave&&(zn=I(x),U(e,zn))}function j(){Wn.unbind(Rn,r),Wn.unbind(Un,R),Wn.unbind(An,L),Wn.unbind(jn,k),In&&Wn.unbind(In,A),fn(!1)}function I(n){var e=n,r=_(),i=H(),o=C();return!r||o?e=S:!i||n!=y||t.triggerOnTouchEnd&&!t.triggerOnTouchLeave?!i&&n==x&&t.triggerOnTouchLeave&&(e=S):e=x,e}function U(n,e){var t,r=n.touches;return(z()||W())&&(t=N(n,e,p)),(Y()||X())&&t!==!1&&(t=N(n,e,d)),on()&&t!==!1?t=N(n,e,g):an()&&t!==!1?t=N(n,e,v):rn()&&t!==!1&&(t=N(n,e,h)),e===S&&R(n),e===x&&(r?r.length||R(n):R(n)),t}function N(e,r,c){var f;if(c==p){if(Wn.trigger("swipeStatus",[r,Hn||null,Nn||0,Qn||0,Gn,Zn,Cn]),t.swipeStatus&&(f=t.swipeStatus.call(Wn,e,r,Hn||null,Nn||0,Qn||0,Gn,Zn,Cn),f===!1))return!1;if(r==x&&V()){if(clearTimeout(ee),clearTimeout(te),Wn.trigger("swipe",[Hn,Nn,Qn,Gn,Zn,Cn]),t.swipe&&(f=t.swipe.call(Wn,e,Hn,Nn,Qn,Gn,Zn,Cn),f===!1))return!1;switch(Hn){case i:Wn.trigger("swipeLeft",[Hn,Nn,Qn,Gn,Zn,Cn]),t.swipeLeft&&(f=t.swipeLeft.call(Wn,e,Hn,Nn,Qn,Gn,Zn,Cn));break;case o:Wn.trigger("swipeRight",[Hn,Nn,Qn,Gn,Zn,Cn]),t.swipeRight&&(f=t.swipeRight.call(Wn,e,Hn,Nn,Qn,Gn,Zn,Cn));break;case a:Wn.trigger("swipeUp",[Hn,Nn,Qn,Gn,Zn,Cn]),t.swipeUp&&(f=t.swipeUp.call(Wn,e,Hn,Nn,Qn,Gn,Zn,Cn));break;case l:Wn.trigger("swipeDown",[Hn,Nn,Qn,Gn,Zn,Cn]),t.swipeDown&&(f=t.swipeDown.call(Wn,e,Hn,Nn,Qn,Gn,Zn,Cn))}}}if(c==d){if(Wn.trigger("pinchStatus",[r,Yn||null,Xn||0,Qn||0,Gn,Fn,Zn]),t.pinchStatus&&(f=t.pinchStatus.call(Wn,e,r,Yn||null,Xn||0,Qn||0,Gn,Fn,Zn),f===!1))return!1;if(r==x&&F())switch(Yn){case u:Wn.trigger("pinchIn",[Yn||null,Xn||0,Qn||0,Gn,Fn,Zn]),t.pinchIn&&(f=t.pinchIn.call(Wn,e,Yn||null,Xn||0,Qn||0,Gn,Fn,Zn));break;case s:Wn.trigger("pinchOut",[Yn||null,Xn||0,Qn||0,Gn,Fn,Zn]),t.pinchOut&&(f=t.pinchOut.call(Wn,e,Yn||null,Xn||0,Qn||0,Gn,Fn,Zn))}}return c==h?(r===S||r===x)&&(clearTimeout(ee),clearTimeout(te),J()&&!nn()?(ne=Mn(),ee=setTimeout(n.proxy(function(){ne=null,Wn.trigger("tap",[e.target]),t.tap&&(f=t.tap.call(Wn,e,e.target))},this),t.doubleTapThreshold)):(ne=null,Wn.trigger("tap",[e.target]),t.tap&&(f=t.tap.call(Wn,e,e.target)))):c==g?(r===S||r===x)&&(clearTimeout(ee),clearTimeout(te),ne=null,Wn.trigger("doubletap",[e.target]),t.doubleTap&&(f=t.doubleTap.call(Wn,e,e.target))):c==v&&(r===S||r===x)&&(clearTimeout(ee),ne=null,Wn.trigger("longtap",[e.target]),t.longTap&&(f=t.longTap.call(Wn,e,e.target))),f}function H(){var n=!0;return null!==t.threshold&&(n=Nn>=t.threshold),n}function C(){var n=!1;return null!==t.cancelThreshold&&null!==Hn&&(n=vn(Hn)-Nn>=t.cancelThreshold),n}function Q(){return null!==t.pinchThreshold?Xn>=t.pinchThreshold:!0}function _(){var n;return n=t.maxTimeThreshold&&Qn>=t.maxTimeThreshold?!1:!0}function q(n,e){if(t.preventDefaultEvents!==!1)if(t.allowPageScroll===c)n.preventDefault();else{var r=t.allowPageScroll===f;switch(e){case i:(t.swipeLeft&&r||!r&&t.allowPageScroll!=w)&&n.preventDefault();break;case o:(t.swipeRight&&r||!r&&t.allowPageScroll!=w)&&n.preventDefault();break;case a:(t.swipeUp&&r||!r&&t.allowPageScroll!=T)&&n.preventDefault();break;case l:(t.swipeDown&&r||!r&&t.allowPageScroll!=T)&&n.preventDefault();break;case c:}}}function F(){var n=G(),e=Z(),t=Q();return n&&e&&t}function X(){return!!(t.pinchStatus||t.pinchIn||t.pinchOut)}function Y(){return!(!F()||!X())}function V(){var n=_(),e=H(),t=G(),r=Z(),i=C(),o=!i&&r&&t&&e&&n;return o}function W(){return!!(t.swipe||t.swipeStatus||t.swipeLeft||t.swipeRight||t.swipeUp||t.swipeDown)}function z(){return!(!V()||!W())}function G(){return Gn===t.fingers||t.fingers===b||!O}function Z(){return 0!==Zn[0].end.x}function B(){return!!t.tap}function J(){return!!t.doubleTap}function K(){return!!t.longTap}function $(){if(null==ne)return!1;var n=Mn();return J()&&n-ne<=t.doubleTapThreshold}function nn(){return $()}function en(){return(1===Gn||!O)&&(isNaN(Nn)||Nn<t.threshold)}function tn(){return Qn>t.longTapThreshold&&m>Nn}function rn(){return!(!en()||!B())}function on(){return!(!$()||!J())}function an(){return!(!tn()||!K())}function ln(n){Kn=Mn(),$n=n.touches.length+1}function un(){Kn=0,$n=0}function sn(){var n=!1;if(Kn){var e=Mn()-Kn;e<=t.fingerReleaseThreshold&&(n=!0)}return n}function cn(){return!(Wn.data(P+"_intouch")!==!0)}function fn(n){Wn&&(n===!0?(Wn.bind(An,L),Wn.bind(jn,k),In&&Wn.bind(In,A)):(Wn.unbind(An,L,!1),Wn.unbind(jn,k,!1),In&&Wn.unbind(In,A,!1)),Wn.data(P+"_intouch",n===!0))}function pn(n,e){var t={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return t.start.x=t.last.x=t.end.x=e.pageX||e.clientX,t.start.y=t.last.y=t.end.y=e.pageY||e.clientY,Zn[n]=t,t}function dn(n){var e=void 0!==n.identifier?n.identifier:0,t=hn(e);return null===t&&(t=pn(e,n)),t.last.x=t.end.x,t.last.y=t.end.y,t.end.x=n.pageX||n.clientX,t.end.y=n.pageY||n.clientY,t}function hn(n){return Zn[n]||null}function gn(n,e){n!=c&&(e=Math.max(e,vn(n)),Vn[n].distance=e)}function vn(n){return Vn[n]?Vn[n].distance:void 0}function wn(){var n={};return n[i]=Tn(i),n[o]=Tn(o),n[a]=Tn(a),n[l]=Tn(l),n}function Tn(n){return{direction:n,distance:0}}function bn(){return Jn-Bn}function mn(n,e){var t=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y);return Math.round(Math.sqrt(t*t+r*r))}function En(n,e){var t=e/n*1;return t.toFixed(2)}function yn(){return 1>Fn?s:u}function xn(n,e){return Math.round(Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2)))}function Sn(n,e){var t=n.x-e.x,r=e.y-n.y,i=Math.atan2(r,t),o=Math.round(180*i/Math.PI);return 0>o&&(o=360-Math.abs(o)),o}function On(n,e){if(Ln(n,e))return c;var t=Sn(n,e);return 45>=t&&t>=0?i:360>=t&&t>=315?i:t>=135&&225>=t?o:t>45&&135>t?l:a}function Mn(){var n=new Date;return n.getTime()}function Dn(e){e=n(e);var t=e.offset(),r={left:t.left,right:t.left+e.outerWidth(),top:t.top,bottom:t.top+e.outerHeight()};return r}function Pn(n,e){return n.x>e.left&&n.x<e.right&&n.y>e.top&&n.y<e.bottom}function Ln(n,e){return n.x==e.x&&n.y==e.y}var t=n.extend({},t),kn=O||D||!t.fallbackToMouseEvents,Rn=kn?D?M?"MSPointerDown":"pointerdown":"touchstart":"mousedown",An=kn?D?M?"MSPointerMove":"pointermove":"touchmove":"mousemove",jn=kn?D?M?"MSPointerUp":"pointerup":"touchend":"mouseup",In=kn?D?"mouseleave":null:"mouseleave",Un=D?M?"MSPointerCancel":"pointercancel":"touchcancel",Nn=0,Hn=null,Cn=null,Qn=0,_n=0,qn=0,Fn=1,Xn=0,Yn=0,Vn=null,Wn=n(e),zn="start",Gn=0,Zn={},Bn=0,Jn=0,Kn=0,$n=0,ne=0,ee=null,te=null;try{Wn.bind(Rn,r),Wn.bind(Un,R)}catch(re){n.error("events not supported "+Rn+","+Un+" on jQuery.swipe")}this.enable=function(){return this.disable(),Wn.bind(Rn,r),Wn.bind(Un,R),Wn},this.disable=function(){return j(),Wn},this.destroy=function(){j(),Wn.data(P,null),Wn=null},this.option=function(e,r){if("object"==typeof e)t=n.extend(t,e);else if(void 0!==t[e]){if(void 0===r)return t[e];t[e]=r}else{if(!e)return t;n.error("Option "+e+" does not exist on jQuery.swipe.options")}return null}}var r="1.6.18",i="left",o="right",a="up",l="down",u="in",s="out",c="none",f="auto",p="swipe",d="pinch",h="tap",g="doubletap",v="longtap",w="horizontal",T="vertical",b="all",m=10,E="start",y="move",x="end",S="cancel",O="ontouchstart"in window,M=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!O,D=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!O,P="TouchSwipe",L={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};n.fn.swipe=function(t){var r=n(this),i=r.data(P);if(i&&"string"==typeof t){if(i[t])return i[t].apply(i,Array.prototype.slice.call(arguments,1));n.error("Method "+t+" does not exist on jQuery.swipe")}else if(i&&"object"==typeof t)i.option.apply(i,arguments);else if(!(i||"object"!=typeof t&&t))return e.apply(this,arguments);return r},n.fn.swipe.version=r,n.fn.swipe.defaults=L,n.fn.swipe.phases={PHASE_START:E,PHASE_MOVE:y,PHASE_END:x,PHASE_CANCEL:S},n.fn.swipe.directions={LEFT:i,RIGHT:o,UP:a,DOWN:l,IN:u,OUT:s},n.fn.swipe.pageScroll={NONE:c,HORIZONTAL:w,VERTICAL:T,AUTO:f},n.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:b}}),function(n){"use strict";n.fn.bsTouchSlider=function(e){var t=n(".carousel");return this.each(function(){function e(e){var t="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";e.each(function(){var e=n(this),r=e.data("animation");e.addClass(r).one(t,function(){e.removeClass(r)})})}var r=t.find(".item:first").find("[data-animation ^= 'animated']");t.carousel(),e(r),t.on("slide.bs.carousel",function(t){var r=n(t.relatedTarget).find("[data-animation ^= 'animated']");e(r)}),n(".carousel .carousel-inner").swipe({swipeLeft:function(n,e,t,r,i){this.parent().carousel("next")},swipeRight:function(){this.parent().carousel("prev")},threshold:0})})}}(jQuery);*/
