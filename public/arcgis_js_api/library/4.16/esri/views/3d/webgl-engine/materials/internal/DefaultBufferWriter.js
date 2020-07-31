// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/InterleavedLayout","../../lib/Util","./bufferWriterUtils"],function(d,a,c,b,e){Object.defineProperty(a,"__esModule",{value:!0});a.PositionLayout=c.newLayout().vec3f(b.VertexAttrConstants.POSITION);a.PositionUVLayout=c.newLayout().vec3f(b.VertexAttrConstants.POSITION).vec2f(b.VertexAttrConstants.UV0);a.PositionColorLayout=c.newLayout().vec3f(b.VertexAttrConstants.POSITION).vec4u8(b.VertexAttrConstants.COLOR);d=function(){function a(a){this.vertexBufferLayout=
a}a.prototype.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};a.prototype.elementCount=function(a){return a.indices[b.VertexAttrConstants.POSITION].length};a.prototype.write=function(a,b,c,d){e.writeDefaultAttributes(b,this.vertexBufferLayout,a.transformation,a.invTranspTransformation,c,d)};return a}();a.DefaultBufferWriter=d});