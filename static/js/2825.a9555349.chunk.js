"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[2825],{37546:(e,t,o)=>{o.d(t,{P:()=>y});var r=o(50076),i=o(53514),n=o(24387),s=o(90534),a=o(49723),l=o(19258),p=o(49140),c=o(46053),d=o(95474),u=o(79453);function y(e){var t;const o=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,r)=>{const i=function(e,t,o){var r;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,o){const r=(0,l.z4)(t,o);return{type:String,read:(e,t,o)=>{const i=(0,u.r)(e,t,o);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer(t,i,a,l){if(null===l||void 0===l||!l.resources)return"string"==typeof t?void(i[a]=(0,u.t)(t,l)):void(i[a]=t.write({},l));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,u.t)(c,{...l,verifyItemRelativeUrls:null!==l&&void 0!==l&&l.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},u.M.NO),h=r.type!==String&&(!(0,n.H)(this)||(null===l||void 0===l?void 0:l.origin)&&this.originIdOf(o)>(0,p.aB)(l.origin)),g={object:this,propertyName:o,value:t,targetUrl:y,dest:i,targetPropertyName:a,context:l,params:e};null!==l&&void 0!==l&&l.portalItem&&y&&!(0,s.oP)(y)?h&&null!==e&&void 0!==e&&e.contentAddressed?v(g):h?function(e){var t;const{context:o,targetUrl:r,params:i,value:n,dest:a,targetPropertyName:l}=e;if(!o.portalItem)return;const p=o.portalItem.resourceFromPath(r),c=m(n,r,o),u=(0,d.n)(c),y=(0,s.Zo)(p.path),h=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;u===y?(o.resources&&f({...e,resource:p,content:c,compress:h,updates:o.resources.toUpdate}),a[l]=r):v(e)}(g):function(e){let{context:t,targetUrl:o,dest:r,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(o),compress:!1}),r[i]=o)}(g):null!==l&&void 0!==l&&l.portalItem&&(null==y||null!=(0,u.i)(y)||(0,s.w8)(y)||h)?v(g):i[a]=y}}}}(e,t,o);switch(null!==(r=null===e||void 0===e?void 0:e.type)&&void 0!==r?r:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=u.b;return{read:e,write:t}}}}(e,t,r);for(const e of o){const o=(0,c.rM)(t,e,r);for(const e in i)o[e]=i[e]}}}function v(e){var t,o,n,l;const{targetUrl:p,params:c,value:y,context:v,dest:h,targetPropertyName:g}=e;if(!v.portalItem)return;const w=(0,u.p)(p),S=m(y,p,v);if(null!==c&&void 0!==c&&c.contentAddressed&&"json"!==S.type)return void(null===(t=v.messages)||void 0===t||t.push(new r.A("persistable:contentAddressingUnsupported",'Property "'.concat(g,'" is trying to serializing a resource with content of type ').concat(S.type," with content addressing. Content addressing is only supported for json resources."),{content:S})));const _=null!==c&&void 0!==c&&c.contentAddressed&&"json"===S.type?(0,i.d)(S.jsonString):null!==(o=null===w||void 0===w?void 0:w.filename)&&void 0!==o?o:(0,a.lk)(),A=(0,s.fj)(null!==(n=null===c||void 0===c?void 0:c.prefix)&&void 0!==n?n:null===w||void 0===w?void 0:w.prefix,_),b="".concat(A,".").concat((0,d.n)(S));if(null!==c&&void 0!==c&&c.contentAddressed&&v.resources&&"json"===S.type){var I;const e=null!==(I=v.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===b})))&&void 0!==I?I:v.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===b}));if(e)return void(h[g]=e.resource.itemRelativeUrl)}const M=v.portalItem.resourceFromPath(b);(0,s.w8)(p)&&v.resources&&v.resources.pendingOperations.push((0,s.tk)(p).then((e=>{M.path="".concat(A,".").concat((0,d.n)({type:"blob",blob:e})),h[g]=M.itemRelativeUrl})).catch((()=>{})));const j=null!==(l=null===c||void 0===c?void 0:c.compress)&&void 0!==l&&l;v.resources&&f({...e,resource:M,content:S,compress:j,updates:v.resources.toAdd}),h[g]=M.itemRelativeUrl}function f(e){let{object:t,propertyName:o,updates:r,resource:i,content:n,compress:s}=e;r.push({resource:i,content:n,compress:s,finish:e=>{!function(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}(t,o,e)}})}function m(e,t,o){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(o))}}},32825:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var r,i=o(35143),n=o(50076),s=o(76460),a=o(77717),l=o(50346),p=o(68134),c=o(46053),d=(o(81806),o(47249),o(28379)),u=o(85842),y=o(37546),v=o(25515),f=o(12406),m=o(19502),h=o(31362),g=o(11270),w=o(94729),S=o(5682),_=o(90260),A=o(95363),b=o(2395),I=o(3825),M=o(19276),j=o(42553),x=o(90534),O=o(14303);let P=r=class extends((0,j.Te)(M.A.ofType(O.A))){constructor(e){super(e),this.url=null}clone(){return new r({url:this.url,items:this.items.map((e=>e.clone()))})}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}static fromJSON(e,t){const o=new r;for(const r of e)o.add(O.A.fromJSON(r,t));return o}static async fromUrl(e,t,o){const i={url:(0,x.An)(e),origin:"service"},n=await(0,I.A)(e,{responseType:"json",signal:null===o||void 0===o?void 0:o.signal}),s=t.toJSON(),a=[];for(const r of n.data)a.push(O.A.fromJSON({...r,geometry:{...r.geometry,spatialReference:s}},i));return new r({url:e,items:a})}};(0,i._)([(0,c.MZ)({type:String})],P.prototype,"url",void 0),P=r=(0,i._)([(0,u.$)("esri.layers.support.SceneModifications")],P);const N=P;var T=o(12482),U=o(79453);let R=class extends((0,_.w6)((0,m.b)((0,g.q)((0,w.A)((0,S.j)((0,a.P)((0,h.d)((0,f.p)(v.A))))))))){constructor(){super(...arguments),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.path=null}initialize(){this.addHandles((0,p.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),p.OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,U.f)(e,o),context:o}}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=null===e||void 0===e?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,l.QP)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await N.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(_.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(_.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new n.A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new n.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new n.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(){const e=this.elevationInfo,t="Integrated mesh layers";(0,T.XF)(s.A.getLogger(this),(0,T.B)(t,"absolute-height",e)),(0,T.XF)(s.A.getLogger(this),(0,T.tW)(t,e))}};(0,i._)([(0,c.MZ)({type:String,readOnly:!0})],R.prototype,"geometryType",void 0),(0,i._)([(0,c.MZ)({type:["show","hide"]})],R.prototype,"listMode",void 0),(0,i._)([(0,c.MZ)({type:["IntegratedMeshLayer"]})],R.prototype,"operationalLayerType",void 0),(0,i._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],R.prototype,"type",void 0),(0,i._)([(0,c.MZ)({type:b.W4,readOnly:!0})],R.prototype,"nodePages",void 0),(0,i._)([(0,c.MZ)({type:[b.uV],readOnly:!0})],R.prototype,"materialDefinitions",void 0),(0,i._)([(0,c.MZ)({type:[b.Ot],readOnly:!0})],R.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,c.MZ)({type:[b.L0],readOnly:!0})],R.prototype,"geometryDefinitions",void 0),(0,i._)([(0,c.MZ)({readOnly:!0})],R.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,c.MZ)({type:N}),(0,y.P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],R.prototype,"modifications",void 0),(0,i._)([(0,d.w)(["web-scene","portal-item"],"modifications")],R.prototype,"readModifications",null),(0,i._)([(0,c.MZ)(A.Yj)],R.prototype,"elevationInfo",null),(0,i._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],R.prototype,"path",void 0),R=(0,i._)([(0,u.$)("esri.layers.IntegratedMeshLayer")],R);const Z=R},14303:(e,t,o)=>{o.d(t,{A:()=>f});var r,i=o(35143),n=(o(35238),o(42553)),s=o(53084),a=o(62754),l=o(46053),p=(o(81806),o(76460),o(85842)),c=o(17707),d=o(37546),u=o(9624),y=o(65215);let v=r=class extends n.oY{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){var i;if(null!==(i=r.layer)&&void 0!==i&&i.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,u.canProjectWithoutEngine)(e.spatialReference,r.layer.spatialReference))return void((null===r||void 0===r?void 0:r.messages)&&r.messages.push(new a.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new y.A;(0,u.projectPolygon)(e,i,r.layer.spatialReference),t[o]=i.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new r({geometry:(0,s.o8)(this.geometry),type:this.type})}};(0,i._)([(0,l.MZ)({type:y.A}),(0,d.P)()],v.prototype,"geometry",void 0),(0,i._)([(0,c.K)(["web-scene","portal-item"],"geometry")],v.prototype,"writeGeometry",null),(0,i._)([(0,l.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,d.P)()],v.prototype,"type",void 0),v=r=(0,i._)([(0,p.$)("esri.layers.support.SceneModification")],v);const f=v},95474:(e,t,o)=>{o.d(t,{n:()=>i});var r=o(90534);function i(e){return n[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Zo)(e);return l[t]||s}(e.url)}(e)]||a}const n={},s="text/plain",a=n[s],l={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const p in l)n[l[p]]=p}}]);
//# sourceMappingURL=2825.a9555349.chunk.js.map