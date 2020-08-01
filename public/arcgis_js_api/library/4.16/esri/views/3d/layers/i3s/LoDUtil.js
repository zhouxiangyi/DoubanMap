// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/vec3"],function(t,m,l){function q(d,c,e){for(;0<d;){var a=c.indexOf(d);if(0<=a)return a;d=e.getParentId(d)}return c.indexOf(d)}function r(d,c,e){for(var a=[c.remove[0]],b=[];1===a.length;)for(var h=a.pop(),g=b.length=0;g<c.load.length;g++){for(var f=c.load[g],k=e.getParentId(f);k!==h;)f=k,k=e.getParentId(f);k=a.indexOf(f);0>k&&(k=a.length,a.push(f),b.push([]));b[k].push(c.load[g])}c.load=a;for(g=0;g<a.length;g++)1<b[g].length?d.push({remove:[a[g]],
load:b[g]}):a[g]=b[g][0]}Object.defineProperty(m,"__esModule",{value:!0});m.nodeDiff=function(d,c,e){for(var a=0;a<c.length;a++)n[a]=!1,h[a]=null;for(a=0;a<d.length;a++)p[a]=!1,f[a]=null;for(a=0;a<c.length;a++){var b=q(c[a],d,e);0<=b&&(n[a]=!0,null!=f[b]?f[b].push(c[a]):f[b]=[c[a]])}for(a=0;a<d.length;a++)b=q(d[a],c,e),0<=b&&(p[a]=!0,null!=h[b]?h[b].push(d[a]):h[b]=[d[a]]);e=[];for(a=0;a<d.length;a++)null!=f[a]||p[a]||e.push({load:[],remove:[d[a]]});for(a=0;a<c.length;a++)null!=h[a]||n[a]||e.push({load:[c[a]],
remove:[]});for(a=0;a<c.length;a++)null!=h[a]&&(1<h[a].length||h[a][0]!==c[a])&&e.push({load:[c[a]],remove:h[a]});for(a=0;a<d.length;a++)null!=f[a]&&(1<f[a].length||f[a][0]!==d[a])&&e.push({load:f[a],remove:[d[a]]});return e};var p=[!1],f=[null],n=[!1],h=[null];m.sortFrontToBack=function(d,c,e){return d.sort(function(a,b){if(0===a.load.length&&0===b.load.length)return 0;if(0===a.load.length)return-1;if(0===b.load.length)return 1;if(0===a.remove.length&&0===b.remove.length)return a=e.getRenderCenter(a.load[0]),
b=e.getRenderCenter(b.load[0]),l.vec3.dot(a,c)-l.vec3.dot(b,c);if(0===a.remove.length)return-1;if(0===b.remove.length)return 1;if(1===a.load.length&&1===b.load.length)return a=e.getRenderCenter(a.load[0]),b=e.getRenderCenter(b.load[0]),l.vec3.dot(a,c)-l.vec3.dot(b,c);if(1===a.load.length)return-1;if(1===b.load.length)return 1;a=e.getRenderCenter(a.remove[0]);b=e.getRenderCenter(b.remove[0]);return l.vec3.dot(a,c)-l.vec3.dot(b,c)})};m.splitWorkEntries=function(d,c,e){for(var a=0;a<d.length;++a){var b=
d[a];b.load.length>c&&1===b.remove.length&&r(d,b,e)}};m.splitWorkEntry=r});