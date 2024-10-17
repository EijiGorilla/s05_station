"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[3761,8156],{1420:(e,t,r)=>{r.d(t,{g:()=>c});var i=r(35143),n=r(91967),s=r(34154),l=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),o=r(68002),u=r(46530),m=r(65419);const y={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends n.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,u.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,m.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(y[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=(0,u.f)(this.floors,t),i=(0,s.m)(r,t.definitionExpression);return null!=i&&(e[t.id]=i),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,i=t=>{t.visible&&(0===r||(0,o.zx)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(i):e.unshift(t))};t&&t.forEach(i);const n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some(((t,r)=>e[r]!==t))?e:n}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,l.MZ)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,i._)([(0,l.MZ)()],c.prototype,"floors",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,i._)([(0,l.MZ)()],c.prototype,"layer",null),(0,i._)([(0,l.MZ)({readOnly:!0})],c.prototype,"layers",null),(0,i._)([(0,l.MZ)({readOnly:!0})],c.prototype,"layerDefs",null),(0,i._)([(0,l.MZ)({type:Number})],c.prototype,"scale",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],c.prototype,"version",null),(0,i._)([(0,l.MZ)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,i._)([(0,a.$)("esri.layers.support.ExportImageParameters")],c)},43543:(e,t,r)=>{r.d(t,{F:()=>n});var i=r(98156);function n(e,t,r){if(null==e?.timeInfo)return null;const{datesInUnknownTimezone:n=!1,timeOffset:s,useViewTime:l}=e;let a=e.timeExtent;n&&(a=(0,i.YU)(a));let o=l?t&&a?t.intersection(a):t||a:a;return!o||o.isEmpty||o.isAllTime?o:(s&&(o=o.offset(-s.value,s.unit)),n&&(o=(0,i.h3)(o)),o.equals(r)?r:o)}},98156:(e,t,r)=>{r.d(t,{getTimeSliderSettingsFromWebDocument:()=>p,YU:()=>d,h3:()=>h});var i=r(82111),n=r(18690),s=(r(63241),r(53084)),l=(r(76460),r(18288)),a=r(42052),o=r(72027);function u(e){return void 0!==e.timeInfo}async function m(e,t){return e.widgets?.timeSlider?.fullTimeExtent??async function(e,t){if(0===e.length)return i.A.allTime;await Promise.all(e.map((e=>e.load({signal:t}))));const r=e.filter(u),s=e.filter((e=>!u(e)&&null!=e.visibilityTimeExtent));if(0===r.length&&0===s.length)return i.A.allTime;const l=[],a=[];for(const i of r)"feature"!==i?.type&&"map-image"!==i?.type||!i.timeInfo?.hasLiveData?a.push(i):l.push(i);const o=e=>null==e||e.isAllTime,m=[...a.map((e=>{const t=e.timeInfo?.fullTimeExtent,{visibilityTimeExtent:r}=e;return t?.intersection(r)??r})),...s.map((e=>e.visibilityTimeExtent))];if(m.some(o))return i.A.allTime;const y=l.map((async e=>{const r=(await e.fetchRecomputedExtents({signal:t}))?.timeExtent??e.timeInfo?.fullTimeExtent,{visibilityTimeExtent:i}=e;return r?.intersection(i)??i})),c=(await Promise.allSettled(y)).map((e=>"fulfilled"===e.status?e.value:null));if(c.some(o))return i.A.allTime;const p=[...c,...m].filter(n.Ru);return 0===p.length?i.A.allTime:p.reduce(((e,t)=>e.union(t)))}(e.allLayers,t)}function y(e){const{numStops:t,stopInterval:r,stops:i}=e;return i?{dates:(0,s.o8)(i)}:r?{interval:r.clone()}:{count:t??5}}function c(e,t){const r=e.currentTimeExtent;if(!r)return null;const{start:n,end:s}=r,l=n??s??null;switch(t){case"time-window":return new i.A({start:n,end:s});case"cumulative-from-start":return new i.A({start:null,end:l});case"cumulative-from-end":return new i.A({start:l,end:null});case"instant":return new i.A({start:l,end:l})}}async function p(e,t){if(!(0,a.r)(e)&&!function(e){return null!=e&&"object"==typeof e&&o.X in e}(e))return null;await e.load({signal:t});const r=e?.widgets?.timeSlider;if(!r)return null;const i=await m(e,t),n=r.loop,s=function(e){const t=e.numThumbs??2,r=e.currentTimeExtent;if(r){const{start:e,end:i}=r;return null!=e&&null!=i&&e.getTime()===i.getTime()?"instant":2===t?"time-window":null==e||0===e.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===t?"time-window":"cumulative-from-start"}(r);return{fullTimeExtent:i,loop:n,mode:s,playRate:r.stopDelay??2e3,stops:y(r),timeExtent:c(r,s)}}function h(e){if(!e)return e;const{start:t,end:r}=e;return new i.A({start:null!=t?(0,l.S1)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,l.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}function d(e){if(!e)return e;const{start:t,end:r}=e;return new i.A({start:null!=t?(0,l.S1)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=r?(0,l.S1)(r,r.getTimezoneOffset(),"minutes"):r})}},3761:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var i=r(35143),n=(r(76460),r(81806),r(47249),r(50076),r(85842)),s=r(10183),l=r(46053),a=r(1420),o=r(43543);const u=e=>{let t=class extends e{initialize(){this.exportImageParameters=new a.g({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return(0,o.F)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,i._)([(0,l.MZ)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"floors",null),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,l.MZ)()],t.prototype,"layer",void 0),(0,i._)([(0,l.MZ)()],t.prototype,"suspended",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"timeExtent",null),t=(0,i._)([(0,n.$)("esri.views.layers.MapImageLayerView")],t),t};var m=r(76117),y=r(55754);let c=class extends(u(s.A)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add((()=>this.exportImageVersion),(()=>this._updatingHandles.addPromise(this.refreshDebounced()))),this._popupHighlightHelper=new m.Uh({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,y.V)(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t)}getFetchOptions(){return{timeExtent:this.timeExtent}}};c=(0,i._)([(0,n.$)("esri.views.3d.layers.MapImageLayerView3D")],c);const p=c},42052:(e,t,r)=>{function i(e){return null!=e&&"object"==typeof e&&"declaredClass"in e&&"esri.WebMap"===e.declaredClass}r.d(t,{r:()=>i})}}]);
//# sourceMappingURL=3761.f1311cc6.chunk.js.map