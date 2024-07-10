"use strict";(self.webpackChunks05_station=self.webpackChunks05_station||[]).push([[9729],{43075:(e,n,t)=>{t.d(n,{A:()=>T,B:()=>b,C:()=>A,D:()=>L,E:()=>I,F:()=>V,G:()=>_,H:()=>j,I:()=>k,J:()=>C,K:()=>H,L:()=>O,M:()=>q,N:()=>B,a:()=>c,b:()=>u,c:()=>s,d:()=>a,e:()=>o,f:()=>l,g:()=>X,h:()=>f,i:()=>h,j:()=>d,k:()=>x,l:()=>M,m:()=>y,n:()=>w,o:()=>G,p:()=>R,q:()=>Z,r:()=>m,s:()=>v,t:()=>g,u:()=>P,v:()=>z,w:()=>p,x:()=>E,y:()=>S,z:()=>D});var i=t(52612),r=t(28778);function o(e){return i.G.extendedSpatialReferenceInfo(e)}function s(e,n,t){return i.G.clip(r.g,e,n,t)}function c(e,n,t){return i.G.cut(r.g,e,n,t)}function u(e,n,t){return i.G.contains(r.g,e,n,t)}function a(e,n,t){return i.G.crosses(r.g,e,n,t)}function l(e,n,t,o){return i.G.distance(r.g,e,n,t,o)}function f(e,n,t){return i.G.equals(r.g,e,n,t)}function h(e,n,t){return i.G.intersects(r.g,e,n,t)}function g(e,n,t){return i.G.touches(r.g,e,n,t)}function p(e,n,t){return i.G.within(r.g,e,n,t)}function d(e,n,t){return i.G.disjoint(r.g,e,n,t)}function G(e,n,t){return i.G.overlaps(r.g,e,n,t)}function m(e,n,t,o){return i.G.relate(r.g,e,n,t,o)}function x(e,n){return i.G.isSimple(r.g,e,n)}function v(e,n){return i.G.simplify(r.g,e,n)}function M(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.G.convexHull(r.g,e,n,t)}function y(e,n,t){return i.G.difference(r.g,e,n,t)}function w(e,n,t){return i.G.symmetricDifference(r.g,e,n,t)}function R(e,n,t){return i.G.intersect(r.g,e,n,t)}function P(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return i.G.union(r.g,e,n,t)}function Z(e,n,t,o,s,c,u){return i.G.offset(r.g,e,n,t,o,s,c,u)}function z(e,n,t,o){let s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return i.G.buffer(r.g,e,n,t,o,s)}function E(e,n,t,o,s,c,u){return i.G.geodesicBuffer(r.g,e,n,t,o,s,c,u)}function S(e,n,t){let o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return i.G.nearestCoordinate(r.g,e,n,t,o)}function D(e,n,t){return i.G.nearestVertex(r.g,e,n,t)}function T(e,n,t,o,s){return i.G.nearestVertices(r.g,e,n,t,o,s)}function b(e,n,t,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const o=i.G.rotate(n,t,r);return o.spatialReference=e,o}function A(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(n,t);return r.spatialReference=e,r}function L(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(n,t);return r.spatialReference=e,r}function I(e,n,t,o,s){return i.G.generalize(r.g,e,n,t,o,s)}function V(e,n,t,o){return i.G.densify(r.g,e,n,t,o)}function _(e,n,t,o){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return i.G.geodesicDensify(r.g,e,n,t,o,s)}function j(e,n,t){return i.G.planarArea(r.g,e,n,t)}function k(e,n,t){return i.G.planarLength(r.g,e,n,t)}function C(e,n,t,o){return i.G.geodesicArea(r.g,e,n,t,o)}function H(e,n,t,o){return i.G.geodesicLength(r.g,e,n,t,o)}function O(e,n,t){return null==n||null==t?[]:i.G.intersectLinesToPoints(r.g,e,n,t)}function q(e,n){i.G.changeDefaultSpatialReferenceTolerance(e,n)}function B(e){i.G.clearDefaultSpatialReferenceTolerance(e)}const X=Object.freeze(Object.defineProperty({__proto__:null,buffer:z,changeDefaultSpatialReferenceTolerance:q,clearDefaultSpatialReferenceTolerance:B,clip:s,contains:u,convexHull:M,crosses:a,cut:c,densify:V,difference:y,disjoint:d,distance:l,equals:f,extendedSpatialReferenceInfo:o,flipHorizontal:A,flipVertical:L,generalize:I,geodesicArea:C,geodesicBuffer:E,geodesicDensify:_,geodesicLength:H,intersect:R,intersectLinesToPoints:O,intersects:h,isSimple:x,nearestCoordinate:S,nearestVertex:D,nearestVertices:T,offset:Z,overlaps:G,planarArea:j,planarLength:k,relate:m,rotate:b,simplify:v,symmetricDifference:w,touches:g,union:P,within:p},Symbol.toStringTag,{value:"Module"}))},28778:(e,n,t)=>{t.d(n,{g:()=>i});const i={convertToGEGeometry:function(e,n){return null==n?null:e.convertJSONToGeometry(n)},exportPoint:function(e,n,t){const i=new r(e.getPointX(n),e.getPointY(n),t),o=e.hasZ(n),s=e.hasM(n);return o&&(i.z=e.getPointZ(n)),s&&(i.m=e.getPointM(n)),i},exportPolygon:function(e,n,t){return new o(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportPolyline:function(e,n,t){return new s(e.exportPaths(n),t,e.hasZ(n),e.hasM(n))},exportMultipoint:function(e,n,t){return new c(e.exportPoints(n),t,e.hasZ(n),e.hasM(n))},exportExtent:function(e,n,t){const i=e.hasZ(n),r=e.hasM(n),o=new u(e.getXMin(n),e.getYMin(n),e.getXMax(n),e.getYMax(n),t);if(i){const t=e.getZExtent(n);o.zmin=t.vmin,o.zmax=t.vmax}if(r){const t=e.getMExtent(n);o.mmin=t.vmin,o.mmax=t.vmax}return o}};class r{constructor(e,n,t){this.x=e,this.y=n,this.spatialReference=t,this.z=void 0,this.m=void 0}}class o{constructor(e,n,t,i){this.rings=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class s{constructor(e,n,t,i){this.paths=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class c{constructor(e,n,t,i){this.points=e,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,t&&(this.hasZ=t),i&&(this.hasM=i)}}class u{constructor(e,n,t,i,r){this.xmin=e,this.ymin=n,this.xmax=t,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},49729:(e,n,t)=>{t.r(n),t.d(n,{executeGEOperation:()=>r});var i=t(43075);function r(e){return(0,i.g[e.operation])(...e.parameters)}}}]);
//# sourceMappingURL=9729.6f4f7214.chunk.js.map