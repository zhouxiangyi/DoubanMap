// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./GeometryUtils","./MemoryBuffer"],function(k,m,n,v,b){Object.defineProperty(m,"__esModule",{value:!0});var q=new Float32Array(1),u=new Uint32Array(q.buffer);k=function(f){function c(a){var b=f.call(this,a?20:12)||this;b._isDataDriven=a;return b}n.__extends(c,f);c.prototype.isDataDriven=function(){return this._isDataDriven};c.prototype.add=function(a,c,d,e,f,l,g,r){var h=this.array;a=b.i1616to32(a,c);h.push(a);a=b.i8888to32(Math.round(31*d),Math.round(31*e),Math.round(31*
f),Math.round(31*l));h.push(a);a=b.i1616to32(g,0);h.push(a);if(this._isDataDriven){if(!r)throw Error("Expecting data driven values.");d=r.color;e=d[3]*r.opacity*255;h.push(b.i8888to32(d[0]*e,d[1]*e,d[2]*e,e));q[0]=r.size;h.push(u[0])}};return c}(b);m.LineVertexBuffer=k;k=function(f){function c(a){var b=f.call(this,a?8:4)||this;b._isDataDriven=a;return b}n.__extends(c,f);c.prototype.isDataDriven=function(){return this._isDataDriven};c.prototype.add=function(a,c,d){var e=this.array;e.push(b.i1616to32(a,
c));if(this._isDataDriven){if(!d)throw Error("Expecting data driven values.");a=d.color;d=a[3]*d.opacity*255;e.push(b.i8888to32(a[0]*d,a[1]*d,a[2]*d,d))}};return c}(b);m.FillVertexBuffer=k;k=function(f){function c(a){var b=f.call(this,a?12:8)||this;b._isDataDriven=a;return b}n.__extends(c,f);c.prototype.isDataDriven=function(){return this._isDataDriven};c.prototype.add=function(a,c,d,e,f,l,g){var h=this.array,k=this.index;a=b.i1616to32(a,c);h.push(a);a=b.i8888to32(Math.round(15*d),Math.round(15*e),
f,l);h.push(a);if(this._isDataDriven){if(!g)throw Error("Expecting data driven values.");d=g.color;g=d[3]*g.opacity*255;h.push(b.i8888to32(d[0]*g,d[1]*g,d[2]*g,g))}return k};return c}(b);m.OutlineVertexBuffer=k;k=function(f){function c(a){var b=f.call(this,a?28:20)||this;b._isDataDriven=a;return b}n.__extends(c,f);c.prototype.isDataDriven=function(){return this._isDataDriven};c.prototype.add=function(a,c,d,e,f,l,g,k,m,p,n,w,t){var h=this.array;a=b.i1616to32(a,c);h.push(a);a=b.i1616to32(Math.round(8*
d),Math.round(8*e));h.push(a);a=b.i8888to32(f/4,l/4,0,0);h.push(a);a=b.i8888to32(Math.ceil(10*w),v.radToByte(g),10*p,Math.min(10*n,255));h.push(a);a=b.i8888to32(k,m,0,0);h.push(a);if(this._isDataDriven){if(!t)throw Error("Expecting data driven values.");d=t.color;e=d[3]*t.opacity*255;h.push(b.i8888to32(d[0]*e,d[1]*e,d[2]*e,e));q[0]=t.size;h.push(u[0])}};return c}(b);m.SymbolVertexBuffer=k;k=function(f){function c(){return f.call(this,16)||this}n.__extends(c,f);c.prototype.add=function(a,c,d,f,k,l,
g,m,n,p,q){var e=this.array;a=b.i1616to32(2*a+d,2*c+f);e.push(a);g=l[3]*g*255;a=b.i8888to32(l[0]*g,l[1]*g,l[2]*g,g);e.push(a);l=p[3]*q*255;a=b.i8888to32(p[0]*l,p[1]*l,p[2]*l,l);e.push(a);a=b.i8888to32(Math.min(32*m,255),Math.min(4*n,255),Math.min(k,255),0);e.push(a)};return c}(b);m.CircleVertexBuffer=k});