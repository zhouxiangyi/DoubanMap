// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/lang ../../core/accessorSupport/decorators ./BarChartMediaInfo ./ColumnChartMediaInfo ./Content ./ImageMediaInfo ./LineChartMediaInfo ./PieChartMediaInfo ./support/mediaInfoTypes".split(" "),function(q,r,b,f,c,g,h,k,l,m,n,p){return function(e){function a(a){a=e.call(this,a)||this;a.mediaInfos=null;a.type="media";return a}b.__extends(a,e);d=a;a.prototype.readMediaInfos=function(a){return a&&a.map(function(a){if("image"===a.type)return l.fromJSON(a);if("barchart"===
a.type)return g.fromJSON(a);if("columnchart"===a.type)return h.fromJSON(a);if("linechart"===a.type)return m.fromJSON(a);if("piechart"===a.type)return n.fromJSON(a)}).filter(Boolean)};a.prototype.writeMediaInfos=function(a,b){b.mediaInfos=a&&a.map(function(a){return a.toJSON()})};a.prototype.clone=function(){return new d({mediaInfos:this.mediaInfos?f.clone(this.mediaInfos):null})};var d;b.__decorate([c.property({types:[p.types]})],a.prototype,"mediaInfos",void 0);b.__decorate([c.reader("mediaInfos")],
a.prototype,"readMediaInfos",null);b.__decorate([c.writer("mediaInfos")],a.prototype,"writeMediaInfos",null);b.__decorate([c.property({type:["media"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=b.__decorate([c.subclass("esri.popup.content.MediaContent")],a)}(k)});