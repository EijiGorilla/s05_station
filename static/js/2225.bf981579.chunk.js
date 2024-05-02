"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[2225],{87246:(e,t,i)=>{i.d(t,{C:()=>s});var a=i(73318);class s extends a.E{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1}_beforeChanged(){this.isDirty("colors")&&this.reset()}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const e=this.getPrivate("currentPass"),t=this.get("colors",[this.get("baseColor",a.C.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",t.length);const i=this.getPrivate("numColors"),s=this.get("passOptions"),r=this.get("reuse");for(let l=0;l<i;l++)if(r)t.push(t[l]);else{const i=t[l].toHSL();let r=i.h+(s.hue||0)*e;for(;r>1;)r-=1;let n=i.s+(s.saturation||0)*e;n>1&&(n=1),n<0&&(n=0);let o=i.l+(s.lightness||0)*e;for(;o>1;)o-=1;t.push(a.C.fromHSL(r,n,o))}}getIndex(e){const t=this.get("colors",[]),i=this.get("saturation");return e>=t.length?(this.generateColors(),this.getIndex(e)):null!=i?a.C.saturate(t[e],i):t[e]}next(){let e=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",e+this.get("step",1)),this.getIndex(e)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0)}}Object.defineProperty(s,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(s,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:a.E.classNames.concat([s.className])})},95429:(e,t,i)=>{i.d(t,{D:()=>r,s:()=>s});var a=i(73318);function s(e,t,i,a){e.set(t,i.get(a)),i.on(a,(i=>{e.set(t,i)}))}class r extends a.T{setupDefaultRules(){super.setupDefaultRules();const e=this._root.language,t=this._root.interfaceColors,i=this._root.horizontalLayout,r=this._root.verticalLayout,l=this.rule.bind(this);l("InterfaceColors").setAll({stroke:a.C.fromHex(15066597),fill:a.C.fromHex(15987699),primaryButton:a.C.fromHex(6788316),primaryButtonHover:a.C.fromHex(6779356),primaryButtonDown:a.C.fromHex(6872182),primaryButtonActive:a.C.fromHex(6872182),primaryButtonText:a.C.fromHex(16777215),primaryButtonStroke:a.C.fromHex(16777215),secondaryButton:a.C.fromHex(14277081),secondaryButtonHover:a.C.fromHex(10724259),secondaryButtonDown:a.C.fromHex(9276813),secondaryButtonActive:a.C.fromHex(15132390),secondaryButtonText:a.C.fromHex(0),secondaryButtonStroke:a.C.fromHex(16777215),grid:a.C.fromHex(0),background:a.C.fromHex(16777215),alternativeBackground:a.C.fromHex(0),text:a.C.fromHex(0),alternativeText:a.C.fromHex(16777215),disabled:a.C.fromHex(11382189),positive:a.C.fromHex(5288704),negative:a.C.fromHex(11730944)});{const e=l("ColorSet");e.setAll({passOptions:{hue:.05,saturation:0,lightness:0},colors:[a.C.fromHex(6797276)],step:1,reuse:!1,startIndex:0}),e.setPrivate("currentStep",0),e.setPrivate("currentPass",0)}l("Entity").setAll({stateAnimationDuration:0,stateAnimationEasing:(0,a.o)(a.c)}),l("Component").setAll({interpolationDuration:0,interpolationEasing:(0,a.o)(a.c)}),l("Sprite").setAll({visible:!0,scale:1,opacity:1,rotation:0,position:"relative",tooltipX:a.p,tooltipY:a.p,tooltipPosition:"fixed",isMeasured:!0}),l("Sprite").states.create("default",{visible:!0,opacity:1}),l("Container").setAll({interactiveChildren:!0,setStateOnChildren:!1}),l("Graphics").setAll({strokeWidth:1}),l("Chart").setAll({width:a.a,height:a.a,interactiveChildren:!1}),l("ZoomableContainer").setAll({width:a.a,height:a.a,wheelable:!0,pinchZoom:!0,maxZoomLevel:32,minZoomLevel:1,zoomStep:2,animationEasing:(0,a.o)(a.c),animationDuration:600}),l("Sprite",["horizontal","center"]).setAll({centerX:a.p,x:a.p}),l("Sprite",["vertical","center"]).setAll({centerY:a.p,y:a.p}),l("Container",["horizontal","layout"]).setAll({layout:i}),l("Container",["vertical","layout"]).setAll({layout:r}),l("Pattern").setAll({repetition:"repeat",width:50,height:50,rotation:0,fillOpacity:1}),l("LinePattern").setAll({gap:6,colorOpacity:1,width:49,height:49}),l("RectanglePattern").setAll({gap:6,checkered:!1,centered:!0,maxWidth:5,maxHeight:5,width:48,height:48,strokeWidth:0}),l("CirclePattern").setAll({gap:5,checkered:!1,centered:!1,radius:3,strokeWidth:0,width:45,height:45}),l("GrainPattern").setAll({width:200,height:200,colors:[a.C.fromHex(0)],size:1,horizontalGap:0,verticalGap:0,density:1,minOpacity:0,maxOpacity:.2}),l("LinearGradient").setAll({rotation:90}),l("Legend").setAll({fillField:"fill",strokeField:"stroke",nameField:"name",layout:a.G.new(this._root,{}),layer:30,clickTarget:"itemContainer"}),l("Container",["legend","item","itemcontainer"]).setAll({paddingLeft:5,paddingRight:5,paddingBottom:5,paddingTop:5,layout:i,setStateOnChildren:!0,interactiveChildren:!1,ariaChecked:!0,focusable:!0,ariaLabel:e.translate("Press ENTER to toggle"),role:"checkbox"});{const e=l("Rectangle",["legend","item","background"]);e.setAll({fillOpacity:0}),s(e,"fill",t,"background")}l("Container",["legend","marker"]).setAll({setStateOnChildren:!0,centerY:a.p,paddingLeft:0,paddingRight:0,paddingBottom:0,paddingTop:0,width:18,height:18}),l("RoundedRectangle",["legend","marker","rectangle"]).setAll({width:a.a,height:a.a,cornerRadiusBL:3,cornerRadiusTL:3,cornerRadiusBR:3,cornerRadiusTR:3});{const e=l("RoundedRectangle",["legend","marker","rectangle"]).states.create("disabled",{});s(e,"fill",t,"disabled"),s(e,"stroke",t,"disabled")}l("Label",["legend","label"]).setAll({centerY:a.p,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,populateText:!0}),s(l("Label",["legend","label"]).states.create("disabled",{}),"fill",t,"disabled"),l("Label",["legend","value","label"]).setAll({centerY:a.p,marginLeft:5,paddingRight:0,paddingLeft:0,paddingTop:0,paddingBottom:0,width:50,centerX:a.a,populateText:!0}),s(l("Label",["legend","value","label"]).states.create("disabled",{}),"fill",t,"disabled"),l("HeatLegend").setAll({stepCount:1}),l("RoundedRectangle",["heatlegend","marker"]).setAll({cornerRadiusTR:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusBL:0}),l("RoundedRectangle",["vertical","heatlegend","marker"]).setAll({height:a.a,width:15}),l("RoundedRectangle",["horizontal","heatlegend","marker"]).setAll({width:a.a,height:15}),l("HeatLegend",["vertical"]).setAll({height:a.a}),l("HeatLegend",["horizontal"]).setAll({width:a.a}),l("Label",["heatlegend","start"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5}),l("Label",["heatlegend","end"]).setAll({paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5});{const e=l("Label");e.setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontSize:"1em",populateText:!1}),s(e,"fill",t,"text")}l("RadialLabel").setAll({textType:"regular",centerY:a.p,centerX:a.p,inside:!1,radius:0,baseRadius:a.a,orientation:"auto",textAlign:"center"}),l("RoundedRectangle").setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8}),l("PointedRectangle").setAll({pointerBaseWidth:15,pointerLength:10,cornerRadius:8}),l("Slice").setAll({shiftRadius:0,dRadius:0,dInnerRadius:0});{const e=l("Tick");e.setAll({strokeOpacity:.15,isMeasured:!1,length:4.5,position:"absolute",crisp:!0}),s(e,"stroke",t,"grid")}l("Bullet").setAll({locationX:.5,locationY:.5}),l("Tooltip").setAll({position:"absolute",getFillFromSprite:!0,getStrokeFromSprite:!1,autoTextColor:!0,paddingTop:9,paddingBottom:8,paddingLeft:10,paddingRight:10,marginBottom:5,pointerOrientation:"vertical",centerX:a.p,centerY:a.p,animationEasing:(0,a.o)(a.c),exportable:!1}),l("Polygon").setAll({animationEasing:(0,a.o)(a.c)}),l("PointedRectangle",["tooltip","background"]).setAll({strokeOpacity:.9,cornerRadius:4,pointerLength:4,pointerBaseWidth:8,fillOpacity:.9,stroke:a.C.fromHex(16777215)});{const e=l("Label",["tooltip"]);e.setAll({role:"tooltip",populateText:!0,paddingRight:0,paddingTop:0,paddingLeft:0,paddingBottom:0}),s(e,"fill",t,"alternativeText")}l("Button").setAll({paddingTop:8,paddingBottom:8,paddingLeft:10,paddingRight:10,interactive:!0,layout:i,interactiveChildren:!1,setStateOnChildren:!0,focusable:!0}),l("Button").states.create("hover",{}),l("Button").states.create("down",{stateAnimationDuration:0}),l("Button").states.create("active",{});{const e=l("RoundedRectangle",["button","background"]);s(e,"fill",t,"primaryButton"),s(e,"stroke",t,"primaryButtonStroke")}s(l("RoundedRectangle",["button","background"]).states.create("hover",{}),"fill",t,"primaryButtonHover"),s(l("RoundedRectangle",["button","background"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"primaryButtonDown"),s(l("RoundedRectangle",["button","background"]).states.create("active",{}),"fill",t,"primaryButtonActive"),s(l("Graphics",["button","icon"]),"stroke",t,"primaryButtonText"),s(l("Label",["button"]),"fill",t,"primaryButtonText"),l("Button",["zoom"]).setAll({paddingTop:18,paddingBottom:18,paddingLeft:12,paddingRight:12,centerX:46,centerY:-10,y:0,x:a.a,role:"button",ariaLabel:e.translate("Zoom Out"),layer:30});{const e=l("RoundedRectangle",["background","button","zoom"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),s(e,"fill",t,"primaryButton")}s(l("RoundedRectangle",["background","button","zoom"]).states.create("hover",{}),"fill",t,"primaryButtonHover"),s(l("RoundedRectangle",["background","button","zoom"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"primaryButtonDown");{const e=l("Graphics",["icon","button","zoom"]);e.setAll({crisp:!0,strokeOpacity:.7,draw:e=>{e.moveTo(0,0),e.lineTo(12,0)}}),s(e,"stroke",t,"primaryButtonText")}l("Button",["resize"]).setAll({paddingTop:9,paddingBottom:9,paddingLeft:13,paddingRight:13,draggable:!0,centerX:a.p,centerY:a.p,position:"absolute",role:"slider",ariaValueMin:"0",ariaValueMax:"100",ariaLabel:e.translate("Use up and down arrows to move selection")});{const e=l("RoundedRectangle",["background","resize","button"]);e.setAll({cornerRadiusBL:40,cornerRadiusBR:40,cornerRadiusTL:40,cornerRadiusTR:40}),s(e,"fill",t,"secondaryButton"),s(e,"stroke",t,"secondaryButtonStroke")}s(l("RoundedRectangle",["background","resize","button"]).states.create("hover",{}),"fill",t,"secondaryButtonHover"),s(l("RoundedRectangle",["background","resize","button"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"secondaryButtonDown");{const e=l("Graphics",["resize","button","icon"]);e.setAll({interactive:!1,crisp:!0,strokeOpacity:.5,draw:e=>{e.moveTo(0,.5),e.lineTo(0,12.5),e.moveTo(4,.5),e.lineTo(4,12.5)}}),s(e,"stroke",t,"secondaryButtonText")}l("Button",["resize","vertical"]).setAll({rotation:90,cursorOverStyle:"ns-resize"}),l("Button",["resize","horizontal"]).setAll({cursorOverStyle:"ew-resize"}),l("Button",["play"]).setAll({paddingTop:13,paddingBottom:13,paddingLeft:14,paddingRight:14,ariaLabel:e.translate("Play"),toggleKey:"active"});{const e=l("RoundedRectangle",["play","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),s(e,"fill",t,"primaryButton")}{const e=l("Graphics",["play","icon"]);e.setAll({stateAnimationDuration:0,dx:1,draw:e=>{e.moveTo(0,-5),e.lineTo(8,0),e.lineTo(0,5),e.lineTo(0,-5)}}),s(e,"fill",t,"primaryButtonText")}l("Graphics",["play","icon"]).states.create("default",{stateAnimationDuration:0}),l("Graphics",["play","icon"]).states.create("active",{stateAnimationDuration:0,draw:e=>{e.moveTo(-4,-5),e.lineTo(-1,-5),e.lineTo(-1,5),e.lineTo(-4,5),e.lineTo(-4,-5),e.moveTo(4,-5),e.lineTo(1,-5),e.lineTo(1,5),e.lineTo(4,5),e.lineTo(4,-5)}}),l("Button",["switch"]).setAll({paddingTop:4,paddingBottom:4,paddingLeft:4,paddingRight:4,ariaLabel:e.translate("Press ENTER to toggle"),toggleKey:"active",width:40,height:24,layout:null});{const e=l("RoundedRectangle",["switch","background"]);e.setAll({strokeOpacity:.5,cornerRadiusBL:100,cornerRadiusBR:100,cornerRadiusTL:100,cornerRadiusTR:100}),s(e,"fill",t,"primaryButton")}{const e=l("Circle",["switch","icon"]);e.setAll({radius:8,centerY:0,centerX:0,dx:0}),s(e,"fill",t,"primaryButtonText")}l("Graphics",["switch","icon"]).states.create("active",{dx:16}),l("Scrollbar").setAll({start:0,end:1,layer:30,animationEasing:(0,a.o)(a.c)}),l("Scrollbar",["vertical"]).setAll({marginRight:13,marginLeft:13,minWidth:12,height:a.a}),l("Scrollbar",["horizontal"]).setAll({marginTop:13,marginBottom:13,minHeight:12,width:a.a}),this.rule("Button",["scrollbar"]).setAll({exportable:!1});{const e=l("RoundedRectangle",["scrollbar","main","background"]);e.setAll({cornerRadiusTL:8,cornerRadiusBL:8,cornerRadiusTR:8,cornerRadiusBR:8,fillOpacity:.8}),s(e,"fill",t,"fill")}{const e=l("RoundedRectangle",["scrollbar","thumb"]);e.setAll({role:"slider",ariaLive:"polite",position:"absolute",draggable:!0}),s(e,"fill",t,"secondaryButton")}s(l("RoundedRectangle",["scrollbar","thumb"]).states.create("hover",{}),"fill",t,"secondaryButtonHover"),s(l("RoundedRectangle",["scrollbar","thumb"]).states.create("down",{stateAnimationDuration:0}),"fill",t,"secondaryButtonDown"),l("RoundedRectangle",["scrollbar","thumb","vertical"]).setAll({x:a.p,width:a.a,centerX:a.p,ariaLabel:e.translate("Use up and down arrows to move selection")}),l("RoundedRectangle",["scrollbar","thumb","horizontal"]).setAll({y:a.p,centerY:a.p,height:a.a,ariaLabel:e.translate("Use left and right arrows to move selection")});{const e=l("PointedRectangle",["axis","tooltip","background"]);e.setAll({cornerRadius:0}),s(e,"fill",t,"alternativeBackground")}l("Label",["axis","tooltip"]).setAll({role:void 0}),l("Label",["axis","tooltip","y"]).setAll({textAlign:"right"}),l("Label",["axis","tooltip","y","opposite"]).setAll({textAlign:"left"}),l("Label",["axis","tooltip","x"]).setAll({textAlign:"center"}),l("Tooltip",["categoryaxis"]).setAll({labelText:"{category}"}),l("Star").setAll({spikes:5,innerRadius:5,radius:10}),l("Tooltip",["stock"]).setAll({paddingTop:6,paddingBottom:5,paddingLeft:7,paddingRight:7}),l("PointedRectangle",["tooltip","stock","axis"]).setAll({pointerLength:0,pointerBaseWidth:0,cornerRadius:3}),l("Label",["tooltip","stock"]).setAll({fontSize:"0.8em"}),l("SpriteResizer").setAll({rotationStep:10}),l("Container",["resizer","grip"]).states.create("hover",{});{const e=l("RoundedRectangle",["resizer","grip"]);e.setAll({strokeOpacity:.7,strokeWidth:1,fillOpacity:1,width:12,height:12}),s(e,"fill",t,"background"),s(e,"stroke",t,"alternativeBackground")}{const e=l("RoundedRectangle",["resizer","grip","outline"]);e.setAll({strokeOpacity:0,fillOpacity:0,width:20,height:20}),e.states.create("hover",{fillOpacity:.3}),s(e,"fill",t,"alternativeBackground")}l("RoundedRectangle",["resizer","grip","left"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0}),l("RoundedRectangle",["resizer","grip","right"]).setAll({cornerRadiusBL:0,cornerRadiusBR:0,cornerRadiusTL:0,cornerRadiusTR:0});{const e=l("Rectangle",["resizer","rectangle"]);e.setAll({strokeDasharray:[2,2],strokeOpacity:.5,strokeWidth:1}),s(e,"stroke",t,"alternativeBackground")}l("Graphics",["button","plus","icon"]).setAll({x:a.p,y:a.p,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0),e.moveTo(0,-4),e.lineTo(0,4)}}),l("Graphics",["button","minus","icon"]).setAll({x:a.p,y:a.p,draw:e=>{e.moveTo(-4,0),e.lineTo(4,0)}}),l("Graphics",["button","home","icon"]).setAll({x:a.p,y:a.p,svgPath:"M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"}),l("Button",["zoomtools"]).setAll({marginTop:1,marginBottom:2}),l("ZoomTools").setAll({x:a.a,centerX:a.a,y:a.a,centerY:a.a,paddingRight:10,paddingBottom:10})}}},19150:(e,t,i)=>{i.d(t,{C:()=>R,D:()=>w,S:()=>z,T:()=>N,a:()=>T,c:()=>D,r:()=>C,w:()=>j});var a,s,r,l,n,o,d,h,u,c,p,g,m,b,f=i(57528),y=i(35143),v=i(73318);class _ extends v.F{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e)}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t)}_onSetIndex(e,t,i){this.processor&&this.processor.processRow(i),super._onSetIndex(e,t,i)}}class w extends v.S{constructor(e,t,i){super(i),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class R extends v.g{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new _}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll((e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,"clear"===e.type)(0,v.i)(t,(e=>{e.dispose()})),t.length=0,this._onDataClear();else if("push"===e.type){const i=new w(this,e.newValue,this._makeDataItem(e.newValue));t.push(i),this.processDataItem(i)}else if("setIndex"===e.type){const i=t[e.index],a=this._makeDataItem(e.newValue);i.bullets&&0==i.bullets.length&&(i.bullets=void 0),(0,v.H)(a).forEach((e=>{i.animate({key:e,to:a[e],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})})),i.dataContext=e.newValue}else if("insertIndex"===e.type){const i=new w(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,i),this.processDataItem(i)}else if("removeIndex"===e.type)t[e.index].dispose(),t.splice(e.index,1);else{if("moveIndex"!==e.type)throw new Error("Unknown IStreamEvent type");{const i=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,i)}}this._afterDataChange()})))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},(0,v.i)(this.valueFields,(e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})}))),this.fields&&(this._fields=[],this._fieldsF={},(0,v.i)(this.fields,(e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")})))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&(0,v.i)(this._valueFields,(i=>{const a=this.get(this._valueFieldsF[i].fieldKey);t[i]=e[a],t[this._valueFieldsF[i].workingKey]=t[i]})),this._fields&&(0,v.i)(this._fields,(i=>{const a=this.get(this._fieldsF[i]);t[i]=e[a]})),t}makeDataItem(e){let t=new w(this,void 0,e);return this.processDataItem(t),t}pushDataItem(e){const t=this.makeDataItem(e);return this._mainDataItems.push(t),t}disposeDataItem(e){}showDataItem(e,t){return(0,y.b)(this,void 0,void 0,(function*(){e.set("visible",!0)}))}hideDataItem(e,t){return(0,y.b)(this,void 0,void 0,(function*(){e.set("visible",!1)}))}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}Object.defineProperty(R,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(R,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:v.g.classNames.concat([R.className])});let x={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2629742400,year:31536e6};function k(e,t){return null==t&&(t=1),x[e]*t}function C(e,t,i,a,s,r,l){if(!l||s){let l=0;switch(s||"millisecond"==t||(l=e.getTimezoneOffset(),e.setUTCMinutes(e.getUTCMinutes()-l)),t){case"day":let t=e.getUTCDate();if(i>1){if(r){r=C(r,"day",1);let t=e.getTime()-r.getTime(),a=Math.floor(t/k("day")/i),s=k("day",a*i);e.setTime(r.getTime()+s-l*k("minute"))}}else e.setUTCDate(t);e.setUTCHours(0,0,0,0);break;case"second":let s=e.getUTCSeconds();i>1&&(s=Math.floor(s/i)*i),e.setUTCSeconds(s,0);break;case"millisecond":if(1==i)return e;let n=e.getUTCMilliseconds();n=Math.floor(n/i)*i,e.setUTCMilliseconds(n);break;case"hour":let o=e.getUTCHours();i>1&&(o=Math.floor(o/i)*i),e.setUTCHours(o,0,0,0);break;case"minute":let d=e.getUTCMinutes();i>1&&(d=Math.floor(d/i)*i),e.setUTCMinutes(d,0,0);break;case"month":let h=e.getUTCMonth();i>1&&(h=Math.floor(h/i)*i),e.setUTCMonth(h,1),e.setUTCHours(0,0,0,0);break;case"year":let u=e.getUTCFullYear();i>1&&(u=Math.floor(u/i)*i),e.setUTCFullYear(u,0,1),e.setUTCHours(0,0,0,0);break;case"week":let c=e.getUTCDate(),p=e.getUTCDay();(0,v.k)(a)||(a=1),c=p>=a?c-p+a:c-(7+p)+a,e.setUTCDate(c),e.setUTCHours(0,0,0,0)}if(!s&&"millisecond"!=t&&(e.setUTCMinutes(e.getUTCMinutes()+l),"day"==t||"week"==t||"month"==t||"year"==t)){let t=e.getTimezoneOffset();if(t!=l){let i=t-l;e.setUTCMinutes(e.getUTCMinutes()+i)}}return e}{if(isNaN(e.getTime()))return e;let n=l.offsetUTC(e),o=e.getTimezoneOffset(),d=l.parseDate(e),h=d.year,u=d.month,c=d.day,p=d.hour,g=d.minute,m=d.second,b=d.millisecond,f=d.weekday,y=n-o;switch(t){case"day":if(i>1&&r){r=C(r,"day",1,a,s,void 0,l);let t=e.getTime()-r.getTime(),n=Math.floor(t/k("day")/i),o=k("day",n*i);e.setTime(r.getTime()+o),d=l.parseDate(e),h=d.year,u=d.month,c=d.day}p=0,g=y,m=0,b=0;break;case"second":g+=y,i>1&&(m=Math.floor(m/i)*i),b=0;break;case"millisecond":g+=y,i>1&&(b=Math.floor(b/i)*i);break;case"hour":i>1&&(p=Math.floor(p/i)*i),g=y,m=0,b=0;break;case"minute":i>1&&(g=Math.floor(g/i)*i),g+=y,m=0,b=0;break;case"month":i>1&&(u=Math.floor(u/i)*i),c=1,p=0,g=y,m=0,b=0;break;case"year":i>1&&(h=Math.floor(h/i)*i),u=0,c=1,p=0,g=y,m=0,b=0;break;case"week":(0,v.k)(a)||(a=1),c=f>=a?c-f+a:c-(7+f)+a,p=0,g=y,m=0,b=0}let _=(e=new Date(h,u,c,p,g,m,b)).getTimezoneOffset(),w=l.offsetUTC(e)-_;return w!=y&&e.setTime(e.getTime()+6e4*(w-y)),e}}class T extends R{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new v.F}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:v.g.new(this._root,{width:v.a,height:v.a,position:"absolute"})})}_afterNew(){this.valueFields.push("value","customValue"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll((e=>{if("clear"===e.type)this._handleBullets(this.dataItems);else if("push"===e.type)this._handleBullets(this.dataItems);else if("setIndex"===e.type)this._handleBullets(this.dataItems);else if("insertIndex"===e.type)this._handleBullets(this.dataItems);else if("removeIndex"===e.type)this._handleBullets(this.dataItems);else{if("moveIndex"!==e.type)throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems)}})))}_dispose(){this.bulletsContainer.dispose(),super._dispose()}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){(0,v.i)(e,(e=>{const t=e.bullets;t&&((0,v.i)(t,(e=>{e.dispose()})),e.bullets=void 0)})),this.markDirtyValues()}getDataItemById(e){return(0,v.I)(this.dataItems,(t=>t.get("id")==e))}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each((t=>{this._makeBullet(e,t)})))}_shouldMakeBullet(e){return!0}_makeBullet(e,t,i){const a=t(this._root,this,e);return a&&(a._index=i,this._makeBulletReal(e,a)),a}_makeBulletReal(e,t){let i=t.get("sprite");i&&(i._setDataItem(e),i.setRaw("position","absolute"),this.bulletsContainer.children.push(i)),t.series=this,e.bullets.push(t)}addBullet(e,t){e.bullets||(e.bullets=[]),t&&this._makeBulletReal(e,t)}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("name")&&this.updateLegendValue(),this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const e=this.getPrivate("baseValueSeries");e&&this._disposers.push(e.onPrivate("startIndex",(()=>{this.markDirtyValues()})))}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0,0!=e&&(this._psi=void 0))),this._psi==e&&this._pei==t&&!this.isPrivateDirty("adjustedStartIndex")||this._selectionAggregatesCalculated||(0===e&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let e=this.get("tooltip");e&&(e.hide(0),e.set("tooltipTarget",this))}if(this.isDirty("fill")||this.isDirty("stroke")){let e;const t=this.get("legendDataItem");if(t&&(e=t.get("markerRectangle"),e&&this.isVisible())){if(this.isDirty("stroke")){let t=this.get("stroke");e.set("stroke",t)}if(this.isDirty("fill")){let t=this.get("fill");e.set("fill",t)}}this.updateLegendMarker(void 0)}if(this.bullets.length>0){let e=this.startIndex(),t=this.endIndex();t<this.dataItems.length&&t++;for(let i=e;i<t;i++){let e=this.dataItems[i];e.bullets||this._makeBullets(e)}}}_adjustStartIndex(e){return e}_calculateAggregates(e,t){let i=this._valueFields;if(!i)throw new Error("No value fields are set for the series.");const a={},s={},r={},l={},n={},o={},d={},h={},u={};(0,v.i)(i,(e=>{a[e]=0,s[e]=0,r[e]=0})),(0,v.i)(i,(i=>{let c=i+"Change",p=i+"ChangePercent",g=i+"ChangePrevious",m=i+"ChangePreviousPercent",b=i+"ChangeSelection",f=i+"ChangeSelectionPercent",y="valueY";"valueX"!=i&&"openValueX"!=i&&"lowValueX"!=i&&"highValueX"!=i||(y="valueX");const v=this.getPrivate("baseValueSeries"),_=this.getPrivate("adjustedStartIndex",e);for(let w=_;w<t;w++){const t=this.dataItems[w];let _=t.get(i);null!=_&&(r[i]++,a[i]+=_,s[i]+=Math.abs(_),h[i]=a[i]/r[i],(l[i]>_||null==l[i])&&(l[i]=_),(n[i]<_||null==n[i])&&(n[i]=_),d[i]=_,null==o[i]&&(o[i]=_,u[i]=_,v&&(o[y]=v._getBase(y))),0===e&&(t.setRaw(c,_-o[y]),t.setRaw(p,(_-o[y])/o[y]*100)),t.setRaw(g,_-u[y]),t.setRaw(m,(_-u[y])/u[y]*100),t.setRaw(b,_-o[y]),t.setRaw(f,(_-o[y])/o[y]*100),u[i]=_)}if(t<this.dataItems.length-1){const e=this.dataItems[t];let a=e.get(i);e.setRaw(g,a-u[y]),e.setRaw(m,(a-u[y])/u[y]*100),e.setRaw(b,a-o[y]),e.setRaw(f,(a-o[y])/o[y]*100)}e>0&&e--,delete u[i];for(let t=e;t<_;t++){const e=this.dataItems[t];let a=e.get(i);null==u[i]&&(u[i]=a),null!=a&&(e.setRaw(g,a-u[y]),e.setRaw(m,(a-u[y])/u[y]*100),e.setRaw(b,a-o[y]),e.setRaw(f,(a-o[y])/o[y]*100),u[i]=a)}})),(0,v.i)(i,(e=>{this.setPrivate(e+"AverageSelection",h[e]),this.setPrivate(e+"CountSelection",r[e]),this.setPrivate(e+"SumSelection",a[e]),this.setPrivate(e+"AbsoluteSumSelection",s[e]),this.setPrivate(e+"LowSelection",l[e]),this.setPrivate(e+"HighSelection",n[e]),this.setPrivate(e+"OpenSelection",o[e]),this.setPrivate(e+"CloseSelection",d[e])})),0===e&&t===this.dataItems.length&&(0,v.i)(i,(e=>{this.setPrivate(e+"Average",h[e]),this.setPrivate(e+"Count",r[e]),this.setPrivate(e+"Sum",a[e]),this.setPrivate(e+"AbsoluteSum",s[e]),this.setPrivate(e+"Low",l[e]),this.setPrivate(e+"High",n[e]),this.setPrivate(e+"Open",o[e]),this.setPrivate(e+"Close",d[e])}))}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&(0,v.i)(e,(e=>{const t=e.minValue||this.getPrivate(e.dataField+"Low")||0,i=e.maxValue||this.getPrivate(e.dataField+"High")||0;(0,v.i)(e.target._entities,(a=>{const s=a.dataItem.get(e.dataField);if((0,v.k)(s))if(e.customFunction)e.customFunction.call(this,a,t,i,s);else{let r,l;r=e.logarithmic?(Math.log(s)*Math.LOG10E-Math.log(t)*Math.LOG10E)/(Math.log(i)*Math.LOG10E-Math.log(t)*Math.LOG10E):(s-t)/(i-t),!(0,v.k)(s)||(0,v.k)(r)&&Math.abs(r)!=1/0||(r=.5),(0,v.k)(e.min)?l=e.min+(e.max-e.min)*r:e.min instanceof v.C?l=v.C.interpolate(r,e.min,e.max):e.min instanceof v.P&&(l=(0,v.J)(r,e.min,e.max)),a.set(e.key,l);const n=a.states;if(n){const t=n.lookup("default");t&&t.set(e.key,l)}}else{e.neutral&&a.set(e.key,e.neutral);const t=a.states;if(t){const i=t.lookup("default");i&&i.set(e.key,e.neutral)}}}))})),this.get("visible")){let e=this.dataItems.length,t=this.startIndex(),i=this.endIndex();i<e&&i++,t>0&&t--;for(let a=0;a<t;a++)this._hideBullets(this.dataItems[a]);for(let a=t;a<i;a++)this._positionBullets(this.dataItems[a]);for(let a=i;a<e;a++)this._hideBullets(this.dataItems[a])}}_positionBullets(e){e.bullets&&(0,v.i)(e.bullets,(e=>{this._positionBullet(e);const t=e.get("sprite");e.get("dynamic")&&(t&&(t._markDirtyKey("fill"),t.markDirtySize()),t instanceof v.g&&t.walkChildren((e=>{e._markDirtyKey("fill"),e.markDirtySize(),e instanceof v.L&&e.text.markDirtyText()}))),t instanceof v.L&&t.get("populateText")&&t.text.markDirtyText()}))}_hideBullets(e){e.bullets&&(0,v.i)(e.bullets,(e=>{let t=e.get("sprite");t&&t.setPrivate("visible",!1)}))}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer)}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e)}disposeDataItem(e){const t=e.bullets;t&&(0,v.i)(t,(e=>{e.dispose()}))}_getItemReaderLabel(){return""}showDataItem(e,t){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,y.b)(this,void 0,void 0,(function*(){const a=[i.showDataItem.call(this,e,t)],s=e.bullets;s&&(0,v.i)(s,(e=>{const i=e.get("sprite");i&&a.push(i.show(t))})),yield Promise.all(a)}))}hideDataItem(e,t){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,y.b)(this,void 0,void 0,(function*(){const a=[i.hideDataItem.call(this,e,t)],s=e.bullets;s&&(0,v.i)(s,(e=>{const i=e.get("sprite");i&&a.push(i.hide(t))})),yield Promise.all(a)}))}_sequencedShowHide(e,t){return(0,y.b)(this,void 0,void 0,(function*(){if(this.get("sequencedInterpolation"))if((0,v.k)(t)||(t=this.get("interpolationDuration",0)),t>0){const i=this.startIndex(),a=this.endIndex();yield Promise.all((0,v.K)(this.dataItems,((s,r)=>(0,y.b)(this,void 0,void 0,(function*(){let l=t||0;(r<i-10||r>a+10)&&(l=0);let n=this.get("sequencedDelay",0)+l/(a-i);yield function(e){return new Promise(((t,i)=>{setTimeout(t,e)}))}(n*(r-i)),e?yield this.showDataItem(s,l):yield this.hideDataItem(s,l)})))))}else yield Promise.all((0,v.K)(this.dataItems,(t=>e?this.showDataItem(t,0):this.hideDataItem(t,0))))}))}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const i=t.get("valueLabel");if(i){const t=i.text;let a="";i._setDataItem(e),a=this.get("legendValueText",t.get("text","")),i.set("text",a),t.markDirtyText()}const a=t.get("label");if(a){const t=a.text;let i="";a._setDataItem(e),i=this.get("legendLabelText",t.get("text","")),a.set("text",i),t.markDirtyText()}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide()}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function A(e,t){for(let i=0,a=t.length;i<a;i++){const a=t[i];if(a.length>0){let t=a[0];if(t.length>0){let i=t[0];e.moveTo(i.x,i.y);for(let t=0,s=a.length;t<s;t++)I(e,a[t])}}}}function I(e,t){for(let i=0,a=t.length;i<a;i++){const a=t[i];e.lineTo(a.x,a.y)}}Object.defineProperty(T,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(T,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:R.classNames.concat([T.className])});class B extends v.e{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let t=e[0];this._display.moveTo(t.x,t.y),A(this._display,[[e]])}else if(t)A(this._display,t);else if(!this.get("draw")){let e=this.width(),t=this.height();this._display.moveTo(0,0),this._display.lineTo(e,t)}}}}function D(e){return function(){return e}}Object.defineProperty(B,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(B,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:v.e.classNames.concat([B.className])});const P=Math.PI,L=2*P,O=1e-6,S=L-O;function M(e){this._+=e[0];for(let t=1,i=e.length;t<i;++t)this._+=arguments[t]+e[t]}class H{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=null==e?M:function(e){let t=Math.floor(e);if(!(t>=0))throw new Error("invalid digits: ".concat(e));if(t>15)return M;const i=10**t;return function(e){this._+=e[0];for(let t=1,a=e.length;t<a;++t)this._+=Math.round(arguments[t]*i)/i+e[t]}}(e)}moveTo(e,t){this._append(a||(a=(0,f.A)(["M",",",""])),this._x0=this._x1=+e,this._y0=this._y1=+t)}closePath(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._append(s||(s=(0,f.A)(["Z"]))))}lineTo(e,t){this._append(r||(r=(0,f.A)(["L",",",""])),this._x1=+e,this._y1=+t)}quadraticCurveTo(e,t,i,a){this._append(l||(l=(0,f.A)(["Q",",",",",",",""])),+e,+t,this._x1=+i,this._y1=+a)}bezierCurveTo(e,t,i,a,s,r){this._append(n||(n=(0,f.A)(["C",",",",",",",",",",",""])),+e,+t,+i,+a,this._x1=+s,this._y1=+r)}arcTo(e,t,i,a,s){if(e=+e,t=+t,i=+i,a=+a,(s=+s)<0)throw new Error("negative radius: ".concat(s));let r=this._x1,l=this._y1,n=i-e,c=a-t,p=r-e,g=l-t,m=p*p+g*g;if(null===this._x1)this._append(o||(o=(0,f.A)(["M",",",""])),this._x1=e,this._y1=t);else if(m>O)if(Math.abs(g*n-c*p)>O&&s){let o=i-r,u=a-l,b=n*n+c*c,y=o*o+u*u,v=Math.sqrt(b),_=Math.sqrt(m),w=s*Math.tan((P-Math.acos((b+m-y)/(2*v*_)))/2),R=w/_,x=w/v;Math.abs(R-1)>O&&this._append(d||(d=(0,f.A)(["L",",",""])),e+R*p,t+R*g),this._append(h||(h=(0,f.A)(["A",",",",0,0,",",",",",""])),s,s,+(g*o>p*u),this._x1=e+x*n,this._y1=t+x*c)}else this._append(u||(u=(0,f.A)(["L",",",""])),this._x1=e,this._y1=t)}arc(e,t,i,a,s,r){if(e=+e,t=+t,r=!!r,(i=+i)<0)throw new Error("negative radius: ".concat(i));let l=i*Math.cos(a),n=i*Math.sin(a),o=e+l,d=t+n,h=1^r,u=r?a-s:s-a;null===this._x1?this._append(c||(c=(0,f.A)(["M",",",""])),o,d):(Math.abs(this._x1-o)>O||Math.abs(this._y1-d)>O)&&this._append(p||(p=(0,f.A)(["L",",",""])),o,d),i&&(u<0&&(u=u%L+L),u>S?this._append(g||(g=(0,f.A)(["A",",",",0,1,",",",",","A",",",",0,1,",",",",",""])),i,i,h,e-l,t-n,i,i,h,this._x1=o,this._y1=d):u>O&&this._append(m||(m=(0,f.A)(["A",",",",0,",",",",",",",""])),i,i,+(u>=P),h,this._x1=e+i*Math.cos(s),this._y1=t+i*Math.sin(s)))}rect(e,t,i,a){this._append(b||(b=(0,f.A)(["M",",","h","v","h","Z"])),this._x0=this._x1=+e,this._y0=this._y1=+t,i=+i,+a,-i)}toString(){return this._}}function j(e){let t=3;return e.digits=function(i){if(!arguments.length)return t;if(null==i)t=null;else{const e=Math.floor(i);if(!(e>=0))throw new RangeError("invalid digits: ".concat(i));t=e}return e},()=>new H(t)}class F extends v.g{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(v.g.new(this._root,{width:v.a,height:v.a,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:v.g.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:v.a,height:v.a})})}}Object.defineProperty(F,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(F,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:v.g.classNames.concat([F.className])});class z extends F{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:v.g.new(this._root,{width:v.a,height:v.a,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new v.N})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll((t=>{if("clear"===t.type){(0,v.i)(t.oldValues,(e=>{this._removeSeries(e)}));const e=this.get("colors");e&&e.reset()}else if("push"===t.type)e.moveValue(t.newValue),this._processSeries(t.newValue);else if("setIndex"===t.type)e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("insertIndex"===t.type)e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if("removeIndex"===t.type)this._removeSeries(t.oldValue);else{if("moveIndex"!==t.type)throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value)}})))}_processSeries(e){e.chart=this,e._placeBulletsContainer(this)}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer())}}Object.defineProperty(z,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(z,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:F.classNames.concat([z.className])});class N extends B{}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:B.classNames.concat([N.className])})}}]);
//# sourceMappingURL=2225.bf981579.chunk.js.map