// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Accessor ../../../../core/Error ../../../../core/Handles ../../../../core/maybe ../../../../core/accessorSupport/decorators ../../../../geometry/Extent ../../../../layers/graphics/data/QueryEngine ../../../../tasks/support/FeatureSet ../../../../tasks/support/Query".split(" "),function(e,h,b,l,k,m,n,d,p,q,r,t){Object.defineProperty(h,"__esModule",{value:!0});var u=q.default;e=function(e){function a(c){c=e.call(this,c)||this;c._dataQueryEngineInstance=
null;c._handles=new m;return c}b.__extends(a,e);Object.defineProperty(a.prototype,"defaultQueryJSON",{get:function(){return(new t({outSpatialReference:this.spatialReference})).toJSON()},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"dataQueryEngine",{get:function(){return this.ensureDataQueryEngine()},enumerable:!0,configurable:!0});a.prototype.initialize=function(){var c=this;this._handles.add(this.layerView.on("visible-geometry-changed",function(){return c.spatialIndex.events.emit("changed")}))};
a.prototype.destroy=function(){this._dataQueryEngineInstance&&(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null);this._handles&&(this._handles.destroy(),this._handles=null);this._set("layerView",null)};a.prototype.executeQueryForCount=function(c,a){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){return[2,this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(c),a)]})})};a.prototype.executeQueryForExtent=function(a,g){return b.__awaiter(this,
void 0,void 0,function(){var c,d,f,e;return b.__generator(this,function(b){switch(b.label){case 0:return[4,this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(a),g)];case 1:return c=b.sent(),d=c.count,f=c.extent,e=p.fromJSON(f),[2,{count:d,extent:e}]}})})};a.prototype.executeQueryForIds=function(a,d){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(c){return[2,this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(a),d)]})})};a.prototype.executeQuery=
function(a,d){return b.__awaiter(this,void 0,void 0,function(){var c,e,f,g=this;return b.__generator(this,function(b){switch(b.label){case 0:c=this._ensureQueryJSON(a);if(c.returnGeometry)throw new k("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(c.returnCentroid)throw new k("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");return[4,this.dataQueryEngine.executeQuery(c,d)];case 1:return e=
b.sent(),f=r.fromJSON(e),f.features.forEach(function(a){a.geometry=null;a.layer=g.layer;a.sourceLayer=g.layer}),[2,f]}})})};a.prototype._ensureQueryJSON=function(a){if(n.isNone(a))return this.defaultQueryJSON;var b=a.toJSON();b.outSpatialReference||(a.outSpatialReference=this.spatialReference);return b};a.prototype.ensureDataQueryEngine=function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;var a=this.layer.objectIdField||"OBJECTID",b=this.layer.fields.map(function(a){return a.toJSON()}),
d=this.layerView.view.resourceController.scheduler,e=this.spatialReference.toJSON();return this._dataQueryEngineInstance=new u({hasZ:!0,hasM:!1,geometryType:"esriGeometryPolygon",fields:b,timeInfo:null,spatialReference:e,objectIdField:a,featureStore:this.spatialIndex,scheduler:d,task:this.task})};b.__decorate([d.property({constructOnly:!0})],a.prototype,"layerView",void 0);b.__decorate([d.property({constructOnly:!0})],a.prototype,"task",void 0);b.__decorate([d.property({constructOnly:!0})],a.prototype,
"spatialIndex",void 0);b.__decorate([d.property({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],a.prototype,"spatialReference",void 0);b.__decorate([d.property({readOnly:!0,aliasOf:"layerView.layer"})],a.prototype,"layer",void 0);b.__decorate([d.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"defaultQueryJSON",null);return a=b.__decorate([d.subclass("esri.views.3d.layers.i3s.I3SQueryEngine")],a)}(l);h.I3SQueryEngine=e;h.default=e});