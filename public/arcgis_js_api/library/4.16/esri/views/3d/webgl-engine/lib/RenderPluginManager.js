// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./depthRange","./Util"],function(g,h,k,l){Object.defineProperty(h,"__esModule",{value:!0});g=function(){function c(a){this.pluginContext=a;this.renderPlugins=[];this.slots=[];for(a=0;23>a;++a)this.slots[a]=[]}c.prototype.add=function(a,b){this.renderPlugins.push(b);for(var e=0;e<a.length;++e)this.slots[a[e]].push(b);b.initializeRenderContext(this.pluginContext);this.pluginContext.requestRender()};c.prototype.remove=function(a){var b=this.renderPlugins.length;this.renderPlugins=
this.renderPlugins.filter(function(b){return b!==a});l.assert(this.renderPlugins.length<b,"Removing non-added render plugin");for(b=0;b<this.slots.length;++b)this.slots[b]=this.slots[b].filter(function(b){return b!==a});a.uninitializeRenderContext();this.pluginContext.requestRender()};c.prototype.prepareRender=function(a){for(var b=0,e=this.renderPlugins;b<e.length;b++){var c=e[b];c.prepareRender&&c.prepareRender(a)}};c.prototype.render=function(a,b){b.slot=a;var c=!1,f=0;for(a=this.slots[a];f<a.length;f++){var d=
a[f];d.canRender&&d.render(b)&&(c=!0)}return c};c.prototype.queryDepthRange=function(a){var b=m;b.near=Infinity;b.far=-Infinity;for(var c=0,f=this.renderPlugins;c<f.length;c++){var d=f[c];d.queryDepthRange&&(d=d.queryDepthRange(a))&&k.union(b,d,b)}return b};Object.defineProperty(c.prototype,"needsHighlight",{get:function(){return this.renderPlugins.some(function(a){return a.needsHighlight})},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"needsLinearDepth",{get:function(){return this.renderPlugins.some(function(a){return a.needsLinearDepth})},
enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"needsLaserlineWithContrastControl",{get:function(){var a=this.slots[17];return!!a&&0<a.length},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"renderOccludedFlags",{get:function(){var a=0;this.renderPlugins.forEach(function(b){b.renderOccludedFlags&&(a|=b.renderOccludedFlags)});return a},enumerable:!0,configurable:!0});return c}();h.RenderPluginManager=g;var m={near:0,far:0}});