import{C as e,p as o,w as n,a as s,d as t,N as r}from"./p-8fe4b58b.js";const a="undefined"!=typeof Deno,p=!(a||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),c=(a&&Deno,p?process:a&&Deno,p?process:a&&Deno,()=>e&&e.supports&&e.supports("color","var(--c)")?s():__sc_import_web_components_library("./p-0ad0b6e8.js").then(()=>(o.o=n.__cssshim)?(!1).i():0)),i=()=>{o.o=n.__cssshim;const e=Array.from(t.querySelectorAll("script")).find(e=>RegExp(`/${r}(\\.esm)?\\.js($|\\?|#)`).test(e.src)||e.getAttribute("data-stencil-namespace")===r),a=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(a.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,n.location.href)).href,l(a.resourcesUrl,e),n.customElements?s(a):__sc_import_web_components_library("./p-3d1015c2.js").then(()=>a))},l=(e,o)=>{const s="__sc_import_"+r.replace(/\s|-/g,"_");try{n[s]=Function("w","return import(w);//"+Math.random())}catch(a){const r=new Map;n[s]=a=>{const p=new URL(a,e).href;let c=r.get(p);if(!c){const e=t.createElement("script");e.type="module",e.crossOrigin=o.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${p}'; window.${s}.m = m;`],{type:"application/javascript"})),c=new Promise(o=>{e.onload=()=>{o(n[s].m),e.remove()}}),r.set(p,c),t.head.appendChild(e)}return c}}};export{c as a,i as p}