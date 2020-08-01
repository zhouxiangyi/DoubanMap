// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Accessor ../../../../core/Handles ../../../../core/maybe ../../../../core/accessorSupport/decorators ../../../support/layerViewUtils ../../../support/Scheduler".split(" "),function(q,r,e,l,m,h,g,k,n){return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a._scaleRangeActive=!1;a.layerScaleRangeVisibilityQuery=!1;a.handles=new m;a.layerView=null;a.layer=null;a.queryGraphicUIDsInExtent=null;a.extent=null;a.graphicsCore=null;a.basemapTerrain=
null;a.layerScaleEnabled=!0;a.suspended=!1;a.updating=!0;return a}e.__extends(b,f);b.prototype.setup=function(a,c,b,p,e){var d=this;this.layerView=a;this.layer=c;this.queryGraphicUIDsInExtent=b;this.graphicsCore=p;this.basemapTerrain=e;this.updateScaleRangeActive();this.handles.add(this.layerView.view.resourceController.scheduler.registerTask(n.Task.SCALE_VISIBILITY,function(){return d.update()},function(){return d.needsUpdate()}))};b.prototype.destroy=function(){this.handles.destroy();this.graphicsCore=
this.queryGraphicUIDsInExtent=this.extent=this.layerView=this.handles=null};b.prototype.needsUpdate=function(){return!(!this.layerView.view.basemapTerrain||!this.updating)};b.prototype._setDirty=function(){this.updating||this._set("updating",!0)};b.prototype.setExtent=function(a){this.extent=a;this._setDirty()};b.prototype.scaleRangeActive=function(){return this._scaleRangeActive};b.prototype.updateScaleRangeActive=function(){var a=this,c=this.layer,b=this.layerScaleEnabled&&(0<c.minScale||0<c.maxScale);
c.labelingInfo&&!b&&(b=c.labelingInfo.some(function(a){return a&&(0<a.minScale||0<a.maxScale)}));c=this._scaleRangeActive!==b;(this._scaleRangeActive=b)&&!this.handles.has("terrain-events")&&this.basemapTerrain?(this.handles.add(this.basemapTerrain.on("scale-change",function(b){return a.scaleUpdateHandler(b)}),"terrain-events"),this.layerScaleEnabled&&this.handles.add(this.basemapTerrain.on("tiles-visibility-changed",function(){return a._setDirty()}),"terrain-events")):!b&&this.handles.has("terrain-events")&&
this.handles.remove("terrain-events");return c};b.prototype.update=function(){var a=this,b=this.layerView.view.basemapTerrain;this.extent&&b&&b.ready&&this._scaleRangeActive&&this.layerScaleEnabled?this.layerScaleRangeVisibilityQuery||(this.layerScaleRangeVisibilityQuery=!0,b.queryVisibleScaleRange(this.extent,this.layer.minScale,this.layer.maxScale,function(b){return a.finishUpdate(b)})):this.finishUpdate(!0)};b.prototype.finishUpdate=function(a){this.layerScaleRangeVisibilityQuery=!1;this._set("suspended",
!a);this._set("updating",!1)};b.prototype.visibleAtLayerScale=function(a){return!this.layerScaleEnabled||k.scaleBoundsPredicate(a,this.layer.minScale||0,this.layer.maxScale||0)};b.prototype.visibleAtLabelScale=function(a,b){return k.scaleBoundsPredicate(a,b.minScale||0,b.maxScale||0)};b.prototype.graphicScale=function(a){var b;h.isSome(a.centroid)?b=a.centroid:h.isSome(a.graphic.geometry)&&"point"===a.graphic.geometry.type&&(b=a.graphic.geometry);return b?this.layerView.view.basemapTerrain?this.layerView.view.basemapTerrain.getScale(b):
1:null};b.prototype.graphicVisible=function(a){if(!this.layerScaleEnabled)return!0;a=this.graphicScale(a);return this.visibleAtLayerScale(a)};b.prototype.updateVisibility=function(a){if(this._scaleRangeActive){var b=this.graphicVisible(a);return a.setVisibilityFlag(1,b,0)}return!1};b.prototype.updateGraphicLabelScaleVisibility=function(a){if(!this._scaleRangeActive||!a.labelGraphics||0===a.labelGraphics.length)return!1;var b=this.graphicScale(a);if(a=this.updateLabelScaleVisibility(a,b))this.layerView.view.deconflictor.setDirty(),
this.layerView.view.labeler.setDirty();return a};b.prototype.updateLabelScaleVisibility=function(a,b){if(!a.labelGraphics||0===a.labelGraphics.length)return!1;var d=a.labelGraphics[0]._labelClass;return d&&null!=d.minScale&&null!=d.maxScale&&(b=this.visibleAtLabelScale(b,d),a.setVisibilityFlag(1,b,1))?!0:!1};b.prototype.scaleUpdateHandler=function(a){var b=this;this._setDirty();if(!this.layerView.suspended){var d=a.extent,e=a.scale,g=this.visibleAtLayerScale(e),f=!1;this.queryGraphicUIDsInExtent(d,
a.spatialReference,function(a){if(a=b.graphicsCore.getGraphics3DGraphicById(a)){var c=a.centroid;h.isSome(c)&&(d[0]>c.x||d[1]>c.y||d[2]<c.x||d[3]<c.y)||(a.setVisibilityFlag(1,g,0)&&(f=!0),b.updateLabelScaleVisibility(a,e)&&(f=!0))}});f&&(this.layerView.view.deconflictor.setDirty(),this.layerView.view.labeler.setDirty())}};b.prototype.layerMinMaxScaleChangeHandler=function(){this.updateScaleRangeActive()&&!this._scaleRangeActive?this.graphicsCore.modifyGraphics3DGraphicVisibilities(function(a){return a.clearVisibilityFlag(1)}):
this._scaleRangeActive&&this.graphicsCore.updateAllGraphicsVisibility();this._setDirty()};e.__decorate([g.property({constructOnly:!0})],b.prototype,"layerScaleEnabled",void 0);e.__decorate([g.property({readOnly:!0})],b.prototype,"suspended",void 0);e.__decorate([g.property({readOnly:!0})],b.prototype,"updating",void 0);return b=e.__decorate([g.subclass("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")],b)}(l)});