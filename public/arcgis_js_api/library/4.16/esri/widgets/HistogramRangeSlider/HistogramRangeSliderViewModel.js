// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/maybe ../../core/accessorSupport/decorators ../../intl/date ../../renderers/support/utils ../Slider/SliderViewModel".split(" "),function(m,n,b,g,e,h,k,l){return function(f){function a(c){var d=f.call(this,c)||this;d.average=null;d.bins=null;d.hasTimeData=!1;d.labelFormatFunction=function(c){return d.hasTimeData?h.formatDate(new Date(c),k.timelineDateFormatOptions):d.defaultLabelFormatFunction(c)};d.rangeType="equal";d.standardDeviation=null;return d}b.__extends(a,
f);a.prototype.generateWhereClause=function(c){var d=this.rangeType,a=this.values;if("ready"!==this.state||!a.length||!g.isSome(c))return null;var b=a[0],a=1<a.length?a[a.length-1]:null;switch(d){case "equal":return c+" \x3d "+b;case "not-equal":return c+" \x3c\x3e "+b;case "less-than":return c+" \x3c "+b;case "greater-than":return c+" \x3e "+b;case "at-least":return c+" \x3e\x3d "+b;case "at-most":return c+" \x3c\x3d "+b;case "between":return c+" BETWEEN "+b+" AND "+a;case "not-between":return c+
" NOT BETWEEN "+b+" AND "+a;default:return null}};b.__decorate([e.property()],a.prototype,"average",void 0);b.__decorate([e.property()],a.prototype,"bins",void 0);b.__decorate([e.property()],a.prototype,"hasTimeData",void 0);b.__decorate([e.property()],a.prototype,"labelFormatFunction",void 0);b.__decorate([e.property()],a.prototype,"rangeType",void 0);b.__decorate([e.property()],a.prototype,"standardDeviation",void 0);return a=b.__decorate([e.subclass("esri.widgets.HistogramRangeSlider.HistogramRangeSliderViewModel")],
a)}(l)});