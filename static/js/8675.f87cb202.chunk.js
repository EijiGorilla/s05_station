"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[8675,5840],{45840:(e,t,i)=>{i.r(t),i.d(t,{CIMSymbolRasterizer:()=>u});var n=i(85504),a=i(16770);class l{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}async fetchResource(e,t){const i=this._resourceMap.get(e);if(i)return{width:i.width,height:i.height};let n=this._inFlightResourceMap.get(e);return n?n.then((e=>({width:e.width,height:e.height}))):(n=(0,a.M5)(e,t),this._inFlightResourceMap.set(e,n),n.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,n.Al)(e)}}var s=i(16355),r=i(67855),o=i(48988),h=i(97763);const c=96/72;class u{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new l}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,i,n,a,l,s,c,u){if(!e)return null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:y}=d;l||(l=(0,h.n5)(y));const w=await o.$.resolveSymbolOverrides(d,t,this._spatialReference,a,l,s,c),m=this._cimResourceManager,p=[];r.wp.fetchResources(w,m,p),r.wp.fetchFonts(w,m,p),p.length>0&&await Promise.all(p);const{width:f,height:M}=i,v=g(l,f,M,n),b=r.wp.getEnvelope(w,v,m);if(!b)return null;let R=1,C=0,_=0;switch(y.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;b.width>f&&(e=f/b.width);let t=1;b.height>M&&(t=M/b.height),"preview"===n&&(b.width<f&&(e=f/b.width),b.height<M&&(t=M/b.height)),R=Math.min(e,t),C=b.x+b.width/2,_=b.y+b.height/2}break;case"CIMLineSymbol":{(u||b.height>M)&&(R=M/b.height),_=b.y+b.height/2;const e=b.x*R+f/2,t=(b.x+b.width)*R+f/2,{paths:i}=v;i[0][0][0]-=e/R,i[0][2][0]-=(t-f)/R}break;case"CIMPolygonSymbol":{C=b.x+b.width/2,_=b.y+b.height/2;const e=b.x*R+f/2,t=(b.x+b.width)*R+f/2,i=b.y*R+M/2,n=(b.y+b.height)*R+M/2,{rings:a}=v;e<0&&(a[0][0][0]-=e,a[0][3][0]-=e,a[0][4][0]-=e),i<0&&(a[0][0][1]+=i,a[0][1][1]+=i,a[0][4][1]+=i),t>f&&(a[0][1][0]-=t-f,a[0][2][0]-=t-f),n>M&&(a[0][2][1]+=n-M,a[0][3][1]+=n-M)}}const S={type:"cim",data:{type:"CIMSymbolReference",symbol:w}};return this.rasterize(S,f,M,C,_,R,l,1,v)}rasterize(e,t,i,n,a,l,r){let o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:y}=d,w=this._canvas,m=(window.devicePixelRatio||1)*c;w.width=t*m,w.height=i*m,r||(r=(0,h.n5)(y)),u||(u=g(r,t,i,"legend")),w.width+=2*o,w.height+=2*o;const p=w.getContext("2d",{willReadFrequently:!0}),f=s.IT.createIdentity();return f.translate(-n,-a),f.scale(l*m,-l*m),f.translate(t*m/2+o,i*m/2+o),p.clearRect(0,0,w.width,w.height),new s.Rj(p,this._cimResourceManager,f,!0).drawSymbol(y,u),p.getImageData(0,0,w.width,w.height)}}function g(e,t,i,n){const a=-t/2+1,l=t/2-1,s=i/2-1,r=-i/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[a,0],[0,0],[l,0]]]};default:return"legend"===n?{rings:[[[a,s],[l,0],[l,r],[a,r],[a,s]]]}:{rings:[[[a,s],[l,s],[l,r],[a,r],[a,s]]]}}}},28675:(e,t,i)=>{i.d(t,{previewCIMSymbol:()=>m});var n=i(76931),a=i(67855),l=i(45840),s=i(48988),r=i(97763),o=i(65709),h=i(26291);const c=new l.CIMSymbolRasterizer(null),u=(0,n.PN)(o.CB.size),g=(0,n.PN)(o.CB.maxSize),d=(0,n.PN)(o.CB.lineWidth),y=1;async function w(e,t,i){const n=null===t||void 0===t?void 0:t.size;let l=null!=n&&"object"==typeof n&&"width"in n?n.width:n,r=null!=n&&"object"==typeof n&&"height"in n?n.height:n;if(null==l||null==r)if("esriGeometryPolygon"===i)l=u,r=u;else{const n=await async function(e,t,i){const{feature:n,fieldMap:l,viewParams:r}=t.cimOptions||t,o=await s.$.resolveSymbolOverrides(e.data,n,null,l,i,null,r);if(!o)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:o},e.data.primitiveOverrides=void 0;const h=[];return a.wp.fetchResources(o,c.resourceManager,h),a.wp.fetchFonts(o,c.resourceManager,h),h.length>0&&await Promise.all(h),a.wp.getEnvelope(o,null,c.resourceManager)}(e,t,i);n&&(l=n.width,r=n.height),"esriGeometryPolyline"===i&&(l=d),l=null!=l&&isFinite(l)?Math.min(l,g):u,r=null!=r&&isFinite(r)?Math.max(Math.min(r,g),y):u}return"legend"===t.style&&"esriGeometryPolyline"===i&&(l=d),{width:l,height:r}}async function m(e){var t,i,a;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{node:s,opacity:o,symbolConfig:u}=l,g=null!=u&&"object"==typeof u&&"isSquareFill"in u&&u.isSquareFill,d=l.cimOptions||l,y=d.geometryType||(0,r.n5)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.symbol),m=await w(e,l,y),{feature:p,fieldMap:f}=d,M=g||"esriGeometryPolygon"!==y?"preview":"legend",v=await c.rasterizeCIMSymbolAsync(e,p,m,M,f,y,null,d.viewParams,d.allowScalingUp);if(!v)return null;const{width:b,height:R}=v,C=document.createElement("canvas");C.width=b,C.height=R,C.getContext("2d").putImageData(v,0,0);const _=(0,n.Lz)(m.width),S=(0,n.Lz)(m.height),I=new Image(_,S);I.src=C.toDataURL(),I.ariaLabel=null!==(i=l.ariaLabel)&&void 0!==i?i:null,I.alt=null!==(a=l.ariaLabel)&&void 0!==a?a:"",null!=o&&(I.style.opacity="".concat(o));let P=I;if(null!=l.effectView){const e={shape:{type:"image",x:0,y:0,width:_,height:S,src:I.src},fill:null,stroke:null,offset:[0,0]};P=(0,h.fz)([[e]],[_,S],{effectView:l.effectView,ariaLabel:l.ariaLabel})}return s&&P&&s.appendChild(P),P}}}]);
//# sourceMappingURL=8675.f87cb202.chunk.js.map