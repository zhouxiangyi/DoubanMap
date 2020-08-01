// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/screenUtils ../../color ../../number ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(g,h,p,k,l,m,n,e,q,r,t){Object.defineProperty(h,"__esModule",{value:!0});g=function(g){function f(u,a){var b=g.call(this,a)||this;b._cimLineLayer=a;var f=0;e.isFunction(a.width)||(f=.5*k.pt2px(a.width));b._dynamicPropertyMap.set("_halfWidth",function(c,b,d){return e.isFunction(a.width)?.5*
k.pt2px(a.width(c,b,d)):f});e.isFunction(a.cap)?b._dynamicPropertyMap.set("_capType",a.cap):b._capType=a.cap;e.isFunction(a.join)?b._dynamicPropertyMap.set("_joinType",a.join):b._joinType=a.join;if(e.isFunction(a.color))b._dynamicPropertyMap.set("_fillColor",function(c,b,d){return(c=a.color(c,b,d))&&l.premultiplyAlphaRGBA(c)||0});else{var d=a.color;b._fillColor=d&&l.premultiplyAlphaRGBA(d)||0}e.isFunction(a.miterLimit)?b._dynamicPropertyMap.set("_miterLimitCosine",function(b,d,f){return e.getLimitCosine(a.miterLimit(b,
d,f))}):b._miterLimitCosine=e.getLimitCosine(a.miterLimit);b._scaleFactor=a.scaleFactor||1;b._isDashed=a.isDashed;b.effects=a.effects;b.tessellationProperties._bitset=a.colorLocked?1:0;b._materialKey=n.createMaterialKey(b.geometryType,u,a.isOutline);b._initializeTessellator(!0);return b}p.__extends(f,g);f.fromCIMLine=function(e,a){return new f(e,a)};f.prototype.bindFeature=function(e,a,b){var f=this;this._dynamicPropertyMap.forEach(function(c,d){f[d]=c(e,a,b)});this._halfWidth*=this._scaleFactor;
var d=this._materialCache,c=this._cimLineLayer.materialHash,c=c(e,a,b),c=d.get(c),d=null;c&&t.ok(c.spriteMosaicItem)&&(d=c.spriteMosaicItem);if(d){this._hasPattern=!0;var c=d.rect,g=c.x+1+d.width,h=c.y+1+d.height;this.tessellationProperties._tl=m.i1616to32(c.x+1,c.y+1);this.tessellationProperties._br=m.i1616to32(g,h)}else this._hasPattern=!1,this.tessellationProperties._tl=0,this.tessellationProperties._br=0;this.tessellationProperties._fillColor=this._fillColor;this.tessellationProperties._halfWidth=
this._halfWidth;this.tessellationProperties._halfReferenceWidth=this.tessellationProperties._halfWidth;c=n.LineMaterialKey.load(this._materialKey);d&&(c.sdf=d.sdf,c.pattern=!0,c.textureBinding=d.textureBinding);this._materialKey=c.data};return f}(q.default(r.default));h.default=g});