// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/collectionUtils ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ../layers/Layer".split(" "),function(u,g,e,m,n,p,q,h,r){function f(c,k,b){var a;if(c)for(var d=0,t=c.length;d<t;d++)if(a=c.getItemAt(d),a[k]===b||a&&"group"===a.type&&(a=f(a.layers,k,b)))return a}Object.defineProperty(g,"__esModule",{value:!0});var l=p.getLogger("esri.support.LayersMixin");g.LayersMixin=function(c){return function(c){function b(){for(var a=
[],d=0;d<arguments.length;d++)a[d]=arguments[d];var b=c.apply(this,a)||this;b.layers=new m;b.layers.on("after-add",function(a){a=a.item;a.parent&&a.parent!==b&&"remove"in a.parent&&a.parent.remove(a);a.parent=b;b.layerAdded(a);"elevation"===a.type&&l.error("Layer '"+a.title+", id:"+a.id+"' of type '"+a.type+"' is not supported as an operational layer and will therefore be ignored.")});b.layers.on("after-remove",function(a){a=a.item;a.parent=null;b.layerRemoved(a)});return b}e.__extends(b,c);b.prototype.destroy=
function(){this.layers.drain(this.layerRemoved,this)};Object.defineProperty(b.prototype,"layers",{set:function(a){this._set("layers",n.referenceSetter(a,this._get("layers")))},enumerable:!0,configurable:!0});b.prototype.add=function(a,b){var d=this,c=this.layers;b=c.getNextIndex(b);a instanceof r?(a.parent===this&&this.reorder(a,b),c.add(a,b)):q.isPromiseLike(a)?a.then(function(a){d.destroyed||d.add(a,b)}):l.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")};
b.prototype.addMany=function(a,b){var d=this,c=this.layers;b=c.getNextIndex(b);a.slice().forEach(function(a){a.parent===d?d.reorder(a,b):(c.add(a,b),b+=1)})};b.prototype.findLayerById=function(a){return f(this.layers,"id",a)};b.prototype.findLayerByUid=function(a){return f(this.layers,"uid",a)};b.prototype.remove=function(a){return this.layers.remove(a)};b.prototype.removeMany=function(a){return this.layers.removeMany(a)};b.prototype.removeAll=function(){return this.layers.removeAll()};b.prototype.reorder=
function(a,b){return this.layers.reorder(a,b)};b.prototype.layerAdded=function(a){};b.prototype.layerRemoved=function(a){};e.__decorate([h.property()],b.prototype,"layers",null);return b=e.__decorate([h.subclass("esri.support.LayersMixin")],b)}(c)}});