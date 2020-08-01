// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Accessor ../../../core/accessorSupport/decorators ./directionsUtils ./RouteSection".split(" "),function(m,n,c,k,e,f,l){return function(h){function b(a){a=h.call(this,a)||this;a.routePath=null;return a}c.__extends(b,h);Object.defineProperty(b.prototype,"sections",{get:function(){var a=this.routePath;return a?this._createSections(a):[]},enumerable:!0,configurable:!0});b.prototype._createSections=function(a){a=this._filterDuplicateStops(a);var b=a.map(function(a,
b){return f.getAssociatedStop(a)?b:-1}).filter(function(a){return-1<a});return b.map(function(g,d){g=f.getAssociatedStop(a[g]).attributes.Name;var c=d===b.length-1?[]:a.slice(b[d]+1,b[d+1]);return new l({name:g,maneuvers:c,open:0===d})})};b.prototype._filterDuplicateStops=function(a){var b;return a.filter(function(a){a=f.getAssociatedStop(a);var c=a===b;b=a;return!a||!c})};c.__decorate([e.property()],b.prototype,"routePath",void 0);c.__decorate([e.property({dependsOn:["routePath"],readOnly:!0})],
b.prototype,"sections",null);return b=c.__decorate([e.subclass("esri.widgets.Directions.support.RouteSections")],b)}(k)});