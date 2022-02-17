var LocalEchoController=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e,r){var n=void 0!==typeof JSON?JSON:r(1),i=r(4),s=r(5),o=r(6);e.quote=function(t){return i(t,function(t){return t&&"object"==typeof t?t.op.replace(/(.)/g,"\\$1"):/["\s]/.test(t)&&!/'/.test(t)?"'"+t.replace(/(['\\])/g,"\\$1")+"'":/["'\s]/.test(t)?'"'+t.replace(/(["\\$`!])/g,"\\$1")+'"':String(t).replace(/([#!"$&'()*,:;<=>?@\[\\\]^`{|}])/g,"\\$1")}).join(" ")};for(var u="(?:"+["\\|\\|","\\&\\&",";;","\\|\\&","[&;()|<>]"].join("|")+")",a="(\\\\['\"|&;()<> \\t]|[^\\s'\"|&;()<> \\t])+",h='"((\\\\"|[^"])*?)"',c="'((\\\\'|[^'])*?)'",l="",f=0;f<4;f++)l+=(Math.pow(16,8)*Math.random()).toString(16);e.parse=function(t,e,r){var f=function(t,e,r){var o=new RegExp(["("+u+")","("+a+"|"+h+"|"+c+")*"].join("|"),"g"),f=s(t.match(o),Boolean),p=!1;if(!f)return[];e||(e={});r||(r={});return i(f,function(t,i){if(!p){if(RegExp("^"+u+"$").test(t))return{op:t};for(var s=r.escape||"\\",o=!1,a=!1,h="",c=!1,v=0,m=t.length;v<m;v++){var d=t.charAt(v);if(c=c||!o&&("*"===d||"?"===d),a)h+=d,a=!1;else if(o)d===o?o=!1:"'"==o?h+=d:d===s?(v+=1,d=t.charAt(v),h+='"'===d||d===s||"$"===d?d:s+d):h+="$"===d?y():d;else if('"'===d||"'"===d)o=d;else{if(RegExp("^"+u+"$").test(d))return{op:t};if(RegExp("^#$").test(d))return p=!0,h.length?[h,{comment:t.slice(v+1)+f.slice(i+1).join(" ")}]:[{comment:t.slice(v+1)+f.slice(i+1).join(" ")}];d===s?a=!0:h+="$"===d?y():d}}return c?{op:"glob",pattern:h}:h}function y(){var r,i;if(v+=1,"{"===t.charAt(v)){if(v+=1,"}"===t.charAt(v))throw new Error("Bad substitution: "+t.substr(v-2,3));if((r=t.indexOf("}",v))<0)throw new Error("Bad substitution: "+t.substr(v));i=t.substr(v,r-v),v=r}else/[*@#?$!_\-]/.test(t.charAt(v))?(i=t.charAt(v),v+=1):(r=t.substr(v).match(/[^\w\d_]/))?(i=t.substr(v,r.index),v+=r.index-1):(i=t.substr(v),v=t.length);return function(t,r,i){var s="function"==typeof e?e(i):e[i];void 0===s&&(s="");return"object"==typeof s?r+l+n.stringify(s)+l:r+s}(0,"",i)}}).reduce(function(t,e){return void 0===e?t:t.concat(e)},[])}(t,e,r);return"function"!=typeof e?f:o(f,function(t,e){if("object"==typeof e)return t.concat(e);var r=e.split(RegExp("("+l+".*?"+l+")","g"));return 1===r.length?t.concat(r[0]):t.concat(i(s(r,Boolean),function(t){return RegExp("^"+l).test(t)?n.parse(t.split(l)[1]):t}))},[])}},function(t,e,r){e.parse=r(2),e.stringify=r(3)},function(t,e){var r,n,i,s,o={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},u=function(t){throw{name:"SyntaxError",message:t,at:r,text:i}},a=function(t){return t&&t!==n&&u("Expected '"+t+"' instead of '"+n+"'"),n=i.charAt(r),r+=1,n},h=function(){var t,e="";for("-"===n&&(e="-",a("-"));n>="0"&&n<="9";)e+=n,a();if("."===n)for(e+=".";a()&&n>="0"&&n<="9";)e+=n;if("e"===n||"E"===n)for(e+=n,a(),"-"!==n&&"+"!==n||(e+=n,a());n>="0"&&n<="9";)e+=n,a();if(t=+e,isFinite(t))return t;u("Bad number")},c=function(){var t,e,r,i="";if('"'===n)for(;a();){if('"'===n)return a(),i;if("\\"===n)if(a(),"u"===n){for(r=0,e=0;e<4&&(t=parseInt(a(),16),isFinite(t));e+=1)r=16*r+t;i+=String.fromCharCode(r)}else{if("string"!=typeof o[n])break;i+=o[n]}else i+=n}u("Bad string")},l=function(){for(;n&&n<=" ";)a()};s=function(){switch(l(),n){case"{":return function(){var t,e={};if("{"===n){if(a("{"),l(),"}"===n)return a("}"),e;for(;n;){if(t=c(),l(),a(":"),Object.hasOwnProperty.call(e,t)&&u('Duplicate key "'+t+'"'),e[t]=s(),l(),"}"===n)return a("}"),e;a(","),l()}}u("Bad object")}();case"[":return function(){var t=[];if("["===n){if(a("["),l(),"]"===n)return a("]"),t;for(;n;){if(t.push(s()),l(),"]"===n)return a("]"),t;a(","),l()}}u("Bad array")}();case'"':return c();case"-":return h();default:return n>="0"&&n<="9"?h():function(){switch(n){case"t":return a("t"),a("r"),a("u"),a("e"),!0;case"f":return a("f"),a("a"),a("l"),a("s"),a("e"),!1;case"n":return a("n"),a("u"),a("l"),a("l"),null}u("Unexpected '"+n+"'")}()}},t.exports=function(t,e){var o;return i=t,r=0,n=" ",o=s(),l(),n&&u("Syntax error"),"function"==typeof e?function t(r,n){var i,s,o=r[n];if(o&&"object"==typeof o)for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(void 0!==(s=t(o,i))?o[i]=s:delete o[i]);return e.call(r,n,o)}({"":o},""):o}},function(t,e){var r,n,i,s=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function u(t){return s.lastIndex=0,s.test(t)?'"'+t.replace(s,function(t){var e=o[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}t.exports=function(t,e,s){var o;if(r="",n="","number"==typeof s)for(o=0;o<s;o+=1)n+=" ";else"string"==typeof s&&(n=s);if(i=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return function t(e,s){var o,a,h,c,l,f=r,p=s[e];switch(p&&"object"==typeof p&&"function"==typeof p.toJSON&&(p=p.toJSON(e)),"function"==typeof i&&(p=i.call(s,e,p)),typeof p){case"string":return u(p);case"number":return isFinite(p)?String(p):"null";case"boolean":case"null":return String(p);case"object":if(!p)return"null";if(r+=n,l=[],"[object Array]"===Object.prototype.toString.apply(p)){for(c=p.length,o=0;o<c;o+=1)l[o]=t(o,p)||"null";return h=0===l.length?"[]":r?"[\n"+r+l.join(",\n"+r)+"\n"+f+"]":"["+l.join(",")+"]",r=f,h}if(i&&"object"==typeof i)for(c=i.length,o=0;o<c;o+=1)"string"==typeof(a=i[o])&&(h=t(a,p))&&l.push(u(a)+(r?": ":":")+h);else for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(h=t(a,p))&&l.push(u(a)+(r?": ":":")+h);return h=0===l.length?"{}":r?"{\n"+r+l.join(",\n"+r)+"\n"+f+"}":"{"+l.join(",")+"}",r=f,h}}("",{"":t})}},function(t,e){t.exports=function(t,e){if(t.map)return t.map(e);for(var n=[],i=0;i<t.length;i++){var s=t[i];r.call(t,i)&&n.push(e(s,i,t))}return n};var r=Object.prototype.hasOwnProperty},function(t,e){t.exports=function(t,e){if(t.filter)return t.filter(e);for(var n=[],i=0;i<t.length;i++)r.call(t,i)&&e(t[i],i,t)&&n.push(t[i]);return n};var r=Object.prototype.hasOwnProperty},function(t,e){var r=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var i=arguments.length>=3;if(i&&t.reduce)return t.reduce(e,n);if(t.reduce)return t.reduce(e);for(var s=0;s<t.length;s++)r.call(t,s)&&(i?n=e(n,t[s],s):(n=t[s],i=!0));return n}},function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}r.r(e);var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e,this.entries=[],this.cursor=0}return function(t,e,r){e&&n(t.prototype,e),r&&n(t,r)}(t,[{key:"push",value:function(t){""!==t.trim()&&(t!=this.entries[this.entries.length-1]&&(this.entries.push(t),this.entries.length>this.size&&this.entries.pop(0),this.cursor=this.entries.length))}},{key:"rewind",value:function(){this.cursor=this.entries.length}},{key:"getPrevious",value:function(){var t=Math.max(0,this.cursor-1);return this.cursor=t,this.entries[t]}},{key:"getNext",value:function(){var t=Math.min(this.entries.length,this.cursor+1);return this.cursor=t,this.entries[t]}}]),t}(),s=r(0);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(t){for(var e,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],i=/\w+/g;e=i.exec(t);)r?n.push(e.index):n.push(e.index+e[0].length);return n}function a(t,e){var r=u(t,!0).reverse().find(function(t){return t<e});return null==r?0:r}function h(t,e,r){for(var n=0,i=0,s=0;s<e;++s){"\n"==t.charAt(s)?(i=0,n+=1):(i+=1)>r&&(i=0,n+=1)}return{row:n,col:i}}function c(t,e){return h(t,t.length,e).row+1}function l(t){return null!=t.match(/[^\\][ \t]$/m)}function f(t){return""===t.trim()?"":l(t)?"":Object(s.parse)(t).pop()||""}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.term=e,this._handleTermData=this.handleTermData.bind(this),this._handleTermResize=this.handleTermResize.bind(this),this.history=new i(r.historySize||10),this.maxAutocompleteEntries=r.maxAutocompleteEntries||100,this._autocompleteHandlers=[],this._active=!1,this._input="",this._cursor=0,this._activePrompt=null,this._activeCharPrompt=null,this._useContinuationPrompt=!0,this._termSize={cols:0,rows:0},this._disposables=[],e&&(e.loadAddon?e.loadAddon(this):this.attach())}return function(t,e,r){e&&p(t.prototype,e),r&&p(t,r)}(t,[{key:"activate",value:function(t){this.term=t,this.attach()}},{key:"dispose",value:function(){this.detach()}},{key:"detach",value:function(){this.term.off?(this.term.off("data",this._handleTermData),this.term.off("resize",this._handleTermResize)):(this._disposables.forEach(function(t){return t.dispose()}),this._disposables=[])}},{key:"attach",value:function(){this.term.on?(this.term.on("data",this._handleTermData),this.term.on("resize",this._handleTermResize)):(this._disposables.push(this.term.onData(this._handleTermData)),this._disposables.push(this.term.onResize(this._handleTermResize))),this._termSize={cols:this.term.cols,rows:this.term.rows}}},{key:"addAutocompleteHandler",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];this._autocompleteHandlers.push({fn:t,args:r})}},{key:"removeAutocompleteHandler",value:function(t){var e=this._autocompleteHandlers.findIndex(function(e){return e.fn===t});-1!==e&&this._autocompleteHandlers.splice(e,1)}},{key:"read",value:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"> ";return new Promise(function(n,i){e.term.write(t),e._activePrompt={prompt:t,continuationPrompt:r,resolve:n,reject:i},e._input="",e._cursor=0,e._active=!0})}},{key:"readChar",value:function(t){var e=this;return new Promise(function(r,n){e.term.write(t),e._activeCharPrompt={prompt:t,resolve:r,reject:n}})}},{key:"abortRead",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"aborted";null==this._activePrompt&&null==this._activeCharPrompt||this.term.write("\r\n"),null!=this._activePrompt&&(this._activePrompt.reject(t),this._activePrompt=null),null!=this._activeCharPrompt&&(this._activeCharPrompt.reject(t),this._activeCharPrompt=null),this._active=!1}},{key:"println",value:function(t){this.print(t+"\n")}},{key:"print",value:function(t){var e=t.replace(/[\r\n]+/g,"\n");this.term.write(e.replace(/\n/g,"\r\n"))}},{key:"printWide",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0==t.length)return println("");for(var r=t.reduce(function(t,e){return Math.max(t,e.length)},0)+e,n=Math.floor(this._termSize.cols/r),i=Math.ceil(t.length/n),s=0,o=0;o<i;++o){for(var u="",a=0;a<n;++a)if(s<t.length){var h=t[s++];u+=h+=" ".repeat(r-h.length)}this.println(u)}}},{key:"applyPrompts",value:function(t){var e=(this._activePrompt||{}).prompt||"",r=(this._activePrompt||{}).continuationPrompt||"";return e+t.replace(/\n/g,"\n"+r)}},{key:"applyPromptOffset",value:function(t,e){return this.applyPrompts(t.substr(0,e)).length}},{key:"setUseContinuationPrompt",value:function(t){self._useContinuationPrompt=t}},{key:"clearInput",value:function(){for(var t=this.applyPrompts(this._input),e=c(t,this._termSize.cols),r=h(t,this.applyPromptOffset(this._input,this._cursor),this._termSize.cols),n=(r.col,e-r.row-1),i=0;i<n;++i)this.term.write("[E");this.term.write("\r[K");for(i=1;i<e;++i)this.term.write("[F[K")}},{key:"setInput",value:function(t){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&this.clearInput();var e=this.applyPrompts(t);this.print(e),this._cursor>t.length&&(this._cursor=t.length);var r=this.applyPromptOffset(t,this._cursor),n=c(e,this._termSize.cols),i=h(e,r,this._termSize.cols),s=i.col,o=n-i.row-1;this.term.write("\r");for(var u=0;u<o;++u)this.term.write("[F");for(u=0;u<s;++u)this.term.write("[C");this._input=t}},{key:"printAndRestartPrompt",value:function(t){var e=this,r=this._cursor;this.setCursor(this._input.length),this.term.write("\r\n");var n=function(){e._cursor=r,e.setInput(e._input)},i=t();null==i?n():i.then(n)}},{key:"setCursor",value:function(t){t<0&&(t=0),t>this._input.length&&(t=this._input.length);var e=this.applyPrompts(this._input),r=(c(e,this._termSize.cols),h(e,this.applyPromptOffset(this._input,this._cursor),this._termSize.cols)),n=r.col,i=r.row,s=h(e,this.applyPromptOffset(this._input,t),this._termSize.cols),o=s.col,u=s.row;if(u>i)for(var a=i;a<u;++a)this.term.write("[B");else for(var l=u;l<i;++l)this.term.write("[A");if(o>n)for(var f=n;f<o;++f)this.term.write("[C");else for(var p=o;p<n;++p)this.term.write("[D");this._cursor=t}},{key:"handleCursorMove",value:function(t){if(t>0){var e=Math.min(t,this._input.length-this._cursor);this.setCursor(this._cursor+e)}else if(t<0){var r=Math.max(t,-this._cursor);this.setCursor(this._cursor+r)}}},{key:"handleCursorErase",value:function(t){var e=this._cursor,r=this._input;if(t){if(e<=0)return;var n=r.substr(0,e-1)+r.substr(e);this.clearInput(),this._cursor-=1,this.setInput(n,!1)}else{var i=r.substr(0,e)+r.substr(e+1);this.setInput(i)}}},{key:"handleCursorInsert",value:function(t){var e=this._cursor,r=this._input,n=r.substr(0,e)+t+r.substr(e);this._cursor+=t.length,this.setInput(n)}},{key:"handleReadComplete",value:function(){this.history&&this.history.push(this._input),this._activePrompt&&(this._activePrompt.resolve(this._input),this._activePrompt=null),this.term.write("\r\n"),this._active=!1}},{key:"handleTermResize",value:function(t){var e=t.rows,r=t.cols;this.clearInput(),this._termSize={cols:r,rows:e},this.setInput(this._input,!1)}},{key:"handleTermData",value:function(t){var e=this;if(this._active){if(null!=this._activeCharPrompt)return this._activeCharPrompt.resolve(t),this._activeCharPrompt=null,void this.term.write("\r\n");if(t.length>3&&27!==t.charCodeAt(0)){var r=t.replace(/[\r\n]+/g,"\r");Array.from(r).forEach(function(t){return e.handleData(t)})}else this.handleData(t)}}},{key:"handleData",value:function(t){var e=this;if(this._active){var r,n=t.charCodeAt(0);if(27==n)switch(t.substr(1)){case"[A":if(this.history){var i=this.history.getPrevious();i&&(this.setInput(i),this.setCursor(i.length))}break;case"[B":if(this.history){var h=this.history.getNext();h||(h=""),this.setInput(h),this.setCursor(h.length)}break;case"[D":this.handleCursorMove(-1);break;case"[C":this.handleCursorMove(1);break;case"[3~":this.handleCursorErase(!1);break;case"[F":this.setCursor(this._input.length);break;case"[H":this.setCursor(0);break;case"b":null!=(r=a(this._input,this._cursor))&&this.setCursor(r);break;case"f":null!=(r=function(t,e){var r=u(t,!1).find(function(t){return t>e});return null==r?t.length:r}(this._input,this._cursor))&&this.setCursor(r);break;case"":null!=(r=a(this._input,this._cursor))&&(this.setInput(this._input.substr(0,r)+this._input.substr(this._cursor)),this.setCursor(r))}else if(n<32||127===n)switch(t){case"\r":this._useContinuationPrompt&&function(t){return""!=t.trim()&&((t.match(/'/g)||[]).length%2!=0||(t.match(/"/g)||[]).length%2!=0||""==t.split(/(\|\||\||&&)/g).pop().trim()||!(!t.endsWith("\\")||t.endsWith("\\\\")))}(this._input)?this.handleCursorInsert("\n"):this.handleReadComplete();break;case"":this.handleCursorErase(!0);break;case"\t":if(this._autocompleteHandlers.length>0){var c=this._input.substr(0,this._cursor),p=l(c),v=function(t,e){var r=Object(s.parse)(e),n=r.length-1,i=r[n]||"";return""===e.trim()?(n=0,i=""):l(e)&&(n+=1,i=""),t.reduce(function(t,e){var i=e.fn,s=e.args;try{return t.concat(i.apply(void 0,[n,r].concat(o(s))))}catch(e){return console.error("Auto-complete error:",e),t}},[]).filter(function(t){return t.startsWith(i)})}(this._autocompleteHandlers,c);if(v.sort(),0===v.length)p||this.handleCursorInsert(" ");else if(1===v.length){var m=f(c);this.handleCursorInsert(v[0].substr(m.length)+" ")}else if(v.length<=this.maxAutocompleteEntries){var d=function t(e,r){if(e.length>=r[0].length)return e;var n=e;e+=r[0].slice(e.length,e.length+1);for(var i=0;i<r.length;i++){if(!r[i].startsWith(n))return null;if(!r[i].startsWith(e))return n}return t(e,r)}(c,v);if(d){var y=f(c);this.handleCursorInsert(d.substr(y.length))}this.printAndRestartPrompt(function(){e.printWide(v)})}else this.printAndRestartPrompt(function(){return e.readChar("Display all ".concat(v.length," possibilities? (y or n)")).then(function(t){"y"!=t&&"Y"!=t||e.printWide(v)})})}else this.handleCursorInsert("    ");break;case"":this.setCursor(this._input.length),this.term.write("^C\r\n"+((this._activePrompt||{}).prompt||"")),this._input="",this._cursor=0,this.history&&this.history.rewind()}else this.handleCursorInsert(t)}}}]),t}();r.d(e,"HistoryController",function(){return i});e.default=v}]).default;
//# sourceMappingURL=local-echo.js.map