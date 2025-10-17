(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ha="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)fa(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ha});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function qa(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.O=this.i=null}
function ta(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
qa.prototype.K=function(a){this.h=a};
function ua(a,b){a.i={mc:b,xc:!0};a.g=a.o||a.u}
qa.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
qa.prototype.B=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function wa(a){a.o=0;var b=a.i.mc;a.i=null;return b}
function xa(a){var b=a.O.splice(0)[0];(b=a.i=a.i||b)?b.xc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function ya(a){this.g=new qa;this.h=a}
function za(a,b){ta(a.g);var c=a.g.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,ua(a.g,g),Ba(a)}a.g.l=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.xc)throw b.mc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l.next,b,a.g.K):(a.g.K(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l["throw"],b,a.g.K):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new ya(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.l(k)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.cb),reject:g(this.o)}};
b.prototype.cb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}"function"==typeof h?this.sb(h,g):this.u(g)};
b.prototype.o=function(g){this.K(2,g)};
b.prototype.u=function(g){this.K(1,g)};
b.prototype.K=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.eb();this.O()};
b.prototype.eb=function(){var g=this;e(function(){if(g.oa()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.G)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.O=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.fb=function(g){var h=this.l();g.wb(h.resolve,h.reject)};
b.prototype.sb=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(q,p){return"function"==typeof q?function(t){try{k(q(t))}catch(u){m(u)}}:p}
var k,m,n=new b(function(q,p){k=q;m=p});
this.wb(l(g,k),l(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.wb=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;null==this.h?f.h(l):this.h.push(l);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).wb(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function n(t){return function(u){q[t]=u;p--;0==p&&k(q)}}
var q=[],p=0;do q.push(void 0),p++,d(l.value).wb(n(q.length-1),m),l=h.next();while(!l.done)})};
return b});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return"object"===k&&null!==l||"function"===k}
function e(l){if(!fa(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(2!=m.get(l)||3!=m.get(k))return!1;m.delete(l);m.set(k,4);return!m.has(l)&&4==m.get(k)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!fa(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&fa(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return ea(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;"object"==k||"function"==k?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&fa(h[0],k))for(h=0;h<m.length;h++){var n=m[h];if(l!==l&&n.key!==n.key||l===n.key)return{id:k,list:m,index:h,entry:n}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!k.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||pa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D=this||self;function Ja(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(){return Date.now()}
function F(a,b){a=a.split(".");var c=D;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pe=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function pb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=pb(a[c]);return b}
var qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qb.length;f++)c=qb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var sb;function tb(){if(void 0===sb){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){D.console&&D.console.error(c.message)}sb=a}else sb=a}return sb}
;function ub(a,b){this.g=a===vb&&b||""}
ub.prototype.toString=function(){return this.g};
function wb(a){return new ub(vb,a)}
var vb={};wb("");function xb(a){this.g=a}
xb.prototype.toString=function(){return this.g+""};
var yb={};var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a){this.g=a}
Hb.prototype.toString=function(){return this.g.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);var Kb=Ja(610401301,!1),Lb=Ja(572417392,!0);function Mb(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=D.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Kb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function G(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Kb?!!Nb&&0<Nb.brands.length:!1}
function Rb(){return Qb()?!1:G("Trident")||G("MSIE")}
function Sb(){return Qb()?Pb("Chromium"):(G("Chrome")||G("CriOS"))&&!(Qb()?0:G("Edge"))||G("Silk")}
;function Wb(a){this.g=a}
Wb.prototype.toString=function(){return this.g.toString()};function Xb(a){Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return a}
;var Yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(a){return a?decodeURI(a):a}
function $b(a){return Zb(a.match(Yb)[3]||null)}
function ac(a){var b=a.match(Yb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cc(a){var b=[],c;for(c in a)bc(c,a[c],b);return b.join("&")}
var dc=/#|$/;function ec(a,b){var c=a.search(dc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function fc(a){D.setTimeout(function(){throw a;},0)}
;function gc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function hc(a){hc[" "](a);return a}
hc[" "]=function(){};var ic=Qb()?!1:G("Opera"),jc=Rb(),kc=G("Edge"),lc=G("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),mc=-1!=Mb().toLowerCase().indexOf("webkit")&&!G("Edge");function nc(){var a=D.document;return a?a.documentMode:void 0}
var oc;a:{var pc="",qc=function(){var a=Mb();if(lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(kc)return/Edge\/([\d\.]+)/.exec(a);if(jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(mc)return/WebKit\/(\S+)/.exec(a);if(ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qc&&(pc=qc?qc[1]:"");if(jc){var rc=nc();if(null!=rc&&rc>parseFloat(pc)){oc=String(rc);break a}}oc=pc}var sc=oc,tc;if(D.document&&jc){var uc=nc();tc=uc?uc:parseInt(sc,10)||void 0}else tc=void 0;var vc=tc;var wc=gc()||G("iPod"),Bc=G("iPad");!G("Android")||Sb();Sb();var Cc=G("Safari")&&!(Sb()||(Qb()?0:G("Coast"))||(Qb()?0:G("Opera"))||(Qb()?0:G("Edge"))||(Qb()?Pb("Microsoft Edge"):G("Edg/"))||(Qb()?Pb("Opera"):G("OPR"))||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(gc()||G("iPad")||G("iPod"));var Dc={},Ec=null;
function Fc(a,b){Na(a);void 0===b&&(b=0);if(!Ec){Ec={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Dc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ec[h]&&(Ec[h]=g)}}}b=Dc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Gc="undefined"!==typeof Uint8Array,Hc=!jc&&"function"===typeof btoa;function Ic(){return"function"===typeof BigInt}
var Jc=!Lb,Kc=!Lb;var Lc=0,Mc=0;function Nc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Oc(c,a)),b=c.next().value,a=c.next().value,c=b);Lc=c>>>0;Mc=a>>>0}
function Pc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Ic()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Qc(c)+Qc(a));return c}
function Qc(a){a=String(a);return"0000000".slice(a.length)+a}
function Rc(){var a=Lc,b=Mc;b&2147483648?Ic()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Oc(a,b)),a=b.next().value,b=b.next().value,a="-"+Pc(a,b)):a=Pc(a,b);return a}
function Oc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Sc(a){return Array.prototype.slice.call(a)}
;var Tc;Tc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({be:1,Zd:2,Yd:4,ee:8,de:16,ce:32,Pd:64,ge:128,Wd:256,Vd:512,ae:1024,Td:2048,fe:4096,Ud:8192})));var Uc=Tc?function(a,b){a[Tc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Vc(a){var b=Wc(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Sc(a)),H(a,b|1))}
var Xc=Tc?function(a,b){a[Tc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function Yc(a,b,c){return c?a|b:a&~b}
var Wc=Tc?function(a){return a[Tc]|0}:function(a){return a.ga|0},Zc=Tc?function(a){return a[Tc]}:function(a){return a.ga},H=Tc?function(a,b){a[Tc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function $c(){var a=[];Uc(a,1);return a}
function ad(a,b){H(b,(a|0)&-14591)}
function bd(a,b){H(b,(a|34)&-14557)}
function cd(a){a=a>>14&1023;return 0===a?536870912:a}
;var dd={},ed={};function fd(a){return!(!a||"object"!==typeof a||a.te!==ed)}
function gd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var hd,id=!Lb;function jd(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Wc(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;H(a,d|1);return!0}
var kd,ld=[];H(ld,55);kd=Object.freeze(ld);function md(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});function nd(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function od(a){a=Error(a);nd(a,"warning");return a}
;function pd(a){return a.displayName||a.name||"unknown type name"}
function ud(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return a}
var vd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function wd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:vd.test(a)}
function xd(a,b){b=!!b;if(!wd(a))throw od("int64");if("string"===typeof a)if(wd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),!yd(a)){if(16>a.length)Nc(Number(a));else if(Ic())a=BigInt(a),Lc=Number(a&BigInt(4294967295))>>>0,Mc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Mc=Lc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Mc*=1E6,Lc=1E6*Lc+d,4294967296<=Lc&&(Mc+=Math.trunc(Lc/4294967296),
Mc>>>=0,Lc>>>=0);b&&(b=w(Oc(Lc,Mc)),a=b.next().value,b=b.next().value,Lc=a,Mc=b)}a=Rc()}}else if(b)wd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),yd(b)?a=b:(Nc(a),a=Rc()));else if(wd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){Nc(a);b=Lc;c=Mc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function zd(a){return null==a?a:xd(a)}
function yd(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function Ad(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Bd(a){return null==a||"string"===typeof a?a:void 0}
function Cd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+pd(b)+" but got "+(a&&pd(a.constructor)));return a}
function Dd(a,b,c){if(null!=a&&"object"===typeof a&&a.Tb===dd)return a;if(Array.isArray(a)){var d=Wc(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&H(a,e);return new b(a)}}
;var Ed;function I(a,b,c){null==a&&(a=Ed);Ed=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Wc(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(gd(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}H(a,d);return a}
;function Fd(a,b){return Gd(b)}
function Gd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return id||!jd(a,void 0,9999)?a:void 0;if(Gc&&null!=a&&a instanceof Uint8Array){if(Hc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Fc(a);return a}}}return a}
;function Hd(a,b,c){a=Sc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Id(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&Wc(a)&1?void 0:f&&Wc(a)&2?a:Jd(a,b,c,void 0!==d,e,f);else if(gd(a)){var g={},h;for(h in a)g[h]=Id(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Jd(a,b,c,d,e,f){var g=d||c?Wc(a):0;d=d?!!(g&32):void 0;a=Sc(a);for(var h=0;h<a.length;h++)a[h]=Id(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Kd(a){return a.Tb===dd?a.toJSON():Gd(a)}
;function Ld(a,b,c){c=void 0===c?bd:c;if(null!=a){if(Gc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Wc(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(H(a,(d|34)&-12293),a):Jd(a,Ld,d&4?bd:c,!0,!1,!0)}a.Tb===dd&&(c=a.s,d=Zc(c),a=d&2?a:Md(a,c,d,!0));return a}}
function Md(a,b,c,d){a=a.constructor;b=Nd(b,c,d);Wc(b);Ed=b;b=new a(b);Ed=void 0;return b}
function Nd(a,b,c){var d=c||b&2?bd:ad,e=!!(b&32);a=Hd(a,b,function(f){return Ld(f,e,d)});
Uc(a,32|(c?2:0));return a}
function Od(a){var b=a.s,c=Zc(b);return c&2?Md(a,b,c,!1):a}
;function Pd(a,b){a=a.s;return Qd(a,Zc(a),b)}
function Qd(a,b,c,d){if(-1===c)return null;if(c>=cd(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Rd(a,b,c){var d=a.s,e=Zc(d);md(e);Sd(d,e,b,c);return a}
function Sd(a,b,c,d,e){gd(d);var f=cd(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&H(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Td(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Ud(a,b,c,d){a=a.s;var e=Zc(a);md(e);(c=Vd(a,e,c))&&c!==b&&null!=d&&(e=Sd(a,e,c));Sd(a,e,b,d)}
function Wd(a,b,c){a=a.s;return Vd(a,Zc(a),b)===c?c:-1}
function Vd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Qd(a,b,f)&&(0!==d&&(b=Sd(a,b,d)),d=f)}return d}
function Xd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Zc(e),g=Qd(e,f,c,d);b=Dd(g,b,f);b!==g&&null!=b&&Sd(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Zc(a);f&2||(g=Od(e),g!==e&&(e=g,Sd(a,f,c,e,d)));return e}
function J(a,b,c,d){null!=d?Cd(d,b):d=void 0;return Rd(a,c,d)}
function Yd(a,b,c,d,e){null!=e?Cd(e,b):e=void 0;Ud(a,c,d,e)}
function Zd(a,b){var c=!0;a=Yc(a,2,!!(2&b));a=Yc(a,32,!!(32&b)&&c);return a=Yc(a,2048,!1)}
function $d(a,b,c,d){a=a.s;var e=Zc(a);md(e);var f,g=!!(2&e),h=g?1:2,l=1===h;h=2===h;f&&(f=!g);g=Qd(a,e,b);g=Array.isArray(g)?g:kd;var k=Wc(g),m=!!(4&k);if(!m){var n=k;0===n&&(n=Zd(n,e));n=Yc(n,1,!0);k=g;var q=e,p=!!(2&n);p&&(q=Yc(q,2,!0));for(var t=!p,u=!0,z=0,C=0;z<k.length;z++){var P=Dd(k[z],c,q);if(P instanceof c){if(!p){var U=!!(Wc(P.s)&2);t&&(t=!U);u&&(u=U)}k[C++]=P}}C<z&&(k.length=C);n=Yc(n,4,!0);n=Yc(n,16,u);n=Yc(n,8,t);H(k,n);p&&Object.freeze(k);k=n}n=!!(8&k)||l&&!g.length;if(f&&!n){Td(k)&&
(g=Sc(g),k=Zd(k,e),e=Sd(a,e,b,g));f=g;for(n=0;n<f.length;n++)q=f[n],p=Od(q),q!==p&&(f[n]=p);k=Yc(k,8,!0);k=Yc(k,16,!f.length);H(f,k)}Td(k)||(f=k,l&&(k=Yc(k,!g.length||16&k&&(!m||32&k)?2:2048,!0)),k!==f&&H(g,k),l&&Object.freeze(g));h&&Td(k)&&(g=Sc(g),k=Zd(k,e),H(g,k),Sd(a,e,b,g));b=g;c=null!=d?Cd(d,c):new c;b.push(c);Wc(c.s)&2?Xc(b,8):Xc(b,16)}
function ae(a,b){var c=void 0===c?"":c;a=Bd(Pd(a,b));return null!=a?a:c}
function be(a,b){b=Wd(a,ce,b);return Bd(Pd(a,b))}
function de(a,b,c){if(null!=c){if("number"!==typeof c)throw od("int32");if(!Number.isFinite(c))throw od("int32");c|=0}Rd(a,b,c)}
function K(a,b,c){return Rd(a,b,Ad(c))}
function ee(a,b,c){if(null!=c){if(!Number.isFinite(c))throw od("enum");c|=0}return Rd(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(hd)var a=fe(this,this.s,!1);else a=Jd(this.s,Kd,void 0,void 0,!1,!1),a=fe(this,a,!0);return a};
function ge(a){hd=!0;try{return JSON.stringify(a.toJSON(),Fd)}finally{hd=!1}}
L.prototype.clone=function(){var a=this.s;return Md(this,a,Zc(a),!1)};
L.prototype.Tb=dd;L.prototype.toString=function(){return fe(this,this.s,!1).toString()};
function fe(a,b,c){var d=a.constructor.ma,e=Zc(c?a.s:b),f=cd(e),g=!1;if(d&&id){if(!c){b=Sc(b);var h;if(b.length&&gd(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=Zc(a.s);a=cd(h);h=+!!(h&512)-1;for(var l,k,m=0;m<d.length;m++)if(k=d[m],k<a){k+=h;var n=f[k];null==n?f[k]=c?kd:$c():c&&n!==kd&&Vc(n)}else l||(n=void 0,f.length&&gd(n=f[f.length-1])?l=n:f.push(l={})),n=l[k],null==l[k]?l[k]=c?kd:$c():c&&n!==kd&&Vc(n)}l=b.length;if(!l)return b;var q;
if(gd(f=b[l-1])){a:{var p=f;c={};a=!1;for(var t in p){h=p[t];if(Array.isArray(h)){m=h;if(!Kc&&jd(h,d,+t)||!Jc&&fd(h)&&0===h.size)h=null;h!=m&&(a=!0)}null!=h?c[t]=h:a=!0}if(a){for(var u in c){p=c;break a}p=null}}p!=f&&(q=!0);l--}for(e=+!!(e&512)-1;0<l;l--){t=l-1;f=b[t];if(!(null==f||!Kc&&jd(f,d,t-e)||!Jc&&fd(f)&&0===f.size))break;var z=!0}if(!q&&!z)return b;var C;g?C=b:C=Array.prototype.slice.call(b,0,l);b=C;g&&(b.length=l);p&&b.push(p);return b}
;var he=window;wb("csi.gstatic.com");wb("googleads.g.doubleclick.net");wb("partner.googleadservices.com");wb("pubads.g.doubleclick.net");wb("securepubads.g.doubleclick.net");wb("tpc.googlesyndication.com");function ie(a,b){this.width=a;this.height=b}
r=ie.prototype;r.clone=function(){return new ie(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Nb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function je(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function ke(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function le(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=me(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ne[c])c=ne[c];else{c=String(c);if(!ne[c]){var f=/function\s+([^\(]+)/m.exec(c);ne[c]=f?f[1]:"[Anonymous]"}c=ne[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function me(a,b){b||(b={});b[oe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[oe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=me(a,b));return c}
function oe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ne={};/*

 SPDX-License-Identifier: Apache-2.0
*/
function pe(a){this.nd=a}
function qe(a){return new pe(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var re=[qe("data"),qe("http"),qe("https"),qe("mailto"),qe("ftp"),new pe(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function se(a,b){b=void 0===b?re:b;if(a instanceof Hb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof pe&&d.nd(a))return new Hb(a,Ib)}}
function te(a){var b=void 0===b?re:b;return se(a,b)||Jb}
var ue="function"===typeof URL;function ve(){throw Error("unknown trace type");}
;var we={Sd:0,Xd:1,Qd:2,Rd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function xe(a,b){b=Error.call(this,a+" cannot be used with intent "+we[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(xe,Error);
function ye(a,b){a.removeAttribute("srcdoc");if(b instanceof xb)throw new xe("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.g:(Ka(b),b="type_error:SafeUrl");else{b:if(ue){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function ze(a){var b=Ae;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Be(){var a=[];ze(function(b){a.push(b)});
return a}
var Ae={Ed:"allow-forms",Fd:"allow-modals",Gd:"allow-orientation-lock",Hd:"allow-pointer-lock",Id:"allow-popups",Jd:"allow-popups-to-escape-sandbox",Kd:"allow-presentation",Ld:"allow-same-origin",Md:"allow-scripts",Nd:"allow-top-navigation",Od:"allow-top-navigation-by-user-activation"},Ce=bb(function(){return Be()});
function De(){var a=Ee(),b={};db(Ce(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ee(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Fe=(new Date).getTime();function Ge(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function He(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],C=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var U=1518500249}else P=t^u^z,U=1859775393;else 60>p?(P=t&u|z&(t|u),U=2400959708):(P=t^u^z,U=3395469782);P=((n<<5|n>>>27)&4294967295)+P+C+U+q[p]&4294967295;C=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+C&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==k)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[k++]=n[p++],m++,64==k)for(k=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>k?c(h,56-k):c(h,64-(k-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,Wc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Ie(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Je(Ge(d),a,c||null)].join(" "):null}
function Je(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Ke(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Ke(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ke(a){var b=He();b.update(a);return b.Wc().toLowerCase()}
;var Le={};function Me(a){this.g=a||{cookie:""}}
r=Me.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(!this.Nb())return!0;this.set("TESTCOOKIESENABLED","1",{Qb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ye;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Qb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Qb:0,path:b,domain:c});return d};
r.Nb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ne=new Me("undefined"==typeof document?null:document);function Oe(a){return!!Le.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Pe(a,b,c,d){(a=D[a])||"undefined"===typeof document||(a=(new Me(document)).get(b));return a?Ie(a,c,d):null}
function Qe(a){var b=void 0===b?!1:b;var c=Ge(String(D.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;Oe(e)&&(f=f||D.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Me(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Oe(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
D.__SAPISID:D.__APISID,e||"undefined"===typeof document||(e=new Me(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ie(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Oe(b)&&((b=Pe("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Pe("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Re(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Ve(){this.Aa=this.Aa;this.l=this.l}
Ve.prototype.Aa=!1;Ve.prototype.dispose=function(){this.Aa||(this.Aa=!0,this.sa())};
Ve.prototype.addOnDisposeCallback=function(a,b){this.Aa?void 0!==b?a.call(b):a():(this.l||(this.l=[]),this.l.push(void 0!==b?Va(a,b):a))};
Ve.prototype.sa=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function We(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
We.prototype.stopPropagation=function(){this.i=!0};
We.prototype.preventDefault=function(){this.defaultPrevented=!0};var Xe=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Ye(a,b){We.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Xa(Ye,We);var Ze={2:"touch",3:"pen",4:"mouse"};
Ye.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(lc){a:{try{hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ze[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Ye.na.preventDefault.call(this)};
Ye.prototype.stopPropagation=function(){Ye.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Ye.prototype.preventDefault=function(){Ye.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var $e="closure_listenable_"+(1E6*Math.random()|0);var af=0;function bf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ab=e;this.key=++af;this.pb=this.vb=!1}
function cf(a){a.pb=!0;a.listener=null;a.proxy=null;a.src=null;a.Ab=null}
;function df(a){this.src=a;this.listeners={};this.g=0}
df.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=ef(a,b,d,e);-1<g?(b=a[g],c||(b.vb=!1)):(b=new bf(b,this.src,f,!!d,e),b.vb=c,a.push(b));return b};
df.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ef(e,b,c,d);return-1<b?(cf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function ff(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(cf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function ef(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.pb&&f.listener==b&&f.capture==!!c&&f.Ab==d)return e}return-1}
;var gf="closure_lm_"+(1E6*Math.random()|0),hf={},jf=0;function kf(a,b,c,d,e){if(d&&d.once)lf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)kf(a,b[f],c,d,e);else c=mf(c),a&&a[$e]?a.Ka(b,c,Oa(d)?!!d.capture:!!d,e):nf(a,b,c,!1,d,e)}
function nf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=of(a);h||(a[gf]=h=new df(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=pf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Xe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");jf++}}
function pf(){function a(c){return b.call(a.src,a.listener,c)}
var b=rf;return a}
function lf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)lf(a,b[f],c,d,e);else c=mf(c),a&&a[$e]?a.g.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):nf(a,b,c,!0,d,e)}
function sf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)sf(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=mf(c),a&&a[$e])?a.g.remove(String(b),c,d,e):a&&(a=of(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ef(b,c,d,e)),(c=-1<a?b[a]:null)&&tf(c))}
function tf(a){if("number"!==typeof a&&a&&!a.pb){var b=a.src;if(b&&b[$e])ff(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);jf--;(c=of(b))?(ff(c,a),0==c.g&&(c.src=null,b[gf]=null)):cf(a)}}}
function qf(a){return a in hf?hf[a]:hf[a]="on"+a}
function rf(a,b){if(a.pb)a=!0;else{b=new Ye(b,this);var c=a.listener,d=a.Ab||a.src;a.vb&&tf(a);a=c.call(d,b)}return a}
function of(a){a=a[gf];return a instanceof df?a:null}
var uf="__closure_events_fn_"+(1E9*Math.random()>>>0);function mf(a){if("function"===typeof a)return a;a[uf]||(a[uf]=function(b){return a.handleEvent(b)});
return a[uf]}
;function vf(){Ve.call(this);this.g=new df(this);this.O=this;this.G=null}
Xa(vf,Ve);vf.prototype[$e]=!0;vf.prototype.addEventListener=function(a,b,c,d){kf(this,a,b,c,d)};
vf.prototype.removeEventListener=function(a,b,c,d){sf(this,a,b,c,d)};
function wf(a,b){var c=a.G;if(c){var d=[];for(var e=1;c;c=c.G)d.push(c),++e}a=a.O;c=b.type||b;"string"===typeof b?b=new We(b,a):b instanceof We?b.target=b.target||a:(e=b,b=new We(c,a),rb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=xf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=xf(g,c,!0,b)&&e,b.i||(e=xf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=xf(g,c,!1,b)&&e}
vf.prototype.sa=function(){vf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,cf(d[e]);delete a.listeners[c];a.g--}}this.G=null};
vf.prototype.Ka=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function xf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.pb&&g.capture==c){var h=g.listener,l=g.Ab||g.src;g.vb&&ff(a.g,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function yf(a){vf.call(this);var b=this;this.K=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return A(e,zf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.K||Af(this)}
y(yf,vf);function Bf(){var a=Cf;yf.g||(yf.g=new yf(a));return yf.g}
yf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.ha.ba(this.K);delete yf.g};
yf.prototype.ca=function(){return this.h};
function Af(a){a.K=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,zf(a),3):A(c,zf(a),3);Af(a);c.g=0})},3E4)}
function zf(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.O=[h.i];h.o=0;h.u=0;a.u=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?wf(a,"networkstatus-online"):wf(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.B(3)}})})}
;function Df(){this.data=[];this.g=-1}
Df.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Df.prototype.get=function(a){return!!this.data[a]};
function Ef(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Ff(a){this.s=I(a)}
y(Ff,L);function Gf(a){this.s=I(a)}
y(Gf,L);function Hf(a,b){return K(a,2,b)}
function If(a,b){return K(a,3,b)}
function Jf(a,b){return K(a,4,b)}
function Kf(a,b){return K(a,5,b)}
function Lf(a,b){return K(a,9,b)}
function Mf(a,b){var c=a.s,d=Zc(c);md(d);if(null==b)Sd(c,d,10);else{if(!Array.isArray(b)){var e=Error();nd(e,"incident");fc(e)}var f=e=Wc(b),g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),l;if(l=!h)l=!1;for(var k=!0,m=!0,n=0;n<b.length;n++){var q=b[n];Cd(q,Ff);g||(q=!!(Wc(q.s)&2),k&&(k=!q),m&&(m=q))}g||(e=Yc(e,5,!0),e=Yc(e,8,k),e=Yc(e,16,m));if(l||h&&e!==f)b=Sc(b),f=0,e=Zd(e,d);e!==f&&H(b,e);Sd(c,d,10,b)}return a}
function Nf(a,b){return Rd(a,11,null==b?b:ud(b))}
function Of(a,b){return K(a,1,b)}
function Pf(a,b){return Rd(a,7,null==b?b:ud(b))}
Gf.ma=[10,6];var Qf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Rf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Sf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Tf(){var a=window;if(!Sf(a))return null;var b=Rf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Qf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Uf(a){var b;return Nf(Mf(Kf(Hf(Of(Jf(Pf(Lf(If(new Gf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Ff;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Vf(){var a,b;return null!=(b=null==(a=Tf())?void 0:a.then(function(c){return Uf(c)}))?b:null}
;function Wf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
Wf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Xf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Yf;function Zf(){var a=D.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=je();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jc;c.jc=null;e()}};
return function(e){d.next={jc:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function $f(){this.h=this.g=null}
$f.prototype.add=function(a,b){var c=ag.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
$f.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var ag=new Wf(function(){return new bg},function(a){return a.reset()});
function bg(){this.next=this.scope=this.g=null}
bg.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
bg.prototype.reset=function(){this.next=this.scope=this.g=null};var cg,dg=!1,eg=new $f;function fg(a,b){cg||gg();dg||(cg(),dg=!0);eg.add(a,b)}
function gg(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);cg=function(){a.then(hg)}}else cg=function(){var b=hg;
"function"!==typeof D.setImmediate||D.Window&&D.Window.prototype&&(Qb()||!G("Edge"))&&D.Window.prototype.setImmediate==D.setImmediate?(Yf||(Yf=Zf()),Yf(b)):D.setImmediate(b)}}
function hg(){for(var a;a=eg.remove();){try{a.g.call(a.scope)}catch(b){fc(b)}Xf(ag,a)}dg=!1}
;function ig(a,b){this.g=a[D.Symbol.iterator]();this.h=b}
ig.prototype[Symbol.iterator]=function(){return this};
ig.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function jg(a,b){return new ig(a,b)}
;function kg(){this.blockSize=-1}
;function lg(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Xa(lg,kg);lg.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function mg(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else 60>e?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
lg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)mg(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){mg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){mg(this,e);f=0;break}}this.h=f;this.l+=b}};
lg.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;mg(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function ng(){}
ng.prototype.next=function(){return og};
var og={done:!0,value:void 0};function pg(a){return{value:a,done:!1}}
ng.prototype.ia=function(){return this};function qg(a){if(a instanceof rg||a instanceof sg||a instanceof tg)return a;if("function"==typeof a.next)return new rg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new rg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new rg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function rg(a){this.h=a}
rg.prototype.ia=function(){return new sg(this.h())};
rg.prototype[Symbol.iterator]=function(){return new tg(this.h())};
rg.prototype.g=function(){return new tg(this.h())};
function sg(a){this.h=a}
y(sg,ng);sg.prototype.next=function(){return this.h.next()};
sg.prototype[Symbol.iterator]=function(){return new tg(this.h)};
sg.prototype.g=function(){return new tg(this.h)};
function tg(a){rg.call(this,function(){return a});
this.i=a}
y(tg,rg);tg.prototype.next=function(){return this.i.next()};function ug(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ug)for(c=vg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function vg(a){wg(a);return a.g.concat()}
r=ug.prototype;r.has=function(a){return xg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||yg;wg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function yg(a,b){return a===b}
r.Nb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return xg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&wg(this),!0):!1};
function wg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];xg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],xg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return xg(this.h,a)?this.h[a]:b};
r.set=function(a,b){xg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=vg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new ug(this)};
r.keys=function(){return qg(this.ia(!0)).g()};
r.values=function(){return qg(this.ia(!1)).g()};
r.entries=function(){var a=this;return jg(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){wg(this);var b=0,c=this.i,d=this,e=new ng;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return og;var f=d.g[b++];return pg(a?f:d.h[f])};
return e};
function xg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var zg=D.JSON.stringify;function Ag(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Bg(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.o=this.u=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Cg(b,2,c)},function(c){Cg(b,3,c)})}catch(c){Cg(this,3,c)}}
function Dg(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
Dg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var Eg=new Wf(function(){return new Dg},function(a){a.reset()});
function Fg(a,b,c){var d=Eg.get();d.i=a;d.h=b;d.context=c;return d}
Bg.prototype.then=function(a,b,c){return Gg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Bg.prototype.$goog_Thenable=!0;Bg.prototype.cancel=function(a){if(0==this.g){var b=new Hg(a);fg(function(){Ig(this,b)},this)}};
function Ig(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Ig(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Jg(c),Kg(c,e,3,b)))}a.i=null}else Cg(a,3,b)}
function Lg(a,b){a.h||2!=a.g&&3!=a.g||Mg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function Gg(a,b,c,d){var e=Fg(null,null,null);e.g=new Bg(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof Hg?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;Lg(a,e);return e.g}
Bg.prototype.O=function(a){this.g=0;Cg(this,2,a)};
Bg.prototype.oa=function(a){this.g=0;Cg(this,3,a)};
function Cg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.O,f=a.oa;if(d instanceof Bg){Lg(d,Fg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var l=d.then;if("function"===typeof l){Ng(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,Mg(a),3!=b||c instanceof Hg||Og(a,c))}}
function Ng(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Mg(a){a.u||(a.u=!0,fg(a.K,a))}
function Jg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
Bg.prototype.K=function(){for(var a;a=Jg(this);)Kg(this,a,this.g,this.G);this.u=!1};
function Kg(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Pg(b,c,d);else try{b.l?b.i.call(b.context):Pg(b,c,d)}catch(e){Qg.call(null,e)}Xf(Eg,b)}
function Pg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Og(a,b){a.o=!0;fg(function(){a.o&&Qg.call(null,b)})}
var Qg=fc;function Hg(a){Za.call(this,a)}
Xa(Hg,Za);Hg.prototype.name="cancel";function M(a){Ve.call(this);this.u=1;this.i=[];this.o=0;this.g=[];this.h={};this.G=!!a}
Xa(M,Ve);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
function Rg(a,b,c){var d=Sg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.rb(a)}}
r.rb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.ab=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.G)for(e=0;e<c.length;e++){var g=c[e];Tg(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.Aa;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.rb(c)}}return 0!=e}return!1};
function Tg(a,b,c){fg(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.rb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Ug(a){this.g=a}
Ug.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,zg(b))};
Ug.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ug.prototype.remove=function(a){this.g.remove(a)};function Vg(a){this.g=a}
Xa(Vg,Ug);function Wg(a){this.data=a}
function Xg(a){return void 0===a||a instanceof Wg?a:new Wg(a)}
Vg.prototype.set=function(a,b){Vg.na.set.call(this,a,Xg(b))};
Vg.prototype.h=function(a){a=Vg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Vg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Yg(a){this.g=a}
Xa(Yg,Vg);Yg.prototype.set=function(a,b,c){if(b=Xg(b)){if(c){if(c<Wa()){Yg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Yg.na.set.call(this,a,b)};
Yg.prototype.h=function(a){var b=Yg.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Yg.prototype.remove.call(this,a);else return b}};function Zg(){}
;function $g(){}
Xa($g,Zg);$g.prototype[Symbol.iterator]=function(){return qg(this.ia(!0)).g()};
$g.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ah(a){this.g=a;this.h=null}
Xa(ah,$g);r=ah.prototype;r.set=function(a,b){bh(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){bh(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){bh(this);this.g.removeItem(a)};
r.ia=function(a){bh(this);var b=0,c=this.g,d=new ng;d.next=function(){if(b>=c.length)return og;var e=c.key(b++);if(a)return pg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return pg(e)};
return d};
r.clear=function(){bh(this);this.g.clear()};
r.key=function(a){bh(this);return this.g.key(a)};
function bh(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.h)?b:a.h=ch(a.g))||fc(Error("Storage mechanism: Storage unavailable"))}
function ch(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function dh(){var a=null;try{a=D.localStorage||null}catch(b){}ah.call(this,a)}
Xa(dh,ah);function eh(a,b){this.h=a;this.g=null;var c;if(c=jc)c=!(9<=Number(vc));if(c){fh||(fh=new ug);this.g=fh.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),fh.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Xa(eh,$g);var gh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},fh=null;function hh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return gh[b]})}
r=eh.prototype;r.set=function(a,b){this.g.setAttribute(hh(a),b);ih(this)};
r.get=function(a){a=this.g.getAttribute(hh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(hh(a));ih(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new ng;d.next=function(){if(b>=c.length)return og;var e=c[b++];if(a)return pg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return pg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ih(this)};
function ih(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function jh(a,b){this.h=a;this.g=b+"::"}
Xa(jh,$g);jh.prototype.set=function(a,b){this.h.set(this.g+a,b)};
jh.prototype.get=function(a){return this.h.get(this.g+a)};
jh.prototype.remove=function(a){this.h.remove(this.g+a)};
jh.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new ng;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return pg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},kh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.ac=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var lh={Qa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},mh={Qa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){return[].concat.apply([],a)}};
N.xd=function(){kh?(N.Pa=Uint8Array,N.pa=Uint16Array,N.Lc=Int32Array,N.assign(N,lh)):(N.Pa=Array,N.pa=Array,N.Lc=Array,N.assign(N,mh))};
N.xd();var nh=!0;try{new Uint8Array(1)}catch(a){nh=!1}
function oh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Pa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ph={};ph=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var qh={},rh,sh=[],th=0;256>th;th++){rh=th;for(var uh=0;8>uh;uh++)rh=rh&1?3988292384^rh>>>1:rh>>>1;sh[th]=rh}qh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^sh[(a^b[d])&255];return a^-1};var vh={};vh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function wh(a){for(var b=a.length;0<=--b;)a[b]=0}
var xh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],yh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],zh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ah=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Bh=Array(576);wh(Bh);var Ch=Array(60);wh(Ch);var Dh=Array(512);wh(Dh);var Eh=Array(256);wh(Eh);var Fh=Array(29);wh(Fh);var Gh=Array(30);wh(Gh);function Hh(a,b,c,d,e){this.Hc=a;this.ad=b;this.Zc=c;this.Xc=d;this.rd=e;this.qc=a&&a.length}
var Ih,Jh,Kh;function Lh(a,b){this.lc=a;this.Xa=0;this.Da=b}
function Mh(a,b){a.L[a.pending++]=b&255;a.L[a.pending++]=b>>>8&255}
function Nh(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,Mh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Oh(a,b,c){Nh(a,c[2*b],c[2*b+1])}
function qi(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function ri(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=qi(d[e]++,e))}
function si(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.X[512]=1;a.xa=a.bb=0;a.da=a.matches=0}
function ti(a){8<a.P?Mh(a,a.V):0<a.P&&(a.L[a.pending++]=a.V);a.V=0;a.P=0}
function ui(a,b,c){ti(a);Mh(a,c);Mh(a,~c);N.Qa(a.L,a.window,b,c,a.pending);a.pending+=c}
function vi(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function wi(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.wa;){e<a.wa&&vi(b,a.M[e+1],a.M[e],a.depth)&&e++;if(vi(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function xi(a,b,c){var d=0;if(0!==a.da){do{var e=a.L[a.jb+2*d]<<8|a.L[a.jb+2*d+1];var f=a.L[a.Pb+d];d++;if(0===e)Oh(a,f,b);else{var g=Eh[f];Oh(a,g+256+1,b);var h=xh[g];0!==h&&(f-=Fh[g],Nh(a,f,h));e--;g=256>e?Dh[e]:Dh[256+(e>>>7)];Oh(a,g,c);h=yh[g];0!==h&&(e-=Gh[g],Nh(a,e,h))}}while(d<a.da)}Oh(a,256,b)}
function yi(a,b){var c=b.lc,d=b.Da.Hc,e=b.Da.qc,f=b.Da.Xc,g,h=-1;a.wa=0;a.Ta=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var l=a.M[++a.wa]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.xa--;e&&(a.bb-=d[2*l+1])}b.Xa=h;for(g=a.wa>>1;1<=g;g--)wi(a,c,g);l=f;do g=a.M[1],a.M[1]=a.M[a.wa--],wi(a,c,1),d=a.M[1],a.M[--a.Ta]=g,a.M[--a.Ta]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.M[1]=l++,wi(a,c,1);while(2<=a.wa);a.M[--a.Ta]=
a.M[1];g=b.lc;l=b.Xa;d=b.Da.Hc;e=b.Da.qc;f=b.Da.ad;var k=b.Da.Zc,m=b.Da.rd,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.M[a.Ta]+1]=0;for(b=a.Ta+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>l)){a.ra[n]++;var t=0;p>=k&&(t=f[p-k]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.bb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.M[--b],d>l||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}ri(c,h,a.ra)}
function zi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];++g<h&&k===f||(g<l?a.S[2*k]+=g:0!==k?(k!==e&&a.S[2*k]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=k,0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function Ai(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];if(!(++g<h&&k===f)){if(g<l){do Oh(a,k,a.S);while(0!==--g)}else 0!==k?(k!==e&&(Oh(a,k,a.S),g--),Oh(a,16,a.S),Nh(a,g-3,2)):10>=g?(Oh(a,17,a.S),Nh(a,g-3,3)):(Oh(a,18,a.S),Nh(a,g-11,7));g=0;e=k;0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function Bi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var Ci=!1;function Di(a,b,c){a.L[a.jb+2*a.da]=b>>>8&255;a.L[a.jb+2*a.da+1]=b&255;a.L[a.Pb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(Eh[c]+256+1)]++,a.Ia[2*(256>b?Dh[b]:Dh[256+(b>>>7)])]++);return a.da===a.nb-1}
;function Ei(a,b){a.msg=vh[b];return b}
function Fi(a){for(var b=a.length;0<=--b;)a[b]=0}
function Gi(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Qa(a.output,b.L,b.ob,c,a.Ya),a.Ya+=c,b.ob+=c,a.cc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.ob=0))}
function Hi(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.C.Kb&&(a.C.Kb=Bi(a));yi(a,a.Cb);yi(a,a.yb);zi(a,a.X,a.Cb.Xa);zi(a,a.Ia,a.yb.Xa);yi(a,a.hc);for(e=18;3<=e&&0===a.S[2*Ah[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Nh(a,b?1:0,3),ui(a,c,d);else if(4===a.strategy||g===f)Nh(a,2+(b?1:0),3),xi(a,Bh,Ch);else{Nh(a,4+(b?1:0),3);c=a.Cb.Xa+1;d=a.yb.Xa+1;e+=1;Nh(a,c-257,5);Nh(a,d-1,5);Nh(a,e-4,4);for(f=0;f<e;f++)Nh(a,a.S[2*Ah[f]+
1],3);Ai(a,a.X,c-1);Ai(a,a.Ia,d-1);xi(a,a.X,a.Ia)}si(a);b&&ti(a);a.Z=a.j;Gi(a.C)}
function Q(a,b){a.L[a.pending++]=b}
function Ii(a,b){a.L[a.pending++]=b>>>8&255;a.L[a.pending++]=b&255}
function Ji(a,b){var c=a.yc,d=a.j,e=a.aa,f=a.zc,g=a.j>a.T-262?a.j-(a.T-262):0,h=a.window,l=a.Fa,k=a.la,m=a.j+258,n=h[d+e-1],q=h[d+e];a.aa>=a.pc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Wa=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=k[b&l])>g&&0!==--c);return e<=
a.m?e:a.m}
function Ki(a){var b=a.T,c;do{var d=a.Jc-a.m-a.j;if(a.j>=b+(b-262)){N.Qa(a.window,a.window,b,b,0);a.Wa-=b;a.j-=b;a.Z-=b;var e=c=a.Bb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.j+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Qa(c,e.input,e.Na,g,f),1===e.state.wrap?e.A=ph(e.A,c,g,f):2===e.state.wrap&&(e.A=qh(e.A,c,g,f)),e.Na+=g,e.Oa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Fa]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function Li(a,b){for(var c;;){if(262>a.m){Ki(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);0!==c&&a.j-c<=a.T-262&&(a.H=Ji(a,c));if(3<=a.H)if(c=Di(a,a.j-a.Wa,a.H-3),a.m-=a.H,a.H<=a.Rb&&3<=a.m){a.H--;do a.j++,a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j;while(0!==--a.H);a.j++}else a.j+=a.H,a.H=0,a.D=a.window[a.j],a.D=(a.D<<a.va^a.window[a.j+1])&a.ta;else c=Di(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(Hi(a,!1),0===a.C.F))return 1}a.Y=2>a.j?a.j:2;return 4===b?(Hi(a,!0),0===a.C.F?3:4):a.da&&(Hi(a,!1),0===a.C.F)?1:2}
function Mi(a,b){for(var c,d;;){if(262>a.m){Ki(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);a.aa=a.H;a.Cc=a.Wa;a.H=2;0!==c&&a.aa<a.Rb&&a.j-c<=a.T-262&&(a.H=Ji(a,c),5>=a.H&&(1===a.strategy||3===a.H&&4096<a.j-a.Wa)&&(a.H=2));if(3<=a.aa&&a.H<=a.aa){d=a.j+a.m-3;c=Di(a,a.j-1-a.Cc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);while(0!==
--a.aa);a.La=0;a.H=2;a.j++;if(c&&(Hi(a,!1),0===a.C.F))return 1}else if(a.La){if((c=Di(a,0,a.window[a.j-1]))&&Hi(a,!1),a.j++,a.m--,0===a.C.F)return 1}else a.La=1,a.j++,a.m--}a.La&&(Di(a,0,a.window[a.j-1]),a.La=0);a.Y=2>a.j?a.j:2;return 4===b?(Hi(a,!0),0===a.C.F?3:4):a.da&&(Hi(a,!1),0===a.C.F)?1:2}
function Ni(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Ki(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.H=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.H=258-(e-d);a.H>a.m&&(a.H=a.m)}3<=a.H?(c=Di(a,1,a.H-3),a.m-=a.H,a.j+=a.H,a.H=0):(c=Di(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(Hi(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Hi(a,!0),0===a.C.F?3:4):
a.da&&(Hi(a,!1),0===a.C.F)?1:2}
function Oi(a,b){for(var c;;){if(0===a.m&&(Ki(a),0===a.m)){if(0===b)return 1;break}a.H=0;c=Di(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(Hi(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Hi(a,!0),0===a.C.F?3:4):a.da&&(Hi(a,!1),0===a.C.F)?1:2}
function Pi(a,b,c,d,e){this.dd=a;this.qd=b;this.td=c;this.pd=d;this.bd=e}
var Qi;Qi=[new Pi(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){Ki(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,Hi(a,!1),0===a.C.F)return 1;if(a.j-a.Z>=a.T-262&&(Hi(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return Hi(a,!0),0===a.C.F?3:4;a.j>a.Z&&Hi(a,!1);return 1}),
new Pi(4,4,8,4,Li),new Pi(4,5,16,8,Li),new Pi(4,6,32,32,Li),new Pi(4,4,16,16,Mi),new Pi(8,16,32,32,Mi),new Pi(8,16,128,128,Mi),new Pi(8,32,128,256,Mi),new Pi(32,128,258,1024,Mi),new Pi(32,258,258,4096,Mi)];
function Ri(){this.C=null;this.status=0;this.L=null;this.wrap=this.pending=this.ob=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Ua=-1;this.Fa=this.dc=this.T=0;this.window=null;this.Jc=0;this.head=this.la=null;this.zc=this.pc=this.strategy=this.level=this.Rb=this.yc=this.aa=this.m=this.Wa=this.j=this.La=this.Cc=this.H=this.Z=this.va=this.ta=this.Lb=this.Bb=this.D=0;this.X=new N.pa(1146);this.Ia=new N.pa(122);this.S=new N.pa(78);Fi(this.X);Fi(this.Ia);Fi(this.S);this.hc=this.yb=this.Cb=null;this.ra=
new N.pa(16);this.M=new N.pa(573);Fi(this.M);this.Ta=this.wa=0;this.depth=new N.pa(573);Fi(this.depth);this.P=this.V=this.Y=this.matches=this.bb=this.xa=this.jb=this.da=this.nb=this.Pb=0}
function Si(a,b){if(!a||!a.state||5<b||0>b)return a?Ei(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return Ei(a,0===a.F?-5:-2);c.C=a;var d=c.Ua;c.Ua=b;if(42===c.status)if(2===c.wrap)a.A=0,Q(c,31),Q(c,139),Q(c,8),c.v?(Q(c,(c.v.text?1:0)+(c.v.Ba?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),Q(c,c.v.time&255),Q(c,c.v.time>>8&255),Q(c,c.v.time>>16&255),Q(c,c.v.time>>24&255),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,c.v.xe&255),c.v.extra&&c.v.extra.length&&
(Q(c,c.v.extra.length&255),Q(c,c.v.extra.length>>8&255)),c.v.Ba&&(a.A=qh(a.A,c.L,c.pending,0)),c.fa=0,c.status=69):(Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,3),c.status=113);else{var e=8+(c.dc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Ii(c,e+(31-e%31));0!==c.j&&(Ii(c,a.A>>>16),Ii(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Ba&&c.pending>e&&(a.A=qh(a.A,c.L,c.pending-e,e)),Gi(a),e=c.pending,c.pending!==c.ea));)Q(c,c.v.extra[c.fa]&255),c.fa++;c.v.Ba&&c.pending>e&&(a.A=qh(a.A,c.L,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=qh(a.A,c.L,c.pending-e,e)),Gi(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>
e&&(a.A=qh(a.A,c.L,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=qh(a.A,c.L,c.pending-e,e)),Gi(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>e&&(a.A=qh(a.A,c.L,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ba?(c.pending+2>c.ea&&Gi(a),c.pending+2<=c.ea&&(Q(c,a.A&
255),Q(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(Gi(a),0===a.F)return c.Ua=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return Ei(a,-5);if(666===c.status&&0!==a.U)return Ei(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Oi(c,b):3===c.strategy?Ni(c,b):Qi[c.level].bd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ua=-1),0;if(2===d&&(1===b?(Nh(c,2,3),Oh(c,256,Bh),16===c.P?(Mh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.L[c.pending++]=
c.V&255,c.V>>=8,c.P-=8)):5!==b&&(Nh(c,0,3),ui(c,0,0),3===b&&(Fi(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),Gi(a),0===a.F))return c.Ua=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Q(c,a.A&255),Q(c,a.A>>8&255),Q(c,a.A>>16&255),Q(c,a.A>>24&255),Q(c,a.Oa&255),Q(c,a.Oa>>8&255),Q(c,a.Oa>>16&255),Q(c,a.Oa>>24&255)):(Ii(c,a.A>>>16),Ii(c,a.A&65535));Gi(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Ti={};Ti=function(){this.input=null;this.Oa=this.U=this.Na=0;this.output=null;this.cc=this.F=this.Ya=0;this.msg="";this.state=null;this.Kb=2;this.A=0};var Ui=Object.prototype.toString;
function Vi(a){if(!(this instanceof Vi))return new Vi(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Ga:15,sd:8,strategy:0,Ea:""},a||{});a.raw&&0<a.Ga?a.Ga=-a.Ga:a.ed&&0<a.Ga&&16>a.Ga&&(a.Ga+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Ti;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ga,f=a.sd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=Ei(b,-2);else{8===e&&(e=9);var l=new Ri;
b.state=l;l.C=b;l.wrap=h;l.v=null;l.dc=e;l.T=1<<l.dc;l.Fa=l.T-1;l.Lb=f+7;l.Bb=1<<l.Lb;l.ta=l.Bb-1;l.va=~~((l.Lb+3-1)/3);l.window=new N.Pa(2*l.T);l.head=new N.pa(l.Bb);l.la=new N.pa(l.T);l.nb=1<<f+6;l.ea=4*l.nb;l.L=new N.Pa(l.ea);l.jb=1*l.nb;l.Pb=3*l.nb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.Oa=b.cc=0;b.Kb=2;c=b.state;c.pending=0;c.ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ua=0;if(!Ci){d=Array(16);for(f=g=0;28>f;f++)for(Fh[f]=g,e=0;e<1<<xh[f];e++)Eh[g++]=
f;Eh[g-1]=f;for(f=g=0;16>f;f++)for(Gh[f]=g,e=0;e<1<<yh[f];e++)Dh[g++]=f;for(g>>=7;30>f;f++)for(Gh[f]=g<<7,e=0;e<1<<yh[f]-7;e++)Dh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Bh[2*e+1]=8,e++,d[8]++;for(;255>=e;)Bh[2*e+1]=9,e++,d[9]++;for(;279>=e;)Bh[2*e+1]=7,e++,d[7]++;for(;287>=e;)Bh[2*e+1]=8,e++,d[8]++;ri(Bh,287,d);for(e=0;30>e;e++)Ch[2*e+1]=5,Ch[2*e]=qi(e,5);Ih=new Hh(Bh,xh,257,286,15);Jh=new Hh(Ch,yh,0,30,15);Kh=new Hh([],zh,0,19,7);Ci=!0}c.Cb=new Lh(c.X,Ih);c.yb=new Lh(c.Ia,Jh);c.hc=new Lh(c.S,
Kh);c.V=0;c.P=0;si(c);c=0}else c=Ei(b,-2);0===c&&(b=b.state,b.Jc=2*b.T,Fi(b.head),b.Rb=Qi[b.level].qd,b.pc=Qi[b.level].dd,b.zc=Qi[b.level].td,b.yc=Qi[b.level].pd,b.j=0,b.Z=0,b.m=0,b.Y=0,b.H=b.aa=2,b.La=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(vh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.kb){var k;"string"===typeof a.kb?k=oh(a.kb):"[object ArrayBuffer]"===Ui.call(a.kb)?k=new Uint8Array(a.kb):k=a.kb;a=this.C;f=k;g=f.length;if(a&&a.state)if(k=a.state,b=k.wrap,
2===b||1===b&&42!==k.status||k.m)b=-2;else{1===b&&(a.A=ph(a.A,f,g,0));k.wrap=0;g>=k.T&&(0===b&&(Fi(k.head),k.j=0,k.Z=0,k.Y=0),c=new N.Pa(k.T),N.Qa(c,f,g-k.T,k.T,0),f=c,g=k.T);c=a.U;d=a.Na;e=a.input;a.U=g;a.Na=0;a.input=f;for(Ki(k);3<=k.m;){f=k.j;g=k.m-2;do k.D=(k.D<<k.va^k.window[f+3-1])&k.ta,k.la[f&k.Fa]=k.head[k.D],k.head[k.D]=f,f++;while(--g);k.j=f;k.m=2;Ki(k)}k.j+=k.m;k.Z=k.j;k.Y=k.m;k.m=0;k.H=k.aa=2;k.La=0;a.Na=d;a.input=e;a.U=c;k.wrap=b;b=0}else b=-2;if(0!==b)throw Error(vh[b]);this.me=!0}}
Vi.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=oh(a):"[object ArrayBuffer]"===Ui.call(a)?c.input=new Uint8Array(a):c.input=a;c.Na=0;c.U=c.input.length;do{0===c.F&&(c.output=new N.Pa(d),c.Ya=0,c.F=d);a=Si(c,e);if(1!==a&&0!==a)return Wi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Ea){var f=N.ac(c.output,c.Ya);b=f;f=f.length;if(65537>f&&(b.subarray&&nh||!b.subarray))b=
String.fromCharCode.apply(null,N.ac(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.ac(c.output,c.Ya),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=Ei(c,-2):(c.state=null,a=113===d?Ei(c,-3):0)):a=-2,Wi(this,a),this.ended=!0,0===a;2===e&&(Wi(this,0),c.F=0);return!0};
function Wi(a,b){0===b&&(a.result="string"===a.options.Ea?a.chunks.join(""):N.nc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Xi(a){this.name=a}
;var Yi=new Xi("rawColdConfigGroup");var Zi=new Xi("rawHotConfigGroup");function $i(a){this.s=I(a)}
y($i,L);$i.prototype.g=function(a){K(this,5,a)};function aj(a){this.s=I(a)}
y(aj,L);function bj(a){this.s=I(a)}
y(bj,L);bj.ma=[2];function cj(a){this.s=I(a)}
y(cj,L);cj.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Pd(this,36);b=null==b?b:Number.isFinite(b)?b|0:void 0;return null!=b?b:a};
cj.prototype.setHomeGroupInfo=function(a){return J(this,bj,81,a)};
cj.ma=[9,66,32,86,100,101];function dj(a){this.s=I(a)}
y(dj,L);dj.prototype.getKey=function(){return ae(this,1)};
dj.prototype.ja=function(){return ae(this,Wd(this,ej,2))};
var ej=[2,3,4,5,6];function fj(a){this.s=I(a)}
y(fj,L);fj.ma=[15,26,28];function gj(a){this.s=I(a)}
y(gj,L);gj.ma=[5];function hj(a){this.s=I(a)}
y(hj,L);function ij(a){this.s=I(a)}
y(ij,L);ij.prototype.setSafetyMode=function(a){return ee(this,5,a)};
ij.ma=[12];function jj(a){this.s=I(a)}
y(jj,L);jj.ma=[12];var kj={le:"WEB_DISPLAY_MODE_UNKNOWN",he:"WEB_DISPLAY_MODE_BROWSER",je:"WEB_DISPLAY_MODE_MINIMAL_UI",ke:"WEB_DISPLAY_MODE_STANDALONE",ie:"WEB_DISPLAY_MODE_FULLSCREEN"};function lj(a){this.s=I(a)}
y(lj,L);lj.prototype.getKey=function(){return ae(this,1)};
lj.prototype.ja=function(){return ae(this,2)};function mj(a){this.s=I(a)}
y(mj,L);mj.ma=[4,5];function nj(a){this.s=I(a)}
y(nj,L);function oj(a){this.s=I(a)}
y(oj,L);var pj=[2,3,4,5];function qj(a){this.s=I(a)}
y(qj,L);function rj(a){this.s=I(a)}
y(rj,L);function sj(a){this.s=I(a)}
y(sj,L);function tj(a){this.s=I(a)}
y(tj,L);tj.ma=[10,17];function uj(a){this.s=I(a)}
y(uj,L);function vj(a){this.s=I(a)}
y(vj,L);function wj(a){this.s=I(a)}
y(wj,L);function xj(a){this.s=I(a,496)}
y(xj,L);
var yj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495];function zj(a){this.s=I(a)}
y(zj,L);function Aj(a){this.s=I(a)}
y(Aj,L);Aj.prototype.getPlaylistId=function(){return be(this,2)};
var ce=[1,2];function Bj(a){this.s=I(a)}
y(Bj,L);Bj.ma=[3];var Cj=D.window,Dj,Ej,Fj=(null==Cj?void 0:null==(Dj=Cj.yt)?void 0:Dj.config_)||(null==Cj?void 0:null==(Ej=Cj.ytcfg)?void 0:Ej.data_)||{};F("yt.config_",Fj);function Gj(){var a=arguments;1<a.length?Fj[a[0]]=a[1]:1===a.length&&Object.assign(Fj,a[0])}
function R(a,b){return a in Fj?Fj[a]:b}
function Hj(){return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Ij(){var a=Fj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Jj=[];function Kj(a){Jj.forEach(function(b){return b(a)})}
function Lj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Mj(b)}}:a}
function Mj(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Gj("ERRORS",b));Kj(a)}
function Nj(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Gj("ERRORS",f))}
;function S(a){a=Oj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=Oj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Oj(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Pj(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var Qj=0;F("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Qj});var Rj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Sj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=D.ytEventsEventsListeners||{};F("ytEventsEventsListeners",nb);var Tj=D.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Tj);
function Uj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Vj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
var Wj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Xj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Uj(a,b,c,d);if(!e){e=++Tj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sj(h);if(!ke(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sj(h);
h.currentTarget=a;return c.call(a,h)};
g=Lj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d]}}}
;function Yj(a,b){"function"===typeof a&&(a=Lj(a));return window.setTimeout(a,b)}
function Zj(a){"function"===typeof a&&(a=Lj(a));return window.setInterval(a,250)}
;var ak=/^[\w.]*$/,bk={q:!0,search_query:!0};function ck(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=dk(f[0]||""),h=dk(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?kb(l,h):c[g]=[l,h]}else c[g]=h}catch(q){var k=q,m=f[0],n=String(ck);k.args=[{key:m,value:f[1],query:a,method:ek===n?"unchanged":n}];bk.hasOwnProperty(m)||Nj(k)}}return c}
var ek=String(ck);function fk(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function gk(a){"?"===a.charAt(0)&&(a=a.substring(1));return ck(a,"&")}
function hk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=gk(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=cc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ik(a){if(!b)var b=window.location.href;var c=a.match(Yb)[1]||null,d=$b(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)===d&&(Number(b.match(Yb)[4]||null)||null)===(Number(a.match(Yb)[4]||null)||null):!0;return a}
function dk(a){return a&&a.match(ak)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function jk(a){var b=kk;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Fe;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ia){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?he:g;try{var h=g.history.length}catch(ia){h=0}e.u_his=h;var l;e.u_h=null==(l=he.screen)?void 0:l.height;var k;e.u_w=null==(k=he.screen)?void 0:k.width;var m;e.u_ah=null==(m=he.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=he.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=he.screen)?void 0:q.colorDepth}catch(ia){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ia){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ia){}try{var C=h.innerWidth;var P=h.innerHeight}catch(ia){}try{var U=h.screenLeft;var Y=h.screenTop}catch(ia){}try{C=h.innerWidth,P=h.innerHeight}catch(ia){}try{var La=h.screen.availWidth;var Ca=h.screen.availTop}catch(ia){}p=[U,Y,p,t,La,Ca,u,z,C,P];t=b.g.top;try{var Ma=(t||window).document,ja=
"CSS1Compat"==Ma.compatMode?Ma.documentElement:Ma.body;var ra=(new ie(ja.clientWidth,ja.clientHeight)).round()}catch(ia){ra=new ie(-12245933,-12245933)}Ma=ra;ra={};var sa=void 0===sa?D:sa;ja=new Df;"SVGElement"in sa&&"createElementNS"in sa.document&&ja.set(0);t=De();t["allow-top-navigation-by-user-activation"]&&ja.set(1);t["allow-popups-to-escape-sandbox"]&&ja.set(2);sa.crypto&&sa.crypto.subtle&&ja.set(3);"TextDecoder"in sa&&"TextEncoder"in sa&&ja.set(4);sa=Ef(ja);ra.bc=sa;ra.bih=Ma.height;ra.biw=
Ma.width;ra.brdim=p.join();b=b.h;b=(ra.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ra.wgl=!!he.WebGLRenderingContext,ra);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var kk=new function(){var a=window.document;this.g=window;this.h=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return fk(jk(a))});Wa();var lk="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function mk(){if(!lk)return null;var a=lk();return"open"in a?a:null}
;var nk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(nk);var ok={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},pk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(nk)),qk=!1;
function rk(a,b){b=void 0===b?{}:b;var c=ik(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in ok){var f=R(ok[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&$b(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&R("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());
if(c||!$b(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(l){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=fk(jk()));return b}
function sk(a){var b=window.location.search,c=$b(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ik(a)&&(c=document.location.hostname);var d=Zb(a.match(Yb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=gk(b),f={};db(pk,function(g){e[g]&&(f[g]=e[g])});
return hk(a,f||{},!1)}
function tk(a,b){var c=b.format||"JSON";a=uk(a,b);var d=vk(a,b),e=!1,f=wk(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,n=400<=l.status&&500>l.status,q=500<=l.status&&600>l.status;if(k||n||q)m=xk(a,c,l,b.convertToSafeHtml);if(k)a:if(l&&204==l.status)k=!0;else{switch(c){case "XML":k=0==parseInt(m&&m.return_code,10);break a;case "RAW":k=!0;break a}k=
!!m}m=m||{};n=b.context||D;k?b.onSuccess&&b.onSuccess.call(n,l,m):b.onError&&b.onError.call(n,l,m);b.onFinish&&b.onFinish.call(n,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Yj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function uk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=hk(a,b||{},!0);return a}
function vk(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=gk(e),rb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):cc(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!qk&&a&&"POST"!=b.method&&(qk=!0,Mj(Error("AJAX request with postData should use POST")));return e}
function xk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Nj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?yk(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=zk(g)})}d&&Ak(e);
return e}
function Ak(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=tb();d=e?e.createHTML(d):d;a[c]=new Wb(d)}else Ak(a[b])}}
function yk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function zk(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Bk(a,b){b.method="POST";b.postParams||(b.postParams={});return tk(a,b)}
function wk(a,b,c,d,e,f,g,h){function l(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Lj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var k=mk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;S("debug_forward_web_query_parameters")&&(a=sk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=rk(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&k.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});k.send(d);return k}
;var Ck=[{Sb:function(a){return"Cannot read property '"+a.key+"'"},
Db:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Sb:function(a){return"Cannot call '"+a.key+"'"},
Db:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Sb:function(a){return a.key+" is not defined"},
Db:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ek={Ca:[],za:[{ib:Dk,weight:500}]};function Dk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Fk(){this.za=[];this.Ca=[]}
var Gk;function Hk(){if(!Gk){var a=Gk=new Fk;a.Ca.length=0;a.za.length=0;Ek.Ca&&a.Ca.push.apply(a.Ca,Ek.Ca);Ek.za&&a.za.push.apply(a.za,Ek.za)}return Gk}
;var Ik=new M;function Jk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Kk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Kk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Kk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Kk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Lk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Mk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,l=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Jk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Mk(f+".ve",g,h,l):0;d+=f;d+=Mk(e,a[e],b,c);if(500<d)break}}else c[b]=Nk(a),d+=c[b].length;else c[b]=Nk(a),d+=c[b].length;return d}
function Mk(a,b,c,d){c+="."+a;a=Nk(b);d[c]=a;return c.length+a.length}
function Nk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Ok(){}
;function Pk(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Qk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;F("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var Rk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Sk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Tk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Uk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Vk(){var a=D.navigator;return a?a.connection:void 0}
;function Wk(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Wk,Error);function Xk(){try{return Yk(),!0}catch(a){return!1}}
function Yk(){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new Wk("Datasync ID not set","unknown");}
;function Zk(){}
function $k(a,b){return Cf.Ha(a,0,b)}
Zk.prototype.qa=function(a,b){return this.Ha(a,1,b)};
Zk.prototype.gb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var al=T("web_emulated_idle_callback_delay",300),bl=1E3/60-3,cl=[8,5,4,3,2,1,0];
function dl(a){a=void 0===a?{}:a;Ve.call(this);this.h=[];this.i={};this.eb=this.g=0;this.cb=this.u=!1;this.O=[];this.oa=this.fb=!1;for(var b=w(cl),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.o=0;this.Qc=a.timeout||1;this.K=bl;this.G=0;this.sb=this.ud.bind(this);this.Pc=this.zd.bind(this);this.Mc=this.Rc.bind(this);this.Nc=this.fd.bind(this);this.Oc=this.vd.bind(this);this.ec=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.sb)}
y(dl,Ve);r=dl.prototype;r.gb=function(a){var b=Wa();el(a);a=Wa()-b;this.u||(this.K-=a)};
r.Ha=function(a,b,c){++this.eb;if(10===b)return this.gb(a),this.eb;var d=this.eb;this.i[d]=a;this.u&&!c?this.O.push({id:d,priority:b}):(this.h[b].push(d),this.cb||this.u||(0!==this.g&&fl(this)!==this.G&&gl(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function hl(a){a.O.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};gl(a)}
function fl(a){if(a.h[8].length){if(a.oa)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.o;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function il(a){var b=E("yt.logging.errors.log");b&&b(a)}
function el(a){try{a()}catch(b){il(b)}}
function jl(a){for(var b=w(cl),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.fd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fb=!0;kl(this,b);this.fb=!1};
r.zd=function(){kl(this)};
r.Rc=function(){ll(this)};
r.vd=function(a){this.oa=!0;var b=fl(this);4===b&&b!==this.G&&(gl(this),this.start());kl(this,void 0,a);this.oa=!1};
r.ud=function(){document.hidden||ll(this);this.g&&(gl(this),this.start())};
function ll(a){gl(a);a.u=!0;for(var b=Wa(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&el(e)}ml(a);a.u=!1;jl(a)&&a.start();b=Wa()-b;a.K-=b}
function ml(a){for(var b=0,c=a.O.length;b<c;b++){var d=a.O[b];a.h[d.priority].push(d.id)}a.O.length=0}
function kl(a,b,c){a.oa&&4===a.G&&a.g||gl(a);a.u=!0;b=Wa()+(b||a.K);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){il(k)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&el(e);d=a.fb?0:1;d=a.o>d?a.o:d;if(!(Wa()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&el(c)}while(c&&Wa()<b)}a.u=!1;ml(a);a.K=bl;jl(a)&&a.start()}
r.start=function(){this.cb=!1;if(0===this.g)switch(this.G=fl(this),this.G){case 1:var a=this.Nc;this.g=this.ec?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,al);break;case 2:this.g=window.setTimeout(this.Pc,this.Qc);break;case 3:this.g=window.requestAnimationFrame(this.Oc);break;case 4:this.g=window.setTimeout(this.Mc,0)}};
function gl(a){if(a.g){switch(a.G){case 1:var b=a.g;a.ec?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){hl(this);gl(this);this.ya&&document.removeEventListener("visibilitychange",this.sb);Ve.prototype.sa.call(this)};var nl=E("yt.scheduler.instance.timerIdMap_")||{},ol=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),pl=0,ql=0;function rl(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Aa)a=new dl(R("scheduler")||{}),F("ytglobal.schedulerInstanceInstance_",a);return a}
function sl(){tl();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Re(a),F("ytglobal.schedulerInstanceInstance_",null))}
function tl(){hl(rl());for(var a in nl)nl.hasOwnProperty(a)&&delete nl[Number(a)]}
function ul(a,b,c){if(!c)return c=void 0===c,-rl().Ha(a,b,c);var d=window.setTimeout(function(){var e=rl().Ha(a,b);nl[d]=e},c);
return d}
function vl(a){rl().gb(a)}
function wl(a){var b=rl();if(0>a)b.ba(-a);else{var c=nl[a];c?(b.ba(c),delete nl[a]):window.clearTimeout(a)}}
function xl(){yl()}
function yl(){window.clearTimeout(pl);rl().start()}
function zl(){var a=rl();gl(a);a.cb=!0;window.clearTimeout(pl);pl=window.setTimeout(xl,ol)}
function Al(){window.clearTimeout(ql);ql=window.setTimeout(function(){Bl(0)},ol)}
function Bl(a){Al();var b=rl();b.o=a;b.start()}
function Cl(a){Al();var b=rl();b.o>a&&(b.o=a,b.start())}
function Dl(){window.clearTimeout(ql);var a=rl();a.o=0;a.start()}
;function El(){Zk.apply(this,arguments)}
y(El,Zk);function Fl(){El.g||(El.g=new El);return El.g}
El.prototype.Ha=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Yj(a,c||0)};
El.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
El.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
var Cf=Fl();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(F("yt.scheduler.instance.dispose",sl),F("yt.scheduler.instance.addJob",ul),F("yt.scheduler.instance.addImmediateJob",vl),F("yt.scheduler.instance.cancelJob",wl),F("yt.scheduler.instance.cancelAllJobs",tl),F("yt.scheduler.instance.start",yl),F("yt.scheduler.instance.pause",zl),F("yt.scheduler.instance.setPriorityThreshold",Bl),F("yt.scheduler.instance.enablePriorityThreshold",Cl),F("yt.scheduler.instance.clearPriorityThreshold",Dl),F("yt.scheduler.initialized",
!0));function Gl(a){var b=new dh;(b=(b.h=ch(b.g))?a?new jh(b,a):b:null)||(a=new eh(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Yg(a):null;this.h=document.domain||window.location.hostname}
Gl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(zg(b))}catch(f){return}else e=escape(b);b=this.h;Ne.set(""+a,e,{Qb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Gl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Ne.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Gl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Ne.remove(""+a,"/",void 0===b?"youtube.com":b)};var Hl=function(){var a;return function(){a||(a=new Gl("ytidb"));return a}}();
function Il(){var a;return null==(a=Hl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Jl=[],Kl=!1;function Ll(a){Kl||(Jl.push({type:"ERROR",payload:a}),10<Jl.length&&Jl.shift())}
function Ml(a,b){Kl||(Jl.push({type:"EVENT",eventType:a,payload:b}),10<Jl.length&&Jl.shift())}
;function Nl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ol(a){return a.substr(0,a.indexOf(":"))||a}
;var Pl=wc||Bc;var Ql={},Rl=(Ql.AUTH_INVALID="No user identifier specified.",Ql.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ql.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ql.MISSING_INDEX="Index not created.",Ql.MISSING_OBJECT_STORES="Object stores not created.",Ql.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ql.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ql.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ql.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ql.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ql.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ql.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ql),Sl={},Tl=(Sl.AUTH_INVALID="ERROR",Sl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Sl.EXPLICIT_ABORT="IGNORED",Sl.IDB_NOT_SUPPORTED="ERROR",Sl.MISSING_INDEX=
"WARNING",Sl.MISSING_OBJECT_STORES="ERROR",Sl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Sl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Sl.QUOTA_EXCEEDED="WARNING",Sl.QUOTA_MAYBE_EXCEEDED="WARNING",Sl.UNKNOWN_ABORT="WARNING",Sl.INCOMPATIBLE_DB_VERSION="WARNING",Sl),Ul={},Vl=(Ul.AUTH_INVALID=!1,Ul.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ul.EXPLICIT_ABORT=!1,Ul.IDB_NOT_SUPPORTED=!1,Ul.MISSING_INDEX=!1,Ul.MISSING_OBJECT_STORES=!1,Ul.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ul.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ul.QUOTA_EXCEEDED=!1,Ul.QUOTA_MAYBE_EXCEEDED=!0,Ul.UNKNOWN_ABORT=!0,Ul.INCOMPATIBLE_DB_VERSION=!1,Ul);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Rl[a]:c;d=void 0===d?Tl[a]:d;e=void 0===e?Vl[a]:e;Wk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,V.prototype)}
y(V,Wk);function Wl(a,b){V.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Rl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Wl.prototype)}
y(Wl,V);function Xl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Xl.prototype)}
y(Xl,Error);var Yl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Zl(a,b,c,d){b=Ol(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof V)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new V("QUOTA_EXCEEDED",a);if(Cc&&"UnknownError"===e.name)return new V("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Xl)return new V("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Yl.some(function(f){return e.message.includes(f)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new V("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",we:e.name})];e.level="WARNING";return e}
function $l(a,b,c){var d=Il();return new V("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function am(a){if(!a)throw Error();throw a;}
function bm(a){return a}
function cm(a){this.g=a}
function dm(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
dm.resolve=function(a){return new dm(new cm(function(b,c){a instanceof dm?a.then(b,c):b(a)}))};
dm.reject=function(a){return new dm(new cm(function(b,c){c(a)}))};
dm.prototype.then=function(a,b){var c=this,d=null!=a?a:bm,e=null!=b?b:am;return new dm(new cm(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){em(c,c,d,f,g)}),c.h.push(function(){fm(c,c,e,f,g)})):"FULFILLED"===c.state.status?em(c,c,d,f,g):"REJECTED"===c.state.status&&fm(c,c,e,f,g)}))};
function gm(a,b){a.then(void 0,b)}
function em(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof dm?hm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof dm?hm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof dm?hm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function im(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function jm(a){return new Promise(function(b,c){im(a,b,c)})}
function km(a){return new dm(new cm(function(b,c){im(a,b,c)}))}
;function lm(a,b){return new dm(new cm(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var mm=window,X=mm.ytcsi&&mm.ytcsi.now?mm.ytcsi.now:mm.performance&&mm.performance.timing&&mm.performance.now&&mm.performance.timing.navigationStart?function(){return mm.performance.timing.navigationStart+mm.performance.now()}:function(){return(new Date).getTime()};function nm(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(X());this.h=!1}
r=nm.prototype;r.add=function(a,b,c){return om(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return om(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function pm(a,b,c){a=a.g.createObjectStore(b,c);return new qm(a)}
r.delete=function(a,b){return om(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return om(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function rm(a,b,c){return om(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return km(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function om(a,b,c,d){var e,f,g,h,l,k,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var C={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?C.mode=c:Object.assign(C,c);e=C;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;l=Math.round(X());va(z,5);k=a.g.transaction(b,e.mode);C=new sm(k);C=tm(C,d);return A(z,C,7);case 7:return m=z.h,n=Math.round(X()),um(a,l,n,g,void 0,b.join(),e),z.return(m);case 5:q=wa(z);p=Math.round(X());t=Zl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof V&&!t.g)||g>=f)um(a,l,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function um(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Ml("QUOTA_EXCEEDED",{dbName:Ol(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Ml("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),vm(a,!1,d,f,b,g.tag),Ll(e)):vm(a,!0,d,f,b,g.tag)}
function vm(a,b,c,d,e,f){Ml("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function qm(a){this.g=a}
r=qm.prototype;r.add=function(a,b){return km(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return km(this.g.clear()).then(function(){})};
function wm(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function xm(a,b){return ym(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?xm(this,a):km(this.g.delete(a))};
r.get=function(a){return km(this.g.get(a))};
r.index=function(a){try{return new zm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Xl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function ym(a,b,c){a=a.g.openCursor(b.query,b.direction);return Am(a).then(function(d){return lm(d,c)})}
function sm(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=V;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function tm(a,b){var c=new Promise(function(d,e){try{gm(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
sm.prototype.abort=function(){this.g.abort();this.h=!0;throw new V("EXPLICIT_ABORT");};
sm.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new qm(a),this.i.set(a,b));return b};
function zm(a){this.g=a}
r=zm.prototype;r.delete=function(a){return Bm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return km(this.g.get(a))};
r.getKey=function(a){return km(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function Bm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Am(a).then(function(d){return lm(d,c)})}
function Cm(a,b){this.request=a;this.cursor=b}
function Am(a){return km(a).then(function(b){return b?new Cm(a,b):null})}
r=Cm.prototype;r.advance=function(a){this.cursor.advance(a);return Am(this.request)};
r.continue=function(a){this.cursor.continue(a);return Am(this.request)};
r.delete=function(){return km(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return km(this.cursor.update(a))};function Dm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new nm(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Tc,l=c.Uc,k=c.yd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Ml("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Ol(a)});var t=f(),u=new sm(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;l&&p.addEventListener("versionchange",function(){l(f())});
p.addEventListener("close",function(){Ml("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ol(a),dbVersion:p.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Em(a,b,c){c=void 0===c?{}:c;return Dm(a,b,c)}
function Fm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Tc)&&c.addEventListener("blocked",function(){e()}),A(g,jm(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),Zl(f,a,"",-1);})}
;function Gm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.l=0}
Gm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return Em(a,b,c)};
Gm.prototype.delete=function(a){a=void 0===a?{}:a;return Fm(this.name,a)};
function Hm(a,b){return new V("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Im(a,b){if(!b)throw $l("openWithToken",Ol(a.name));return Jm(a)}
function Jm(a){function b(){var f,g,h,l,k,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",va(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:for(var z=h=u.h,C=a.options,P=[],U=w(Object.keys(C.Za)),Y=U.next();!Y.done;Y=U.next()){Y=Y.value;var La=C.Za[Y],Ca=void 0===La.wd?Number.MAX_VALUE:La.wd;!(z.g.version>=La.hb)||z.g.version>=Ca||z.g.objectStoreNames.contains(Y)||P.push(Y)}l=P;if(0===l.length){u.B(5);break}k=Object.keys(a.options.Za);m=h.objectStoreNames();
if(a.o<T("ytidb_reopen_db_retries",0))return a.o++,h.close(),Ll(new V("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.l<T("ytidb_remake_db_retries",1))){u.B(6);break}a.l++;return A(u,a.delete(),7);case 7:return Ll(new V("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new Wl(m,k);case 5:return u.return(h);case 2:n=wa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,Hm(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Zl(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Hm(a);if(a.g)return a.g;var d={Uc:function(f){f.close()},
closed:c,yd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Km=new Gm("YtIdbMeta",{Za:{databases:{hb:1}},upgrade:function(a,b){b(1)&&pm(a,"databases",{keyPath:"actualName"})}});
function Lm(a,b){var c;return B(function(d){if(1==d.g)return A(d,Im(Km,b),2);c=d.h;return d.return(om(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return km(f.g.put(a,void 0)).then(function(){})})}))})}
function Mm(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,Im(Km,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Nm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,Im(Km,b),2)):3!=e.g?(d=e.h,A(e,om(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return ym(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function Om(a){return Nm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Pm,Qm=new function(){}(new function(){});
function Rm(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Il();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Pl)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||kc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Lm(d,Qm),4);case 4:return A(e,Mm("yt-idb-test-do-not-use",Qm),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Sm(){if(void 0!==Pm)return Pm;Kl=!0;return Pm=Rm().then(function(a){Kl=!1;var b;if(null!=(b=Hl())&&b.g){var c;b={hasSucceededOnce:(null==(c=Il())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Hl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Tm(){return E("ytglobal.idbToken_")||void 0}
function Um(){var a=Tm();return a?Promise.resolve(a):Sm().then(function(b){(b=b?Qm:void 0)&&F("ytglobal.idbToken_",b);return b})}
;new Ag;function Vm(a){if(!Xk())throw a=new V("AUTH_INVALID",{dbName:a}),Ll(a),a;var b=Yk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Wm(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Um(),2);case 2:g=m.h;if(!g)throw h=$l("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ll(h),h;Nl(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Vm(a);va(m,3);return A(m,Lm(l,g),5);case 5:return A(m,Em(l.actualName,b,d),6);case 6:return m.return(m.h);case 3:return k=wa(m),va(m,7),A(m,Mm(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw k;}})}
function Xm(a,b,c){c=void 0===c?{}:c;return Wm(a,b,!1,c)}
function Ym(a,b,c){c=void 0===c?{}:c;return Wm(a,b,!0,c)}
function Zm(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Um(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Nl(a);d=Vm(a);return A(e,Fm(d.actualName,b),3)}return A(e,Mm(d.actualName,c),0)})}
function Mn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,Fm(d.actualName,b),2):A(e,Mm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Nn(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Um(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Nl("LogsDatabaseV2");return A(d,Om(b),3)}c=d.h;return A(d,Mn(c,a,b),0)})}
function On(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Um(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Nl(a);return A(d,Fm(a,b),3)}return A(d,Mm(a,c),0)})}
;function Pn(a,b){Gm.call(this,a,b);this.options=b;Nl(a)}
y(Pn,Gm);function Qn(a,b){var c;return function(){c||(c=new Pn(a,b));return c}}
Pn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Jb?Ym:Xm)(a,b,Object.assign({},c))};
Pn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Jb?On:Zm)(this.name,a)};
function Rn(a,b){return Qn(a,b)}
;var Sn={},Tn=Rn("ytGcfConfig",{Za:(Sn.coldConfigStore={hb:1},Sn.hotConfigStore={hb:1},Sn),Jb:!1,upgrade:function(a,b){b(1)&&(wm(pm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),wm(pm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Un(a){return Im(Tn(),a)}
function Vn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:X()},A(g,Un(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,rm(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Wn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},A(h,Un(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,rm(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Xn(a){var b,c;return B(function(d){return 1==d.g?A(d,Un(a),2):3!=d.g?(b=d.h,c=void 0,A(d,om(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return Bm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function Yn(a){var b,c;return B(function(d){return 1==d.g?A(d,Un(a),2):3!=d.g?(b=d.h,c=void 0,A(d,om(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return Bm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function Zn(){Ve.call(this);this.h=[];this.g=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],F("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Zn,Ve);Zn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Ve.prototype.sa.call(this)};function $n(){this.h=0;this.i=new Zn}
function ao(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!S("start_client_gcf")){g.B(0);break}c&&(a.l=c,F("yt.gcf.config.hotConfigGroup",a.l||null));a.g(b);d=Tm();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Yn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,Vn(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function bo(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!S("start_client_gcf"))return h.B(0);a.coldHashData=b;F("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Tm())?c?h.B(4):A(h,Xn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,Wn(c,b,g,d),0)})}
$n.prototype.g=function(a){this.hotHashData=a;F("yt.gcf.config.hotHashData",this.hotHashData||null)};function co(){return"INNERTUBE_API_KEY"in Fj&&"INNERTUBE_API_VERSION"in Fj}
function eo(){return{gd:R("INNERTUBE_API_KEY"),hd:R("INNERTUBE_API_VERSION"),Mb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sc:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),jd:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),uc:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),wc:R("INNERTUBE_CONTEXT_HL"),vc:R("INNERTUBE_CONTEXT_GL"),kd:R("INNERTUBE_HOST_OVERRIDE")||"",md:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ld:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function fo(a){var b={client:{hl:a.wc,gl:a.vc,clientName:a.sc,clientVersion:a.uc,configInfo:a.Mb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Pj();0<c.length&&(b.request={internalExperimentFlags:c});go(a,void 0,b);ho(void 0,b);io(void 0,b);jo(a,void 0,b);ko(void 0,b);S("start_client_gcf")&&lo(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&
(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(gk(R("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function go(a,b,c){a=a.sc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Xd(b,aj,96)||new aj;var d=Pk();d=Object.keys(kj).indexOf(d);d=-1===d?null:d;null!==d&&ee(c,3,d);J(b,aj,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Pk())}
function ho(a,b){var c=E("yt.embedded_player.embed_url");c&&(a?(b=Xd(a,gj,7)||new gj,K(b,4,c),J(a,gj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function io(a,b){var c;if(S("web_log_memory_total_kbytes")&&(null==(c=D.navigator)?0:c.deviceMemory)){var d;c=null==(d=D.navigator)?void 0:d.deviceMemory;a?Rd(a,95,zd(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function jo(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Xd(b,$i,62))?d:new $i;K(c,6,a.appInstallData);J(b,$i,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function ko(a,b){a:{var c=Vk();if(c){var d=Rk[c.type||"unknown"]||"CONN_UNKNOWN";c=Rk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?ee(a,61,Sk[d]):b&&(b.client.connectionType=d));S("web_log_effective_connection_type")&&(d=Vk(),d=null!=d&&d.effectiveType?Uk.hasOwnProperty(d.effectiveType)?Uk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?ee(a,94,Tk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function mo(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.oe||R("AUTHORIZATION");if(!b)if(a)b="Bearer "+E("gapi.auth.getToken")().ne;else{Ok.g||(Ok.g=new Ok);a={};if(c=Qe([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in Fj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Fj&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));S("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function lo(a,b){if(!$n.g){var c=new $n;$n.g=c}c=$n.g;var d=X()-c.h;if(0!==c.h&&d<T("send_config_hash_timer"))c=void 0;else{d=E("yt.gcf.config.coldConfigData");var e=E("yt.gcf.config.hotHashData"),f=E("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=X());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Xd(a,$i,62))?g:new $i;K(b,1,c);K(b,3,d);b.g(e);J(a,$i,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var no="undefined"!==typeof TextEncoder?new TextEncoder:null,oo=no?function(a){return no.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var po=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.rb;M.prototype.publish=M.prototype.ab;M.prototype.clear=M.prototype.clear;F("ytPubsub2Pubsub2Instance",po);F("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function qo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ce:a,Be:b},(b=E("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var ro=void 0,so=void 0;function to(){if(!so){var a=R("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=tb();a=b?b.createScriptURL(a):a;a=new xb(a,yb)}else a=null;so=a}else so=null}return so||void 0}
function uo(){var a=to();if(!ro&&void 0!==a){var b=Worker;a instanceof xb&&a.constructor===xb?a=a.g:(Ka(a),a="type_error:TrustedResourceUrl");ro=new b(a,void 0)}return ro}
;var vo=T("max_body_size_to_compress",5E5),wo=T("min_body_size_to_compress",500),xo=!0,yo=0,zo=0,Ao=T("compression_performance_threshold_lr",250),Bo=T("slow_compressions_before_abandon_count",4),Co=!1,Do=new Map,Eo=1,Fo=!0;function Go(){if("function"===typeof Worker&&to()&&!Co){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Do.get(c.key);d&&(Ho(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Do.delete(c.key))}},b=uo();
b&&(b.addEventListener("message",a),b.onerror=function(){Do.clear()},Co=!0)}}
function Io(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:X(),ticks:{},infos:{}};if(xo)try{try{var g=(new Blob(b.split(""))).size}catch(m){Nj(m),g=null}if(null!=g&&(g>vo||g<wo))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Fo||!S("initial_gzip_use_main_thread"))){Co||Go();var h=uo();if(h&&!e){Do.set(Eo,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Eo});Eo++;return}}var l=oo(b);b=(b=void 0,{});b.ed=!0;var k=new Vi(b);
k.push(l,!0);if(k.err)throw k.msg||vh[k.err];Ho(k.result,f,a,c,d)}}catch(m){Nj(m),d(a,c)}else d(a,c)}
function Ho(a,b,c,d,e){Fo=!1;var f=X();b.ticks.gelc=f;zo++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Ao&&(yo++,S("abandon_compression_after_N_slow_zips")?zo===T("compression_disable_point")&&yo>Bo&&(xo=!1):xo=!1);S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||qo("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Jo(a){a=Object.assign({},a);delete a.Authorization;var b=Qe();if(b){var c=new lg;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Fc(c.digest(),3)}return a}
;var Ko;function Lo(){Ko||(Ko=new Gl("yt.innertube"));return Ko}
function Mo(a,b,c,d){if(d)return null;d=Lo().get("nextId",!0)||1;var e=Lo().get("requests",!0)||{};e[d]={method:a,request:b,authState:Jo(c),requestTime:Math.round(X())};Lo().set("nextId",d+1,86400,!0);Lo().set("requests",e,86400,!0);return d}
function No(a){var b=Lo().get("requests",!0)||{};delete b[a];Lo().set("requests",b,86400,!0)}
function Oo(a){var b=Lo().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=Jo(mo(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),Po(a,d.method,e,{}));delete b[c]}}Lo().set("requests",b,86400,!0)}}
;function Qo(a){this.ub=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Sa=function(){};
this.now=Date.now;this.lb=!1;var b;this.Ic=null!=(b=a.Ic)?b:100;var c;this.Gc=null!=(c=a.Gc)?c:1;var d;this.Ec=null!=(d=a.Ec)?d:2592E6;var e;this.Dc=null!=(e=a.Dc)?e:12E4;var f;this.Fc=null!=(f=a.Fc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.zb=!!a.zb;var h;this.xb=null!=(h=a.xb)?h:.1;var l;this.Fb=null!=(l=a.Fb)?l:10;a.handleError&&(this.handleError=a.handleError);a.Sa&&(this.Sa=a.Sa);a.lb&&(this.lb=a.lb);a.ub&&(this.ub=a.ub);this.J=a.J;this.ha=a.ha;this.N=a.N;this.R=a.R;this.sendFn=a.sendFn;
this.Yb=a.Yb;this.Vb=a.Vb;Ro(this)&&(!this.J||this.J("networkless_logging"))&&So(this)}
function So(a){Ro(a)&&!a.lb&&(a.g=!0,a.zb&&Math.random()<=a.xb&&a.N.Vc(a.I),To(a),a.R.ca()&&a.qb(),a.R.Ka(a.Yb,a.qb.bind(a)),a.R.Ka(a.Vb,a.ic.bind(a)))}
r=Qo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Ro(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.R.ca()&&Uo(c,d)}).catch(function(e){Uo(c,d);
Vo(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Ro(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(1==l.g)return A(l,d.N.set(e,d.I).catch(function(k){Vo(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
Vo(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Ro(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ra(d.id,c.I):e=!0;c.R.Ma&&c.J&&c.J("vss_network_hint")&&c.R.Ma(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ra(d.id,c.I)}).catch(function(g){Vo(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.qb=function(){var a=this;if(!Ro(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.oc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,Uo(a,b),3):(a.ic(),c.return());a.h&&(a.h=0,a.qb());c.g=0})},this.Ic))};
r.ic=function(){this.ha.ba(this.h);this.h=0};
function Uo(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Ro(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.od(b.id,a.I),3);case 3:(c=d.h)||a.Sa(Error("The request cannot be found in the database."));case 2:if(Wo(a,b,a.Ec)){d.B(4);break}a.Sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Ra(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=Xo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Ra(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Xo(a,b){if(!Ro(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=Yo(f);(h=Zo(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Fb)){m.B(2);break}if(!a.R.Ib){m.B(3);break}return A(m,a.R.Ib(),3);case 3:if(a.R.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){m.B(6);
break}return A(m,a.N.Zb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Fb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.B(8);break}return b.sendCount<a.Gc?A(m,a.N.Zb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Ra(b.id,a.I),8);case 12:a.ha.qa(function(){a.R.ca()&&a.qb()},a.Fc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Ra(b.id,a.I),2);a.R.Ma&&a.J&&a.J("vss_network_hint")&&a.R.Ma(!0);d(e,f);h.g=0})};
return b}
function Wo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function To(a){if(!Ro(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.oc("QUEUED",a.I).then(function(b){b&&!Wo(a,b,a.Dc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Zb(b.id,a.I),2);To(a);c.g=0})}):a.R.ca()&&a.qb()})}
function Vo(a,b){a.Kc&&!a.R.ca()?a.Kc(b):a.handleError(b)}
function Ro(a){return!!a.I||a.ub}
function Yo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Zo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var $o;
function ap(){if($o)return $o();var a={};$o=Rn("LogsDatabaseV2",{Za:(a.LogsRequestsStore={hb:2},a),Jb:!1,upgrade:function(b,c,d){c(2)&&pm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),wm(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return $o()}
;function bp(a){return Im(ap(),a)}
function cp(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,bp(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,rm(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=X();dp(c);return g.return(f)})}
function ep(a,b){var c,d,e,f,g,h,l;return B(function(k){if(1==k.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(k,bp(b),2);if(3!=k.g)return d=k.h,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),l=void 0,A(k,om(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return Bm(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(l=n.ja(),"NEW"===a&&(l.status="QUEUED",
n.update(l)))})}),3);
c.ticks.tc=X();dp(c);return k.return(l)})}
function fp(a,b){var c;return B(function(d){if(1==d.g)return A(d,bp(b),2);c=d.h;return d.return(om(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",km(f.g.put(g,void 0)).then(function(){return g})})}))})}
function gp(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,bp(b),2);e=f.h;return f.return(om(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),km(h.g.put(l,void 0)).then(function(){return l})):dm.resolve(void 0)})}))})}
function hp(a,b){var c;return B(function(d){if(1==d.g)return A(d,bp(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function ip(a){var b,c;return B(function(d){if(1==d.g)return A(d,bp(a),2);b=d.h;c=X()-2592E6;return A(d,om(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return ym(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function jp(){B(function(a){return A(a,Nn(),0)})}
function dp(a){S("nwl_csi_killswitch")||qo("networkless_performance",a,{sampleRate:1})}
;var kp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495};var lp={},mp=Rn("ServiceWorkerLogsDatabase",{Za:(lp.SWHealthLog={hb:1},lp),Jb:!0,upgrade:function(a,b){b(1)&&wm(pm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function np(a){return Im(mp(),a)}
function op(a){var b,c;B(function(d){if(1==d.g)return A(d,np(a),2);b=d.h;c=X()-2592E6;return A(d,om(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return ym(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function pp(a){var b;return B(function(c){if(1==c.g)return A(c,np(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var qp={},rp=0;function sp(a){var b=new Image,c=""+rp++;qp[c]=b;b.onload=b.onerror=function(){delete qp[c]};
b.src=a}
;function tp(){this.g=new Map;this.h=!1}
function up(){if(!tp.g){var a=E("yt.networkRequestMonitor.instance")||new tp;F("yt.networkRequestMonitor.instance",a);tp.g=a}return tp.g}
tp.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
tp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
tp.prototype.removeParams=function(a){return a.split("?")[0]};
tp.prototype.removeParams=tp.prototype.removeParams;tp.prototype.isEndpointCFR=tp.prototype.isEndpointCFR;tp.prototype.requestComplete=tp.prototype.requestComplete;tp.getInstance=up;var vp;function wp(){vp||(vp=new Gl("yt.offline"));return vp}
function xp(a){if(S("offline_error_handling")){var b=wp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);wp().set("errors",b,2592E3,!0)}}
;function Z(){vf.call(this);var a=this;this.i=!1;this.h=Bf();this.h.Ka("networkstatus-online",function(){if(a.i&&S("offline_error_handling")){var b=wp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Wk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Mj(d)}wp().set("errors",{},2592E3,!0)}}})}
y(Z,vf);function yp(){if(!Z.g){var a=E("yt.networkStatusManager.instance")||new Z;F("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Ma=function(a){this.h.h=a};
r.cd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Yc=function(){this.i=!0};
r.Ka=function(a,b){return this.h.Ka(a,b)};
r.Ib=function(a){a=zf(this.h,a);a.then(function(b){S("use_cfr_monitor")&&up().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ib;Z.prototype.listen=Z.prototype.Ka;Z.prototype.enableErrorFlushing=Z.prototype.Yc;Z.prototype.getWindowStatus=Z.prototype.cd;Z.prototype.networkStatusHint=Z.prototype.Ma;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=yp;function zp(a){a=void 0===a?{}:a;vf.call(this);var b=this;this.h=this.u=0;this.i=yp();var c=E("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Hb?(this.Hb=a.Hb,c("networkstatus-online",function(){Ap(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ap(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){wf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){wf(b,"publicytnetworkstatus-offline")})))}
y(zp,vf);zp.prototype.ca=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
zp.prototype.Ma=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
zp.prototype.Ib=function(a){var b=this,c;return B(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return S("skip_network_check_if_cfr")&&up().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ma((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function Ap(a,b){a.Hb?a.h?(Cf.ba(a.u),a.u=Cf.qa(function(){a.o!==b&&(wf(a,b),a.o=b,a.h=X())},a.Hb-(X()-a.h))):(wf(a,b),a.o=b,a.h=X()):wf(a,b)}
;var Bp;function Cp(){var a=Qo.call;Bp||(Bp=new zp({se:!0,re:!0}));a.call(Qo,this,{N:{Vc:ip,Ra:hp,oc:ep,od:fp,Zb:gp,set:cp},R:Bp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Nj(new Wk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Mj(b)},
Sa:Nj,sendFn:Dp,now:X,Kc:xp,ha:Fl(),Yb:"publicytnetworkstatus-online",Vb:"publicytnetworkstatus-offline",zb:!0,xb:.1,Fb:T("potential_esf_error_limit",10),J:S,lb:!(Xk()&&"www.youtube-nocookie.com"!==$b(document.location.toString()))});this.i=new Ag;S("networkless_immediately_drop_all_requests")&&jp();On("LogsDatabaseV2")}
y(Cp,Qo);function Ep(){var a=E("yt.networklessRequestController.instance");a||(a=new Cp,F("yt.networklessRequestController.instance",a),S("networkless_logging")&&Um().then(function(b){a.I=b;So(a);a.i.resolve();a.zb&&Math.random()<=a.xb&&a.I&&op(a.I);S("networkless_immediately_drop_sw_health_store")&&Fp(a)}));
return a}
Cp.prototype.writeThenSend=function(a,b){b||(b={});Xk()||(this.g=!1);Qo.prototype.writeThenSend.call(this,a,b)};
Cp.prototype.sendThenWrite=function(a,b,c){b||(b={});Xk()||(this.g=!1);Qo.prototype.sendThenWrite.call(this,a,b,c)};
Cp.prototype.sendAndWrite=function(a,b){b||(b={});Xk()||(this.g=!1);Qo.prototype.sendAndWrite.call(this,a,b)};
Cp.prototype.awaitInitialization=function(){return this.i.promise};
function Fp(a){var b;B(function(c){if(!a.I)throw b=$l("clearSWHealthLogsDb"),b;return c.return(pp(a.I).catch(function(d){a.handleError(d)}))})}
function Dp(a,b,c,d){d=void 0===d?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Gp(a,b);if(S("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)wk(a,void 0,"POST",f);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||
h)wk(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new $a({url:a});if(l.i&&l.h||l.l){var k=Zb(a.match(Yb)[5]||null);var m=!(!k||!k.endsWith("/aclk")||"1"!==ec(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||sp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Io(a,b.postBody,b,tk,d)):Io(a,JSON.stringify(b.postParams),
b,Bk,d):tk(a,b)}
function Gp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){up().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){up().requestComplete(a,!0);d(e,f)}}
;var Hp=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};F("ytNetworklessLoggingInitializationOptions",Hp);function Ip(a){var b=this;this.config_=null;a?this.config_=a:co()&&(this.config_=eo());$k(function(){Oo(b)},5E3)}
Ip.prototype.isReady=function(){!this.config_&&co()&&(this.config_=eo());return!!this.config_};
function Po(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Mo(b,c,k,l)),u)){var z=g.onSuccess,C=g.onFetchSuccess;g.onSuccess=function(Y,La){No(u);z(Y,La)};
c.onFetchSuccess=function(Y,La){No(u);C(Y,La)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ep().writeThenSend(p,g):Ep().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var U=g.postBody;"string"!==typeof U&&(U=JSON.stringify(g.postBody));Io(p,U,g,tk,P)}else Io(p,JSON.stringify(g.postParams),g,Bk,P)}else S("web_all_payloads_via_jspb")?tk(p,g):Bk(p,g)}catch(Y){if("InvalidAccessError"==Y.name)u&&(No(u),u=0),Nj(Error("An extension is blocking network request."));else throw Y;}u&&$k(function(){Oo(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Nj(new Wk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Wk("innertube xhrclient not ready",b,c,d);Mj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.kd)&&(h=f);var l=a.config_.md||!1,k=mo(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.hd+"/"+b,n={alt:"json"},q=a.config_.ld&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.gd);var p=hk(""+h+m,n||{},!0);E("ytNetworklessLoggingInitializationOptions")&&
Hp.isNwlInitialized?Sm().then(function(t){e(t)}):e(!1)}
;function Jp(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Kp=D.ytPubsubPubsubInstance||new M,Lp=D.ytPubsubPubsubSubscribedKeys||{},Mp=D.ytPubsubPubsubTopicToKeys||{},Np=D.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.rb;M.prototype.publish=M.prototype.ab;M.prototype.clear=M.prototype.clear;F("ytPubsubPubsubInstance",Kp);F("ytPubsubPubsubTopicToKeys",Mp);F("ytPubsubPubsubIsSynchronous",Np);F("ytPubsubPubsubSubscribedKeys",Lp);var Op=Symbol("injectionDeps");function Pp(){this.key=$n}
function Qp(){this.h=new Map;this.g=new Map}
Qp.prototype.resolve=function(a){return a instanceof Pp?Rp(this,a.key,[],!0):Rp(this,a,[])};
function Rp(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Cd)var e=d.Cd;else if(d.Bd)e=d[Op]?Sp(a,d[Op],c):[],e=d.Bd.apply(d,x(e));else if(d.Ad){e=d.Ad;var f=e[Op]?Sp(a,e[Op],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ae||a.g.set(b,e);return e}
function Sp(a,b,c){return b?b.map(function(d){return d instanceof Pp?Rp(a,d.key,c,!0):Rp(a,d,c)}):[]}
;var Tp;function Up(){Tp||(Tp=new Qp);return Tp}
;var Vp=window;function Wp(){var a,b;return"h5vcc"in Vp&&(null==(a=Vp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Vp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Vp&&Vp.performance.mark&&Vp.performance.measure?2:0}
function Xp(a){switch(Wp()){case 1:Vp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Vp.performance.mark(a+"-start");break;case 0:break;default:ve()}}
function Yp(a){switch(Wp()){case 1:Vp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Vp.performance.mark(c);Vp.performance.measure(a,b,c);break;case 0:break;default:ve()}}
;var Zp=S("web_enable_lifecycle_monitoring")&&0!==Wp(),$p=S("web_enable_lifecycle_monitoring");function aq(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Fl():d;this.l=c;this.h=d;this.i=new Ag;this.g=a;for(a={Ja:0};a.Ja<this.g.length;a={Eb:void 0,Ja:a.Ja},a.Ja++)a.Eb=this.g[a.Ja],c=function(e){return function(){e.Eb.Ob();b.g[e.Ja].Gb=!0;b.g.every(function(f){return!0===f.Gb})&&b.i.resolve()}}(a),d=this.h.Ha(c,bq(this,a.Eb)),this.g[a.Ja]=Object.assign({},a.Eb,{Ob:c,
jobId:d})}
function cq(a){var b=Array.from(a.g.keys()).sort(function(d,e){return bq(a,a.g[e])-bq(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Gb||(a.h.ba(c.jobId),a.h.Ha(c.Ob,10))}
aq.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Gb||this.h.ba(b.jobId),b.Gb=!0;this.i.resolve()};
function bq(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function dq(a){this.state=a;this.i=[];this.o=void 0;this.G={};Zp&&Xp(this.state)}
dq.prototype.install=function(a){this.i.push(a);return this};
function eq(a){Zp&&Yp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Ea}):d.from===a.state&&"none"===d.Ea});
if(b){a.h&&(cq(a.h),a.h=void 0);$p&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Zp&&Xp(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(fq(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function fq(a,b){var c=b.filter(function(e){return 10===gq(a,e)}),d=b.filter(function(e){return 10!==gq(a,e)});
return a.G.ze?function(){var e=Ga.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ga.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
dq.prototype.ya=function(a){for(var b=Ga.apply(1,arguments),c=Fl(),d=w(a),e=d.next(),f={};!e.done;f={mb:void 0},e=d.next())f.mb=e.value,c.gb(function(g){return function(){hq(g.mb.name);g.mb.ib.apply(g.mb,x(b));iq(g.mb.name)}}(f))};
dq.prototype.oa=function(a){var b=Ga.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=Fl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Va=e.value;f.tb=void 0;g=function(l){return function(){hq(l.Va.name);var k=l.Va.ib.apply(l.Va,x(b));"function"===typeof(null==k?void 0:k.then)?l.tb=k.then(function(){iq(l.Va.name)}):iq(l.Va.name)}}(f);
c.gb(g);return f.tb?A(h,f.tb,3):h.B(3)}f={Va:void 0,tb:void 0};e=d.next();return h.B(2)})};
dq.prototype.u=function(a){var b=Ga.apply(1,arguments),c=this,d=a.map(function(e){return{Ob:function(){hq(e.name);e.ib.apply(e,x(b));iq(e.name)},
priority:gq(c,e)}});
d.length&&(this.h=new aq(d))};
function gq(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function hq(a){Zp&&a&&Xp(a)}
function iq(a){Zp&&a&&Yp(a)}
da.Object.defineProperties(dq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function jq(a){dq.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ea:"application_navigating",action:this.K},{from:"application_navigating",Ea:"none",action:this.O},{from:"application_navigating",Ea:"application_navigating",action:function(){}},
{from:"none",Ea:"none",action:function(){}}]}
var kq;y(jq,dq);jq.prototype.K=function(a,b){var c=this;this.g=$k(function(){"application_navigating"===c.l&&eq(c)},5E3);
a(null==b?void 0:b.event)};
jq.prototype.O=function(a,b){this.g&&(Cf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function lq(){kq||(kq=new jq);return kq}
;var mq=[];F("yt.logging.transport.getScrapedGelPayloads",function(){return mq});function nq(){this.store={};this.g={}}
nq.prototype.storePayload=function(a,b){a=oq(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
nq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=pq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
nq.prototype.extractMatchingEntries=function(a){a=pq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
nq.prototype.getSequenceCount=function(a){a=pq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function pq(a,b){var c=oq(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&oq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(qq(b.auth,g[0])){var h=b.isJspb;qq(void 0===h?"undefined":h?"true":"false",g[1])&&qq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),qq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function qq(a,b){return void 0===a||"undefined"===a?!0:a===b}
nq.prototype.getSequenceCount=nq.prototype.getSequenceCount;nq.prototype.extractMatchingEntries=nq.prototype.extractMatchingEntries;nq.prototype.smartExtractMatchingEntries=nq.prototype.smartExtractMatchingEntries;nq.prototype.storePayload=nq.prototype.storePayload;function oq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var rq=T("initial_gel_batch_timeout",2E3),sq=T("gel_queue_timeout_max_ms",6E4),tq=Math.pow(2,16)-1,uq=T("gel_min_batch_size",5),vq=void 0;function wq(){this.l=this.g=this.h=0;this.i=!1}
var xq=new wq,yq=new wq,zq=new wq,Aq=new wq,Bq,Cq=!0,Dq=1,Eq=new Map,Fq=D.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",Fq);var Gq=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};F("ytLoggingTransportTokensToJspbCttTargetIds_",Gq);var Hq={};function Iq(){var a=E("yt.logging.ims");a||(a=new nq,F("yt.logging.ims",a));return a}
function Jq(a,b){if("log_event"===a.endpoint){Kq(a);var c=Lq(a),d=Mq(a.payload)||"",e=Nq(d),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Oq(e.tier);if(400===f){Pq(a,b);return}}Hq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Iq().storePayload(e,a.payload);Qq(b,c,!1,e,Rq(d))}}
function Sq(a,b,c){if("log_event"===b.endpoint){Kq(void 0,b);var d=Lq(b,!0),e=Nq(a),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Oq(e.tier);if(400===f){Tq(a,b,c);return}}Hq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Iq().storePayload(e,b.payload.toJSON());Qq(c,d,!0,e,Rq(a))}}
function Qq(a,b,c,d,e){function f(){Uq({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(vq=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=X(),h=Vq(c,d.tier),l=h.l;e&&(h.i=!0);e=0;d&&(e=Iq().getSequenceCount(d));1E3<=e?f():e>=a?Bq||(Bq=Wq(function(){f();Bq=void 0},0)):10<=g-l&&(Xq(c,d.tier),h.l=g)}
function Pq(a,b){if("log_event"===a.endpoint){Kq(a);var c=Lq(a),d=new Map;d.set(c,[a.payload]);var e=Mq(a.payload)||"";b&&(vq=new b);return new Bg(function(f,g){vq&&vq.isReady()?Yq(d,vq,f,g,{bypassNetworkless:!0},!0,Rq(e)):f()})}}
function Tq(a,b,c){if("log_event"===b.endpoint){Kq(void 0,b);var d=Lq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(vq=new c);return new Bg(function(f){vq&&vq.isReady()?Zq(e,vq,f,{bypassNetworkless:!0},!0,Rq(a)):f()})}}
function Lq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Aj;c.videoId?Ud(d,1,ce,Ad(c.videoId)):c.playlistId&&Ud(d,2,ce,Ad(c.playlistId));Gq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Fq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Uq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Bg(function(e,f){var g=Vq(c,d),h=g.i;g.i=!1;$q(g.h);$q(g.g);g.g=0;vq&&vq.isReady()?void 0===d&&S("enable_web_tiered_gel")?ar(e,f,a,b,c,300,h):ar(e,f,a,b,c,d,h):(Xq(c,d),e())})}
function ar(a,b,c,d,e,f,g){var h=vq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=S("enable_web_tiered_gel")?Iq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Iq().extractMatchingEntries(n),l.set(d,b),Zq(l,h,a,c,!1,g)):(l=S("enable_web_tiered_gel")?Iq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Iq().extractMatchingEntries(n),k.set(d,l),Yq(k,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Hq));for(k=b.next();!k.done;k=b.next())k=k.value,f=S("enable_web_tiered_gel")?Iq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Iq().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&l.set(k,f),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Hq[k];Zq(l,h,a,c,!1,g)}else{l=w(Object.keys(Hq));for(m=l.next();!m.done;m=l.next())m=m.value,n=S("enable_web_tiered_gel")?Iq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Iq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&k.set(m,n),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Hq[m];Yq(k,h,a,b,c,!1,g)}}
function Xq(a,b){function c(){Uq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Vq(a,b),e=d===Aq||d===zq?5E3:sq;S("web_gel_timeout_cap")&&!d.g&&(e=Wq(function(){c()},e),d.g=e);
$q(d.h);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Cq&&(e=rq);e=Wq(function(){0<T("gel_min_batch_size")?Iq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=uq&&c():c()},e);
d.h=e}
function Yq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(X()),l=a.size,k=br(g);a=w(a);var m=a.next();for(g={};!m.done;g={Ub:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Xb:void 0,Wb:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=pb({context:fo(b.config_||eo())});if(!Na(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Fq[m])&&cr(g.batchRequest,m,n);delete Fq[m];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
m;dr(g.batchRequest,h,g.dangerousLogToVisitorSession);er(e);g.Xb=function(q){S("start_client_gcf")&&Cf.qa(function(){return B(function(p){return A(p,fr(q),0)})});
l--;l||c()};
g.Ub=0;g.Wb=function(q){return function(){q.Ub++;if(e.bypassNetworkless&&1===q.Ub)try{Po(b,k,q.batchRequest,gr({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Xb,q.Wb,f)),Cq=!1}catch(p){Mj(p),d()}l--;l||c()}}(g);
try{Po(b,k,g.batchRequest,gr(e,g.dangerousLogToVisitorSession,g.Xb,g.Wb,f)),Cq=!1}catch(q){Mj(q),d()}}}
function Zq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(X()),h={value:a.size},l=new Map([].concat(x(a)));l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value).next().value,n=a.get(m);k=new Bj;var q=b.config_||eo(),p=new jj,t=new cj;K(t,1,q.wc);K(t,2,q.vc);ee(t,16,q.jd);K(t,17,q.uc);if(q.Mb){var u=q.Mb,z=new $i;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,$i,62,z)}if((u=D.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);Rd(t,65,u)}u=R("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=Pj();if(0<u.length){z=new fj;for(var C=0;C<u.length;C++){var P=new dj;K(P,1,u[C].key);Ud(P,2,ej,Ad(u[C].value));$d(z,15,dj,P)}J(p,fj,5,z)}go(q,t);ho(p);io(t);jo(q,t);ko(t);S("start_client_gcf")&&lo(t);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(q=new ij,K(q,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&
(u=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=Xd(p,ij,3)||new ij,q=p,u=K(z,18,u),J(q,ij,3,u));q=t;u=w(Object.entries(gk(R("DEVICE",""))));for(z=u.next();!z.done;z=u.next())C=w(z.value),z=C.next().value,C=C.next().value,"cbrand"===z?K(q,12,C):"cmodel"===z?K(q,13,C):"cbr"===z?K(q,87,C):"cbrver"===z?K(q,88,C):"cos"===z?K(q,18,C):"cosver"===z?K(q,19,C):"cplatform"===z&&ee(q,42,Qk(C));J(p,cj,1,t);J(k,jj,1,p);if(t=Gq[m])a:{if(be(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(k,Aj,
4,t);t=Xd(k,jj,1)||new jj;q=Xd(t,ij,3)||new ij;u=new hj;K(u,2,m);ee(u,1,p);$d(q,12,hj,u);J(t,ij,3,q)}delete Gq[m];m="visitorOnlyApprovedKey"===m;hr()||Rd(k,2,zd(g));!m&&(p=R("EVENT_ID"))&&(t=ir(),q=new zj,K(q,1,p),Rd(q,2,zd(t)),J(k,zj,5,q));er(d);if(S("jspb_serialize_with_worker")&&(p=uo())&&d.writeThenSend){Eq.set(Dq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:k.toJSON(),
clientEvents:n,key:Dq});Dq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new xj(n[t]))}catch(U){Mj(new Wk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())$d(k,3,xj,p.value);n={startTime:X(),ticks:{},infos:{}};k=ge(k);n.ticks.geljspc=X();S("log_jspb_serialize_latency")&&qo("gel_jspb_serialize",n,{sampleRate:.1});jr(k,b,c,d,e,f,m,h)}}
function jr(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=br(f);d=gr(d,g,function(l){S("start_client_gcf")&&Cf.qa(function(){return B(function(k){return A(k,fr(l),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Po(b,f,"",d);Cq=!1}
function er(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function gr(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,qe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};hr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function dr(a,b,c){hr()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=ir(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ir(){var a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*tq/2));a++;a>tq&&(a=1);Gj("BATCH_CLIENT_COUNTER",a);return a}
function cr(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Kq(a,b){if(!E("yt.logging.transport.enableScrapingForTest")){var c=Oj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))mq=[],F("yt.logging.transport.enableScrapingForTest",!0),F("yt.logging.transport.scrapedPayloadsForTesting",mq),F("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),F("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
F("yt.logging.transport.scrapeClientEvent",!0);else return}c=E("yt.logging.transport.scrapedPayloadsForTesting");var d=E("yt.logging.transport.payloadToScrape");b&&(b=E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=E("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}F("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function hr(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Wq(a,b){return!1===S("embeds_transport_use_scheduler")?Yj(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?$k(function(){if("none"===lq().l)a();else{var c={};lq().install((c.none={ib:a},c))}},b):$k(a,b)}
function $q(a){S("transport_use_scheduler")?Cf.ba(a):window.clearTimeout(a)}
function fr(a){var b,c,d,e,f,g,h,l,k,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Zi.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Yi.name]:void 0;h=q;k=null==(l=d)?void 0:l.coldHashData;return(m=Up().resolve(new Pp))?g?e?A(n,ao(m,g,e),2):A(n,ao(m,g),2):n.B(2):n.return()}return k?h?A(n,bo(m,k,h),0):A(n,bo(m,k),0):n.B(0)})}
function Vq(a,b){b=void 0===b?200:b;return a?300===b?Aq:yq:300===b?zq:xq}
function Nq(a){if(S("enable_web_tiered_gel")){a=kp[a||""];var b,c;if(null==Up().resolve(new Pp))var d=void 0;else{var e=null!=(d=E("yt.gcf.config.hotConfigGroup"))?d:R("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Mq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,kp[b])return b}
function Oq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Rq(a){return"gelDebuggingEvent"===a}
function br(a){return(void 0===a?0:a)&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var kr=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",kr);
function lr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Jp();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:mr(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete kr[d.sequenceGroup]);(d.sendIsolatedPayload?Pq:Jq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function nr(a){Uq(void 0,void 0,void 0===a?!1:a)}
function mr(a){kr[a]=a in kr?kr[a]+1:0;return kr[a]}
;var or=[];function pr(a,b,c){c=void 0===c?{}:c;var d=Ip;R("ytLoggingEventsDefaultDisabled",!1)&&Ip===Ip&&(d=null);S("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Jp(),c.timestamp=X()),or.push({Ac:a,payload:b,options:c})):lr(a,b,d,c)}
;var qr=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",qr);function rr(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;R("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:Ip;c=void 0===c?{}:c;var e=Math.round(c.timestamp||X());Rd(b,1,zd(e<Number.MAX_SAFE_INTEGER?e:0));e=new wj;if(c.lact)Rd(e,1,zd(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)Rd(e,1,zd(-1));else{var f=Jp();Rd(e,1,zd(isFinite(f)?f:-1))}if(c.sequenceGroup&&!S("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=mr(f),h=new vj;Rd(h,2,zd(g));K(h,1,f);J(e,vj,3,h);c.endOfSequence&&delete qr[c.sequenceGroup]}J(b,
wj,33,e);(c.sendIsolatedPayload?Tq:Sq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var sr=new Set,tr=0,ur=0,vr=0,wr=[],xr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function yr(a){try{sr.add(a.message)}catch(b){}tr++}
function zr(){for(var a=w(xr),b=a.next();!b.done;b=a.next()){var c=Mb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Ar(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}tk(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Br(){var a;return B(function(b){return(a=Vf())?b.return(a.then(function(c){c=ge(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Fc(d,3)})):b.return(Promise.resolve(null))})}
;var Cr={};function Dr(a){return Cr[a]||(Cr[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Er={},Fr=[],Sg=new M,Gr={};function Hr(){for(var a=w(Fr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Ir(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Dr(b)]:a.getAttribute("data-"+b):null;return c}
function Jr(a){Sg.ab.apply(Sg,arguments)}
;function Kr(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Lr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Mr(a,b,c){Nr||(Nr={},Or=new Set,Xj(window,"message",function(d){a:if(Or.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Nr[e.id];f&&d.origin===f.Sc&&(d=f.Dd,d.G=!0,d.G&&(db(d.u,d.sendMessage,d),d.u.length=0),d.fc(e))}}));
a=String(Lr(a,"host"));Nr[c]={Dd:b,Sc:a};Or.add(a)}
var Nr=null,Or=null;var Pr=window;
function Qr(a,b,c){this.o=this.g=this.h=null;this.i=0;this.G=!1;this.u=[];this.l=null;this.O={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.K=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?ac(a.src):"https://www.youtube.com"),this.h=new Kr(b),c||(b=Rr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Er[this.g.id]=this,window.postMessage){this.l=
new M;Sr(this);b=Lr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Gr)Gr.hasOwnProperty(e)&&Tr(this,e)}}
r=Qr.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.fc=function(a){Ur(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Vr(this,a);return this};
function Tr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.K===b[0]&&Vr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(Er[this.g.id]=null);Re(this.l);if(this.o){var a=this.o,b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Nr&&(Nr[this.id]=null);this.h=null;a=this.g;for(var d in nb)nb[d][0]==a&&Vj(d);this.o=this.g=null};
r.kc=function(){return{}};
function Wr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.u.push(b)}
function Ur(a,b,c){a.l.Aa||(c={target:a,data:c},a.l.ab(b,c),Jr(a.K+"."+b,c))}
function Rr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Lr(a.h,"title"));(b=Lr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Lr(a.h,"height"))&&
c.setAttribute("height",b.toString());Pr.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.kc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(l){var k=ec(window.location.href,l);null!==k&&(g[l]=k)});
var h=""+Lr(a.h,"host")+("/embed/"+Lr(a.h,"videoId"))+"?"+cc(g);Pr.yt_embedsEnableUaChProbe?Br().then(function(l){var k=new URL(h),m=Number(k.searchParams.get("reloads"));isNaN(m)&&(m=0);k.searchParams.set("reloads",(m+1).toString());l&&k.searchParams.set("uach",l);k.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());l=se(k.href).toString();ye(c,te(l));c.sandbox.add("allow-presentation","allow-top-navigation");return l}):Pr.yt_embedsEnableIframeSrcWithIntent?(ye(c,te(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Bc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Sr(a){Mr(a.h,a,a.id);a.i=Zj(a.Bc.bind(a));Xj(a.g,"load",function(){window.clearInterval(a.i);a.i=Zj(a.Bc.bind(a))})}
function Vr(a,b){a.O[b]||(a.O[b]=!0,Wr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[ac(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(xc){if(xc.name&&"SyntaxError"===xc.name){if(!(xc.message&&0<xc.message.indexOf("target origin ''"))){var e=void 0,f=xc;e=void 0===e?{}:e;e.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(S("console_log_js_exceptions")){var l=f,k=[];k.push("Name: "+l.name);k.push("Message: "+l.message);l.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(l.params));l.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(l.args));k.push("File name: "+l.fileName);k.push("Stacktrace: "+l.stack);window.console.log(k.join("\n"),l)}if(!(5<=tr)){var m=void 0,n=void 0,q=f,p=e,t=le(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",C=t.stack||q.h||"Not available";if(C.startsWith(z+": "+u)){var P=C.split("\n");P.shift();C=P.join("\n")}var U=t.lineNumber||"Not available",Y=t.fileName||"Not available",La=C,Ca=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ma=0;Ma<q.args.length&&!(Ca=Lk(q.args[Ma],"params."+Ma,p,Ca),500<=Ca);Ma++);else if(q.hasOwnProperty("params")&&q.params){var ja=q.params;if("object"===typeof q.params)for(n in ja){if(ja[n]){var ra="params."+n,sa=Nk(ja[n]);p[ra]=sa;Ca+=ra.length+
sa.length;if(500<Ca)break}}else p.params=Nk(ja)}if(wr.length)for(var ia=0;ia<wr.length&&!(Ca=Lk(wr[ia],"params.context."+ia,p,Ca),500<=Ca);ia++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:U,fileName:Y,stack:La,params:p,sampleWeight:1},$m=Number(q.columnNumber);isNaN($m)||(W.lineNumber=W.lineNumber+":"+$m);if("IGNORED"===q.level)m=0;else a:{for(var an=Hk(),bn=w(an.Ca),Ph=bn.next();!Ph.done;Ph=bn.next()){var cn=Ph.value;if(W.message&&
W.message.match(cn.ue)){m=cn.weight;break a}}for(var dn=w(an.za),Qh=dn.next();!Qh.done;Qh=dn.next()){var en=Qh.value;if(en.ib(W)){m=en.weight;break a}}m=1}W.sampleWeight=m;for(var fn=w(Ck),Rh=fn.next();!Rh.done;Rh=fn.next()){var Sh=Rh.value;if(Sh.Db[W.name])for(var gn=w(Sh.Db[W.name]),Th=gn.next();!Th.done;Th=gn.next()){var hn=Th.value,Se=W.message.match(hn.regexp);if(Se){W.params["params.error.original"]=Se[0];for(var Uh=hn.groups,jn={},yc=0;yc<Uh.length;yc++)jn[Uh[yc]]=Se[yc+1],W.params["params.error."+
Uh[yc]]=Se[yc+1];W.message=Sh.Sb(jn);break}}}W.params||(W.params={});var kn=Hk();W.params["params.errorServiceSignature"]="msg="+kn.Ca.length+"&cb="+kn.za.length;W.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));wb("sample").constructor!==ub&&(W.params["params.fconst"]="true");var qd=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(qd);if(0!==qd.sampleWeight&&
!sr.has(qd.message))if(h&&S("web_enable_error_204")){var ln=qd;Ar(void 0===g?"ERROR":g,ln);yr(ln)}else{var Vh=void 0,Wh=void 0,mn=void 0,nn=void 0,Xh=void 0,O=qd,Tb=g;Tb=void 0===Tb?"ERROR":Tb;if("ERROR"===Tb){Ik.ab("handleError",O);if(S("record_app_crashed_web")&&0===vr&&1===O.sampleWeight)if(vr++,S("errors_via_jspb")){var bs=new uj;Xh=ee(bs,1,1);if(!S("report_client_error_with_app_crash_ks")){var cs=new tj,ds=new sj,es=new rj,fs=new qj;var gs=K(fs,1,O.message);var hs=J(es,qj,3,gs);nn=J(ds,rj,5,
hs);mn=J(cs,sj,9,nn);J(Xh,tj,4,mn)}var on=S("jspb_sparse_encoded_pivot")?new xj([{}]):new xj;Yd(on,uj,20,yj,Xh);rr("appCrashed",on)}else{var pn={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(pn.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});pr("appCrashed",pn)}ur++}else"WARNING"===Tb&&Ik.ab("handleWarning",O);if(S("kevlar_gel_error_routing"))a:{var rd=Tb;if(S("errors_via_jspb")){if(zr())Wh=void 0;else{var zc=new nj;K(zc,1,O.stack);O.fileName&&
K(zc,4,O.fileName);var hb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==hb.length&&(1!==hb.length||isNaN(Number(hb[0]))?2!==hb.length||isNaN(Number(hb[0]))||isNaN(Number(hb[1]))||(de(zc,2,Number(hb[0])),de(zc,3,Number(hb[1]))):de(zc,2,Number(hb[0])));var Ub=new qj;K(Ub,1,O.message);K(Ub,3,O.name);de(Ub,6,O.sampleWeight);"ERROR"===rd?ee(Ub,2,2):"WARNING"===rd?ee(Ub,2,1):ee(Ub,2,0);var Yh=new oj;Rd(Yh,1,ud(!0));Yd(Yh,nj,3,pj,zc);var Vb=new mj;K(Vb,3,window.location.href);for(var qn=
R("FEXP_EXPERIMENTS",[]),Zh=0;Zh<qn.length;Zh++){var $h=void 0,ai=Vb.s,bi=qn[Zh],sd=Zc(ai);md(sd);var rn=sd&2,Fa=Qd(ai,sd,5);Array.isArray(Fa)||(Fa=kd);var sn=!!(sd&32),ib=Wc(Fa);0===ib&&sn&&!rn?(ib|=33,H(Fa,ib)):ib&1||(ib|=1,H(Fa,ib));if(rn)ib&2||Uc(Fa,34),Object.freeze(Fa);else if(2&ib||2048&ib){Fa=Sc(Fa);var tn=1;sn&&(tn|=32);H(Fa,tn);Sd(ai,sd,5,Fa)}$h=Fa;var un=Wc($h);bi=xd(bi,!!(4&un)&&!!(4096&un));$h.push(bi)}var ci=Hj();if(!Ij()&&ci)for(var vn=w(Object.keys(ci)),di=vn.next();!di.done;di=vn.next()){var wn=
di.value,ei=new lj;K(ei,1,wn);K(ei,2,String(ci[wn]));$d(Vb,4,lj,ei)}var fi=O.params;if(fi)for(var xn=w(Object.keys(fi)),gi=xn.next();!gi.done;gi=xn.next()){var yn=gi.value,hi=new lj;K(hi,1,"client."+yn);K(hi,2,String(fi[yn]));$d(Vb,4,lj,hi)}var zn=R("SERVER_NAME"),An=R("SERVER_VERSION");if(zn&&An){var ii=new lj;K(ii,1,"server.name");K(ii,2,zn);$d(Vb,4,lj,ii);var ji=new lj;K(ji,1,"server.version");K(ji,2,An);$d(Vb,4,lj,ji)}var Te=new rj;J(Te,mj,1,Vb);J(Te,oj,2,Yh);J(Te,qj,3,Ub);Wh=Te}var Bn=Wh;if(!Bn)break a;
var Cn=S("jspb_sparse_encoded_pivot")?new xj([{}]):new xj;Yd(Cn,rj,163,yj,Bn);rr("clientError",Cn)}else{var Pa=void 0;Pa=void 0===Pa?{}:Pa;if(zr())Vh=void 0;else{var td={stackTrace:O.stack};O.fileName&&(td.filename=O.fileName);var jb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==jb.length&&(1!==jb.length||isNaN(Number(jb[0]))?2!==jb.length||isNaN(Number(jb[0]))||isNaN(Number(jb[1]))||(td.lineNumber=Number(jb[0]),td.columnNumber=Number(jb[1])):td.lineNumber=Number(jb[0]));var ki=
{level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===rd?ki.level="ERROR_LEVEL_ERROR":"WARNING"===rd&&(ki.level="ERROR_LEVEL_WARNNING");var is={isObfuscated:!0,browserStackInfo:td};Pa.pageUrl=window.location.href;Pa.kvPairs=[];R("FEXP_EXPERIMENTS")&&(Pa.experimentIds=R("FEXP_EXPERIMENTS"));var li=Hj();if(!Ij()&&li)for(var Dn=w(Object.keys(li)),mi=Dn.next();!mi.done;mi=Dn.next()){var En=mi.value;Pa.kvPairs.push({key:En,value:String(li[En])})}var ni=
O.params;if(ni)for(var Fn=w(Object.keys(ni)),oi=Fn.next();!oi.done;oi=Fn.next()){var Gn=oi.value;Pa.kvPairs.push({key:"client."+Gn,value:String(ni[Gn])})}var Hn=R("SERVER_NAME"),In=R("SERVER_VERSION");Hn&&In&&(Pa.kvPairs.push({key:"server.name",value:Hn}),Pa.kvPairs.push({key:"server.version",value:In}));Vh={errorMetadata:Pa,stackTrace:is,logMessage:ki}}var Jn=Vh;if(!Jn)break a;pr("clientError",Jn)}if("ERROR"===rd||S("errors_flush_gel_always_killswitch"))b:{if(S("web_fp_via_jspb")){var Ue=!0;Ue=void 0===
Ue?!1:Ue;var Kn=or;or=[];if(Kn)for(var Ln=w(Kn),pi=Ln.next();!pi.done;pi=Ln.next()){var Ac=pi.value;Ue?lr(Ac.Ac,Ac.payload,Ip,Ac.options):pr(Ac.Ac,Ac.payload,Ac.options)}nr(!0);if(!S("web_fp_via_jspb_and_json"))break b}nr()}}S("suppress_error_204_logging")||Ar(Tb,O);yr(O)}}}}}else throw xc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Xr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Yr(a){return 0===a.search("get")||0===a.search("is")}
;function Zr(a,b){Qr.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(Zr,Qr);r=Zr.prototype;r.kc=function(){var a=Lr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Lr(this.h,"embedConfig")){if(Oa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.fc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Oa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":$r(this,a);break;case "initialDelivery":Oa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},as(this,a.apiInterface),$r(this,a));break;default:Ur(this,b,a)}};
function $r(a,b){if(Oa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Lr(a.h,"title"))))}}
function as(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Xr(c)?this[c]=function(){this.playerInfo={};
this.ka={};Wr(this,c,arguments);return this}:Yr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Wr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Lr(this.h,"host")+("/embed/"+Lr(this.h,"videoId")),b=Number(Lr(this.h,"width")),c=Number(Lr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Xb(a);d=Xb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function js(a){if("iframe"!==a.tagName.toLowerCase()){var b=Ir(a,"videoid");b&&(b={videoId:b,width:Ir(a,"width"),height:Ir(a,"height")},new Zr(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return Er[a]});
F("YT.scan",Hr);F("YT.subscribe",function(a,b,c){Sg.subscribe(a,b,c);Gr[a]=!0;for(var d in Er)Er.hasOwnProperty(d)&&Tr(Er[d],a)});
F("YT.unsubscribe",function(a,b,c){Rg(a,b,c)});
F("YT.Player",Zr);Qr.prototype.destroy=Qr.prototype.destroy;Qr.prototype.setSize=Qr.prototype.setSize;Qr.prototype.getIframe=Qr.prototype.getIframe;Qr.prototype.addEventListener=Qr.prototype.addEventListener;Zr.prototype.getVideoEmbedCode=Zr.prototype.getVideoEmbedCode;Zr.prototype.getOptions=Zr.prototype.getOptions;Zr.prototype.getOption=Zr.prototype.getOption;
Fr.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);db(fb(a,b),js)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Hr();var ks=D.onYTReady;ks&&ks();var ls=D.onYouTubeIframeAPIReady;ls&&ls();var ms=D.onYouTubePlayerAPIReady;ms&&ms();}).call(this);
