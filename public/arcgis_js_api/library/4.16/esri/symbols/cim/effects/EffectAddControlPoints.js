// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/lang","../../../geometry/support/jsonUtils","../CIMCursor"],function(f,g,r,c,t){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function b(){}b.local=function(){null===b.instance&&(b.instance=new b);return b.instance};b.prototype.execute=function(a,b,d){return new u(a,b,d)};b.instance=null;return b}();g.EffectAddControlPoints=f;var u=function(){function b(a,b,d){this._inputGeometries=a;this._angleTolerance=void 0!==b.angleTolerance?b.angleTolerance:
120;this._maxCosAngle=Math.cos((1-Math.abs(this._angleTolerance)/180)*Math.PI)}b.prototype.next=function(){for(var a=this._inputGeometries.next();a;){if(c.isPolygon(a))return this._isClosed=!0,a=r.clone(a),this._processMultipath(a.rings),a;if(c.isPolyline(a))return this._isClosed=!1,a=r.clone(a),this._processMultipath(a.paths),a;if(c.isExtent(a)){if(this._maxCosAngle)return a;this._isClosed=!0;a=[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]];this._processPath(a);
return{rings:[a]}}a=this._inputGeometries.next()}return null};b.prototype._processMultipath=function(a){if(a)for(var b=0;b<a.length;b++)this._processPath(a[b])};b.prototype._processPath=function(a){if(a){var b=a.length,d=a[0],c=void 0,p=void 0,h=void 0,f=void 0,g=void 0,q=void 0;this._isClosed&&++b;for(var e=1;e<b;++e){var n=void 0,n=this._isClosed&&e===b-1?a[0]:a[e],k=n[0]-d[0],l=n[1]-d[1],m=Math.sqrt(k*k+l*l);1<e&&0<m&&0<h&&(c*k+p*l)/m/h<=this._maxCosAngle&&t.setId(d,1);1===e&&(f=k,g=l,q=m);0<m&&
(d=n,c=k,p=l,h=m)}this._isClosed&&0<h&&0<q&&(c*f+p*g)/q/h<=this._maxCosAngle&&t.setId(a[0],1)}};return b}()});