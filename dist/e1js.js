!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(t,e,n){"use strict";n(1)},function(t,e,n){function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var s=n(2);s.createContext();var c=function(){function t(){var e=this;r(this,t),this.bindings={},this.components={},this.models={},this.services={},this.subscriptions={},this.ids=[],this.cleanHtml=this.cleanHtml,this.generateId=this.generateId,this.getModel=this.getModel,this.getThis=this.getThis,this.registerComponent=this.registerComponent,this.registerElement=this.registerElement,this.scan=this.scan,this.setModel=this.setModel,this.setThis=this.setThis,this.subscribe=this.subscribe,this.updateBindings=this.updateBindings,this.observer=new window.MutationObserver(function(t){var n=Object.keys(e.components),r=function(t,n){if(t.hasAttribute&&t.querySelectorAll){t.nodeName&&t.nodeName.toLowerCase()===n&&e.components[n]._initElement(t),t.hasAttribute(n)&&e.components[n]._initElement(t);var r=t.querySelectorAll(n);if(r.length||(r=t.querySelectorAll("[".concat(n,"]"))),r.length)for(var i=0;i<r.length;i++)e.components[n]._initElement(r[i])}},i=function(t){n.forEach(function(e){r(t,e)})},o=function(t){for(var e=0;e<t.length;e++)3!==t[e].nodeType&&i(t[e])};t.forEach(function(t){t.addedNodes.length&&o(t.addedNodes)})})}return o(t,[{key:"cleanHtml",value:function(t,e){t=t?t.toString().replace(/<script[^>]*?>.*?<\/script>/gi,"").replace(/<style[^>]*?>.*?<\/style>/gi,"").replace(/<![\s\S]*?--[ \t\n\r]*>/gi,""):"";var n=/<\s*\w.*?>/g.exec(t),r=window.document.createElement("div");if(null!==n){if(e&&e.parentNode){var i=window.document.createRange();i.selectNode(e),r=i.createContextualFragment(t)}else r=window.document.createRange().createContextualFragment(t);r=r.lastChild}else r.innerHTML=t,r=r.lastChild;return r}},{key:"generateId",value:function(){for(var t=function(){for(var t="",e="abcdefghijklmnopqrstuvwxyz",n=0;n<26;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},e=t();this.ids.indexOf(e)>-1;)e=t();return this.ids.push(e),e}},{key:"getModel",value:function(t,e,n){var r;if(!t&&!e)return n;if(t&&e){var i=t.getAttribute(e);if(!i||"@"!==i.substring(0,1)){try{i=JSON.parse(i)}catch(t){}return i||n}r=i.substring(1,i.length)}else!t&&e&&"@"===e.substring(0,1)&&(r=e.substring(1,e.length));if(!r)return n;r=r.split(".");var o=r.shift();return this.services[o]?o=this.services[o]:(r.unshift(o),o=window),r=r.join("."),this.getThis(o,r,n)}},{key:"getThis",value:function(t,e,n){e=e&&e.toString().split?[t].concat(e.toString().split(".")):[t];var r=e.reduce(function(t,e){if(void 0===t)return n;if(-1===e.indexOf(".")&&e.indexOf("(")>-1){var r=/\((.*?)\)/g.exec(e)[1],i=r.split(",").map(function(t){return t.trim()}),o=e.split("(")[0];if("function"==typeof t[o]){return t[o].apply(t,i)}}return e?t[e]:t});return void 0===r?n:r}},{key:"isTruthy",value:function(t){var e=this,n=t.split(/(?:\(|\)|\|\||&&|<=|<|>=|>|===|!==)+/g).map(function(t){return t.trim()});return n.sort(function(t,e){return t.length>e.length?-1:t.length<e.length?1:0}),n.forEach(function(n){if("@"===n.substring(0,1)){var r=e.getModel(null,n);t=isNaN(r)?t.split(n).join("'".concat(r,"'")):t.split(n).join(r)}}),this.eval(t)}},{key:"eval",value:function(t){try{return s.runInNewContext(t)}catch(t){return!1}}},{key:"registerComponent",value:function(t,e){var n=this;this.components[t]={service:e,_initElement:function(e){if(-1===n.components[t].registeredElements.indexOf(e)){n.registerElement(e);var r=new n.components[t].service(e);n.components[t].registeredElements.push(e),e.onUpdate||(e.onUpdate=[]),e.onUpdate.push(r.update.bind(r))}else e.onUpdate&&Array.isArray(e.onUpdate)&&e.onUpdate.length&&e.onUpdate.forEach(function(t){t()})},registeredElements:[],scan:function(e){var r=e.querySelectorAll(t);if(r.length)for(var i=0;i<r.length;i++)n.components[t]._initElement(r[i])}},"complete"===window.document.readyState&&this.components[t].scan(window.document.body)}},{key:"registerAttribute",value:function(t,e){var n=this;this.components[t]={service:e,_initElement:function(e){if(-1===n.components[t].registeredElements.indexOf(e)){n.registerElement(e);var r=new n.components[t].service(e);n.components[t].registeredElements.push(e),e.onUpdate||(e.onUpdate=[]),e.onUpdate.push(r.update.bind(r))}else e.onUpdate&&Array.isArray(e.onUpdate)&&e.onUpdate.length&&e.onUpdate.forEach(function(t){t()})},registeredElements:[],scan:function(e){var r=e.querySelectorAll("[".concat(t,"]"));if(r.length)for(var i=0;i<r.length;i++)n.components[t]._initElement(r[i])}},"complete"===window.document.readyState&&this.components[t].scan(window.document.body)}},{key:"registerElement",value:function(t){var e=this;if(t&&t.attributes){t.hasAttribute("component-id")||(t.setAttribute("component-id",this.generateId()),t["component-id"]=t.getAttribute("component-id"));for(var n=t.attributes,r=0;r<n.length;r++){var i=n[r].value;if("@"===i.substring(0,1)){var o=i.split(/(?:\(|\)|\|\||&&|<=|<|>=|>|===|!==)+/g).map(function(t){return t.trim()});!function(t,n){t.forEach(function(t){var r=t.split(/\?|\:/g).map(function(t){return t.trim()})[0];e.bindings[r]||(e.bindings[r]=[]),e.bindings[r].push(n)})}(o,t)}}}}},{key:"registerService",value:function(t,e){this.services[t]=e,this.updateBindings("@"+t,e)}},{key:"scan",value:function(t){for(var e in this.components)this.components[e]&&this.components[e].scan(t)}},{key:"setModel",value:function(t,e,n){var r;if(!t&&!e)return!1;if(t&&e){var i=t.getAttribute(e);i&&"@"===i.substring(0,1)&&(r=i.substring(1,i.length))}else!t&&e&&"@"===e.substring(0,1)&&(r=e.substring(1,e.length));if(!r)return!1;var o=r;r=r.split(".");var s=r.shift();this.services[s]?s=this.services[s]:(r.unshift(s),s=window),r=r.join(".");var c=this.getThis(s,r);try{c=JSON.parse(JSON.stringify(c))}catch(t){}n&&n.substring&&"@"===n.substring(0,1)&&(n=this.getModel(null,n,n)),this.setThis(s,r,n);var a=this.getThis(s,r),u=c;try{"object"==typeof c&&"object"==typeof a?u=Object.assign(c,a):a&&(u=a)}catch(t){}return this.updateBindings("@"+o,u),a}},{key:"setThis",value:function(t,e,n){return e=e?[t].concat(e.split(".")):[t],e.reduce(function(t,r){return t||(t={}),t[r]||(t[r]={}),r?(r===e[e.length-1]&&(t[r]=n),t[r]):(t[r]=null,t)})}},{key:"subscribe",value:function(t,e){this.subscriptions[t]||(this.subscriptions[t]=[]),this.subscriptions[t].push(e)}},{key:"updateBindings",value:function(t,e){var n=this,r=this.bindings[t],i=this.subscriptions[t];if(i&&i.length&&i.forEach(function(t){t(e)}),r&&r.length&&r.forEach(function(t){var e=window.document.body.contains(t);(t.hasAttribute("e1-if")&&n.isTruthy(t.getAttribute("e1-if"))||t.hasAttribute("e1-show")&&n.isTruthy(t.getAttribute("e1-show")))&&(e=!0),e&&Array.isArray(t.onUpdate)&&t.onUpdate.length&&t.onUpdate.forEach(function(t){t()})}),e&&"object"==typeof e)for(var o in e)e.hasOwnProperty(o)&&this.updateBindings("".concat(t,".").concat(o),e[o])}}]),t}();window.E1=new c,t.exports=window.E1,"complete"===window.document.readyState?(window.E1.observer.observe(window.document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0,characterData:!0}),window.E1.scan(window.document.body)):window.document.addEventListener("DOMContentLoaded",function(){window.E1.observer.observe(window.document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0,characterData:!0}),window.E1.scan(window.document.body)})},function(module,exports,__webpack_require__){function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Context(){}var indexOf=__webpack_require__(3),Object_keys=function(t){if(Object.keys)return Object.keys(t);var e=[];for(var n in t)e.push(n);return e},forEach=function(t,e){if(t.forEach)return t.forEach(e);for(var n=0;n<t.length;n++)e(t[n],n,t)},defineProp=function(){try{return Object.defineProperty({},"_",{}),function(t,e,n){Object.defineProperty(t,e,{writable:!0,enumerable:!1,configurable:!0,value:n})}}catch(t){return function(t,e,n){t[e]=n}}}(),globals=["Array","Boolean","Date","Error","EvalError","Function","Infinity","JSON","Math","NaN","Number","Object","RangeError","ReferenceError","RegExp","String","SyntaxError","TypeError","URIError","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","eval","isFinite","isNaN","parseFloat","parseInt","undefined","unescape"];Context.prototype={};var Script=exports.Script=function(t){if(!(this instanceof Script))return new Script(t);this.code=t};Script.prototype.runInContext=function(t){if(!(t instanceof Context))throw new TypeError("needs a 'context' argument.");var e=document.createElement("iframe");e.style||(e.style={}),e.style.display="none",document.body.appendChild(e);var n=e.contentWindow,r=n.eval,i=n.execScript;!r&&i&&(i.call(n,"null"),r=n.eval),forEach(Object_keys(t),function(e){n[e]=t[e]}),forEach(globals,function(e){t[e]&&(n[e]=t[e])});var o=Object_keys(n),s=r.call(n,this.code);return forEach(Object_keys(n),function(e){(e in t||-1===indexOf(o,e))&&(t[e]=n[e])}),forEach(globals,function(e){e in t||defineProp(t,e,n[e])}),document.body.removeChild(e),s},Script.prototype.runInThisContext=function(){return eval(this.code)},Script.prototype.runInNewContext=function(t){var e=Script.createContext(t),n=this.runInContext(e);return forEach(Object_keys(e),function(n){t[n]=e[n]}),n},forEach(Object_keys(Script.prototype),function(t){exports[t]=Script[t]=function(e){var n=Script(e);return n[t].apply(n,[].slice.call(arguments,1))}}),exports.createScript=function(t){return exports.Script(t)},exports.createContext=Script.createContext=function(t){var e=new Context;return"object"===_typeof(t)&&forEach(Object_keys(t),function(n){e[n]=t[n]}),e}},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}}]);