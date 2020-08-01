// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/arrayUtils","../../../core/maybe"],function(h,d,m,f){function k(b,e){var a=0;for(b=b.allSublayers.items;a<b.length;a++){var c=b[a];if((c="building-component"===c.type?c.getFieldDomain(e):null)&&"coded-value"===c.type)return c}return null}function l(b,e){var a,c,d;b=null!==(c=null===(a=b.summaryStatistics)||void 0===a?void 0:a.fields)&&void 0!==c?c:[];var g=e.toLowerCase();return null!==(d=m.find(b,function(b){var a;return(null===(a=b.modelName)||void 0===
a?void 0:a.toLowerCase())===g}))&&void 0!==d?d:null}Object.defineProperty(d,"__esModule",{value:!0});h=function(b){return function(e){var a,c=b.toLowerCase();return null!==(a=e.sublayers.find(function(b){var a;return(null===(a=b.modelName)||void 0===a?void 0:a.toLowerCase())===c}))&&void 0!==a?a:null}};d.findFullModelSublayer=h("fullmodel");d.findOverviewSublayer=h("overview");d.showFullModel=function(b){var e=d.findFullModelSublayer(b);f.isSome(e)&&(e.visible=!0);b=d.findOverviewSublayer(b);f.isSome(b)&&
(b.visible=!1)};d.findFieldInfoByModelName=function(b,e){var a,c=l(b,e);if(f.isNone(c))return null;e=c.fieldName;if(f.isNone(e)||!e)return null;b=k(b,e);for(var d=new Map,g=0,c=null!==(a=c.mostFrequentValues)&&void 0!==a?a:[];g<c.length;g++)a=c[g],"number"===typeof a&&d.set(a,f.isSome(b)?b.getName(a):String(a));return{fieldName:e,fieldValueMap:d}};d.findFieldCodedValueDomain=k;d.findFieldStatisticsByModelName=l});