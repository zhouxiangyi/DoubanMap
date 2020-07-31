// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Handles ../../../core/promiseUtils ../../../core/accessorSupport/decorators ./LayerView2D ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(p,q,f,h,g,k,l,m,n){return function(e){function d(){var a=null!==e&&e.apply(this,arguments)||this;a._handles=new h;a._popupTemplates=new Map;a.graphicsViews=[];return a}f.__extends(d,e);d.prototype.hitTest=function(a,c){var b=this;if(this.suspended||!this.graphicsViews.length)return g.resolve();var d=
this.graphicsViews.map(function(b){return b.hitTest(a,c)});return g.all(d).then(function(a){return a.filter(function(a,c){a&&(a.popupTemplate=b._popupTemplates.get(b.graphicsViews[c]),a.layer=b.layer,a.sourceLayer=b.layer);return!!a})[0]||null})};d.prototype.update=function(a){if(this.graphicsViews)for(var c=0,b=this.graphicsViews;c<b.length;c++)b[c].processUpdate(a)};d.prototype.attach=function(){var a=this;this.layer.featureCollections.forEach(function(c){var b=new m.default({view:a.view,graphics:c.source,
requestUpdateCallback:function(){return a.requestUpdate()}});b.renderer=c.renderer;a._popupTemplates.set(b,c.popupTemplate);a.graphicsViews.push(b);a.container.addChild(b.container)})};d.prototype.detach=function(){this.container.removeAllChildren();for(var a=0,c=this.graphicsViews;a<c.length;a++){var b=c[a];b.destroy();b.view=null;b.renderer=null}this.graphicsViews.length=0;this._handles.removeAll();this._popupTemplates=null};d.prototype.moveStart=function(){};d.prototype.moveEnd=function(){};d.prototype.viewChange=
function(){for(var a=0,c=this.graphicsViews;a<c.length;a++)c[a].viewChange()};return d=f.__decorate([k.subclass("esri.views.2d.layers.MapNotesLayerView2D")],d)}(l.LayerView2DMixin(n))});