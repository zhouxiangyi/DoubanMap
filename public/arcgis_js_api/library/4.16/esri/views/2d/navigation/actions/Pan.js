// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../geometry ../../../../Viewpoint ../../../../core/Accessor ../../../../core/screenUtils ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../viewpointUtils ../../../navigation/PanPlanarMomentumEstimator".split(" "),function(u,v,f,m,n,p,q,g,r,h,k,t){return function(l){function b(c){var a=l.call(this,c)||this;a.animationTime=0;a.momentumEstimator=new t.PanPlanarMomentumEstimator(500,
6,.92);a.momentum=null;a.tmpMomentum=h.vec3f64.create();a.momentumFinished=!1;a.viewpoint=new n({targetGeometry:new m.Point,scale:0,rotation:0});a.watch("momentumFinished",function(c){c&&a.navigation.stop()});return a}f.__extends(b,l);b.prototype.begin=function(c,a){this.navigation.begin();this.momentumEstimator.reset();this.addToEstimator(a);this.previousDrag=a};b.prototype.update=function(c,a){this.addToEstimator(a);var b=a.center.x,d=a.center.y,e=this.previousDrag,b=e?e.center.x-b:-b,d=e?d-e.center.y:
d;c.viewpoint=k.translateBy(this.viewpoint,c.viewpoint,[b||0,d||0]);this.previousDrag=a};b.prototype.end=function(b,a){this.addToEstimator(a);this.momentum=b.navigation.momentumEnabled?this.momentumEstimator.evaluateMomentum():null;this.animationTime=0;if(this.momentum)this.onAnimationUpdate(b);this.previousDrag=null;this.navigation.end()};b.prototype.addToEstimator=function(b){var a=b.center.x,c=b.center.y,d=q.createScreenPointArray(-a,c),a=h.vec3f64.fromValues(-a,c,0);this.momentumEstimator.add(d,
a,.001*b.timestamp)};b.prototype.onAnimationUpdate=function(b){var a=this;this.navigation.animationManager.animateContinous(b.viewpoint,function(c,d){a.momentumFinished=!a.momentum||a.momentum.isFinished(a.animationTime);d*=.001;if(!a.momentumFinished){var e=a.momentum.valueDelta(a.animationTime,d);r.vec3.scale(a.tmpMomentum,a.momentum.direction,e);b.viewpoint=k.translateBy(c,c,a.tmpMomentum)}a.animationTime+=d})};b.prototype.stopMomentumNavigation=function(){this.momentum&&(this.momentumEstimator.reset(),
this.momentum=null,this.navigation.stop())};f.__decorate([g.property()],b.prototype,"momentumFinished",void 0);f.__decorate([g.property()],b.prototype,"viewpoint",void 0);f.__decorate([g.property()],b.prototype,"navigation",void 0);return b=f.__decorate([g.subclass("esri.views.2d.navigation.actions.Pan")],b)}(p)});