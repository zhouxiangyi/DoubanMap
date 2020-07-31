// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/maybe ../../../../core/watchUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Layer ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Texture".split(" "),function(e,f,d,h,g,k,l,m){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function a(b){this.resourceFactory=b;this._resources=null;this._attached=this._hidden=!1}a.prototype.destroy=function(){this._destroyResources()};Object.defineProperty(a.prototype,"object",{get:function(){return d.isSome(this._resources)?
this._resources.object:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"resources",{get:function(){return d.isSome(this._resources)?this._resources.external:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"hidden",{get:function(){return this._hidden},set:function(b){b!==this._hidden&&(this._hidden=b,this._syncHidden())},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"attached",{get:function(){return this._attached},set:function(b){b!==
this._attached&&(this._attached=b,this._createOrDestroyResources())},enumerable:!0,configurable:!0});a.prototype.recreate=function(){this.attached&&this._createResources()};a.prototype.recreateGeometry=function(){if(!this.resourceFactory.recreateGeometry)this.recreate();else if(!d.isNone(this._resources)){var b=this._resources.object,a=this.resourceFactory.view._stage;this._resources.external.forEach(function(b){b instanceof g&&a.remove(2,b.id)});b.removeAllGeometries();for(var c=0,b=this.resourceFactory.recreateGeometry(this._resources.external,
b,this._resources.layer);c<b.length;c++)a.add(2,b[c])}};a.prototype._createOrDestroyResources=function(){this._attached?this._resources||this._createResources():this._destroyResources()};a.prototype._createResources=function(){var b=this;this._destroyResources();var a=this.resourceFactory.view._stage;if(a){var c=new k("element",{isPickable:!1});a.add(0,c);a.addToViewContent([c.id]);var d=new l({idHint:"element",castShadow:!1}),e=this.resourceFactory.createResources(d,c);e.forEach(function(c){a.add(b._contentTypeFromResource(c),
c)});a.add(1,d);c.addObject(d);this._hidden&&d.setVisible(!1);var f=this.resourceFactory.cameraChanged?h.init(this.resourceFactory.view.state,"camera",function(a){return b.resourceFactory.cameraChanged(a)}):null;this._resources={layer:c,object:d,external:e,cameraHandle:f}}};a.prototype._contentTypeFromResource=function(a){return a instanceof g?2:a instanceof m?4:3};a.prototype._destroyResources=function(){var a=this;if(!d.isNone(this._resources)){var e=this.resourceFactory.view._stage;e.remove(1,
this._resources.object.id);e.remove(0,this._resources.layer.id);this._resources.external.forEach(function(b){e.remove(a._contentTypeFromResource(b),b.id);"dispose"in b&&b.dispose()});this._resources.object.dispose();this._resources.cameraHandle&&this._resources.cameraHandle.remove();this._resources=null}};a.prototype._syncHidden=function(){d.isNone(this._resources)||this._resources.object.setVisible(!this._hidden)};return a}();f.VisualElementResources=e});