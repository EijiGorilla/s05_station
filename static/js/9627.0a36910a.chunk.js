"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[9627],{57612:(t,e,i)=>{var n,s;i.d(e,{f:()=>s,n:()=>n}),function(t){t[t.None=0]="None",t[t.Direct=1]="Direct",t[t.Triangle=2]="Triangle",t[t.ProjectedGeodesic=3]="ProjectedGeodesic"}(n||(n={})),function(t){t[t.Auto=0]="Auto",t[t.AboveSegment=1]="AboveSegment",t[t.BelowSegment=2]="BelowSegment"}(s||(s={}))},87562:(t,e,i)=>{var n;i.d(e,{G:()=>n}),function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"}(n||(n={}))},99627:(t,e,i)=>{i.r(e),i.d(e,{default:()=>ut});var n=i(35143),s=i(50346),a=i(46053),l=(i(81806),i(76460),i(47249),i(85842)),o=i(25329),r=i(95085),u=i(31633),d=i(13904);let h=class extends r.A{constructor(t){super(t),this.type="direct-line-measurement",this.startPoint=null,this.endPoint=null,this.unit=null}get requiredPropertiesForEditing(){return[this.startPoint,this.endPoint]}clear(){this.startPoint=null,this.endPoint=null}};(0,n._)([(0,a.MZ)({type:["direct-line-measurement"]})],h.prototype,"type",void 0),(0,n._)([(0,a.MZ)({type:d.A})],h.prototype,"startPoint",void 0),(0,n._)([(0,a.MZ)({type:d.A})],h.prototype,"endPoint",void 0),(0,n._)([(0,a.MZ)({type:u.GB,value:null})],h.prototype,"unit",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],h.prototype,"requiredPropertiesForEditing",null),h=(0,n._)([(0,l.$)("esri.analysis.DirectLineMeasurementAnalysis")],h);const c=h;var p,v,g=i(68134),_=i(16159),y=(i(35238),i(30726)),m=i(56002),w=i(19451),M=i(32535),b=i(77515),P=i(3233),D=i(7947),f=i(69539),L=i(91967),Z=i(59784),S=i(9392),V=i(44230),O=i(87562),C=i(57612),A=i(56121),U=i(38317),T=i(91175),G=i(99469),x=i(62577);(v=p||(p={})).Manipulators="manipulators",v.AnalysisViewDestroyed="analysis-view-destroyed",v.AnalysisView="analysis-view";let H=class extends L.A{constructor(t){super(t),this.cursorPoint=null,this._visible=!1,this._laserLine=null,this.laserLineEnabled=!0,this._lastDraggedHandle=null}initialize(){this._laserLine=new G.o({view:this.view,attached:!0,isDecoration:!0}),this._updateVisibility(this._visible),this._connectToAnalysisView(),this.addHandles((0,g.wB)((()=>this._params),(t=>{let{laserLineGlowColor:e,laserLineInnerColor:i,laserLineGlobalAlpha:n}=t;const s=this._laserLine,a=s.style;s.style={...a,innerColor:i,glowColor:e,globalAlpha:n}})))}destroy(){this._laserLine=(0,y.pR)(this._laserLine)}get _params(){const{accentColor:t}=this.view.effectiveTheme;return{laserLineGlowColor:f.A.toUnitRGB(t),laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:f.A.toUnitRGB((0,Z.bJ)(t)),laserLineInnerWidth:.75,laserLineGlobalAlpha:.75*t.a,handleColor:(0,Z.f6)(t,.5),handleRadius:5}}get visible(){return this._visible}set visible(t){t?this.show():this.hide()}get testData(){const t=this._laserLine.testData,e=this.analysisViewData.testData;return{labels:null===e||void 0===e?void 0:e.labels,stripeLength:null===e||void 0===e?void 0:e.stripeLength,laserLineRenderer:{heightManifoldEnabled:null!=t&&t.heightManifoldEnabled,heightManifoldTarget:null!=t?t.heightManifoldTarget:null,pointDistanceEnabled:null!=t&&t.pointDistanceEnabled,pointDistanceOrigin:null!=t?t.pointDistanceOrigin:null,pointDistanceTarget:null!=t?t.pointDistanceTarget:null,lineVerticalPlaneEnabled:null!=t&&t.lineVerticalPlaneEnabled}}}get _cursorPosition(){const t=(0,S.vt)(),e=this.cursorPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _startPosition(){const t=(0,S.vt)(),e=this.analysis.startPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _endPosition(){const t=(0,S.vt)(),e=this.analysis.endPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _laserLineParams(){const t=this._focusPosition,{active:e,lineState:i}=this.toolState,n=this.analysisViewData,s=this.laserLineEnabled&&!!t&&"measured"!==i&&e;if(!s||!this.visible||null==n||n.destroyed)return{heightManifoldTarget:null,pointDistanceLine:null,lineVerticalPlaneSegment:null};const a=n.actualVisualizedMeasurement,l="local"!==this.view.viewingMode&&s&&!!this.analysis.startPoint&&"geodesic"===a,o=s&&n.viewMode===C.n.Triangle;return{heightManifoldTarget:"euclidean"===a?t:null,pointDistanceLine:l?this._pointDistanceLine:null,lineVerticalPlaneSegment:o?(0,V.Cr)(this._startPosition,this._endPosition):null}}get _focusPosition(){const{lineState:t}=this.toolState,e=this.analysisViewData,i=null!=e&&!e.destroyed&&e.measurementMode===O.G.Euclidean&&e.viewMode===C.n.Direct;switch(t){case"drawing":return i?this._startPosition:this.analysis.endPoint?this._endPosition:this._startPosition;case"editing":return i?"start"===this._lastDraggedHandle?this._endPosition:this._startPosition:"start"===this._lastDraggedHandle?this._startPosition:this._endPosition;default:return null!=this.cursorPoint?this._cursorPosition:null}}get _pointDistanceLine(){return{origin:"drawing"===this.toolState.lineState||"end"===this._lastDraggedHandle?this._startPosition:this._endPosition,target:this._focusPosition}}createManipulators(){const t=this._params,{view:e}=this,i=()=>{const i=(0,U.UM)(t.handleColor),n=[new T.M((0,x.CM)(i,1,32,32))],s=new A.q({view:e,renderObjects:n});return s.available=!1,s.radius=t.handleRadius,[s,i]},[n,s]=i(),[a,l]=i(),o=new A.q({view:this.view});o.available=!1,o.interactive=!1,null!=this.analysis.startPoint&&(n.location=this.analysis.startPoint,n.available=!0),null!=this.analysis.endPoint&&(a.location=this.analysis.endPoint,a.available=!0);const r=()=>{let t=this._lastDraggedHandle;n.grabbing&&!a.grabbing&&(t="start"),a.grabbing&&!n.grabbing&&(t="end"),n.grabbing||a.grabbing||(t=null),this._lastDraggedHandle=t},u=n.events.on("grab-changed",r),d=a.events.on("grab-changed",r);return this.addHandles([u,d,(0,g.wB)((()=>(0,Z.pf)(this._params.handleColor)),(t=>{s.setParameters({color:t}),l.setParameters({color:t})}),{equals:Z.we})],p.Manipulators),{start:n,end:a,cursor:o}}show(){this.destroyed||this._visible||this._updateVisibility(!0)}hide(){!this.destroyed&&this._visible&&this._updateVisibility(!1)}_connectToAnalysisView(){this.removeHandles(p.AnalysisView),this.addHandles([(0,g.wB)((()=>{var t;return null===(t=this.analysisViewData)||void 0===t?void 0:t.destroyed}),(t=>{t&&this.removeHandles(p.AnalysisView)}),g.Vh),(0,g.wB)((()=>["measured"===this.toolState.lineState,this.analysisViewData]),(t=>{let[e,i]=t;null==i||i.destroyed||(i.allowVisualElementsOrientationChange=!e)}),g.Vh),(0,g.wB)((()=>this._laserLineParams),(t=>{const e=this._laserLine;e.heightManifoldTarget=t.heightManifoldTarget,e.pointDistanceLine=t.pointDistanceLine,e.lineVerticalPlaneSegment=t.lineVerticalPlaneSegment}),g.Vh)],p.AnalysisView)}_updateVisibility(t){this.initialized&&(this._visible=t,t?this._laserLine.style={innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,glowFalloff:this._params.laserLineGlowFalloff,globalAlpha:this._params.laserLineGlobalAlpha}:this.view.cursor=null,this._laserLine.visible=t)}};(0,n._)([(0,a.MZ)({constructOnly:!0})],H.prototype,"view",void 0),(0,n._)([(0,a.MZ)()],H.prototype,"_params",null),(0,n._)([(0,a.MZ)({constructOnly:!0})],H.prototype,"analysis",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],H.prototype,"analysisViewData",void 0),(0,n._)([(0,a.MZ)()],H.prototype,"cursorPoint",void 0),(0,n._)([(0,a.MZ)()],H.prototype,"toolState",void 0),(0,n._)([(0,a.MZ)()],H.prototype,"visible",null),(0,n._)([(0,a.MZ)()],H.prototype,"testData",null),(0,n._)([(0,a.MZ)()],H.prototype,"_visible",void 0),(0,n._)([(0,a.MZ)()],H.prototype,"_laserLine",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],H.prototype,"laserLineEnabled",void 0),(0,n._)([(0,a.MZ)()],H.prototype,"_cursorPosition",null),(0,n._)([(0,a.MZ)()],H.prototype,"_startPosition",null),(0,n._)([(0,a.MZ)()],H.prototype,"_endPosition",null),(0,n._)([(0,a.MZ)()],H.prototype,"_lastDraggedHandle",void 0),(0,n._)([(0,a.MZ)()],H.prototype,"_laserLineParams",null),(0,n._)([(0,a.MZ)()],H.prototype,"_focusPosition",null),(0,n._)([(0,a.MZ)()],H.prototype,"_pointDistanceLine",null),H=(0,n._)([(0,l.$)("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DView")],H);var E=i(80935),B=i(5109),k=i(89238),R=i(70825),z=i(974),I=i(39612),q=i(56119),W=i(13284),F=i(61237),N=i(70330),$=i(11500);let j=class extends B.k{constructor(t){super(t),this._updatingHandles=new w.U,this._emulatedDrag=null,this.lineState="initial",this.startPointSurfaceLocation=null,this.endPointSurfaceLocation=null,this.cursorPointSurfaceLocation=null,this.startManipulator=null,this.endManipulator=null,this.cursorManipulator=null,this._getSnappingContext=(0,m.B)((t=>new W.e({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new I.p(new z.ZE("point",(0,k.BV)(!0,!1,this.view.spatialReference))),visualizer:new P.s})))}initialize(){const{view:t,analysis:e,analysisViewData:i,visible:n}=this;this.measurementView=new H({toolState:this,view:t,analysis:e,analysisViewData:i,visible:n});const s=(0,q.X)(t);this._snappingManagerResult=s,this.addHandles(s);const{start:a,end:l,cursor:o}=this.measurementView.createManipulators(),r=(t,e,i)=>(0,R.Xt)(t,((t,n,s,a)=>{const l=(0,D.z7)(t),o=this._snappingManager,r=this._getSnappingContext(a),u=this._updatingHandles,{lineState:h}=this;s=s.next(l).next((0,R.VG)(this,[i,e])).next((i=>{if("cursorPoint"!==e){const i=this.analysis[e];null!=i&&(t.location=i)}return i}));const c=(0,D.xk)(this.view);let p=n.next(l).next((t=>{const n=c(t);return n||"drawing"!==this.lineState&&"initial"!==this.lineState||(this[e]=null,this[i]=null),n}));if("touch"!==a||"editing"===h){const{snappingStep:t,cancelSnapping:e}=(0,F.L)({snappingManager:o,snappingContext:r,updatingHandles:u});s=s.next(e),p=p.next(...t)}p.next((t=>"start"!==t.action?t:null)).next((n=>{const s=(0,M.EL)(n.mapEnd,new d.A);this[e]=s,t.location=s,this[i]=this._surfaceLocation(s,n.surfaceType)}))})),u=t=>t.events.on("grab-changed",(()=>{const t=a.grabbing||l.grabbing;this.lineState=t?"editing":"measured"}));this.addHandles([r(a,"startPoint","startPointSurfaceLocation"),r(l,"endPoint","endPointSurfaceLocation"),r(o,"cursorPoint","cursorPointSurfaceLocation"),u(a),u(l)]),this.manipulators.add(a),this.manipulators.add(l),this.manipulators.add(o),this.startManipulator=a,this.endManipulator=l,this.cursorManipulator=o,this.addHandles((0,g.wB)((()=>this.state),(t=>{"measured"===t&&this.finishToolCreation()}),g.pc)),(0,N.BY)(this)}destroy(){this._updatingHandles=(0,y.pR)(this._updatingHandles),this.measurementView=(0,y.pR)(this.measurementView)}get _snappingManager(){return this._snappingManagerResult.snappingManager}get state(){const{analysis:t}=this;if(null==t.startPoint&&null==t.endPoint)return"ready";const{lineState:e}=this;return this.validMeasurement&&"editing"!==e&&"drawing"!==e?"measured":"measuring"}get cursor(){return"ready"===this.state||"drawing"===this.lineState?"crosshair":null}get startPoint(){return this.analysis.startPoint}set startPoint(t){this.analysis.startPoint=t}get endPoint(){return this.analysis.endPoint}set endPoint(t){this.analysis.endPoint=t}get cursorPoint(){return this.measurementView.cursorPoint}set cursorPoint(t){this.measurementView.cursorPoint=t}get snappingOptions(){return this._snappingManager.options}get validMeasurement(){return null!=this.analysis.startPoint&&null!=this.analysis.endPoint}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}onShow(){this.measurementView.show(),this._updateManipulatorAvailability()}onHide(){this.measurementView.hide()}onDeactivate(){var t;null!==(t=this._emulatedDrag)&&void 0!==t&&t.cancel(),this._emulatedDrag=null}onInputEvent(t){switch(t.type){case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t)}this._updateManipulatorAvailability()}_handlePointerMove(t){var e,i;if(!this.active||this.view.navigating)return;const{pointerType:n}=t;if("mouse"!==n)return;const s=(0,$.ZV)(t),{lineState:a,cursorManipulator:l,endManipulator:o}=this;let r=!1;null==this.cursorPoint&&(null!==(e=this._emulatedDrag)&&void 0!==e&&e.cancel(),this._emulatedDrag=K(l,n,s),r=!0),"initial"===a&&(null!==(i=this._emulatedDrag)&&void 0!==i&&i.update(s),r=!0),"drawing"===a&&(o.events.emit("drag",{action:"update",start:s,screenPoint:s}),r=!0),r&&t.stopPropagation()}_handleImmediateClick(t){var e,i,n,s;if(!this.active)return;if(!(0,b.s7)(t))return;const a=(0,$.ZV)(t),{pointerType:l}=t,{cursorManipulator:o,startManipulator:r,endManipulator:u,lineState:d}=this;let h=!1;switch(null==this.cursorPoint&&(null!==(e=this._emulatedDrag)&&void 0!==e&&e.cancel(),this._emulatedDrag=K(o,l,a)),d){case"initial":if(null!==(i=this._emulatedDrag)&&void 0!==i&&i.update(a),null!=this.cursorPoint){var c;null!==(c=this._emulatedDrag)&&void 0!==c&&c.end(a),this._emulatedDrag=null;const{cursorPoint:t}=this;this.startPoint=t,this.startPointSurfaceLocation=this.cursorPointSurfaceLocation,r.location=t,r.interactive=!1,u.interactive=!1,this.lineState="drawing",this._emulatedDrag=K(u,l,a),h=!0}break;case"drawing":null!==(n=this._emulatedDrag)&&void 0!==n&&n.update(a),null!=this.endPoint&&(null!==(s=this._emulatedDrag)&&void 0!==s&&s.end(a),this._emulatedDrag=null,r.interactive=!0,u.interactive=!0,this.lineState="measured",h=!0)}h&&t.stopPropagation()}_surfaceLocation(t,e){var i;return e===D.Og.GROUND?"on-the-surface":(null!==(i=t.z)&&void 0!==i?i:0)>=this._getElevation(t)?"above-the-surface":"below-the-surface"}_updateManipulatorAvailability(){this.startManipulator.available=null!=this.analysis.startPoint,this.endManipulator.available=null!=this.analysis.endPoint}_getElevation(t){var e;return this.view.basemapTerrain.ready&&null!==(e=(0,E.R1)(this.view.elevationProvider,t))&&void 0!==e?e:0}get test(){return{snappingManager:this._snappingManager}}};function K(t,e,i){return t.events.emit("drag",{action:"start",pointerType:e,start:i,screenPoint:i}),{update:e=>t.events.emit("drag",{action:"update",start:e,screenPoint:e}),end:e=>t.events.emit("drag",{action:"end",start:e,screenPoint:e}),cancel:()=>t.events.emit("drag",{action:"cancel"})}}(0,n._)([(0,a.MZ)({readOnly:!0})],j.prototype,"state",null),(0,n._)([(0,a.MZ)()],j.prototype,"lineState",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],j.prototype,"cursor",null),(0,n._)([(0,a.MZ)()],j.prototype,"startPoint",null),(0,n._)([(0,a.MZ)()],j.prototype,"endPoint",null),(0,n._)([(0,a.MZ)()],j.prototype,"cursorPoint",null),(0,n._)([(0,a.MZ)({constructOnly:!0})],j.prototype,"analysis",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],j.prototype,"analysisViewData",void 0),(0,n._)([(0,a.MZ)()],j.prototype,"measurementView",void 0),(0,n._)([(0,a.MZ)({constructOnly:!0})],j.prototype,"view",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],j.prototype,"validMeasurement",null),(0,n._)([(0,a.MZ)({value:null})],j.prototype,"startPointSurfaceLocation",void 0),(0,n._)([(0,a.MZ)({value:null})],j.prototype,"endPointSurfaceLocation",void 0),(0,n._)([(0,a.MZ)({value:null})],j.prototype,"cursorPointSurfaceLocation",void 0),(0,n._)([(0,a.MZ)()],j.prototype,"updating",null),j=(0,n._)([(0,l.$)("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],j);const X=j;var J=i(38224);let Q=class extends J.d{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="DirectLineMeasurement3DViewModel is only supported in 3D views.",this._userUnit=null,this._userUnitOptions=null}initialize(){this.addHandles((0,g.wB)((()=>({analysis:this.analysis,unit:this.unit})),(t=>{let{analysis:e,unit:i}=t;null!=e&&(e.unit=i)}),g.pc))}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get measurement(){var t,e;const{tool:i}=this;if(null==i)return null;const n=t=>({text:t,state:"available"}),{analysisViewData:s}=i,a=null!=s.result;return{mode:null!==(t=null===(e=s.result)||void 0===e?void 0:e.mode)&&void 0!==t?t:"euclidean",directDistance:a&&"euclidean"===s.actualVisualizedMeasurement?n(s.directLabelText):{text:null,state:"unavailable"},horizontalDistance:a?n(s.horizontalLabelText):{text:null,state:"unavailable"},verticalDistance:a?n(s.verticalLabelText):{text:null,state:"unavailable"}}}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null}get unit(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new c}constructTool(){return new X({view:this.view,analysis:this.analysis,analysisViewData:this.analysisView,visible:this.visible})}_findSelectableUnit(t,e){const i=this.unitOptions;return i.includes(t)?t:e?this._findSelectableUnit(e):i[0]}_filteredOrAllUnits(t){if(!t)return u.GB.slice();const e=t.filter((t=>u.GB.includes(t)));return 0===e.length?u.GB.slice():e}};(0,n._)([(0,a.MZ)({type:c})],Q.prototype,"analysis",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],Q.prototype,"state",null),(0,n._)([(0,a.MZ)({readOnly:!0})],Q.prototype,"measurement",null),(0,n._)([(0,a.MZ)()],Q.prototype,"unitOptions",null),(0,n._)([(0,a.MZ)()],Q.prototype,"unit",null),(0,n._)([(0,a.MZ)(_.q)],Q.prototype,"defaultUnit",void 0),(0,n._)([(0,a.MZ)()],Q.prototype,"_userUnit",void 0),(0,n._)([(0,a.MZ)()],Q.prototype,"_userUnitOptions",void 0),Q=(0,n._)([(0,l.$)("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],Q);const Y=Q;var tt=i(98108),et=i(15062),it=i(19371),nt=(i(76099),i(63582)),st=i(54761);const at="esri-direct-line-measurement-3d",lt={base:at,newMeasurementButton:"".concat(at,"__clear-button"),widgetIcon:et.T.measureLine};let ot=class extends o.A{constructor(t,e){super(t,e),this.iconClass=lt.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new Y}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(t){this.viewModel.analysis=t}get label(){var t,e;return null!==(t=null===(e=this.messages)||void 0===e?void 0:e.widgetLabel)&&void 0!==t?t:""}set label(t){this._overrideIfSome("label",t)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(t){this.viewModel.unitOptions=t}get unit(){return this.viewModel.unit}set unit(t){this.viewModel.unit=t}render(){const{messages:t,messagesCommon:e,unit:i,unitOptions:n,viewModel:a}=this,{active:l,measurement:o,state:r,supported:u}=a;return(0,st.K)("div",{"aria-label":this.messages.widgetLabel,class:this.classes(lt.base,tt.D.widget,tt.D.panel),key:this,role:"presentation"},this.visible?(0,st.K)(it.I,{active:l,measurementItems:[{key:"direct",title:t.direct,value:rt(null===o||void 0===o?void 0:o.directDistance)},{key:"horizontal",title:t.horizontal,value:rt(null===o||void 0===o?void 0:o.horizontalDistance)},{key:"vertical",title:t.vertical,value:rt(null===o||void 0===o?void 0:o.verticalDistance)}],messages:{...t,notApplicable:null===e||void 0===e?void 0:e.notApplicable},newMeasurementButtonClass:lt.newMeasurementButton,state:r,supported:u,unit:i,unitOptions:n,onNewMeasurementClick:()=>{(0,s.QZ)(this.viewModel.start())},onUnitChange:t=>{this.unit=t}}):null)}};function rt(t){return"available"===(null===t||void 0===t?void 0:t.state)?t.text:null}(0,n._)([(0,a.MZ)()],ot.prototype,"view",null),(0,n._)([(0,a.MZ)()],ot.prototype,"visible",null),(0,n._)([(0,a.MZ)()],ot.prototype,"active",null),(0,n._)([(0,a.MZ)({constructOnly:!0,nonNullable:!0})],ot.prototype,"analysis",null),(0,n._)([(0,a.MZ)()],ot.prototype,"iconClass",void 0),(0,n._)([(0,a.MZ)()],ot.prototype,"icon",void 0),(0,n._)([(0,a.MZ)()],ot.prototype,"label",null),(0,n._)([(0,a.MZ)(),(0,nt.G)("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],ot.prototype,"messages",void 0),(0,n._)([(0,a.MZ)(),(0,nt.G)("esri/t9n/common")],ot.prototype,"messagesCommon",void 0),(0,n._)([(0,a.MZ)()],ot.prototype,"uiStrings",void 0),(0,n._)([(0,a.MZ)({type:Y})],ot.prototype,"viewModel",void 0),(0,n._)([(0,a.MZ)()],ot.prototype,"unitOptions",null),(0,n._)([(0,a.MZ)()],ot.prototype,"unit",null),ot=(0,n._)([(0,l.$)("esri.widgets.DirectLineMeasurement3D")],ot);const ut=ot}}]);
//# sourceMappingURL=9627.0a36910a.chunk.js.map