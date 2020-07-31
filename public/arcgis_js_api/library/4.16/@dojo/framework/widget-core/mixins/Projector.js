//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define("require exports tslib ../WidgetBase ./../vdom ../d ../decorators/alwaysRender".split(" "),a)})(function(a,e){function g(a){return function(){function c(){this._root=document.body;this._async=!0;this._properties={};this._widget=a}c.prototype.append=function(b){var c=this;void 0===b&&(b=this._root);this._root=b;this._renderResult=
h.w(k,{renderer:function(){var b=f.__rest(c._properties,["registry"]);return h.w(c._widget,b,c._children)}});this._renderer=l.renderer(function(){return c._renderResult});this._renderer.mount({domNode:b,registry:this._properties.registry,sync:!this.async});this.projectorState=d.Attached;return{destroy:function(){}}};c.prototype.merge=function(b){void 0===b&&(b=document.body);return this.append(b.parentNode||void 0)};Object.defineProperty(c.prototype,"root",{get:function(){return this._root},set:function(b){if(this.projectorState===
d.Attached)throw Error("Projector already attached, cannot change root element");this._root=b},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"async",{get:function(){return this._async},set:function(b){if(this.projectorState===d.Attached)throw Error("Projector already attached, cannot change async mode");this._async=b},enumerable:!0,configurable:!0});c.prototype.sandbox=function(b){void 0===b&&(b=document);if(this.projectorState===d.Attached)throw Error("Projector already attached, cannot create sandbox");
this._async=!1;this.append(b.createDocumentFragment())};c.prototype.setChildren=function(b){this._children=b;this._renderer&&this._renderer.invalidate()};c.prototype.setProperties=function(b){this._properties=b;this._renderer&&this._renderer.invalidate()};c.prototype.toHtml=function(){if(this.projectorState!==d.Attached)throw Error("Projector is not attached, cannot return an HTML string of projection.");return this._root.childNodes[0].outerHTML};c.prototype.destroy=function(){};return c}()}Object.defineProperty(e,
"__esModule",{value:!0});var f=a("tslib"),m=a("../WidgetBase"),l=a("./../vdom"),h=a("../d"),n=a("../decorators/alwaysRender"),d;(function(a){a[a.Attached=1]="Attached";a[a.Detached=2]="Detached"})(d=e.ProjectorAttachState||(e.ProjectorAttachState={}));var k=function(a){function c(){return null!==a&&a.apply(this,arguments)||this}f.__extends(c,a);c.prototype.render=function(){return this.properties.renderer()};return c=f.__decorate([n.alwaysRender()],c)}(m.default);e.ProjectorMixin=g;e.default=g});