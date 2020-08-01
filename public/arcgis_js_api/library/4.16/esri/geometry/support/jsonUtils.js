// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../Extent ../Geometry ../Multipoint ../Point ../Polygon ../Polyline".split(" "),function(u,b,h,q,k,l,m,n){function c(a){return void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax}function d(a){return void 0!==a.points}function e(a){return void 0!==a.x&&void 0!==a.y}function f(a){return void 0!==a.paths}function g(a){return void 0!==a.rings}function p(a){return a?a instanceof q?a:e(a)?l.fromJSON(a):f(a)?n.fromJSON(a):g(a)?m.fromJSON(a):d(a)?k.fromJSON(a):c(a)?
h.fromJSON(a):null:null}Object.defineProperty(b,"__esModule",{value:!0});b.fromJson=function(a){try{throw Error("fromJson is deprecated, use fromJSON instead");}catch(r){console.warn(r.stack)}return p(a)};b.isExtent=c;b.isMultipoint=d;b.isPoint=e;b.isPolyline=f;b.isPolygon=g;b.isMesh=function(a){return void 0!==a.vertexAttributes};b.fromJSON=p;b.getJsonType=function(a){return a?e(a)?"esriGeometryPoint":f(a)?"esriGeometryPolyline":g(a)?"esriGeometryPolygon":c(a)?"esriGeometryEnvelope":d(a)?"esriGeometryMultipoint":
null:null};var t={esriGeometryPoint:l,esriGeometryPolyline:n,esriGeometryPolygon:m,esriGeometryEnvelope:h,esriGeometryMultipoint:k};b.getGeometryType=function(a){return a&&t[a]||null}});