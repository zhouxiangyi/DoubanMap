// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(e,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.Skirts=function(a){a.vertex.code.add(d.glsl(b||(b=c.__makeTemplateObject(['\n    vec3 applySkirts(inout vec2 uv, vec3 vpos, vec3 vnormal, float skirtScale) {\n      float skirtLength \x3d 0.0;\n\n      if (uv.x \x3e\x3d 2.0) {\n        skirtLength \x3d uv.y * skirtScale;\n        // decode original uv-coordinates (see "encodeSkirtPos")\n        vec2 x \x3d vec2(uv.x) - vec2(3.5, 4.5);\n        uv \x3d clamp(vec2(1.5) - abs(x), vec2(0.0), vec2(1.0));\n      }\n\n      return vpos - vnormal * skirtLength;\n    }\n    '],
['\n    vec3 applySkirts(inout vec2 uv, vec3 vpos, vec3 vnormal, float skirtScale) {\n      float skirtLength \x3d 0.0;\n\n      if (uv.x \x3e\x3d 2.0) {\n        skirtLength \x3d uv.y * skirtScale;\n        // decode original uv-coordinates (see "encodeSkirtPos")\n        vec2 x \x3d vec2(uv.x) - vec2(3.5, 4.5);\n        uv \x3d clamp(vec2(1.5) - abs(x), vec2(0.0), vec2(1.0));\n      }\n\n      return vpos - vnormal * skirtLength;\n    }\n    ']))))};var b});