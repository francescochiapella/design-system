const e="web-components-library";let t,l,n,o=!1,s=!1,i=!1,r=!1,c=0,f=!1;const a="undefined"!=typeof window?window:{},u=a.CSS,p=a.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},b=(()=>(p.head.attachShadow+"").indexOf("[native")>-1)(),$=e=>Promise.resolve(e),m=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),y=(e,t,l)=>{l&&l.map(([l,n,o])=>{const s=h(e,l),i=w(t,o),r=g(l);d.ael(s,n,i,r),(t.o=t.o||[]).push(()=>d.rel(s,n,i,r))})},w=(e,t)=>l=>{256&e.t?e.s[t](l):(e.i=e.i||[]).push([t,l])},h=(e,t)=>4&t?p:8&t?a:e,g=e=>0!=(2&e),v="http://www.w3.org/1999/xlink",_=new WeakMap,j=e=>"sc-"+e.u,k={},O=e=>"object"==(e=typeof e)||"function"===e,M="undefined"!=typeof Deno,S=!(M||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),R=(M&&Deno,S?process:M&&Deno,S?process:M&&Deno,(e,t,...l)=>{let n=null,o=null,s=null,i=!1,r=!1,c=[];const f=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?f(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!O(n))&&(n+=""),i&&r?c[c.length-1].p+=n:c.push(i?x(null,n):n),r=i)};if(f(l),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=x(e,null);return a.$=t,c.length>0&&(a.m=c),a.h=o,a.g=s,a}),x=(e,t)=>({t:0,v:e,p:t,_:null,m:null,$:null,h:null,g:null}),C={},D=(e,t,l,n,o,s)=>{if(l!==n){let r=de(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=T(l),s=T(n);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(r||"o"!==t[0]||"n"!==t[1]){const f=O(n);if((r||f&&null!==n)&&!o)try{if(e.tagName.includes("-"))e[t]=n;else{let o=null==n?"":n;"list"===t?r=!1:null!=l&&e[t]==o||(e[t]=o)}}catch(i){}let a=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,a=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(a?e.removeAttributeNS(v,t):e.removeAttribute(t)):(!r||4&s||o)&&!f&&(n=!0===n?"":n,a?e.setAttributeNS(v,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):de(a,c)?c.slice(2):c[2]+t.slice(3),l&&d.rel(e,t,l,!1),n&&d.ael(e,t,n,!1)}},P=/\s/,T=e=>e?e.split(P):[],W=(e,t,l,n)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.$||k,i=t.$||k;for(n in s)n in i||D(o,n,s[n],void 0,l,t.t);for(n in i)D(o,n,s[n],i[n],l,t.t)},L=(e,s,c,f)=>{let a,u,d,b=s.m[c],$=0;if(o||(i=!0,"slot"===b.v&&(t&&f.classList.add(t+"-s"),b.t|=b.m?2:1)),null!==b.p)a=b._=p.createTextNode(b.p);else if(1&b.t)a=b._=p.createTextNode("");else{if(r||(r="svg"===b.v),a=b._=p.createElementNS(r?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&b.t?"slot-fb":b.v),r&&"foreignObject"===b.v&&(r=!1),W(null,b,r),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),b.m)for($=0;$<b.m.length;++$)u=L(e,b,$,a),u&&a.appendChild(u);"svg"===b.v?r=!1:"foreignObject"===a.tagName&&(r=!0)}return a["s-hn"]=n,3&b.t&&(a["s-sr"]=!0,a["s-cr"]=l,a["s-sn"]=b.g||"",d=e&&e.m&&e.m[c],d&&d.v===b.v&&e._&&U(e._,!1)),a},U=(e,t)=>{d.t|=1;const l=e.childNodes;for(let o=l.length-1;o>=0;o--){const e=l[o];e["s-hn"]!==n&&e["s-ol"]&&(F(e).insertBefore(e,A(e)),e["s-ol"].remove(),e["s-ol"]=void 0,i=!0),t&&U(e,t)}d.t&=-2},E=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=L(null,l,s,e),r&&(o[s]._=r,c.insertBefore(r,A(t))))},N=(e,t,l,n,o)=>{for(;t<=l;++t)(n=e[t])&&(o=n._,I(n),s=!0,o["s-ol"]?o["s-ol"].remove():U(o,!0),o.remove())},q=(e,t)=>e.v===t.v&&("slot"===e.v?e.g===t.g:e.h===t.h),A=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,H=(e,t)=>{const l=t._=e._,n=e.m,o=t.m,s=t.v,i=t.p;let c;null===i?(r="svg"===s||"foreignObject"!==s&&r,"slot"===s||W(e,t,r),null!==n&&null!==o?((e,t,l,n)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],p=t[a],d=n.length-1,b=n[0],$=n[d];for(;i<=a&&r<=d;)if(null==u)u=t[++i];else if(null==p)p=t[--a];else if(null==b)b=n[++r];else if(null==$)$=n[--d];else if(q(u,b))H(u,b),u=t[++i],b=n[++r];else if(q(p,$))H(p,$),p=t[--a],$=n[--d];else if(q(u,$))"slot"!==u.v&&"slot"!==$.v||U(u._.parentNode,!1),H(u,$),e.insertBefore(u._,p._.nextSibling),u=t[++i],$=n[--d];else if(q(p,b))"slot"!==u.v&&"slot"!==$.v||U(p._.parentNode,!1),H(p,b),e.insertBefore(p._,u._),p=t[--a],b=n[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].h&&t[f].h===b.h){c=f;break}c>=0?(s=t[c],s.v!==b.v?o=L(t&&t[r],l,c,e):(H(s,b),t[c]=void 0,o=s._),b=n[++r]):(o=L(t&&t[r],l,r,e),b=n[++r]),o&&F(u._).insertBefore(o,A(u._))}i>a?E(e,null==n[d+1]?null:n[d+1]._,l,n,r,d):r>d&&N(t,i,a)})(l,n,t,o):null!==o?(null!==e.p&&(l.textContent=""),E(l,null,t,o,0,o.length-1)):null!==n&&N(n,0,n.length-1),r&&"svg"===s&&(r=!1)):(c=l["s-cr"])?c.parentNode.textContent=i:e.p!==i&&(l.data=i)},V=e=>{let t,l,n,o,s,i,r=e.childNodes;for(l=0,n=r.length;l<n;l++)if(t=r[l],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<n;o++)if(r[o]["s-hn"]!==t["s-hn"])if(i=r[o].nodeType,""!==s){if(1===i&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[o].textContent.trim()){t.hidden=!0;break}V(t)}},z=[],B=e=>{let t,l,n,o,i,r,c=0,f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(l=t["s-cr"]))for(n=l.parentNode.childNodes,o=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(G(l,o)?(i=z.find(e=>e.j===l),s=!0,l["s-sn"]=l["s-sn"]||o,i?i.k=t:z.push({k:t,j:l}),l["s-sr"]&&z.map(e=>{G(e.j,l["s-sn"])&&(i=z.find(e=>e.j===l),i&&!e.k&&(e.k=i.k))})):z.some(e=>e.j===l)||z.push({j:l}));1===t.nodeType&&B(t)}},G=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,I=e=>{e.$&&e.$.ref&&e.$.ref(null),e.m&&e.m.map(I)},J=e=>ae(e).O,K=(e,t,l)=>{const n=J(e);return{emit:e=>Q(n,t,{bubbles:!!(4&l),composed:!!(2&l),cancelable:!!(1&l),detail:e})}},Q=(e,t,l)=>{const n=d.ce(t,l);return e.dispatchEvent(n),n},X=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.M=t))},Y=(e,t)=>{if(e.t|=16,!(4&e.t))return X(e,e.S),Oe(()=>Z(e,t));e.t|=512},Z=(e,t)=>{const l=e.s;let n;return t?(e.t|=256,e.i&&(e.i.map(([e,t])=>oe(l,e,t)),e.i=null),n=oe(l,"componentWillLoad")):n=oe(l,"componentWillUpdate"),n=se(n,()=>oe(l,"componentWillRender")),se(n,()=>ee(e,l,t))},ee=(e,r,c)=>{const f=e.O,a=f["s-rc"];c&&(e=>{const t=e.R,l=e.O,n=t.t,o=((e,t)=>{let l=j(t),n=ye.get(l);if(e=11===e.nodeType?e:p,n)if("string"==typeof n){let t,o=_.get(e=e.head||e);o||_.set(e,o=new Set),o.has(l)||(t=p.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),o&&o.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l})(b&&l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=o,l.classList.add(o+"-h"))})(e);((e,r)=>{const c=e.O,f=e.R,a=e.C||x(null,null),u=(e=>e&&e.v===C)(r)?r:R(null,null,r);if(n=c.tagName,u.v=null,u.t|=4,e.C=u,u._=a._=c.shadowRoot||c,t=c["s-sc"],l=c["s-cr"],o=b&&0!=(1&f.t),s=!1,H(a,u),d.t|=1,i){let e,t,l,n,o,s;B(u._);let i=0;for(;i<z.length;i++)e=z[i],t=e.j,t["s-ol"]||(l=p.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<z.length;i++)if(e=z[i],t=e.j,e.k){for(n=e.k.parentNode,o=e.k.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(s=l["s-nr"],s&&s["s-sn"]===t["s-sn"]&&n===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&n!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&V(u._),d.t&=-2,z.length=0})(e,te(e,r)),a&&(a.map(e=>e()),f["s-rc"]=void 0);{const t=f["s-p"],l=()=>le(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},te=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(l){be(l)}return t},le=e=>{const t=e.O,l=e.s,n=e.S;64&e.t||(e.t|=64,ie(t),oe(l,"componentDidLoad"),e.D(t),n||ne()),e.P(t),e.M&&(e.M(),e.M=void 0),512&e.t&&ke(()=>Y(e,!1)),e.t&=-517},ne=()=>{ie(p.documentElement),d.t|=2,ke(()=>Q(a,"appload",{detail:{namespace:"web-components-library"}}))},oe=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(n){be(n)}},se=(e,t)=>e&&e.then?e.then(t):t(),ie=e=>e.classList.add("hydrated"),re=(e,t,l)=>{if(t.T){e.watchers&&(t.W=e.watchers);const n=Object.entries(t.T),o=e.prototype;if(n.map(([e,[n]])=>{31&n||2&l&&32&n?Object.defineProperty(o,e,{get(){return((e,t)=>ae(this).L.get(t))(0,e)},set(l){((e,t,l,n)=>{const o=ae(e),s=o.L.get(t),i=o.t,r=o.s;if(l=((e,t)=>null==e||O(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.T[t][0]),!(8&i&&void 0!==s||l===s)&&(o.L.set(t,l),r)){if(n.W&&128&i){const e=n.W[t];e&&e.map(e=>{try{r[e](l,s,t)}catch(n){be(n)}})}2==(18&i)&&Y(o,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0}):1&l&&64&n&&Object.defineProperty(o,e,{value(...t){const l=ae(this);return l.U.then(()=>l.s[e](...t))}})}),1&l){const t=new Map;o.attributeChangedCallback=function(e,l,n){d.jmp(()=>{const l=t.get(e);this[l]=(null!==n||"boolean"!=typeof this[l])&&n})},e.observedAttributes=n.filter(([e,t])=>15&t[0]).map(([e,l])=>{const n=l[1]||e;return t.set(n,e),n})}}return e},ce=(e,t={})=>{const l=[],n=t.exclude||[],o=a.customElements,s=p.head,i=s.querySelector("meta[charset]"),r=p.createElement("style"),c=[];let f,u=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",p.baseURI).href,t.syncQueue&&(d.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],T:t[2],N:t[3]};s.T=t[2],s.N=t[3],s.W={},!b&&1&s.t&&(s.t|=8);const i=s.u,r=class extends HTMLElement{constructor(e){super(e),pe(e=this,s),1&s.t&&(b?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),u?c.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=ae(e),l=t.R,n=()=>{};if(1&t.t)y(e,t,l.N);else{t.t|=1,12&l.t&&(e=>{const t=e["s-cr"]=p.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){X(t,t.S=l);break}}l.T&&Object.entries(l.T).map(([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}}),ke(()=>(async(e,t,l,n,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=me(l)).then){const e=()=>{};o=await o,e()}o.isProxied||(l.W=o.watchers,re(o,l,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){be(r)}t.t&=-9,t.t|=128,e()}if(o.style){let e=o.style;const t=j(l);if(!ye.has(t)){const n=()=>{};8&l.t&&(e=await __sc_import_web_components_library("./p-7faff4bb.js").then(l=>l.scopeCss(e,t,!1))),((e,t,l)=>{let n=ye.get(e);m&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,ye.set(e,n)})(t,e,!!(1&l.t)),n()}}}const s=t.S,i=()=>Y(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,l))}n()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=ae(this);e.o&&(e.o.map(e=>e()),e.o=void 0)}})())}forceUpdate(){(()=>{{const e=ae(this);e.O.isConnected&&2==(18&e.t)&&Y(e,!1)}})()}componentOnReady(){return ae(this).q}};s.A=e[0],n.includes(i)||o.get(i)||(l.push(i),o.define(i,re(r,s,1)))})),r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),u=!1,c.length?c.map(e=>e.connectedCallback()):d.jmp(()=>f=setTimeout(ne,30))},fe=new WeakMap,ae=e=>fe.get(e),ue=(e,t)=>fe.set(t.s=e,t),pe=(e,t)=>{const l={t:0,O:e,R:t,L:new Map};return l.U=new Promise(e=>l.P=e),l.q=new Promise(e=>l.D=e),e["s-p"]=[],e["s-rc"]=[],y(e,l,t.N),fe.set(e,l)},de=(e,t)=>t in e,be=e=>console.error(e),$e=new Map,me=e=>{const t=e.u.replace(/-/g,"_"),l=e.A,n=$e.get(l);return n?n[t]:__sc_import_web_components_library(`./${l}.entry.js`).then(e=>($e.set(l,e),e[t]),be)},ye=new Map,we=[],he=[],ge=[],ve=(e,t)=>l=>{e.push(l),f||(f=!0,t&&4&d.t?ke(je):d.raf(je))},_e=(e,t)=>{let l=0,n=0;for(;l<e.length&&(n=performance.now())<t;)try{e[l++](n)}catch(o){be(o)}l===e.length?e.length=0:0!==l&&e.splice(0,l)},je=()=>{c++,(e=>{for(let l=0;l<e.length;l++)try{e[l](performance.now())}catch(t){be(t)}e.length=0})(we);{const e=2==(6&d.t)?performance.now()+14*Math.ceil(.1*c):1/0;_e(he,e),_e(ge,e),he.length>0&&(ge.push(...he),he.length=0),(f=we.length+he.length+ge.length>0)?d.raf(je):c=0}},ke=e=>$().then(e),Oe=ve(he,!0);export{u as C,e as N,$ as a,ce as b,K as c,p as d,J as g,R as h,d as p,ue as r,a as w}