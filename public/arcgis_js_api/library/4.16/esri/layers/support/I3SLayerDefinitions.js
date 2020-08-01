// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(g,f,b,e,c){Object.defineProperty(f,"__esModule",{value:!0});g=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.nodesPerPage=null;a.rootIndex=0;a.lodSelectionMetricType=null;return a}b.__extends(a,d);b.__decorate([c.property({type:Number})],a.prototype,"nodesPerPage",void 0);b.__decorate([c.property({type:Number})],a.prototype,"rootIndex",void 0);b.__decorate([c.property({type:String})],
a.prototype,"lodSelectionMetricType",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SNodePageDefinition")],a)}(e.JSONSupport);f.I3SNodePageDefinition=g;var k=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.factor=1;return a}b.__extends(a,d);b.__decorate([c.property({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],a.prototype,"id",void 0);b.__decorate([c.property({type:Number})],a.prototype,"factor",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SMaterialTexture")],
a)}(e.JSONSupport);f.I3SMaterialTexture=k;var l=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.baseColorFactor=[1,1,1,1];a.baseColorTexture=null;a.metallicRoughnessTexture=null;a.metallicFactor=1;a.roughnessFactor=1;return a}b.__extends(a,d);b.__decorate([c.property({type:[Number]})],a.prototype,"baseColorFactor",void 0);b.__decorate([c.property({type:k})],a.prototype,"baseColorTexture",void 0);b.__decorate([c.property({type:k})],a.prototype,"metallicRoughnessTexture",void 0);
b.__decorate([c.property({type:Number})],a.prototype,"metallicFactor",void 0);b.__decorate([c.property({type:Number})],a.prototype,"roughnessFactor",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SMaterialPBRMetallicRoughness")],a)}(e.JSONSupport);f.I3SMaterialPBRMetallicRoughness=l;g=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.alphaMode="opaque";a.alphaCutoff=.25;a.doubleSided=!1;a.cullFace="none";a.normalTexture=null;a.occlusionTexture=null;a.emissiveTexture=
null;a.emissiveFactor=null;a.pbrMetallicRoughness=null;return a}b.__extends(a,d);b.__decorate([c.enumeration({opaque:"opaque",mask:"mask",blend:"blend"})],a.prototype,"alphaMode",void 0);b.__decorate([c.property({type:Number})],a.prototype,"alphaCutoff",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"doubleSided",void 0);b.__decorate([c.enumeration({none:"none",back:"back",front:"front"})],a.prototype,"cullFace",void 0);b.__decorate([c.property({type:k})],a.prototype,"normalTexture",
void 0);b.__decorate([c.property({type:k})],a.prototype,"occlusionTexture",void 0);b.__decorate([c.property({type:k})],a.prototype,"emissiveTexture",void 0);b.__decorate([c.property({type:[Number]})],a.prototype,"emissiveFactor",void 0);b.__decorate([c.property({type:l})],a.prototype,"pbrMetallicRoughness",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SMaterialDefinition")],a)}(e.JSONSupport);f.I3SMaterialDefinition=g;var m=function(d){function a(){return null!==d&&d.apply(this,
arguments)||this}b.__extends(a,d);b.__decorate([c.property({type:String,json:{read:{source:["name","index"],reader:function(a,b){return null!=a?a:""+b.index}}}})],a.prototype,"name",void 0);b.__decorate([c.enumeration({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2"})],a.prototype,"format",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3STextureFormat")],a)}(e.JSONSupport);f.I3STextureFormat=m;g=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.atlas=!1;
return a}b.__extends(a,d);b.__decorate([c.property({type:[m]})],a.prototype,"formats",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"atlas",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3STextureSetDefinition")],a)}(e.JSONSupport);f.I3STextureSetDefinition=g;var h=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}b.__extends(a,d);b.__decorate([c.enumeration({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],a.prototype,
"type",void 0);b.__decorate([c.property({type:Number})],a.prototype,"component",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SGeometryAttribute")],a)}(e.JSONSupport);f.I3SGeometryAttribute=h;var n=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}b.__extends(a,d);b.__decorate([c.enumeration({draco:"draco"})],a.prototype,"encoding",void 0);b.__decorate([c.property({type:[String]})],a.prototype,"attributes",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SGeometryCompressedAttributes")],
a)}(e.JSONSupport);f.I3SGeometryCompressedAttributes=n;g=function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.offset=0;return a}b.__extends(a,d);b.__decorate([c.property({type:Number})],a.prototype,"offset",void 0);b.__decorate([c.property({type:h})],a.prototype,"position",void 0);b.__decorate([c.property({type:h})],a.prototype,"normal",void 0);b.__decorate([c.property({type:h})],a.prototype,"uv0",void 0);b.__decorate([c.property({type:h})],a.prototype,"color",void 0);b.__decorate([c.property({type:h})],
a.prototype,"uvRegion",void 0);b.__decorate([c.property({type:h})],a.prototype,"featureId",void 0);b.__decorate([c.property({type:h})],a.prototype,"faceRange",void 0);b.__decorate([c.property({type:n})],a.prototype,"compressedAttributes",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SGeometryBuffer")],a)}(e.JSONSupport);f.I3SGeometryBuffer=g;e=function(d){function a(){return null!==d&&d.apply(this,arguments)||this}b.__extends(a,d);b.__decorate([c.enumeration({triangle:"triangle"})],
a.prototype,"topology",void 0);b.__decorate([c.property()],a.prototype,"geometryBuffers",void 0);return a=b.__decorate([c.subclass("esri.layer.support.I3SGeometryDefinition")],a)}(e.JSONSupport);f.I3SGeometryDefinition=e});