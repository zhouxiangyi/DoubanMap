// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../core/lang ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./Callout3D ./LineCallout3DBorder ../support/materialUtils".split(" "),function(p,q,b,h,e,k,l,c,m,n,f){return function(g){function a(a){a=g.call(this,a)||this;a.type="line";a.color=new h([0,0,0,1]);a.size=l.px2pt(1);a.border=null;return a}b.__extends(a,g);d=a;Object.defineProperty(a.prototype,"visible",{get:function(){return 0<this.size&&k.isSome(this.color)&&0<this.color.a},
enumerable:!0,configurable:!0});a.prototype.clone=function(){return new d({color:e.clone(this.color),size:this.size,border:e.clone(this.border)})};var d;b.__decorate([c.property({type:["line"]})],a.prototype,"type",void 0);b.__decorate([c.property(f.colorAndTransparencyProperty)],a.prototype,"color",void 0);b.__decorate([c.property(f.screenSizeProperty)],a.prototype,"size",void 0);b.__decorate([c.property({type:n.default,json:{write:!0}})],a.prototype,"border",void 0);b.__decorate([c.property({dependsOn:["size",
"color"],readOnly:!0})],a.prototype,"visible",null);return a=d=b.__decorate([c.subclass("esri.symbols.callouts.LineCallout3D")],a)}(m)});