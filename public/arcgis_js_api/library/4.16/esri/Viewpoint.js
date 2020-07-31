// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./Camera ./geometry ./core/JSONSupport ./core/accessorSupport/decorators ./geometry/support/jsonUtils".split(" "),function(n,p,c,k,l,m,d,g){function e(){return{enabled:!this.camera}}return function(h){function b(a){a=h.call(this,a)||this;a.rotation=0;a.scale=0;a.targetGeometry=null;a.camera=null;return a}c.__extends(b,h);f=b;b.prototype.castRotation=function(a){a%=360;0>a&&(a+=360);return a};b.prototype.clone=function(){return new f({rotation:this.rotation,scale:this.scale,
targetGeometry:this.targetGeometry?this.targetGeometry.clone():null,camera:this.camera?this.camera.clone():null})};var f;c.__decorate([d.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:e}}}}})],b.prototype,"rotation",void 0);c.__decorate([d.cast("rotation")],b.prototype,"castRotation",null);c.__decorate([d.property({type:Number,json:{write:!0,origins:{"web-map":{default:0,write:!0},"web-scene":{write:{overridePolicy:e}}}}})],b.prototype,
"scale",void 0);c.__decorate([d.property({types:l.geometryTypes,json:{read:g.fromJSON,write:!0,origins:{"web-scene":{read:g.fromJSON,write:{overridePolicy:e}}}}})],b.prototype,"targetGeometry",void 0);c.__decorate([d.property({type:k,json:{write:!0}})],b.prototype,"camera",void 0);return b=f=c.__decorate([d.subclass("esri.Viewpoint")],b)}(m.JSONSupport)});