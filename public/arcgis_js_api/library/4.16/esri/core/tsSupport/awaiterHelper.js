// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["../Logger","../deprecate"],function(d,e){e.deprecated(d.getLogger("esri.core.tsSupport.awaiterHelper"),"helpers from esri.core.tsSupport are no longer required",{replacement:"use helpers from TSLib by enabling the TypeScript compiler importHelpers option",version:"4.16",see:"https://github.com/Microsoft/tslib#readme"});return function(d,e,a,b){function k(c){return c instanceof a?c:new a(function(a){a(c)})}return new (a||(a=Promise))(function(a,h){function c(a){try{f(b.next(a))}catch(g){h(g)}}
function l(a){try{f(b["throw"](a))}catch(g){h(g)}}function f(b){b.done?a(b.value):k(b.value).then(c,l)}f((b=b.apply(d,e||[])).next())})}});