!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(2)},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(e){var n=arguments.length<=1||void 0===arguments[1]?new PIXI.Container:arguments[1];i(this,t),this.renderer=e,this.stage=n,this._firstDate=0,this.speed=1,this._last=0,this.delta=0,this.deltaMS=0,this.time=0,this._lastTime=0,this.maxFrame=.035,this.raf=null,this._preRenderActions=[],this._postRenderActions=[]}return n(t,[{key:"_animate",value:function(){if(this.raf=window.requestAnimationFrame(this._animate.bind(this)),this.stage){var t=Date.now();this.time+=Math.min((t-this._last)/1e3,this.maxFrame)*this.speed,this.delta=this.time-this._lastTime,this.deltaMS=1e3*this.delta,this._lastTime=this.time,this._last=t,this._preRender(),this.renderer.render(this.stage),this._postRender()}}},{key:"_preRender",value:function(){for(var t=this._preRenderActions.length,e=0;t>e;e++)this._preRenderActions[e](this.delta,this)}},{key:"_postRender",value:function(){for(var t=this._postRenderActions.length,e=0;t>e;e++)this._postRenderActions[e](this.delta,this)}},{key:"start",value:function(){var t=Date.now();this._last=t,0===this._firstDate&&(this._firstDate=t),this._animate()}},{key:"stop",value:function(){this.raf&&window.cancelAnimationFrame(this.raf)}},{key:"addPreRenderAction",value:function(t){-1===this._preRenderActions.indexOf(t)&&this._preRenderActions.push(t)}},{key:"removePreRenderAction",value:function(t){var e=this._postRenderActions.indexOf(t);-1!==e&&this._postRenderActions.splice(e,1)}},{key:"realTime",get:function(){return this._firstDate>0?(Date.now()-this._firstDate)/1e3:0}}]),t}();e["default"]=s},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=i(3),r=n(s),a=i(1),o=n(a);r["default"].AnimationLoop||(r["default"].AnimationLoop=o["default"]),e["default"]=r["default"].AnimationLoop},function(t,e){t.exports=PIXI}]);