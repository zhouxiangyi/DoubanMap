// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../handleUtils ../Logger ../promiseUtils ./RemoteClient".split(" "),function(t,u,m,n,d,k){var p=n.getLogger("esri.core.workers.Connection");return function(){function a(){this._clients=[];this._clientPromises=[];this._clientIdx=0}Object.defineProperty(a.prototype,"closed",{get:function(){return!this._clients||!this._clients.length},enumerable:!0,configurable:!0});a.prototype.open=function(c,e){var b=this;return d.create(function(l,q){var a=!0,g=function(b){d.throwIfAborted(e.signal);
a&&(a=!1,b())};b._clients.length=c.length;b._clientPromises.length=c.length;for(var r=function(a){var f=c[a];if(d.isThenable(f))return b._clientPromises[a]=f.then(function(c){b._clients[a]=new k(c,e);g(l);return b._clients[a]},function(){g(q);return null}),"continue";b._clients[a]=new k(f,e);b._clientPromises[a]=d.resolve(b._clients[a]);g(l)},h=0;h<c.length;++h)r(h)})};a.prototype.broadcast=function(c,a,b){for(var e=Array(this._clientPromises.length),d=0;d<this._clientPromises.length;++d)e[d]=this._clientPromises[d].then(function(e){return e.invoke(c,
a,b)});return e};a.prototype.close=function(){for(var c=0,a=this._clientPromises;c<a.length;c++)a[c].then(function(b){return b.close()});this._clients.length=0;this._clientPromises.length=0};a.prototype.getAvailableClient=function(){for(var c,a=0;a<this._clients.length;++a){var b=this._clients[a];if(!b)c=c||[],c.push(this._clientPromises[a]);else if(!b.isBusy())return d.resolve(b)}return c?d.first(c):(this._clientIdx=(this._clientIdx+1)%this._clients.length,d.resolve(this._clients[this._clientIdx]))};
a.prototype.invoke=function(a,e,b){var c=null;Array.isArray(b)?(p.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),c={transferList:b}):c=b;return this.closed?d.reject(Error("Connection closed")):this.getAvailableClient().then(function(b){return b.invoke(a,e,c)})};a.prototype.on=function(a,e){var b=this;return d.all(this._clientPromises).then(function(){return m.handlesGroup(b._clients.map(function(b){return b.on(a,e)}))})};a.prototype.openPorts=function(){var a=
this;return d.create(function(c){for(var b=Array(a._clientPromises.length),d=b.length,e=function(e){a._clientPromises[e].then(function(a){b[e]=a.openPort();0===--d&&c(b)})},f=0;f<a._clientPromises.length;++f)e(f)})};return a}()});