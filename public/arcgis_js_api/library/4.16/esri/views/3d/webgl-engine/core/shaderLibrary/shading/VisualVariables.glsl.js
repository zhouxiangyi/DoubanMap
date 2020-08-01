// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(r,f,d,e){function g(a,c){c.vvInstancingEnabled&&(c.vvSize||c.vvColor)&&a.attributes.add("instanceFeatureAttribute","vec4");c.vvSize?(a.vertex.uniforms.add("vvSizeMinSize","vec3"),a.vertex.uniforms.add("vvSizeMaxSize","vec3"),a.vertex.uniforms.add("vvSizeOffset","vec3"),a.vertex.uniforms.add("vvSizeFactor","vec3"),a.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),a.vertex.uniforms.add("vvSymbolAnchor","vec3"),a.vertex.code.add(e.glsl(h||
(h=d.__makeTemplateObject(["\n      vec3 vvScale(vec4 _featureAttribute) {\n        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);\n      }\n\n      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {\n        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);\n      }\n    "],["\n      vec3 vvScale(vec4 _featureAttribute) {\n        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);\n      }\n\n      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {\n        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);\n      }\n    "])))),
a.vertex.code.add(e.glsl(k||(k=d.__makeTemplateObject(["\n      const float eps \x3d 1.192092896e-07;\n      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {\n        vec3 vvScale \x3d clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);\n        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);\n      }\n\n      ","\n    "],["\n      const float eps \x3d 1.192092896e-07;\n      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {\n        vec3 vvScale \x3d clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);\n        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);\n      }\n\n      ",
"\n    "])),c.vvInstancingEnabled?e.glsl(l||(l=d.__makeTemplateObject(["\n      vec4 vvLocalNormal(vec3 _normal) {\n        return vvTransformNormal(_normal, instanceFeatureAttribute);\n      }\n\n      vec4 localPosition() {\n        return vvTransformPosition(position, instanceFeatureAttribute);\n      }"],["\n      vec4 vvLocalNormal(vec3 _normal) {\n        return vvTransformNormal(_normal, instanceFeatureAttribute);\n      }\n\n      vec4 localPosition() {\n        return vvTransformPosition(position, instanceFeatureAttribute);\n      }"]))):
""))):a.vertex.code.add(e.glsl(m||(m=d.__makeTemplateObject(["\n      vec4 localPosition() { return vec4(position, 1.0); }\n\n      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }\n    "],["\n      vec4 localPosition() { return vec4(position, 1.0); }\n\n      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }\n    "]))));c.vvColor?(a.vertex.defines.addInt("VV_COLOR_N",8),a.vertex.code.add(e.glsl(n||(n=d.__makeTemplateObject(["\n      uniform float vvColorValues[VV_COLOR_N];\n      uniform vec4 vvColorColors[VV_COLOR_N];\n\n      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {\n        float value \x3d featureAttribute.y;\n        if (value \x3c\x3d values[0]) {\n          return colors[0];\n        }\n\n        for (int i \x3d 1; i \x3c VV_COLOR_N; ++i) {\n          if (values[i] \x3e\x3d value) {\n            float f \x3d (value - values[i-1]) / (values[i] - values[i-1]);\n            return mix(colors[i-1], colors[i], f);\n          }\n        }\n        return colors[VV_COLOR_N - 1];\n      }\n\n      ",
"\n    "],["\n      uniform float vvColorValues[VV_COLOR_N];\n      uniform vec4 vvColorColors[VV_COLOR_N];\n\n      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {\n        float value \x3d featureAttribute.y;\n        if (value \x3c\x3d values[0]) {\n          return colors[0];\n        }\n\n        for (int i \x3d 1; i \x3c VV_COLOR_N; ++i) {\n          if (values[i] \x3e\x3d value) {\n            float f \x3d (value - values[i-1]) / (values[i] - values[i-1]);\n            return mix(colors[i-1], colors[i], f);\n          }\n        }\n        return colors[VV_COLOR_N - 1];\n      }\n\n      ",
"\n    "])),c.vvInstancingEnabled?e.glsl(p||(p=d.__makeTemplateObject(["\n      vec4 vvColor() {\n        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);\n      }"],["\n      vec4 vvColor() {\n        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);\n      }"]))):""))):a.vertex.code.add(e.glsl(q||(q=d.__makeTemplateObject(["\n      vec4 vvColor() { return vec4(1.0); }\n    "],["\n      vec4 vvColor() { return vec4(1.0); }\n    "]))))}Object.defineProperty(f,
"__esModule",{value:!0});f.VisualVariables=g;(function(a){function c(a,b){b.vvSizeEnabled&&(a.setUniform3fv("vvSizeMinSize",b.vvSizeMinSize),a.setUniform3fv("vvSizeMaxSize",b.vvSizeMaxSize),a.setUniform3fv("vvSizeOffset",b.vvSizeOffset),a.setUniform3fv("vvSizeFactor",b.vvSizeFactor));b.vvColorEnabled&&(a.setUniform1fv("vvColorValues",b.vvColorValues),a.setUniform4fv("vvColorColors",b.vvColorColors))}a.bindUniforms=c;a.bindUniformsWithOpacity=function(a,b){c(a,b);b.vvOpacityEnabled&&(a.setUniform1fv("vvOpacityValues",
b.vvOpacityValues),a.setUniform1fv("vvOpacityOpacities",b.vvOpacityOpacities))};a.bindUniformsForSymbols=function(a,b){c(a,b);b.vvSizeEnabled&&(a.setUniform3fv("vvSymbolAnchor",b.vvSymbolAnchor),a.setUniformMatrix3fv("vvSymbolRotationMatrix",b.vvSymbolRotationMatrix))}})(g=f.VisualVariables||(f.VisualVariables={}));var h,l,k,m,p,n,q});