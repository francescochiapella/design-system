System.register([],(function(e){"use strict";return{execute:function(){e({B:void 0,I:void 0,L:void 0,T:void 0,a:void 0,b:v,g:d,h:s,k:void 0,r:c});var t;(function(e){e["real"]="reale";e["virtual"]="virtuale";e["essay"]="saggio"})(t||(t=e("L",{})));var r;(function(e){e["primary"]="primary";e["secondary"]="secondary";e["tertiary"]="tertiary"})(r||(r=e("a",{})));var n;(function(e){e["submit"]="submit";e["reset"]="reset";e["button"]="button"})(n||(n=e("B",{})));var o;(function(e){e["text"]="text";e["password"]="password";e["number"]="number";e["email"]="email";e["textarea"]="textarea";e["checkbox"]="checkbox";e["select"]="select"})(o||(o=e("I",{})));var a;(function(e){e["success"]="success";e["error"]="error";e["warning"]="warning"})(a||(a={}));var i;(function(e){e["TOP"]="TOP";e["BOTTOM"]="BOTTOM";e["LEFT"]="LEFT";e["RIGHT"]="RIGHT";e["NO_ARROW"]="NO_ARROW"})(i||(i=e("T",{})));var u;(function(e){e[e["TAB"]=9]="TAB";e[e["SPACE"]=32]="SPACE";e[e["ESC"]=27]="ESC";e[e["ENTER"]=13]="ENTER";e[e["ARROW_UP"]=38]="ARROW_UP";e[e["ARROW_DOWN"]=40]="ARROW_DOWN"})(u||(u=e("k",{})));function c(){return Math.random().toString(36).replace("0.","")}function s(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}if(e.keyCode===u.ENTER||e.keyCode===u.SPACE){e.preventDefault();t.apply(void 0,r)}}function v(e){if(e===void 0){e=null}if(!e)e=document.activeElement;if(e&&e.shadowRoot&&e.shadowRoot.activeElement){e=e.shadowRoot.activeElement;return v(e)}return e}function d(e,t){if(t===void 0){t=[]}t.push(e);if(e.parentElement){e=e.parentElement;return d(e,t)}else if(e.parentNode&&e.parentNode.host){e=e.parentNode.host;return d(e,t)}return t}}}}));