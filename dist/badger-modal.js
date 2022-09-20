!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(self,(()=>(()=>{"use strict";var e={729:e=>{var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,r,i,s){if("function"!=typeof r)throw new TypeError("The listener must be a function");var a=new o(r,i||e,s),u=n?n+t:t;return e._events[u]?e._events[u].fn?e._events[u]=[e._events[u],a]:e._events[u].push(a):(e._events[u]=a,e._eventsCount++),e}function s(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function a(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(n=!1)),a.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},a.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,s=new Array(i);o<i;o++)s[o]=r[o].fn;return s},a.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},a.prototype.emit=function(e,t,r,o,i,s){var a=n?n+e:e;if(!this._events[a])return!1;var u,c,l=this._events[a],f=arguments.length;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),f){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,r),!0;case 4:return l.fn.call(l.context,t,r,o),!0;case 5:return l.fn.call(l.context,t,r,o,i),!0;case 6:return l.fn.call(l.context,t,r,o,i,s),!0}for(c=1,u=new Array(f-1);c<f;c++)u[c-1]=arguments[c];l.fn.apply(l.context,u)}else{var h,v=l.length;for(c=0;c<v;c++)switch(l[c].once&&this.removeListener(e,l[c].fn,void 0,!0),f){case 1:l[c].fn.call(l[c].context);break;case 2:l[c].fn.call(l[c].context,t);break;case 3:l[c].fn.call(l[c].context,t,r);break;case 4:l[c].fn.call(l[c].context,t,r,o);break;default:if(!u)for(h=1,u=new Array(f-1);h<f;h++)u[h-1]=arguments[h];l[c].fn.apply(l[c].context,u)}}return!0},a.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},a.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},a.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return s(this,i),this;var a=this._events[i];if(a.fn)a.fn!==t||o&&!a.once||r&&a.context!==r||s(this,i);else{for(var u=0,c=[],l=a.length;u<l;u++)(a[u].fn!==t||o&&!a[u].once||r&&a[u].context!==r)&&c.push(a[u]);c.length?this._events[i]=1===c.length?c[0]:c:s(this,i)}return this},a.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&s(this,t)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{n.r(r),n.d(r,{Modal:()=>x,default:()=>E});var e,t,o,i,s,a,u,c,l,f,h=n(729),v=n.n(h);function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function y(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,w(e,t,"set"),n),n}function m(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,w(e,t,"get"))}function w(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}var _,k,g,x=(t=new WeakMap,o=new WeakMap,i=new WeakMap,s=new WeakMap,a=new WeakMap,u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,e=function(){function e(n){var r=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),d(this,t,{writable:!0,value:void 0}),d(this,o,{writable:!0,value:void 0}),d(this,i,{writable:!0,value:void 0}),d(this,s,{writable:!0,value:void 0}),d(this,a,{writable:!0,value:function(){m(r,s).emit("shown"),m(r,t).removeEventListener("transitionend",m(r,a))}}),d(this,u,{writable:!0,value:function(){m(r,t).style.display="none",m(r,t).setAttribute("aria-hidden",""),m(r,t).removeAttribute("aria-modal"),m(r,t).removeAttribute("role"),document.documentElement.classList.remove("is-modal-open"),m(r,s).emit("hidden"),m(r,t).removeEventListener("transitionend",m(r,u)),m(r,t).removeEventListener("click",m(r,c)),document.removeEventListener("keyup",m(r,f)),m(r,i).forEach((function(e){e.removeEventListener("click",m(r,l))}))}}),d(this,c,{writable:!0,value:function(e){e.target===m(r,t)&&r.hide()}}),d(this,l,{writable:!0,value:function(e){e.preventDefault(),r.hide()}}),d(this,f,{writable:!0,value:function(e){"Escape"===e.key&&r.hide()}}),y(this,t,function(e){return function(e){return!(!e||"object"!==b(e))&&void 0!==e.nodeType}(e)?e:"string"==typeof e&&e.length>0?document.querySelector(e):null}(n)),!m(this,t))throw new Error("Modal element ".concat(n," doesn't exist."));y(this,s,new(v())),e.instances.set(m(this,t),this),y(this,o,m(this,t).querySelector(".m-dialog")),y(this,i,m(this,t).querySelectorAll("[data-modal-dismiss]"))}var n,r,h;return n=e,h=[{key:"getInstance",value:function(t){return e.instances.get(t)}}],(r=[{key:"show",value:function(){var e=this;m(this,s).emit("show"),document.documentElement.classList.add("is-modal-open"),m(this,t).style.display="block",m(this,t).removeAttribute("aria-hidden"),m(this,t).setAttribute("aria-modal",""),m(this,t).setAttribute("role","dialog"),m(this,t).scrollTop=0,m(this,t).classList.add("is-shown"),m(this,i).forEach((function(t){t.addEventListener("click",m(e,l),!1)})),m(this,t).addEventListener("click",m(this,c),!1),document.addEventListener("keyup",m(this,f),!1),m(this,t).addEventListener("transitionend",m(this,a),!1)}},{key:"hide",value:function(){m(this,s).emit("hide"),m(this,t).classList.remove("is-shown"),m(this,t).addEventListener("transitionend",m(this,u),!1)}},{key:"onShow",value:function(e){var t=this;return m(this,s).on("show",e),function(){return m(t,s).off("show",e)}}},{key:"onHide",value:function(e){var t=this;return m(this,s).on("hide",e),function(){return m(t,s).off("hide",e)}}},{key:"onShown",value:function(e){var t=this;return m(this,s).on("shown",e),function(){return m(t,s).off("shown",e)}}},{key:"onHidden",value:function(e){var t=this;return m(this,s).on("hidden",e),function(){return m(t,s).off("hidden",e)}}}])&&p(n.prototype,r),h&&p(n,h),Object.defineProperty(n,"prototype",{writable:!1}),e}(),_=e,k="instances",g=new Map,k in _?Object.defineProperty(_,k,{value:g,enumerable:!0,configurable:!0,writable:!0}):_[k]=g,e);const E=x})(),r})()));