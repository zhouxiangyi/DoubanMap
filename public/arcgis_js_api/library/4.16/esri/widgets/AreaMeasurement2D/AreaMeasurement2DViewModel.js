// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/unitUtils ../../core/watchUtils ../../core/accessorSupport/decorators ./AreaMeasurement2DTool ../support/commonProperties ../support/InteractiveToolViewModel".split(" "),function(t,u,c,k,l,m,e,n,d,g,p,q){var r={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:2,pathColor:[255,128,0,1],fillColor:[255,128,0,.3]},f=l.getLogger("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel");return function(h){function b(a){a=
h.call(this,a)||this;a.supportedViewType="2d";a._handles=new k;a.geodesicDistanceThreshold=1E5;a.measurement=null;a.measurementLabel=null;a.palette=r;a.tool=null;return a}c.__extends(b,h);b.prototype.initialize=function(){var a=this;this._handles.add([n.init(this,["unit","palette","geodesicDistanceThreshold"],function(b,c,d){a.tool&&(a.tool[d]=b)})])};b.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)};Object.defineProperty(b.prototype,"state",{get:function(){var a;
return this.isDisabled||!g.isSupported(null===(a=this.view)||void 0===a?void 0:a.spatialReference)?"disabled":this.tool?this.tool.measurement?this.tool.active?"measuring":"measured":"ready":"ready"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unit",{get:function(){return this._validateUnit(this.defaultUnit)},set:function(a){void 0===a?this._clearOverride("unit"):this._override("unit",this._validateUnit(a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unitOptions",
{get:function(){return e.measurementAreaUnits},set:function(a){void 0===a?this._clearOverride("unitOptions"):this._override("unitOptions",this._validateUnits(a))},enumerable:!0,configurable:!0});b.prototype.start=function(){return this.createTool()};b.prototype.clear=function(){this.removeTool()};b.prototype.newMeasurement=function(){m.ignoreAbortErrors(this.start())};b.prototype.clearMeasurement=function(){this.clear()};b.prototype.createToolParams=function(){var a=this;return{toolConstructor:g.default,
constructorArguments:function(){return{geodesicDistanceThreshold:a.geodesicDistanceThreshold,palette:a.palette,unit:a.unit}}}};b.prototype.logUnsupportedError=function(){f.error("AreaMeasurement2D widget is not implemented for SceneView")};b.prototype.logError=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];f.error.apply(f,a)};b.prototype._validateUnit=function(a){return-1!==this.unitOptions.indexOf(a)?a:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]};
b.prototype._validateUnits=function(a){void 0===a&&(a=[]);a=a.filter(function(a){return-1!==e.measurementAreaUnits.indexOf(a)});return 0===a.length?e.measurementAreaUnits.slice():a};c.__decorate([d.property(p.defaultUnitPropertyMetadata)],b.prototype,"defaultUnit",void 0);c.__decorate([d.property({type:Number})],b.prototype,"geodesicDistanceThreshold",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"tool.measurement"})],b.prototype,"measurement",void 0);c.__decorate([d.property({readOnly:!0,
aliasOf:"tool.measurementLabel"})],b.prototype,"measurementLabel",void 0);c.__decorate([d.property()],b.prototype,"palette",void 0);c.__decorate([d.property({dependsOn:["isDisabled","tool.measurement","tool.active","view.spatialReference"],readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property({constructOnly:!0,readOnly:!0})],b.prototype,"tool",void 0);c.__decorate([d.property({type:String,dependsOn:["unitOptions","defaultUnit"]})],b.prototype,"unit",null);c.__decorate([d.property({type:[String]})],
b.prototype,"unitOptions",null);return b=c.__decorate([d.subclass("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],b)}(q.InteractiveToolViewModel)});