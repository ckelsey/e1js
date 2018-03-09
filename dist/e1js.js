!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(t,e,n){"use strict";n(1)},function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var s=function(){function t(){var e=this;n(this,t),this.bindings={},this.components={},this.models={},this.services={},this.subscriptions={},this.ids=[],this.cleanHtml=this.cleanHtml,this.generateId=this.generateId,this.getModel=this.getModel,this.getThis=this.getThis,this.registerComponent=this.registerComponent,this.registerElement=this.registerElement,this.scan=this.scan,this.setModel=this.setModel,this.setThis=this.setThis,this.subscribe=this.subscribe,this.updateBindings=this.updateBindings;this.observer=new window.MutationObserver(function(t){var n=Object.keys(e.components),i=function(t,n){if(t.hasAttribute&&t.querySelectorAll){t.nodeName&&t.nodeName.toLowerCase()===n&&e.components[n]._initElement(t),t.hasAttribute(n)&&e.components[n]._initElement(t);var i=t.querySelectorAll(n);if(i.length||(i=t.querySelectorAll("[".concat(n,"]"))),i.length)for(var r=0;r<i.length;r++)e.components[n]._initElement(i[r])}},r=function(t){n.forEach(function(e){i(t,e)})},s=function(t){for(var e=0;e<t.length;e++)3!==t[e].nodeType&&r(t[e])};t.forEach(function(t){console.log(t),t.addedNodes.length&&s(t.addedNodes),t.removedNodes.length})})}return r(t,[{key:"cleanHtml",value:function(t,e){t=t?t.toString().replace(/<script[^>]*?>.*?<\/script>/gi,"").replace(/<style[^>]*?>.*?<\/style>/gi,"").replace(/<![\s\S]*?--[ \t\n\r]*>/gi,""):"";var n=/<\s*\w.*?>/g.exec(t),i=window.document.createElement("div");if(null!==n){if(e&&e.parentNode){var r=window.document.createRange();r.selectNode(e),i=r.createContextualFragment(t)}else i=window.document.createRange().createContextualFragment(t);i=i.lastChild}else i.innerHTML=t,i=i.lastChild;return i}},{key:"generateId",value:function(){for(var t=function(){for(var t="",e="abcdefghijklmnopqrstuvwxyz",n=0;n<26;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},e=t();this.ids.indexOf(e)>-1;)e=t();return this.ids.push(e),e}},{key:"getModel",value:function(t,e,n){var i;if(!t&&!e)return n;if(t&&e){var r=t.getAttribute(e);if(!r||"@"!==r.substring(0,1)){try{r=JSON.parse(r)}catch(t){}return r||n}i=r.substring(1,r.length)}else!t&&e&&"@"===e.substring(0,1)&&(i=e.substring(1,e.length));if(!i)return n;i=i.split(".");var s=i.shift();return this.services[s]?s=this.services[s]:(i.unshift(s),s=window),i=i.join("."),this.getThis(s,i,n)}},{key:"getThis",value:function(t,e,n){e=e&&e.toString().split?[t].concat(e.toString().split(".")):[t];var i=e.reduce(function(t,e){if(void 0===t)return n;if(-1===e.indexOf(".")&&e.indexOf("(")>-1){var i=/\((.*?)\)/g.exec(e)[1],r=i.split(",").map(function(t){return t.trim()}),s=e.split("(")[0];if("function"==typeof t[s]){return t[s].apply(t,r)}}return e?t[e]:t});return void 0===i?n:i}},{key:"isTruthy",value:function(t,e){var n=this,i=t.split(/(?:\(|\)|\|\||&&|<=|<|>=|>|===|!==)+/g).map(function(t){return t.trim()});i.sort(function(t,e){return t.length>e.length?-1:t.length<e.length?1:0}),i.forEach(function(e){if("@"===e.substring(0,1)){var i=n.getModel(null,e);t=isNaN(i)?t.split(e).join("'".concat(i,"'")):t.split(e).join(i)}});try{var r=new window.Blob(["self.onmessage=function(e){try{var t=eval(e.data); self.postMessage(t);}catch(err){self.postMessage(false)}}"],{type:"text/javascript"}),s=new window.Worker(window.URL.createObjectURL(r));s.onmessage=function(t){e(t.data)},s.postMessage(t)}catch(t){e(!1)}}},{key:"registerComponent",value:function(t,e){var n=this;this.components[t]={service:e,_initElement:function(e){if(-1===n.components[t].registeredElements.indexOf(e)){n.registerElement(e);var i=new n.components[t].service(e);n.components[t].registeredElements.push(e),e.onUpdate||(e.onUpdate=[]),e.onUpdate.push(i.update.bind(i))}else e.onUpdate&&Array.isArray(e.onUpdate)&&e.onUpdate.length&&e.onUpdate.forEach(function(t){t()})},registeredElements:[],scan:function(e){var i=e.querySelectorAll(t);if(i.length)for(var r=0;r<i.length;r++)n.components[t]._initElement(i[r])}},"complete"===window.document.readyState&&this.components[t].scan(window.document.body)}},{key:"registerAttribute",value:function(t,e){var n=this;this.components[t]={service:e,_initElement:function(e){if(-1===n.components[t].registeredElements.indexOf(e)){n.registerElement(e);var i=new n.components[t].service(e);n.components[t].registeredElements.push(e),e.onUpdate||(e.onUpdate=[]),e.onUpdate.push(i.update.bind(i))}else e.onUpdate&&Array.isArray(e.onUpdate)&&e.onUpdate.length&&e.onUpdate.forEach(function(t){t()})},registeredElements:[],scan:function(e){var i=e.querySelectorAll("[".concat(t,"]"));if(i.length)for(var r=0;r<i.length;r++)n.components[t]._initElement(i[r])}},"complete"===window.document.readyState&&this.components[t].scan(window.document.body)}},{key:"registerElement",value:function(t){var e=this;if(t&&t.attributes){t.hasAttribute("component-id")||(t.setAttribute("component-id",this.generateId()),t["component-id"]=t.getAttribute("component-id"));for(var n=t.attributes,i=0;i<n.length;i++){var r=n[i].value;if("@"===r.substring(0,1)){var s=r.split(/(?:\(|\)|\|\||&&|<=|<|>=|>|===|!==)+/g).map(function(t){return t.trim()});!function(t,n){t.forEach(function(t){var i=t.split(/\?|\:/g).map(function(t){return t.trim()})[0];e.bindings[i]||(e.bindings[i]=[]),e.bindings[i].push(n)})}(s,t)}}}}},{key:"registerService",value:function(t,e){this.services[t]=e,this.updateBindings("@"+t,e)}},{key:"scan",value:function(t){for(var e in this.components)this.components[e]&&this.components[e].scan(t)}},{key:"setModel",value:function(t,e,n){var i;if(!t&&!e)return!1;if(t&&e){var r=t.getAttribute(e);r&&"@"===r.substring(0,1)&&(i=r.substring(1,r.length))}else!t&&e&&"@"===e.substring(0,1)&&(i=e.substring(1,e.length));if(!i)return!1;var s=i;i=i.split(".");var o=i.shift();this.services[o]?o=this.services[o]:(i.unshift(o),o=window),i=i.join(".");var a=this.getThis(o,i);try{a=JSON.parse(JSON.stringify(a))}catch(t){}n&&n.substring&&"@"===n.substring(0,1)&&(n=this.getModel(null,n,n)),this.setThis(o,i,n);var c=this.getThis(o,i),u=a;try{"object"==typeof a&&"object"==typeof c?u=Object.assign(a,c):c&&(u=c)}catch(t){}return this.updateBindings("@"+s,u),c}},{key:"setThis",value:function(t,e,n){return e=e?[t].concat(e.split(".")):[t],e.reduce(function(t,i){return t||(t={}),t[i]||(t[i]={}),i?(i===e[e.length-1]&&(t[i]=n),t[i]):(t[i]=null,t)})}},{key:"subscribe",value:function(t,e){this.subscriptions[t]||(this.subscriptions[t]=[]),this.subscriptions[t].push(e)}},{key:"updateBindings",value:function(t,e){var n=this.bindings[t],i=this.subscriptions[t];if(i&&i.length&&i.forEach(function(t){t(e)}),n&&n.length&&n.forEach(function(t){Array.isArray(t.onUpdate)&&t.onUpdate.length&&t.onUpdate.forEach(function(t){t()})}),e&&"object"==typeof e)for(var r in e)e.hasOwnProperty(r)&&this.updateBindings("".concat(t,".").concat(r),e[r])}}]),t}();window.E1=new s,t.exports=window.E1,"complete"===window.document.readyState?(window.E1.observer.observe(window.document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0,characterData:!0}),window.E1.scan(window.document.body)):window.document.addEventListener("DOMContentLoaded",function(){window.E1.observer.observe(window.document.body,{attributes:!0,attributeOldValue:!0,childList:!0,subtree:!0,characterData:!0}),window.E1.scan(window.document.body)})}]);