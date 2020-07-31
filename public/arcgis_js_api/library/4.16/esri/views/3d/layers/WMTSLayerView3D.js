// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Error ../../../core/Logger ../../../core/watchUtils ../../../core/accessorSupport/decorators ./LayerView3D ./TiledLayerView3D ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),function(t,u,c,k,l,m,e,n,p,q,r){var h=l.getLogger("esri.views.3d.layers.WMTSLayerView3d");return function(f){function a(){return null!==f&&f.apply(this,arguments)||this}c.__extends(a,f);Object.defineProperty(a.prototype,"hasMixedImageFormats",{get:function(){return!0},
enumerable:!0,configurable:!0});a.prototype.initialize=function(){var b=this,a=m.whenTrueOnce(this.view,"basemapTerrain.tilingSchemeDone").then(function(){var a=function(){return new k("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.")};if(!b.view.basemapTerrain.tilingSchemeLocked)throw a();var c=b.view.basemapTerrain.tilingScheme,g=b.layer.activeLayer,d;if(g&&g.tileMatrixSet){if(d=g.tileMatrixSet,a=d.tileInfo,c=b._getTileInfoSupportError(a,
d.fullExtent)||b._getTileInfoCompatibilityError(a,c))throw c;}else{d=b._getCompatibleTileMatrixSet();if(!d)throw a();g.tileMatrixSetId=d.id}b._set("tileInfo",d.tileInfo);b._set("fullExtent",d.fullExtent);b.layer.fullExtent=d.fullExtent});this.addResolvingPromise(a);this.when(function(){return b._initialized()})};a.prototype.refresh=function(){this.emit("data-changed")};a.prototype.canResume=function(){if(!f.prototype.canResume.call(this))return!1;var b=this.layer.activeLayer.tileMatrixSet;return b&&
!this._getTileInfoError(b.tileInfo,b.fullExtent)};a.prototype.doRefresh=function(){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(b){if(this.suspended)return[2];this.emit("data-changed");return[2]})})};a.prototype._initialized=function(){var b=this;this.updatingHandles.add(this,"layer.activeLayer.styleId",function(){return b.refresh()});this.updatingHandles.add(this,"tileMatrixSet",function(){return b.refresh()});this.updatingHandles.add(this.layer,"activeLayer",
function(a){var c=a.tileMatrixSet;if(c){if(a=b._getTileInfoError(c.tileInfo,c.fullExtent))h.error("The selected tile matrix set is not compatible with the view",a),c=null}else(c=b._getCompatibleTileMatrixSet())?a.tileMatrixSetId=c.id:h.error("The layer does not provide a tiling scheme that is compatible with the view");b.notifyChange("suspended");b.canResume()&&b.refresh()})};a.prototype._getCompatibleTileMatrixSet=function(){var a=this;return this.layer.activeLayer.tileMatrixSets.find(function(b){return!a._getTileInfoError(b.tileInfo,
b.fullExtent)})};a.prototype._getTileInfoError=function(a,c){return this._getTileInfoSupportError(a,c)||this._getTileInfoCompatibilityError(a,this.view.basemapTerrain.tilingScheme)};c.__decorate([e.property({readOnly:!0})],a.prototype,"hasMixedImageFormats",null);c.__decorate([e.property()],a.prototype,"fullExtent",void 0);c.__decorate([e.property()],a.prototype,"layer",void 0);c.__decorate([e.property({dependsOn:["layer.activeLayer"]})],a.prototype,"suspended",void 0);c.__decorate([e.property()],
a.prototype,"tileInfo",void 0);return a=c.__decorate([e.subclass("esri.views.3d.layers.WMTSLayerView3D")],a)}(r.RefreshableLayerView(p.TiledLayerView3D(n.LayerView3D(q))))});