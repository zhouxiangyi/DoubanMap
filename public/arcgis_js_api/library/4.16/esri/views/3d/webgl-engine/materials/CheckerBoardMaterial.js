// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../lib/GLMaterial ../lib/Material ./internal/DefaultBufferWriter ./internal/MaterialUtil ./internal/MaterialUtil ./renderers/MergedRenderer ../shaders/CheckerBoardTechnique".split(" "),function(c,t,d,h,k,e,f,l,m,g){c=function(b){function a(n,a){a=b.call(this,a)||this;a.techniqueConfig=new g.CheckerBoardTechniqueConfiguration;a.params=f.copyParameters(n,q);return a}d.__extends(a,b);a.prototype.dispose=function(){};a.prototype.getPassParameters=function(){return this.params};
a.prototype.getTechniqueConfig=function(){this.techniqueConfig.transparent=this.params.transparent;this.techniqueConfig.writeDepth=this.params.writeDepth;this.techniqueConfig.polygonOffset=this.params.polygonOffset;return this.techniqueConfig};a.prototype.setParameterValues=function(a){f.updateParameters(this.params,a)&&this.parametersChanged()};a.prototype.intersect=function(a,p,b,c,d,e,f){return l.intersectTriangleGeometry(a,p,c,d,e,void 0,f)};a.prototype.getGLMaterial=function(a){return 0===a.output?
new r(a):void 0};a.prototype.createBufferWriter=function(){return new e.DefaultBufferWriter(e.PositionUVLayout)};a.prototype.createRenderer=function(a,b){return new m(a,b,this)};return a}(k.Material);var r=function(b){function a(a){a=b.call(this,a)||this;a.updateParameters();return a}d.__extends(a,b);a.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(g.CheckerBoardTechnique,this.material.getTechniqueConfig(),this.technique)};a.prototype.beginSlot=function(a){var b=
3;this.technique.configuration.transparent&&(b=this.technique.configuration.writeDepth?5:8);return a===b};a.prototype.bind=function(a){a.bindProgram(this.technique.program);this.technique.bindPass(a,this.material.getPassParameters())};return a}(h.GLMaterial),q={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,writeDepth:!0,polygonOffset:!1};return c});