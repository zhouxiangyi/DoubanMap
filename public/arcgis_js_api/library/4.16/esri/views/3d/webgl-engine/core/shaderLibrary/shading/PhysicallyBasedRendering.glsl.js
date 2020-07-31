// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./AnalyticalSkyModel.glsl ./PiUtils.glsl ../../shaderModules/interfaces".split(" "),function(x,f,a,v,w,b){Object.defineProperty(f,"__esModule",{value:!0});f.PhysicallyBasedRendering=function(e,d){var c=e.fragment.code;e.include(w.PiUtils);if(3===d.pbrMode||4===d.pbrMode)c.add(b.glsl(g||(g=a.__makeTemplateObject(["\n    struct PBRShadingWater\n    {\n        float NdotL;   // cos angle between normal and light direction\n        float NdotV;   // cos angle between normal and view direction\n        float NdotH;   // cos angle between normal and half vector\n        float VdotH;   // cos angle between view direction and half vector\n        float LdotH;   // cos angle between light direction and half vector\n        float VdotN;   // cos angle between view direction and normal vector\n    };\n\n    float dtrExponent \x3d ",
";\n    "],["\n    struct PBRShadingWater\n    {\n        float NdotL;   // cos angle between normal and light direction\n        float NdotV;   // cos angle between normal and view direction\n        float NdotH;   // cos angle between normal and half vector\n        float VdotH;   // cos angle between view direction and half vector\n        float LdotH;   // cos angle between light direction and half vector\n        float VdotN;   // cos angle between view direction and normal vector\n    };\n\n    float dtrExponent \x3d ",
";\n    "])),d.useCustomDTRExponentForWater?"2.2":"2.0")),c.add(b.glsl(h||(h=a.__makeTemplateObject(["\n    vec3 fresnelReflection(float angle, vec3 f0, float f90) {\n      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);\n    }\n    "],["\n    vec3 fresnelReflection(float angle, vec3 f0, float f90) {\n      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);\n    }\n    "])))),c.add(b.glsl(k||(k=a.__makeTemplateObject(["\n    float normalDistributionWater(float NdotH, float roughness)\n    {\n      float r2 \x3d roughness * roughness;\n      float NdotH2 \x3d NdotH * NdotH;\n      float denom \x3d pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;\n      return r2 / denom;\n    }\n    "],
["\n    float normalDistributionWater(float NdotH, float roughness)\n    {\n      float r2 \x3d roughness * roughness;\n      float NdotH2 \x3d NdotH * NdotH;\n      float denom \x3d pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;\n      return r2 / denom;\n    }\n    "])))),c.add(b.glsl(l||(l=a.__makeTemplateObject(["\n    float geometricOcclusionKelemen(float LoH)\n    {\n        return 0.25 / (LoH * LoH);\n    }\n    "],["\n    float geometricOcclusionKelemen(float LoH)\n    {\n        return 0.25 / (LoH * LoH);\n    }\n    "])))),
c.add(b.glsl(m||(m=a.__makeTemplateObject(["\n    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)\n    {\n      vec3  F \x3d fresnelReflection(props.VdotH, F0, F0Max);\n      float dSun \x3d normalDistributionWater(props.NdotH, roughness);\n      float V \x3d geometricOcclusionKelemen(props.LdotH);\n\n      float diffusionSunHaze \x3d mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);\n      float strengthSunHaze  \x3d 1.2;\n      float dSunHaze \x3d normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;\n\n      return ((dSun + dSunHaze) * V) * F;\n    }\n\n    vec3 tonemapACES(const vec3 x) {\n      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);\n    }\n    "],
["\n    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)\n    {\n      vec3  F \x3d fresnelReflection(props.VdotH, F0, F0Max);\n      float dSun \x3d normalDistributionWater(props.NdotH, roughness);\n      float V \x3d geometricOcclusionKelemen(props.LdotH);\n\n      float diffusionSunHaze \x3d mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);\n      float strengthSunHaze  \x3d 1.2;\n      float dSunHaze \x3d normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;\n\n      return ((dSun + dSunHaze) * V) * F;\n    }\n\n    vec3 tonemapACES(const vec3 x) {\n      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);\n    }\n    "]))));
else if(1===d.pbrMode||2===d.pbrMode)e.include(v.AnalyticalSkyModel),c.add(b.glsl(n||(n=a.__makeTemplateObject(["\n    struct PBRShadingInfo\n    {\n        float NdotL;                  // cos angle between normal and light direction\n        float NdotV;                  // cos angle between normal and view direction\n        float NdotH;                  // cos angle between normal and half vector\n        float VdotH;                  // cos angle between view direction and half vector\n        float LdotH;                  // cos angle between view light direction and half vector\n        float NdotNG;                 // cos angle between normal and normal of the ground\n        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground\n        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination\n        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination\n        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)\n        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)\n        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)\n        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)\n\n        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping\n        float ssao;                   // ssao coefficient\n        vec3 albedoLinear;            // linear color of the albedo\n        vec3 f0;                      // fresnel value at normal incident light\n        vec3 f90;                     // fresnel value at 90o of incident light\n\n        vec3 diffuseColor;            // diffuse color of the material used in environment illumination\n        float metalness;              // metalness of the material\n        float roughness;              // roughness of the material\n    };\n    "],
["\n    struct PBRShadingInfo\n    {\n        float NdotL;                  // cos angle between normal and light direction\n        float NdotV;                  // cos angle between normal and view direction\n        float NdotH;                  // cos angle between normal and half vector\n        float VdotH;                  // cos angle between view direction and half vector\n        float LdotH;                  // cos angle between view light direction and half vector\n        float NdotNG;                 // cos angle between normal and normal of the ground\n        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground\n        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination\n        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination\n        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)\n        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)\n        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)\n        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)\n\n        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping\n        float ssao;                   // ssao coefficient\n        vec3 albedoLinear;            // linear color of the albedo\n        vec3 f0;                      // fresnel value at normal incident light\n        vec3 f90;                     // fresnel value at 90o of incident light\n\n        vec3 diffuseColor;            // diffuse color of the material used in environment illumination\n        float metalness;              // metalness of the material\n        float roughness;              // roughness of the material\n    };\n    "])))),
c.add(b.glsl(p||(p=a.__makeTemplateObject(["\n    float normalDistribution(float NdotH, float roughness)\n    {\n        float a \x3d NdotH * roughness;\n        float b \x3d roughness / (1.0 - NdotH * NdotH + a * a);\n        return b * b * INV_PI;\n    }\n    "],["\n    float normalDistribution(float NdotH, float roughness)\n    {\n        float a \x3d NdotH * roughness;\n        float b \x3d roughness / (1.0 - NdotH * NdotH + a * a);\n        return b * b * INV_PI;\n    }\n    "])))),c.add(b.glsl(q||
(q=a.__makeTemplateObject(["\n    const vec4 c0 \x3d vec4(-1.0, -0.0275, -0.572,  0.022);\n    const vec4 c1 \x3d vec4( 1.0,  0.0425,  1.040, -0.040);\n    const vec2 c2 \x3d vec2(-1.04, 1.04);\n\n    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {\n        vec4 r \x3d roughness * c0 + c1;\n        float a004 \x3d min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;\n        return c2 * a004 + r.zw;\n    }\n    "],["\n    const vec4 c0 \x3d vec4(-1.0, -0.0275, -0.572,  0.022);\n    const vec4 c1 \x3d vec4( 1.0,  0.0425,  1.040, -0.040);\n    const vec2 c2 \x3d vec2(-1.04, 1.04);\n\n    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {\n        vec4 r \x3d roughness * c0 + c1;\n        float a004 \x3d min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;\n        return c2 * a004 + r.zw;\n    }\n    "])))),
c.add(b.glsl(r||(r=a.__makeTemplateObject(["\n    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {\n      vec3 indirectDiffuse \x3d evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);\n      vec3 indirectSpecular \x3d evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);\n\n      // From diffuse illumination calculate reflected color\n      vec3 diffuseComponent \x3d inputs.diffuseColor * indirectDiffuse * INV_PI;\n\n      // From specular illumination calculate reflected color\n      vec2 dfg \x3d prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);\n      vec3 specularColor \x3d inputs.f0 * dfg.x + inputs.f90 * dfg.y;\n      vec3 specularComponent \x3d specularColor * indirectSpecular;\n\n      return (diffuseComponent + specularComponent);\n    }\n    "],
["\n    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {\n      vec3 indirectDiffuse \x3d evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);\n      vec3 indirectSpecular \x3d evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);\n\n      // From diffuse illumination calculate reflected color\n      vec3 diffuseComponent \x3d inputs.diffuseColor * indirectDiffuse * INV_PI;\n\n      // From specular illumination calculate reflected color\n      vec2 dfg \x3d prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);\n      vec3 specularColor \x3d inputs.f0 * dfg.x + inputs.f90 * dfg.y;\n      vec3 specularComponent \x3d specularColor * indirectSpecular;\n\n      return (diffuseComponent + specularComponent);\n    }\n    "])))),
c.add(b.glsl(t||(t=a.__makeTemplateObject(["\n    float gamutMapChanel(float x, vec2 p){\n      return (x \x3c p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );\n    }"],["\n    float gamutMapChanel(float x, vec2 p){\n      return (x \x3c p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );\n    }"])))),c.add(b.glsl(u||(u=a.__makeTemplateObject(["\n    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){\n      vec3 outColor;\n      vec2 p \x3d vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));\n      outColor.x \x3d gamutMapChanel(inColor.x, p) ;\n      outColor.y \x3d gamutMapChanel(inColor.y, p) ;\n      outColor.z \x3d gamutMapChanel(inColor.z, p) ;\n      return outColor;\n    }\n    "],
["\n    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){\n      vec3 outColor;\n      vec2 p \x3d vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));\n      outColor.x \x3d gamutMapChanel(inColor.x, p) ;\n      outColor.y \x3d gamutMapChanel(inColor.y, p) ;\n      outColor.z \x3d gamutMapChanel(inColor.z, p) ;\n      return outColor;\n    }\n    "]))))};var g,h,k,l,m,n,p,q,r,t,u});