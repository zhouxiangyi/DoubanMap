// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/ObjectStack ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../mathUtils ../stack ./lineSegment ./plane ./ray ./vector".split(" "),function(H,f,T,U,V,A,q,I,e,l,W,k,r,g,X,t){function u(a){void 0===a&&(a=f.UP);return{plane:g.create(a.plane),origin:l.vec3f64.clone(a.origin),
basis1:l.vec3f64.clone(a.basis1),basis2:l.vec3f64.clone(a.basis2)}}function v(a,b){void 0===b&&(b=u());return J(a.origin,a.basis1,a.basis2,b)}function J(a,b,c,d){void 0===d&&(d=u());e.vec3.copy(d.origin,a);e.vec3.copy(d.basis1,b);e.vec3.copy(d.basis2,c);w(d);a=d;1E-6<Math.abs(e.vec3.dot(a.basis1,a.basis2)/(e.vec3.length(a.basis1)*e.vec3.length(a.basis2)))&&B.warn("fromValues()","Provided basis vectors are not perpendicular");1E-6<Math.abs(e.vec3.dot(a.basis1,h(a)))&&B.warn("fromValues()","Basis vectors and plane normal are not perpendicular");
1E-6<Math.abs(-e.vec3.dot(h(a),a.origin)-a.plane[3])&&B.warn("fromValues()","Plane offset is not consistent with plane origin");return d}function w(a){g.fromVectorsAndPoint(a.basis2,a.basis1,a.origin,a.plane)}function K(a,b,c){a!==c&&v(a,c);a=e.vec3.scale(k.sv3d.get(),h(a),b);e.vec3.add(c.origin,c.origin,a);c.plane[3]-=b;return c}function L(a,b){void 0===b&&(b=u());var c=(a[2]-a[0])/2,d=(a[3]-a[1])/2;e.vec3.set(b.origin,a[0]+c,a[1]+d,0);e.vec3.set(b.basis1,c,0,0);e.vec3.set(b.basis2,0,d,0);g.fromValues(0,
0,1,0,b.plane);return b}function C(a,b,c){return g.intersectRay(a.plane,b,c)?M(a,c):!1}function N(a,b,c){var d=x.get(),f=x.get();O(a,b,d,f);for(var f=Number.POSITIVE_INFINITY,p=0,l=D;p<l.length;p++){var h=E(a,l[p],y.get()),n=k.sv3d.get();g.intersectLineSegment(d,h,n)&&(h=W.directionFromTo(k.sv3d.get(),b.origin,n),h=Math.abs(V.acosClamped(e.vec3.dot(b.direction,h))),h<f&&(f=h,e.vec3.copy(c,n)))}return f===Number.POSITIVE_INFINITY?P(a,b,c):c}function P(a,b,c){if(C(a,b,c))return c;var d=x.get(),f=x.get();
O(a,b,d,f);for(var p=Number.POSITIVE_INFINITY,h=0,l=D;h<l.length;h++){var n=E(a,l[h],y.get()),m=k.sv3d.get();g.intersectLineSegmentClamp(d,n,m)&&(n=X.distance2(b,m),g.isPointInside(f,m)&&n<p&&(p=n,e.vec3.copy(c,m)))}F(a,b.origin)<p&&Q(a,b.origin,c);return c}function Q(a,b,c){var d=g.projectPoint(a.plane,b,k.sv3d.get());b=r.projectPointClamp(R(a,a.basis1),d,-1,1,k.sv3d.get());d=r.projectPointClamp(R(a,a.basis2),d,-1,1,k.sv3d.get());e.vec3.subtract(c,e.vec3.add(k.sv3d.get(),b,d),a.origin);return c}
function S(a,b,c){var d=a.origin,f=a.basis1,g=a.basis2;b=e.vec3.subtract(k.sv3d.get(),b,d);f=t.projectPointSignedLength(f,b);g=t.projectPointSignedLength(g,b);a=t.projectPointSignedLength(h(a),b);return e.vec3.set(c,f,g,a)}function F(a,b){b=S(a,b,k.sv3d.get());var c=a.basis2;a=e.vec3.length(a.basis1);c=e.vec3.length(c);a=Math.max(Math.abs(b[0])-a,0);c=Math.max(Math.abs(b[1])-c,0);b=b[2];return a*a+c*c+b*b}function G(a,b){var c=-a.plane[3];return t.projectPointSignedLength(h(a),b)-c}function h(a){return g.normal(a.plane)}
function M(a,b){var c=e.vec3.subtract(k.sv3d.get(),b,a.origin);b=e.vec3.squaredLength(a.basis1);var d=e.vec3.squaredLength(a.basis2),f=e.vec3.dot(a.basis1,c);a=e.vec3.dot(a.basis2,c);return 0>-f-b&&0>f-b&&0>-a-d&&0>a-d}function R(a,b){var c=y.get();e.vec3.copy(c.origin,a.origin);e.vec3.copy(c.vector,b);return c}function E(a,b,c){var d=a.basis1,f=a.basis2;a=a.origin;var g=e.vec3.scale(k.sv3d.get(),d,b.origin[0]),h=e.vec3.scale(k.sv3d.get(),f,b.origin[1]);e.vec3.add(c.origin,g,h);e.vec3.add(c.origin,
c.origin,a);d=e.vec3.scale(k.sv3d.get(),d,b.direction[0]);b=e.vec3.scale(k.sv3d.get(),f,b.direction[1]);e.vec3.scale(c.vector,e.vec3.add(d,d,b),2);return c}function O(a,b,c,d){a=h(a);g.fromVectorsAndPoint(a,b.direction,b.origin,c);g.fromVectorsAndPoint(g.normal(c),a,b.origin,d)}Object.defineProperty(f,"__esModule",{value:!0});var B=U.getLogger("esri.views.3d.support.geometryUtils.boundedPlane");H=function(){return function(){this.plane=g.create();this.origin=l.vec3f64.create();this.basis1=l.vec3f64.create();
this.basis2=l.vec3f64.create()}}();f.BoundedPlaneClass=H;f.create=u;f.wrap=function(a,b,c){var d=Y.get();d.origin=a;d.basis1=b;d.basis2=c;d.plane=g.wrap(0,0,0,0);w(d);return d};f.copy=v;f.fromValues=J;f.updateUnboundedPlane=w;f.elevate=K;f.setExtent=function(a,b,c){L(b,c);K(c,G(a,a.origin),c);return c};f.fromAABoundingRect=L;f.intersectRay=C;f.intersectRayClosestSilhouette=function(a,b,c){if(C(a,b,c))return c;a=N(a,b,k.sv3d.get());e.vec3.add(c,b.origin,e.vec3.scale(k.sv3d.get(),b.direction,e.vec3.distance(b.origin,
a)/e.vec3.length(b.direction)));return c};f.closestPointOnSilhouette=N;f.closestPoint=P;f.projectPoint=Q;f.projectPointLocal=S;f.distance2=F;f.distance=function(a,b){return Math.sqrt(F(a,b))};f.distanceToSilhouette=function(a,b){for(var c=Number.NEGATIVE_INFINITY,d=0,e=D;d<e.length;d++){var f=E(a,e[d],y.get()),f=r.distance2(f,b);f>c&&(c=f)}return Math.sqrt(c)};f.extrusionContainsPoint=function(a,b){return g.isPointInside(a.plane,b)&&M(a,b)};f.axisAt=function(a,b,c,d){switch(c){case 0:e.vec3.copy(d,
a.basis1);e.vec3.normalize(d,d);break;case 1:e.vec3.copy(d,a.basis2);e.vec3.normalize(d,d);break;case 2:e.vec3.copy(d,h(a));break;default:T.neverReached(c)}return d};f.altitudeAt=G;f.setAltitudeAt=function(a,b,c,d){var f=G(a,b);a=e.vec3.scale(Z,h(a),c-f);e.vec3.add(d,b,a);return d};f.equals=function(a,b){return e.vec3.equals(a.basis1,b.basis1)&&e.vec3.equals(a.basis2,b.basis2)&&e.vec3.equals(a.origin,b.origin)};f.transform=function(a,b,c){a!==c&&v(a,c);q.mat4.invert(m,b);q.mat4.transpose(m,m);e.vec3.transformMat4(c.basis1,
a.basis1,m);e.vec3.transformMat4(c.basis2,a.basis2,m);e.vec3.transformMat4(c.plane,a.plane,m);e.vec3.transformMat4(c.origin,a.origin,b);g.setOffsetFromPoint(c.plane,c.origin,c.plane);return c};f.rotate=function(a,b,c,d){a!==d&&v(a,d);q.mat4.rotate(z,q.mat4.identity(z),b,c);e.vec3.transformMat4(d.basis1,a.basis1,z);e.vec3.transformMat4(d.basis2,a.basis2,z);w(d);return d};f.normal=h;f.UP={plane:g.create(),origin:l.vec3f64.fromValues(0,0,0),basis1:l.vec3f64.fromValues(1,0,0),basis2:l.vec3f64.fromValues(0,
1,0)};var x=new A.ObjectStack(g.create),y=new A.ObjectStack(r.create),Z=l.vec3f64.create(),Y=new A.ObjectStack(function(){return{origin:null,basis1:null,basis2:null,plane:null}}),D=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],m=I.mat4f64.create(),z=I.mat4f64.create()});