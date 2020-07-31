// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/lang","../../../core/maybe","../../support/utils"],function(l,m,k,h,f){return function(){function g(a){this.schemes=this.basemapGroups=this.supportedBasemaps=this.description=this.label=this.name=null;var b=a.label,d=a.description,c=a.schemes;this.name=a.name;this.label=b;this.description=d;this.schemes=c;a=a.basemapGroups||f.defaultBasemapGroups;b=[];if(a)for(var e in a)b=b.concat(a[e]);this.supportedBasemaps=b;this.basemapGroups=a}g.prototype.isBasemapSupported=
function(a){return(a=f.getBasemapId(a,this.supportedBasemaps))&&-1<this.supportedBasemaps.indexOf(a)?!0:!1};g.prototype.getRawSchemes=function(a){var b,d=a.basemap;b=a.basemapTheme;var c=null,e=null;d&&(c=f.getBasemapId(d,this.supportedBasemaps,!1))&&(d=f.getBasemapGroup(c),h.isSome(d)&&(e=d));!c&&b&&(c="dark"===b?"dark-gray":"gray",e=b);c||e||(c="gray",e="light");b=c;c=e;b&&(d=f.getBasemapGroup(b,this.basemapGroups),h.isSome(d)&&(c=d));a=a.geometryType;"multipoint"===a?a="point":"mesh"===a&&(a="polygon");
return{schemesInfo:k.clone((this.schemes[a]||this.schemes["default"])[c]),basemapId:b,basemapTheme:e}};return g}()});