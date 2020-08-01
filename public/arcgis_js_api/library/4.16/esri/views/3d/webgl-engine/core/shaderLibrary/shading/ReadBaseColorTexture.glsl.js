// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../attributes/VertexTextureCoordinates.glsl ../util/TextureAtlasLookup.glsl ../../shaderModules/interfaces".split(" "),function(n,f,b,l,m,c){Object.defineProperty(f,"__esModule",{value:!0});f.ReadBaseColorTexture=function(d,e){var a=d.fragment;e.baseColorTexture?(d.include(l.VertexTextureCoordinates,e),a.uniforms.add("uBaseColorTexture","sampler2D"),a.uniforms.add("uBaseColorTextureSize","vec2"),2===e.attributeTextureCoordinates?(d.include(m.TextureAtlasLookup),a.code.add(c.glsl(g||
(g=b.__makeTemplateObject(["\n        vec4 readBaseColorTexture() {\n          return textureAtlasLookup(\n            uBaseColorTexture,\n            uBaseColorTextureSize,\n            vuv0,\n            vuvRegion\n          );\n        }\n      "],["\n        vec4 readBaseColorTexture() {\n          return textureAtlasLookup(\n            uBaseColorTexture,\n            uBaseColorTextureSize,\n            vuv0,\n            vuvRegion\n          );\n        }\n      "]))))):a.code.add(c.glsl(h||
(h=b.__makeTemplateObject(["\n        vec4 readBaseColorTexture() {\n          return texture2D(uBaseColorTexture, vuv0);\n        }\n      "],["\n        vec4 readBaseColorTexture() {\n          return texture2D(uBaseColorTexture, vuv0);\n        }\n      "]))))):a.code.add(c.glsl(k||(k=b.__makeTemplateObject(["\n      vec4 readBaseColorTexture() { return vec4(1.0); }\n    "],["\n      vec4 readBaseColorTexture() { return vec4(1.0); }\n    "]))))};var g,h,k});