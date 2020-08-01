// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/compilerUtils ../../core/Error ../../core/JSONSupport ../../core/lang ../../core/Logger ../../core/maybe ../../core/accessorSupport/decorators".split(" "),function(z,A,h,t,u,v,w,x,y,l){var m=x.getLogger("esri.layers.support.PixelBlock");return function(p){function c(b){b=p.call(this,b)||this;b.width=null;b.height=null;b.pixelType="f32";b.validPixelCount=null;b.mask=null;b.maskIsAlpha=!1;b.pixels=null;b.statistics=null;return b}h.__extends(c,p);n=c;c.createEmptyBand=
function(b,a){return new (n.getPixelArrayConstructor(b))(a)};c.getPixelArrayConstructor=function(b){var a;switch(b){case "u1":case "u2":case "u4":case "u8":a=Uint8Array;break;case "u16":a=Uint16Array;break;case "u32":a=Uint32Array;break;case "s8":a=Int8Array;break;case "s16":a=Int16Array;break;case "s32":a=Int32Array;break;case "u32":a=Uint32Array;break;case "f32":a=Float32Array;break;case "f64":a=Float64Array;break;case "c64":case "c128":case "unknown":a=Float32Array;break;default:t.neverReached(b)}return a};
c.prototype.castPixelType=function(b){if(!b)return"f32";b=b.toLowerCase();-1<["u1","u2","u4"].indexOf(b)?b="u8":-1==="unknown u8 s8 u16 s16 u32 s32 f32 f64".split(" ").indexOf(b)&&(b="f32");return b};c.prototype.getPlaneCount=function(){return this.pixels&&this.pixels.length};c.prototype.addData=function(b){if(!b.pixels||b.pixels.length!==this.width*this.height)throw new u("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");
this.pixels||(this.pixels=[]);this.statistics||(this.statistics=[]);this.pixels.push(b.pixels);this.statistics.push(b.statistics||{minValue:null,maxValue:null})};c.prototype.getAsRGBA=function(){var b=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case "s8":case "s16":case "u16":case "s32":case "u32":case "f32":case "f64":this._fillFromNon8Bit(b);break;default:this._fillFrom8Bit(b)}return new Uint8ClampedArray(b)};c.prototype.getAsRGBAFloat=function(){var b=new Float32Array(this.width*
this.height*4);this._fillFrom32Bit(b);return b};c.prototype.updateStatistics=function(){var b=this;this.statistics=this.pixels.map(function(a){return b._calculateBandStatistics(a,b.mask)});var a=this.mask,d=0;if(a)for(var f=0;f<a.length;f++)a[f]&&d++;else d=this.width*this.height;this.validPixelCount=d};c.prototype.clamp=function(b){if(b&&"f64"!==b&&"f32"!==b){var a;switch(b){case "u8":a=[0,255];break;case "u16":a=[0,65535];break;case "u32":a=[0,4294967295];break;case "s8":a=[-128,127];break;case "s16":a=
[-32768,32767];break;case "s32":a=[-2147483648,2147483647];break;default:a=[-3.4*1E39,3.4*1E39]}var d=a[0];a=a[1];for(var f=this.pixels,q=this.width*this.height,e=f.length,g,c,h,r=[],l=0;l<e;l++){h=n.createEmptyBand(b,q);g=f[l];for(var m=0;m<q;m++)c=g[m],h[m]=c>a?a:c<d?d:c;r.push(h)}this.pixels=r;this.pixelType=b}};c.prototype.extractBands=function(b){var a=this;if(y.isNone(b)||0===b.length||null==this.pixels||0===this.pixels.length)return this;var d=this.pixels.length,f=b.some(function(b){return b>=
a.pixels.length}),d=d===b.length&&!b.some(function(a,b){return a!==b});return f||d?this:new n({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:b.map(function(b){return a.pixels[b]}),statistics:this.statistics&&b.map(function(b){return a.statistics[b]})})};c.prototype.clone=function(){var b=new n({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});
this.mask&&(b.mask=this.mask instanceof Uint8Array?new Uint8Array(this.mask):this.mask.slice(0));var a,d=n.getPixelArrayConstructor(this.pixelType);if(this.pixels&&0<this.pixels.length){b.pixels=[];var f=this.pixels[0].slice;for(a=0;a<this.pixels.length;a++)b.pixels[a]=f?this.pixels[a].slice(0,this.pixels[a].length):new d(this.pixels[a])}if(this.statistics)for(b.statistics=[],a=0;a<this.statistics.length;a++)b.statistics[a]=w.clone(this.statistics[a]);return b};c.prototype._fillFrom8Bit=function(b){var a=
this.mask,d=this.maskIsAlpha,f=this.pixels;if(b&&f&&f.length){var c,e,g;c=e=g=f[0];3<=f.length?(e=f[1],g=f[2]):2===f.length&&(e=f[1]);b=new Uint32Array(b);f=this.width*this.height;if(c.length!==f)m.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");else if(a&&a.length===f)if(d)for(d=0;d<f;d++)a[d]&&(b[d]=a[d]<<24|g[d]<<16|e[d]<<8|c[d]);else for(d=0;d<f;d++)a[d]&&(b[d]=-16777216|g[d]<<16|e[d]<<8|c[d]);else for(d=0;d<f;d++)b[d]=-16777216|g[d]<<16|e[d]<<8|c[d]}else m.error("getAsRGBA()",
"Unable to convert to RGBA. The input pixel block is empty.")};c.prototype._fillFromNon8Bit=function(b){var a=this.pixels,d=this.mask,f=this.statistics;if(b&&a&&a.length){var c=this.pixelType,e=1,g=0,e=1;f&&0<f.length?(g=f.map(function(a){return a.minValue}).reduce(function(a,b){return Math.min(a,b)}),e=f.map(function(a){return a.maxValue-a.minValue}).reduce(function(a,b){return Math.max(a,b)}),e=255/e):(e=255,"s8"===c?(g=-128,e=127):"u16"===c?e=65535:"s16"===c?(g=-32768,e=32767):"u32"===c?e=4294967295:
"s32"===c?(g=-2147483648,e=2147483647):"f32"===c?(g=-3.4*1E39,e=3.4*1E39):"f64"===c&&(g=-Number.MAX_VALUE,e=Number.MAX_VALUE),e=255/(e-g));b=new Uint32Array(b);var c=this.width*this.height,k,h,f=k=h=a[0];if(f.length!==c)return m.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(2<=a.length)if(k=a[1],3<=a.length&&(h=a[2]),d&&d.length===c)for(a=0;a<c;a++)d[a]&&(b[a]=-16777216|(h[a]-g)*e<<16|(k[a]-g)*e<<8|(f[a]-g)*e);else for(a=0;a<c;a++)b[a]=-16777216|(h[a]-g)*e<<16|(k[a]-
g)*e<<8|(f[a]-g)*e;else if(d&&d.length===c)for(a=0;a<c;a++)k=(f[a]-g)*e,d[a]&&(b[a]=-16777216|k<<16|k<<8|k);else for(a=0;a<c;a++)k=(f[a]-g)*e,b[a]=-16777216|k<<16|k<<8|k}else m.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")};c.prototype._fillFrom32Bit=function(b){var a=this.pixels,d=this.mask;if(!b||!a||!a.length)return m.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");var c,h,e;c=h=e=a[0];3<=a.length?(h=a[1],e=a[2]):2===a.length&&
(h=a[1]);var g=this.width*this.height;if(c.length!==g)return m.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var k=0;if(d&&d.length===g)for(a=0;a<g;a++)b[k++]=c[a],b[k++]=h[a],b[k++]=e[a],b[k++]=d[a]&1;else for(a=0;a<g;a++)b[k++]=c[a],b[k++]=h[a],b[k++]=e[a],b[k++]=1};c.prototype._calculateBandStatistics=function(b,a){var c=Infinity,f=-Infinity,h=b.length,e,g=0;if(a)for(e=0;e<h;e++)a[e]&&(g=b[e],c=g<c?g:c,f=g>f?g:f);else for(e=0;e<h;e++)g=b[e],c=g<c?g:c,f=g>f?g:
f;return{minValue:c,maxValue:f}};var n;h.__decorate([l.property({json:{write:!0}})],c.prototype,"width",void 0);h.__decorate([l.property({json:{write:!0}})],c.prototype,"height",void 0);h.__decorate([l.property({json:{write:!0}})],c.prototype,"pixelType",void 0);h.__decorate([l.cast("pixelType")],c.prototype,"castPixelType",null);h.__decorate([l.property({json:{write:!0}})],c.prototype,"validPixelCount",void 0);h.__decorate([l.property({json:{write:!0}})],c.prototype,"mask",void 0);h.__decorate([l.property({json:{write:!0}})],
c.prototype,"maskIsAlpha",void 0);h.__decorate([l.property({json:{write:!0}})],c.prototype,"pixels",void 0);h.__decorate([l.property({json:{write:!0}})],c.prototype,"statistics",void 0);return c=n=h.__decorate([l.subclass("esri.layers.support.PixelBlock")],c)}(v.JSONSupport)});