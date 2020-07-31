// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/JSONSupport ../../../core/accessorSupport/decorators ../../../core/accessorSupport/ensureType ../../../webdoc/support/opacityUtils".split(" "),function(k,l,b,g,c,h,e){return function(f){function a(a){a=f.call(this,a)||this;a.label=null;a.opacity=null;a.value=null;return a}b.__extends(a,f);d=a;a.prototype.readOpacity=function(a,b){return e.transparencyToOpacity(b.transparency)};a.prototype.writeOpacity=function(a,b,c){b[c]=e.opacityToTransparency(a)};a.prototype.clone=
function(){return new d({label:this.label,opacity:this.opacity,value:this.value})};var d;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:Number,json:{type:h.Integer,write:{target:"transparency"}}})],a.prototype,"opacity",void 0);b.__decorate([c.reader("opacity",["transparency"])],a.prototype,"readOpacity",null);b.__decorate([c.writer("opacity")],a.prototype,"writeOpacity",null);b.__decorate([c.property({type:Number,json:{write:!0}})],
a.prototype,"value",void 0);return a=d=b.__decorate([c.subclass("esri.renderers.visualVariables.support.OpacityStop")],a)}(g.JSONSupport)});