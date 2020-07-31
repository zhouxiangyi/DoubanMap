// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/lang ../core/accessorSupport/decorators ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(p,q,b,l,d,c,m,g,f,n){var h=l.ofType({base:null,key:"type",typeMap:{text:g}});return function(k){function a(a){a=k.call(this,a)||this;a.verticalOffset=null;a.callout=null;a.styleOrigin=null;a.symbolLayers=new h;a.type="label-3d";return a}b.__extends(a,k);e=a;a.prototype.supportsCallout=function(){return!0};
a.prototype.hasVisibleCallout=function(){return f.hasVisibleCallout(this)};a.prototype.hasVisibleVerticalOffset=function(){return f.hasVisibleVerticalOffset(this)};a.prototype.clone=function(){return new e({styleOrigin:d.clone(this.styleOrigin),symbolLayers:d.clone(this.symbolLayers),thumbnail:d.clone(this.thumbnail),callout:d.clone(this.callout),verticalOffset:d.clone(this.verticalOffset)})};a.fromTextSymbol=function(a){return new e({symbolLayers:[g.fromTextSymbol(a)]})};var e;b.__decorate([c.property({type:n.default,
json:{write:!0}})],a.prototype,"verticalOffset",void 0);b.__decorate([c.property(f.calloutProperty)],a.prototype,"callout",void 0);b.__decorate([c.property({json:{read:!1,write:!1}})],a.prototype,"styleOrigin",void 0);b.__decorate([c.property({type:h})],a.prototype,"symbolLayers",void 0);b.__decorate([c.enumeration({LabelSymbol3D:"label-3d"})],a.prototype,"type",void 0);return a=e=b.__decorate([c.subclass("esri.symbols.LabelSymbol3D")],a)}(m)});