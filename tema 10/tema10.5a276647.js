!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequire7bc7=o);var i=o("h6c0i"),a={},c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt,p="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,v=p||m||Function("return this")(),h=Object.prototype.toString,g=Math.max,y=Math.min,b=function(){return v.Date.now()};function E(e){var n=void 0===e?"undefined":t(c)(e);return!!e&&("object"==n||"function"==n)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(c)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==h.call(e)}(e))return NaN;if(E(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=E(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=d.test(e);return r||f.test(e)?s(e.slice(2),r?2:8):l.test(e)?NaN:+e}a=function(e,t,n){var r,o,i,a,c,u,l=0,d=!1,f=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function m(e){return l=e,c=setTimeout(h,t),d?p(e):a}function v(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-l>=i}function h(){var e=b();if(v(e))return x(e);c=setTimeout(h,function(e){var n=t-(e-u);return f?y(n,i-(e-l)):n}(e))}function x(e){return c=void 0,s&&r?p(e):(r=o=void 0,a)}function T(){var e=b(),n=v(e);if(r=arguments,o=this,u=e,n){if(void 0===c)return m(u);if(f)return c=setTimeout(h,t),p(u)}return void 0===c&&(c=setTimeout(h,t)),a}return t=C(t)||0,E(n)&&(d=!!n.leading,i=(f="maxWait"in n)?g(C(n.maxWait)||0,t):i,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==c&&clearTimeout(c),l=0,r=u=o=c=void 0},T.flush=function(){return void 0===c?a:x(b())},T};var x=document.getElementById("search-box"),T=document.querySelector(".country-list"),w=document.querySelector(".country-info");console.log(T);var L=a((function(){var e,t,n=x.value.trim();if(""===n)return T.innerHTML="",void(w.innerHTML="");(e=n,t="https://restcountries.com/v2/name/".concat(encodeURIComponent(e),"?fields=name,capital,population,flags,languages"),fetch(t).then((function(e){if(e.ok)return e.json();throw new Error("404")})).catch((function(e){throw new Error(e)}))).then((function(e){return function(e){if(T.innerHTML="",0==e.length)return i.Notify.failure("Oops, there is no country with that name"),void(w.innerHTML="");if(1===e.length){var t=e[0];console.log(t);var n=document.createElement("div");n.classList.add("country-container");var r=document.createElement("img");r.src=t.flags.svg,r.classList.add("flag-info");var o=document.createElement("h2");o.textContent=t.name,o.classList.add("name-info");var a=document.createElement("ul"),c=document.createElement("li"),u=document.createElement("h4");u.textContent="Capitala: ".concat(t.capital);var l=document.createElement("h4");l.textContent="Populație: ".concat(t.population);var d=document.createElement("h4"),f=t.languages.map((function(e){return e.name})).join(", ");return d.textContent="Limbi: ".concat(f),n.appendChild(r),n.appendChild(o),c.appendChild(u),c.appendChild(l),c.appendChild(d),a.appendChild(c),w.innerHTML="",w.appendChild(n),void w.appendChild(a)}e.length>2&&e.length<10?e.forEach((function(e){w.innerHTML="";var t=document.createElement("li");t.classList.add("list-item");var n=document.createElement("div");n.classList.add("list-container");var r=document.createElement("img");r.classList.add("flags"),r.src=e.flags.svg;var o=document.createElement("h6");o.textContent=e.name,n.appendChild(r),n.appendChild(o),t.appendChild(n),T.appendChild(t)})):e.length>10&&i.Notify.info("Too many matches found. Please enter a more specific name.")}(e)})).catch((function(e){"404"===e.message?i.Notify.failure("Oops, there is no country with that name"):console.error("Error:",e)}))}),300);x.addEventListener("input",L)}();
//# sourceMappingURL=tema10.5a276647.js.map
