// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./common ../../state/utils/viewUtils ../../support/earthUtils ../../support/geometryUtils".split(" "),function(I,r,z,l,t,F,k,A,n,u,v,B){function C(c,a,b,d){void 0===b&&(b=n.defaultApplyOptions);void 0===d&&(d=!0);p.eyeCenterDistance=0;p.requiresTwoSteps=!1;
var f=w(c,a,b,void 0,p);if(0===f)return!1;t.mat4.identity(m);t.mat4.rotate(m,m,-f,a.viewRight);switch(b.tiltMode){case 1:k.vec3.transformMat4(h,a.viewForward,m);k.vec3.scale(h,h,p.eyeCenterDistance);k.vec3.add(a.center,a.eye,h);break;case 0:k.vec3.subtract(h,a.center,a.eye);k.vec3.transformMat4(h,h,m);k.vec3.subtract(a.eye,a.center,h);break;default:z.neverReached(b.tiltMode)}k.vec3.transformMat4(a.up,a.up,m);a.markViewDirty();return p.requiresTwoSteps&&d?C(c,a,b,!1):!0}function w(c,a,b,d,f){void 0===
b&&(b=n.defaultApplyOptions);void 0===d&&(d=n.defaultApplyOptions);if(!c.state.constraints.tilt)return 0;var e=c.state.constraints.tilt(a.distance,G);var g=b;if(0!==g.interactionType){var h=g.interactionStartCamera,m=g.interactionFactor,p=e.min,r=e.max,x=w(c,h,n.defaultApplyOptions,g),t=0===x?0:u.viewAngle(c.renderCoordsHelper,h.center,h.eye);e.min=p;e.max=r;2===g.interactionType?(n.hasConstraintType(g.selection,2)&&D(c,h,e),n.adjustRangeForInteraction(x,t,!0,m,E,e)):n.adjustRangeForInteraction(x,
t,!1,m,E,e)}2===d.interactionType&&n.hasConstraintType(d.selection,2)&&D(c,d.interactionStartCamera,e);if(1===b.tiltMode||1===d.tiltMode){a:switch(f&&(f.requiresTwoSteps=!1),c.viewingMode){case "global":b=H;g=c.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude;d=g+v.earthRadius;g=c.renderCoordsHelper.intersectManifold(a.ray,g,q);b.eyeCenterDistance=a.distance;g?(b.eyeCenterDistance=k.vec3.distance(a.eye,q),b.tiltAtCenter=u.viewAngle(c.renderCoordsHelper,q,a.eye)):c.state.isLocal?b.tiltAtCenter=
u.viewAngle(c.renderCoordsHelper,a.center,a.eye):(B.sphere.closestPointOnSilhouette(B.sphere.wrap(d),a.ray,q),b.eyeCenterDistance=k.vec3.distance(a.eye,q),b.tiltAtCenter=l.acosClamped(-k.vec3.dot(a.viewForward,k.vec3.normalize(q,q))));b.radius=d;b.eyeRadius=k.vec3.length(a.eye);b.constraints=c.state.constraints;b.centerIsOnSurface=g;a=l.clamp(b.tiltAtCenter,e.min,e.max);if(1E-9<Math.abs(b.tiltAtCenter-a)){if(b.centerIsOnSurface){a=b.constraints;c=d=b.tiltAtCenter;e=a.clampTilt(b.eyeCenterDistance,
d);g=y(b,e);if(a.clampTilt(g,d)!==e)for(d=0;10>d&&1E-9<Math.abs(e-c);)g=(c+e)/2,h=y(b,g),h=a.clampTilt(h,g),1E-9<Math.abs(h-g)?c=g:e=g,d++;a=e;e=a;c=l.asinClamped(b.radius/b.eyeRadius*Math.sin(b.tiltAtCenter));e=l.asinClamped(b.radius/b.eyeRadius*Math.sin(e));c=b.eyeRadius>b.radius?c-e:e-c}else a=b.constraints.clampTilt(b.eyeCenterDistance,b.tiltAtCenter),f&&a<Math.PI/2&&(f.requiresTwoSteps=!0,a=Math.PI/2-1E-5),c=b.tiltAtCenter-Math.PI/2-(a-Math.PI/2);f&&(f.eyeCenterDistance=y(b,a));f=c}else f=0;
break a;case "local":d=u.viewAngle(c.renderCoordsHelper,a.center,a.eye);b=l.clamp(d,e.min,e.max);e=d-b;1E-9<Math.abs(e)?(f&&(d=c.pointsOfInterest.centerOnSurfaceFrequent.estimatedSurfaceAltitude,c=c.renderCoordsHelper.getAltitude(a.eye)-d,b=Math.cos(b),f.eyeCenterDistance=1E-4<Math.abs(b)?c/b:a.distance),f=e):f=0;break a;default:z.neverReached(c.viewingMode),f=void 0}return f}f=u.viewAngle(c.renderCoordsHelper,a.center,a.eye);a=l.clamp(f,e.min,e.max);f-=a;f=1E-9<Math.abs(f)?f:0;return f}function y(c,
a){if(!c.centerIsOnSurface)return c.eyeCenterDistance;a=Math.PI-l.clamp(a,0,Math.PI);var b=l.asinClamped(c.radius/c.eyeRadius*Math.sin(a)),d=Math.sin(Math.PI-a-b)/Math.sin(a);return c.eyeRadius<c.radius&&1<d?Math.sin(Math.PI-a-(Math.PI-b))/Math.sin(a)*c.eyeRadius:d*c.eyeRadius}function D(c,a,b){if(!c.state.isLocal){var d=c.state.constraints;if(d.altitude){c=k.vec3.squaredLength(a.center);var f=Math.sqrt(c);a=a.distance;var e=d.altitude.min+v.earthRadius,d=d.altitude.max+v.earthRadius,e=(e*e-a*a-c)/
(-2*f*a);b.min=Math.max(b.min,Math.min(Math.PI-l.acosClamped((d*d-a*a-c)/(-2*f*a)),b.max));b.max=Math.min(b.max,Math.PI-l.acosClamped(e))}}}Object.defineProperty(r,"__esModule",{value:!0});r.applyTiltConstraint=C;r.getTiltConstraintError=w;var h=A.vec3f64.create(),m=F.mat4f64.create(),q=A.vec3f64.create(),E=l.deg2rad(5),G={min:0,max:0},H={constraints:null,radius:0,eyeRadius:0,centerIsOnSurface:!0,eyeCenterDistance:0,tiltAtCenter:0},p={eyeCenterDistance:0,requiresTwoSteps:!1}});