webpackJsonp([18],Array(54).concat([function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(2),r=t.n(o),i=t(179),a=t(159);if(window.location.href.match("om.qq.com/userAuth/index"))chrome.extension.sendRequest({operation:"addAccount",action:"check",platform:"qe"},function(n){function e(){t+=1;var o=r()('input[name="email"]');o.length?(n.canAddAccount&&(a.a.addTopAlert("请在此页面登录企鹅媒体平台，登录完成后该帐号会自动绑定至新媒体管家","long"),o.val(""),r()('input[name="password"]').val("")),r()(".btnLogin").on("click",function(n){i.a.qe(n)}),r()('input[name="email"], input[name="password"]').on("keydown",function(n){13===("which"in n?n.which:n.keyCode)&&i.a.qe(n)})):t<5&&setTimeout(e,400)}a.a.addTabListener("qe");var t=0;e()});else if(window.location.href.match("om.qq.com")){var s=0;!function n(){s+=1,r()(".user.cell.cell-user").length>0?a.a.setCookie("qe"):s<10&&setTimeout(n,500)}()}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,e){var t=n.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)},,function(n,e){var t=n.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},,,function(n,e,t){n.exports=!t(97)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},,function(n,e){n.exports=function(n){return"object"==typeof n?null!==n:"function"==typeof n}},function(n,e){function t(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var i=o(r);return[t].concat(r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"})).concat([i]).join("\n")}return[t].join("\n")}function o(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var o=t(e,n);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){function o(n){for(var e=0;e<n.length;e++){var t=n[e],o=f[t.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](t.parts[r]);for(;r<t.parts.length;r++)o.parts.push(i(t.parts[r]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{for(var a=[],r=0;r<t.parts.length;r++)a.push(i(t.parts[r]));f[t.id]={id:t.id,refs:1,parts:a}}}}function r(){var n=document.createElement("style");return n.type="text/css",l.appendChild(n),n}function i(n){var e,t,o=document.querySelector("style["+g+'~="'+n.id+'"]');if(o){if(m)return v;o.parentNode.removeChild(o)}if(x){var i=d++;o=p||(p=r()),e=a.bind(null,o,i,!1),t=a.bind(null,o,i,!0)}else o=r(),e=s.bind(null,o),t=function(){o.parentNode.removeChild(o)};return e(n),function(o){if(o){if(o.css===n.css&&o.media===n.media&&o.sourceMap===n.sourceMap)return;e(n=o)}else t()}}function a(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function s(n,e){var t=e.css,o=e.media,r=e.sourceMap;if(o&&n.setAttribute("media",o),h.ssrId&&n.setAttribute(g,e.id),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=t(135),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,m=!1,v=function(){},h=null,g="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());n.exports=function(n,e,t,r){m=t,h=r||{};var i=c(n,e);return o(i),function(e){for(var t=[],r=0;r<i.length;r++){var a=i[r],s=f[a.id];s.refs--,t.push(s)}e?(i=c(n,e),o(i)):i=[];for(var r=0;r<t.length;r++){var s=t[r];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var y=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},function(n,e,t){var o=t(96),r=t(126),i=t(116),a=Object.defineProperty;e.f=t(88)?Object.defineProperty:function(n,e,t){if(o(n),e=i(e,!0),o(t),r)try{return a(n,e,t)}catch(n){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(n[e]=t.value),n}},function(n,e){var t={}.hasOwnProperty;n.exports=function(n,e){return t.call(n,e)}},function(n,e,t){var o=t(85),r=t(83),i=t(106),a=t(99),s=t(94),u=function(n,e,t){var c,f,l,p=n&u.F,d=n&u.G,m=n&u.S,v=n&u.P,h=n&u.B,g=n&u.W,x=d?r:r[e]||(r[e]={}),y=x.prototype,b=d?o:m?o[e]:(o[e]||{}).prototype;d&&(t=e);for(c in t)(f=!p&&b&&void 0!==b[c])&&s(x,c)||(l=f?b[c]:t[c],x[c]=d&&"function"!=typeof b[c]?t[c]:h&&f?i(l,o):g&&b[c]==l?function(n){var e=function(e,t,o){if(this instanceof n){switch(arguments.length){case 0:return new n;case 1:return new n(e);case 2:return new n(e,t)}return new n(e,t,o)}return n.apply(this,arguments)};return e.prototype=n.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((x.virtual||(x.virtual={}))[c]=l,n&u.R&&y&&!y[c]&&a(y,c,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,n.exports=u},function(n,e,t){var o=t(90);n.exports=function(n){if(!o(n))throw TypeError(n+" is not an object!");return n}},function(n,e){n.exports=function(n){try{return!!n()}catch(n){return!0}}},function(n,e,t){var o=t(121),r=t(103);n.exports=function(n){return o(r(n))}},function(n,e,t){var o=t(93),r=t(107);n.exports=t(88)?function(n,e,t){return o.f(n,e,r(1,t))}:function(n,e,t){return n[e]=t,n}},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e){var t={}.toString;n.exports=function(n){return t.call(n).slice(8,-1)}},function(n,e){n.exports=!0},function(n,e){n.exports=function(n){if(void 0==n)throw TypeError("Can't call method on  "+n);return n}},function(n,e){var t=Math.ceil,o=Math.floor;n.exports=function(n){return isNaN(n=+n)?0:(n>0?o:t)(n)}},function(n,e,t){var o=t(127),r=t(119);n.exports=Object.keys||function(n){return o(n,r)}},function(n,e,t){var o=t(108);n.exports=function(n,e,t){if(o(n),void 0===e)return n;switch(t){case 1:return function(t){return n.call(e,t)};case 2:return function(t,o){return n.call(e,t,o)};case 3:return function(t,o,r){return n.call(e,t,o,r)}}return function(){return n.apply(e,arguments)}}},function(n,e){n.exports=function(n,e){return{enumerable:!(1&n),configurable:!(2&n),writable:!(4&n),value:e}}},function(n,e){n.exports=function(n){if("function"!=typeof n)throw TypeError(n+" is not a function!");return n}},function(n,e){var t=0,o=Math.random();n.exports=function(n){return"Symbol(".concat(void 0===n?"":n,")_",(++t+o).toString(36))}},,,,function(n,e){e.f={}.propertyIsEnumerable},,function(n,e,t){var o=t(90),r=t(85).document,i=o(r)&&o(r.createElement);n.exports=function(n){return i?r.createElement(n):{}}},function(n,e,t){var o=t(90);n.exports=function(n,e){if(!o(n))return n;var t,r;if(e&&"function"==typeof(t=n.toString)&&!o(r=t.call(n)))return r;if("function"==typeof(t=n.valueOf)&&!o(r=t.call(n)))return r;if(!e&&"function"==typeof(t=n.toString)&&!o(r=t.call(n)))return r;throw TypeError("Can't convert object to primitive value")}},function(n,e,t){var o=t(118)("keys"),r=t(109);n.exports=function(n){return o[n]||(o[n]=r(n))}},function(n,e,t){var o=t(83),r=t(85),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(n.exports=function(n,e){return i[n]||(i[n]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:t(102)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(n,e){n.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},,function(n,e,t){var o=t(101);n.exports=Object("z").propertyIsEnumerable(0)?Object:function(n){return"String"==o(n)?n.split(""):Object(n)}},,function(n,e,t){var o=t(103);n.exports=function(n){return Object(o(n))}},function(n,e){e.f=Object.getOwnPropertySymbols},function(n,e,t){var o=t(104),r=Math.min;n.exports=function(n){return n>0?r(o(n),9007199254740991):0}},function(n,e,t){n.exports=!t(88)&&!t(97)(function(){return 7!=Object.defineProperty(t(115)("div"),"a",{get:function(){return 7}}).a})},function(n,e,t){var o=t(94),r=t(98),i=t(133)(!1),a=t(117)("IE_PROTO");n.exports=function(n,e){var t,s=r(n),u=0,c=[];for(t in s)t!=a&&o(s,t)&&c.push(t);for(;e.length>u;)o(s,t=e[u++])&&(~i(c,t)||c.push(t));return c}},,,,,,function(n,e,t){var o=t(98),r=t(125),i=t(134);n.exports=function(n){return function(e,t,a){var s,u=o(e),c=r(u.length),f=i(a,c);if(n&&t!=t){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((n||f in u)&&u[f]===t)return n||f||0;return!n&&-1}}},function(n,e,t){var o=t(104),r=Math.max,i=Math.min;n.exports=function(n,e){return n=o(n),n<0?r(n+e,0):i(n,e)}},function(n,e){n.exports=function(n,e){for(var t=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],s=i[1],u=i[2],c=i[3],f={id:n+":"+r,css:s,media:u,sourceMap:c};o[a]?o[a].parts.push(f):t.push(o[a]={id:a,parts:[f]})}return t}},,,,,function(n,e,t){"use strict";e.__esModule=!0,e.default=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}},function(n,e,t){"use strict";e.__esModule=!0;var o=t(146),r=function(n){return n&&n.__esModule?n:{default:n}}(o);e.default=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()},,,,,function(n,e,t){n.exports={default:t(147),__esModule:!0}},function(n,e,t){t(148);var o=t(83).Object;n.exports=function(n,e,t){return o.defineProperty(n,e,t)}},function(n,e,t){var o=t(95);o(o.S+o.F*!t(88),"Object",{defineProperty:t(93).f})},,,,function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAABGdBTUEAALGPC/xhBQAAARdJREFUSA211lEOgyAMBmDBM/m+43iLuVt4nO3dM6n7TUqggrRYTRyw2X4phmZd97/GcZxwY/7EFefvsVjX9b1t22sYBrcsy9cS5fl9nBywZaWExUaPilAZKsQPVpVyzHv/med56oFYoyUM1gFaoldYAlqgNewE3kElWBZsQaVYEdSgGuwSlKBaDDkdPmpXLjFi0Cgols4ZrUujCEQwR+OEUgwx4RzGCXJz3hzoGQ2GmKSXUpInR3GFpS3V9l4RyDFso3Pu19Lwq2AOQ9fn71Ra6SVYwugdt6BFsIa1ollQirWgJ1CLadEEbMU0aADvYlL0AK0wCRr+l9LD2t5IcXwsHZmkl1phhKNBICetw4gtxR2+MJ7E+Xd5seERzv1CcgAAAABJRU5ErkJggg=="},,function(n,e,t){var o=t(155);"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t(92)("53cdea78",o,!1,{})},function(n,e,t){var o=t(100);e=n.exports=t(91)(!1),e.push([n.i,"#xmt-bind-alert{width:100%;height:40px;line-height:40px;text-align:center;background-color:#e5f9e7;font-size:14px;position:relative;overflow:hidden;z-index:10000;transition:height .4s linear}#xmt-bind-alert a{color:#5293e3;cursor:pointer;text-decoration:none}#xmt-bind-alert a:hover{background-color:transparent;color:#5293e3;text-decoration:none}#xmt-bind-alert.fail{background-color:#ffe4e4}#xmt-bind-alert #xmt-bind-hint-close{display:inline-block;float:right;width:14px;height:14px;margin-right:10px;margin-top:13px;background-image:url("+o(t(152))+");background-position:50%;background-size:contain;cursor:pointer}",""])},,function(n,e,t){n.exports={default:t(160),__esModule:!0}},,function(n,e,t){"use strict";var o=t(157),r=t.n(o),i=t(140),a=t.n(i),s=t(141),u=t.n(s),c=t(2),f=t.n(c),l=(t(154),function(n){chrome.extension.sendRequest({operation:"showBindHint",action:"show",platform:n},function(e){e.shouldShowHint&&(m.addTopAlert('检测到您已安装新媒体管家插件。&nbsp;&nbsp;&nbsp;&nbsp;<a id="xmt-bind-hint-gobind" href="javascript:;">立即绑定</a>&nbsp;&nbsp;<a id="xmt-bind-hint-nevershow" href="javascript:;">不再提示</a><span id="xmt-bind-hint-close"></span>',"long"),document.querySelector("#xmt-bind-hint-gobind").addEventListener("click",function(e){m.hideTopAlert(),m.binding(n)}),document.querySelector("#xmt-bind-hint-nevershow").addEventListener("click",function(e){m.hideTopAlert(),chrome.extension.sendRequest({operation:"showBindHint",action:"nevershow",platform:n})}),document.querySelector("#xmt-bind-hint-close").addEventListener("click",function(n){m.hideTopAlert()}))})}),p=function(){function n(){a()(this,n)}return u()(n,null,[{key:"setCookie",value:function(e,t){if("wxb"===e||"xb"===e)return void chrome.extension.sendRequest({operation:"setCookie",platform:e,cookies:void 0});chrome.extension.sendRequest({operation:"addAccount",action:"check",platform:e},function(o){o.canAddAccount?n.binding(e):(l(e),chrome.extension.sendRequest(r()({operation:"setCookie",platform:e,cookies:"qe"===e?document.cookie:void 0},t)))})}},{key:"binding",value:function(n,e){var t=d("正在绑定帐号至新媒体管家...","long"),o="qe"===n?document.cookie:null;chrome.extension.sendRequest({operation:"bindAccount",platform:n,cookies:o},function(n){n.status?t.setAlertText("您已成功绑定该帐号至新媒体管家！","succ",4e3):t.setAlertText("绑定帐号失败，请重试。","fail",4e3),"function"==typeof e&&e(n.status)})}},{key:"addTopAlert",value:function(n,e){d(n,e)}},{key:"hideTopAlert",value:function(){f()("#xmt-bind-alert").hide()}},{key:"addTabListener",value:function(n){chrome.extension.sendRequest({operation:"addTabListener",platform:n})}}]),n}(),d=function(n,e){e=e||4e3;var t=f()('<div id="xmt-bind-alert" style="z-index: 99999;">'+n+"</div>"),o=f()("#xmt-bind-alert");o&&o.length>0&&o.remove(),f()("body").prepend(t),t.css({height:"40px"});var r=void 0;return"long"!==e&&(r=setTimeout(function(){t.css({height:"0"})},e)),t.setAlertText=function(n,e,o){o=o||4e3,t.show(),t.text(n),t.css({height:"40px"}),"fail"===e?t.addClass("fail"):t.removeClass("fail"),clearTimeout(r),"long"!==o&&(r=setTimeout(function(){t.css({height:"0"})},o))},t},m=e.a=p},function(n,e,t){t(161),n.exports=t(83).Object.assign},function(n,e,t){var o=t(95);o(o.S+o.F,"Object",{assign:t(162)})},function(n,e,t){"use strict";var o=t(105),r=t(124),i=t(113),a=t(123),s=t(121),u=Object.assign;n.exports=!u||t(97)(function(){var n={},e={},t=Symbol(),o="abcdefghijklmnopqrst";return n[t]=7,o.split("").forEach(function(n){e[n]=n}),7!=u({},n)[t]||Object.keys(u({},e)).join("")!=o})?function(n,e){for(var t=a(n),u=arguments.length,c=1,f=r.f,l=i.f;u>c;)for(var p,d=s(arguments[c++]),m=f?o(d).concat(f(d)):o(d),v=m.length,h=0;v>h;)l.call(d,p=m[h++])&&(t[p]=d[p]);return t}:u},,,,,,,,,,,,,,,,,function(n,e,t){"use strict";var o=t(2),r=t.n(o),i={};i.wx=function(){var n={username:document.querySelector("input[name='account']").value.trim(),password:document.querySelector("input[name='password']").value.trim()};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"wx",action:"set",loginInfo:n})},i.wx_ta=function(){var n={username:document.querySelector("input[name='account']").value.trim(),password:document.querySelector("input[name='password']").value.trim()};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"wx_ta",action:"set",loginInfo:n})},i.tt=function(n){var e=r()(n.target).parents(".baseLogin"),t={username:r.a.trim(e.find('input[name="account"]').val()),password:r.a.trim(e.find('input[name="password"]').val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"tt",action:"set",loginInfo:t})},i.qe=function(n){var e=r()(n.target).parents(".login-panel"),t={username:r.a.trim(e.find('input[name="email"]').val()),password:r.a.trim(e.find('input[name="password"]').val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"qe",action:"set",loginInfo:t})},i.op=function(){var n={username:r.a.trim(r()("input[name='username']").val()),password:r.a.trim(r()("input[name='password']").val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"op",action:"set",loginInfo:n})},i.wb=function(n){var e=r()(n.target).parents(".W_login_form"),t={username:r.a.trim(e.find("#loginname").val()),password:r.a.trim(e.find("input[name='password']").val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"wb",action:"set",loginInfo:t})},i.wbType=function(n){var e=r()(n.target).parents(".layer_login_register_v2"),t={username:r.a.trim(e.find("input[name='username']").val()),password:r.a.trim(e.find("input[name='password']").val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"wb",action:"set",loginInfo:t})},i.bj=function(){var n={username:r.a.trim(r()("#TANGRAM__PSP_4__userName").val()),password:r.a.trim(r()("#TANGRAM__PSP_4__password").val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"bj",action:"set",loginInfo:n})},i.zh=function(){var n={username:r.a.trim(r()('.Login-content input[name="username"]').val()),password:r.a.trim(r()('.Login-content input[name="password"]').val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"zh",action:"set",loginInfo:n})},i.wy=function(){var n={type:"xmt-extension-postMessage",username:document.querySelector("input[name='email']").value.trim(),password:document.querySelector("input[name='password']").value.trim()};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"wy",action:"set",loginInfo:n})},i.dayu=function(){var n="";document.querySelector("#login_name_new")&&(n=document.querySelector("#login_name_new").value),0===n.length&&(n=document.querySelector("#login_name").value);var e={type:"xmt-extension-postMessage",username:n.trim(),password:document.querySelector("#password").value.trim()};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"uc",action:"set",loginInfo:e})},i.sh=function(){var n={username:r.a.trim(r()(".commmon-login-username input").val()),password:r.a.trim(r()(".commmon-login-password input").val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"sh",action:"set",loginInfo:n})},i.js=function(){var n={username:r.a.trim(r()('input[name="session[email_or_mobile_number]"]').val()),password:r.a.trim(r()('input[name="session[password]"]').val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"js",action:"set",loginInfo:n})},i.db=function(){var n={username:r.a.trim(r()("#form_email").val()),password:r.a.trim(r()("#form_password").val())};chrome.extension.sendRequest({operation:"userLoginInfo",platform:"db",action:"set",loginInfo:n})},e.a=i}]));