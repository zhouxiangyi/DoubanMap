// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/support/aaBoundingRect ../support/earthUtils ../webgl-engine/lib/Intersector".split(" "),function(x,k,f,l,t,m,u){function n(a,b){return a.basemapTerrain?a.elevationProvider.getElevation(b[0],b[1],b[2],a.renderCoordsHelper.spatialReference)||0:0}function p(a,b,c){if(!a.state.isGlobal)return!1;var d=n(a,b);a=a.stateManager.constraintsManager.nearFarHeuristic.compute(b,c,a.dataExtent,
d,v).far;a*=a;return f.vec3.squaredDistance(b,c)>a}function w(a,b,c){void 0===c&&(c=l.vec3f64.create());var d=q[a.viewingMode];d||(d=new u.Intersector(a.viewingMode),d.options.backfacesTerrain=!a.state.isGlobal,d.options.invisibleTerrain=!0,q[a.viewingMode]=d);var e=a.state.isGlobal;return a.sceneIntersectionHelper.intersectRay(b,d,c)&&!p(a,b.origin,c)?!0:!a.renderCoordsHelper.intersectManifold(b,0,c)||p(a,b.origin,c)?e?(a=c,c=f.vec3.dot(b.origin,b.origin)-m.earthRadius*m.earthRadius,f.vec3.scale(a,
b.direction,(0<c?Math.sqrt(c)/3:1)/f.vec3.length(b.direction)),f.vec3.add(a,a,b.origin),!0):!1:!0}Object.defineProperty(k,"__esModule",{value:!0});k.eyeWithinExtent=function(a,b,c,d){return a.renderCoordsHelper.fromRenderCoords(b.eye,r,d)&&t.containsPoint(c,r)};k.surfaceElevationBelowEye=function(a,b){return n(a,b.eye)};k.cameraOnContentAlongViewDirection=function(a,b,c,d){var e=a.state.camera.clone();b&&(e.eye=b);c&&(e.center=c);d&&(e.up=d);w(a,e.ray,g)||f.vec3.copy(g,e.center);c=a.state.constraints;
d=c.minimumPoiDistance;f.vec3.squaredDistance(e.eye,g)<d&&(b=c.collision.enabled,f.vec3.copy(h,e.viewForward),f.vec3.scale(h,h,d),b?f.vec3.subtract(e.eye,g,h):f.vec3.add(g,e.eye,h),a=a.renderCoordsHelper,d=a.getAltitude(e.eye),c=c.collision.elevationMargin,b&&d<c&&(f.vec3.subtract(h,g,e.eye),a.setAltitude(c,e.eye),f.vec3.add(g,e.eye,h)));e.center=g;return e};var q={},r=l.vec3f64.create(),g=l.vec3f64.create(),h=l.vec3f64.create(),v={near:0,far:0}});