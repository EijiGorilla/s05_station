"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[6128],{12016:(e,t,r)=>{r.d(t,{B:()=>a});var i=r(18690),s=r(54901),o=r(76460),n=r(50346),l=r(16783);class a{constructor(e,t,r,i){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,l.ho)(e,{...s,schedule:i}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,s.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>o.A.getLogger("esri.core.workers.WorkerHandle").error("Failed to initialize ".concat(e," worker: ").concat(t))))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),(0,s.hA)((()=>{r.removed=!0,(0,i.TF)(this._listeners,r),this._thread&&null!=r.threadHandle&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,r){if(this._thread){const i=this._transferLists[e],s=i?i(t):[];return this._thread.invoke(e,t,{transferList:s,signal:r})}return this._promise?this._promise.then((()=>((0,n.Te)(r),this.invokeMethod(e,t,r)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},66128:(e,t,r)=>{r.d(t,{A:()=>X});var i=r(35143),s=r(50076),o=(r(81806),r(30726)),n=r(68134),l=r(46053),a=r(76460),u=(r(47249),r(85842)),d=r(99784),c=r(99014),h=r(83491),p=r(32535),y=r(98),m=r(65768);class f extends m.P{constructor(e,t,r,i,s,o){super(e.usedMemory,e.displayedFeatures,e.totalFeatures,e.maximumFeatures,e.nodes,e.core),this.storedFeatures=t,this.totalVertices=r,this.partial=i,this.mode=s,this.symbolComplexity=o}}var g=r(82541),v=r(82772),_=r(91967),F=r(50346),w=r(41289),b=r(36643),x=r(39356),M=r(78393),R=r(12016),P=r(13312),q=r(44135);class O{constructor(e){this._controller=e,this._handle=new E((t=>e.schedule(t)))}destroy(){this._handle.destroy()}invoke(e,t){return e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof P.A&&(e.options={...e.options,sourceSpatialReference:e.options.sourceSpatialReference.toJSON()}),this._handle.invoke(e,t).then((e=>{let t=0,r=0;const i=P.A.fromJSON(e.spatialReference);e.spatialReference=i;const s=async o=>{const n=e.fields;if(n)for(;t<n.length;)if(n[t]=q.A.fromJSON(n[t]),t++,o.madeProgress())return this._controller.reschedule((e=>s(e)));const l=e.features;for(;r<l.length;){const e=l[r];++r,e.uid=x.A.generateUID();const t=e.geometry;if(null!=t&&(t.spatialReference=i,Z(t),o.madeProgress()))return this._controller.reschedule((e=>s(e)))}return e};return this._controller.schedule((e=>s(e)))}))):Promise.resolve(null)}}function Z(e){switch(e.type){case"polyline":e.paths.reduce(((e,t)=>e+t.length),0)<M.y9&&(e.paths=e.hasZ||e.hasM?e.paths.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.paths.map((e=>e.map((e=>[e[0],e[1]])))));break;case"polygon":e.rings.reduce(((e,t)=>e+t.length),0)<M.y9&&(e.rings=e.hasZ||e.hasM?e.rings.map((e=>e.map((e=>[e[0],e[1],e[2]])))):e.rings.map((e=>e.map((e=>[e[0],e[1]])))))}}class E extends R.B{constructor(e){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},e)}}let A=class extends _.A{constructor(e){super(e)}get implicitFields(){var e;if(!(null===(e=this.layer.outFields)||void 0===e?void 0:e.includes("*")))return new Set;const t=new Set(this.layerView.requiredFields),r=new Set(this.layerView.availableFields);return(0,w.iv)(r,t)}get queryFeaturesDehydrated(){const{layer:e}=this,t=e.capabilities,r=t&&t.query,i=r&&r.supportsFormatPBF,s=e.parsedUrl;if(i){var o,n;null==this._decoder&&(this._decoder=new O(this.controller));const t={sourceSpatialReference:null!==(o=null===(n=e.spatialReference)||void 0===n?void 0:n.toJSON())&&void 0!==o?o:null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:N};return(e,r)=>(0,b.GB)(s,e,"pbf",this._createRequestOptions(r)).then((e=>((0,F.Te)(r),null!=this._decoder?this._decoder.invoke({buffer:e.data,options:t},r.signal):Promise.reject((0,F.NK)()))))}return(t,r)=>(0,b.eW)(s,t,e.spatialReference,this._createRequestOptions(r)).then((e=>(0,d.JS)(e.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:N})))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}destroy(){this._decoder=(0,o.pR)(this._decoder)}_createRequestOptions(e){return{...e,query:{...this.layer.customParameters,token:this.layer.apiKey,...null===e||void 0===e?void 0:e.query}}}};(0,i._)([(0,l.MZ)({constructOnly:!0})],A.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],A.prototype,"layerView",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],A.prototype,"controller",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],A.prototype,"implicitFields",null),(0,i._)([(0,l.MZ)({readOnly:!0})],A.prototype,"queryFeaturesDehydrated",null),A=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],A);let I=class extends _.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};(0,i._)([(0,l.MZ)({constructOnly:!0})],I.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],I.prototype,"queryFeaturesDehydrated",null),I=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],I);let C=class extends _.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.layer.queryFeatures(e,t)}};(0,i._)([(0,l.MZ)({constructOnly:!0})],C.prototype,"layer",void 0),C=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileOGCServiceQuery3D")],C);let S=class extends _.A{constructor(e){super(e)}queryFeaturesDehydrated(e,t){return this.source.queryFeaturesJSON(e,t).then(d.JS,(r=>{if(r&&"query-features-json:unsupported"===r.name)return this.layer.queryFeatures(e,t);throw r}))}queryFeatureCount(e,t){return this.layer.queryFeatureCount(e,t)}};(0,i._)([(0,l.MZ)({constructOnly:!0})],S.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({constructOnly:!0})],S.prototype,"source",void 0),S=(0,i._)([(0,u.$)("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],S);const N=1024;class V{constructor(e){this._memoryCache=null,this._capabilities=null;const t=e.layerView.layer;this._layerView=e.layerView,this.objectIdField=t.objectIdField,this.globalIdField="globalIdField"in t?t.globalIdField:null,this._returnZ=e.returnZ,this._returnM=e.returnM;const r=this._layerView.view.resourceController;this.query=function(e,t){const{layer:r}=e;return"feature"===r.type&&"feature-layer"===r.source.type||"catalog-footprint"===r.type?"infoFor3D"in r&&null!=r.infoFor3D?new I({layer:r}):new A({layer:r,layerView:e,controller:t}):"feature"===r.type&&"memory"===r.source.type||"csv"===r.type||"geojson"===r.type||"oriented-imagery"===r.type||"wfs"===r.type?new S({layer:r,source:r.source}):"ogc-feature"===r.type?new C({layer:r}):null}(this._layerView,r.normal),r&&this._memoryCacheEnabled&&(this._memoryCache=r.memoryController.newCache("fl-".concat(t.uid)))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=(0,o.pR)(this._memoryCache),this.query.destroy()}createQuery(){const e=this._layerView.layer.createQuery();return e.outFields=this._layerView.availableFields,e.returnZ=this._returnZ,e.returnM=this._returnM,e.outSpatialReference=this.tilingScheme.spatialReference,e}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const e=this._layerView.view.resourceController;return e?e.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return null!=this._capabilities||(this._capabilities=(0,v.G)(this._layerView.layer)),this._capabilities}logFetchError(e,t){var r;e.error("#fetchTile()",this._layerView.layer,null!==(r=null===t||void 0===t?void 0:t.message)&&void 0!==r?r:t)}}var T=r(57534),D=r(44513);let L=class extends g.c{constructor(e){super(e),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles((0,n.wB)((()=>({controller:this.controller,suspended:this.suspended})),(e=>{let{controller:t,suspended:r}=e;t&&!r&&this._needsRefresh&&(t.refetch(),this._needsRefresh=!1)})))}destroy(){this._fetcherContext=(0,o.pR)(this._fetcherContext)}get maximumNumberOfFeatures(){var e,t;return null!==(e=null===(t=this.controller)||void 0===t?void 0:t.maximumNumberOfFeatures)&&void 0!==e?e:this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(e){this._set("maximumNumberOfFeatures",e),this.controller&&(this.controller.maximumNumberOfFeatures=e)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,t;let r=0;if(null!==(e=this.controller)&&void 0!==e&&e.updating){const e=this.controller.updatingRemaining,t=Math.max(this.controller.updatingTotal,this._controllerTotal);t>0&&(r=(t-e)/t,this._controllerTotal=t)}let i=0;if(null!==(t=this.processor)&&void 0!==t&&t.updating){const e=this.processor.updatingRemaining,t=Math.max(e,this._processorTotal);t>0&&(i=(t-e)/t,this._processorTotal=t)}return.5*(r+i)}get updatePolicy(){if(!this.controller)return D.q.ASYNC;switch(this.controller.mode){case"snapshot":{const e=Q.get(this.layer.geometryType);return null==e||this.controller.serviceDataCount>e?D.q.ASYNC:D.q.SYNC}case"tiles":return D.q.ASYNC}}get usedMemory(){var e,t,r,i;return(null!==(e=null===(t=this.processor)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0)+(null!==(r=null===(i=this.controller)||void 0===i?void 0:i.memoryForUnusedFeatures)&&void 0!==r?r:0)}get unloadedMemory(){var e,t,r,i,s,o,n,l;const a=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.unprocessedMemoryEstimate)&&void 0!==e?e:0,u=null!==(r=null===(i=this.controller)||void 0===i?void 0:i.expectedFeatureDiff)&&void 0!==r?r:0,d=null!==(s=null===(o=this.processor)||void 0===o?void 0:o.loadedFeatures)&&void 0!==s?s:0,c=d+u>0?d/(d+u):1;return a+u*(null!==(n=null===(l=this.processor)||void 0===l?void 0:l.usedMemoryPerFeature)&&void 0!==n?n:0)*c}get ignoresMemoryFactor(){var e;return null===(e=this.controller)||void 0===e?void 0:e.hasMaximumNumberOfFeaturesOverride}get performanceInfo(){var e,t,r,i,s,o,n;const l=null===(e=this.controller)||void 0===e?void 0:e.displayFeatureLimit,a=null!=l?l.averageSymbolComplexity:void 0,u=null!=a?"f:".concat(a.verticesPerFeature,",v:").concat(a.verticesPerCoordinate):"n/a";return new f(super.performanceInfo,null!==(t=null===(r=this.controller)||void 0===r||null===(r=r.performanceInfo)||void 0===r?void 0:r.storedFeatures)&&void 0!==t?t:0,null!==(i=null===(s=this.controller)||void 0===s||null===(s=s.performanceInfo)||void 0===s?void 0:s.totalVertices)&&void 0!==i?i:0,this.maximumNumberOfFeaturesExceeded,null!==(o=null===(n=this.controller)||void 0===n?void 0:n.mode)&&void 0!==o?o:"n/a",u)}async doRefresh(e){const{controller:t,processor:r,suspended:i}=this;e&&t&&(i?this._needsRefresh=!0:(t.refetch(),this._needsRefresh=!1)),r.refreshFilter()}setVisibility(e,t){var r;null===(r=this.processor)||void 0===r||r.setObjectIdVisibility(e,t)}getMissingAttributesForFeature(e){return this.controller.getMissingAttributesForFeature(e)}getHydratedGeometry(e){const t=this.graphics3DProcessor;if(null==t)return null;const r=t.graphics3DGraphicsByObjectID;if(null==r)return null;const i=r.get(e);return null==i?null:(0,p.wZ)(i.graphic.geometry)}createController(){this._fetcherContext=new V({layerView:this.layerView,returnZ:this.hasZ,returnM:this.hasM});const e=new y.e({layerView:this.layerView,context:this._fetcherContext,graphics:new T._,extent:this.clippingExtent});return this.updatingHandles.add((()=>e.serviceDataExtent),(e=>{this.processor&&(this.processor.dataExtent=e)}),n.Vh),this.addHandles((0,n.wB)((()=>this.suspended&&this.layerView.updateSuspended),(t=>{t?e.suspend():e.resume()}),n.pc)),this.updatingHandles.add((()=>{var e;return null===(e=this.processor)||void 0===e?void 0:e.displayFeatureLimit}),(t=>e.displayFeatureLimit=t),n.Vh),this.addHandles((0,n.z7)((()=>!this.updating),(()=>{this._controllerTotal=0,this._processorTotal=0}))),e}beforeSetController(e){e.maximumNumberOfFeatures=this.maximumNumberOfFeatures}get test(){return{controller:this.controller,graphics3DProcessor:this.graphics3DProcessor,heatmapProcessor:this.heatmapProcessor,loadedGraphics:this.loadedGraphics}}};(0,i._)([(0,l.MZ)()],L.prototype,"layerView",void 0),(0,i._)([(0,l.MZ)()],L.prototype,"controller",void 0),(0,i._)([(0,l.MZ)()],L.prototype,"_controllerTotal",void 0),(0,i._)([(0,l.MZ)()],L.prototype,"_processorTotal",void 0),(0,i._)([(0,l.MZ)()],L.prototype,"_needsRefresh",void 0),(0,i._)([(0,l.MZ)()],L.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,l.MZ)()],L.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,l.MZ)()],L.prototype,"updatingProgressValue",null),(0,i._)([(0,l.MZ)()],L.prototype,"updatePolicy",null),(0,i._)([(0,l.MZ)()],L.prototype,"suspendResumeExtentMode",void 0),L=(0,i._)([(0,u.$)("esri.views.3d.layers.graphics.FeatureGraphics3DGraphicsPipeline")],L);const Q=new Map([["point",5e3],["polygon",500],["polyline",1e3]]);var k=r(93938),H=r(10252),j=r(8203),B=r(53430),G=r(46530),z=r(97015),$=r(98976),J=r(2257);const U=e=>{let t=class extends e{constructor(){super(...arguments),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([(0,n.wB)((()=>{var e;const t=this.layer;return[t&&"elevationInfo"in t?null===(e=t.elevationInfo)||void 0===e?void 0:e.featureExpressionInfo:null,t&&"displayField"in t?t.displayField:null,t&&"timeInfo"in t&&t.timeInfo,t&&"renderer"in t&&t.renderer,t&&"labelingInfo"in t&&t.labelingInfo,t&&"floorInfo"in t&&t.floorInfo,this.filter,this.featureEffect,this.timeExtent]}),(()=>this._handleRequiredFieldsChange()),n.pc),(0,n.on)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.floors}),"change",(()=>this._handleRequiredFieldsChange())),(0,n.on)((()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null}),"change",(()=>this._handleRequiredFieldsChange()))])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return"outFields"in e&&e.outFields?(0,B.DB)(t,[...(0,B.hL)(t,e.outFields),...r]):(0,B.DB)(t,r)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){a.A.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},t=null!=this.filter?this.filter.createQuery(e):new z.A(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const e=(0,G.E)(this);null!=e&&(t.where=t.where?"(".concat(t.where,") AND (").concat(e,")"):e)}return null!=this.timeExtent&&(t.timeExtent=null!=t.timeExtent?t.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),t}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new z.A(e)}queryFeatures(e,t){throw new Error("missing implementation")}queryObjectIds(e,t){throw new Error("missing implementation")}queryFeatureCount(e,t){throw new Error("missing implementation")}queryExtent(e,t){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,t){return this._validateFetchPopupFeatures(e,t),this._fetchPopupFeatures(e,t)}_loadArcadeModules(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,$.lw)():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then((()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)}))}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e="3d"===this.view.type,{layer:t,layer:{fieldsIndex:r,objectIdField:i}}=this,s="renderer"in t&&t.renderer,o="orderBy"in t&&t.orderBy,n="featureReduction"in t?t.featureReduction:null,l=new Set,u=await Promise.allSettled([s?s.collectRequiredFields(l,r):null,(0,B.Im)(l,t),e&&"elevationInfo"in t?(0,B.NO)(l,t):null,null!=this.filter?(0,B.o)(l,t,this.filter):null,e||null==this.featureEffect?null:(0,B.o)(l,t,this.featureEffect.filter),!e&&n?(0,B.RP)(l,t,n):null,!e&&o?(0,B.f)(l,t,o):null]);if("timeInfo"in t&&t.timeInfo&&this.timeExtent&&(0,B._w)(l,t.fieldsIndex,[t.timeInfo.startField,t.timeInfo.endField]),"floorInfo"in t&&t.floorInfo&&(0,B._w)(l,t.fieldsIndex,[t.floorInfo.floorField]),"feature"===t.type&&e&&null!=t.infoFor3D&&(null==t.globalIdField&&a.A.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),(0,B._w)(l,t.fieldsIndex,[t.globalIdField])),"subtype-group"===t.type){(0,B.rq)(l,r,t.subtypeField);const e=t.sublayers.map((e=>{var t;return Promise.all([null===(t=e.renderer)||void 0===t?void 0:t.collectRequiredFields(l,r),(0,B.Im)(l,e)])}));await Promise.allSettled(e)}if("catalog-footprint"===t.type&&t.parent){const e=t.parent;(0,B._w)(l,r,[e.itemNameField,e.itemSourceField,e.itemTypeField,e.maxScaleField,e.minScaleField])}for(const c of u)"rejected"===c.status&&a.A.getLogger(this).error(c.reason);(0,B.rq)(l,r,i),e&&"displayField"in t&&t.displayField&&(0,B.rq)(l,r,t.displayField);const d=Array.from(l).sort();this._set("requiredFields",d)}_validateFetchPopupFeatures(e,t){if(null!=t)for(const r of e){const e=r.origin&&"layer"in r.origin?r.origin.layer:r.layer;if("popupEnabled"in e&&!e.popupEnabled)throw new s.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e});if(r.isAggregate){const t="featureReduction"in e?e.featureReduction:null;if(!(t&&"popupTemplate"in t&&t.popupEnabled&&t.popupTemplate))throw new s.A("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:e})}else if("popupTemplate"in e&&!(0,J.D8)(e,t))throw new s.A("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:e})}}_popupFeatureHasRequiredFields(e,t){return(0,B.Kl)(t,e)}async _fetchPopupFeatures(e,t){const r=new Array(e.length),i=new Map,s=await this._createPopupQuery(e.map((e=>{var t,r;return null!==(t=null===(r=e.origin)||void 0===r?void 0:r.layer)&&void 0!==t?t:e.layer})),t);for(let l=0;l<e.length;l++){var o,n;const a=e[l];if(a.isAggregate){r[l]=a;continue}const u=null!==(o=null===(n=a.origin)||void 0===n?void 0:n.layer)&&void 0!==o?o:a.layer;if(!u||!("popupEnabled"in u))continue;const d=(0,B.hL)(this.layer.fieldsIndex,s.outFields),c=(0,J.D8)(u,t);if(null==c)continue;const h=await this._loadArcadeModules(c);(0,F.Te)(t),h&&h.arcadeUtils.hasGeometryOperations(c)||!this._popupFeatureHasRequiredFields(a,d)?i.set(a.getObjectId(),{graphic:a,index:l}):r[l]=a}if("stream"===this.layer.type||0===i.size)return r.filter(Boolean);s.objectIds=Array.from(i.keys());try{const e=await this.layer.queryFeatures(s,t);for(const t of e.features){const{graphic:{geometry:e,origin:s},index:o}=i.get(t.getObjectId());t.geometry||(t.geometry=e),t.origin=s,r[o]=t}}catch{}return r.filter(Boolean)}async _createPopupQuery(e,t){const r=this.layer.createQuery(),i=new Set;let s=!1;const o=null!==e&&void 0!==e?e:[this.layer];for(const n of o){if(!("popupEnabled"in n))continue;const e=(0,J.D8)(n,t);if(null==e)continue;const r=await this._loadArcadeModules(e);(0,F.Te)(t);const o=r&&r.arcadeUtils.hasGeometryOperations(e);s=!("point"!==this.layer.geometryType&&!o);const l=await(0,J.TO)(this.layer,e);(0,F.Te)(t);for(const t of l)i.add(t)}if(r.returnGeometry=s,r.returnZ=s,r.returnM=s,r.outFields=Array.from(i),r.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const e=(0,G.E)(this);null!=e&&(r.where=r.where?"(".concat(r.where,") AND (").concat(e,")"):e)}return r}canResume(){return!!super.canResume()&&(null==this.timeExtent||!this.timeExtent.isEmpty)}getTest(){}get test(){}};return(0,i._)([(0,l.MZ)()],t.prototype,"_updatingRequiredFieldsPromise",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"availableFields",null),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"dataUpdating",void 0),(0,i._)([(0,l.MZ)({type:H.A})],t.prototype,"featureEffect",null),(0,i._)([(0,l.MZ)({type:j.A})],t.prototype,"filter",void 0),(0,i._)([(0,l.MZ)()],t.prototype,"layer",void 0),(0,i._)([(0,l.MZ)({type:Number})],t.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,l.MZ)({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,l.MZ)({readOnly:!0})],t.prototype,"requiredFields",void 0),(0,i._)([(0,l.MZ)()],t.prototype,"suspended",void 0),(0,i._)([(0,l.MZ)()],t.prototype,"view",void 0),t=(0,i._)([(0,u.$)("esri.views.layers.FeatureLayerView")],t),t};var Y=r(91196),W=r(771);let K=class extends((0,W.A)((0,c.T)(U((0,h.w)(Y.A))))){constructor(e){super(e)}initialize(){this.addHandles((0,n.wB)((()=>this._updatingRequiredFieldsPromise),(e=>this._updatingHandles.addPromise(e)),n.pc))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=(0,o.pR)(this._fetcherContext)}get maximumNumberOfFeatures(){return this.graphicsPipeline.maximumNumberOfFeatures}set maximumNumberOfFeatures(e){this.graphicsPipeline.maximumNumberOfFeatures=e}get maximumNumberOfFeaturesExceeded(){return null!=this.graphicsPipeline&&!this.suspended&&this.graphicsPipeline.maximumNumberOfFeaturesExceeded}get updatingProgressValue(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.updatingProgressValue)&&void 0!==e?e:0}get updatePolicy(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.updatePolicy)&&void 0!==e?e:D.q.ASYNC}get hasZ(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in e&&null!=e.returnZ?e.returnZ:t.supportsZ)}get hasM(){const e=this.layer,t=e.capabilities&&e.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in e&&null!=e.returnM&&e.returnM}setVisibility(e,t){var r;null===(r=this.graphicsPipeline)||void 0===r||r.setVisibility(e,t)}createQuery(){return super.createQuery()}queryFeatures(e,t){const r=()=>super.queryFeatures(e,t);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(e),r):r()}createGraphicsPipeline(){return new L({layerView:this})}async doRefresh(e){return await this.graphicsPipeline.doRefresh(e)}_popupFeatureHasRequiredFields(e,t){if(!super._popupFeatureHasRequiredFields(e,t))return!1;const r=(0,d.RW)(e,this.layer.objectIdField);if(null==r)return!0;const i=this.graphicsPipeline.getMissingAttributesForFeature(r);if(null==i)return!0;for(const s of t)if(i.has(s))return!1;return!0}get usedMemory(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}get unloadedMemory(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.unloadedMemory)&&void 0!==e?e:0}get ignoresMemoryFactor(){var e,t;return null!==(e=null===(t=this.graphicsPipeline)||void 0===t?void 0:t.ignoresMemoryFactor)&&void 0!==e&&e}async _queryFeaturesMesh(e,t){await this._validateQueryFeaturesMesh(e);const r=await t(),i=this.graphicsPipeline;if(null!==e&&void 0!==e&&e.outStatistics||null==i)return r;const s=this.layer.objectIdField,o=[];for(const n of r.features)if(n.geometry){const e=i.getHydratedGeometry(n.attributes[s]);e&&(n.geometry=e,o.push(n))}else o.push(n);return r.features=o,r}async _validateQueryFeaturesMesh(e){if(!e)return;const t=e=>{throw new s.A("feature-layer-view:unsupported-query","Queries on Mesh feature collection layers do not support '".concat(e,"'"))},r=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const i of r)null!=e[i]&&t(i);"returnM"in e&&e.returnM&&t("returnM"),"returnCentroid"in e&&e.returnCentroid&&t("returnCentroid"),null==e.outSpatialReference||e.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get test(){}};(0,i._)([(0,l.MZ)()],K.prototype,"layer",void 0),(0,i._)([(0,l.MZ)()],K.prototype,"graphicsPipeline",void 0),(0,i._)([(0,l.MZ)()],K.prototype,"maximumNumberOfFeatures",null),(0,i._)([(0,l.MZ)()],K.prototype,"maximumNumberOfFeaturesExceeded",null),(0,i._)([(0,l.MZ)(k.S)],K.prototype,"updatingProgress",void 0),(0,i._)([(0,l.MZ)({readOnly:!0})],K.prototype,"updatingProgressValue",null),(0,i._)([(0,l.MZ)({readOnly:!0})],K.prototype,"updatePolicy",null),(0,i._)([(0,l.MZ)({readOnly:!0})],K.prototype,"hasZ",null),(0,i._)([(0,l.MZ)({readOnly:!0})],K.prototype,"hasM",null),K=(0,i._)([(0,u.$)("esri.views.3d.layers.FeatureLayerViewBase3D")],K);const X=K},771:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(35143),s=r(76460),o=r(50346),n=r(68134),l=(r(81806),r(47249),r(50076),r(85842));const a=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,o.zf)(e)||s.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,i._)([(0,l.$)("esri.views.layers.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=6128.77c9a2ea.chunk.js.map