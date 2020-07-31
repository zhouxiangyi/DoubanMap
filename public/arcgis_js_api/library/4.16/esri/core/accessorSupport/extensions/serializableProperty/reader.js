// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../Logger","../../../object","./type"],function(w,h,p,q,r){function t(a,b){if(1<b)return u(a,b);if(1===b)return k(a);if(l(a)){var d=k(a.prototype.itemType.Type);return function(c,b,e){return(c=d(c,b,e))?new a(c):c}}return g(a)}function g(a){return a.prototype.read?function(b,d,c){if(null==b)return b;d=typeof b;if("object"!==d)v.error("Expected JSON value of type 'object' to deserialize type '"+a.prototype.declaredClass+"', but got '"+d+"'");else return d=new a,d.read(b,
c),d}:a.fromJSON}function m(a,b,d,c){return 0!==c&&Array.isArray(b)?b.map(function(b){return m(a,b,d,c-1)}):a(b,null,d)}function u(a,b){a=g(a);var d=m.bind(null,a);return function(a,f,e){if(null==a)return a;a=d(a,e,b);f=b;for(e=a;0<f&&Array.isArray(e);)f--,e=e[0];if(void 0!==e)for(e=0;e<f;e++)a=[a];return a}}function k(a){var b=g(a);return function(a,c,f){return null==a?a:Array.isArray(a)?a.map(function(a){return b(a,null,f)}):[b(a,null,f)]}}function l(a){return r.isCollection(a)?(a=a.prototype.itemType)&&
a.Type&&"function"===typeof a.Type?n(a.Type):!1:!1}function n(a){return Array.isArray(a)?!1:!!a&&a.prototype&&("read"in a.prototype||"fromJSON"in a||l(a))}Object.defineProperty(h,"__esModule",{value:!0});var v=p.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");h.create=function(a,b,d,c){(!c.read||!c.read.reader&&!1!==c.read.enabled)&&n(a)&&q.setDeepValue("read.reader",t(a,b),c)}});