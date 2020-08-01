// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../lib/GLMaterial ../lib/Material ./internal/DefaultBufferWriter ./internal/MaterialUtil ./internal/MaterialUtil ./renderers/MergedRenderer ../shaders/SlicePlaneMaterialTechnique".split(" "),function(d,r,e,h,k,f,g,l,m,n){d=function(b){function a(c,a){a=b.call(this,a)||this;a.params=g.copyParameters(c,p);return a}e.__extends(a,b);a.prototype.dispose=function(){};a.prototype.setParameterValues=function(c){g.updateParameters(this.params,c)&&this.parametersChanged()};a.prototype.getParameters=
function(){return this.params};a.prototype.intersect=function(c,a,b,d,e,f,g){return l.intersectTriangleGeometry(c,a,d,e,f,void 0,g)};a.prototype.createBufferWriter=function(){return new f.DefaultBufferWriter(f.PositionUVLayout)};a.prototype.createRenderer=function(a,b){return new m(a,b,this)};a.prototype.getGLMaterial=function(a){return 0===a.output?new q(a):void 0};return a}(k.Material);var q=function(b){function a(a){a=b.call(this,a)||this;a.technique=new n.SlicePlaneMaterialTechnique(a.techniqueRep.constructionContext,
null);a.updateParameters();return a}e.__extends(a,b);a.prototype.updateParameters=function(){};a.prototype.beginSlot=function(a){return 8===a};a.prototype.bind=function(a){a.bindProgram(this.technique.program);this.technique.bindPass(a,this.material.getParameters())};return a}(h.GLMaterial),p={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4};return d});