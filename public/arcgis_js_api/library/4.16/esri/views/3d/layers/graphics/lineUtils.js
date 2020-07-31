// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/maybe ../../../../core/typedArrayUtil ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/triangulationUtils ./constants ./elevationAlignmentUtils ../../support/projectionUtils ../../terrain/OverlayRenderer ../../webgl-engine/lib/GeometryData ../../webgl-engine/shaders/RibbonLineTechnique".split(" "),function(F,m,v,k,w,p,r,t,x,y,z,A,B,c){function u(b,g,f){for(var d=[],e=0;e<
b.length;e++){var a=b[e],c=a.count;1>=c||(a=3*a.index,c=a+3*c,d.push({position:g.subarray(a,c),mapPosition:f?f.subarray(a,c):void 0}))}return d}Object.defineProperty(m,"__esModule",{value:!0});m.createGeometryData=function(b){for(var g={},f={},d=b.attributeData.position,e=b.removeDuplicateStartEnd,a=d.length,l=d[0]===d[a-3]&&d[1]===d[a-2]&&d[2]===d[a-1]&&1===e,e=d.length/3-(l?1:0),a=new Uint32Array(2*(e-1)),d=l?w.slice(d,0,d.length-3):d,h=l=0;h<e-1;h++)a[l++]=h,a[l++]=h+1;f[c.RibbonVertexAttributeConstants.POSITION]=
{size:3,data:d,offsetIdx:0,strideIdx:3};g[c.RibbonVertexAttributeConstants.POSITION]=a;e=new Uint32Array(g[c.RibbonVertexAttributeConstants.POSITION].length);a=b.attributeData.mapPosition;k.isNone(a)||(g.mapPos=g[c.RibbonVertexAttributeConstants.POSITION],f.mapPos={size:3,data:a,offsetIdx:0,strideIdx:3});k.isSome(b.attributeData.colorFeature)||(f[c.RibbonVertexAttributeConstants.COLOR]={size:4,data:k.unwrapOr(b.attributeData.color,x.WHITE_UNIT),offsetIdx:0,strideIdx:4},g[c.RibbonVertexAttributeConstants.COLOR]=
e);k.isSome(b.attributeData.sizeFeature)||(f[c.RibbonVertexAttributeConstants.SIZE]={size:1,data:new Float32Array([k.unwrapOr(b.attributeData.size,1)]),offsetIdx:0,strideIdx:1},g[c.RibbonVertexAttributeConstants.SIZE]=e);a=b.attributeData.colorFeature;k.isNone(a)||(f[c.RibbonVertexAttributeConstants.COLORFEATUREATTRIBUTE]={size:1,data:new Float32Array([a]),offsetIdx:0,strideIdx:1},g[c.RibbonVertexAttributeConstants.COLOR]=e);a=b.attributeData.sizeFeature;k.isNone(a)||(f[c.RibbonVertexAttributeConstants.SIZEFEATUREATTRIBUTE]=
{size:1,data:new Float32Array([a]),offsetIdx:0,strideIdx:1},g[c.RibbonVertexAttributeConstants.SIZEFEATUREATTRIBUTE]=e);a=b.attributeData.opacityFeature;k.isNone(a)||(f[c.RibbonVertexAttributeConstants.OPACITYFEATUREATTRIBUTE]={size:1,data:new Float32Array([a]),offsetIdx:0,strideIdx:1},g[c.RibbonVertexAttributeConstants.OPACITYFEATUREATTRIBUTE]=e);if("round"===b.join){e=f[c.RibbonVertexAttributeConstants.POSITION].data;a=e.length/3;d=new Float32Array(a);l=C;h=D;p.vec3.set(l,0,0,0);b=k.unwrapOr(b.uniformSize,
1);for(var n=-1;n<a;++n){var q=0>n?a+n:n,m=(n+1)%a;p.vec3.set(h,e[3*m+0]-e[3*q+0],e[3*m+1]-e[3*q+1],e[3*m+2]-e[3*q+2]);p.vec3.normalize(h,h);0<=n&&(q=1*(Math.PI-v.acosClamped(p.vec3.dot(l,h)))*E*(1.863798+-2.0062872/Math.pow(1+b/18.2313,.8856294)),d[n]=Math.max(Math.floor(q),0));p.vec3.scale(l,h,-1)}f[c.RibbonVertexAttributeConstants.SUBDIVISIONS]={size:1,data:d,offsetIdx:0,strideIdx:1};g[c.RibbonVertexAttributeConstants.SUBDIVISIONS]=g[c.RibbonVertexAttributeConstants.POSITION]}return new B.GeometryData(f,
g,"line")};m.geometryToRenderInfo=function(b,g,c,d){var e=t.pathsToTriangulationInfo("polygon"===b.type?b.rings:b.paths,b.hasZ,"polygon"===b.type?1:0),a=e.position,e=e.outlines,f=new Float64Array(a.length);b=y.applyPerVertexElevationAlignment(a,b.spatialReference,0,f,0,a,0,a.length/3,g,c,d);g=null!=b;return{lines:g?u(e,a,f):[],projectionSuccess:g,sampledElevation:b}};m.geometryToRenderInfoDraped=function(b,c){var f=t.pathsToTriangulationInfo("polygon"===b.type?b.rings:b.paths,!1,"polygon"===b.type?
1:0),d=f.position,f=f.outlines;b=z.bufferToBuffer(d,b.spatialReference,0,d,c,0,d.length/3);for(c=2;c<d.length;c+=3)d[c]=A.DRAPED_Z;return{lines:b?u(f,d):[],projectionSuccess:b}};var C=r.vec3f64.create(),D=r.vec3f64.create(),E=4/Math.PI});