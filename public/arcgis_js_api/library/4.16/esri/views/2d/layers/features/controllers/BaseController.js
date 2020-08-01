// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Error ../../../../../core/HandleOwner ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators ../../../../../layers/graphics/data/attributeSupport ../../../../../layers/graphics/data/QueryEngine ../../../../../layers/support/FieldsIndex ../../../../../renderers/support/jsonUtils ../../../../../tasks/support/Query ../../../engine ../support/AttributeStore ../support/ClusterStore ../support/pixelBuffering".split(" "),
function(e,h,c,m,n,E,p,k,q,d,r,t,u,v,w,x,y,z,A){function B(c){var b=c&&c.getSymbols();return"backgroundFillSymbol"in c&&null!=c.backgroundFillSymbol&&"outline"in c.backgroundFillSymbol&&null!=c.backgroundFillSymbol.outline||b.some(function(a){return"outline"in a&&null!=a.outline})}function C(c,b,a){function g(a){if(!a)return!1;a=a.type;return"simple-marker"===a||"picture-marker"===a||"text"===a||"web-style"===a||"cim"===a}if("esriGeometryPolygon"===b&&c.labelingInfo)return!0;if("esriGeometryPolygon"!==
b)return!1;switch(a.type){case "simple":return g(a.symbol);case "unique-value":return g(a.defaultSymbol)||a.uniqueValueInfos.some(function(a){return g(a.symbol)});case "class-breaks":return g(a.defaultSymbol)||a.classBreakInfos.some(function(a){return g(a.symbol)});case "dot-density":return!1;default:return!0}}Object.defineProperty(h,"__esModule",{value:!0});var D=p.getLogger("esri.views.2d.layers.features.controllers.BaseController");e=function(f){function b(){var a=null!==f&&f.apply(this,arguments)||
this;a._availableFields=[];a._pixelBuffer=0;a.config=null;a.filters=Array(x.definitions.MAX_FILTERS);a.processor=null;a.remoteClient=null;a.service=null;a.tileStore=null;return a}c.__extends(b,f);b.prototype.initialize=function(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);this._initAttributeStore()};b.prototype.startup=function(){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(a){switch(a.label){case 0:return this._initAttributeStore(),
[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)];case 1:return a.sent(),[4,q.all([this.attributeStore.updateFilters(this),this.updatePixelBuffer()])];case 2:return a.sent(),[2]}})})};b.prototype.destroy=function(){this.attributeStore&&this.attributeStore.destroy()};Object.defineProperty(b.prototype,"arcadeInfo",{get:function(){return{geometryType:this.service.geometryType,fields:this.service.fields,spatialReference:this.spatialReference}},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"featureReduction",{get:function(){return this.config.featureReduction},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fieldsIndex",{get:function(){return new u(this.service.fields)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"geometryInfo",{get:function(){return{geometryType:this.service.geometryType,hasZ:!1,hasM:!1}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"returnCentroid",{get:function(){return this._get("returnCentroid")||
C(this.config,this.service.geometryType,this.renderer)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"returnOutline",{get:function(){var a;a:{switch(this.service.geometryType){case "esriGeometryPoint":case "esriGeometryPolyline":case "esriGeometryMultipoint":a=!0;break a;case "esriGeometryPolygon":a=B(this.renderer);break a}a=void 0}return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"queryInfo",{get:function(){return{returnCentroid:this.returnCentroid,
returnGeometry:!0,outFields:this.availableFields,definitionExpression:this.config.definitionExpression,gdbVersion:this.config.gdbVersion,historicMoment:this.config.historicMoment}},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderer",{get:function(){return this.config?v.fromJSON(this.config.renderer):(D.error("mapview-controller","Unable to create renderer for undefined configuration"),null)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"availableFields",
{get:function(){var a=this,b=this.config.availableFields.filter(function(b){return-1===a._availableFields.indexOf(b)});return this._availableFields=c.__spreadArrays(this._availableFields,b)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"spatialReference",{get:function(){return this.tileStore.tileScheme.spatialReference},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewParams",{get:function(){return{viewingMode:"",scale:this.viewState&&this.viewState.scale||
1}},enumerable:!0,configurable:!0});b.prototype.getObjectId=function(a){return this.attributeStore.getFeatureId(a)};b.prototype.getAggregate=function(a){return null};b.prototype.getAggregateValueRanges=function(){return{}};b.prototype.getLocalId=function(a){return this.attributeStore.getLocalId(a)};b.prototype.mapValidLocalIds=function(a){var b=this;return a.map(function(a){return b.attributeStore.getLocalId(a)}).filter(function(a){return null!=a})};b.prototype.setViewState=function(a){this._set("viewState",
a)};b.prototype.updatePixelBuffer=function(){return c.__awaiter(this,void 0,void 0,function(){var a;return c.__generator(this,function(b){switch(b.label){case 0:return[4,A.computePxBuffer(this.renderer,this.service.geometryType)];case 1:return a=b.sent(),this._pixelBuffer=Math.max(this._pixelBuffer,a),[2]}})})};b.prototype.setHighlight=function(a){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(b){return[2,this.attributeStore.setHighlight(a)]})})};b.prototype.validateConfig=
function(a){var b=0;for(a=a.filters;b<a.length;b++){var c=a[b];if(k.isSome(c)&&c.where)try{r.validateWhere(this.fieldsIndex,c.where)}catch(l){throw new m("mapview-bad-filter",l.message,{filter:c,missingFields:l.details});}}};b.prototype.onFeatureAdd=function(a){a.localId=this.attributeStore.createLocalId(a.objectId);this.attributeStore.setAttributeData(a.localId,a,this.geometryInfo,this.viewParams)};b.prototype.onFeatureRemove=function(a){this.attributeStore.freeLocalId(a.objectId)};b.prototype.enableEvent=
function(a){};b.prototype._initAttributeStore=function(){var a=this;this.attributeStore?this.attributeStore.invalidateResources():this.attributeStore=new y.default({type:"remote",initialize:function(b,c){return a.remoteClient.invoke("tileRenderer.featuresView.attributeView.initialize",b,{signal:c})},update:function(b,c){return a.remoteClient.invoke("tileRenderer.featuresView.attributeView.requestUpdate",b,{signal:c})},render:function(){return a.remoteClient.invoke("tileRenderer.featuresView.requestRender")}})};
b.prototype._createQueryEngine=function(a){return new t.default({definitionExpression:this.config.definitionExpression,fields:this.service.fields,geometryType:this.service.geometryType,objectIdField:this.service.objectIdField,hasM:!1,hasZ:!1,spatialReference:this.spatialReference.toJSON(),cacheSpatialQueries:!0,featureStore:a,timeInfo:this.service.timeInfo})};b.prototype._createTempQueryEngine=function(a){void 0===a&&(a=this._createFeatureStore());return this._createQueryEngine(a)};b.prototype._createFeatureStore=
function(){return new z.ClusterStore({geometryType:this.service.geometryType,hasM:!1,hasZ:!1},this.spatialReference,this.attributeStore,this.featureReduction)};b.prototype._createDefaultQuery=function(a){var b=new w,c=a.outFields,d=this.config,f=d.gdbVersion,e=d.historicMoment,d=d.definitionExpression,c=.75<=c.length/this.service.fields.length?["*"]:c;b.gdbVersion=f;b.historicMoment=null!=e?new Date(e):null;b.num=a.num;b.outFields=c;b.outSpatialReference=this.spatialReference;b.returnGeometry=a.returnGeometry;
b.returnCentroid=a.returnCentroid;b.start=a.resultOffset;b.where=d||"1\x3d1";return b};b.prototype.hasGeometryFilter=function(){return this.filters.some(function(a){return k.isSome(a)&&!!a.geometry})};c.__decorate([d.property({readOnly:!0,dependsOn:["config","service","spatialReference"]})],b.prototype,"arcadeInfo",null);c.__decorate([d.property()],b.prototype,"config",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["config"]})],b.prototype,"featureReduction",null);c.__decorate([d.property({readOnly:!0,
dependsOn:["service"]})],b.prototype,"fieldsIndex",null);c.__decorate([d.property()],b.prototype,"filters",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["service"]})],b.prototype,"geometryInfo",null);c.__decorate([d.property({readOnly:!0,dependsOn:["config"]})],b.prototype,"returnCentroid",null);c.__decorate([d.property({readOnly:!0,dependsOn:["service","config"]})],b.prototype,"returnOutline",null);c.__decorate([d.property({readOnly:!0,dependsOn:["config","availableFields"]})],b.prototype,
"queryInfo",null);c.__decorate([d.property({dependsOn:["config"],readOnly:!0})],b.prototype,"renderer",null);c.__decorate([d.property()],b.prototype,"processor",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["config"]})],b.prototype,"availableFields",null);c.__decorate([d.property({constructOnly:!0})],b.prototype,"remoteClient",void 0);c.__decorate([d.property({constructOnly:!0})],b.prototype,"service",void 0);c.__decorate([d.property({dependsOn:["tileStore"]})],b.prototype,"spatialReference",
null);c.__decorate([d.property({constructOnly:!0})],b.prototype,"tileInfo",void 0);c.__decorate([d.property({constructOnly:!0})],b.prototype,"tileStore",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"viewState",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["viewState"]})],b.prototype,"viewParams",null);return b=c.__decorate([d.subclass("esri.views.2d.layers.features.controllers.BaseController")],b)}(n.HandleOwner);h.default=e});