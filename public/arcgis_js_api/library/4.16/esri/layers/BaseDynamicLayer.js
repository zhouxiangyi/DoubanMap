// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../request ../core/Error ../core/accessorSupport/decorators ./Layer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer".split(" "),function(n,p,d,g,h,c,k,l,m){return function(f){function a(){var b=null!==f&&f.apply(this,arguments)||this;b.type="base-dynamic";return b}d.__extends(a,f);a.prototype.getImageUrl=function(){throw new h("basedynamiclayer:getImageUrl-not-implemented","getImageUrl() is not implemented");};a.prototype.fetchImage=function(b,a,d,e){b=this.getImageUrl(b,
a,d);var c={responseType:"image",signal:e&&e.signal};e&&e.timestamp&&(c.query={_ts:e.timestamp});return"string"===typeof b?g(b,c).then(function(a){return a.data}):b.then(function(a){return g(a,c)}).then(function(a){return a.data})};d.__decorate([c.property({readOnly:!0,value:"base-dynamic"})],a.prototype,"type",void 0);d.__decorate([c.property({type:["show","hide"]})],a.prototype,"listMode",void 0);return a=d.__decorate([c.subclass("esri.layers.BaseDynamicLayer")],a)}(m.ScaleRangeLayer(l.RefreshableLayer(k)))});