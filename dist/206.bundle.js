"use strict";(self.webpackChunkimage_transform=self.webpackChunkimage_transform||[]).push([[206],{206:(e,n,t)=>{t.a(e,(async(e,r)=>{try{t.r(n),t.d(n,{__wbg_log_f740dc2253ea759b:()=>i.e6,__wbg_set_wasm:()=>i.lI,__wbindgen_init_externref_table:()=>i.bL,__wbindgen_string_new:()=>i.yc,__wbindgen_throw:()=>i.Qn,grayscale:()=>i.CM});var o=t(650),i=t(938),_=e([o]);o=(_.then?(await _)():_)[0],(0,i.lI)(o),o.__wbindgen_start(),r()}catch(e){r(e)}}))},938:(e,n,t)=>{let r;function o(e){r=e}t.d(n,{CM:()=>u,Qn:()=>w,bL:()=>b,e6:()=>g,lI:()=>o,yc:()=>a});let i=new("undefined"==typeof TextDecoder?(0,module.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});i.decode();let _=null;function c(){return null!==_&&0!==_.byteLength||(_=new Uint8Array(r.memory.buffer)),_}function l(e,n){return e>>>=0,i.decode(c().subarray(e,e+n))}let d=0,f=new("undefined"==typeof TextEncoder?(0,module.require)("util").TextEncoder:TextEncoder)("utf-8");const s="function"==typeof f.encodeInto?function(e,n){return f.encodeInto(e,n)}:function(e,n){const t=f.encode(e);return n.set(t),{read:e.length,written:t.length}};function u(e){let n,t;try{const o=function(e,n,t){if(void 0===t){const t=f.encode(e),r=n(t.length,1)>>>0;return c().subarray(r,r+t.length).set(t),d=t.length,r}let r=e.length,o=n(r,1)>>>0;const i=c();let _=0;for(;_<r;_++){const n=e.charCodeAt(_);if(n>127)break;i[o+_]=n}if(_!==r){0!==_&&(e=e.slice(_)),o=t(o,r,r=_+3*e.length,1)>>>0;const n=c().subarray(o+_,o+r);_+=s(e,n).written,o=t(o,r,_,1)>>>0}return d=_,o}(e,r.__wbindgen_malloc,r.__wbindgen_realloc),i=d,_=r.grayscale(o,i);return n=_[0],t=_[1],l(_[0],_[1])}finally{r.__wbindgen_free(n,t,1)}}function a(e,n){return l(e,n)}const g="function"==typeof console.log?console.log:()=>{throw new Error("console.log is not defined")};function w(e,n){throw new Error(l(e,n))}function b(){const e=r.__wbindgen_export_0,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}},650:(e,n,t)=>{var r=t(938);e.exports=t.v(n,e.id,"0f70bedf4f7ee363c1e7",{"./index_bg.js":{__wbindgen_string_new:r.yc,__wbg_log_f740dc2253ea759b:r.e6,__wbindgen_throw:r.Qn,__wbindgen_init_externref_table:r.bL}})}}]);