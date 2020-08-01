// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ./Widget ./Compass/CompassViewModel ./support/widget".split(" "),function(l,m,b,d,k,f,e){return function(h){function a(c,a){c=h.call(this,c,a)||this;c.goToOverride=null;c.iconClass="esri-icon-locate-circled";c.label=void 0;c.messages=null;c.view=null;c.viewModel=new f;return c}b.__extends(a,h);a.prototype.reset=function(){};a.prototype.render=function(){var c,a,b=this.viewModel,d=b.orientation,b=b.state,g="disabled"===b,f="compass"===
("rotation"===b?"rotation":"compass"),b=g?-1:0,g=(c={},c["esri-disabled"]=g,c["esri-interactive"]=!g,c);c=(a={},a["esri-icon-compass"]=f,a["esri-icon-dial"]=!f,a);a=this.messages;return e.tsx("div",{bind:this,class:this.classes("esri-compass esri-widget--button esri-widget",g),onclick:this._reset,onkeydown:this._reset,role:"button",tabIndex:b,"aria-label":a.reset,title:a.reset},e.tsx("span",{"aria-hidden":"true",class:this.classes("esri-compass__icon",c),styles:this._toRotationTransform(d)}),e.tsx("span",
{class:"esri-icon-font-fallback-text"},a.reset))};a.prototype._reset=function(){this.viewModel.reset()};a.prototype._toRotationTransform=function(a){return{transform:"rotateZ("+a.z+"deg)"}};b.__decorate([d.aliasOf("viewModel.goToOverride")],a.prototype,"goToOverride",void 0);b.__decorate([d.property()],a.prototype,"iconClass",void 0);b.__decorate([d.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0);b.__decorate([d.property(),e.renderable(),e.messageBundle("esri/widgets/Compass/t9n/Compass")],
a.prototype,"messages",void 0);b.__decorate([d.aliasOf("viewModel.view")],a.prototype,"view",void 0);b.__decorate([d.property({type:f}),e.renderable(["viewModel.orientation","viewModel.state"])],a.prototype,"viewModel",void 0);b.__decorate([d.aliasOf("viewModel.reset")],a.prototype,"reset",null);b.__decorate([e.accessibleHandler()],a.prototype,"_reset",null);return a=b.__decorate([d.subclass("esri.widgets.Compass")],a)}(k)});