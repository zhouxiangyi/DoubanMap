// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
require({cache:{"esri/libs/i3s/I3SWorker":function(){define("require exports ../../assets ../../core/has ../../core/promiseUtils @dojo/framework/shim/Promise".split(" "),function(e,m,c,u,k){function d(d){return c.getAssetUrl("esri/libs/i3s/"+d)}Object.defineProperty(m,"__esModule",{value:!0});m.getWorkerModule=function(){if(!l){var c=u("esri-wasm")?new Promise(function(d,c){e(["./i3s"],d,c)}):new Promise(function(d,c){e(["./i3s_nowasm"],d,c)});l=k.create(function(e){return c.then(function(c){var n=
c({locateFile:d,onRuntimeInitialized:function(){return e(n)}});delete n.then})}).catch(function(d){return k.reject(d)})}return l};var l})},"esri/assets":function(){define(["require","exports","./request","./core/urlUtils"],function(e,m,c,u){function k(d){return u.join(e.toUrl("."),"../",d)}Object.defineProperty(m,"__esModule",{value:!0});m.fetchAsset=function(d,e){return c(k(d),e)};m.getAssetUrl=k})},"*noref":1}});
define("require exports tslib ../../../core/maybe ../../../core/promiseUtils ../../../core/typedArrayUtil ../../../libs/i3s/I3SWorker".split(" "),function(e,m,c,u,k,d,l){function v(b){for(var h=b.modifications,a=f._malloc(8*h.length),d=new Float64Array(f.HEAPU8.buffer,a,h.length),c=0;c<h.length;++c)d[c]=h[c];f.setModifications(b.context,a,h.length);f._free(a)}function x(b,h){if(!f)return null;var a=b.context,c=b.localOrigin,e=b.globalTrafo,m=b.mbs,k=b.elevationOffset,g=b.geometryBuffer,l=b.geometryDescriptor,
q=b.indexToVertexProjector,w=b.vertexToRenderProjector,r=f._malloc(g.byteLength),t=f._malloc(33*Float64Array.BYTES_PER_ELEMENT),v=new Uint8Array(f.HEAPU8.buffer,r,g.byteLength);v.set(new Uint8Array(g));g=new Float64Array(f.HEAPU8.buffer,t,33);n(g,c);var c=g.byteOffset+3*g.BYTES_PER_ELEMENT,p=new Float64Array(g.buffer,c);n(p,e);c+=16*g.BYTES_PER_ELEMENT;p=new Float64Array(g.buffer,c);n(p,m);c+=4*g.BYTES_PER_ELEMENT;u.isSome(b.obb)&&(p=new Float64Array(g.buffer,c),n(p,b.obb.center),c+=3*g.BYTES_PER_ELEMENT,
p=new Float64Array(g.buffer,c),n(p,b.obb.halfSize),c+=3*g.BYTES_PER_ELEMENT,p=new Float64Array(g.buffer,c),n(p,b.obb.quaternion));e={isDraco:!1,isLegacy:!1,color:b.layouts.some(function(a){return a.some(function(a){return"color"===a.name})}),normal:b.needNormals&&b.layouts.some(function(a){return a.some(function(a){return"normalCompressed"===a.name})}),uv0:b.layouts.some(function(a){return a.some(function(a){return"uv0"===a.name})}),uvRegion:b.layouts.some(function(a){return a.some(function(a){return"uvRegion"===
a.name})}),featureIndex:l.featureIndex};a=f.process(a,!!b.obb,r,v.byteLength,l,e,t,k,q,w,b.normalReferenceFrame);f._free(t);f._free(r);if(0<a.error.length)throw"i3s.wasm: "+a.error;if(a.discarded)return null;r=0<a.componentOffsets.length?d.slice(a.componentOffsets):null;t=0<a.featureIds.length?d.slice(a.featureIds):null;k=d.slice(a.interleavedVertedData).buffer;l=1===a.indicesType?d.slice(new Uint16Array(a.indices.buffer,a.indices.byteOffset,a.indices.byteLength/2)):d.slice(new Uint32Array(a.indices.buffer,
a.indices.byteOffset,a.indices.byteLength/4));q=d.slice(a.positions);w=1===a.positionIndicesType?d.slice(new Uint16Array(a.positionIndices.buffer,a.positionIndices.byteOffset,a.positionIndices.byteLength/2)):d.slice(new Uint32Array(a.positionIndices.buffer,a.positionIndices.byteOffset,a.positionIndices.byteLength/4));b={layout:b.layouts[0],interleavedVertexData:k,indices:l,hasColors:a.hasColors,positionData:{data:q,indices:w}};t&&h.push(t.buffer);r&&h.push(r.buffer);h.push(k);h.push(l.buffer);h.push(q.buffer);
h.push(w.buffer);return{componentOffsets:r,featureIds:t,transformedGeometry:b,obb:a.obb}}function y(b){f&&f.destroy(b)}function n(b,c){for(var a=0;a<c.length;++a)b[a]=c[a]}e=function(){function b(){}b.prototype.process=function(d){return c.__awaiter(this,void 0,void 0,function(){var a,h;return c.__generator(this,function(c){switch(c.label){case 0:return[4,b.ensureWASM()];case 1:return c.sent(),a=[d.geometryBuffer],h=x(d,a),[2,{result:h,transferList:a}]}})})};b.prototype.setModifications=function(d){return c.__awaiter(this,
void 0,void 0,function(){return c.__generator(this,function(a){switch(a.label){case 0:return[4,b.ensureWASM()];case 1:return a.sent(),v(d),[2]}})})};b.prototype.setLegacySchema=function(d){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(a){switch(a.label){case 0:return[4,b.ensureWASM()];case 1:return a.sent(),f.setLegacySchema(d.context,d.jsonSchema),[2]}})})};b.prototype.destroyContext=function(b){y(b)};return b}();var q,f;(function(b){b.ensureWASM=function(){if(f)return k.resolve();
q||(q=l.getWorkerModule().then(function(b){f=b;q=null}));return q};b.test={transform:x,setModifications:v,destroy:y}})(e||(e={}));return e});