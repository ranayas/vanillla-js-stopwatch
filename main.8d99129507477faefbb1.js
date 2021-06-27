(()=>{"use strict";var t={705:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},374:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(705),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,':root {\n  --stopwatch-font-size: 4rem;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.stopwatch {\n  display: flex;\n  justify-content: center;\n  font-size: var(--stopwatch-font-size);\n  font-family: "Share Tech Mono", monospace;\n  padding: 3.2rem 0 1.6rem;\n  flex-wrap: wrap;\n}\n\n.stopwatch__time {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.stopwatch__miliseconds::first-letter {\n  font-size: var(--stopwatch-font-size);\n}\n\n.stopwatch__miliseconds {\n  font-size: calc(var(--stopwatch-font-size) * 3 / 5);\n}\n\n.stopwatch__time-abbr {\n  font-size: 2rem;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n\n.button {\n  font-size: 1.6rem;\n  text-transform: uppercase;\n  padding: 0.8rem;\n  border-radius: 0.4rem;\n  border: 0 solid;\n  background-color: #f4817b;\n  letter-spacing: 0.2rem;\n  font-weight: 700;\n  font-family: "Share Tech Mono", monospace;\n  cursor: pointer;\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  padding: 1.6rem 0;\n}\n\n.buttons-grid {\n  display: inline-grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.6rem;\n}\n\n.table-container {\n  padding: 1.6rem 0;\n}\n\n.table {\n  font-family: "Share Tech Mono", monospace;\n  font-size: 2.4rem;\n  margin: auto;\n  border-collapse: collapse;\n}\n\n.table__row {\n  border-bottom: 0.1rem solid #f4817b;\n}\n\n.table__data {\n  padding: 1.6rem 1.6rem 0;\n}\n',""]);const i=r},28:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(705),r=n.n(o)()((function(t){return t[1]}));r.push([t.id,"* {\n\tbox-sizing: border-box;\n\tborder: 0;\n\tmargin: 0;\n}\n\nhtml {\n\tfont-size: 62.5%;\n}\n\nbody {\n\tfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\tbackground-color: #1f1f1f;\n\tcolor: white;\n}\n\n.container {\n\tmargin: auto;\n\tpadding: 0 16px;\n\tmax-width: 1200px;\n}\n",""]);const i=r},379:(t,e,n)=>{var o,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},o=[],r=0;r<t.length;r++){var s=t[r],c=e.base?s[0]+e.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var f=a(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(p)):i.push({identifier:u,updater:h(p,e),references:1}),o.push(u)}return o}function c(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function f(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var d=null,m=0;function h(t,e){var n,o,r;if(e.singleton){var i=m++;n=d||(d=c(e)),o=f.bind(null,n,i,!1),r=f.bind(null,n,i,!0)}else n=c(e),o=p.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(t,e),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),o=n(28);e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=n(374);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,t),this._props=e}var e,n;return e=t,(n=[{key:"createElement",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=t instanceof DocumentFragment?document.createDocumentFragment():document.createElement(t);for(var o=arguments.length,r=new Array(o>2?o-2:0),i=2;i<o;i++)r[i-2]=arguments[i];return r.forEach((function(t){return t instanceof HTMLElement||t instanceof DocumentFragment?e.appendChild(t):e.appendChild(document.createTextNode(t))})),e instanceof DocumentFragment||this._attachAttributes(e,n),e}},{key:"_attachAttributes",value:function(t,e){"object"===a(e)&&e&&Object.entries(e).forEach((function(e){var n,o,r=(o=2,function(t){if(Array.isArray(t))return t}(n=e)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var o,r,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);a=!0);}catch(t){s=!0,r=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return i}}(n,o)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[0],s=r[1];s&&("function"==typeof s?t[a]=s:t.setAttribute(a,s))}))}}])&&c(e.prototype,n),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(o);if(r){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return m(this,t)});function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{time:"",class:"",abbr:{title:"",children:"",class:""}};return f(this,a),i.call(this,t)}return e=a,(n=[{key:"time",set:function(t){this._time.innerText=t}},{key:"render",value:function(){return this._time=this.createElement("span",{class:this._props.class},this._props.time),this.createElement("span",{class:"stopwatch__time"},this._time,this.createElement("abbr",{title:this._props.abbr.title,class:this._props.abbr.class},this._props.abbr.children))}}])&&p(e.prototype,n),a}(l);function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var y=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._passAmilisecondHandler=function(){},this._passAsecondHandler=function(){},this._passAminuteHandler=function(){},this._passAnHourHandler=function(){}}var e,n;return e=t,(n=[{key:"passAmilisecondsHandler",get:function(){return this._passAmilisecondHandler},set:function(t){this._passAmilisecondHandler=t}},{key:"passAsecondHandler",get:function(){return this._passAsecondHandler},set:function(t){this._passAsecondHandler=t}},{key:"passAminuteHandler",get:function(){return this._passAminuteHandler},set:function(t){this._passAminuteHandler=t}},{key:"passAnHourHandler",get:function(){return this._passAnHourHandler},set:function(t){this._passAnHourHandler=t}}])&&b(e.prototype,n),t}();function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new y,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{miliseconds:0,seconds:0,minutes:0,hours:0};v(this,t),g(this,"_passAmilisecondHandler",(function(){if(!e._startDate)throw new Error;var t=Date.now()-e._startDate;e._time.miliseconds=e._time.miliseconds+t,e._startDate=Date.now(),e._time.miliseconds>=e._MILISECONDS_IN_ONE_SECOND&&(e._passAsecondHandler(),e._time.miliseconds=0),e._stopwatchTimeHandlers.passAmilisecondsHandler()})),g(this,"_passAsecondHandler",(function(){e._time.seconds=e._time.seconds+e._time.miliseconds/e._MILISECONDS_IN_ONE_SECOND,e._time.seconds>=e._SECONDS_IN_A_MINUTE&&(e._passAminuteHandler(),e._time.seconds=0),e._stopwatchTimeHandlers.passAsecondHandler()})),g(this,"_passAminuteHandler",(function(){e._time.minutes=e._time.minutes+e._time.seconds/e._SECONDS_IN_A_MINUTE,e._time.minutes>=e._MINUTES_IN_AN_HOUR&&(e._passAnHourHandler(),e._time.minutes=0),e._stopwatchTimeHandlers.passAminuteHandler()})),g(this,"_passAnHourHandler",(function(){e._time.hours=e._time.hours+e._time.minutes/e._MINUTES_IN_AN_HOUR,e._stopwatchTimeHandlers.passAnHourHandler()})),this._MILISECONDS_IN_ONE_SECOND=1e3,this._SECONDS_IN_A_MINUTE=60,this._MINUTES_IN_AN_HOUR=60,this._stopwatchTimeHandlers=n,this._time=o,this._laps=new Array}var e,n;return e=t,(n=[{key:"run",value:function(){this._startDate=Date.now(),this.tick||(this.tick=setInterval(this._passAmilisecondHandler,0))}},{key:"reset",value:function(){this.tick&&clearInterval(this.tick),this.tick=void 0,this._time.seconds=0,this._time.minutes=0,this._time.hours=0,this._time.miliseconds=0,this._laps=[]}},{key:"stop",value:function(){this.tick&&clearInterval(this.tick),this.tick=void 0}},{key:"split",value:function(){this._laps.push({hours:Math.floor(this._time.hours),miliseconds:Math.floor(this._time.miliseconds),minutes:Math.floor(this._time.minutes),seconds:Math.floor(this._time.seconds)})}},{key:"seconds",get:function(){return Math.floor(this._time.seconds)}},{key:"miliseconds",get:function(){return Math.floor(this._time.miliseconds)}},{key:"minutes",get:function(){return Math.floor(this._time.minutes)}},{key:"hours",get:function(){return Math.floor(this._time.hours)}},{key:"laps",get:function(){return this._laps}}])&&w(e.prototype,n),t}();function C(t){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t,e){return!e||"object"!==C(e)&&"function"!=typeof e?A(t):e}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(o);if(r){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function a(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),T(A(t=i.call(this)),"_formatStopwatchMiliseconds",(function(){return"00".concat(t._stopwatch.miliseconds).substr(-3)})),T(A(t),"_formatStopwatchSeconds",(function(){return"0".concat(t._stopwatch.seconds).substr(-2)})),T(A(t),"_formatStopwatchMinutes",(function(){return"0".concat(t._stopwatch.minutes).substr(-2)})),T(A(t),"_formatStopwatchHours",(function(){return t._hours.time,"0".concat(t._stopwatch.hours).substr(-2)})),T(A(t),"_formatStopwatchTime",(function(){return"".concat(t._formatStopwatchHours(),":").concat(t._formatStopwatchMinutes(),":").concat(t._formatStopwatchSeconds(),":").concat(t._formatStopwatchMiliseconds())})),T(A(t),"_handleSplitButtonClick",(function(){t._stopwatch.split(),t._tableLapsContainer||(t._tableLaps=t.createElement("table",{class:"table"},t._tableBody),t._tableLapsContainer=t.createElement("div",{class:"table-container"},t._tableLaps),t._view.appendChild(t._tableLapsContainer)),t._tableBody.appendChild(t.createElement("tr",{class:"table__row"},t.createElement("td",{class:"table__data"},t._stopwatch.laps.length),t.createElement("td",{class:"table__data"},t._formatStopwatchTime())))})),T(A(t),"_handleResetButtonClick",(function(){t._stopwatch.reset(),t._hours.time="00",t._minutes.time="00",t._seconds.time="00",t._miliseconds.time="000",t._buttonContainerContent.innerHTML="",t._buttonContainerContent.appendChild(t._startButton),t._view.removeChild(t._tableLapsContainer),t._tableLapsContainer="",t._tableBody.innerHTML=""})),T(A(t),"_handleStopButtonClick",(function(){t._stopwatch.stop(),t._firstButton.innerText="resume",t._firstButton.onclick=function(){t._stopwatch.run(),t._firstButton.innerText="stop",t._firstButton.onclick=t._handleStopButtonClick,t._secondButton.innerText="split",t._secondButton.onclick=t._handleSplitButtonClick},t._secondButton.innerText="reset",t._secondButton.onclick=t._handleResetButtonClick})),T(A(t),"_handleStartButtonClick",(function(){t._stopwatch.run(),t._buttonContainerContent.innerHTML="",t._firstButton.innerText="stop",t._firstButton.onclick=t._handleStopButtonClick,t._secondButton.onclick=t._handleSplitButtonClick,t._secondButton.innerText="split",t._buttonContainerContent.appendChild(t.createElement("div",{class:"buttons-grid"},t._firstButton,t._secondButton))}));var e=new y;return t._stopwatch=new S(e),t._hours=new _({time:"00",abbr:{children:"hrs",title:"hours",class:"stopwatch__time-abbr"}}),t._minutes=new _({time:"00",abbr:{children:"min",title:"minutes",class:"stopwatch__time-abbr"}}),t._seconds=new _({time:"00",abbr:{children:"sec",title:"seconds",class:"stopwatch__time-abbr"}}),t._miliseconds=new _({time:"000",class:"stopwatch__miliseconds",abbr:{children:"ms",title:"miliseconds",class:"stopwatch__time-abbr"}}),e.passAmilisecondsHandler=function(){t._miliseconds.time=t._formatStopwatchMiliseconds()},e.passAsecondHandler=function(){t._seconds.time=t._formatStopwatchSeconds()},e.passAminuteHandler=function(){t._minutes.time=t._formatStopwatchMinutes()},e.passAnHourHandler=function(){t._hours.time=t._formatStopwatchHours()},t._startButton=t.createElement("button",{class:"button",onclick:t._handleStartButtonClick},"start"),t._buttonContainerContent=t.createElement("div",{class:"buttons-container"},t._startButton),t._firstButton=t.createElement("button",{class:"button"}),t._secondButton=t.createElement("button",{class:"button"}),t._tableLaps="",t._tableBody=t.createElement("tbody",null),t}return e=a,(n=[{key:"render",value:function(){return this._view=this.createElement("div",{class:"container"},this.createElement("time",{class:"stopwatch"},this._hours.render(),":",this._minutes.render(),":",this._seconds.render(),":",this._miliseconds.render()),this._buttonContainerContent),this._view}}])&&H(e.prototype,n),a}(l);document.getElementById("main").appendChild((new B).render())})()})();