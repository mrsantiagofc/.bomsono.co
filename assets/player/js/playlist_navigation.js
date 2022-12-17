(function(w,J){w.MVPPlaylistNavigation=function(k){function F(){var g,l,f,b,a,e=!1;c.off("touchstart.ap touchmove.ap touchend.ap click.ap-touchclick").on("touchstart.ap",function(d){if(!n.getSetupDone()||n.isPlaylistLoading())return!1;d=d.originalEvent.touches[0];g=c.position().left;l=c.position().top;f=d.pageX;b=d.pageY;a=!1;e=!0}).on("touchmove.ap",function(d){if(e){d=d.originalEvent.touches[0];t.show();p.show();if("h"==q){var m=g-f+d.pageX,A=x.width(),B=c.width();if(B<A)return;0<m?(m=0,t.hide()):
m<=A-B&&(m=A-B,p.hide(),loadMoreOnTotalScroll?nextPageToken&&loadMoreType&&(playlistTransitionOn||D.loadMore()):addMoreOnTotalScroll&&(loadMoreProcess||addMore()));c.css("left",m+"px")}else{m=l-b+d.pageY;A=x.height();B=c.height();if(B<A)return;0<m?(m=0,t.hide()):m<=A-B&&(m=A-B,p.hide(),n.totalScrollAction());c.css("top",m+"px")}a=a||5<Math.abs(f-d.pageX)||5<Math.abs(b-d.pageY);return!1}}).on("touchend.ap",function(d){e=!1}).on("click.ap-touchclick",function(d){if(a)return a=!1})}var D=this,G=MVPUtils.isMobile(),
E="ontouchstart"in w,n=k.parent,H=k.wrapper,x=k.playlistHolder,h=k.playlistInner,c=k.playlistContent,t=H.find(".mvp-nav-backward"),p=H.find(".mvp-nav-forward"),q=k.navigationDirection,v=k.navigationType,r=k.pi_size,I=k.thumbScrollValue,y=!0,z,u,C;this.checkPlaylistNavigation=function(){if("scroll"==v)if(w.playlistScrollLoading)var g=setInterval(function(){w.playlistScrollLoading||(clearInterval(g),D.checkPlaylistNavigation())},100);else if("mcustomscrollbar"==k.playlistScrollType)if("undefined"===
typeof mCustomScrollbar){w.playlistScrollLoading=!0;var l=document.createElement("script");l.type="text/javascript";var f=MVPUtils.relativePath(k.mCustomScrollbar_js)?k.mCustomScrollbar_js:MVPUtils.qualifyURL(k.sourcePath+k.mCustomScrollbar_js);l.src=f;l.onload=l.onreadystatechange=function(){this.readyState&&"complete"!=this.readyState||(D.checkPlaylistNavigation(),w.playlistScrollLoading=!1)};l.onerror=function(){alert("Error loading "+this.src)};f=document.getElementsByTagName("script")[0];f.parentNode.insertBefore(l,
f)}else h.mCustomScrollbar({axis:"h"==q?"x":"y",theme:k.playlistScrollTheme,scrollInertia:0,scrollButtons:{enable:!0},mouseWheel:{normalizeDelta:!0,deltaFactor:50,preventDefault:!0},keyboard:{enable:!1},advanced:{autoExpandHorizontalScroll:!0},callbacks:{onOverflowYNone:function(){h.find(".mCSB_container").addClass("mvp-mCSB_full")},onOverflowY:function(){h.find(".mCSB_container").removeClass("mvp-mCSB_full")},onTotalScroll:function(){n.totalScrollAction()},alwaysTriggerOffsets:!1}});else"perfect-scrollbar"==
k.playlistScrollType&&("function"!==typeof PerfectScrollbar?(w.playlistScrollLoading=!0,l=document.createElement("script"),l.type="text/javascript",f=MVPUtils.relativePath(k.perfectScrollbar_js)?k.perfectScrollbar_js:MVPUtils.qualifyURL(k.sourcePath+k.perfectScrollbar_js),l.src=f,l.onload=l.onreadystatechange=function(){this.readyState&&"complete"!=this.readyState||(D.checkPlaylistNavigation(),w.playlistScrollLoading=!1)},l.onerror=function(){alert("Error loading "+this.src)},f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(l,f)):(C=new PerfectScrollbar(h[0],{wheelSpeed:2,wheelPropagation:!0,minScrollbarLength:100}),h[0].addEventListener("h"==q?"ps-x-reach-end":"ps-y-reach-end",function(){n.totalScrollAction()})));else if("buttons"==v){if(!G)h.on("mousewheel DOMMouseScroll",function(b){if(!n.getSetupDone()||n.isPlaylistLoading()||!y)return!1;if("h"==q)var a=h.width(),e=c.width(),d="translateX";else a=h.height(),e=c.height(),d="translateY";if(!(e<a)){t.show();p.show();if(b.originalEvent.wheelDelta)var m=
0<b.originalEvent.wheelDelta?1:-1;else b.originalEvent.detail&&(m=0>b.originalEvent.detail?1:-1);u?b=u:(b=c[0].style.transform.replace(/[^\d.]/g,""),b=parseInt(b)||0);b+=I*m;0<b?(b=0,t.hide()):b<=a-e&&(b=a-e,p.hide(),n.totalScrollAction());u=b;c.css({"-webkit-transform":""+d+"("+b+"px)","-ms-transform":""+d+"("+b+"px)",transform:""+d+"("+b+"px)"});return!1}});t.on("click",function(){if(!n.getSetupDone()||n.isPlaylistLoading()||z)return!1;z=!0;if("h"==q)var b=h.width(),a=c.width(),e="translateX";else b=
h.height(),a=c.height(),e="translateY";if(!(a<b)){t.show();p.show();u?a=u:(a=c[0].style.transform.replace(/[^\d.]/g,""),a=parseInt(a)||0);if(0!=a%r){for(var d=-(a%r);d<=b-2*r;)d+=r;a+=d}else a+=r*Math.floor(b/r);0<=a&&(a=0,t.hide());u=a;c.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){z=!1}).css({"-webkit-transform":""+e+"("+a+"px)","-ms-transform":""+e+"("+a+"px)",transform:""+e+"("+a+"px)"})}});p.on("click",function(){if(!n.getSetupDone()||n.isPlaylistLoading()||
z)return!1;z=!0;if("h"==q)var b=h.width(),a=c.width(),e="translateX";else b=h.height(),a=c.height(),e="translateY";if(!(a<b)){t.show();p.show();if(u)var d=u;else d=c[0].style.transform.replace(/[^\d.]/g,""),d=parseInt(d)||0;if(0!=d%r){for(var m=d%r+r;m<=b-r;)m+=r;d-=m}else d-=r*Math.floor(b/r);d<=b-a&&(d=b-a,p.hide(),n.totalScrollAction());u=d;c.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){z=!1}).css({"-webkit-transform":""+e+"("+d+"px)","-ms-transform":""+e+"("+
d+"px)",transform:""+e+"("+d+"px)"})}});E&&F()}else if("hover"==v){if(!G)h.on("mousemove",function(b){if(!n.getSetupDone()||n.isPlaylistLoading()||!y)return!1;if("h"==q){var a=x.width(),e=c.width();if(e<a)return;var d=parseInt(h.css("left"),10)+x.offset().left;b=(a-e)/a*(b.pageX-d);c.css("left",b+"px")}else{a=x.height();e=c.height();if(e<a)return;d=parseInt(h.css("top"),10)+x.offset().top;b=(a-e)/a*(b.pageY-d);c.css("top",b+"px")}return!1});E&&F()}};this.scrollTo=function(g){if("scroll"==v)if("mcustomscrollbar"==
k.playlistScrollType)if("undefined"!==typeof mCustomScrollbar)setTimeout(function(){"h"==q?h.mCustomScrollbar("scrollTo",parseInt(g.position().left),{scrollInertia:500}):h.mCustomScrollbar("scrollTo",parseInt(g.position().top),{scrollInertia:500})},500);else var l=setInterval(function(){"undefined"!==typeof mCustomScrollbar&&(clearInterval(l),"h"==q?h.mCustomScrollbar("scrollTo",parseInt(g.position().left),{scrollInertia:500}):h.mCustomScrollbar("scrollTo",parseInt(g.position().top),{scrollInertia:500}))},
500);else"perfect-scrollbar"==k.playlistScrollType&&setTimeout(function(){"h"==q?h.stop().animate({scrollTop:g[0].offsetLeft+"px"},{duration:500}):h.stop().animate({scrollTop:g[0].offsetTop+"px"},{duration:500})},1E3);else if("buttons"==v){if("h"==q)var f=x.width(),b=c.width(),a="translateX";else f=x.height(),b=c.height(),a="translateY";if(!(b<f)){t.show();p.show();var e=-c.find(".mvp-playlist-item").index(g)*r;0<=e?(e=0,t.hide()):e<=f-b&&(e=f-b,p.hide());u=e;c.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
function(){z=!1}).css({"-webkit-transform":""+a+"("+e+"px)","-ms-transform":""+a+"("+e+"px)",transform:""+a+"("+e+"px)"})}}};this.showButtons=function(g){"forward"==g&&p.show()};this.resize=function(g){if("buttons"==v){if("h"==q)var l=h.width(),f=c.width(),b="translateX";else l=h.height(),f=c.height(),b="translateY";console.log(l,f);if(f<l)y=!1,t.hide(),p.hide();else{y=!0;var a=g?-c.find(".mvp-playlist-item").index(g)*r:0;u?a=u:(a=c[0].style.transform.replace(/[^\d.]/g,""),a=parseInt(a));0<a?(a=0,
p.show()):a<l-f?(a=l-f,t.show()):isNaN(a)&&!n.getMediaType()&&p.show();u=a;setTimeout(function(){c.css({"-webkit-transform":""+b+"("+a+"px)","-ms-transform":""+b+"("+a+"px)",transform:""+b+"("+a+"px)"})},350)}}else"hover"==v&&("h"==q?(g=h.width(),f=c.width(),f<g?y=!1:(y=!0,a=parseInt(c.css("left"),10),0<a?a=0:a<g-f&&(a=g-f),c.css("left",a+"px"))):(g=h.height(),f=c.height(),f<g?y=!1:(y=!0,a=parseInt(c.css("top"),10),0<a?a=0:a<g-f&&(a=g-f),c.css("top",a+"px"))))};this.setScrollActive=function(){z=!1};
this.updateScrollPosition=function(){"perfect-scrollbar"==k.playlistScrollType&&C&&C.update()};this.destroy=function(){if("scroll"==v)"mcustomscrollbar"==k.playlistScrollType?"undefined"!==typeof mCustomScrollbar&&h.mCustomScrollbar("destroy"):"perfect-scrollbar"==k.playlistScrollType&&C&&(C.destroy(),C=null);else if("buttons"==v){h.off("mousewheel DOMMouseScroll");t.off("click");p.off("click");var g="h"==q?"translateX":"translateY";u=0;c.css({"-webkit-transform":""+g+"(0px)","-ms-transform":""+g+
"(0px)",transform:""+g+"(0px)"})}else"hover"==v&&h.off("mousemove");E&&c.off("touchstart.ap touchmove.ap touchend.ap click.ap-touchclick");"h"==q?c.css("left",0):c.css("top",0)};D.checkPlaylistNavigation()}})(window,jQuery);