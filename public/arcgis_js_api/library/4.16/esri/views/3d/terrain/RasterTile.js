// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/maybe","../../webgl/rasterUtils"],function(g,h,f,e){Object.defineProperty(h,"__esModule",{value:!0});var k={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};g=function(){function b(a,c,d,b){void 0===d&&(d=null);void 0===b&&(b=null);this._interpolation=this._bandIds=this._symbolizerParameters=this._source=this._memoryUsed=
null;this._dirty=!1;this.lij=this.rawPixelData=this.symbolizerRenderer=this._transformGrid=null;this.scale=1;this.offset=[0,0];this.opacity=1;this.lij=a;this.source=c;this.width=d||c.width;this.height=b||c.height}Object.defineProperty(b.prototype,"source",{get:function(){return this._source},set:function(a){this._source=a;this._rasterTexture&&(this._rasterTexture.dispose(),this._memoryUsed=this._rasterTexture=null)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"symbolizerParameters",
{get:function(){return this._symbolizerParameters||k},set:function(a){this._symbolizerParameters=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"bandIds",{get:function(){return this._bandIds},set:function(a){var c=this;f.isSome(a)&&0<a.length?this._bandIds&&a.every(function(a,b){return c._bandIds[b]?a===c._bandIds[b]:!1})||(this._bandIds=a,this._dirty=!0):this._bandIds=null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"interpolation",{get:function(){return this._interpolation},
set:function(a){this._interpolation=a;this._rasterTexture&&this._rasterTexture.setSamplingMode("bilinear"===a?9729:9728)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"transformGrid",{get:function(){return this._transformGrid},set:function(a){this._transformGrid=a;this._transformGridTexture&&(this._transformGridTexture.dispose(),this._memoryUsed=this._transformGridTexture=null)},enumerable:!0,configurable:!0});b.prototype.bind=function(a){if(!(this.source&&this.source.pixels&&
0<this.source.pixels.length))return!1;this._rasterTexture&&!this._dirty||this._updateRasterTexture(a,this.bandIds);this._rasterTexture&&(this._updateColormapTexture(a),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=e.createTransformTexture(a,this.transformGrid)));return!0};b.prototype.getUniforms=function(){var a=e.getBasicGridUniforms(this.scale,this.offset),c=this.symbolizerParameters,b=e.getCommonUniforms(this.transformGrid,[this.width,this.height],[this.source.width,
this.source.height],this.opacity),c=c.colormap?e.getColormapUniforms(c.colormap,c.colormapOffset):null,f="stretch"===this.symbolizerParameters.type?e.getStretchUniforms(this.symbolizerParameters):null,l="hillshade"===this.symbolizerParameters.type?e.getShadedReliefUniforms(this.symbolizerParameters):null;return{basic:a,common:b,colormap:c,stretch:f,hillshade:l}};b.prototype.getTextures=function(){if(!this._rasterTexture)return null;var a=[],c=[];this._transformGridTexture&&(c.push(this._transformGridTexture),
a.push("u_transformGrid"));this._rasterTexture&&(c.push(this._rasterTexture),a.push("u_image"));this._colormapTexture&&(c.push(this._colormapTexture),a.push("u_colormap"));return{names:a,textures:c}};b.prototype.getMemoryUsage=function(){if(f.isNone(this._memoryUsed)){var a=this.getTextures();if(null==a)return 0;this._memoryUsed=a.textures.map(function(a){return a.descriptor.width*a.descriptor.height*4}).reduce(function(a,b){return a+b})}return this._memoryUsed};b.prototype.release=function(){this._rasterTexture&&
(this._rasterTexture.dispose(),this._rasterTexture=null);this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null);this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null);this.rawPixelData=this.transformGrid=this.source=null;return!0};b.prototype._updateRasterTexture=function(a,c){var b=this.source?this.source.extractBands(c):null;if(b&&b.pixels&&0<b.pixels.length){c=f.isNone(c)&&f.isNone(this.bandIds)||f.isSome(c)&&f.isSome(this.bandIds)&&
c.join("")===this.bandIds.join("");if(this._rasterTexture){if(c)return;this._rasterTexture.dispose();this._rasterTexture=null}this._rasterTexture=e.createRasterTexture(a,b,this.interpolation||"nearest")}else this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null)};b.prototype._updateColormapTexture=function(a){var b=this._colormap,d=this.symbolizerParameters.colormap;if(!d)this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormap=null;
else if(!b)this._colormapTexture=e.createColormapTexture(a,d),this._colormap=d;else if(d.length!==b.length||d.some(function(a,c){return a!==b[c]}))this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=e.createColormapTexture(a,d),this._colormap=d};return b}();h.default=g});