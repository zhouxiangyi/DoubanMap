// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../../core/accessorSupport/decorators","./Deconflictor"],function(e,f,d,g,h){Object.defineProperty(f,"__esModule",{value:!0});e=function(c){function a(){var b=null!==c&&c.apply(this,arguments)||this;b.visibilityGroup=1;b.iconMarginFactor=0;b._lastDeconfliction=0;return b}d.__extends(a,c);Object.defineProperty(a.prototype,"viewState",{get:function(){return this.parent.viewState},enumerable:!0,configurable:!0});a.prototype.update=function(b){if(!this.parent.needsUpdate()){var a=
performance.now();if(2===b.state||2E3<a-this._lastDeconfliction)c.prototype.update.call(this,b),0===this.state&&(this._lastDeconfliction=a)}};a.prototype.enabledChanged=function(a,c){this.modifyGraphics(c,a.labelsEnabled)};a.prototype.getGraphicsLayers=function(a){return a.labelGraphics};d.__decorate([g.property({constructOnly:!0})],a.prototype,"parent",void 0);return a=d.__decorate([g.subclass("esri.views.3d.layers.graphics.LabelDeconflictor")],a)}(h.Deconflictor);f.LabelDeconflictor=e});