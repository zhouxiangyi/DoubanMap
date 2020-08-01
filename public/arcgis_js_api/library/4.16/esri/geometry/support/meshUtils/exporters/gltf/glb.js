// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/has"],function(e,f,g){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function a(c,b){if(!c)throw Error("GLB requires a JSON gltf chunk");this.length=a.HEADER_SIZE;this.length+=a.CHUNK_HEADER_SIZE;c=this.textToArrayBuffer(c);this.length+=this.alignTo(c.byteLength,4);if(b&&(this.length+=a.CHUNK_HEADER_SIZE,this.length+=b.byteLength,b.byteLength%4))throw Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length);
this.outView=new DataView(this.buffer);this.writeHeader();c=this.writeChunk(c,12,1313821514,32);b&&this.writeChunk(b,c,5130562)}a.prototype.writeHeader=function(){this.outView.setUint32(0,a.MAGIC,!0);this.outView.setUint32(4,a.VERSION,!0);this.outView.setUint32(8,this.length,!0)};a.prototype.writeChunk=function(c,b,a,d){void 0===d&&(d=0);var h=this.alignTo(c.byteLength,4);this.outView.setUint32(b,h,!0);this.outView.setUint32(b+=4,a,!0);this.writeArrayBuffer(this.outView.buffer,c,b+=4,0,c.byteLength);
for(b+=c.byteLength;b%4;)d&&this.outView.setUint8(b,d),b++;return b};a.prototype.writeArrayBuffer=function(c,b,a,d,e){(new Uint8Array(c,a,e)).set(new Uint8Array(b,d,e),0)};a.prototype.textToArrayBuffer=function(c){if(g("esri-text-encoder"))return(new TextEncoder).encode(c).buffer;for(var b=new Uint8Array(c.length),a=0;a<b.length;++a)b[a]=c.charCodeAt(a);return b.buffer};a.prototype.alignTo=function(a,b){return b*Math.ceil(a/b)};a.HEADER_SIZE=12;a.CHUNK_HEADER_SIZE=8;a.MAGIC=1179937895;a.VERSION=2;
return a}();f.GLB=e});