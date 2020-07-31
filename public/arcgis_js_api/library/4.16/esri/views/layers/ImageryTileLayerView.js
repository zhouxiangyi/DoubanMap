// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Graphic ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators ../../layers/graphics/data/projectionSupport ../../layers/support/rasterFunctions/rasterProjectionHelper ./support/popupUtils".split(" "),function(D,e,c,y,h,z,p,f,A,B,C){Object.defineProperty(e,"__esModule",{value:!0});e.ImageryTileLayerView=function(e){return function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.layer=null;a.view=null;a.fullExtent=
null;a.tileInfo=null;a._rasterFieldPrefix="Raster.";a.datumTransformation=null;return a}c.__extends(b,e);Object.defineProperty(b.prototype,"hasTilingEffects",{get:function(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment},enumerable:!0,configurable:!0});b.prototype.fetchPopupFeatures=function(a,d){var q,b;return c.__awaiter(this,void 0,void 0,function(){var g,e,r,f,x,t,l,u,v,m,n,w,k;return c.__generator(this,function(c){switch(c.label){case 0:g=
this.layer;if(!a)return[2,p.reject(new h("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:g}))];e=g.popupEnabled;r=C.getFetchPopupTemplate(g,d);if(!e||!z.isSome(r))throw new h("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:e,popupTemplate:r});f=[];return[4,g.identify(a)];case 1:if(x=c.sent().value){t=x.join(", ");l={ObjectId:0};l["Raster.ServicePixelValue"]=this._formatAttributeValue(t,"Raster.ServicePixelValue");
if((u=null===(b=null===(q=g.rasterInfo)||void 0===q?void 0:q.attributeTable)||void 0===b?void 0:b.features)&&0<u.length&&(v=u.filter(function(a){return String(a.attributes.value||a.attributes.Value||a.attributes.VALUE)===t}),0<v.length&&(m=v[0])))for(n in m.attributes)m.attributes.hasOwnProperty(n)&&(w=this._rasterFieldPrefix+n,l[w]=this._formatAttributeValue(m.attributes[n],w));k=new y(this.fullExtent.clone(),null,l);k.layer=g;k.sourceLayer=k.layer;f.push(k)}return[2,f]}})})};b.prototype.updateFullExtent=
function(){var a=this.layer.tileInfo,d;a&&a.spatialReference||(d=new h("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));a=this.view.spatialReference;A.doesBrowserSupportProjection(a,this.layer.spatialReference)?(a=B.projectExtent(this.layer.fullExtent,a,this.datumTransformation),null==a&&(d=new h("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",
a)):d=new h("layerview:projection-not-supported","The layer requires projection engine, which is not supported in current browser",{layer:this.layer});return d?p.reject(d):p.resolve()};b.prototype._formatAttributeValue=function(a,d){if("string"===typeof a&&(d=(d=this._getFieldInfo(this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,d))&&d.format)){var b=void 0,c=void 0;return-1<a.trim().indexOf(",")?(b=",",this._formatDelimitedString(a,b,b+" ",d)):-1<a.trim().indexOf(" ")?(b=c=" ",this._formatDelimitedString(a,
b,c,d)):this._formatNumberFromString(a,d)}return a};b.prototype._getFieldInfo=function(a,b){if(a&&a.length&&b){var d=b.toLowerCase(),c=void 0;a.some(function(a){return!a.fieldName||a.fieldName.toLowerCase()!==d&&a.fieldName.toLowerCase()!==d.replace(/ /g,"_")?!1:(c=a,!0)});return c}};b.prototype._formatDelimitedString=function(a,b,c,e){var d=this;return a&&b&&c&&e?a.trim().split(b).map(function(a){return d._formatNumberFromString(a,e)}).join(c):a};b.prototype._formatNumberFromString=function(a,b){if(!a||
!b)return a;var c=Number(a);return isNaN(c)?a:b.format(c)};c.__decorate([f.property()],b.prototype,"layer",void 0);c.__decorate([f.property()],b.prototype,"view",void 0);c.__decorate([f.property()],b.prototype,"fullExtent",void 0);c.__decorate([f.property()],b.prototype,"tileInfo",void 0);c.__decorate([f.property()],b.prototype,"_rasterFieldPrefix",void 0);c.__decorate([f.property({readOnly:!0,dependsOn:["layer.renderer"]})],b.prototype,"hasTilingEffects",null);return b=c.__decorate([f.subclass("esri.views.layers.ImageryTileLayerView")],
b)}(e)}});