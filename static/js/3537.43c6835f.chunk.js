"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[3537],{72317:(e,t,r)=>{r.d(t,{C:()=>o});var i=r(75543),n=r(61751),s=r(23241);class o extends n.w{constructor(e){super({...e,constraint:new i.i7(e.targetPoint)})}get hints(){return[new s._(this.targetPoint,this.isDraped,this.domain)]}}},13537:(e,t,r)=>{r.r(t),r.d(t,{SceneLayerSnappingSource:()=>H});var i=r(35143),n=r(91967),s=r(18690),o=r(50346),a=r(46053),d=(r(81806),r(76460),r(85842)),c=r(54901),l=r(30726),u=(r(47249),r(19451)),h=r(74527),p=r(9392),y=r(12016),_=r(93582),g=r(23862),w=r(9876),v=r(72317);let S=class extends n.A{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new f(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:i}=e,n=C;this.renderCoordsHelper.toRenderCoords(i,r.spatialReference,n);const s=e.distance,o="number"==typeof s?s:s.distance,a=await this._workerHandle.invoke({bounds:(0,_.f)(n[0],n[1],n[2],o),returnEdge:e.returnEdge,returnVertex:"none"!==e.vertexMode},t);return a.candidates.sort(((e,t)=>e.distance-t.distance)),a.candidates.map((e=>this._convertCandidate(r,e)))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new w.z({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new v.C({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate(e,t){let{spatialReference:r}=e;const i=(0,p.vt)();return this.renderCoordsHelper.fromRenderCoords(t,i,r),(0,g._7)(i)}async _fetchAllEdgeLocations(e,t){const r=[],i=[];for(const{id:n,uid:s}of e.components)this._ids.has(n)&&r.push((async()=>{const e=await this.fetchEdgeLocations(n,t.signal),r=e.locations.buffer;return i.push(r),{id:n,uid:s,objectIds:e.objectIds,locations:r,origin:e.origin,type:e.type}})());return{result:{components:(await Promise.all(r)).filter((e=>{let{id:t}=e;return this._ids.has(t)}))},transferList:i}}};(0,i._)([(0,a.MZ)({constructOnly:!0})],S.prototype,"renderCoordsHelper",void 0),(0,i._)([(0,a.MZ)({constructOnly:!0})],S.prototype,"fetchEdgeLocations",void 0),(0,i._)([(0,a.MZ)({constructOnly:!0})],S.prototype,"schedule",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],S.prototype,"availability",void 0),S=(0,i._)([(0,d.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],S);class f extends y.B{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const C=(0,p.vt)();let k=class extends n.A{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new u.U,this._abortController=new AbortController}destroy(){this._tracker=(0,l.xt)(this._tracker),this._abortController=(0,l.DC)(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new h.U(b(t)),this._workerHandle=new S({renderCoordsHelper:this.view.renderCoordsHelper,schedule:b(t),fetchEdgeLocations:async(e,t)=>{if(null==this._tracker)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(e,this._edgeWorker,t)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([(0,c.DQ)(this._workerHandle),(0,c.DQ)(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){var e;if(this.destroyed)return;const t=null===(e=this._abortController)||void 0===e?void 0:e.signal,r=await this.getLayerView();null==r||(0,o.G4)(t)||(this._tracker=r.trackSnappingSources({add:(e,r)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:e,bounds:r},t))},remove:e=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:e},t))}}))}};function b(e){return t=>e.immediate.schedule(t)}(0,i._)([(0,a.MZ)({constructOnly:!0})],k.prototype,"getLayerView",void 0),(0,i._)([(0,a.MZ)({constructOnly:!0})],k.prototype,"view",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],k.prototype,"updating",null),(0,i._)([(0,a.MZ)({readOnly:!0})],k.prototype,"availability",void 0),k=(0,i._)([(0,d.$)("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],k);let H=class extends n.A{get updating(){return this._i3sSources.some((e=>e.updating))}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach((e=>e.destroy())),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map((r=>r.fetchCandidates(e,t))));return(0,o.Te)(t),r.flat()}refresh(){this._i3sSources.forEach((e=>e.refresh()))}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map((r=>"building-component"===r.type?new k({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null)).filter(s.Ru)}_getSceneLayerI3SSource(e,t){return new k({getLayerView:async()=>{const r=await e.whenLayerView(t);return"scene-layer-graphics-3d"===r.type?void 0:r},view:e})}};(0,i._)([(0,a.MZ)({constructOnly:!0})],H.prototype,"layerSource",void 0),(0,i._)([(0,a.MZ)({constructOnly:!0})],H.prototype,"view",void 0),(0,i._)([(0,a.MZ)({readOnly:!0})],H.prototype,"updating",null),(0,i._)([(0,a.MZ)({readOnly:!0})],H.prototype,"availability",void 0),H=(0,i._)([(0,d.$)("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],H)}}]);
//# sourceMappingURL=3537.43c6835f.chunk.js.map