// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Error ../core/lang ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/scheduling ../core/accessorSupport/decorators ./Layer ./mixins/PortalLayer".split(" "),function(p,q,c,f,g,h,k,l,d,m,n){return function(e){function b(a){a=e.call(this,a)||this;a.resourceInfo=null;a.type="unsupported";return a}c.__extends(b,e);b.prototype.initialize=function(){var a=this;this.addResolvingPromise(k.create(function(b,c){l.schedule(function(){var b=a.resourceInfo&&(a.resourceInfo.layerType||
a.resourceInfo.type),d="Unsupported layer type";b&&(d+=" "+b);c(new f("layer:unsupported-layer-type",d,{layerType:b}))})}))};b.prototype.read=function(a,b){var c={resourceInfo:a};null!=a.id&&(c.id=a.id);null!=a.title&&(c.title=a.title);e.prototype.read.call(this,c,b)};b.prototype.write=function(a){return g.mixin(a||{},this.resourceInfo,{id:this.id})};c.__decorate([d.property({readOnly:!0})],b.prototype,"resourceInfo",void 0);c.__decorate([d.property({type:["show","hide"]})],b.prototype,"listMode",
void 0);c.__decorate([d.property({json:{read:!1},readOnly:!0,value:"unsupported"})],b.prototype,"type",void 0);return b=c.__decorate([d.subclass("esri.layers.UnsupportedLayer")],b)}(n.PortalLayer(h.MultiOriginJSONMixin(m)))});