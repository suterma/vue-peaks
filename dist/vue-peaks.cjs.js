"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),b=require("peaks.js"),I=l=>l&&typeof l=="object"&&"default"in l?l:{default:l},S=I(b),A=["src"],R={class:"peaks-controls"},C=e.createTextVNode("\xA0 "),h=e.createTextVNode("\xA0 "),B=e.defineComponent({__name:"AudioPeaks",props:{src:null,zoomviewElementId:null,zoomviewElement:null,overviewElementId:null,overviewElement:null,mediaElementId:null,mediaElement:null,options:null},setup(l,{expose:m}){const o=l,s=e.shallowRef(void 0),u=e.shallowRef(null),w=e.shallowRef(null),E=e.shallowRef(null),k=e.shallowRef(null),_=e.shallowRef(null),p=e.shallowRef(null),a=e.shallowRef(void 0);m({peaksInstance:s}),e.onMounted(()=>{g()}),e.onBeforeUnmount(()=>{N()});function g(){console.debug("AudioPeaks::createPeaksInstance:options:",o.options);const t=c(o.overviewElement,o.overviewElementId,u,w,"div"),n=c(o.zoomviewElement,o.zoomviewElementId,E,k,"div"),r=c(o.mediaElement,o.mediaElementId,_,p,"audio");o.options&&(o.options.containers={overview:t,zoomview:n},o.options.mediaElement=r);const v=o.options?o.options:{containers:{overview:t,zoomview:n},mediaElement:r,webAudio:{audioContext:new AudioContext},zoomLevels:[256,512,1024,2048,4096]};S.default.init(v,function(d,i){d&&console.error(d),s.value=i,a.value=i==null?void 0:i.zoom.getZoom()})}function N(){var t;(t=s.value)==null||t.destroy()}function c(t,n,r,v,d){if(t)return console.debug("AudioPeaks::Found elm: ",t),t;if(n)return console.debug("AudioPeaks::Found element by id: ",n),document.getElementById(""+n);const i=r.value;if(i)return console.debug("AudioPeaks::Found element by Ref: ",i),i;const z=v.value;if(z){const f=z.getElementsByTagName(d)[0];if(f)return console.debug("AudioPeaks::Found element by first in slot: ",f),f}}function P(){var t,n;(t=s.value)==null||t.zoom.zoomIn(),a.value=(n=s.value)==null?void 0:n.zoom.getZoom()}function V(){var t,n;(t=s.value)==null||t.zoom.zoomOut(),a.value=(n=s.value)==null?void 0:n.zoom.getZoom()}return(t,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createElementVNode("div",{ref_key:"overviewSlot",ref:w},[!o.overviewElementId&&!o.overviewElement?e.renderSlot(t.$slots,"overview",{key:0},()=>[e.createElementVNode("div",{class:"peaks-overview",ref_key:"overview",ref:u},null,512)],!0):e.createCommentVNode("",!0)],512),e.createElementVNode("div",{ref_key:"zoomviewSlot",ref:k},[!o.zoomviewElementId&&!o.zoomviewElement?e.renderSlot(t.$slots,"zoomview",{key:0},()=>[e.createElementVNode("div",{class:"peaks-zoomview",ref_key:"zoomview",ref:E},null,512)],!0):e.createCommentVNode("",!0)],512),e.createElementVNode("div",{ref_key:"audioSlot",ref:p},[!o.mediaElementId&&!o.mediaElement?e.renderSlot(t.$slots,"default",{key:0},()=>[e.createElementVNode("audio",{class:"peaks-audio",ref_key:"audio",ref:_,controls:""},[e.createElementVNode("source",{src:l.src},null,8,A)],512)],!0):e.createCommentVNode("",!0)],512),e.renderSlot(t.$slots,"controls",{},()=>[e.createElementVNode("div",R,[e.createElementVNode("button",{onClick:n[0]||(n[0]=r=>P())},"Zoom in"),C,e.createElementVNode("button",{onClick:n[1]||(n[1]=r=>V())},"Zoom out"),h,e.createElementVNode("span",null,"Zoom level: "+e.toDisplayString(e.unref(a)),1)])],!0)],64))}});const x=(l,m)=>{const o=l.__vccOpts||l;for(const[s,u]of m)o[s]=u;return o},y=x(B,[["__scopeId","data-v-da208bf3"]]),F={install:l=>{l.component("AudioPeaks",y)}};exports.AudioPeaks=y;exports.default=F;
//# sourceMappingURL=vue-peaks.cjs.js.map
