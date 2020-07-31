// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry ../../../core/arrayUtils ../../../core/lang ../../../core/maybe ../../../core/unitUtils ../../../core/libs/gl-matrix-2/mat2d ../../../core/libs/gl-matrix-2/mat2df64 ../../../core/libs/gl-matrix-2/quat ../../../core/libs/gl-matrix-2/quatf64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/Circle ../../../geometry/geometryEngine ../../../geometry/support/coordsUtils ../../../geometry/support/spatialReferenceUtils".split(" "),
function(r,g,w,m,E,F,x,G,H,u,y,z,n,k,I,A,t,B){function p(a,d,e){void 0===e&&(e=null);return x.isSome(e)?[a,d,e]:[a,d]}function h(a,d,e){void 0===e&&(e=null);return x.isSome(e)?{x:a,y:d,z:e}:{x:a,y:d}}function v(a,d){d=new m.Point({x:a[0],y:a[1],spatialReference:d});2<a.length&&(d.z=a[2]);return d}function q(a,d,e,c){void 0===c&&(c=!0);a=F.clone(a);a.forEach(function(a){E.equals(a[0],a[a.length-1])||a.push(a[0])});a=new m.Polygon({rings:a,spatialReference:d});a.rings.forEach(function(a){t.isClockwise(a,
!1,!1)||a.reverse()});e&&t.unnormalizeGeometryOnDatelineCrossing(a);c&&a.isSelfIntersecting&&B.isValid(d)&&(a=A.simplify(a));return a}Object.defineProperty(g,"__esModule",{value:!0});g.makeMapPoint=p;g.makeSurfacePoint=h;r=function(){function a(a){this.spatialReference=a}a.prototype.mapToLocalMultiple=function(a){var e=this;return a.map(function(a){return e.mapToLocal(a)})};Object.defineProperty(a.prototype,"doUnnormalization",{get:function(){return!1},enumerable:!0,configurable:!0});return a}();
g.SurfaceCoordinateSystem=r;var C=function(a){function d(e,c,b){void 0===b&&(b=null);c=a.call(this,c)||this;c.defaultZ=b;c.transform=u.mat2df64.create();c.transformInv=u.mat2df64.create();c.transform=u.mat2df64.clone(e);H.mat2d.invert(c.transformInv,c.transform);return c}w.__extends(d,a);d.prototype.makeMapPoint=function(a,c){return p(a,c,this.defaultZ)};d.prototype.mapToLocal=function(a){return h(this.transform[0]*a[0]+this.transform[2]*a[1]+this.transform[4],this.transform[1]*a[0]+this.transform[3]*
a[1]+this.transform[5])};d.prototype.localToMap=function(a){return p(this.transformInv[0]*a.x+this.transformInv[2]*a.y+this.transformInv[4],this.transformInv[1]*a.x+this.transformInv[3]*a.y+this.transformInv[5],this.defaultZ)};return d}(r);g.AffineCoordinateSystem=C;var D=function(a){function d(e,c){var b=a.call(this,e.spatialReference)||this;b.view=e;b.defaultZ=null;b.pWS=k.vec3f64.create();b.tangentFrameUpWS=k.vec3f64.create();b.tangentFrameRightWS=k.vec3f64.create();b.tangentFrameForwardWS=k.vec3f64.create();
b.localFrameRightWS=k.vec3f64.create();b.localFrameUpWS=k.vec3f64.create();b.worldToLocalTransform=z.quatf64.create();b.localToWorldTransform=z.quatf64.create();b.scale=1;b.scale=e.resolution;b.referenceMapPoint=c;b.defaultZ=c.hasZ?c.z:null;e=e.state.camera.viewRight;b.view.renderCoordsHelper.toRenderCoords(b.referenceMapPoint,b.pWS);b.view.renderCoordsHelper.worldBasisAtPosition(b.pWS,0,b.tangentFrameRightWS);b.view.renderCoordsHelper.worldBasisAtPosition(b.pWS,1,b.tangentFrameUpWS);b.view.renderCoordsHelper.worldBasisAtPosition(b.pWS,
2,b.tangentFrameForwardWS);c=k.vec3f64.create();n.vec3.scale(c,b.tangentFrameForwardWS,n.vec3.dot(e,b.tangentFrameForwardWS));n.vec3.subtract(b.localFrameRightWS,e,c);n.vec3.normalize(b.localFrameRightWS,b.localFrameRightWS);n.vec3.cross(b.localFrameUpWS,b.tangentFrameForwardWS,b.localFrameRightWS);y.quat.rotationTo(b.worldToLocalTransform,b.localFrameRightWS,b.tangentFrameRightWS);y.quat.invert(b.localToWorldTransform,b.worldToLocalTransform);return b}w.__extends(d,a);Object.defineProperty(d.prototype,
"doUnnormalization",{get:function(){return"global"===this.view.viewingMode},enumerable:!0,configurable:!0});d.prototype.makeMapPoint=function(a,c){return p(a,c,this.defaultZ)};d.prototype.mapToLocal=function(a){var c=k.vec3f64.create();this.view.renderCoordsHelper.toRenderCoords(new m.Point({x:a[0],y:a[1],spatialReference:this.spatialReference}),c);n.vec3.transformQuat(c,c,this.worldToLocalTransform);a=this.view.renderCoordsHelper.fromRenderCoords(c,this.view.spatialReference);return h(a.x/this.scale,
a.y/this.scale)};d.prototype.localToMap=function(a){var c=k.vec3f64.create();this.view.renderCoordsHelper.toRenderCoords(new m.Point({x:a.x*this.scale,y:a.y*this.scale,spatialReference:this.spatialReference}),c);n.vec3.transformQuat(c,c,this.localToWorldTransform);a=this.view.renderCoordsHelper.fromRenderCoords(c,this.view.spatialReference);return p(a.x,a.y,this.defaultZ)};return d}(r);g.SceneViewCoordinateSystem=D;g.createViewAlignedCoordinateSystem=function(a,d){return"2d"===a.type?new C(a.state.transform,
a.spatialReference,2<d.length?d[2]:null):"3d"===a.type?(d=2<d.length?new m.Point({x:d[0],y:d[1],z:d[2],spatialReference:a.spatialReference}):new m.Point({x:d[0],y:d[1],spatialReference:a.spatialReference}),new D(a,d)):null};g.createPoint=v;g.createMultipoint=function(a,d){return new m.Multipoint({points:a,spatialReference:d})};g.createPolyline=function(a,d,e){a=new m.Polyline({paths:a,spatialReference:d});e&&t.unnormalizeGeometryOnDatelineCrossing(a);return a};g.createPolygon=q;g.createSquare=function(a,
d,e){var c=d.mapToLocalMultiple(a);a=[];var b=c[0].x,f=c[0].y,l=Math.round(c[1].x-b),g=Math.round(c[1].y-f),c=Math.max(Math.abs(l),Math.abs(g));e?(e=b+c,l=f+c,b-=c,f-=c,a.push(h(e,f),h(b,f),h(b,l),h(e,l))):(e=0<l?b+c:b-c,c=0<g?f+c:f-c,a.push(h(b,f),h(e,f),h(e,c),h(b,c)));return q([a.map(function(a){return d.localToMap(a)})],d.spatialReference,d.doUnnormalization,!0)};g.createRectangle=function(a,d,e){var c=d.mapToLocalMultiple(a);1===c.length&&(a=c[0],c=[h(a.x-48,a.y+48),h(a.x+48,a.y-48),h(a.x+48,
a.y-48),h(a.x-48,a.y+48)]);a=[];var b=c[0].x,f=c[0].y,l=c[1].x,c=c[1].y;if(e){e=Math.round(l-b);var g=Math.round(c-f);a.push(h(b-e,f-g),h(l,f-g),h(l,c),h(b-e,c))}else a.push(h(b,f),h(l,f),h(l,c),h(b,c));return q([a.map(function(a){return d.localToMap(a)})],d.spatialReference,d.doUnnormalization,!0)};g.createCircle=function(a,d,e,c){var b=d.mapToLocalMultiple(a),f=a=null;e?(a=b[0],f=b[1]):(a=b[0],f=b[1],e=Math.round(f.x-a.x),f=Math.round(f.y-a.y),b=Math.max(Math.abs(e),Math.abs(f)),a=h(0<e?a.x+b/2:
a.x-b/2,0<f?a.y+b/2:a.y-b/2),f=h(Math.abs(e)>Math.abs(f)?a.x-b/2:a.x,Math.abs(e)>Math.abs(f)?a.y:a.y-b/2));b=d.localToMap(a);e=d.localToMap(f);d.doUnnormalization&&t.unnormalizeVerticesOnDatelineCrossing([[b,e]],d.spatialReference);b=v(b,d.spatialReference);e=v(e,d.spatialReference);var g=G.getMetersPerUnitForSR(d.spatialReference),k=0;B.isValid(d.spatialReference)?k=g*A.distance(b,e,null):(e=a.x-f.x,f=a.y-f.y,k=g*Math.sqrt(e*e+f*f)*(c||1));d=new I({center:b,radius:k,radiusUnit:"meters",spatialReference:d.spatialReference});
return q(d.rings,d.spatialReference,!1)};g.createEllipse=function(a,d,e){var c=d.mapToLocalMultiple(a);a=c[0];var b=c[1],c=Math.round(b.x-a.x),b=Math.round(b.y-a.y);a=h(e?a.x:a.x+c/2,e?a.y:a.y+b/2);c=e?c:c/2;e=e?b:b/2;for(var b=[],f=2*Math.PI/60,g=0;60>g;g++){var k=h(c*Math.cos(g*f)+a.x,e*Math.sin(g*f)+a.y);b.push(k)}b.push(b[0]);return q([b.map(function(a){return d.localToMap(a)})],d.spatialReference,d.doUnnormalization,!1)}});