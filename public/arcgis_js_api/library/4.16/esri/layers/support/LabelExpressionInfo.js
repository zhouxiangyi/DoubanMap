// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators ./labelUtils".split(" "),function(h,k,b,g,c,f){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.value=null;a.expression=null;return a}b.__extends(a,d);e=a;a.prototype.readExpression=function(a,b){return b.value?f.convertTemplatedStringToArcade(b.value):a};a.prototype.writeExpression=function(a,b,c){null!=this.value&&(a=f.convertTemplatedStringToArcade(this.value));b[c]=a};a.prototype.clone=
function(){return new e({value:this.value,expression:this.expression})};var e;b.__decorate([c.property({json:{read:!1,write:!1}})],a.prototype,"value",void 0);b.__decorate([c.property({type:String,json:{write:{allowNull:!0}}})],a.prototype,"expression",void 0);b.__decorate([c.reader("expression",["expression","value"])],a.prototype,"readExpression",null);b.__decorate([c.writer("expression")],a.prototype,"writeExpression",null);return a=e=b.__decorate([c.subclass("esri.layers.support.LabelExpressionInfo")],
a)}(g.JSONSupport)});