// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../renderers/support/utils ./support/colors ./support/SymbologyBase".split(" "),function(c,p,d,e,h,k,l){function g(a,b,f){if(a=k[a])return b={name:a.name,tags:a.tags,colors:a[f]||h.createColors(a.stops,f),opacity:b.fillOpacity,outline:b.outline},m(b)}function m(a){return{name:a.name,tags:d.__spreadArrays(a.tags),colors:a.colors.map(function(a){return new e(a)}),outline:{color:new e(a.outline.color),width:a.outline.width},opacity:a.opacity}}c="vibrant-rainbow cat-dark predominant-v2 predominant-v1 predominance-race desert-blooms tropical-bliss under-the-sea ocean-bay cat-light predominant-v4 predominance-money predominant-v3 predominance-race-ethnic pastel-chalk predominance-rainbow predominance-sequence".split(" ");
var n={default:{name:"default",label:"Default",description:"Default theme for visualizing features using the density of randomly placed dots.",schemes:{default:{light:{primary:"predominant-v5",secondary:c,common:{outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8}},dark:{primary:"predominant-v5",secondary:c,common:{outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8}}}}}};return new (function(a){function b(){return a.call(this,{themeDictionary:n})||this}d.__extends(b,a);b.prototype.getSchemes=
function(f){var a=this.getRawSchemes({theme:"default",basemap:f.basemap,basemapTheme:f.basemapTheme});if(a){var b=a.schemesInfo,e=a.basemapId,a=a.basemapTheme,c=b.common,d=f.numColors;return{primaryScheme:g(b.primary,c,d),secondarySchemes:b.secondary.map(function(a){return g(a,c,d)}).filter(Boolean),basemapId:e,basemapTheme:a}}};b.prototype.getSchemeByName=function(a){return this.filterSchemesByName(a)};b.prototype.getSchemesByTag=function(a){return this.filterSchemesByTag(a)};b.prototype.cloneScheme=
function(a){if(a)return a=d.__assign({},a),a.colors&&(a.colors=a.colors.map(function(a){return new e(a)})),a.outline&&(a.outline={color:a.outline.color&&new e(a.outline.color),width:a.outline.width}),a};return b}(l))});