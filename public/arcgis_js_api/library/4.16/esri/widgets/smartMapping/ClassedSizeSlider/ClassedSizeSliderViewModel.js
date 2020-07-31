// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/maybe ../../../core/accessorSupport/decorators ../SmartMappingSliderViewModel".split(" "),function(l,m,d,g,f,k){return function(h){function b(a){a=h.call(this,a)||this;a.breaks=null;a.zoomingEnabled=!1;return a}d.__extends(b,h);Object.defineProperty(b.prototype,"max",{get:function(){var a=this.breaks;return a&&a.length?a[a.length-1].max:null},set:function(a){this._updateBreakMax(a);this.setMax(a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"min",{get:function(){var a=this.breaks;return a&&a.length?a[0].min:null},set:function(a){this._updateBreakMin(a);this.setMin(a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"values",{get:function(){var a=this.breaks;if(!a||!a.length)return[];for(var c=[],e=0;e<a.length-1;e++)c.push(a[e].max);return c},enumerable:!0,configurable:!0});b.prototype.setValue=function(a,c){var e=this.min;c>this.max||c<e||(this._updateBreakInfos(c,a),this.notifyChange("values"),this.notifyChange("labels"))};
b.prototype._updateBreakMax=function(a){var c=this.breaks,e=this.max,b=this.min;!isNaN(a)&&e!==a&&g.isSome(b)&&a>b&&c&&c.length&&(c[c.length-1].max=a)};b.prototype._updateBreakMin=function(a){var c=this.breaks,b=this.max,d=this.min;!isNaN(a)&&d!==a&&g.isSome(b)&&a<b&&c&&c.length&&(c[0].min=a)};b.prototype._updateBreakInfos=function(a,c){var b=this.breaks;b[c].max=a;b[c].min>b[c].max&&(b[c].min=a);g.isSome(b[c+1])&&(b[c+1].min=a)};d.__decorate([f.property()],b.prototype,"breaks",void 0);d.__decorate([f.property({dependsOn:["breaks"]})],
b.prototype,"max",null);d.__decorate([f.property({dependsOn:["breaks"]})],b.prototype,"min",null);d.__decorate([f.property({dependsOn:["breaks"],readOnly:!0})],b.prototype,"values",null);return b=d.__decorate([f.subclass("esri.widgets.smartMapping.ClassedSizeSlider.ClassedSizeSliderViewModel")],b)}(k)});