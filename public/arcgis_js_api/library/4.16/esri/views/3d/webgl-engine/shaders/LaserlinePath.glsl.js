// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderLibrary/Laserline.glsl ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder".split(" "),function(k,b,c,g,d,h){Object.defineProperty(b,"__esModule",{value:!0});b.build=function(b){var a=new h.ShaderBuilder;a.include(g.Laserline,b);a.vertex.uniforms.add("uModelViewMatrix","mat4");a.vertex.uniforms.add("uProjectionMatrix","mat4");a.attributes.add("start","vec3");a.attributes.add("end","vec3");a.attributes.add("up","vec3");a.attributes.add("extrude",
"vec2");a.varyings.add("uv","vec2");a.varyings.add("vViewStart","vec3");a.varyings.add("vViewEnd","vec3");a.varyings.add("vViewPlane","vec4");a.vertex.uniforms.add("glowWidth","float");a.vertex.uniforms.add("pixelToNDC","vec2");a.vertex.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n  void main() {\n    vec3 pos \x3d mix(start, end, extrude.x);\n\n    vec4 viewPos \x3d uModelViewMatrix * vec4(pos, 1);\n    vec4 projPos \x3d uProjectionMatrix * viewPos;\n    vec2 ndcPos \x3d projPos.xy / projPos.w;\n\n    vec3 viewUp \x3d (uModelViewMatrix * vec4(extrude.y * up, 0)).xyz;\n    vec4 projPosUp \x3d uProjectionMatrix * vec4(viewPos.xyz + viewUp, 1);\n    vec2 projExtrudeDir \x3d normalize(projPosUp.xy / projPosUp.w - ndcPos);\n\n    vec2 lxy \x3d abs(sign(projExtrudeDir) - ndcPos);\n    ndcPos +\x3d length(lxy) * projExtrudeDir;\n\n    vec3 worldPlaneNormal \x3d normalize(cross(up, normalize(end - start)));\n    vec3 viewPlaneNormal \x3d (uModelViewMatrix * vec4(worldPlaneNormal, 0)).xyz;\n\n    vViewStart \x3d (uModelViewMatrix * vec4(start, 1)).xyz;\n    vViewEnd \x3d (uModelViewMatrix * vec4(end, 1)).xyz;\n    vViewPlane \x3d vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));\n\n    // Add enough padding in the X screen space direction for glow\n    float xPaddingPixels \x3d sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;\n    ndcPos.x +\x3d xPaddingPixels * pixelToNDC.x;\n\n    uv \x3d ndcPos * 0.5 + 0.5;\n    gl_Position \x3d vec4(ndcPos, 0, 1);\n  }\n  "],
["\n  void main() {\n    vec3 pos \x3d mix(start, end, extrude.x);\n\n    vec4 viewPos \x3d uModelViewMatrix * vec4(pos, 1);\n    vec4 projPos \x3d uProjectionMatrix * viewPos;\n    vec2 ndcPos \x3d projPos.xy / projPos.w;\n\n    vec3 viewUp \x3d (uModelViewMatrix * vec4(extrude.y * up, 0)).xyz;\n    vec4 projPosUp \x3d uProjectionMatrix * vec4(viewPos.xyz + viewUp, 1);\n    vec2 projExtrudeDir \x3d normalize(projPosUp.xy / projPosUp.w - ndcPos);\n\n    vec2 lxy \x3d abs(sign(projExtrudeDir) - ndcPos);\n    ndcPos +\x3d length(lxy) * projExtrudeDir;\n\n    vec3 worldPlaneNormal \x3d normalize(cross(up, normalize(end - start)));\n    vec3 viewPlaneNormal \x3d (uModelViewMatrix * vec4(worldPlaneNormal, 0)).xyz;\n\n    vViewStart \x3d (uModelViewMatrix * vec4(start, 1)).xyz;\n    vViewEnd \x3d (uModelViewMatrix * vec4(end, 1)).xyz;\n    vViewPlane \x3d vec4(viewPlaneNormal, -dot(viewPlaneNormal, vViewStart));\n\n    // Add enough padding in the X screen space direction for glow\n    float xPaddingPixels \x3d sign(dot(viewPlaneNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;\n    ndcPos.x +\x3d xPaddingPixels * pixelToNDC.x;\n\n    uv \x3d ndcPos * 0.5 + 0.5;\n    gl_Position \x3d vec4(ndcPos, 0, 1);\n  }\n  "]))));
a.fragment.uniforms.add("globalAlpha","float");a.fragment.uniforms.add("perScreenPixelRatio","float");a.fragment.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n  float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {\n    vec3 origin \x3d mix(start, end, 0.5);\n    vec3 basis \x3d end - origin;\n    vec3 posAtOrigin \x3d pos - origin;\n\n    float x \x3d dot(normalize(basis), posAtOrigin);\n    float y \x3d dot(plane.xyz, posAtOrigin);\n\n    float dx \x3d max(abs(x) - length(basis), 0.0);\n    float dy \x3d y;\n\n    float dist \x3d length(vec2(dx, dy));\n\n    float width \x3d fwidth(y);\n    float maxPixelDistance \x3d length(pos) * perScreenPixelRatio * 2.0;\n    float pixelDist \x3d dist / min(width, maxPixelDistance);\n    return abs(pixelDist);\n  }\n\n  void main() {\n    vec3 pos;\n    vec3 normal;\n    float depthDiscontinuityAlpha;\n\n    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {\n      discard;\n    }\n\n    float distance \x3d planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);\n\n    vec4 color \x3d laserlineProfile(distance);\n    float alpha \x3d 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));\n\n    gl_FragColor \x3d laserlineOutput(color * alpha * depthDiscontinuityAlpha);\n  }\n  "],
["\n  float planeDistancePixels(vec4 plane, vec3 pos, vec3 start, vec3 end) {\n    vec3 origin \x3d mix(start, end, 0.5);\n    vec3 basis \x3d end - origin;\n    vec3 posAtOrigin \x3d pos - origin;\n\n    float x \x3d dot(normalize(basis), posAtOrigin);\n    float y \x3d dot(plane.xyz, posAtOrigin);\n\n    float dx \x3d max(abs(x) - length(basis), 0.0);\n    float dy \x3d y;\n\n    float dist \x3d length(vec2(dx, dy));\n\n    float width \x3d fwidth(y);\n    float maxPixelDistance \x3d length(pos) * perScreenPixelRatio * 2.0;\n    float pixelDist \x3d dist / min(width, maxPixelDistance);\n    return abs(pixelDist);\n  }\n\n  void main() {\n    vec3 pos;\n    vec3 normal;\n    float depthDiscontinuityAlpha;\n\n    if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {\n      discard;\n    }\n\n    float distance \x3d planeDistancePixels(vViewPlane, pos, vViewStart, vViewEnd);\n\n    vec4 color \x3d laserlineProfile(distance);\n    float alpha \x3d 1.0 - smoothstep(0.995, 0.999, abs(dot(normal, vViewPlane.xyz)));\n\n    gl_FragColor \x3d laserlineOutput(color * alpha * depthDiscontinuityAlpha);\n  }\n  "]))));
return a};var e,f});