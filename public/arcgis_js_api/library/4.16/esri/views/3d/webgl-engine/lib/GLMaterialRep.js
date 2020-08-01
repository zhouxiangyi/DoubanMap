// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Logger ../../../../core/maybe ../core/shaderLibrary/ShaderOutputOptions ./Util".split(" "),function(n,p,g,h,d,k){var l=g.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRep"),m=function(){function a(b){this.refCnt=0;this.glMaterial=b}a.prototype.incRefCnt=function(){++this.refCnt};a.prototype.decRefCnt=function(){--this.refCnt;k.assert(0<=this.refCnt)};a.prototype.getRefCnt=function(){return this.refCnt};a.prototype.getGLMaterial=function(){return this.glMaterial};
return a}();return function(){function a(b,e,a){this._textureRep=b;this._techniqueRep=e;this.onMaterialChanged=a;this._id2glMaterialRef=new Map}a.prototype.acquire=function(b,e){this.ownMaterial(b);var a=d.getShaderOutputID(b.id,e),c=this._id2glMaterialRef.get(a);null==c?(b=b.getGLMaterial({material:b,techniqueRep:this._techniqueRep,textureRep:this._textureRep,output:e}),c=new m(b),this._id2glMaterialRef.set(a,c)):b=c.getGLMaterial();c.incRefCnt();return b};a.prototype.release=function(b,a){b=d.getShaderOutputID(b.id,
a);a=this._id2glMaterialRef.get(b);a.decRefCnt();0===a.getRefCnt()&&((a=a.getGLMaterial())&&a.dispose(),this._id2glMaterialRef.delete(b))};a.prototype.materialChanged=function(a){for(var b=0,f=d.ShaderOutputTypes;b<f.length;b++){var c=f[b];5!==c.output&&6!==c.output&&(c=this._id2glMaterialRef.get(d.getShaderOutputID(a.id,c.output)))&&c.getGLMaterial()&&(c=c.getGLMaterial(),c.updateParameters&&c.updateParameters())}if(this.onMaterialChanged)this.onMaterialChanged(a)};a.prototype.ownMaterial=function(a){h.isSome(a.materialRepository)&&
a.materialRepository!==this&&l.error("Material is already owned by a different material repository");a.materialRepository=this};return a}()});