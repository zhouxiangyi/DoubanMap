// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../ensureType","../metadata"],function(m,d,f,e){function g(a){var b="__accessorMetadata__"in a?f.ensureType(a):a;return function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];a.push(b);if("number"===typeof a[2])throw Error("Using @cast has parameter decorator is not supported since 4.16");return h.apply(this,a)}}function h(a,b,d,c){e.getOwnPropertyMetadata(a,b).cast=c}function k(a){return function(b,d){e.getOwnPropertyMetadata(b,a).cast=b[d]}}Object.defineProperty(d,
"__esModule",{value:!0});var l=Object.prototype.toString;d.cast=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];if(3!==a.length||"string"!==typeof a[1]){if(1===a.length&&"[object Function]"===l.call(a[0]))return g(a[0]);if(1===a.length&&"string"===typeof a[0])return k(a[0])}}});