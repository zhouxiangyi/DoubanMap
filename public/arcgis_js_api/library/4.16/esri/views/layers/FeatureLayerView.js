// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/SetUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/support/fieldUtils ../../layers/support/timeUtils ../../support/arcadeOnDemand ../../tasks/support/Query ./support/FeatureEffect ./support/FeatureFilter ./support/popupUtils".split(" "),function(J,f,c,t,B,v,w,C,D,d,h,E,F,G,H,I,x){Object.defineProperty(f,"__esModule",{value:!0});var z=B.getLogger("esri.views.layers.FeatureLayerView");
f.FeatureLayerView=function(f){return function(f){function a(){for(var b=[],l=0;l<arguments.length;l++)b[l]=arguments[l];b=f.apply(this,b)||this;b._updatingRequiredFieldsPromise=null;b.effect=null;b.filter=null;b.layer=null;b.requiredFields=[];b.view=null;return b}c.__extends(a,f);a.prototype.initialize=function(){var b=this;D.init(this,"layer.renderer layer.labelingInfo layer.elevationInfo.featureExpressionInfo layer.displayField filter effect layer.timeInfo timeExtent".split(" "),function(){return b._handleRequiredFieldsChange()},
!0)};Object.defineProperty(a.prototype,"availableFields",{get:function(){var b=this.layer,l=this.layer.fields,a=this.requiredFields;return"outFields"in b&&b.outFields?h.fixFields(l,c.__spreadArrays(h.unpackFieldNames(l,b.outFields),a)):h.fixFields(l,a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maximumNumberOfFeatures",{get:function(){return 0},set:function(b){z.error("#maximumNumberOfFeatures\x3d","Setting maximum number of features is not supported")},enumerable:!0,configurable:!0});
Object.defineProperty(a.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return!1},enumerable:!0,configurable:!0});a.prototype.highlight=function(b,a){void 0===a&&(a={});throw Error("missing implementation");};a.prototype.createQuery=function(){var b={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},b=v.isSome(this.filter)?this.filter.createQuery(b):new G(b);this.timeExtent&&(b.timeExtent=b.timeExtent?b.timeExtent.intersection(this.timeExtent):this.timeExtent.clone());
return b};a.prototype.queryFeatures=function(b,a){throw Error("missing implementation");};a.prototype.queryObjectIds=function(b,a){throw Error("missing implementation");};a.prototype.queryFeatureCount=function(b,a){throw Error("missing implementation");};a.prototype.queryExtent=function(b,a){throw Error("missing implementation");};a.prototype._loadArcadeModules=function(b){if(b.get("expressionInfos.length"))return F.loadArcade()};a.prototype._handleRequiredFieldsChange=function(){var b=this,a=this._updateRequiredFields();
this._set("_updatingRequiredFieldsPromise",a);a.then(function(){b._updatingRequiredFieldsPromise===a&&b._set("_updatingRequiredFieldsPromise",null)})};a.prototype._updateRequiredFields=function(){return c.__awaiter(this,void 0,void 0,function(){var b,a,e,u,k,d,f,r,m,g,q,n,p,y,A;return c.__generator(this,function(c){switch(c.label){case 0:if(!this.layer||!this.view)return[2];b="3d"===this.view.type;a=this;u=e=a.layer;k=u.fields;d=u.objectIdField;f=u.renderer;r=u.displayField;m=e.featureReduction;g=
new Set;return[4,w.eachAlways([f?f.collectRequiredFields(g,k):null,h.collectLabelingFields(g,e),b?h.collectElevationFields(g,e):null,v.isSome(this.filter)?h.collectFilterFields(g,e,this.filter):null,this.effect?h.collectFilterFields(g,e,this.effect.filter):null,m?h.collectFeatureReductionFields(g,e,m):null])];case 1:q=c.sent();e.timeInfo&&this.timeExtent&&h.collectFields(g,e.fields,[e.timeInfo.startField,e.timeInfo.endField]);n=0;for(p=q;n<p.length;n++)y=p[n],y.error&&z.error(y.error);h.collectField(g,
k,d);b&&r&&h.collectField(g,k,r);A=C.valuesOfSet(g).sort();this._set("requiredFields",A);return[2]}})})};a.prototype.validateFetchPopupFeatures=function(b){var a=this.layer;if(!this.layer.popupEnabled)return new t("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:a});if(!x.getFetchPopupTemplate(this.layer,b))return new t("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:a})};a.prototype.fetchClientPopupFeatures=function(b){return c.__awaiter(this,
void 0,void 0,function(){var a,e,d,k,f,t,r,m,g,q,n,p;return c.__generator(this,function(c){switch(c.label){case 0:a=v.isSome(b)?b.clientGraphics:null;if(!a||0===a.length)return[2,w.resolve([])];e=[];d=[];k=this.layer;f=x.getFetchPopupTemplate(k,b);return v.isSome(f)?[4,this._loadArcadeModules(f)]:[2,w.resolve([])];case 1:return r=(t=c.sent())&&t.arcadeUtils.hasGeometryOperations(f),[4,this.createPopupQuery(b)];case 2:m=c.sent();g=h.unpackFieldNames(k.fields,m.outFields);q=0;for(n=a;q<n.length;q++)p=
n[q],r||!h.featureHasFields(g,p)?d.push(p):e.push(p);if("stream"===k.type||0===d.length)return[2,w.resolve(e)];m.objectIds=d.map(function(a){return a.attributes[k.objectIdField]});return[2,k.queryFeatures(m).then(function(a){return e.concat(a.features)}).catch(function(){return d})]}})})};a.prototype.createPopupQuery=function(a){return c.__awaiter(this,void 0,void 0,function(){var b,e,d;return c.__generator(this,function(c){switch(c.label){case 0:return b=this.layer,e=b.createQuery(),e.returnGeometry=
!0,e.returnZ=!0,e.returnM=!0,d=e,[4,x.getRequiredFields(this.layer,x.getFetchPopupTemplate(this.layer,a))];case 1:return d.outFields=c.sent(),e.outSpatialReference=this.view.spatialReference,[2,e]}})})};a.prototype.canResume=function(){var a;return!f.prototype.canResume.call(this)||(null===(a=this.timeExtent)||void 0===a?0:a.isEmpty)?!1:!0};c.__decorate([d.property()],a.prototype,"_updatingRequiredFieldsPromise",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["layer.outFields?","requiredFields"]})],
a.prototype,"availableFields",null);c.__decorate([d.property({type:H})],a.prototype,"effect",void 0);c.__decorate([d.property({type:I})],a.prototype,"filter",void 0);c.__decorate([d.property(E.combinedViewLayerTimeExtentProperty)],a.prototype,"timeExtent",void 0);c.__decorate([d.property()],a.prototype,"layer",void 0);c.__decorate([d.property({type:Number})],a.prototype,"maximumNumberOfFeatures",null);c.__decorate([d.property({readOnly:!0,type:Boolean})],a.prototype,"maximumNumberOfFeaturesExceeded",
null);c.__decorate([d.property({readOnly:!0})],a.prototype,"requiredFields",void 0);c.__decorate([d.property({dependsOn:["timeExtent"]})],a.prototype,"suspended",void 0);c.__decorate([d.property()],a.prototype,"view",void 0);return a=c.__decorate([d.subclass("esri.views.layers.FeatureLayerView")],a)}(f)}});