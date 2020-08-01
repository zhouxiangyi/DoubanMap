// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./Utils"],function(k,l,f){return function(){function e(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}e.prototype.clone=function(){for(var c=new e,a=0;a<this.geometries.length;a++){var b=this.geometries[a],d=c.geometries[a];d.indexBuffer=b.indexBuffer.slice();d.vertexBuffer={};for(var g in b.vertexBuffer){var h=b.vertexBuffer[g],
f=h.stride;d.vertexBuffer[g]={data:h.data.slice(),stride:f}}}return c};e.deserialize=function(c){for(var a=new e,b=0;5>b;++b){a.geometries[b].indexBuffer=new Uint32Array(c.geometries[b].indexBuffer);a.geometries[b].vertexBuffer={};for(var d in c.geometries[b].vertexBuffer)a.geometries[b].vertexBuffer[d]={data:f.allocateTypedArrayBufferwithData(c.geometries[b].vertexBuffer[d].data,c.geometries[b].vertexBuffer[d].stride),stride:c.geometries[b].vertexBuffer[d].stride}}return a};e.prototype.serialize=
function(){for(var c={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]},a=0;5>a;++a)for(var b in this.geometries[a].vertexBuffer)c.geometries[a].vertexBuffer[b]={data:this.geometries[a].vertexBuffer[b].data.buffer,
stride:this.geometries[a].vertexBuffer[b].stride};return c};e.prototype.getBuffers=function(){for(var c=[],a=0;5>a;++a){c.push(this.geometries[a].indexBuffer.buffer);for(var b in this.geometries[a].vertexBuffer)c.push(this.geometries[a].vertexBuffer[b].data.buffer)}return c};return e}()});