(self.webpackChunkfullstack=self.webpackChunkfullstack||[]).push([[667],{2732:function(e,t,n){var r,o=n(1109).default,u=n(4575).default,a=n(3913).default,l=n(1506).default,i=n(2205).default,c=n(9842).default,s=n(3269).default,f=Object.create,p=Object.defineProperty,y=Object.getOwnPropertyDescriptor,d=Object.getOwnPropertyNames,v=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty,h=function(e,t,n,r){if(t&&"object"===typeof t||"function"===typeof t){var o,u=s(d(t));try{var a=function(){var u=o.value;m.call(e,u)||u===n||p(e,u,{get:function(){return t[u]},enumerable:!(r=y(t,u))||r.enumerable})};for(u.s();!(o=u.n()).done;)a()}catch(l){u.e(l)}finally{u.f()}}return e},k=function(e,t,n){return function(e,t,n){t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n}(e,"symbol"!==typeof t?t+"":t,n),n},g={};!function(e,t){for(var n in t)p(e,n,{get:t[n],enumerable:!0})}(g,{default:function(){return O}}),e.exports=(r=g,h(p({},"__esModule",{value:!0}),r));var b=function(e,t,n){return n=null!=e?f(v(e)):{},h(!t&&e&&e.__esModule?n:p(n,"default",{value:e,enumerable:!0}),e)}(n(2791)),P=n(135),w=n(365),O=function(e){"use strict";i(n,e);var t=c(n);function n(){var e;return u(this,n),e=t.apply(this,arguments),k(l(e),"callPlayer",P.callPlayer),k(l(e),"duration",null),k(l(e),"currentTime",null),k(l(e),"secondsLoaded",null),k(l(e),"mute",(function(){})),k(l(e),"unmute",(function(){})),k(l(e),"ref",(function(t){e.iframe=t})),e}return a(n,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this;(0,P.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js","Mixcloud").then((function(e){t.player=e.PlayerWidget(t.iframe),t.player.ready.then((function(){t.player.events.play.on(t.props.onPlay),t.player.events.pause.on(t.props.onPause),t.player.events.ended.on(t.props.onEnded),t.player.events.error.on(t.props.error),t.player.events.progress.on((function(e,n){t.currentTime=e,t.duration=n})),t.props.onReady()}))}),this.props.onError)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seek",e),t||this.pause()}},{key:"setVolume",value:function(e){}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return null}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.config,r=t.match(w.MATCH_URL_MIXCLOUD)[1],u=(0,P.queryString)(o(o({},n.options),{},{feed:"/".concat(r,"/")}));return b.default.createElement("iframe",{key:r,ref:this.ref,style:{width:"100%",height:"100%"},src:"https://www.mixcloud.com/widget/iframe/?".concat(u),frameBorder:"0",allow:"autoplay"})}}]),n}(b.Component);k(O,"displayName","Mixcloud"),k(O,"canPlay",w.canPlay.mixcloud),k(O,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerMixcloud.315849d2.chunk.js.map