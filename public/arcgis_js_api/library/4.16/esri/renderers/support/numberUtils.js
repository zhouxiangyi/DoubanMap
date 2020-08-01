// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../intl"],function(x,g,l){function r(a,b){return a-b}function t(a,b){var c;c=Number(a.toFixed(b));c<a?a=c+1/Math.pow(10,b):(a=c,c-=1/Math.pow(10,b));c=Number(c.toFixed(b));a=Number(a.toFixed(b));return[c,a]}function u(a,b,c,f,d){a=k(a,b,c,f);b=null==a.next||a.next<=d;return(null==a.previous||a.previous<=d)&&b||a.previous+a.next<=2*d}function m(a){a=String(a);var b=a.match(v);if(b&&b[1])return{integer:b[1].split("").length,fractional:b[3]?b[3].split("").length:0};if(-1<
a.toLowerCase().indexOf("e")&&(b=a.split("e"),a=b[0],b=b[1],a&&b)){a=Number(a);var b=Number(b),c=0<b;c||(b=Math.abs(b));a=m(a);c?(a.integer+=b,a.fractional=b>a.fractional?0:a.fractional-b):(a.fractional+=b,a.integer=b>a.integer?1:a.integer-b);return a}return{integer:0,fractional:0}}function k(a,b,c,f){var d={previous:null,next:null};if(null!=c){var e=a-c;d.previous=Math.floor(Math.abs(100*(b-c-e)/e))}null!=f&&(e=f-a,d.next=Math.floor(Math.abs(100*(f-b-e)/e)));return d}Object.defineProperty(g,"__esModule",
{value:!0});var v=/^-?(\d+)(\.(\d+))?$/i;g.numDigits=m;g.percentChange=k;g.round=function(a,b){void 0===b&&(b={});a=a.slice(0);var c=b.tolerance,c=void 0===c?2:c,f=b.strictBounds,f=void 0===f?!1:f;b=b.indexes;b=void 0===b?a.map(function(a,b){return b}):b;b.sort(r);for(var d=0;d<b.length;d++){var e=b[d],g=a[e],k=0===e?null:a[e-1],l=e===a.length-1?null:a[e+1],q=m(g).fractional;if(q){for(var n=0,h=!1,p=void 0;n<=q&&!h;)h=t(g,n),p=f&&0===d?h[1]:h[0],h=u(g,p,k,l,c),n++;h&&(a[e]=p)}}return a};var w={maximumFractionDigits:20};
g.format=function(a){return l.formatNumber(a,w)}});