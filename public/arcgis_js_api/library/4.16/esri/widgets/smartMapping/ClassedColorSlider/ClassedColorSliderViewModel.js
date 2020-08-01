// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/maybe ../../../core/accessorSupport/decorators ../SmartMappingSliderViewModel".split(" "),function(m,n,e,f,c,l){return function(h){function b(a){a=h.call(this,a)||this;a.zoomingEnabled=!1;return a}e.__extends(b,h);Object.defineProperty(b.prototype,"breaks",{set:function(a){this._set("breaks",a);this.notifyChange("max");this.notifyChange("min")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"max",{get:function(){var a=this.breaks;return a&&
a.length?a[a.length-1].max:null},set:function(a){this._updateBreakMax(a);this.setMax(a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"min",{get:function(){var a=this.breaks;return a&&a.length?a[0].min:null},set:function(a){this._updateBreakMin(a);this.setMin(a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"values",{get:function(){var a=this.breaks;if(!a||!a.length)return[];a=a.map(function(a){return a.max});a.pop();return a},enumerable:!0,configurable:!0});
b.prototype.setValue=function(a,d){var b=this.min;d>this.max||d<b||(this._updateBreakInfos(d,a),this.notifyChange("values"),this.notifyChange("labels"))};b.prototype.getStopInfo=function(){var a=this.breaks,d=this.max,b=this.min,g=d-b;if(!a||!a.length||!g)return[];var e=[];a.forEach(function(a){var k=a.color,c=a.max;a=a.min;d===b?a=c=0:(a=(d-a)/g,c=(d-c)/g);e.push({offset:a,color:k},{offset:c,color:k})});return e};b.prototype._updateBreakMax=function(a){var d=this.breaks,b=this.max,c=this.min;!isNaN(a)&&
b!==a&&f.isSome(c)&&a>c&&d&&d.length&&(d[d.length-1].max=a)};b.prototype._updateBreakMin=function(a){var b=this.breaks,c=this.max,e=this.min;!isNaN(a)&&e!==a&&f.isSome(c)&&a<c&&b&&b.length&&(b[0].min=a)};b.prototype._updateBreakInfos=function(a,b){var c=this.breaks;c[b].max=a;c[b].min>c[b].max&&(c[b].min=a);f.isSome(c[b+1])&&(c[b+1].min=a)};e.__decorate([c.property()],b.prototype,"breaks",null);e.__decorate([c.property({dependsOn:["breaks"]})],b.prototype,"max",null);e.__decorate([c.property({dependsOn:["breaks"]})],
b.prototype,"min",null);e.__decorate([c.property({dependsOn:["breaks"],readOnly:!0})],b.prototype,"values",null);e.__decorate([c.property({readOnly:!0})],b.prototype,"zoomingEnabled",void 0);return b=e.__decorate([c.subclass("esri.widgets.smartMapping.ClassedColorSlider.ClassedColorSliderViewModel")],b)}(l)});