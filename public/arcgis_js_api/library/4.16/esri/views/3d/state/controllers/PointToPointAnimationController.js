// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3f64 ../../../ViewAnimation ../../animation/pointToPoint/Animation ./AnimationController ../../webgl-engine/lib/Camera ../../webgl-engine/lib/Intersector".split(" "),function(g,h,c,f,l,m,n,p,q,r){Object.defineProperty(h,"__esModule",{value:!0});g=function(d){function a(b){b=d.call(this,b)||this;b.view=null;b.mode="interaction";b.hasTarget=!1;return b}c.__extends(a,d);Object.defineProperty(a.prototype,
"intersectionHelper",{get:function(){return this.view.sceneIntersectionHelper},enumerable:!0,configurable:!0});a.prototype.initialize=function(){this.animation=new n.default(this.view.state.mode);this.viewAnimation="interaction"===this.mode?null:new m};Object.defineProperty(a.prototype,"isInteractive",{get:function(){return"interaction"===this.mode},enumerable:!0,configurable:!0});a.prototype.begin=function(b,a){this.hasTarget=!0;a=this.animationSettings(a);e.copyFrom(this.view.state.camera);var c=
new r.Intersector(this.view.state.mode);this.intersectionHelper.intersectRay(e.ray,c,k)&&(e.center=k);this.animation.update(e,b,a);this.animation.finished&&this.finish()};a.prototype.finish=function(){this.animation.currentTime=this.animation.time;d.prototype.finish.call(this)};Object.defineProperty(a.prototype,"steppingFinished",{get:function(){return this.hasTarget&&this.animation.finished},enumerable:!0,configurable:!0});a.prototype.stepController=function(b,a){this.hasTarget&&this.animation.step(b,
a)};a.prototype.onControllerEnd=function(a){this.hasTarget&&(this.animation.cameraAt(this.animation.currentTime/this.animation.time,a),this.animation.currentTime=this.animation.time);d.prototype.onControllerEnd.call(this,a)};a.prototype.animationSettings=function(a){void 0===a&&(a={});return{apex:{maximumDistance:this.view.state.constraints.clampAltitude(Infinity)/6,ascensionFactor:void 0,descensionFactor:void 0},speedFactor:a.speedFactor,duration:a.duration,maxDuration:a.maxDuration,easing:a.easing}};
c.__decorate([f.property({constructOnly:!0})],a.prototype,"view",void 0);c.__decorate([f.property({constructOnly:!0})],a.prototype,"mode",void 0);return a=c.__decorate([f.subclass("esri.views.3d.state.controllers.PointToPointAnimationController")],a)}(p.AnimationController);h.PointToPointAnimationController=g;var e=new q.default,k=l.vec3f64.create()});