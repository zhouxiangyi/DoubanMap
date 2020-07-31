// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Logger ../../../../../core/mathUtils ../../../../../core/screenUtils ./visualVariableSimpleUtils".split(" "),function(m,c,q,r,n,t,u){function p(a,b){var d=!!a.maxScale,f=!!a.minScale&&b.scaleToZoom(a.minScale)||0;b=d&&b.scaleToZoom(a.maxScale)||255;return{deconflictionStrategy:a.deconflictionStrategy,minZoom:n.clamp(Math.floor(10*f),0,255),maxZoom:n.clamp(Math.floor(10*b),0,255)}}function v(a){return function(b){return t.pt2px(u.getSizeForValueSimple(b,
a))}}function l(a){if(!a)return null;for(var b=0;b<a.length;b++){var d=a[b];if("size"===d.type)return v(d)}return null}Object.defineProperty(c,"__esModule",{value:!0});var w=function(a,b){return a.order-b.order},x=function(a,b){return a.index-b.index},y=r.getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");c.createLabelVVEvaluator=l;m=function(){function a(b,a,f,k){var d=this;this._vvHandle=null;var e=b.layer,h=e.geometryType,g=e.labelingInfo,c=e.renderer;c&&(this.vvEval=l("visualVariables"in
c&&c.visualVariables));this._vvHandle=e.watch("renderer",function(a){a&&(d.vvEval=l("visualVariables"in a&&a.visualVariables))});e=(e=e.featureReduction)&&"cluster"===e.type&&e.labelingInfo;g=(g||[]).map(function(a){return p(a,k)});e=(e||[]).map(function(a){return p(a,k)});this.layerView=b;this.geometryType=h;this.index=a;this.order=f;this.zoomRanges=q.__spreadArrays(g,e);this.layerView=b}a.prototype.hasVV=function(){return!!this.vvEval};a.prototype.allOrNothing=function(){return"polyline"!==this.geometryType};
a.prototype.destroy=function(){this._vvHandle.remove()};a.create=function(b,d,f,k){f=f.sort(w);for(var c=!1,e=-1,h=0;h<f.length;h++){var g=f[h];!c&&g.order>d&&(e=g.index,c=!0);c&&g.index++}c||(e=f.length);return new a(b,e,d,k)};a.delete=function(a,d){for(var b=d.sort(x),c=a+1;c<b.length;c++)d[c].index--;d[a].destroy();d.splice(a,1)};a.find=function(a,d){for(var b=0;b<d.length;b++){var c=d[b];if(c.index===a)return c}y.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!");return null};
return a}();c.default=m});