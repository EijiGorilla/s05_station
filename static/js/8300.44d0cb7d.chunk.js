"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[8300],{38300:(e,t,i)=>{i.r(t),i.d(t,{default:()=>U});var s,r,a,n,o,l,h=i(35143),d=i(39356),c=i(3825),u=i(81806),_=i(76460),m=i(50346),g=i(68134),f=i(46053),x=(i(47249),i(85842)),y=i(20664),v=i(9392),p=i(88954),b=i(4763);!function(e){e[e.Binary=0]="Binary",e[e.JSON=1]="JSON"}(s||(s={})),function(e){e[e.TreeIndex=0]="TreeIndex",e[e.TreeStats=1]="TreeStats",e[e.TreeData=2]="TreeData",e[e.BrickBundles=3]="BrickBundles",e[e.Section=4]="Section",e[e.VariableStats=5]="VariableStats"}(r||(r={})),function(e){e[e.None=1]="None",e[e.Front=2]="Front",e[e.Back=3]="Back"}(a||(a={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(n||(n={})),function(e){e[e.None=0]="None",e[e.StaticSections=1]="StaticSections",e[e.Slices=2]="Slices",e[e.DynamicSections=4]="DynamicSections",e[e.GhostShell=8]="GhostShell",e[e.Isosurface=16]="Isosurface",e[e.Quality=32]="Quality",e[e.SunLocation=64]="SunLocation",e[e.StaticSectionSelection=128]="StaticSectionSelection",e[e.ExaggerationAndOffset=256]="ExaggerationAndOffset",e[e.CurrentTime=512]="CurrentTime",e[e.CurrentVariable=1024]="CurrentVariable",e[e.DeleteIsosurface=2048]="DeleteIsosurface",e[e.ContainerVisibility=4096]="ContainerVisibility",e[e.RenderMode=8192]="RenderMode",e[e.Optimization=16384]="Optimization",e[e.VariableStyles=32768]="VariableStyles",e[e.VolumeStyles=65536]="VolumeStyles",e[e.AnalysisSlice=131072]="AnalysisSlice"}(o||(o={})),function(e){e[e.Isosurfaces=0]="Isosurfaces",e[e.DynamicSections=1]="DynamicSections",e[e.StaticSections=2]="StaticSections"}(l||(l={}));var w=i(28899);function T(e){return(0,w.s)("esri/libs/vxl/".concat(e))}var R,S=i(64465),L=i(45270),V=i(61985),C=i(74487),F=i(60586),E=i(29808),A=i(3112),I=i(71118),B=i(77730),P=i(93345);!function(e){e[e.Lifetime=1]="Lifetime",e[e.RequestResponse=2]="RequestResponse",e[e.Rendering=3]="Rendering",e[e.Error=4]="Error"}(R||(R={}));let k=class extends F.RW{constructor(e){super(e),this._halfIntTexturesAvailable=!1,this._textureFloatLinearAvailable=!1,this._havePreparedWithAllLayers=!1,this._renderPluginContext=null,this._vxlPromise=null,this._vxl=null,this._pluginIsActive=!1,this._moreToLoad=!1,this._viewportWidth=-1,this._viewportHeight=-1,this._newLayers=[],this._layers=new Map,this._rctx=null,this._renderTargetToRestore=null,this._lastFrameWasStationary=!1,this._wasmMemBlockSizes=[512,1024,2048,4096,8192,16384,32768,65536],this._wasmMemBlocks=new Map,this._dbgFlags=new Set,this._captureFrustum=!1,this._frustum=null,this._frustumRenderableId=-1,this._renderCoordsHelper=null,this.produces=new Map([[B.N.VOXEL,()=>!!this._vxl&&"local"===this.view.viewingMode]]),this.type=A.dz.VOXEL,this.slicePlaneEnabled=!0,this.isGround=!1,this.layerUid=[]}_dbg(e,t){this._dbgFlags.has(e)&&(e===R.Error?_.A.getLogger(this).error(t):_.A.getLogger(this).warn(t))}_removeRenderPlugin(){this._pluginIsActive&&this.view._stage&&(this._dbg(R.Lifetime,"--removeRenderPlugin--"),this.view._stage.removeRenderPlugin(this)),this._pluginIsActive=!1}initialize(){this._dbg(R.Lifetime,"--initialize--");for(const e of this._wasmMemBlockSizes)this._wasmMemBlocks.set(e,0);this.addHandles([(0,g.wB)((()=>this.view.ready),(e=>{e&&"local"===this.view.viewingMode?(this._dbg(R.Lifetime,"view ready status changed to ready on a local view, calling addRenderPlugin"),this.view._stage.addRenderPlugin(this),this._pluginIsActive=!0):(this._dbg(R.Lifetime,"view ready status changed, not ready or not a local view!"),this._removeRenderPlugin())}),g.Vh),(0,g.wB)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.qualityProfile}),(e=>{this._dbg(R.Rendering,"qualityProfile changed to "+e),this._vxl&&this._vxl.set_quality(this._toWasmQuality(e))}),g.Vh),(0,g.wB)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.timeExtent}),(()=>{if(this._vxl){var e;const t=this._getTimeArgs(null===(e=this.view)||void 0===e?void 0:e.timeExtent);this._dbg(R.Rendering,"sceneView timeExtent changed to useTime="+t.useTime+" st="+t.startTime+" et="+t.endTime),this._vxl.set_scene_time_extent(t.startTime,t.endTime,t.useTime),this._renderPluginContext.requestRender()}}),g.Vh),(0,g.wB)((()=>{var e;return null===(e=this.view)||void 0===e?void 0:e.stationary}),(e=>{this._vxl&&e&&!this._lastFrameWasStationary&&this._renderPluginContext.requestRender()}))])}initializeRenderContext(e){this._dbg(R.Lifetime,"--initializeRenderContext--");const t=e.renderContext.rctx;this._renderPluginContext=e,this._rctx=e.renderContext.rctx,this._halfIntTexturesAvailable=!!this._rctx.capabilities.textureNorm16,this._textureFloatLinearAvailable=this._rctx.capabilities.textureFloatLinear,this._initializeWasm(t.gl)}uninitializeRenderContext(){this._renderPluginContext=null,this._rctx=null,this._dbg(R.Lifetime,"--uninitializeRenderContext--")}_restoreFramebuffer(){if(!this._renderTargetToRestore)return;const e=this._renderTargetToRestore.fbo;if(!this._rctx)return void this._dbg(R.Error,"no context in restoreFramebuffer!");this._rctx.bindFramebuffer(e,!0);const t=this._renderTargetToRestore.viewport;this._rctx.setViewport(t.x,t.y,t.width,t.height)}_bindPreviousDepthToSlot(e,t){const i=!!this._rctx,s=!!this._renderTargetToRestore;if(!i||!s)return 0;const r=this._renderTargetToRestore.fbo.depthStencilTexture;return r?(0===t?this._rctx.bindTexture(null,e,!0):this._rctx.bindTexture(r,e,!0),1):(this._dbg(R.Error,"no depth/stencil texture exists!"),0)}_modifyResourceCount(e,t,i){if(!this._rctx)return void this._dbg(R.Error,"modifyAllocation callback has no rendering context!");const s=e;1===i?this._rctx.instanceCounter.increment(s,t):this._rctx.instanceCounter.decrement(s,t)}_setBlendState(e,t,i,s){this._rctx?(this._rctx.setBlendingEnabled(1===e),this._rctx.setBlendFunction(t,i),this._rctx.setBlendEquation(s)):this._dbg(R.Error,"setBlendState callback has no rendering context!")}_setFrontFace(e){this._rctx?this._rctx.setFrontFace(e):this._dbg(R.Error,"setFrontFace callback has no rendering context!")}_setDepthStencilStateFunction(e,t,i){this._rctx?(this._rctx.setDepthFunction(i),this._rctx.setDepthTestEnabled(1===e),this._rctx.setDepthWriteEnabled(1===t),this._rctx.setStencilTestEnabled(!1),this._rctx.setStencilFunction(P.MT.ALWAYS,0,255),this._rctx.setStencilOpSeparate(P.Y7.FRONT,P.eA.KEEP,P.eA.INCR,P.eA.KEEP),this._rctx.setStencilOpSeparate(P.Y7.BACK,P.eA.KEEP,P.eA.DECR,P.eA.KEEP)):this._dbg(R.Error,"setDepthStencilStateFunction callback has no rendering context!")}_setRasterizerState(e){if(this._rctx)switch(e){case a.None:this._rctx.setFaceCullingEnabled(!1);break;case a.Back:this._rctx.setCullFace(P.Y7.BACK),this._rctx.setFaceCullingEnabled(!0);break;case a.Front:this._rctx.setCullFace(P.Y7.FRONT),this._rctx.setFaceCullingEnabled(!0)}else this._dbg(R.Error,"setRasterizerState callback has no rendering context!")}_setViewport(e,t,i,s){this._rctx?this._rctx.setViewport(e,t,i,s):this._dbg(R.Error,"setViewport callback has no rendering context!")}_updateMemoryUsage(){this._layers.forEach(((e,t)=>{if(e.needMemoryUsageUpdate){const i=this._vxl.estimate_memory_usage(t);i>=0&&(e.needMemoryUsageUpdate=!1,e.layerView.setUsedMemory(i))}}))}_syncRequestsResponses(){this._layers.forEach(((e,t)=>{const i=[];e.responses.forEach(((s,a)=>{i.push(a),this._dbg(R.RequestResponse,"responding for requestID:"+a+" size:"+s.size),this._vxl.respond(t,a,s),s.requestType!==r.TreeIndex&&s.requestType!==r.Section||(e.needMemoryUsageUpdate=!0)}));const s=e.responses;for(const r of i)s.delete(r);const a=this._vxl.get_new_requests(t),n=e.abortController.signal;for(const r in a){e.outstandingRequestCount+=1,1===e.outstandingRequestCount&&e.layerView.updatingFlagChanged();const t=a[r],i={responseType:"array-buffer",signal:n,query:{...e.layerView.layer.customParameters,token:e.layerView.layer.apiKey}};this._dbg(R.RequestResponse,"making requestID:"+r+" url:"+t.url),(0,c.A)(t.url,i).then((i=>{e.outstandingRequestCount-=1,0===e.outstandingRequestCount&&e.layerView.updatingFlagChanged(),this._dbg(R.RequestResponse,"have response for requestID:"+r);let a=0;if(i.data.byteLength>0){a=this._vxl._malloc(i.data.byteLength);const e=new Uint8Array(this._vxl.HEAPU8.buffer,a,i.data.byteLength),t=new Uint8Array(i.data);for(let s=0;s<i.data.byteLength;++s)e[s]=t[s]}s.set(+r,{responseType:t.responseType,ptr:a,size:i.data.byteLength,success:!0,requestType:t.requestType})})).catch((i=>{e.outstandingRequestCount-=1,0===e.outstandingRequestCount&&e.layerView.updatingFlagChanged(),(0,m.zf)(i)||(this._dbg(R.Error,"requestID:".concat(r," failed, error=").concat(i.toString())),s.set(+r,{responseType:t.responseType,ptr:0,size:0,success:!1,requestType:t.requestType}))}))}}))}updateWasmCamera(e){this._vxl.set_projection_matrix.apply(this._vxl,e.projectionMatrix),this._vxl.set_view_matrix.apply(this._vxl,e.viewMatrix),this._vxl.set_near_far(e.near,e.far)}isUpdating(e){if(!this._vxl&&this._vxlPromise)return!0;const t=this._layers.get(e);return!!t&&t.outstandingRequestCount>0}getLayerTimes(e){const t=[];return this._layers.forEach(((i,s)=>{if(i.layerView.wasmLayerId===e.wasmLayerId){const i=this._vxl.get_layer_epoch_times(s,e.layer.currentVariableId);for(let e=0;e<i.length;++e)t.push(i[e])}})),t}getCurrentLayerTimeIndex(e){let t=0;return this._layers.forEach(((i,s)=>{i.layerView.wasmLayerId===e.wasmLayerId&&(t=this._vxl.get_layer_current_time_id(s))})),t}setEnabled(e,t){this._layers.forEach(((i,s)=>{i.layerView.wasmLayerId===e.wasmLayerId&&(this._vxl.set_enabled(s,t),i.needMemoryUsageUpdate=!0,this._renderPluginContext.requestRender())}))}setIsInScaleRange(e,t){const i=this._layers.get(e.wasmLayerId);i&&t!==i.isInScaleRange&&(i.isInScaleRange=t,this._vxl.set_is_in_scale_range(e.wasmLayerId,t),i.needMemoryUsageUpdate=!t,this._renderPluginContext.requestRender())}setStaticSections(e,t){const i={mask:o.StaticSections,staticSections:t};return this._doMaskedUIUpdate(e,i,!0)}setCurrentVariable(e,t){const i={mask:o.CurrentVariable,currentVariable:t};return this._doMaskedUIUpdate(e,i,!0)}setRenderMode(e,t){const i={mask:o.RenderMode,renderMode:t};return this._doMaskedUIUpdate(e,i,!0)}setVerticalExaggerationAndOffset(e,t,i,s){const r={mask:o.ExaggerationAndOffset,volStyleDesc:{volumeId:t,verticalExaggeration:i,verticalOffset:s}};return this._doMaskedUIUpdate(e,r,!0)}setVariableStyles(e,t){const i={mask:o.VariableStyles,variableStyles:t};return this._doMaskedUIUpdate(e,i,!0)}setVolumeStyles(e,t){const i={mask:o.VolumeStyles,volumeStyles:t};return this._doMaskedUIUpdate(e,i,!0)}setEnableDynamicSections(e,t){const i={mask:o.ContainerVisibility,containerIsVisible:t,container:l.DynamicSections};return this._doMaskedUIUpdate(e,i,!0)}setEnableIsosurfaces(e,t){const i={mask:o.ContainerVisibility,containerIsVisible:t,container:l.Isosurfaces};return this._doMaskedUIUpdate(e,i,!0)}setEnableSections(e,t){const i={mask:o.ContainerVisibility,containerIsVisible:t,container:l.StaticSections};return this._doMaskedUIUpdate(e,i,!0)}setAnalysisSlice(e,t,i,s){const r={mask:o.AnalysisSlice,analysisSlice:{point:i,normal:s,enabled:t}};return this._doMaskedUIUpdate(e,r,!0)}_doMaskedUIUpdate(e,t,i){if(!this._vxl)return!1;let s=!1;return this._layers.forEach(((i,r)=>{if(i.layerView.wasmLayerId===e.wasmLayerId){const e={str:JSON.stringify(t),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(e)&&(s=1===this._vxl.handle_masked_ui_update(r,e.ptr,e.byteCount),e.isReusable||this._vxl._free(e.ptr))}})),s&&i&&this._renderPluginContext.requestRender(),s}_addTriangleToWasmBuffer(e,t,i,s,r){return e[3*t]=i[0],e[3*t+1]=i[1],e[3*t+2]=i[2],e[3*(t+=1)]=s[0],e[3*t+1]=s[1],e[3*t+2]=s[2],e[3*(t+=1)]=r[0],e[3*t+1]=r[1],e[3*t+2]=r[2],t+1}_addNormalToWasmBuffer(e,t,i){return e[3*t]=i[0],e[3*t+1]=i[1],e[3*t+2]=i[2],t+1}_doCaptureFrustum(){if(!this._vxl)return;const e=36,t=this._vxl._malloc(108*Float32Array.BYTES_PER_ELEMENT),i=new Float32Array(this._vxl.HEAPF32.buffer,t,108),s=this._vxl._malloc(36*Float32Array.BYTES_PER_ELEMENT),r=new Float32Array(this._vxl.HEAPF32.buffer,s,e),a=this._frustum.points[b.J7.NEAR_BOTTOM_LEFT],n=this._frustum.points[b.J7.NEAR_BOTTOM_RIGHT],o=this._frustum.points[b.J7.NEAR_TOP_RIGHT],l=this._frustum.points[b.J7.NEAR_TOP_LEFT],h=this._frustum.points[b.J7.FAR_BOTTOM_LEFT],d=this._frustum.points[b.J7.FAR_BOTTOM_RIGHT],c=this._frustum.points[b.J7.FAR_TOP_RIGHT],u=this._frustum.points[b.J7.FAR_TOP_LEFT];let _=0,m=0;const g=this._frustum.planes[b.FB.NEAR];_=this._addTriangleToWasmBuffer(i,_,o,n,a),m=this._addNormalToWasmBuffer(r,m,g),_=this._addTriangleToWasmBuffer(i,_,a,l,o),m=this._addNormalToWasmBuffer(r,m,g);const f=this._frustum.planes[b.FB.FAR];_=this._addTriangleToWasmBuffer(i,_,h,d,c),m=this._addNormalToWasmBuffer(r,m,f),_=this._addTriangleToWasmBuffer(i,_,c,u,h),m=this._addNormalToWasmBuffer(r,m,f);const x=this._frustum.planes[b.FB.TOP];_=this._addTriangleToWasmBuffer(i,_,c,o,l),m=this._addNormalToWasmBuffer(r,m,x),_=this._addTriangleToWasmBuffer(i,_,l,u,c),m=this._addNormalToWasmBuffer(r,m,x);const y=this._frustum.planes[b.FB.BOTTOM];_=this._addTriangleToWasmBuffer(i,_,a,n,d),m=this._addNormalToWasmBuffer(r,m,y),_=this._addTriangleToWasmBuffer(i,_,d,h,a),m=this._addNormalToWasmBuffer(r,m,y);const v=this._frustum.planes[b.FB.LEFT];_=this._addTriangleToWasmBuffer(i,_,l,a,h),m=this._addNormalToWasmBuffer(r,m,v),_=this._addTriangleToWasmBuffer(i,_,h,u,l),m=this._addNormalToWasmBuffer(r,m,v);const p=this._frustum.planes[b.FB.RIGHT];_=this._addTriangleToWasmBuffer(i,_,o,c,d),m=this._addNormalToWasmBuffer(r,m,p),_=this._addTriangleToWasmBuffer(i,_,d,n,o),m=this._addNormalToWasmBuffer(r,m,p),-1!==this._frustumRenderableId&&this._vxl.remove_generic_mesh(this._frustumRenderableId),this._frustumRenderableId=this._vxl.add_generic_mesh(t,108,s,e,255,0,0,64),this._vxl._free(t),this._vxl._free(s),this._captureFrustum=!1,this._renderPluginContext.requestRender()}captureFrustum(){null===this._renderCoordsHelper&&(this._renderCoordsHelper=C.d.create(S.RT.Local,(0,p.Gs)(!1,this.view.spatialReference))),null===this._frustum&&(this._frustum=new V.P(this._renderCoordsHelper)),this._captureFrustum=!0,null!==this._renderPluginContext&&this._renderPluginContext.requestRender()}toggleFullVolumeExtentDraw(e){this._vxl&&this._layers.forEach(((t,i)=>{t.layerView.wasmLayerId===e.wasmLayerId&&(this._vxl.toggle_full_volume_extent_draw(i),this._renderPluginContext.requestRender())}))}addVoxelLayer(e){if(!this._vxl){const t={layerView:e,resolveCallback:null,rejectCallback:null},i=new Promise(((e,i)=>{t.resolveCallback=e,t.rejectCallback=i}));return this._newLayers.push(t),i}const t=this._addVoxelLayer(e);return t<0?Promise.reject(-1):Promise.resolve(t)}removeVoxelLayer(e){if(!this._vxl){const t=this._newLayers.findIndex((t=>e.uid===t.layerView.uid));t>=0&&(this._newLayers[t].resolveCallback(-1),this._newLayers.splice(t,1));const i=this._newLayers.length;return 0===i&&(this._dbg(R.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}let t=-1;this._layers.forEach(((i,s)=>{if(i.layerView.wasmLayerId===e.wasmLayerId){t=s,i.abortController.abort(),this._vxl.remove_layer(t);const r=this.layerUid.indexOf(e.layer.uid);-1!==r&&this.layerUid.splice(r,1)}})),t>=0&&this._layers.delete(t);const i=this._layers.size;return 0===i&&(this._dbg(R.Lifetime," no voxel layers left after removing a layer, removing RenderPlugin and destroying"),this.destroy()),i}_getBlockSize(e){for(const t of this._wasmMemBlockSizes)if(e<t)return t;return-1}_allocateBlock(e){e.byteCount=this._vxl.lengthBytesUTF8(e.str)+1;const t=this._getBlockSize(e.byteCount);return t<0?(e.isReusable=!1,e.ptr=this._vxl._malloc(e.byteCount)):(e.isReusable=!0,e.ptr=this._wasmMemBlocks.get(t),0===e.ptr&&(e.ptr=this._vxl._malloc(t),this._wasmMemBlocks.set(t,e.ptr))),0!==e.ptr&&(this._vxl.stringToUTF8(e.str,e.ptr,e.byteCount),!0)}_getTimeArgs(e){let t=-Number.MAX_VALUE,i=Number.MAX_VALUE,s=!1;return null!=e&&(e.isAllTime?s=!0:(null!=e.start&&(s=!0,t=e.start.getTime()/1e3),null!=e.end&&(s=!0,i=e.end.getTime()/1e3))),{startTime:t,endTime:i,useTime:s}}_addVoxelLayer(e){var t;const i=e.layer;let s=-1;const r=i.getConfiguration();if(r.length<1)return-1;const a={str:r,byteCount:0,ptr:0,isReusable:!1};if(!this._allocateBlock(a))return-1;const n=this._getTimeArgs(null===(t=this.view)||void 0===t?void 0:t.timeExtent),o=this.view.spatialReference.isWGS84&&i.spatialReference.isWGS84?111319.49079327357:1;if(s=this._vxl.add_layer(i.serviceRoot,a.ptr,a.byteCount,o,o,n.startTime,n.endTime,n.useTime,this._toWasmQuality(this.view.qualityProfile)),a.isReusable||this._vxl._free(a.ptr),s>=0){var l;(null===(l=i.test)||void 0===l?void 0:l.constantUpscaling)&&(this._setUpscalingLimits(0,.25,.25),this._setUpscalingLimits(1,.5,.5),this._setUpscalingLimits(2,.75,.75));const t=new AbortController;if(this._layers.set(s,{layerView:e,responses:new Map,outstandingRequestCount:0,abortController:t,needMemoryUsageUpdate:!1,isInScaleRange:!0}),this.layerUid.push(e.layer.uid),!this._halfIntTexturesAvailable||(0,u.A)("mac")){const t=[];let i="";for(const s of e.layer.variables)"Int16"!==s.renderingFormat.type&&"UInt16"!==s.renderingFormat.type||(t.push(s.name),s.id===e.layer.currentVariableId&&(i=s.name));""!==i&&_.A.getLogger(this).error("#addVoxelLayer_error()",e.layer,"The voxel layer '".concat(e.layer.title,"' cannot render the current variable '").concat(i,"' in this browser")),t.length>0&&_.A.getLogger(this).warn("#addVoxelLayer_warning()",e.layer,"The voxel layer '".concat(e.layer.title,"' cannot render the variables '").concat(t.toString(),"' in this browser"))}if(!this._textureFloatLinearAvailable){const t=[];let i="";for(const s of e.layer.variables)"Float32"===s.renderingFormat.type&&(t.push(s.name),s.id===e.layer.currentVariableId&&(i=s.name));""!==i&&_.A.getLogger(this).error("#addVoxelLayer_error()",e.layer,"The voxel layer '".concat(e.layer.title,"' cannot render the current variable '").concat(i,"' in this browser")),t.length>0&&_.A.getLogger(this).warn("#addVoxelLayer_warning()",e.layer,"The voxel layer '".concat(e.layer.title,"' cannot render the variables '").concat(t.toString(),"' in this browser"))}return(0,u.A)("esri-mobile")&&_.A.getLogger(this).warnOnce("Mobile support differs across devices. Voxel layer might not display as expected."),s}return-1}prepareRender(e){if(!this._vxl)return;const t=e.bindParameters.camera.viewForward,i=e.bindParameters.camera.eye;this._vxl.update_camera_pos_and_direction(i[0],i[1],i[2],t[0],t[1],t[2]);const s=this._vxl.cull();this._dbg(R.RequestResponse,"missingResourceCount="+s),this._moreToLoad=s>0,this._havePreparedWithAllLayers=0===this._newLayers.length,this._updateMemoryUsage()}renderNode(e){if(!this._vxl)return;for(const i of this._newLayers){const e=this._addVoxelLayer(i.layerView);-1===e?i.rejectCallback(-1):i.resolveCallback(e)}if(this._newLayers=[],0===this._layers.size)return void this._dbg(R.Error,"No voxel layers but RenderPlugin instance is being asked to render!");this._lastFrameWasStationary=this.view.stationary,this._syncRequestsResponses(),this._beforeDraw(),this._vxl.begin_color_frame(!this.view._stage.renderer.isFeatureEnabled(I.n.HighResolutionVoxel),e.bindParameters.lighting.mainLight.direction[0],e.bindParameters.lighting.mainLight.direction[1],e.bindParameters.lighting.mainLight.direction[2]);const t=this._renderTargetToRestore.viewport;t.width===this._viewportWidth&&t.height===this._viewportHeight||(this._viewportWidth=t.width,this._viewportHeight=t.height,this._vxl.set_viewport(t.width,t.height),this._layers.forEach((e=>{e.needMemoryUsageUpdate=!0}))),0===t.x&&0===t.y||this._dbg(R.Error,"Unsupported viewport parameters detected!"),this.updateWasmCamera(e.bindParameters.camera),this._captureFrustum&&(this._frustum.update(e.bindParameters.camera),this._doCaptureFrustum()),this._vxl.draw(),this._afterDraw(),(this._moreToLoad||!this._havePreparedWithAllLayers&&this._layers.size>0)&&this._renderPluginContext.requestRender()}destroy(){this._dbg(R.Lifetime,"--destroy--"),this._removeRenderPlugin(),this._vxl&&(this._layers.forEach((e=>{e.abortController.abort()})),this._wasmMemBlocks.forEach((e=>{0!==e&&this._vxl._free(e)})),this._vxl.uninitialize_voxel_wasm(),this._vxl=null)}_initializeWasm(e){return this._vxl?Promise.resolve():(this._vxlPromise||(this._vxlPromise=function(e){return new Promise((t=>i.e(7928).then(i.bind(i,7928)).then((e=>e.v)).then((i=>{let{default:s}=i;const r=s({locateFile:T,preinitializedWebGLContext:e,onRuntimeInitialized:()=>t(r)})})))).catch((e=>{throw e}))}(e).then((e=>{var t;if(this._vxl=e,this._vxlPromise=null,this._newLayers.length<=0)return this._dbg(R.Lifetime," no voxel layers left after WASM downloaded, removing RenderPlugin and destroying"),void this.destroy();const i=this._getTimeArgs(null===(t=this.view)||void 0===t?void 0:t.timeExtent),s=this._vxl.addFunction(this._restoreFramebuffer.bind(this),"v"),r=this._vxl.addFunction(this._setBlendState.bind(this),"viiii"),a=this._vxl.addFunction(this._setFrontFace.bind(this),"vi"),n=this._vxl.addFunction(this._setRasterizerState.bind(this),"vi"),o=this._vxl.addFunction(this._setDepthStencilStateFunction.bind(this),"viii"),l=this._vxl.addFunction(this._setViewport.bind(this),"viiii"),h=this._vxl.addFunction(this._bindPreviousDepthToSlot.bind(this),"iii"),d=this._vxl.addFunction(this._modifyResourceCount.bind(this),"viii"),c=this._halfIntTexturesAvailable&&!(0,u.A)("mac"),_=this._textureFloatLinearAvailable;this._vxl.initialize_voxel_wasm(s,r,a,n,o,l,h,d,i.startTime,i.endTime,i.useTime,c,_),this._renderPluginContext&&this._renderPluginContext.requestRender()})).catch((()=>{for(const e of this._newLayers)e.rejectCallback(-2);this._dbg(R.Error," WASM failed to download, removing RenderPlugin and destroying"),this.destroy()}))),this._vxlPromise)}pickDepth(e,t,i){if(!this._vxl||!this._rctx||0===this._layers.size)return null;const s=i.viewport[3]-t;if(e<0||e>i.viewport[2]||t<0||t>i.viewport[3])return this._dbg(R.Error,"[js] pickDepth: outOfRange, screenXY=[".concat(e.toFixed(0),", ").concat(s.toFixed(0),"]]")),null;this._beforeDraw();const r=i.viewForward,a=i.eye;this._vxl.update_camera_pos_and_direction(a[0],a[1],a[2],r[0],r[1],r[2]),this.updateWasmCamera(i),this._vxl.begin_frame();const n=this._vxl.pick_depth(e,s);return this._afterDraw(),n.success?n.distanceToCamera:null}pickObject(e,t,i,s){if(!this._vxl||!this._rctx||0===this._layers.size)return null;const r=Math.round(e),a=Math.round(t);if(r<0||r>i.viewport[2]||a<0||a>i.viewport[3])return this._dbg(R.Error,"[js] pickObject: outOfRange, screenXY=[".concat(r,", ").concat(a,"], vp=[").concat(i.viewport.toString(),"]")),null;this._beforeDraw();const n=i.viewForward,o=i.eye;this._vxl.update_camera_pos_and_direction(o[0],o[1],o[2],n[0],n[1],n[2]),this.updateWasmCamera(i),this._vxl.begin_frame();let l=null;if(0===s.length)l=this._vxl.pick_object(r,a,0,0);else{const e={str:JSON.stringify({layerIds:s}),byteCount:0,ptr:0,isReusable:!1};this._allocateBlock(e)&&(l=this._vxl.pick_object(r,a,e.ptr,e.byteCount),e.isReusable||this._vxl._free(e.ptr))}return this._afterDraw(),l}_beforeDraw(){this._renderTargetToRestore={fbo:this._rctx.getBoundFramebufferObject(),viewport:this._rctx.getViewport()},this._rctx.setPolygonOffsetFillEnabled(!1),this._rctx.setScissorTestEnabled(!1),this._rctx.setColorMask(!0,!0,!0,!0)}_afterDraw(){this._renderTargetToRestore.fbo=null,this._rctx.externalTextureUnitUpdate(this._vxl.get_texture_units_bound_in_frame(),this._vxl.get_active_texture_unit()),this._rctx.externalVertexArrayObjectUpdate(),this._rctx.externalVertexBufferUpdate(),this._rctx.externalProgramUpdate()}intersect(e,t,i,s,r){if(!this._vxl||!this._rctx||0===this._layers.size||!e.options.selectionMode||e.options.isFiltered)return;if(null==r||r[0]<0||r[0]>e.camera.viewport[2]||r[1]<0||r[1]>e.camera.viewport[3])return this._dbg(R.Error,"[js] VoxelWasmPerScene.intersect: outOfRange, screenXY=[".concat(r[0].toFixed(0),", ").concat(r[1].toFixed(0),"]")),null;const a=[];this._layers.forEach((t=>{e.options.filteredLayerUids.includes(t.layerView.layer.uid)&&a.push(t.layerView.wasmLayerId)}));const n=this.pickObject(r[0],r[1],e.camera,a);if(null==n||-1===n.layerId)return;const o=this._layers.get(n.layerId);if(o){const t=o.layerView.layer.uid,r=n.distanceToCamera/(0,y.q)(i,s),a=(0,v.vt)();a[0]=n.worldX,a[1]=n.worldY,a[2]=n.worldZ;const l={};if(null!=n.continuousValue&&null!=n.continuousValueUnits?l["Voxel.ServiceValue"]="".concat(n.continuousValue.toLocaleString()," ").concat(n.continuousValueUnits):null!=n.uniqueValueLabel&&null!=n.uniqueValue?l["Voxel.ServiceValue"]="".concat(n.uniqueValueLabel," (").concat(n.uniqueValue,")"):null!=n.uniqueValue&&(l["Voxel.ServiceValue"]="".concat(n.uniqueValue)),l["Voxel.ServiceVariableLabel"]=n.variableLabel,l["Voxel.Position"]=n.voxelSpacePosition,null!=n.epochTime&&null!=n.nativeTime&&null!=n.nativeTimeUnits){const e=new Date(n.epochTime);l["Voxel.ServiceLocalTime"]=e.toString(),l["Voxel.ServiceNativeTime"]="".concat(n.nativeTime.toLocaleString()," ").concat(n.nativeTimeUnits)}null!=n.depth&&null!=n.depthUnits&&(l["Voxel.ServiceDepth"]="".concat(n.depth.toLocaleString()," ").concat(n.depthUnits));const h=n.faceNormal;l["Voxel.WorldPosition"]="[".concat(a[0],", ").concat(a[1],", ").concat(a[2],"]");const d=e=>{const i=new L.Aw(a,t,(()=>this._createVoxelGraphic(o.layerView.layer,l)));e.set(this.type,i,r,h)},c=e.results,u=e.options.store===A.oH.ALL;if((null==c.min.dist||r<c.min.dist)&&d(c.min),(null==c.max.dist||r>c.max.dist)&&d(c.max),u){const t=(0,E.G7)(e.ray);d(t),e.results.all.push(t)}}}_createVoxelGraphic(e,t){return new d.A({layer:e,sourceLayer:e,attributes:t})}_toWasmQuality(e){switch(e){case"low":return 0;case"medium":return 1;case"high":return 2}}_setUpscalingLimits(e,t,i){this._vxl&&this._vxl.set_upscaling_limits(e,t,i)}};(0,h._)([(0,f.MZ)({constructOnly:!0})],k.prototype,"view",void 0),k=(0,h._)([(0,x.$)("esri.layers.VoxelWasmPerSceneView")],k);const U=k}}]);
//# sourceMappingURL=8300.44d0cb7d.chunk.js.map