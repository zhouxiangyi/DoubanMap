// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(r,t){Object.defineProperty(t,"__esModule",{value:!0});t.PIXEL_TOLERANCE=.03;r=function(){function c(){this._path=[]}c.prototype.path=function(){return this._path};c.prototype.addPath=function(a,b){b||a.reverse();Array.prototype.push.apply(this._path,a);b||a.reverse()};c.mergePath=function(a,b){b&&Array.prototype.push.apply(a,b)};c.prototype.startPath=function(a){this._path.push(a)};c.prototype.lineTo=function(a){this._path.push(a)};c.prototype.close=function(){var a=
this._path;1<a.length&&(a[0][0]===a[a.length-1][0]&&a[0][1]===a[a.length-1][1]||a.push([a[0][0],a[0][1]]))};return c}();t.PathHelper=r;r=function(){function c(a,b){void 0===a&&(a=0);void 0===b&&(b=!1)}c.prototype.normalize=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]);a[0]/=b;a[1]/=b};c.prototype.calculateLength=function(a,b){var e=b[0]-a[0];a=b[1]-a[1];return Math.sqrt(e*e+a*a)};c.prototype.calculateSegLength=function(a,b){return this.calculateLength(a[b],a[b+1])};c.prototype.calculatePathLength=
function(a){for(var b=0,e=a?a.length:0,f=0;f<e-1;++f)b+=this.calculateSegLength(a,f);return b};c.prototype.calculatePathArea=function(a){for(var b=0,e=a?a.length:0,f=0;f<e-1;++f)b+=(a[f+1][0]-a[f][0])*(a[f+1][1]+a[f][1]);return b/2};c.prototype.getCoord2D=function(a,b,e){return[a[0]+(b[0]-a[0])*e,a[1]+(b[1]-a[1])*e]};c.prototype.getSegCoord2D=function(a,b,e){return this.getCoord2D(a[b],a[b+1],e)};c.prototype.getAngle=function(a,b,e){return Math.atan2(b[1]-a[1],b[0]-a[0])};c.prototype.getSegAngle=
function(a,b,e){return this.getAngle(a[b],a[b+1],e)};c.prototype.getAngleCS=function(a,b,e){e=b[0]-a[0];a=b[1]-a[1];b=Math.sqrt(e*e+a*a);return 0<b?[e/b,a/b]:[1,0]};c.prototype.getSegAngleCS=function(a,b,e){return this.getAngleCS(a[b],a[b+1],e)};c.prototype.cut=function(a,b,e,f){e=0>=e?a[b]:this.getSegCoord2D(a,b,e);a=1<=f?a[b+1]:this.getSegCoord2D(a,b,f);return[e,a]};c.prototype.addSegment=function(a,b,e){e&&a.push(b[0]);a.push(b[1])};c.prototype.getSubCurve=function(a,b,e){var f=[];return this.appendSubCurve(f,
a,b,e)?f:null};c.prototype.appendSubCurve=function(a,b,e,f){for(var c=b?b.length-1:0,m=0,l=!0,g=0;g<c;){var d=this.calculateSegLength(b,g);if(0!==d){if(l){if(m+d>e){var p=(e-m)/d,q=1,h=!1;m+d>=f&&(q=(f-m)/d,h=!0);(p=this.cut(b,g,p,q))&&this.addSegment(a,p,l);if(h)break;l=!1}}else{if(m+d>f){(p=this.cut(b,g,0,(f-m)/d))&&this.addSegment(a,p,l);break}this.addSegment(a,[b[g],b[g+1]],l)}m+=d}++g}return!0};c.prototype.getCIMPointAlong=function(a,b){for(var e=a?a.length-1:0,f=0,c=-1;c<e;){++c;var m=this.calculateSegLength(a,
c);if(0!==m){if(f+m>b)return this.getCoord2D(a[c],a[c+1],(b-f)/m);f+=m}}return null};c.prototype.isEmpty=function(a,b){if(!a||1>=a.length)return!0;for(var e=a?a.length-1:0,f=-1;f<e;)if(++f,a[f+1][0]!==a[f][0]||a[f+1][1]!==a[f][1]||b&&a[f+1][2]!==a[f][2])return!1;return!0};c.prototype.offset=function(a,b,e,f,c){c;if(!a||2>a.length)return null;c=a.length;var m=a[0][0]===a[c-1][0]&&a[0][1]===a[c-1][1];if(m){if(3>a.length)return null;--c}for(var l=[],g=m?a[c-1]:null,d=a[0],p=0;p<c;p++){var q=p===c-1?
m?a[0]:null:a[p+1];if(g)if(q){var h=[q[0]-d[0],q[1]-d[1]];this.normalize(h);g=[d[0]-g[0],d[1]-g[1]];this.normalize(g);var k=g[0]*h[1]-g[1]*h[0],n=g[0]*h[0]+g[1]*h[1];if(0<=k===0>=b)k=[h[0]-g[0],h[1]-g[1]],this.normalize(k),n=Math.sqrt((1+n)/2),h=-Math.abs(b)/n,l.push([d[0]-k[0]*h,d[1]-k[1]*h]);else switch(e){case "Mitered":if(n=Math.sqrt((1+n)/2),0<n&&1/n<f){k=[h[0]-g[0],h[1]-g[1]];this.normalize(k);h=Math.abs(b)/n;l.push([d[0]-k[0]*h,d[1]-k[1]*h]);break}case "Bevelled":l.push([d[0]+g[1]*b,d[1]-g[0]*
b]);l.push([d[0]+h[1]*b,d[1]-h[0]*b]);break;case "Rounded":l.push([d[0]+g[1]*b,d[1]-g[0]*b]);for(var n=.2,r=1;5>r;r++,n+=.2)k=[g[1]*(1-n)+h[1]*n,-g[0]*(1-n)-h[0]*n],this.normalize(k),l.push([d[0]+k[0]*b,d[1]+k[1]*b]);l.push([d[0]+h[1]*b,d[1]-h[0]*b]);break;default:0>k?(l.push([d[0]+(g[1]+g[0])*b,d[1]+(g[1]-g[0])*b]),l.push([d[0]+(h[1]-h[0])*b,d[1]-(h[0]+h[1])*b])):(n=Math.sqrt((1+Math.abs(n))/2),k=[h[0]-g[0],h[1]-g[1]],this.normalize(k),h=b/n,l.push([d[0]-k[0]*h,d[1]-k[1]*h]))}}else k=[d[0]-g[0],
d[1]-g[1]],this.normalize(k),l.push([d[0]+k[1]*b,d[1]-k[0]*b]);else k=[q[0]-d[0],q[1]-d[1]],this.normalize(k),l.push([d[0]+k[1]*b,d[1]-k[0]*b]);g=d;d=q}m&&l.push([l[0][0],l[0][1]]);return l};return c}();t.CurveHelper=r});