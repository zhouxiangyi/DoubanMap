// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Accessor ../../../../core/Handles ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../support/earthUtils ../../support/FrustumExtentIntersection ../../../support/Scheduler".split(" "),function(q,r,c,h,k,g,e,l,m,n){var p=-.3*l.earthRadius;return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a.suspended=!1;a.extent=null;a.extentIntersectionDirty=!0;a._isVisibleBelowSurface=!1;a.handles=new k;a.layerView=
null;a.updating=!0;return a}c.__extends(b,f);b.prototype.setup=function(a){var d=this;this.layerView=a;this.extentIntersection=new m.FrustumExtentIntersection({renderCoordsHelper:a.view.renderCoordsHelper});a=a.view;var b=a.basemapTerrain,c=a.resourceController.scheduler;this.handles.add([a.on("resize",function(){return d.viewChange()}),a.state.watch("camera",function(){return d.viewChange()},!0),c.registerTask(n.Task.FRUSTUM_VISIBILITY,function(){return d.update()},function(){return d.updating}),
b.on("elevation-bounds-change",function(){return d.elevationBoundsChange()})]);"local"===a.viewingMode?this.isVisibleBelowSurface=!0:this.handles.add([g.init(b,["opacity","wireframe"],function(){return d.updateIsVisibleBelowSurface()}),g.init(a,"map.ground.navigationConstraint.type",function(){return d.updateIsVisibleBelowSurface()})])};b.prototype.destroy=function(){this.extentIntersection=this.extent=this.layerView=null;this.handles&&(this.handles.destroy(),this.handles=null)};b.prototype._setDirty=
function(){this.updating||this._set("updating",!0)};b.prototype.setExtent=function(a){this.extent=a;this.extentIntersectionDirty=!0;this._setDirty()};b.prototype.viewChange=function(){this._setDirty()};b.prototype.elevationBoundsChange=function(){this._setDirty();this.extentIntersectionDirty=!0};Object.defineProperty(b.prototype,"isVisibleBelowSurface",{set:function(a){this._isVisibleBelowSurface=a;this._setDirty();this.extentIntersectionDirty=!0},enumerable:!0,configurable:!0});b.prototype.updateIsVisibleBelowSurface=
function(){var a=this.layerView.view,b=a.basemapTerrain,c=a.map.ground&&a.map.ground.navigationConstraint&&"none"===a.map.ground.navigationConstraint.type;this.isVisibleBelowSurface="local"===a.viewingMode||!b.isOpaque()||c};b.prototype.updateExtentIntersection=function(){if(this.extentIntersectionDirty){this.extentIntersectionDirty=!1;var a=this.layerView.view,b;if(this._isVisibleBelowSurface)b=p;else{b=a.basemapTerrain.elevationBounds;var c=b.min;b=c-Math.max(1,(b.max-c)*(1.2-1))}this.extentIntersection.update(this.extent,
a.spatialReference,b)}};b.prototype.update=function(){this._set("updating",!1);this.extent?(this.updateExtentIntersection(),this._set("suspended",!this.extentIntersection.isVisibleInFrustum(this.layerView.view.frustum))):this._set("suspended",!1)};c.__decorate([e.property({readOnly:!0})],b.prototype,"suspended",void 0);c.__decorate([e.property({readOnly:!0})],b.prototype,"updating",void 0);return b=c.__decorate([e.subclass("esri.views.3d.layers.graphics.Graphics3DFrustumVisibility")],b)}(h)});