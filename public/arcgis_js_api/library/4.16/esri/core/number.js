// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../core/string","../intl/locale"],function(z,g,v,l,w){function n(b){b||(b=w.getLocale());var a=b in p;if(!a){var c=b.split("-");1<c.length&&c[0]in p&&(b=c[0],a=!0);a||(b="en")}b=p[b];a=b[2];return{decimal:b[0],group:b[1],pattern:void 0===a?"#,##0.###":a}}function x(b,a,c){c=c||{};!0===c.places&&(c.places=0);Infinity===c.places&&(c.places=6);a=a.split(".");var d="string"===typeof c.places&&c.places.indexOf(","),e=c.places;d?e=c.places.substring(d+1):0<=e||(e=(a[1]||
[]).length);0>c.round||(b=Number(b.toFixed(Number(e))));b=String(Math.abs(b)).split(".");var f=b[1]||"";a[1]||c.places?(d&&(c.places=c.places.substring(0,d)),d=void 0!==c.places?c.places:a[1]&&a[1].lastIndexOf("0")+1,d>f.length&&(b[1]=l.padEnd(f,Number(d),"0")),e<f.length&&(b[1]=f.substr(0,Number(e)))):b[1]&&b.pop();e=a[0].replace(",","");d=e.indexOf("0");-1!==d&&(d=e.length-d,d>b[0].length&&(b[0]=l.padStart(b[0],d,"0")),-1===e.indexOf("#")&&(b[0]=b[0].substr(b[0].length-d)));var e=a[0].lastIndexOf(","),
q,m;-1!==e&&(q=a[0].length-e-1,a=a[0].substr(0,e),e=a.lastIndexOf(","),-1!==e&&(m=a.length-e-1));a=[];for(e=b[0];e;)d=e.length-q,a.push(0<d?e.substr(d):e),e=0<d?e.slice(0,d):"",m&&(q=m,m=void 0);b[0]=a.reverse().join(c.group||",");return b.join(c.decimal||".")}function r(b){b=b||{};var a=n(b.locale),c=b.pattern||a.pattern,d=a.group,e=a.decimal,f=1;if(-1!==c.indexOf("%"))f/=100;else if(-1!==c.indexOf("\u2030"))f/=1E3;else if(-1!==c.indexOf("\u00a4"))throw Error("currency notation not supported");a=
c.split(";");1===a.length&&a.push("-"+a[0]);return{regexp:k(a,function(a){a="(?:"+l.escapeRegExpString(a,".")+")";return a.replace(t,function(a){var c={signed:!1,separator:b.strict?d:[d,""],fractional:b.fractional,decimal:e,exponent:!1};a=a.split(".");var h=b.places;1===a.length&&1!==f&&(a[1]="###");1===a.length||0===h?c.fractional=!1:(void 0===h&&(h=b.pattern?a[1].lastIndexOf("0")+1:Infinity),h&&null==b.fractional&&(c.fractional=!0),!b.places&&h<a[1].length&&(h+=","+a[1].length),c.places=h);a=a[0].split(",");
1<a.length&&(c.groupSize=a.pop().length,1<a.length&&(c.groupSize2=a.pop().length));return"("+y(c)+")"})},!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:d,decimal:e,factor:f}}function y(b){b=b||{};"places"in b||(b.places=Infinity);"string"!==typeof b.decimal&&(b.decimal=".");"fractional"in b&&!/^0/.test(String(b.places))||(b.fractional=[!0,!1]);"exponent"in b||(b.exponent=[!0,!1]);"eSigned"in b||(b.eSigned=[!0,!1]);var a=u(b),c=k(b.fractional,function(a){var d="";a&&0!==b.places&&(d="\\"+b.decimal,d=Infinity===
b.places?"(?:"+d+"\\d+)?":d+("\\d{"+b.places+"}"));return d},!0),d=k(b.exponent,function(a){return a?"([eE]"+u({signed:b.eSigned})+")":""}),a=a+c;c&&(a="(?:(?:"+a+")|(?:"+c+"))");return a+d}function u(b){b=b||{};"signed"in b||(b.signed=[!0,!1]);"separator"in b?"groupSize"in b||(b.groupSize=3):b.separator="";var a=k(b.signed,function(b){return b?"[-+]":""},!0),c=k(b.separator,function(a){if(!a)return"(?:\\d+)";a=l.escapeRegExpString(a);" "===a?a="\\s":"\u00a0"===a&&(a="\\s\\xa0");var c=b.groupSize,
d=b.groupSize2;return d?(a="(?:0|[1-9]\\d{0,"+(d-1)+"}(?:["+a+"]\\d{"+d+"})*["+a+"]\\d{"+c+"})",0<c-d?"(?:"+a+"|(?:0|[1-9]\\d{0,"+(c-1)+"}))":a):"(?:0|[1-9]\\d{0,"+(c-1)+"}(?:["+a+"]\\d{"+c+"})*)"},!0);return a+c}Object.defineProperty(g,"__esModule",{value:!0});var p={ar:[".",","],bs:[",","."],ca:[",","."],cs:[",","\u00a0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\u00a0"],fi:[",","\u00a0"],fr:[",","\u202f"],
"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\u00a0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\u00a0"],lv:[",","\u00a0"],mk:[",","."],nb:[",","\u00a0"],nl:[",","."],pl:[",","\u00a0"],pt:[",","."],"pt-pt":[",","\u00a0"],ro:[",","."],ru:[",","\u00a0"],sk:[",","\u00a0"],sl:[",","."],sr:[",","."],sv:[",","\u00a0"],th:[".",","],tr:[",","."],uk:[",","\u00a0"],vi:[",","."],zh:[".",","]};g.getCustoms=n;g.format=function(b,
a){a=v.__assign({},a);var c=n(a.locale);a.customs=c;var d=a.pattern||c.pattern;if(isNaN(b)||Infinity===Math.abs(b))return null;a=a||{};var c=a.customs.group,e=a.customs.decimal,d=d.split(";"),f=d[0],d=d[0>b?1:0]||"-"+f;if(-1!==d.indexOf("%"))b*=100;else if(-1!==d.indexOf("\u2030"))b*=1E3;else{if(-1!==d.indexOf("\u00a4"))throw Error("currency notation not supported");if(-1!==d.indexOf("E"))throw Error("exponential notation not supported");}var g=t,f=f.match(g);if(!f)throw Error("unable to find a number expression in pattern: "+
d);!1===a.fractional&&(a.places=0);return d.replace(g,x(b,f[0],{decimal:e,group:c,places:a.places,round:a.round}))};var t=/[#0,]*[#0](?:\.0*#*)?/;g.regexp=function(b){return r(b).regexp};g._parseInfo=r;g.parse=function(b,a){a=r(a);b=(new RegExp("^"+a.regexp+"$")).exec(b);if(!b)return NaN;var c=b[1];if(!b[1]){if(!b[2])return NaN;c=b[2];a.factor*=-1}c=c.replace(new RegExp("["+a.group+"\\s\\xa0]","g"),"").replace(a.decimal,".");return Number(c)*a.factor};var k=function(b,a,c){if(!(b instanceof Array))return a(b);
for(var d=[],e=0;e<b.length;e++)d.push(a(b[e]));b=d.join("|");return"("+(c?"?:":"")+b+")"}});