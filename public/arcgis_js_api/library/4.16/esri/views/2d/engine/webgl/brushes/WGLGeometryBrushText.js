// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../enums ../Utils ./WGLGeometryBrush ../materialKey/MaterialKey".split(" "),function(h,k,m,q,r,t,u){Object.defineProperty(k,"__esModule",{value:!0});h=function(f){function e(){return null!==f&&f.apply(this,arguments)||this}m.__extends(e,f);e.prototype.dispose=function(){};e.prototype.getGeometryType=function(){return q.WGLGeometryType.TEXT};e.prototype.drawGeometry=function(c,e,b,f,a){var g=c.context,h=c.painter,d=c.rendererInfo,k=c.state,n=b.indexCount,p=b.indexFrom;
b=u.TextMaterialKey.load(b.materialKey);var l=r.createProgramDescriptor(b.data,{geometry:[{location:0,name:"a_pos",count:2,type:5122},{location:1,name:"a_id",count:4,type:5121},{location:2,name:"a_color",count:4,type:5121,normalized:!0},{location:3,name:"a_haloColor",count:4,type:5121,normalized:!0},{location:4,name:"a_texFontSize",count:4,type:5121},{location:5,name:"a_aux",count:4,type:5120},{location:6,name:"a_vertexOffset",count:2,type:5122},{location:7,name:"a_texCoords",count:2,type:5123}]}),
m=l.bufferLayouts,l=l.attributes;a=h.materialManager.getMaterialProgram(c,b,"materials/text",l,a);f=this._getVAO(g,m,l,f);g.bindProgram(a);g.bindVAO(f);this._setSharedUniforms(a,c,e);h.textureManager.bindTextures(g,a,b);a.setUniformMatrix3fv("u_displayMat3",k.displayMat3);a.setUniformMatrix3fv("u_displayViewMat3",k.displayViewMat3);b.vvSizeMinMaxValue&&a.setUniform4fv("u_vvSizeMinMaxValue",d.vvSizeMinMaxValue);b.vvSizeScaleStops&&a.setUniform1f("u_vvSizeScaleStopsValue",d.vvSizeScaleStopsValue);b.vvSizeFieldStops&&
(c=d.getSizeVVFieldStops(e.key.level),a.setUniform1fv("u_vvSizeFieldStopsValues",c.values),a.setUniform1fv("u_vvSizeFieldStopsSizes",c.sizes));b.vvSizeUnitValue&&a.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio",d.vvSizeUnitValueToPixelsRatio);b.vvColor&&(a.setUniform1fv("u_vvColorValues",d.vvColorValues),a.setUniform4fv("u_vvColors",d.vvColors));b.vvOpacity&&(a.setUniform1fv("u_vvOpacityValues",d.vvOpacityValues),a.setUniform1fv("u_vvOpacities",d.vvOpacities));b.vvRotation&&a.setUniform1f("u_vvRotationType",
"geographic"===d.vvMaterialParameters.vvRotationType?0:1);a.setUniform1f("u_isHalo",1);g.drawElements(4,n,5125,4*p);a.setUniform1f("u_isHalo",0);g.drawElements(4,n,5125,4*p);g.bindVAO(null)};return e}(t.default);k.default=h});