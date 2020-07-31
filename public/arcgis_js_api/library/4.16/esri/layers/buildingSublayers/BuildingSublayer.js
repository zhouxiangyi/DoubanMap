// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Identifiable ../../core/MultiOriginJSONSupport ../../core/accessorSupport/decorators ../support/commonProperties".split(" "),function(h,k,b,f,g,c,d){return function(e){function a(a){a=e.call(this,a)||this;a.title="";a.id=-1;a.modelName=null;a.isEmpty=null;a.visible=!0;a.opacity=1;return a}b.__extends(a,e);a.prototype.readTitle=function(a,b){return"string"===typeof b.alias?b.alias:"string"===typeof b.name?b.name:""};a.prototype.readIdOnlyOnce=function(a){if(-1!==
this.id)return this.id;if("number"===typeof a)return a};b.__decorate([c.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],a.prototype,"title",void 0);b.__decorate([c.reader("service","title",["alias","name"])],a.prototype,"readTitle",null);b.__decorate([c.property()],a.prototype,"layer",void 0);b.__decorate([c.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"id",void 0);b.__decorate([c.reader("service","id")],a.prototype,"readIdOnlyOnce",null);
b.__decorate([c.property(d.readOnlyService(String))],a.prototype,"modelName",void 0);b.__decorate([c.property(d.readOnlyService(Boolean))],a.prototype,"isEmpty",void 0);b.__decorate([c.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],a.prototype,"visible",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"opacity",void 0);return a=b.__decorate([c.subclass("esri.layers.buildingSublayers.BuildingSublayer")],a)}(f.IdentifiableMixin(g.MultiOriginJSONSupport))});