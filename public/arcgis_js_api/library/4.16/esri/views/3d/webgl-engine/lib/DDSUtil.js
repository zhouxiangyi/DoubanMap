// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Logger","../../../../core/mathUtils","../../../webgl/Texture"],function(y,k,t,p,u){function l(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function m(e,b){var a=new Int32Array(e,0,31);if(542327876!==a[0])return n.error("Invalid magic number in DDS header"),null;if(!(a[20]&4))return n.error("Unsupported format, must contain a FourCC code"),null;var c=a[21],d;switch(c){case v:c=8;d=33776;break;case w:c=16;d=
33778;break;case x:c=16;d=33779;break;default:return n.error("Unsupported FourCC code:",String.fromCharCode(c&255,c>>8&255,c>>16&255,c>>24&255)),null}var h=1,f=a[4],g=a[3];if(0!==(f&3)||0!==(g&3))n.warn("Rounding up compressed texture size to nearest multiple of 4."),f=f+3&-4,g=g+3&-4;var k=f,l=g;a[2]&131072&&!1!==b&&(h=Math.max(1,a[7]));1===h||p.isPowerOfTwo(f)&&p.isPowerOfTwo(g)||(n.warn("Ignoring mipmaps of non power of two sized compressed texture."),h=1);for(var m=a[1]+4,q=[],r=0;r<h;++r)a=(f+
3>>2)*(g+3>>2)*c,b=new Uint8Array(e,m,a),q.push(b),m+=a,f=Math.max(1,f>>1),g=Math.max(1,g>>1);return{textureData:{type:"compressed",levels:q},internalFormat:d,width:k,height:l}}Object.defineProperty(k,"__esModule",{value:!0});var n=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),v=l("DXT1"),w=l("DXT3"),x=l("DXT5");k.createDDSTexture=function(e,b,a,c){var d=m(a,c);a=d.textureData;c=d.internalFormat;var h=d.width,d=d.height;b.samplingMode=1<a.levels.length?9987:9729;b.hasMipmap=1<a.levels.length;
b.internalFormat=c;b.width=h;b.height=d;b=new u(e,b,a);e.bindTexture(b);return b};k.createDDSTextureData=m});