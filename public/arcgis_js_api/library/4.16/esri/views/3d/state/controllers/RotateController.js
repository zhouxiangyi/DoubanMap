// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/mathUtils ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../camera/constraintUtils ../Constraints ./InteractiveController ../utils/navigationUtils".split(" "),function(d,h,e,m,g,l,r,t,n,c,f,u,p,v,q){Object.defineProperty(h,
"__esModule",{value:!0});d=function(d){function a(b){b=d.call(this,b)||this;b.view=null;b.pivot="center";b.lastPoint=n.vec2f64.create();b.tmpWorldUp=f.vec3f64.create();b.tmpViewDir=f.vec3f64.create();b.tmpRotCurPoint=n.vec2f64.create();b.tmpTransf=r.mat4f64.create();b.tmpAxis=f.vec3f64.create();b.pivotPos=f.vec3f64.create();b.constraintOptions={selection:15,interactionType:2,interactionFactor:0,interactionStartCamera:null,interactionDirection:null,tiltMode:0};return b}e.__extends(a,d);Object.defineProperty(a.prototype,
"intersectionHelper",{get:function(){return this.view.sceneIntersectionHelper},enumerable:!0,configurable:!0});a.prototype.initialize=function(){this.rotScale="center"===this.pivot?3:1.5};a.prototype.begin=function(b){if(this.active){switch(this.pivot){case "eye":c.vec3.copy(this.pivotPos,this.beginCamera.eye);this.constraintOptions.interactionType=3;this.constraintOptions.tiltMode=1;this.constraintOptions.selection=0;break;case "center":this.intersectionHelper.intersectRayFreePointFallback(this.beginCamera.ray,
this.pivotPos)||c.vec3.copy(this.pivotPos,this.beginCamera.center),this.beginCamera.center=this.pivotPos,this.constraintOptions.interactionType=2,this.constraintOptions.tiltMode=0,this.constraintOptions.selection=11}this.constraintOptions.interactionStartCamera=this.beginCamera;q.normalizeCoordinate(this.beginCamera,b,this.lastPoint)}};a.prototype.update=function(b){if(this.active){var a;switch(this.pivot){case "eye":a=this.currentCamera.center;break;case "center":this.currentCamera.center=this.pivotPos,
a=this.currentCamera.eye}this.applyRotation(this.currentCamera,b,a,this.pivotPos);u.applyAll(this.view,this.currentCamera,this.constraintOptions)}};a.prototype.end=function(){this.active&&this.finishController()};a.prototype.applyRotation=function(b,a,d,e){this.view.renderCoordsHelper.worldUpAtPosition(e,this.tmpWorldUp);q.normalizeCoordinate(b,a,this.tmpRotCurPoint);a=(this.lastPoint[1]-this.tmpRotCurPoint[1])*this.rotScale;var f=(this.tmpRotCurPoint[0]-this.lastPoint[0])*this.rotScale;c.vec3.subtract(this.tmpViewDir,
d,e);var k=c.vec3.length(this.tmpViewDir),k=m.acosClamped(c.vec3.dot(this.tmpViewDir,this.tmpWorldUp)/k);if("eye"===this.pivot){var g=.5*Math.PI-k,h=.495*Math.PI;a=g-Math.max(-h,Math.min(h,g+-.5*a))}a=m.clamp(a+k,p.TiltDefault.min,p.TiltDefault.max)-k;l.mat4.identity(this.tmpTransf);c.vec3.cross(this.tmpAxis,b.up,this.tmpViewDir);"center"===this.pivot&&(f=-f);l.mat4.rotate(this.tmpTransf,this.tmpTransf,f,this.tmpWorldUp);l.mat4.rotate(this.tmpTransf,this.tmpTransf,a,this.tmpAxis);c.vec3.transformMat4(this.tmpViewDir,
this.tmpViewDir,this.tmpTransf);c.vec3.add(d,e,this.tmpViewDir);c.vec3.transformMat4(b.up,b.up,this.tmpTransf);t.vec2.copy(this.lastPoint,this.tmpRotCurPoint);b.markViewDirty()};e.__decorate([g.property({constructOnly:!0})],a.prototype,"view",void 0);e.__decorate([g.property()],a.prototype,"pivot",void 0);return a=e.__decorate([g.subclass("esri.views.3d.state.controllers.RotateController")],a)}(v.InteractiveController);h.RotateController=d});