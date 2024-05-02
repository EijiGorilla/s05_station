"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[4397],{84397:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var i=r(35143),o=r(3825),s=r(69098),a=r(19276),n=r(50076),l=r(77717),d=r(50346),p=r(90534),u=r(46053),y=(r(81806),r(76460)),c=(r(47249),r(85842)),h=r(25515),f=r(54901),m=r(53521),v=r(87663),g=r(65624),_=r(5682),b=r(95363),I=r(62487),w=r(51162),M=r(65308),j=r(70652),L=r(72003);class Z{constructor(e,t){this.objectId=e,this.itemSource=t,this.count=0,this.layer=null,this.sortValue=void 0}}const F=new m.q(20,(e=>e.destroy()));let A=class extends((0,_.j)((0,g.d)((0,l.P)(h.A)))){constructor(e){super(e),this._oidToReference=new Map,this._layerToReference=new Map,this._portals=new Map,this.layers=new a.A,this.maximumVisibleSublayers=10,this.opacity=1,this.title="Layers In View",this.type="catalog-dynamic-group",this.visible=!0}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get _orderBy(){var e,t;return null!==(e=null===(t=this.parent.orderBy)||void 0===t?void 0:t.find((e=>!e.valueExpression&&e.field)))&&void 0!==e?e:new w.A({field:this.parent.objectIdField})}get _referenceComparator(){const e=this._orderBy,t=this.parent.fieldsIndex.get(e.field),r=(0,L.FM)(null===t||void 0===t?void 0:t.toJSON().type,"descending"===e.order);return(e,t)=>r(e.sortValue,t.sortValue)||e.objectId-e.objectId}acquireLayer(e){const t=e.getObjectId(),r=(0,v.tE)(this._oidToReference,t,(()=>this._createLayerReference(e)));return r.count++,(0,f.hA)((()=>{r.count--,r.count||this._disposeLayerReference(r)}))}_createLayerReference(e){const t=e.getObjectId(),r=e.getAttribute(this.parent.itemSourceField),i=new Z(t,r);if(F.get(r))return this._addLayer(F.pop(r),i,e),i;let o;try{o=JSON.parse(r)}catch(s){return y.A.getLogger(this).error(s),i}return this._createLayer(o).then((t=>{this.destroyed||0===i.count?(F.get(r)||F.put(i.itemSource,t),i.layer=null):this._addLayer(t,i,e)})).catch((()=>{})),i}_addLayer(e,t,r){this._layerToReference.set(e,t),t.sortValue=r.getAttribute(this._orderBy.field),t.layer=e,e.parent=this,this.layers.add(e),this.layers.sort(((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t))))}_disposeLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),F.put(e.itemSource,e.layer)),this._oidToReference.delete(e.objectId)}async _createLayer(e){if(!function(e){return"object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}(e))return new(await I.S.UnsupportedLayer());const{itemId:t,portalUrl:r}=e,i=(0,v.tE)(this._portals,r,(()=>new M.A({url:r})));return h.A.fromPortalItem(new j.default({id:t,portal:i}))}};(0,i._)([(0,u.MZ)()],A.prototype,"_orderBy",null),(0,i._)([(0,u.MZ)()],A.prototype,"_referenceComparator",null),(0,i._)([(0,u.MZ)({readOnly:!0})],A.prototype,"layers",void 0),(0,i._)([(0,u.MZ)()],A.prototype,"maximumVisibleSublayers",void 0),(0,i._)([(0,u.MZ)(b.ke)],A.prototype,"opacity",void 0),(0,i._)([(0,u.MZ)({type:String,json:{name:"title",write:!0}})],A.prototype,"title",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],A.prototype,"type",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],A.prototype,"visible",void 0),A=(0,i._)([(0,c.$)("esri.layers.catalog.CatalogDynamicGroupLayer")],A);const T=A;var P=r(16868),S=(r(63844),r(14873),r(47662),r(72690),r(86946),r(71832),r(5766),r(35039),r(86616),r(31382)),x=r(74440),R=r(71401),O=r(27937),C=r(30973);let V=class extends((0,_.j)((0,x.F)((0,g.d)((0,l.P)(h.A))))){constructor(e){super(e),this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}get fields(){return this.parent.fields}get fieldsIndex(){return this.parent.fieldsIndex}get geometryType(){return this.parent.geometryType}get objectIdField(){return this.parent.objectIdField}get orderBy(){return this.parent.orderBy}createPopupTemplate(e){const t={fields:this.parent.fields,objectIdField:this.parent.objectIdField,title:this.title};return(0,C.tn)(t,e)}createQuery(){return this.parent.createQuery()}queryFeatures(e,t){return this.parent.queryFeatures(e,t)}};(0,i._)([(0,u.MZ)({readOnly:!0})],V.prototype,"defaultPopupTemplate",null),(0,i._)([(0,u.MZ)({type:[R.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:O.w,write:!0}})],V.prototype,"labelingInfo",void 0),(0,i._)([(0,u.MZ)(b.kF)],V.prototype,"labelsVisible",void 0),(0,i._)([(0,u.MZ)(b.fV)],V.prototype,"legendEnabled",void 0),(0,i._)([(0,u.MZ)(b.ke)],V.prototype,"opacity",void 0),(0,i._)([(0,u.MZ)(b.M6)],V.prototype,"popupEnabled",void 0),(0,i._)([(0,u.MZ)({type:P.A,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),(0,i._)([(0,u.MZ)({types:S.H,json:{name:"layerDefinition.drawingInfo.renderer"}})],V.prototype,"renderer",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],V.prototype,"type",void 0),(0,i._)([(0,u.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],V.prototype,"visible",void 0),V=(0,i._)([(0,c.$)("esri.layers.catalog.CatalogFootprintLayer")],V);const q=V;var E=r(89078),Q=r(40296),B=r(12406),k=r(19502),D=r(31362),J=r(60693),G=r(11270),N=r(37534),U=r(94729),$=r(21617),H=r(78817),K=r(91447),z=r(76350),W=r(38278),X=r(97015);const Y=(0,z.p)();let ee=class extends((0,J.j)((0,g.d)((0,N.f)((0,H.e)((0,_.j)((0,$.J)((0,k.b)((0,G.q)((0,U.A)((0,l.P)((0,D.d)((0,B.p)((0,s.O)(h.A)))))))))))))){constructor(e){super(e),this.dynamicGroupLayer=new T({parent:this}),this.fields=null,this.fieldsIndex=null,this.footprintLayer=new q({parent:this}),this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new a.A([this.dynamicGroupLayer,this.footprintLayer]),this.source=new E.default({layer:this}),this.type="catalog"}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(d.QP).then((async()=>{var e;if(!this.url)throw new n.A("catalog-layer:missing-url","Catalog layer must be created with a url");if(this.url&&null==this.layerId){const e=await this._fetchFirstValidLayerId(t);if(null==e)throw new n.A("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:this.url});this.layerId=e}await this.source.load(),this.source.sourceJSON&&(this.sourceJSON=this.source.sourceJSON,this.read(this.source.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:null===(e=this.portalItem)||void 0===e?void 0:e.portal,url:this.parsedUrl}))})).then((()=>(0,K.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){var e;return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(null!==(e=this._get("createQueryVersion"))&&void 0!==e?e:0)+1}get parsedUrl(){const e=(0,p.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,p.fj)(e.path,this.layerId.toString())),e}createQuery(){var e;const t=new X.A,r=null===(e=this.capabilities)||void 0===e?void 0:e.query;t.returnGeometry=!0,r&&(t.compactGeometryEnabled=r.supportsCompactGeometry,t.defaultSpatialReferenceEnabled=r.supportsDefaultSpatialReference),t.outFields=["*"];const{timeOffset:i,timeExtent:o}=this;return t.timeExtent=null!=i&&null!=o?o.offset(-i.value,i.unit):o||null,t}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var r;return null===(r=this.fieldsIndex.get(e))||void 0===r?void 0:r.domain}async queryFeatures(e,t){var r;const i=await this.load(),o=await i.source.queryFeatures(null!==(r=X.A.from(e))&&void 0!==r?r:i.createQuery(),t);if(null!==o&&void 0!==o&&o.features)for(const s of o.features)s.layer=s.sourceLayer=i.footprintLayer;return o}async queryObjectIds(e,t){var r;return(await this.load()).source.queryObjectIds(null!==(r=X.A.from(e))&&void 0!==r?r:this.createQuery(),t)}async queryFeatureCount(e,t){var r;return(await this.load()).source.queryFeatureCount(null!==(r=X.A.from(e))&&void 0!==r?r:this.createQuery(),t)}async queryExtent(e,t){var r;return(await this.load()).source.queryExtent(null!==(r=X.A.from(e))&&void 0!==r?r:this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&(0,W.D)(this,e)}read(e,t){super.read(e,t);let r=e.footprintLayer;r||"service"!==(null===t||void 0===t?void 0:t.origin)||(r={layerDefinition:{drawingInfo:(0,Q.F0)(e.geometryType)}}),this.footprintLayer.read(r,t)}_fetchFirstValidLayerId(e){return(0,o.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{var t;const r=e.data;if(r)return Array.isArray(r.layers)?null===(t=r.layers.find((e=>"Catalog Layer"===e.type)))||void 0===t?void 0:t.id:void 0}))}};(0,i._)([(0,u.MZ)({readOnly:!0})],ee.prototype,"createQueryVersion",null),(0,i._)([(0,u.MZ)({...Y.fields,json:{origins:{service:{name:"fields"}}}})],ee.prototype,"fields",void 0),(0,i._)([(0,u.MZ)(Y.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,i._)([(0,u.MZ)({json:{read:!1,write:!1}})],ee.prototype,"footprintLayer",void 0),(0,i._)([(0,u.MZ)()],ee.prototype,"itemSourceField",void 0),(0,i._)([(0,u.MZ)()],ee.prototype,"itemTypeField",void 0),(0,i._)([(0,u.MZ)()],ee.prototype,"layers",void 0),(0,i._)([(0,u.MZ)({value:"CatalogLayer",type:["CatalogLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.MZ)()],ee.prototype,"outFields",void 0),(0,i._)([(0,u.MZ)({readOnly:!0})],ee.prototype,"parsedUrl",null),(0,i._)([(0,u.MZ)()],ee.prototype,"source",void 0),(0,i._)([(0,u.MZ)({json:{read:!1}})],ee.prototype,"type",void 0),ee=(0,i._)([(0,c.$)("esri.layers.CatalogLayer")],ee);const te=ee}}]);
//# sourceMappingURL=4397.c4c924eb.chunk.js.map