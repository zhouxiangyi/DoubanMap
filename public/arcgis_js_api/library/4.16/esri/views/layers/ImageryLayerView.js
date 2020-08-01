// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators ../../geometry/Point ../../layers/support/timeUtils ../../tasks/support/Query ./support/popupUtils".split(" "),function(z,b,c,l,u,v,d,m,w,x,y){Object.defineProperty(b,"__esModule",{value:!0});b.ImageryLayerView=function(b){return function(b){function a(){var e=null!==b&&b.apply(this,arguments)||this;e.view=null;return e}c.__extends(a,b);a.prototype.fetchPopupFeatures=function(e,
b){return c.__awaiter(this,void 0,void 0,function(){var a,d,f,n,g,h,p,k,q,r,t;return c.__generator(this,function(c){switch(c.label){case 0:a=this.layer;if(!e)return[2,v.reject(new l("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}))];d=a.popupEnabled;f=y.getFetchPopupTemplate(a,b);if(!d||!u.isSome(f))throw new l("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:d,popupTemplate:f});return[4,f.getRequiredFields()];case 1:return n=
c.sent(),g=new x,g.geometry=e,g.outFields=n,g.outSpatialReference=e.spatialReference,h=this.view.resolution,p="2d"===this.view.type?new m(h,h,this.view.spatialReference):new m(.5*h,.5*h,this.view.spatialReference),k=f.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},q=k.returnTopmostRaster,r=k.showNoDataRecords,t={returnDomainValues:!0,returnTopmostRaster:q,pixelSize:p,showNoDataRecords:r},[2,a.queryVisibleRasters(g,t).then(function(a){return a})]}})})};a.prototype.canResume=function(){var a;
return!b.prototype.canResume.call(this)||(null===(a=this.timeExtent)||void 0===a?0:a.isEmpty)?!1:!0};c.__decorate([d.property()],a.prototype,"layer",void 0);c.__decorate([d.property({dependsOn:["timeExtent"]})],a.prototype,"suspended",void 0);c.__decorate([d.property(w.combinedViewLayerTimeExtentProperty)],a.prototype,"timeExtent",void 0);c.__decorate([d.property()],a.prototype,"view",void 0);return a=c.__decorate([d.subclass("esri.views.layers.ImageryLayerView")],a)}(b)}});