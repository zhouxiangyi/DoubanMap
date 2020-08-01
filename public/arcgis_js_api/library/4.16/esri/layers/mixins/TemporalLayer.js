// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../TimeExtent ../../TimeInterval ../../core/accessorSupport/decorators ../../layers/support/TimeInfo ../support/fieldUtils ../support/timeUtils".split(" "),function(m,b,d,g,f,e,h,k,l){Object.defineProperty(b,"__esModule",{value:!0});b.TemporalLayer=function(b){return function(b){function a(){var c=null!==b&&b.apply(this,arguments)||this;c.timeExtent=null;c.timeOffset=null;c.useViewTime=!0;return c}d.__extends(a,b);a.prototype.readOffset=function(c,a){a=a.timeInfo.exportOptions;
if(!a)return null;c=a.timeOffset;a=l.timeUnitKebabDictionary.fromJSON(a.timeOffsetUnits);return c&&a?new f({value:c,unit:a}):null};Object.defineProperty(a.prototype,"timeInfo",{set:function(a){k.fixTimeInfoFields(a,this.fields);this._set("timeInfo",a)},enumerable:!0,configurable:!0});d.__decorate([e.property({type:g,json:{write:!1}})],a.prototype,"timeExtent",void 0);d.__decorate([e.property({type:f})],a.prototype,"timeOffset",void 0);d.__decorate([e.reader("service","timeOffset",["timeInfo.exportOptions"])],
a.prototype,"readOffset",null);d.__decorate([e.property({value:null,type:h,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"timeInfo",null);d.__decorate([e.property({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"useViewTime",void 0);return a=d.__decorate([e.subclass("esri.layers.mixins.TemporalLayer")],a)}(b)}});