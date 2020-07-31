// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/support/aaBoundingRect ./TerrainConst ./TilingScheme".split(" "),function(v,l,q,f,n,p,r,t){function m(a,d,b,c){f.vec3.copy(k,b);k[c]=d[c];c=f.vec3.subtract(k,k,d);var g=f.vec3.subtract(u,a,d),g=f.vec3.dot(g,c),e=f.vec3.dot(c,c);d=0>=g?d:e<=g?b:f.vec3.add(k,d,f.vec3.scale(c,c,g/e));a=f.vec3.subtract(k,a,d);return Math.PI/2-Math.atan(a[2]/Math.sqrt(a[0]*a[0]+a[1]*
a[1]))}Object.defineProperty(l,"__esModule",{value:!0});var k=n.vec3f64.create(),u=n.vec3f64.create(),e=n.vec3f64.create(),h=n.vec3f64.create();l.isInsideExtent=function(a,d,b){void 0===b&&(b=0);a=a.extent;return 0===b?p.containsPoint(a,d):p.containsPointWithMargin(a,d,b*Math.min(a[2]-a[0],a[3]-a[1]))};l.tiltOnEdge=m;l.tiltToExtentEdge=function(a,d){var b=a.elevationBounds;a=a.extent;b=.5*(b.min+b.max);e[0]=a[0];e[1]=a[1];e[2]=b;h[0]=a[2];h[1]=a[3];h[2]=b;a=b=Infinity;d[0]<e[0]?b=m(d,e,h,0):d[0]>
h[0]&&(b=m(d,h,e,0));d[1]<e[1]?a=m(d,e,h,1):d[1]>h[1]&&(a=m(d,h,e,1));return Math.min(b,a)};l.checkIfTileInfoSupportedForViewSR=function(a,d,b){if(a.spatialReference.isGeographic)return new q("tilingscheme:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes");var c=t.checkUnsupported(a);if(c)return c;var g=a.lods,c=g[0].resolution*Math.pow(2,g[0].level),e=[c*a.size[0],c*a.size[1]],h=[a.origin.x,a.origin.y];b=p.fromExtent(b);var f=p.create();t.computeRowColExtent(b,
e,h,f);e=(f[2]-f[0])*(f[3]-f[1]);e>r.MAX_ROOT_TILES?(g=g[0].scale*Math.pow(2,g[0].level),c=Math.max((b[3]-b[1])/a.size[1],(b[2]-b[0])/a.size[0])*g/c,b=Math.floor(Math.log(c)/Math.log(10)),c=Math.ceil(c/Math.pow(10,b))*Math.pow(10,b),c=new q("tilingscheme:too-many-root-tiles","Scale of level 0 of the tiling scheme (1:"+Math.floor(g).toLocaleString()+") is too large for the layer's extent. Suggested scale: 1:"+c.toLocaleString()+".",{level0Scale:g,suggestedLevel0Scale:c,requiredNumRootTiles:e,allowedNumRootTiles:r.MAX_ROOT_TILES})):
c=null;return c?c:d&&!a.spatialReference.equals(d)?new q("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the local scene"):null}});