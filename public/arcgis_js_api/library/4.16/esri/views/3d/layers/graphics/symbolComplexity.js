// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/compilerUtils ../../../../core/maybe ../../../../symbols/support/ObjectSymbol3DLayerResource ./primitiveObjectSymbolUtils ../../webgl-engine/lib/Util ../../webgl-engine/lib/lodRendering/LodResources".split(" "),function(x,a,k,e,l,r,t,u,v){function m(c){for(var b=0,a=0,f=!1,d={bytesPerFeature:0,bytesPerFeatureLabel:0,bytesPerCoordinate:0,draped:{bytesPerFeature:0,bytesPerFeatureLabel:0,bytesPerCoordinate:0}},e=0;e<c.length;e++){var g=c[e];g&&(b+=g.primitivesPerFeature,
a+=g.primitivesPerCoordinate,d.bytesPerFeature+=g.memory.bytesPerFeature,d.bytesPerFeatureLabel+=g.memory.bytesPerFeatureLabel,d.bytesPerCoordinate+=g.memory.bytesPerCoordinate,d.draped.bytesPerFeature+=g.memory.bytesPerFeature,d.draped.bytesPerFeatureLabel+=g.memory.bytesPerFeatureLabel,d.draped.bytesPerCoordinate+=g.memory.bytesPerCoordinate,f=f||g.estimated)}return{primitivesPerFeature:b,primitivesPerCoordinate:a,estimated:f,memory:d}}function n(a,b){var c=p(a,b);switch(b.type){case "extrude":return{primitivesPerFeature:-4,
primitivesPerCoordinate:4,estimated:!1,memory:c};case "fill":return"mesh-3d"===a.type?{primitivesPerFeature:0,primitivesPerCoordinate:0,estimated:!1,memory:c}:l.isSome(b.outline)&&0<b.outline.size?{primitivesPerFeature:-4,primitivesPerCoordinate:3,estimated:!1,memory:c}:{primitivesPerFeature:-2,primitivesPerCoordinate:1,estimated:!1,memory:c};case "water":return{primitivesPerFeature:-2,primitivesPerCoordinate:1,estimated:!1,memory:c};case "line":return{primitivesPerFeature:-2,primitivesPerCoordinate:2,
estimated:!1,memory:c};case "object":return b.resource&&b.resource.href?{primitivesPerFeature:16,primitivesPerCoordinate:0,estimated:!0,memory:c}:k.__assign(k.__assign({},w(b.resource&&b.resource.primitive||r.defaultPrimitive)),{memory:c});case "path":var f=a=0;switch(b.profile){case "circle":a=10;break;case "quad":a=4;break;default:e.neverReached(b.profile);return}switch(b.join){case "round":f=3;break;case "miter":case "bevel":f=1;break;default:e.neverReached(b.join);return}var d=2*a,f=a*f*2,h=-2*
f-d;switch(b.cap){case "none":break;case "butt":case "square":h+=2*(a-1);break;case "round":h+=2*(4*a+a);break;default:e.neverReached(b.cap);return}return{primitivesPerFeature:h,primitivesPerCoordinate:f+d,estimated:!1,memory:c};case "text":case "icon":return{primitivesPerFeature:2,primitivesPerCoordinate:0,estimated:!1,memory:c};default:e.neverReached(b)}}function p(c,b){c="point-3d"===c.type;switch(b.type){case "extrude":return b.edges&&0<b.edges.size?a.memoryEstimators.EXTRUDE_EDGES:a.memoryEstimators.EXTRUDE;
case "fill":return l.isSome(b.outline)&&0<b.outline.size?a.memoryEstimators.FILL_OUTLINE:a.memoryEstimators.FILL;case "water":return a.memoryEstimators.FILL;case "line":return"round"===b.join?a.memoryEstimators.LINE_ROUND:a.memoryEstimators.LINE_MITER;case "path":switch(b.join){case "round":switch(b.profile){case "circle":return a.memoryEstimators.PATH_ROUND_CIRCLE;case "quad":return a.memoryEstimators.PATH_ROUND_QUAD;default:e.neverReached(b.profile);return}case "miter":case "bevel":switch(b.profile){case "circle":return a.memoryEstimators.PATH_MITER_CIRCLE;
case "quad":return a.memoryEstimators.PATH_MITER_QUAD;default:e.neverReached(b.profile);return}default:e.neverReached(b.join);return}case "object":return c?a.memoryEstimators.OBJECT_POINT:a.memoryEstimators.OBJECT_POLYGON;case "icon":case "text":return c?a.memoryEstimators.ICON_POINT:a.memoryEstimators.ICON_POLYGON;default:e.neverReached(b)}}function w(a){var b=q[a];if(b)return b;b=t.primitiveLodResources(a,null,null);b={primitivesPerFeature:v.geometriesFromLodLevelResources(b.levels[0]).reduce(function(a,
b){return a+b.data.getIndices(u.VertexAttrConstants.POSITION).length/3},0),primitivesPerCoordinate:0,estimated:!1};return q[a]=b}Object.defineProperty(a,"__esModule",{value:!0});a.emptySymbolComplexity={primitivesPerFeature:0,primitivesPerCoordinate:0,estimated:!0,memory:{bytesPerFeature:0,bytesPerCoordinate:0,bytesPerFeatureLabel:0,draped:{bytesPerFeature:0,bytesPerFeatureLabel:0,bytesPerCoordinate:0}}};a.defaultSymbolComplexity=function(c){if("web-style"===c.type)return a.emptySymbolComplexity;
var b=c.symbolLayers.toArray().map(function(a){return n(c,a)});return m(b)};a.totalSymbolComplexities=m;var q={};a.defaultSymbolLayerComplexity=n;a.defaultSymbolLayerMemoryComplexity=p;a.memoryEstimators={ICON_POINT:{bytesPerFeature:7127.413186968842,bytesPerFeatureLabel:4826.302896296296,bytesPerCoordinate:0,draped:{bytesPerFeature:3929.4396628895197,bytesPerFeatureLabel:3550.1332222222227,bytesPerCoordinate:0}},ICON_POLYGON:{bytesPerFeature:9329.452613976147,bytesPerFeatureLabel:3675.3372604938268,
bytesPerCoordinate:60.177252982212096,draped:{bytesPerFeature:6190.247450139383,bytesPerFeatureLabel:3744.074358024691,bytesPerCoordinate:59.488211068026104}},OBJECT_POINT:{bytesPerFeature:2350.5884192634558,bytesPerFeatureLabel:4446.651003703703,bytesPerCoordinate:0,draped:{bytesPerFeature:2350.5884192634558,bytesPerFeatureLabel:4446.651003703703,bytesPerCoordinate:0}},OBJECT_POLYGON:{bytesPerFeature:4583.807620302299,bytesPerFeatureLabel:3665.342685185186,bytesPerCoordinate:60.11621818101506,draped:{bytesPerFeature:4583.807620302299,
bytesPerFeatureLabel:3665.342685185186,bytesPerCoordinate:60.11621818101506}},LINE_MITER:{bytesPerFeature:7321.028181375921,bytesPerFeatureLabel:4048.0226716049388,bytesPerCoordinate:186.55621386363578,draped:{bytesPerFeature:4246.856619435009,bytesPerFeatureLabel:3852.3737679012347,bytesPerCoordinate:163.47884002621583}},LINE_ROUND:{bytesPerFeature:7482.205842738954,bytesPerFeatureLabel:4045.886987654321,bytesPerCoordinate:191.5452524171851,draped:{bytesPerFeature:4473.481387957992,bytesPerFeatureLabel:3842.1112395061728,
bytesPerCoordinate:167.27703460226945}},PATH_MITER_CIRCLE:{bytesPerFeature:9010.489006415351,bytesPerFeatureLabel:4230.9109,bytesPerCoordinate:4618.2594178027275,draped:{bytesPerFeature:9010.489006415351,bytesPerFeatureLabel:4230.9109,bytesPerCoordinate:4618.2594178027275}},PATH_ROUND_CIRCLE:{bytesPerFeature:4104.727250200398,bytesPerFeatureLabel:4251.8525,bytesPerCoordinate:8019.043777064957,draped:{bytesPerFeature:4104.727250200398,bytesPerFeatureLabel:4251.8525,bytesPerCoordinate:8019.043777064957}},
PATH_MITER_QUAD:{bytesPerFeature:9416.372942261387,bytesPerFeatureLabel:4241.2757,bytesPerCoordinate:3176.7222742582203,draped:{bytesPerFeature:9416.372942261387,bytesPerFeatureLabel:4241.2757,bytesPerCoordinate:3176.7222742582203}},PATH_ROUND_QUAD:{bytesPerFeature:6614.431545308682,bytesPerFeatureLabel:4206.7461,bytesPerCoordinate:5141.817789093826,draped:{bytesPerFeature:6614.431545308682,bytesPerFeatureLabel:4206.7461,bytesPerCoordinate:5141.817789093826}},FILL:{bytesPerFeature:9478.244183633637,
bytesPerFeatureLabel:3713.816824691358,bytesPerCoordinate:95.9343604185578,draped:{bytesPerFeature:6287.911108168086,bytesPerFeatureLabel:3790.785032098766,bytesPerCoordinate:83.08783220478168}},FILL_OUTLINE:{bytesPerFeature:13085.871870349445,bytesPerFeatureLabel:3392.613241975309,bytesPerCoordinate:118.63968023169875,draped:{bytesPerFeature:8437.199992480122,bytesPerFeatureLabel:3973.5431172839503,bytesPerCoordinate:106.33556817014312}},EXTRUDE:{bytesPerFeature:19459.53727140414,bytesPerFeatureLabel:3743.7045209876546,
bytesPerCoordinate:372.6819978900477,draped:{bytesPerFeature:19459.53727140414,bytesPerFeatureLabel:3743.7045209876546,bytesPerCoordinate:372.6819978900477}},EXTRUDE_EDGES:{bytesPerFeature:22266.888534913724,bytesPerFeatureLabel:3064.3193358024696,bytesPerCoordinate:374.3725221561312,draped:{bytesPerFeature:22266.888534913724,bytesPerFeatureLabel:3064.3193358024696,bytesPerCoordinate:374.3725221561312}}}});