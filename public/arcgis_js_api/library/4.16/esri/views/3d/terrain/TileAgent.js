// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/maybe ./TerrainConst ./terrainUtils ./tileUtils".split(" "),function(c,h,w,t,u,x,p){Object.defineProperty(h,"__esModule",{value:!0});var k=Error("Abstract method called on TileAgent");c=function(){function b(){}Object.defineProperty(b.prototype,"updating",{get:function(){return!!this._tileRequested},enumerable:!0,configurable:!0});b.prototype.init=function(a,b,g,e){this.tile=a;this._layerIdx=b;this._layerClass=g;this._suspended=e;this._tileLayerInfo=a.getLayerInfo(b,
g);this._tileRequested=null;a=this._findAncestorWithData();this._setUpsampleTile(a)};b.prototype.startLoading=function(){return this._requestNext()};b.prototype.dispose=function(){this._tileRequested&&(this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this),this._tileRequested=null);this._tileLayerInfo=this.tile=null};b.prototype.setSuspension=function(a){a!==this._suspended&&((this._suspended=a)?this._tileRequested&&(this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,
this),this._tileRequested=null):this._tileLayerInfo.data||this.update())};b.prototype.update=function(){var a=this._findAncestorWithData();this._setUpsampleTile(a);return this._requestNext()};b.prototype.dataArrived=function(a){this._setUpsampleTile(a);this._tileRequested=null;a===this.tile?this.tile.updateRenderData(this._layerClass):this._requestNext()};b.prototype.dataMissing=function(){this._tileRequested=null;this._tileLayerInfo.disposeData();this._requestNext()};b.prototype._agentDone=function(){this.tile.agentDone(this._layerIdx,
this._layerClass);this.dispose()};b.prototype._requestNext=function(){if(this._suspended)return!0;var a=this._findNextDownload();u.TILE_LOADING_DEBUGLOG&&console.log(p.tile2str(this.tile),"next",p.tile2str(a));if(this._tileRequested){if(a===this._tileRequested)return!0;this._tileRequested.unrequestLayerData(this._layerIdx,this._layerClass,this);this._tileRequested=null}a?a.requestLayerData(this._layerIdx,this._layerClass,this)&&(this._tileRequested=a):this._agentDone();return!!this._tileRequested};
b.prototype._findNextDownload=function(){for(var a=this._layerIdx,b=this._layerClass,g=this.tile.surface.layerViewByIndex(a,b),e=x.getLayerWithExtentRange(g),c=g.dataLevelRange,g=c.minLevel,c=c.maxLevel,l=this._desiredMinLevelDelta,h=this._loadingLevelDelta+l,k=this._scaleRangeEnabled?p.fallsWithinLayer:function(){return!0},f,d=this.tile,q=0,m=this._tileLayerInfo.upsampleInfo,m=m?m.tile.level:-1,v=t.get(e,"tilemapCache");d&&k(d,e,!1)&&d.level>=g;){var r=d.level,n=d.layerInfo[b][a];if(n.data&&q>=l){r>
m&&this._setUpsampleTile(d);n.dataInvalidated&&(f=d);break}if((t.isNone(v)||"unavailable"!==v.getAvailability(d.lij[0],d.lij[1],d.lij[2]))&&r<=c&&!n.data&&!n.dataMissing){if(!f||0===r%u.LOADING_LEVEL_MODULO||this.tile.level-f.level<l)f=d;if(q>=h)break}d=d.parent;q++}f&&this.tile.level-f.level<l&&this._tileLayerInfo.upsampleInfo&&(f=null);return f};b.prototype._findAncestorWithData=function(){for(var a=this.tile.vlevel,b=this._desiredMinLevelDelta,c,e=this.tile;e;e=e.parent)if(e.hasLayerData(this._layerIdx,
this._layerClass)){if(a-e.level>=b)return e;c=e}return c};b.prototype._setUpsampleTile=function(a){this._tileLayerInfo.setUpsampleInfo(this.tile,a);this.tile.updateRenderData(this._layerClass)};Object.defineProperty(b.prototype,"test",{get:function(){var a=this;return{findNextDownload:function(){return a._findNextDownload()},tileLayerInfo:this._tileLayerInfo}},enumerable:!0,configurable:!0});return b}();h.TileAgent=c;c=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}w.__extends(a,
b);Object.defineProperty(a.prototype,"_desiredMinLevelDelta",{get:function(){throw k;},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"_loadingLevelDelta",{get:function(){throw k;},enumerable:!0,configurable:!0});return a}(c);h.TILE_AGENT_DONE=new c});