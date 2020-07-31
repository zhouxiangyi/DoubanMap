// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(m,b){function d(a){if(a)return null!=a.listMode?a.listMode:void 0}function e(a){if(a)return null!=a.minScale?a.minScale:void 0}function f(a){if(a)return null!=a.maxScale?a.maxScale:void 0}function g(a){if(a&&a.listMode!==h.hideChildren&&"wmts"!==a.type)return"group"===a.type?"layers":"sublayers"}function k(a,l){a&&a.sort(function(a,b){a=l.indexOf(a.uid);b=l.indexOf(b.uid);return a>b?-1:a<b?1:0})}Object.defineProperty(b,"__esModule",{value:!0});var h={hide:"hide",
hideChildren:"hide-children"};b.findLayerListMode=d;b.findLayerMinScale=e;b.findLayerMaxScale=f;b.findLayerVisibilityMode=function(a){if(!a)return"inherited";var b=a.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"===typeof b)return b?"independent":"inherited";b=a.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"===typeof b?b?"independent":"inherited":null!=a.visibilityMode?a.visibilityMode:"independent"};b.getNormalizedChildLayerProperty=g;b.canSortSublayers=
function(a){a=a&&(a.get("layer.layer")||a.layer);if(!a)return!1;a=a.get("capabilities.exportMap.supportsSublayersChanges");return"boolean"===typeof a?a:!0};b.canDisplayLayer=function(a){return d(a)!==h.hide};b.isLayerOutsideScaleRange=function(a,b){if(!a||isNaN(b))return!1;var c=e(a);a=f(a);c=!isNaN(c)&&0<c&&b>=c;b=!isNaN(a)&&0<a&&b<=a;return c||b};b.sortLayersToIds=k;b.sortChildLayersToIds=function(a,b){if(a=null===a||void 0===a?void 0:a.layer){var c=g(a);c&&(a=a.get(c),k(a,b))}};b.getItemLayers=
function(a){return(a=null===a||void 0===a?void 0:a.layer)&&"group"===a.type?a.layers:null};b.findSelectedItem=function(a,b){var c,d=null===(c=a.layer)||void 0===c?void 0:c.uid;return d&&b.find(function(a){var b;return(null===(b=a.layer)||void 0===b?void 0:b.uid)===d})}});