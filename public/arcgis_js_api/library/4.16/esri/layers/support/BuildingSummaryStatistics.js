// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../core/JSONSupport ../../core/Loadable ../../core/Logger ../../core/maybe ../../core/Promise ../../core/promiseUtils ../../core/accessorSupport/decorators".split(" "),function(r,t,c,g,f,h,k,l,m,n,d){var p=k.getLogger("esri.layers.support.BuildingSummaryStatistics"),q=function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.fieldName=null;a.modelName=null;a.label=null;a.min=null;a.max=null;a.mostFrequentValues=null;a.subLayerIds=null;
return a}c.__extends(b,e);c.__decorate([d.property({type:String})],b.prototype,"fieldName",void 0);c.__decorate([d.property({type:String})],b.prototype,"modelName",void 0);c.__decorate([d.property({type:String})],b.prototype,"label",void 0);c.__decorate([d.property({type:Number})],b.prototype,"min",void 0);c.__decorate([d.property({type:Number})],b.prototype,"max",void 0);c.__decorate([d.property({json:{read:function(a){return Array.isArray(a)&&(a.every(function(a){return"string"===typeof a})||a.every(function(a){return"number"===
typeof a}))?a.slice():null}}})],b.prototype,"mostFrequentValues",void 0);c.__decorate([d.property({type:[Number]})],b.prototype,"subLayerIds",void 0);return b=c.__decorate([d.subclass("esri.layers.support.BuildingFieldStatistics")],b)}(f.JSONSupport);return function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.url=null;return a}c.__extends(b,e);Object.defineProperty(b.prototype,"fields",{get:function(){return this.loaded?this._get("fields"):(p.error("building summary statistics are not loaded"),
null)},enumerable:!0,configurable:!0});b.prototype.load=function(a){a=l.isSome(a)?a.signal:null;this.addResolvingPromise(this._fetchService(a));return n.resolve(this)};b.prototype._fetchService=function(a){return c.__awaiter(this,void 0,void 0,function(){var b,d;return c.__generator(this,function(c){switch(c.label){case 0:return[4,g(this.url,{query:{f:"json"},responseType:"json",signal:a})];case 1:return b=c.sent(),d=b.data,this.read(d,{origin:"service"}),[2]}})})};c.__decorate([d.property({constructOnly:!0,
type:String})],b.prototype,"url",void 0);c.__decorate([d.property({readOnly:!0,type:[q],json:{read:{source:"summary"}}})],b.prototype,"fields",null);return b=c.__decorate([d.subclass("esri.layers.support.BuildingSummaryStatistics")],b)}(h.LoadableMixin(m.EsriPromiseMixin(f.JSONSupport)))});