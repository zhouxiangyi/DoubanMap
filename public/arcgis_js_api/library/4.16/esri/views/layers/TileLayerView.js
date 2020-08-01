// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators ../../renderers/support/clickToleranceUtils".split(" "),function(m,b,c,l,n,g,e,p){Object.defineProperty(b,"__esModule",{value:!0});b.TileLayerView=function(b){return function(b){function d(){return null!==b&&b.apply(this,arguments)||this}c.__extends(d,b);d.prototype.fetchPopupFeatures=function(b,d){return c.__awaiter(this,void 0,void 0,function(){var f,h,e,q=this;return c.__generator(this,
function(m){f=this.layer;if(!b)return[2,g.reject(new l("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:f}))];if("tile"!==f.type)return[2,g.reject(new l("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:f.type}))];h=this.get("view.scale");e=f.allSublayers.toArray().filter(function(a){var b=0===a.minScale||h<=a.minScale,d=0===a.maxScale||h>=a.maxScale;return a.popupTemplate&&a.popupEnabled&&a.visible&&b&&d});return[2,g.eachAlways(e.map(function(a){return c.__awaiter(q,
void 0,void 0,function(){var k,e,f,g,h;return c.__generator(this,function(c){switch(c.label){case 0:return k=a.createQuery(),e=n.isSome(d)?d.event:null,f=p.calculateTolerance({renderer:a.renderer,event:e}),k.geometry=this.createFetchPopupFeaturesQueryGeometry(b,f),g=k,[4,a.popupTemplate.getRequiredFields()];case 1:return g.outFields=c.sent(),[4,a.queryFeatures(k)];case 2:return h=c.sent(),[2,h.features]}})})})).then(function(a){return[].concat.apply([],a.map(function(a){return a.value}).filter(Boolean))})]})})};
c.__decorate([e.property()],d.prototype,"layer",void 0);return d=c.__decorate([e.subclass("esri.layers.mixins.TileLayerView")],d)}(b)}});