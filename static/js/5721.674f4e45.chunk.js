"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[5721],{36648:(e,r,t)=>{t.d(r,{V:()=>g});var i=t(35143),l=t(3825),a=t(87663),o=t(50346),s=t(90534),n=t(19898),u=t(46053),d=(t(81806),t(76460),t(47249),t(28379)),y=t(85842),p=t(49140),c=t(76797),h=t(13312),f=t(13096),b=t(95363),v=t(72945);const g=e=>{let r=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(e,r){var t,i;const l=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!l)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const a=this.type,o="tile"!==a&&!!r.supportsDynamicLayers,s=l.includes("query"),u=l.includes("map"),d=!!r.exportTilesAllowed,y=l.includes("tilemap"),p=l.includes("data"),c="tile"!==a&&(!r.tileInfo||o),h="tile"!==a&&(!r.tileInfo||o),f="tile"!==a,b=r.cimVersion&&n.R.parse(r.cimVersion),v=null!==(t=null===b||void 0===b?void 0:b.since(1,4))&&void 0!==t&&t,g=null!==(i=null===b||void 0===b?void 0:b.since(2,0))&&void 0!==i&&i;return{operations:{supportsExportMap:u,supportsExportTiles:d,supportsIdentify:s,supportsQuery:p,supportsTileMap:y},exportMap:u?{supportsArcadeExpressionForLabeling:v,supportsSublayersChanges:f,supportsDynamicLayers:o,supportsSublayerVisibility:c,supportsSublayerDefinitionExpression:h,supportsCIMSymbols:g}:null,exportTiles:d?{maxExportTilesCount:+r.maxExportTilesCount}:null}}readVersion(e,r){let t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}async fetchRelatedService(e){const r=this.portalItem;if(!r||!(0,v.bK)(r))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=r.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},e).then((e=>{var r;return null!==(r=e.find((e=>"Feature Service"===e.type)))&&void 0!==r?r:null}),(()=>null)));const t=await this._relatedFeatureServicePromise;return(0,o.Te)(e),t?{itemId:t.id,url:t.url}:null}async fetchSublayerInfo(e,r){const{source:t}=e;if(null!==this&&void 0!==this&&this.portalItem&&"tile"===this.type&&"map-layer"===(null===t||void 0===t?void 0:t.type)&&(0,v.bK)(this.portalItem)&&e.originIdOf("url")<p.Gr.SERVICE){const i=await this.fetchRelatedService(r);i&&(e.url=(0,s.fj)(i.url,t.mapLayerId.toString()),e.layerItemId=i.itemId)}const{url:i}=e;let a;if("data-layer"===t.type)a=(await(0,l.A)(i,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...r})).data;else if(i&&e.originIdOf("url")>p.Gr.SERVICE)try{var o,n;const e=await this._fetchAllLayersAndTablesFromService(i),r=null!==(o=null===(n=(0,f.qg)(i))||void 0===n?void 0:n.sublayer)&&void 0!==o?o:t.mapLayerId;a=e.get(r)}catch{}else{let i=e.id;"map-layer"===(null===t||void 0===t?void 0:t.type)&&(i=t.mapLayerId);try{a=(await this.fetchAllLayersAndTables(r)).get(i)}catch{}}return a}async fetchAllLayersAndTables(e){var r;return this._fetchAllLayersAndTablesFromService(null===(r=this.parsedUrl)||void 0===r?void 0:r.path,e)}async _fetchAllLayersAndTablesFromService(e,r){await this.load(r),this._allLayersAndTablesMap||(this._allLayersAndTablesMap=new Map);const t=(0,f.qg)(e),i=(0,a.tE)(this._allLayersAndTablesMap,null===t||void 0===t?void 0:t.url.path,(()=>(0,l.A)((0,s.fj)(null===t||void 0===t?void 0:t.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{const r=new Map;for(const t of e.data.layers)r.set(t.id,t);return{result:r}}),(e=>({error:e}))))),n=await i;if((0,o.Te)(r),"result"in n)return n.result;throw n.error}};return(0,i._)([(0,u.MZ)({readOnly:!0})],r.prototype,"capabilities",void 0),(0,i._)([(0,d.w)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),(0,i._)([(0,u.MZ)({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),(0,i._)([(0,u.MZ)({type:c.A})],r.prototype,"fullExtent",void 0),(0,i._)([(0,u.MZ)(b.id)],r.prototype,"id",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),(0,i._)([(0,u.MZ)(b.M6)],r.prototype,"popupEnabled",void 0),(0,i._)([(0,u.MZ)({type:h.A})],r.prototype,"spatialReference",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],r.prototype,"version",void 0),(0,i._)([(0,d.w)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=(0,i._)([(0,y.$)("esri.layers.mixins.ArcGISMapService")],r),r}},73907:(e,r,t)=>{t.d(r,{I:()=>v});var i=t(35143),l=t(19276),a=t(73763),o=t(50076),s=t(76460),n=t(68134),u=t(46053),d=(t(81806),t(47249),t(39314)),y=t(85842),p=t(49140),c=t(39568),h=t(65419);const f=l.A.ofType(c.A);function b(e,r){e&&e.forEach((e=>{r(e),e.sublayers&&e.sublayers.length&&b(e.sublayers,r)}))}const v=e=>{let r=class extends e{constructor(){super(...arguments),this.allSublayers=new a.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[p.Gr.SERVICE]:{},[p.Gr.PORTAL_ITEM]:{},[p.Gr.WEB_SCENE]:{},[p.Gr.WEB_MAP]:{}},this.addHandles((0,n.wB)((()=>this.sublayers),((e,r)=>this._handleSublayersChange(e,r)),n.OH))}destroy(){this.allSublayers.destroy()}readSublayers(e,r){if(!r||!e)return;const{sublayersSourceJSON:t}=this,i=(0,p.aB)(r.origin);if(i<p.Gr.SERVICE)return;if(t[i]={context:r,visibleLayers:e.visibleLayers||t[i].visibleLayers,layers:e.layers||t[i].layers},i>p.Gr.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:l,origin:a}=this.createSublayersForOrigin("web-document"),o=(0,d.oY)(this);o.setDefaultOrigin(a),this._set("sublayers",new f(l)),o.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((r=>r.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){var r;const t=(0,p.aB)("web-document"===e?"web-map":e);let i=p.Gr.SERVICE,l=this.sublayersSourceJSON[p.Gr.SERVICE].layers,a=this.sublayersSourceJSON[p.Gr.SERVICE].context,o=null;const s=[p.Gr.PORTAL_ITEM,p.Gr.WEB_SCENE,p.Gr.WEB_MAP].filter((e=>e<=t));for(const p of s){const e=this.sublayersSourceJSON[p];(0,h._X)(e.layers)&&(i=p,l=e.layers,a=e.context,e.visibleLayers&&(o={visibleLayers:e.visibleLayers,context:e.context}))}const n=[p.Gr.PORTAL_ITEM,p.Gr.WEB_SCENE,p.Gr.WEB_MAP].filter((e=>e>i&&e<=t));let u=null;for(const p of n){const{layers:e,visibleLayers:r,context:t}=this.sublayersSourceJSON[p];e&&(u={layers:e,context:t}),r&&(o={visibleLayers:r,context:t})}const d=function(e,r){const t=[],i={};return e?(e.forEach((e=>{const l=new c.A;if(l.read(e,r),i[l.id]=l,null!=e.parentLayerId&&-1!==e.parentLayerId){const r=i[e.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(l)}else t.unshift(l)})),t):t}(l,a),y=new Map,v=new Set;if(u)for(const p of u.layers)y.set(p.id,p);if(null!==(r=o)&&void 0!==r&&r.visibleLayers)for(const p of o.visibleLayers)v.add(p);return b(d,(e=>{u&&e.read(y.get(e.id),u.context),o&&e.read({defaultVisibility:v.has(e.id)},o.context)})),{origin:(0,p.OL)(i),sublayers:new f({items:d})}}read(e,r){super.read(e,r),this.readSublayers(e,r)}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.addHandles([e.on("after-add",(e=>{let{item:r}=e;r.parent=this,r.layer=this})),e.on("after-remove",(e=>{let{item:r}=e;r.parent=null,r.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(e.on("before-changes",(e=>{s.A.getLogger("esri.layers.TileLayer").error(new o.A("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,i._)([(0,u.MZ)({readOnly:!0})],r.prototype,"allSublayers",void 0),(0,i._)([(0,u.MZ)({readOnly:!0,type:l.A.ofType(c.A)})],r.prototype,"serviceSublayers",void 0),(0,i._)([(0,u.MZ)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],r.prototype,"sublayersSourceJSON",void 0),r=(0,i._)([(0,y.$)("esri.layers.mixins.SublayersOwner")],r),r}},39568:(e,r,t)=>{t.d(r,{A:()=>X});var i,l=t(35143),a=(t(35238),t(16868)),o=(t(63844),t(14873),t(47662),t(72690),t(86946),t(71832),t(5766),t(35039),t(86616),t(31382)),s=t(3825),n=t(95444),u=t(19276),d=t(50076),y=t(81806),p=t(5632),c=t(53084),h=t(49304),f=t(76460),b=t(77717),v=t(34154),g=t(90534),m=t(46053),S=t(21403),I=t(28379),w=t(85842),_=t(17707),E=t(40565),A=t(49140),L=t(39314),M=t(17872),x=t(91485),O=t(44135),T=t(1900),D=t(71401),F=t(27937),P=t(5618),V=t(44141),j=t(89551),C=t(99603),Z=t(54994),G=t(9708),N=t(97015),R=t(30973),q=t(76797),k=t(31608);function B(e){return null!=e&&"esriSMS"===e.type}function U(e,r,t){var i;const l=this.originIdOf(r)>=(0,A.aB)(t.origin);return{ignoreOrigin:!0,allowNull:l,enabled:!!t&&"map-image"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&(t.writeSublayerStructure||l)}}function J(e,r,t){var i;return{enabled:!!t&&"tile"===(null===(i=t.layer)||void 0===i?void 0:i.type)&&(t.origin&&this.originIdOf(r)>=(0,A.aB)(t.origin)||this._isOverridden(r))}}function Q(e,r,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function K(e,r,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(r)>=(0,A.aB)(t.origin))}}let H=0;const W=new Set;W.add("layer"),W.add("parent"),W.add("loaded"),W.add("loadStatus"),W.add("loadError"),W.add("loadWarnings");let z=i=class extends((0,b.P)((0,p.sA)(h.A))){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:r,url:t}=this;if(!r&&!t)throw new d.A("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=r?await r.fetchSublayerInfo(this,e):(await(0,s.A)(t,{responseType:"json",query:{f:"json"},...e})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:r,url:(0,Z.Dl)(t)}))})()),this}readCapabilities(e,r){r=r.layerDefinition||r;const{operations:{supportsQuery:t,supportsQueryAttachments:i},query:{supportsFormatPBF:l},data:{supportsAttachment:a},queryRelated:o}=(0,V.S)(r,this.url);return{exportMap:{supportsModification:!!r.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:i},data:{supportsAttachment:a},query:{supportsFormatPBF:l},queryRelated:o}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:r}=this;return{minScale:e,maxScale:r}}readMaxScaleRange(e,r){var t,i;return{minScale:null!==(t=(r=r.layerDefinition||r).minScale)&&void 0!==t?t:0,maxScale:null!==(i=r.maxScale)&&void 0!==i?i:0}}get fieldsIndex(){return new T.A(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,r){if((r=r.layerDefinition||r).globalIdField)return r.globalIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeGlobalID"===t.type)return t.name}get id(){const e=this._get("id");return null!==e&&void 0!==e?e:H++}set id(e){var r;this._get("id")!==e&&(!1!==(null===(r=this.layer)||void 0===r||null===(r=r.capabilities)||void 0===r||null===(r=r.exportMap)||void 0===r?void 0:r.supportsDynamicLayers)?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,r,t,i){e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,r){var t;return r.minScale||(null===(t=r.layerDefinition)||void 0===t?void 0:t.minScale)||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,r){var t;return r.maxScale||(null===(t=r.layerDefinition)||void 0===t?void 0:t.maxScale)||0}readObjectIdFieldFromService(e,r){if((r=r.layerDefinition||r).objectIdField)return r.objectIdField;if(r.fields)for(const t of r.fields)if("esriFieldTypeOID"===t.type)return t.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,r){var t,i;const l=r.layerDefinition;return 1-.01*(null!==(t=null!=(null===l||void 0===l?void 0:l.transparency)?l.transparency:null===l||void 0===l||null===(i=l.drawingInfo)||void 0===i?void 0:i.transparency)&&void 0!==t?t:0)}writeOpacity(e,r,t,i){r.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,r){this.parent&&this.parent!==this.layer?r.parentLayerId=(0,E.Vr)(this.parent.id):r.parentLayerId=-1}get queryTask(){var e,r;if(!this.layer)return null;const{spatialReference:t}=this.layer,i="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:l,fieldsIndex:a}=this,o=(0,y.A)("featurelayer-pbf")&&(null===l||void 0===l?void 0:l.query.supportsFormatPBF),s=null!==(e=null===l||void 0===l||null===(r=l.operations)||void 0===r?void 0:r.supportsQueryAttachments)&&void 0!==e&&e;return new M.A({url:this.url,pbfSupported:o,fieldsIndex:a,gdbVersion:i,sourceSpatialReference:t,queryAttachmentsSupported:s})}set renderer(e){if(e)for(const r of e.getSymbols())if((0,n.wk)(r)){f.A.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new C.f({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,E.dp)(u.A.ofType(i),e)}writeSublayers(e,r,t){var i;(null===(i=this.sublayers)||void 0===i?void 0:i.length)&&(r[t]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTitle(e,r){var t,i;return null!==(t=null===(i=r.layerDefinition)||void 0===i?void 0:i.name)&&void 0!==t?t:r.name}readTypeIdField(e,r){let t=(r=r.layerDefinition||r).typeIdField;if(t&&r.fields){t=t.toLowerCase();const e=r.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name)}return t}get url(){var e,r;const t=null!==(e=null===(r=this.layer)||void 0===r?void 0:r.parsedUrl)&&void 0!==e?e:this._lastParsedUrl,i=this.source;if(!t)return null;if(this._lastParsedUrl=t,"map-layer"===(null===i||void 0===i?void 0:i.type))return"".concat(t.path,"/").concat(i.mapLayerId);const l={layer:JSON.stringify({source:this.source})};return"".concat(t.path,"/dynamicLayer?").concat((0,g.x0)(l))}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,r,t,i){r[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,L.oY)(this),r=new i;return(0,L.oY)(r).store=e.clone(W),this.commitProperty("url"),r._lastParsedUrl=this._lastParsedUrl,r}createPopupTemplate(e){return(0,R.tn)(this,e)}createQuery(){return new N.A({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e;if(this.hasOwnProperty("sublayers"))return null;const r=(await Promise.resolve().then(t.bind(t,38451))).default,{layer:i,url:l}=this;let a;if(l&&this.originIdOf("url")>A.Gr.SERVICE)a=new r({url:l});else{if(null===i||void 0===i||!i.parsedUrl)throw new d.A("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const e=i.parsedUrl;a=new r({url:e.path}),e&&this.source&&("map-layer"===this.source.type?a.layerId=this.source.mapLayerId:a.dynamicDataSource=this.source)}}return null!=(null===i||void 0===i?void 0:i.refreshInterval)&&(a.refreshInterval=i.refreshInterval),this.definitionExpression&&(a.definitionExpression=this.definitionExpression),this.floorInfo&&(a.floorInfo=(0,c.o8)(this.floorInfo)),this.originIdOf("labelingInfo")>A.Gr.SERVICE&&(a.labelingInfo=(0,c.o8)(this.labelingInfo)),this.originIdOf("labelsVisible")>A.Gr.DEFAULTS&&(a.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>A.Gr.DEFAULTS&&(a.legendEnabled=this.legendEnabled),this.originIdOf("visible")>A.Gr.DEFAULTS&&(a.visible=this.visible),this.originIdOf("minScale")>A.Gr.DEFAULTS&&(a.minScale=this.minScale),this.originIdOf("maxScale")>A.Gr.DEFAULTS&&(a.maxScale=this.maxScale),this.originIdOf("opacity")>A.Gr.DEFAULTS&&(a.opacity=this.opacity),this.originIdOf("popupTemplate")>A.Gr.DEFAULTS&&(a.popupTemplate=(0,c.o8)(this.popupTemplate)),this.originIdOf("renderer")>A.Gr.SERVICE&&(a.renderer=(0,c.o8)(this.renderer)),"data-layer"===(null===(e=this.source)||void 0===e?void 0:e.type)&&(a.dynamicDataSource=this.source.clone()),this.originIdOf("title")>A.Gr.DEFAULTS&&(a.title=this.title),"map-image"===(null===i||void 0===i?void 0:i.type)&&i.originIdOf("customParameters")>A.Gr.DEFAULTS&&(a.customParameters=i.customParameters),"tile"===(null===i||void 0===i?void 0:i.type)&&i.originIdOf("customParameters")>A.Gr.DEFAULTS&&(a.customParameters=i.customParameters),a}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:r,types:t}=this;if(!r||!e)return null;const i=e.attributes?e.attributes[r]:void 0;if(null==i)return null;let l=null;return null!==t&&void 0!==t&&t.some((e=>{const{id:r}=e;return null!=r&&(r.toString()===i.toString()&&(l=e),!!l)})),l}getFieldDomain(e,r){const t=null===r||void 0===r?void 0:r.feature,i=this.getFeatureType(t);if(i){const r=i.domains&&i.domains[e];if(r&&"inherited"!==r.type)return r}return this._getLayerDomain(e)}async queryAttachments(e,r){var t,i;await this.load(),e=G.A.from(e);const l=this.capabilities;if(null===l||void 0===l||null===(t=l.data)||void 0===t||!t.supportsAttachment)throw new d.A("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:a,objectIds:o,globalIds:s,num:n,size:u,start:y,where:p}=e;if((null===l||void 0===l||null===(i=l.operations)||void 0===i||!i.supportsQueryAttachments)&&((null===a||void 0===a?void 0:a.length)>0||(null===s||void 0===s?void 0:s.length)>0||(null===u||void 0===u?void 0:u.length)>0||n||y||p))throw new d.A("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(null!==o&&void 0!==o&&o.length||null!==s&&void 0!==s&&s.length||p))throw new d.A("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,r)}async queryFeatures(){var e,r;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createQuery(),i=arguments.length>1?arguments[1]:void 0;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new d.A("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new d.A("queryFeatures:not-supported","this layer has no url.");const l=await this.queryTask.execute(t,{...i,query:{...null===(e=this.layer)||void 0===e?void 0:e.customParameters,token:null===(r=this.layer)||void 0===r?void 0:r.apiKey}});if(null!==l&&void 0!==l&&l.features)for(const a of l.features)a.sourceLayer=this;return l}toExportImageJSON(e){var r;const t={id:this.id,source:(null===(r=this.source)||void 0===r?void 0:r.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},i=(0,v.m)(e,this.definitionExpression);null!=i&&(t.definitionExpression=i);const l=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,r)=>(e[r]=this.originIdOf(r),e)),{}),a=Object.keys(l).some((e=>l[e]>A.Gr.SERVICE));if(a){const e=t.drawingInfo={};if(l.renderer>A.Gr.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),l.labelsVisible>A.Gr.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&l.labelingInfo>A.Gr.SERVICE)if(this.labelingInfo){var o;!this.loaded&&(null===(o=this.labelingInfo)||void 0===o?void 0:o.some((e=>!e.labelPlacement)))&&f.A.getLogger(this).warnOnce("A Sublayer (title: ".concat(this.title,", id: ").concat(this.id,") has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type."),{sublayer:this});let r=this.labelingInfo;null!=this.geometryType&&(r=(0,F.z)(this.labelingInfo,k.g.toJSON(this.geometryType))),e.showLabels=!0,e.labelingInfo=r.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer})))}else e.showLabels=!1;l.opacity>A.Gr.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{var r;e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(null!==(r=e.outline)&&void 0!==r&&r.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,r){if(e){var t;const i=null!==(t="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)&&void 0!==t?t:[];for(const e of i)B(e.symbol)&&r(e.symbol);"symbol"in e&&B(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&B(e.defaultSymbol)&&r(e.defaultSymbol)}}_setAndNotifyLayer(e,r){const t=this.layer,i=this._get(e);let l,a;switch(e){case"definitionExpression":case"floorInfo":l="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":l="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":l="supportsDynamicLayers",a="supportsModification"}const o=(0,L.oY)(this).getDefaultOrigin();if("service"!==o){var s,n;if(l&&!1===(null===(s=this.layer)||void 0===s||null===(s=s.capabilities)||void 0===s||null===(s=s.exportMap)||void 0===s?void 0:s[l]))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap.".concat(l,"'"));if(a&&!1===(null===(n=this.capabilities)||void 0===n?void 0:n.exportMap[a]))return void this._logLockedError(e,"capability not available 'capabilities.exportMap.".concat(a,"'"))}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,r),"service"!==o&&i!==r&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,r){r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this.removeAllHandles()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.addHandles([e.on("after-add",(e=>{let{item:r}=e;r.parent=this,r.layer=this.layer})),e.on("after-remove",(e=>{let{item:r}=e;r.parent=null,r.layer=null})),e.on("before-changes",(e=>{var r;const t=null===(r=this.layer)||void 0===r||null===(r=r.capabilities)||void 0===r||null===(r=r.exportMap)||void 0===r?void 0:r.supportsSublayersChanges;null==t||t||(f.A.getLogger(this).error(new d.A("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,r){const{layer:t,declaredClass:i}=this;f.A.getLogger(i).error(new d.A("sublayer:locked","Property '".concat(String(e),"' can't be changed on Sublayer from the layer '").concat(null===t||void 0===t?void 0:t.id,"'"),{reason:r,sublayer:this,layer:t}))}_getLayerDomain(e){const r=this.fieldsIndex.get(e);return r?r.domain:null}};z.test={isMapImageLayerOverridePolicy:e=>e===Q||e===U,isTileImageLayerOverridePolicy:e=>e===J},(0,l._)([(0,m.MZ)({readOnly:!0})],z.prototype,"capabilities",void 0),(0,l._)([(0,I.w)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],z.prototype,"readCapabilities",null),(0,l._)([(0,m.MZ)()],z.prototype,"defaultPopupTemplate",null),(0,l._)([(0,m.MZ)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:U}}})],z.prototype,"definitionExpression",null),(0,l._)([(0,m.MZ)({readOnly:!0})],z.prototype,"effectiveScaleRange",null),(0,l._)([(0,I.w)("service","maxScaleRange",["minScale","maxScale"])],z.prototype,"readMaxScaleRange",null),(0,l._)([(0,m.MZ)({type:[O.A],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],z.prototype,"fields",void 0),(0,l._)([(0,m.MZ)({readOnly:!0})],z.prototype,"fieldsIndex",null),(0,l._)([(0,m.MZ)({type:P.A,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:U},origins:{"web-scene":{read:!1,write:!1}}}})],z.prototype,"floorInfo",null),(0,l._)([(0,m.MZ)({type:q.A,json:{read:{source:"layerDefinition.extent"}}})],z.prototype,"fullExtent",void 0),(0,l._)([(0,m.MZ)({type:k.g.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:k.g.read}}}}})],z.prototype,"geometryType",void 0),(0,l._)([(0,m.MZ)({type:String})],z.prototype,"globalIdField",void 0),(0,l._)([(0,I.w)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],z.prototype,"readGlobalIdFieldFromService",null),(0,l._)([(0,m.MZ)({type:E.jz,json:{write:{ignoreOrigin:!0}}})],z.prototype,"id",null),(0,l._)([(0,m.MZ)({value:null,type:[D.A],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:Q}}})],z.prototype,"labelingInfo",null),(0,l._)([(0,_.K)("labelingInfo")],z.prototype,"writeLabelingInfo",null),(0,l._)([(0,m.MZ)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:Q}}})],z.prototype,"labelsVisible",null),(0,l._)([(0,m.MZ)({value:null})],z.prototype,"layer",null),(0,l._)([(0,m.MZ)({type:String,json:{write:{overridePolicy:J}}})],z.prototype,"layerItemId",void 0),(0,l._)([(0,m.MZ)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:K}}})],z.prototype,"legendEnabled",void 0),(0,l._)([(0,m.MZ)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],z.prototype,"listMode",null),(0,l._)([(0,m.MZ)({type:Number,value:0,json:{write:{overridePolicy:Q}}})],z.prototype,"minScale",null),(0,l._)([(0,I.w)("minScale",["minScale","layerDefinition.minScale"])],z.prototype,"readMinScale",null),(0,l._)([(0,m.MZ)({type:Number,value:0,json:{write:{overridePolicy:Q}}})],z.prototype,"maxScale",null),(0,l._)([(0,I.w)("maxScale",["maxScale","layerDefinition.maxScale"])],z.prototype,"readMaxScale",null),(0,l._)([(0,m.MZ)({type:String})],z.prototype,"objectIdField",void 0),(0,l._)([(0,I.w)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],z.prototype,"readObjectIdFieldFromService",null),(0,l._)([(0,m.MZ)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:Q}}})],z.prototype,"opacity",null),(0,l._)([(0,I.w)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],z.prototype,"readOpacity",null),(0,l._)([(0,_.K)("opacity")],z.prototype,"writeOpacity",null),(0,l._)([(0,m.MZ)({json:{type:E.jz,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:Q}}})],z.prototype,"parent",void 0),(0,l._)([(0,_.K)("parent")],z.prototype,"writeParent",null),(0,l._)([(0,m.MZ)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,r)=>!r.disablePopup},write:{target:"disablePopup",overridePolicy:K,writer(e,r,t){r[t]=!e}}}})],z.prototype,"popupEnabled",void 0),(0,l._)([(0,m.MZ)({type:a.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:K}}})],z.prototype,"popupTemplate",void 0),(0,l._)([(0,m.MZ)({readOnly:!0})],z.prototype,"queryTask",null),(0,l._)([(0,m.MZ)({types:o.H,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Q},origins:{"web-scene":{types:o.X,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:Q}}}}})],z.prototype,"renderer",null),(0,l._)([(0,m.MZ)({types:{key:"type",base:null,typeMap:{"data-layer":j.L,"map-layer":C.f}},cast(e){if(e){if("mapLayerId"in e)return(0,E.PZ)(C.f,e);if("dataSource"in e)return(0,E.PZ)(j.L,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:Q}}})],z.prototype,"source",null),(0,l._)([(0,m.MZ)()],z.prototype,"sourceJSON",void 0),(0,l._)([(0,m.MZ)({value:null,json:{type:[E.jz],write:{target:"subLayerIds",allowNull:!0,overridePolicy:Q}}})],z.prototype,"sublayers",null),(0,l._)([(0,S.w)("sublayers")],z.prototype,"castSublayers",null),(0,l._)([(0,_.K)("sublayers")],z.prototype,"writeSublayers",null),(0,l._)([(0,m.MZ)({type:String,json:{name:"name",write:{overridePolicy:K}}})],z.prototype,"title",void 0),(0,l._)([(0,I.w)("service","title",["name","layerDefinition.name"])],z.prototype,"readTitle",null),(0,l._)([(0,m.MZ)({type:String})],z.prototype,"typeIdField",void 0),(0,l._)([(0,m.MZ)({json:{read:!1},readOnly:!0,value:"sublayer"})],z.prototype,"type",void 0),(0,l._)([(0,I.w)("typeIdField",["layerDefinition.typeIdField"])],z.prototype,"readTypeIdField",null),(0,l._)([(0,m.MZ)({type:[x.A],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],z.prototype,"types",void 0),(0,l._)([(0,m.MZ)({type:String,json:{name:"layerUrl",write:{overridePolicy:J}}})],z.prototype,"url",null),(0,l._)([(0,m.MZ)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:Q}}})],z.prototype,"visible",null),(0,l._)([(0,_.K)("visible")],z.prototype,"writeVisible",null),z=i=(0,l._)([(0,w.$)("esri.layers.support.Sublayer")],z);const X=z},16852:(e,r,t)=>{t.d(r,{C:()=>o,m:()=>a});var i=t(50076),l=t(50346);async function a(e,r,t){let a;try{a=await createImageBitmap(e)}catch(o){throw new i.A("request:server","Unable to load ".concat(r),{url:r,error:o})}return(0,l.Te)(t),a}async function o(e,r,t,a,o){let s;try{s=await createImageBitmap(e)}catch(n){throw new i.A("request:server","Unable to load tile ".concat(r,"/").concat(t,"/").concat(a),{error:n,level:r,row:t,col:a})}return(0,l.Te)(o),s}},65419:(e,r,t)=>{t.d(r,{Sk:()=>a,Zx:()=>l,_X:()=>s});var i=t(49140);function l(e,r,t){const i=r.flatten((e=>{let{sublayers:r}=e;return r})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>t||e.originIdOf("maxScale")>t||e.originIdOf("renderer")>t||e.originIdOf("labelingInfo")>t||e.originIdOf("opacity")>t||e.originIdOf("labelsVisible")>t||e.originIdOf("source")>t))||!o(e,r))}function a(e,r,t){return!!e.some((e=>{const r=e.source;return!(!r||"map-layer"===r.type&&r.mapLayerId===e.id&&(null==r.gdbVersion||r.gdbVersion===t))||e.originIdOf("renderer")>i.Gr.SERVICE||e.originIdOf("labelingInfo")>i.Gr.SERVICE||e.originIdOf("opacity")>i.Gr.SERVICE||e.originIdOf("labelsVisible")>i.Gr.SERVICE}))||!o(e,r)}function o(e,r){if(null===e||void 0===e||!e.length||null==r)return!0;const t=r.slice().reverse().flatten((e=>{let{sublayers:r}=e;return r&&r.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>t.length)return!1;let i=0;const l=t.length;for(const{id:a}of e){for(;i<l&&t[i]!==a;)i++;if(i>=l)return!1}return!0}function s(e){return!!e&&e.some((e=>{var r;return null!=e.minScale||null!=(null===(r=e.layerDefinition)||void 0===r?void 0:r.minScale)}))}}}]);
//# sourceMappingURL=5721.674f4e45.chunk.js.map