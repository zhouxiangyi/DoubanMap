// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Evented ../../../../../core/maybe ../../../../../core/accessorSupport/decorators ./DrawOperation ./drawSurfaces ../../../../interactive/InteractiveToolBase".split(" "),function(e,f,c,g,h,d,k,l,m){Object.defineProperty(f,"__esModule",{value:!0});e=function(e){function a(b){b=e.call(this,b)||this;b.drawOperation=null;b.hasZ=!0;b.defaultZ=0;b.elevationInfo=null;b.snapToScene=null;b.mode="hybrid";b.geometryType=null;b.type="draw-3d";return b}c.__extends(a,
e);a.prototype.initialize=function(){var b=this,a=h.unwrapOr(this.elevationInfo,{mode:this.hasZ?"absolute-height":"on-the-ground",offset:0});this.drawOperation=new k.DrawOperation({view:this.view,manipulators:this.manipulators,geometryType:this.geometryType,drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snappingEnabled:this.snapToScene,snappingDrawSurface:new l.SceneDrawSurface(this.view,this.elevationInfo),hasM:!1,elevationInfo:a});this.drawOperation.on("vertex-add",function(a){return b.onVertexAdd(a)});
this.drawOperation.on("vertex-remove",function(a){return b.onVertexRemove(a)});this.drawOperation.on("vertex-update",function(a){return b.onVertexUpdate(a)});this.drawOperation.on("cursor-update",function(a){return b.onCursorUpdate(a)});this.drawOperation.on("complete",function(a){return b.onComplete(a)})};a.prototype.destroy=function(){this.drawOperation.destroy();this.drawOperation=null;this._set("view",null)};a.prototype.onInputEvent=function(a){this.drawOperation.onInputEvent(a)};Object.defineProperty(a.prototype,
"enabled",{set:function(a){this.drawOperation.interactive=a;this._set("enabled",a)},enumerable:!0,configurable:!0});a.prototype.reset=function(){};Object.defineProperty(a.prototype,"canRedo",{get:function(){return this.drawOperation.canRedo},enumerable:!0,configurable:!0});a.prototype.redo=function(){this.drawOperation.redo()};Object.defineProperty(a.prototype,"canUndo",{get:function(){return this.drawOperation.canUndo},enumerable:!0,configurable:!0});a.prototype.undo=function(){this.drawOperation.undo()};
a.prototype.completeCreateOperation=function(){this.drawOperation.complete()};a.prototype.activate=function(){};a.prototype.deactivate=function(){this.drawOperation.isCompleted||this.emit("complete",{type:"complete"})};a.prototype.getVertexCoords=function(){return this.drawOperation.vertices};a.prototype.onVertexAdd=function(a){this.emit("vertex-add",a)};a.prototype.onVertexRemove=function(a){this.emit("vertex-remove",a)};a.prototype.onVertexUpdate=function(a){this.emit("vertex-update",a)};a.prototype.onCursorUpdate=
function(a){this.emit("cursor-update",a)};a.prototype.onComplete=function(a){this.emit("complete",a)};c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],a.prototype,"view",void 0);c.__decorate([d.property({value:!0})],a.prototype,"enabled",null);c.__decorate([d.property({constructOnly:!0})],a.prototype,"hasZ",void 0);c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],a.prototype,"defaultZ",void 0);c.__decorate([d.property({constructOnly:!0})],a.prototype,"elevationInfo",void 0);
c.__decorate([d.property()],a.prototype,"snapToScene",void 0);c.__decorate([d.property({constructOnly:!0})],a.prototype,"mode",void 0);c.__decorate([d.property({constructOnly:!0})],a.prototype,"geometryType",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"type",void 0);return a=c.__decorate([d.subclass("esri.views.3d.interactive.editingTools.draw.DrawTool")],a)}(g.EventedMixin(m.InteractiveToolBase));f.DrawTool=e});