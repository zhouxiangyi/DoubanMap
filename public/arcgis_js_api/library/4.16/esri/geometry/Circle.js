// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/unitUtils ../core/accessorSupport/decorators ./Point ./Polygon ./support/geodesicUtils ./support/webMercatorUtils ./support/WKIDUnitConversion".split(" "),function(t,u,e,n,g,q,l,r,p,h){return function(k){function c(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=k.apply(this,a)||this;a.center=null;a.geodesic=!1;a.numberOfPoints=60;a.radius=1E3;a.radiusUnit="meters";return a}e.__extends(c,k);m=c;c.prototype.normalizeCtorArgs=function(a,b){if(!a||
!a.center){if(a&&a.rings)return k.prototype.normalizeCtorArgs.call(this,a,b);a={center:a}}return e.__assign(e.__assign(e.__assign({},k.prototype.normalizeCtorArgs.call(this)),a),b)};c.prototype.initialize=function(){var a=this.center,b=this.numberOfPoints;this.hasZ=a&&a.hasZ;if(0===this.rings.length&&a){var c=n.convertUnit(this.radius,this.radiusUnit,"meters"),d=a.spatialReference,f="geographic";if(d.isWebMercator)f="webMercator";else if(null!=h[d.wkid]||d.wkt&&0===d.wkt.indexOf("PROJCS"))f="projected";
if(this.geodesic){d=void 0;switch(f){case "webMercator":d=p.webMercatorToGeographic(a);break;case "projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case "geographic":d=a}a=this._createGeodesicCircle(d,c,b);"webMercator"===f&&(a=p.geographicToWebMercator(a))}else d=void 0,"webMercator"===f||"projected"===f?d=c/this._convert2Meters(1,a.spatialReference):"geographic"===f&&(d=n.lengthToDegrees(c,"meters")),
a=this._createPlanarCircle(a,d,b);this.spatialReference=a.spatialReference;this.addRing(a.rings[0])}};c.prototype.clone=function(){var a=this.numberOfPoints,b=this.radius,c=this.radiusUnit,d=this.geodesic;return new m({center:this.center.clone(),numberOfPoints:a,radius:b,radiusUnit:c,geodesic:d})};c.prototype._createGeodesicCircle=function(a,b,c){for(var d=0,f=[];360>d;){var e=[0,0];r.directGeodeticSolver(e,[a.x,a.y],d,b);this.hasZ&&e.push(a.z);f.push(e);d+=360/c}f.push(f[0]);return new l(f)};c.prototype._createPlanarCircle=
function(a,b,c){for(var d=0,f=[];d<2*Math.PI;){var e=[a.x+Math.cos(-d)*b,a.y+Math.sin(-d)*b];this.hasZ&&e.push(a.z);f.push(e);d+=Math.PI/(c/2)}f.push(f[0]);return new l({spatialReference:a.spatialReference,rings:[f]})};c.prototype._convert2Meters=function(a,b){if(null!=h[b.wkid])b=h.values[h[b.wkid]];else{b=b.wkt;var c=b.lastIndexOf(",")+1,d=b.lastIndexOf("]]");b=parseFloat(b.substring(c,d))}return a*b};var m;e.__decorate([g.property({type:q})],c.prototype,"center",void 0);e.__decorate([g.property()],
c.prototype,"geodesic",void 0);e.__decorate([g.property()],c.prototype,"numberOfPoints",void 0);e.__decorate([g.property()],c.prototype,"radius",void 0);e.__decorate([g.property()],c.prototype,"radiusUnit",void 0);return c=m=e.__decorate([g.subclass("esri.geometry.Circle")],c)}(l)});