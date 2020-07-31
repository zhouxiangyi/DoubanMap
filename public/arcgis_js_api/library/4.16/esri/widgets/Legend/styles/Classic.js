// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../intl ../../../core/accessorSupport/decorators ../../Widget ./support/utils ../support/styleUtils ../../support/widget".split(" "),function(w,x,k,t,p,u,v,m,e){return function(r){function c(a,b){a=r.call(this,a,b)||this;a.activeLayerInfos=null;a.messages=null;a.type="classic";return a}k.__extends(c,r);c.prototype.render=function(){var a=this,b=this.activeLayerInfos,b=b&&b.toArray().map(function(b){return a._renderLegendForLayer(b)}).filter(function(a){return!!a});
return e.tsx("div",null,b&&b.length?b:e.tsx("div",{class:"esri-legend__message"},this.messages.noLegend))};c.prototype._renderLegendForLayer=function(a){var b,g=this;if(!a.ready)return null;var d=!!a.children.length,c="esri-legend__"+a.layer.uid+"-version-"+a.version,h=a.title?e.tsx("h3",{class:this.classes("esri-widget__heading","esri-legend__service-label")},a.title):null;if(d)return b=a.children.map(function(a){return g._renderLegendForLayer(a)}).toArray(),e.tsx("div",{key:c,class:this.classes("esri-legend__service",
"esri-legend__group-layer")},h,b);if((d=a.legendElements)&&!d.length)return null;d=d.map(function(b){return g._renderLegendForElement(b,a.layer)}).filter(function(a){return!!a});if(!d.length)return null;var f=(b={},b["esri-legend__group-layer-child"]=!!a.parent,b);return e.tsx("div",{key:c,class:this.classes("esri-legend__service",f)},h,e.tsx("div",{class:"esri-legend__layer"},d))};c.prototype._renderLegendForElement=function(a,b,g){var d,c=this,h="color-ramp"===a.type,f="opacity-ramp"===a.type,q=
"size-ramp"===a.type,k=null;if("symbol-table"===a.type||q){var l=a.infos.map(function(d){return c._renderLegendForElementInfo(d,b,q,a.legendType)}).filter(function(a){return!!a});l.length&&(k=e.tsx("div",{class:"esri-legend__layer-body"},l))}else"color-ramp"===a.type||"opacity-ramp"===a.type||"heatmap-ramp"===a.type||"stretch-ramp"===a.type?k=this._renderLegendForRamp(a,b.opacity):"relationship-ramp"===a.type&&(k=v.renderRelationshipRamp(a,this.id,b.opacity));if(!k)return null;var l=a.title,n=null;
"string"===typeof l?n=l:l&&(n=m.getTitle(this.messages,l,h||f),n=m.isRendererTitle(l,h||f)&&l.title?l.title+" ("+n+")":n);h=g?"esri-legend__layer-child-table":"esri-legend__layer-table";f=n?e.tsx("div",{class:"esri-legend__layer-caption"},n):null;g=(d={},d["esri-legend__layer-table--size-ramp"]=q||!g,d);return e.tsx("div",{class:this.classes(h,g)},f,k)};c.prototype._renderLegendForRamp=function(a,b){var g=this,d=a.infos,c="heatmap-ramp"===a.type,h="stretch-ramp"===a.type,f=a.preview;f.className="esri-legend__color-ramp "+
("opacity-ramp"===a.type?"esri-legend__opacity-ramp":"");null!=b&&(f.style.opacity=b.toString());a=d.map(function(a){return e.tsx("div",{class:a.label?"esri-legend__ramp-label":null},c?g.messages[a.label]:h?g._getStretchStopLabel(a):a.label)});b={height:f.style.height};return e.tsx("div",{class:"esri-legend__layer-row"},e.tsx("div",{class:"esri-legend__layer-cell esri-legend__layer-cell--symbols",styles:{width:"24px"}},e.tsx("div",{class:"esri-legend__ramps",bind:f,afterCreate:m.attachToNode})),e.tsx("div",
{class:"esri-legend__layer-cell esri-legend__layer-cell--info"},e.tsx("div",{class:"esri-legend__ramp-labels",styles:b},a)))};c.prototype._getStretchStopLabel=function(a){return a.label?this.messages[a.label]+": "+t.formatNumber(a.value,{style:"decimal"}):""};c.prototype._renderLegendForElementInfo=function(a,b,c,d){var g,h;if(a.type)return this._renderLegendForElement(a,b,!0);var f=null;d=m.isImageryStretchedLegend(b,d);a.symbol&&a.preview?f=e.tsx("div",{class:"esri-legend__symbol",bind:a.preview,
afterCreate:m.attachToNode}):a.src&&(f=this._renderImage(a,b,d));if(!f)return null;b=(g={},g["esri-legend__imagery-layer-info--stretched"]=d,g);c=(h={},h["esri-legend__imagery-layer-info--stretched"]=d,h["esri-legend__size-ramp"]=!d&&c,h);return e.tsx("div",{class:"esri-legend__layer-row"},e.tsx("div",{class:this.classes("esri-legend__layer-cell esri-legend__layer-cell--symbols",c)},f),e.tsx("div",{class:this.classes("esri-legend__layer-cell esri-legend__layer-cell--info",b)},m.getTitle(this.messages,
a.label,!1)||""))};c.prototype._renderImage=function(a,b,c){var d,g=a.label,h=a.src,f=a.opacity;c=(d={},d["esri-legend__imagery-layer-image--stretched"]=c,d["esri-legend__symbol"]=!c,d);b={opacity:""+(null!=f?f:b.opacity)};return e.tsx("img",{alt:m.getTitle(this.messages,g,!1),src:h,border:0,width:a.width,height:a.height,class:this.classes(c),styles:b})};k.__decorate([e.renderable(),p.property()],c.prototype,"activeLayerInfos",void 0);k.__decorate([p.property(),e.renderable(),e.messageBundle("esri/widgets/Legend/t9n/Legend")],
c.prototype,"messages",void 0);k.__decorate([p.property({readOnly:!0})],c.prototype,"type",void 0);return c=k.__decorate([p.subclass("esri.widgets.Legend.styles.Classic")],c)}(u)});