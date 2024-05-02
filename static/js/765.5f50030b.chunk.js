"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[765],{10765:(e,t,a)=>{a.d(t,{save:()=>O,saveAs:()=>A});var r=a(18690),n=(a(50076),a(97924)),o=a(13096),i=a(11668),s=a(31933),l=a(62487),c=a(72945);const u="Feature Service",y="feature-layer-utils",d="".concat(y,"-save"),f="".concat(y,"-save-as");"".concat(y,"-saveall"),"".concat(y,"-saveall-as");function p(e){return{isValid:(0,s.W_)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],a=[];for(const{layer:r,layerJSON:n}of e)r.isTable?a.push(n):t.push(n);return{layers:t,tables:a}}function v(e){return m([e])}async function w(e,t){return/\/\d+\/?$/.test(e.url)?v(t[0]):b(t,e)}async function b(e,t){if(e.reverse(),!t)return m(e);const a=await async function(e,t){let a=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(a))return a;a||(a={}),function(e){e.layers||(e.layers=[]),e.tables||(e.tables=[])}(a);const{layer:{url:r,customParameters:n,apiKey:o}}=t[0];return await async function(e,t,a){const{url:r,customParameters:n,apiKey:o}=t,{serviceJSON:s,layersJSON:c}=await(0,i.Q)(r,{customParameters:n,apiKey:o}),u=S(e.layers,s.layers,a),y=S(e.tables,s.tables,a);e.layers=u.itemResources,e.tables=y.itemResources;const d=[...u.added,...y.added],f=c?[...c.layers,...c.tables]:[];await async function(e,t,a,r){const n=await async function(e){const t=[];e.forEach((e=>{let{type:a}=e;const r=function(e){let t;switch(e){case"Feature Layer":case"Table":t="FeatureLayer";break;case"Oriented Imagery Layer":t="OrientedImageryLayer";break;case"Catalog Layer":t="CatalogLayer"}return t}(a),n=l.S[r];t.push(n())}));const a=await Promise.all(t),r=new Map;return e.forEach(((e,t)=>{let{type:n}=e;r.set(n,a[t])})),r}(t),o=t.map((e=>{let{id:t,type:o}=e;return new(n.get(o))({url:a,layerId:t,sourceJSON:r.find((e=>{let{id:a}=e;return a===t}))})}));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((t=>{const{layerId:a,loaded:r,defaultPopupTemplate:n}=t;if(!r||null==n)return;const o={id:a,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),L(t,o,e)}))}(e,d,r,f)}(a,{url:null!==r&&void 0!==r?r:"",customParameters:n,apiKey:o},t.map((e=>e.layer.layerId))),a}(t,e);for(const r of e)L(r.layer,r.layerJSON,a);return function(e,t){const a=[],r=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?r.push(t):a.push(t)}h(e.layers,a),h(e.tables,r)}(a,e),a}function h(e,t){if(e.length<2)return;const a=[];for(const{id:r}of e)a.push(r);(0,r.aI)(a.sort(I),t.slice().sort(I))&&e.sort(((e,a)=>{const r=t.indexOf(e.id),n=t.indexOf(a.id);return r<n?-1:r>n?1:0}))}function I(e,t){return e<t?-1:e>t?1:0}function S(e,t,a){const n=(0,r.iv)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:a}=t;e.push({id:a})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!a.includes(t)}))}}function L(e,t,a){e.isTable?N(a.tables,t):N(a.layers,t)}function N(e,t){const a=e.findIndex((e=>{let{id:a}=e;return a===t.id}));-1===a?e.push(t):e[a]=t}async function T(e,t){const{url:a,layerId:r,title:n,fullExtent:i,isTable:s}=e,l=(0,o.qg)(a);t.url="FeatureServer"===(null===l||void 0===l?void 0:l.serverType)?a:"".concat(a,"/").concat(r),t.title||(t.title=n),t.extent=null,s||null==i||(t.extent=await(0,c.sQ)(i)),(0,c.OM)(t,c.mm.METADATA),(0,c.OM)(t,c.mm.MULTI_LAYER),(0,c.LG)(t,c.mm.SINGLE_LAYER),s&&(0,c.LG)(t,c.mm.TABLE)}async function O(e,t){return(0,n.UN)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>w(t,[e]),errorNamePrefix:d},t)}async function A(e,t,a){return(0,n.Uh)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>Promise.resolve(v(e)),errorNamePrefix:f,newItem:t,setItemProperties:T},a)}},97924:(e,t,a)=>{a.d(t,{UN:()=>h,Uh:()=>I});var r=a(50076),n=a(37888),o=a(65308),i=a(70652),s=a(79942),l=a(72945),c=a(65526),u=a(24907);async function y(e){const{layer:t,errorNamePrefix:a,validateLayer:n}=e;await t.load(),function(e,t,a){const n=a(e);if(!n.isValid)throw new r.A("".concat(t,":invalid-parameters"),n.errorMessage,{layer:e})}(t,a,n)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function f(e){const{item:t,errorNamePrefix:a,layer:n,validateItem:o}=e;if((0,c.X)(t),function(e){const{item:t,itemType:a,additionalItemType:n,errorNamePrefix:o,layer:i}=e,s=[a];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>"'".concat(e,"'"))).join(", ");throw new r.A("".concat(o,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:i})}}(e),o){const e=o(t);if(!e.isValid)throw new r.A("".concat(a,":invalid-parameters"),e.errorMessage,{layer:n})}}function p(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:n}=t;if(!n)throw new r.A("".concat(a,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!n.loaded)throw new r.A("".concat(a,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:n})}function m(e){var t,a,r,n;const{newItem:s,itemType:l}=e;let c=i.default.from(s);return c.id&&(c=c.clone(),c.id=null),null!==(a=(t=c).type)&&void 0!==a||(t.type=l),null!==(n=(r=c).portal)&&void 0!==n||(r.portal=o.A.getDefault()),f({...e,item:c}),c}function v(e){return(0,s.m)(e,"portal-item")}async function w(e,t,a){var r,n;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const o=e.write({},t);return await Promise.all(null!==(r=null===(n=t.resources)||void 0===n?void 0:n.pendingOperations)&&void 0!==r?r:[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},a),o}function b(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function h(e,t){const{layer:a,createItemData:r,createJSONContext:o,saveResources:i,supplementalUnsupportedErrors:s}=e;await y(e),p(e);const l=a.portalItem,c=o?o(l):v(l),u=await w(a,c,{...t,supplementalUnsupportedErrors:s}),d=await r({layer:a,layerJSON:u},l);return b(l),await l.update({data:d}),(0,n.v)(c),await(null===i||void 0===i?void 0:i(l,c)),l}async function I(e,t){const{layer:a,createItemData:r,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await y(e);const c=m(e),u=o?o(c):v(c),d=await w(a,u,{...t,supplementalUnsupportedErrors:l}),f=await r({layer:a,layerJSON:d},c);return await i(a,c),b(c),await async function(e,t,a){var r;const n=e.portal;await n.signIn(),await(null===(r=n.user)||void 0===r?void 0:r.addItem({item:e,data:t,folder:null===a||void 0===a?void 0:a.folder}))}(c,f,t),a.portalItem=c,(0,n.v)(u),await(null===s||void 0===s?void 0:s(c,u)),c}},11668:(e,t,a)=>{a.d(t,{Q:()=>n});var r=a(67061);async function n(e,t){var a;const{loadContext:n,...o}=t||{},i=n?await n.fetchServiceMetadata(e,o):await(0,r.V)(e,o);u(i),s(i);const l={serviceJSON:i};if((null!==(a=i.currentVersion)&&void 0!==a?a:0)<10.5)return l;const c="".concat(e,"/layers"),y=n?await n.fetchServiceMetadata(c,o):await(0,r.V)(c,o);return u(y),s(y),l.layersJSON={layers:y.layers,tables:y.tables},l}function o(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function i(e){return"Table"===e.type}function s(e){var t,a;e.layers=null===(t=e.layers)||void 0===t?void 0:t.filter(o),e.tables=null===(a=e.tables)||void 0===a?void 0:a.filter(i)}function l(e){e.type||(e.type="Feature Layer")}function c(e){e.type||(e.type="Table")}function u(e){var t,a;null!==(t=e.layers)&&void 0!==t&&t.forEach(l),null===(a=e.tables)||void 0===a||a.forEach(c)}},67061:(e,t,a)=>{a.d(t,{V:()=>n});var r=a(3825);async function n(e,t){const{data:a}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...null===t||void 0===t?void 0:t.customParameters,token:null===t||void 0===t?void 0:t.apiKey}});return a}}}]);
//# sourceMappingURL=765.5f50030b.chunk.js.map