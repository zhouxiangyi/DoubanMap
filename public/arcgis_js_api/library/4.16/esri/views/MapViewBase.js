// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../geometry ../Viewpoint ../core/Error ../core/Logger ../core/promiseUtils ../core/screenUtils ../core/watchUtils ../core/accessorSupport/decorators ../geometry/support/webMercatorUtils ../layers/support/TileInfo ./PopupView ./View ./ViewAnimation ./2d/AnimationManager ./2d/FrameTask ./2d/layerViewModuleImportUtils ./2d/MapViewConstraints ./2d/PaddedViewState ./2d/tiling ./2d/viewpointUtils ./2d/support/Timeline".split(" "),function(J,K,d,f,q,t,y,m,z,A,e,r,B,C,D,E,F,
G,u,v,H,I,h,w){var g=y.getLogger("esri.views.MapView");return function(x){function b(a){var c=x.call(this,a)||this;c._stationaryTimer=null;c.frameTask=new G.default(c);c.featuresTilingScheme=null;c.fullOpacity=1;c.graphicsView=null;c.initialExtent=null;c.labelManager=null;c.renderingOptions={samplingMode:"dynamic",edgeLabelsVisible:!0,labelsAnimationTime:125,labelCollisionsEnabled:!0};c.resizeAlign="center";c.timeline=new w.Timeline;c.type="2d";c.constraints=new v;c.padding={top:0,right:0,bottom:0,
left:0};var b=c.handles,d=function(){return c.notifyChange("updating")};b.add([c.watch("viewpoint",function(){c._lastStationaryEventTimestamp=performance.now();c._flipStationary(160)},!0),c.on("resize",function(a){return c._resizeHandler(a)}),c.watch("animationManager.animation",function(a){c.animation=a}),c.allLayerViews.on("change",function(){d();b.remove("map-view-base-layerViewsUpdating");b.add(c.allLayerViews.map(function(a){return a.watch("updating",d)}),"map-view-base-layerViewsUpdating")})],
"map-view-base");return c}d.__extends(b,x);b.prototype.destroy=function(){this.destroyed||(this._set("preconditionsReady",!1),this._gotoTask=this.frameTask=null)};Object.defineProperty(b.prototype,"animation",{set:function(a){var c=this,b=this._get("animation");a!==b&&(b&&b.stop(),!a||a.isFulfilled()?this._set("animation",null):(this._set("animation",a),this.frameTask.animationInProgress=!0,b=function(){a===c._get("animation")&&(c._set("animation",null),c.frameTask.requestFrame());c.frameTask.animationInProgress=
!1},a.when(b,b)))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"center",{get:function(){if(!this.ready)return this._get("center");var a=this.state.paddedViewState,c=a.center;return new f.Point({x:c[0],y:c[1],spatialReference:a.spatialReference})},set:function(a){if(null!=a)if(this._normalizeInput(a))if(this.ready){var c=this.viewpoint;h.centerAt(c,c,a);this.viewpoint=c}else this._set("center",a),this.notifyChange("initialExtentRequired");else g.error("#center","incompatible spatialReference "+
JSON.stringify(a.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"constraints",{set:function(a){var c=this,b=this._get("constraints");b&&(this.handles.remove("map-view-base-constraints"),b.destroy());this._set("constraints",a);a&&(a.view=this,this.ready&&(this.state.viewpoint=a.fit(this.state.paddedViewState.viewpoint)),this.handles.add(a.on("update",function(){c.ready&&c.state&&(c.state.viewpoint=
a.fit(c.state.paddedViewState.viewpoint))}),"map-view-base-constraints"))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"extent",{get:function(){return this.ready?this.state.paddedViewState.extent.clone():this._get("extent")},set:function(a){if(null!=a){var c=this._normalizeInput(a);c?c.width&&c.height?this.ready?(a=this.viewpoint,h.setExtent(a,a,c,this.size,{constraints:this.constraints}),this.viewpoint=a):(this._set("extent",c),this._set("center",null),this._set("viewpoint",
null),this._set("scale",0),this._set("zoom",-1),this.notifyChange("initialExtentRequired")):g.error("#extent","invalid extent size"):g.error("#center","incompatible spatialReference "+JSON.stringify(a.spatialReference)+" with view's spatialReference "+JSON.stringify(this.spatialReference))}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"initialExtentRequired",{get:function(){var a=this.extent,c=this.center,b=this.scale,d=this.viewpoint,e=this.zoom;return this.get("map.initialViewProperties.viewpoint")||
a||c&&(0!==b||-1!==e)||d?!1:!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"padding",{get:function(){return this.ready?this.state.padding:this._get("padding")},set:function(a){this.ready?(this.state.padding=a,this._set("padding",this.state.padding)):this._set("padding",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"resolution",{get:function(){return this.state?this.state.resolution:0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"rotation",{get:function(){return this.ready?this.state.rotation:this._get("rotation")},set:function(a){if(!isNaN(a))if(this.ready){var c=this.viewpoint;h.rotateTo(c,c,a);this.viewpoint=c}else this._set("rotation",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"scale",{get:function(){return this.ready?this.state.scale:this._get("scale")},set:function(a){if(a&&!isNaN(a))if(this.ready){var c=this.viewpoint;h.scaleTo(c,c,a);this.viewpoint=c}else{this._set("scale",a);this._set("zoom",
-1);if(a=this._get("extent"))this._set("extent",null),this._set("center",a.center);this.notifyChange("initialExtentRequired")}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"stationary",{get:function(){return!this.animation&&!this.navigating&&!this._get("resizing")&&!this._stationaryTimer},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return!this.destroyed&&(!0===this.get("layerViewManager.updating")||!0===this.get("labelManager.updating")||
!0===this.get("graphicsView.updating")||this.allLayerViews.some(function(a){return!a.destroyed&&!("layerViews"in a)&&!0===a.updating}))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewpoint",{get:function(){if(!this.ready)return this._get("viewpoint");var a=this.state.paddedViewState;return a&&a.viewpoint.clone()},set:function(a){if(null!=a){var c=this._normalizeInput(a);c?this.ready?(a=new q({targetGeometry:new f.Point,scale:0,rotation:0}),h.copy(a,c),this.constraints.constrain(a,
this.state.paddedViewState.viewpoint),this.state.viewpoint=a,this.frameTask.requestFrame(),this._set("viewpoint",a)):(this._set("viewpoint",c),this._set("extent",null),this._set("center",null),this._set("zoom",-1),this._set("scale",0),this.notifyChange("initialExtentRequired")):!a.scale||isNaN(a.scale)?g.error("#viewpoint","invalid scale value of "+a.scale):a.targetGeometry?g.error("#viewpoint","incompatible spatialReference "+JSON.stringify(a.targetGeometry.spatialReference)+" with view's spatialReference "+
JSON.stringify(this.spatialReference)):g.error("#viewpoint","geometry not defined")}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"zoom",{get:function(){return this.ready?this.constraints.scaleToZoom(this.scale):this._get("zoom")},set:function(a){if(null!=a){if(!this.ready){this.notifyChange("initialExtentRequired");this._set("zoom",a);this._set("scale",0);var c=this._get("extent");c&&(this._set("extent",null),this._set("center",c.center))}this.constraints.effectiveLODs&&(c=
this.viewpoint,h.scaleTo(c,c,this.constraints.zoomToScale(a)),this.viewpoint=c,this._set("zoom",this.constraints.scaleToZoom(this.scale)))}},enumerable:!0,configurable:!0});b.prototype.goTo=function(a,c){var b=this;if(a)return A.whenTrueOnce(this,"ready",c&&c.signal).then(function(){b.animation&&(b.animation=null);var n=d.__assign({animate:!0},c),e=h.createAsync(a,b);b._gotoTask={};return n.animate?b._gotoAnimated(e,n):b._gotoImmediate(e,n)});g.error("#goTo()","target cannot be null or undefined")};
b.prototype.hitTest=function(a){return m.reject("Should be implemented by subclasses")};b.prototype.popupHitTest=function(a){var c=this;return this.hitTest(a).then(function(b){return d.__assign(d.__assign({},b),{mapPoint:c.toMap(a)})})};b.prototype.toMap=function(a){if(!this.ready)return null;a=this.state.toMap([0,0],[a.x,a.y]);return new f.Point({x:a[0],y:a[1],spatialReference:this.spatialReference})};b.prototype.isTileInfoRequired=function(){return!0};b.prototype.toScreen=function(a){if(!this.ready)return null;
a=this._normalizeInput(a);a=[a.x,a.y];a=this.state.toScreen(a,a);return z.createScreenPoint(a[0],a[1])};b.prototype.pixelSizeAt=function(){return this.ready?this.state.resolution:(g.error("#pixelSizeAt()","Map view cannot be used before it is ready"),null)};b.prototype.requestUpdate=function(){this.ready&&this.frameTask.requestUpdate()};b.prototype.getDefaultSpatialReference=function(){return this.get("map.initialViewProperties.spatialReference")||this.get("defaultsFromMap.spatialReference")||null};
b.prototype.isSpatialReferenceSupported=function(a,c){return c||this._get("ready")?!0:null!==this._getDefaultViewpoint()};b.prototype.importLayerView=function(a){return u.layerView2DImporter.importLayerView(a)};b.prototype.hasLayerViewModule=function(a){return u.layerView2DImporter.hasLayerViewModule(a)};b.prototype._createOrReplaceAnimation=function(a){if(!this.animation||this.animation.done)this.animation=new E;this.animation.update(a);return this.animation};b.prototype._cancellableGoTo=function(a,
c,b){var d=this,n=b.then(function(){a===d._gotoTask&&(d.animation=null)}).catch(function(b){a===d._gotoTask&&(d.animation=null,c.done||(c.stop(),d.frameTask.animationInProgress=!1));throw b;}),e=m.create(function(a){return a(n)});c.when().catch(function(){a===d._gotoTask&&e.cancel&&e.cancel()});return e};b.prototype._gotoImmediate=function(a,c){var b=this,d=this._gotoTask,e=this._createOrReplaceAnimation(a);a=a.then(function(a){m.throwIfAborted(c);if(d!==b._gotoTask)throw new t("view:goto-interrupted",
"Goto was interrupted");b.viewpoint=e.target=a;e.finish()});return this._cancellableGoTo(d,e,a)};b.prototype._gotoAnimated=function(a,c){var b=this,d=this._gotoTask,e=this._createOrReplaceAnimation(a);a=a.then(function(a){if(d!==b._gotoTask)throw new t("view:goto-interrupted","Goto was interrupted");e.update(a);b.animationManager.animate(e,b.viewpoint,c);return e.when().then(function(){},function(){})});return this._cancellableGoTo(d,e,a)};b.prototype._resizeHandler=function(a){var c=this.state;if(c){var b=
this.state.paddedViewState.viewpoint,d=this.state.paddedViewState.size.concat();c.size=[a.width,a.height];h.resize(b,b,d,this.state.paddedViewState.size,this.resizeAlign);b=this.constraints.constrain(b,null);this.state.viewpoint=b}};b.prototype._startup=function(){var a=this._getDefaultViewpoint();this.constraints.view=this;this.constraints.fit(a);this._set("animationManager",new F.default({view:this}));this._set("state",new H({padding:this._get("padding"),size:this.size,viewpoint:a}));this._set("featuresTilingScheme",
new I.TileInfoView(B.create({spatialReference:this.spatialReference,size:512})));this._set("ready",!0);this.frameTask&&this.frameTask.start()};b.prototype._teardown=function(){this.frameTask&&this.frameTask.stop();this._set("ready",!1);this._stationaryTimer&&(clearTimeout(this._stationaryTimer),this._stationaryTimer=null);var a=this.state.paddedViewState,c=a.center,b=a.spatialReference,d=a.rotation,a=a.scale,c=new f.Point({x:c[0],y:c[1],spatialReference:b});this._set("viewpoint",null);this._set("extent",
null);this._set("center",c);this._set("zoom",-1);this._set("rotation",d);this._set("scale",a);this._set("spatialReference",b);this.constraints.view=null;this.animationManager.destroy();this._set("animationManager",null);this._set("state",null);this.animation=null};b.prototype._flipStationary=function(a){var c=this;return null!==this._stationaryTimer?this._stationaryTimer:this._stationaryTimer=setTimeout(function(){c._stationaryTimer=null;var a=performance.now()-c._lastStationaryEventTimestamp;160>
a&&(c._stationaryTimer=c._flipStationary(a))},a)};b.prototype._normalizeInput=function(a,c){void 0===c&&(c=this.spatialReference);var b=a&&a.targetGeometry||a;return c?b?c.equals(b.spatialReference)?a:r.canProject(b,c)?a&&"esri.Viewpoint"===a.declaredClass?(a.targetGeometry=r.project(b,c),a):r.project(b,c):null:null:a};b.prototype._getDefaultViewpoint=function(){var a=this.constraints,b=this._get("zoom"),d=this._get("scale"),e=this._normalizeInput(this._get("center")),f=this._normalizeInput(this._get("extent")),
g=this._get("rotation"),k=this._normalizeInput(this._get("viewpoint"));a.effectiveLODs?-1!==b&&(d=a.zoomToScale(b)):b=-1;var m=null,p=null,b=0,a=k&&k.rotation,l=k&&k.targetGeometry;l&&("extent"===l.type?m=l:"point"===l.type&&(p=l,b=k.scale));k=this._normalizeInput(this.get("map.initialViewProperties.viewpoint.targetGeometry.extent"));l=this._normalizeInput(this.initialExtent);f=f||m||k||l;e=e||p||f&&f.center;p=this.get("map.initialViewProperties.viewpoint.scale");d=d||b||p||f&&h.extentToScale(f,this.size);
b=this.get("map.initialViewProperties.viewpoint.rotation");return e&&d?new q({targetGeometry:e,scale:d,rotation:g||a||b||0}):null};d.__decorate([e.property()],b.prototype,"_stationaryTimer",void 0);d.__decorate([e.property()],b.prototype,"animation",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"animationManager",void 0);d.__decorate([e.property({value:null,type:f.Point,dependsOn:["state.id","ready"]})],b.prototype,"center",null);d.__decorate([e.property({type:v})],b.prototype,"constraints",
null);d.__decorate([e.property({value:null,type:f.Extent,dependsOn:["state.id","ready"]})],b.prototype,"extent",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"featuresTilingScheme",void 0);d.__decorate([e.property()],b.prototype,"fullOpacity",void 0);d.__decorate([e.property()],b.prototype,"graphicsView",void 0);d.__decorate([e.property({type:f.Extent})],b.prototype,"initialExtent",void 0);d.__decorate([e.property({dependsOn:["map.initialViewProperties?.viewpoint"]})],b.prototype,"initialExtentRequired",
null);d.__decorate([e.property()],b.prototype,"labelManager",void 0);d.__decorate([e.property({value:{top:0,right:0,bottom:0,left:0},cast:function(a){return d.__assign({top:0,right:0,bottom:0,left:0},a)}})],b.prototype,"padding",null);d.__decorate([e.property({type:Object})],b.prototype,"renderingOptions",void 0);d.__decorate([e.property()],b.prototype,"resizeAlign",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["state.id"]})],b.prototype,"resolution",null);d.__decorate([e.property({value:0,
type:Number,dependsOn:["state.id","ready"]})],b.prototype,"rotation",null);d.__decorate([e.property({value:0,type:Number,dependsOn:["state.id","ready"]})],b.prototype,"scale",null);d.__decorate([e.property({type:f.SpatialReference,dependsOn:["map.initialViewProperties?.spatialReference","defaultsFromMap.isSpatialReferenceDone"]})],b.prototype,"spatialReference",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"state",void 0);d.__decorate([e.property({dependsOn:["animation","navigating",
"resizing","_stationaryTimer"]})],b.prototype,"stationary",null);d.__decorate([e.property({type:w.Timeline,readOnly:!0})],b.prototype,"timeline",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"type",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["layerViewManager.updating","labelManager.updating","graphicsView?.updating"]})],b.prototype,"updating",null);d.__decorate([e.property({value:null,type:q,dependsOn:["state.id","ready"]})],b.prototype,"viewpoint",null);d.__decorate([e.property({value:-1,
dependsOn:["state.id"]})],b.prototype,"zoom",null);return b=d.__decorate([e.subclass("esri.views.MapViewBase")],b)}(C.PopupView(D))});