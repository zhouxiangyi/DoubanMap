// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Collection ../../core/Evented ../../core/Handles ../../core/watchUtils ../../core/accessorSupport/decorators ./ListItem ./support/layerListUtils".split(" "),function(v,w,e,r,t,u,k,l,n,m){var p=r.ofType(n);return function(q){function b(a){a=q.call(this,a)||this;a._handles=new u;a.listItemCreatedFunction=null;a.operationalItems=new p;a.view=null;return a}e.__extends(b,q);b.prototype.initialize=function(){var a=this;this._handles.add(k.init(this,["view","view.ready"],
function(){return a._viewHandles()}),"view")};b.prototype.destroy=function(){this._handles.destroy();this.view=this._handles=null;this.operationalItems.removeAll()};Object.defineProperty(b.prototype,"state",{get:function(){var a=this.get("view");return this.get("view.ready")?"ready":a?"loading":"disabled"},enumerable:!0,configurable:!0});b.prototype.triggerAction=function(a,c){a&&this.emit("trigger-action",{action:a,item:c})};b.prototype.moveListItem=function(a,c,d,b){var g,f,e=null===a||void 0===
a?void 0:a.layer;if(e){var h=null===(f=null===(g=this.view)||void 0===g?void 0:g.map)||void 0===f?void 0:f.layers;g=c?m.getItemLayers(c):h;h=d?m.getItemLayers(d):h;g&&h&&(f=this.operationalItems,c=(null===c||void 0===c?void 0:c.children)||f,f=(null===d||void 0===d?void 0:d.children)||f,b=h.length-b,a.parent=d||null,c.includes(a)&&c.remove(a),g.includes(e)&&g.remove(e),f.includes(a)||f.add(a,b),h.includes(e)||h.add(e,b))}};b.prototype._createLayerViewHandles=function(a){var c=this,d=this._handles;
d.remove("layer-views");this._compileList();a&&d.add(a.on("change",function(){return c._compileList()}),"layer-views")};b.prototype._createMapLayerHandles=function(a){var c=this,d=this._handles;d.remove("map-layers");this._compileList();a&&d.add(a.on("change",function(){return c._compileList()}),"map-layers")};b.prototype._watchItemProperties=function(a){var c=this;this._handles.add([a.children.on("change",function(){c._modifyListItemChildren(a.children)})],"children-change-"+a.uid)};b.prototype._modifyListItemChildren=
function(a){var c=this;a.forEach(function(a){return c._modifyListItem(a)})};b.prototype._modifyListItem=function(a){"function"===typeof this.listItemCreatedFunction&&this.listItemCreatedFunction.call(null,{item:a});this._modifyListItemChildren(a.children)};b.prototype._createListItem=function(a){a=new n({layer:a,view:this.view});this._watchItemProperties(a);return a};b.prototype._removeAllItems=function(){var a=this._handles,c=this.operationalItems;c.forEach(function(c){a.remove("children-change-"+
c.uid)});c.removeAll()};b.prototype._getViewableLayers=function(a){if(a)return a.filter(function(a){return"hide"!==m.findLayerListMode(a)})};b.prototype._watchLayersListMode=function(a){var c=this,b=this._handles;b.remove("layer-list-mode");a&&a.forEach(function(a){b.add(k.watch(a,"listMode",function(){return c._compileList()}),"layer-list-mode")})};b.prototype._compileList=function(){var a=this.get("view.map.layers");this._watchLayersListMode(a);(a=this._getViewableLayers(a))&&a.length?(this._createNewItems(a),
this._modifyOrRemoveItems(a),this._sortItems(a)):this._removeAllItems()};b.prototype._createNewItems=function(a){var c=this,b=this.operationalItems;a.forEach(function(a){b.find(function(b){return b.layer===a})||b.add(c._createListItem(a))})};b.prototype._modifyOrRemoveItems=function(a){var b=this,d=this._handles,f=this.operationalItems;f.forEach(function(c){c&&(a&&a.find(function(a){return c.layer===a})?b._modifyListItem(c):(d.remove("children-change-"+c.uid),f.remove(c)))})};b.prototype._sortItems=
function(a){this.operationalItems.sort(function(b,d){b=a.indexOf(b.layer);d=a.indexOf(d.layer);return b>d?-1:b<d?1:0})};b.prototype._viewHandles=function(){var a=this,b=this._handles,d=this.view;b.remove(["map-layers","layer-views","view-layers"]);this._compileList();d&&d.ready&&b.add([k.init(this,"view.map.layers",function(b){return a._createMapLayerHandles(b)}),k.init(this,"view.layerViews",function(b){return a._createLayerViewHandles(b)}),k.init(this,"listItemCreatedFunction",function(){return a._compileList()})],
"view-layers")};e.__decorate([l.property()],b.prototype,"listItemCreatedFunction",void 0);e.__decorate([l.property({type:p})],b.prototype,"operationalItems",void 0);e.__decorate([l.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);e.__decorate([l.property()],b.prototype,"view",void 0);return b=e.__decorate([l.subclass("esri.widgets.LayerList.LayerListViewModel")],b)}(t.EventedAccessor)});