!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){e.exports=t.p+"logo.114378ba.svg"},function(e,n,t){"use strict";function r(e,n){for(var t=[],r=[],o=arguments.length;o-- >2;)t.push(arguments[o]);for(;t.length;){var u=t.pop();if(u&&u.pop)for(o=u.length;o--;)t.push(u[o]);else null!=u&&!0!==u&&!1!==u&&r.push(u)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}}t.r(n);var o=t(0),u=t.n(o);t(3);window.app=function(e,n,t,r){var o,u=[].map,l=r&&r.children[0]||null,i=l&&function e(n){return{nodeName:n.nodeName.toLowerCase(),attributes:{},children:u.call(n.childNodes,function(n){return 3===n.nodeType?n.nodeValue:e(n)})}}(l),a=[],c=!0,f=h(e),s=function e(n,t,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var u=o(e);return"function"==typeof u&&(u=u(m(n,f),r)),u&&u!==(t=m(n,f))&&!u.then&&v(f=y(n,h(t,u),f)),u}}(o,r[o]):e(n.concat(o),t[o]=h(t[o]),r[o]=h(r[o]));return r}([],f,h(n));return v(),s;function p(e){return"function"==typeof e?p(e(f,s)):null!=e?e:""}function d(){o=!o;var e=p(t);for(r&&!o&&(l=function e(n,t,r,o,u){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var l=function e(n,t){var r="string"==typeof n||"number"==typeof n?document.createTextNode(n):(t=t||"svg"===n.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",n.nodeName):document.createElement(n.nodeName),o=n.attributes;if(o){o.oncreate&&a.push(function(){o.oncreate(r)});for(var u=0;u<n.children.length;u++)r.appendChild(e(n.children[u]=p(n.children[u]),t));for(var l in o)N(r,l,o[l],null,t)}return r}(o,u);n.insertBefore(l,t),null!=r&&w(n,t,r),t=l}else if(null==r.nodeName)t.nodeValue=o;else{!function(e,n,t,r){for(var o in h(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&N(e,o,t[o],n[o],r);var u=c?t.oncreate:t.onupdate;u&&a.push(function(){u(e,n)})}(t,r.attributes,o.attributes,u=u||"svg"===o.nodeName);for(var i={},f={},s=[],d=r.children,v=o.children,y=0;y<d.length;y++){s[y]=t.childNodes[y];var m=b(d[y]);null!=m&&(i[m]=[s[y],d[y]])}for(var y=0,g=0;g<v.length;){var m=b(d[y]),S=b(v[g]=p(v[g]));if(f[m])y++;else if(null==S||S!==b(d[y+1]))if(null==S||c)null==m&&(e(t,s[y],d[y],v[g],u),g++),y++;else{var x=i[S]||[];m===S?(e(t,x[0],x[1],v[g],u),y++):x[0]?e(t,t.insertBefore(x[0],s[y]),x[1],v[g],u):e(t,s[y],null,v[g],u),f[S]=v[g],g++}else null==m&&w(t,s[y],d[y]),y++}for(;y<d.length;)null==b(d[y])&&w(t,s[y],d[y]),y++;for(var y in i)f[y]||w(t,i[y][0],i[y][1])}return t}(r,l,i,i=e)),c=!1;a.length;)a.pop()()}function v(){o||(o=!0,setTimeout(d))}function h(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function y(e,n,t){var r={};return e.length?(r[e[0]]=e.length>1?y(e.slice(1),n,t[e[0]]):n,h(t,r)):n}function m(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function b(e){return e?e.key:null}function g(e){return e.currentTarget.events[e.type](e)}function N(e,n,t,r,o){if("key"===n);else if("style"===n)for(var u in h(r,t)){var l=null==t||null==t[u]?"":t[u];"-"===u[0]?e[n].setProperty(u,l):e[n][u]=l}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},e.events[n]=t,t?r||e.addEventListener(n,g):e.removeEventListener(n,g)):n in e&&"list"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function w(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}({destroyed:!1,count:0},{getState:function(){return function(e){return e}},destroy:function(){return{destroyed:!0}},up:function(e){return function(n){return{count:n.count+e}}},down:function(e){return function(n){return{count:n.count-e}}}},function(e,n){return e.destroyed?null:r("div",{class:"app"},r("header",{class:"app-header"},r("h1",null,r("a",{href:"https://github.com/frenzzy/hyperapp-starter"},r("img",{class:"app-logo",src:"assets/"+u.a,alt:"Hyperapp Starter"}))),r("p",null,"Welcome to"," ",r("strong",null,r("a",{href:"https://github.com/frenzzy/hyperapp-starter"},"Hyperapp Starter"))," ","demo.")),r("main",{class:"app-content"},r("button",{type:"button",class:"app-button",onclick:function(){return n.down(1)},disabled:e.count<=0},"-"),r("span",{class:"app-count"},e.count),r("button",{type:"button",class:"app-button",onclick:function(){return n.up(1)}},"+")))},document.getElementById("app"))},,function(e,n,t){},function(e,n,t){e.exports=t(1)}]);
//# sourceMappingURL=app.fefced99.js.map