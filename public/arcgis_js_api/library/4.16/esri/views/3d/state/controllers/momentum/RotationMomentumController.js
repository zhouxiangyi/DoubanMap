// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec3f64 ./MomentumController ../../utils/navigationUtils ../../../support/geometryUtils".split(" "),function(c,f,d,e,g,h,k,l){Object.defineProperty(f,"__esModule",{value:!0});c=function(c){function b(a){a=c.call(this,a)||this;a.interactionType=2;return a}d.__extends(b,c);Object.defineProperty(b.prototype,"center",{set:function(a){this._set("center",g.vec3f64.clone(a))},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"axis",{set:function(a){this._set("axis",g.vec3f64.clone(a))},enumerable:!0,configurable:!0});b.prototype.momentumStep=function(a,b){a=this.momentum.value(a);k.applyRotation(b,this.center,l.axisAngle.wrapAxisAngle(this.axis,a))};d.__decorate([e.property({constructOnly:!0})],b.prototype,"momentum",void 0);d.__decorate([e.property({constructOnly:!0})],b.prototype,"center",null);d.__decorate([e.property({constructOnly:!0})],b.prototype,"axis",null);return b=d.__decorate([e.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],
b)}(h.MomentumController);f.RotationMomentumController=c});