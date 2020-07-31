// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry ../../../request ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators ../RasterInfo ../RasterStorageInfo ../serviceTileInfoProperty ../TileInfo ../TilemapCache ./BaseRaster ../rasterFunctions/pixelUtils ../../../tasks/support/FeatureSet".split(" "),function(U,V,g,q,x,D,K,L,M,G,J,N,O,P,Q,R,S,T){return function(H){function l(){var r=null!==H&&H.apply(this,arguments)||this;r._levelOffset=
0;r._slices=null;r._tilemapCache=null;return r}g.__extends(l,H);l.prototype.open=function(r){return g.__awaiter(this,void 0,void 0,function(){var a,f,m,b,k,d,c,e,h,F,n,t,u,l,C,y,z,A,B,v,p,w,I,E,q;return g.__generator(this,function(g){switch(g.label){case 0:return[4,this.init()];case 1:g.sent();a=r&&r.signal;if(!this.sourceJSON)return[3,2];m={data:this.sourceJSON};return[3,4];case 2:return[4,x(this.url,{responseType:"json",query:{f:"json"},signal:a})];case 3:m=g.sent(),g.label=4;case 4:f=m;f.ssl&&
(this.url=this.url.replace(/^http:/i,"https:"));this.sourceJSON=b=f.data;k="jpg jpeg png png8 png24 png32 mixed".split(" ");this.tileType=b.cacheType;null===this.tileType&&(-1<k.indexOf(b.tileInfo.format.toLowerCase())?this.tileType="Map":"lerc"===b.tileInfo.format.toLowerCase()?this.tileType="Elevation":this.tileType="Raster");if(!b)throw new D("imageserverraster:open","cannot initialize tiled image service, missing service info");if(!b.tileInfo)throw new D("imageserverraster:open","use ImageryLayer to open non-tiled image services");
this.datasetName=b.name;return[4,this._fetchRasterInfo({signal:a})];case 5:d=g.sent();if(K.isSome(d)){c="Map"===this.tileType?O.readServiceTileInfo(b.tileInfo,b,null):P.fromJSON(b.tileInfo);e=d.extent;h=d.pixelSize;F=.5/d.width*h.x;t=n=void 0;u=c.lodAt(Math.max.apply(null,c.lods.map(function(a){return a.level})));"Map"!==this.tileType&&0!==b.maxScale&&("Raster"===this.tileType?(n=c.lods.filter(function(a){return a.resolution===h.x})[0])||(n=c.lods.filter(function(a){return a.resolution>h.x}).sort(function(a,
b){return a.resolution>b.resolution?1:-1})[0]):(n=c.lods.filter(function(a){return Math.abs(a.scale-b.maxScale)<F})[0])||(n=c.lods.filter(function(a){return a.scale>b.maxScale}).sort(function(a,b){return a.scale>b.scale?1:-1})[0]),h.x=h.y=n.resolution,d.width=Math.ceil((e.xmax-e.xmin)/h.x-.1),d.height=Math.ceil((e.ymax-e.ymin)/h.y-.1));n||(n=u);l=c.lodAt(Math.min.apply(null,c.lods.map(function(a){return a.level})));"Map"===this.tileType?this._levelOffset=c.lods[0].level:0!==b.minScale&&"Elevation"===
this.tileType&&(t=c.lods.filter(function(a){return Math.abs(a.scale-b.minScale)<F})[0],this._levelOffset=t.level-l.level);t||(t=l);C=Math.max(h.x,h.y);if(Math.abs(h.x-h.y)>F||!c.lods.some(function(a){return Math.abs(a.resolution-C)<F}))h.x=h.y=n.resolution,d.width=Math.ceil((e.xmax-e.xmin)/h.x-.1),d.height=Math.ceil((e.ymax-e.ymin)/h.y-.1);y=n.level-t.level;z=c.size;A=z[0];B=z[1];v=c.origin;p=h.x;w=h.y;I=[{minCol:Math.floor((e.xmin-v.x+.1*p)/A/p),maxCol:Math.floor((e.xmax-v.x-.1*p)/A/p),minRow:Math.floor((v.y-
e.ymax+.1*w)/B/w),maxRow:Math.floor((v.y-e.ymin-.1*w)/B/w)}];if(0<y)for(E=0;E<y;E++)p*=2,w*=2,I.push({minCol:Math.floor((e.xmin-v.x+.1*p)/A/p),maxCol:Math.floor((e.xmax-v.x-.1*p)/A/p),minRow:Math.floor((v.y-e.ymax+.1*w)/B/p),maxRow:Math.floor((v.y-e.ymin-.1*w)/B/p)});d.storageInfo=new N({blockWidth:c.size[0],blockHeight:c.size[1],pyramidBlockWidth:c.size[0],pyramidBlockHeight:c.size[1],compression:c.format,origin:c.origin,firstPyramidLevel:1,maximumPyramidLevel:y,tileInfo:c,blockBoundary:I});this._set("rasterInfo",
d)}else throw new D("image-server-raster:open","cannot initialize image service");-1<b.capabilities.toLowerCase().indexOf("tilemap")&&(q={tileInfo:d.storageInfo.tileInfo,parsedUrl:M.urlToObject(this.url),url:this.url,tileServers:[],type:"tile"},this._tilemapCache=new Q.TilemapCache({layer:q}));return[2]}})})};l.prototype.fetchRawTile=function(r,a,f,m){void 0===m&&(m={});return g.__awaiter(this,void 0,void 0,function(){var b,k,d,c,e,h,l,n,t,u,q,C,y,z,A,B,v,p,w,x,E,D;return g.__generator(this,function(g){switch(g.label){case 0:return b=
this.rasterInfo,k=b.storageInfo,d=b.extent,c=b.pixelSize,e=k.maximumPyramidLevel-r+this._levelOffset,h=this.url+"/tile/"+e+"/"+a+"/"+f,l=this._slices?{sliceId:m.sliceId||0}:null,[4,this.request({url:h,query:l,responseType:"array-buffer"},m.signal)];case 1:return(n=g.sent())?[4,this.decodePixelBlock(n,{width:k.tileInfo.size[0],height:k.tileInfo.size[1],planes:null,pixelType:null,isPoint:"Elevation"===this.tileType})]:[2,null];case 2:t=g.sent();u=k.blockBoundary[r];if("jpg"!==k.compression||f>u.minCol&&
f<u.maxCol&&a>u.minRow&&a<u.maxRow)return[2,t];q=k.origin;C=k.blockWidth;y=k.blockHeight;z=Math.pow(2,r);A=Math.round((d.xmin-q.x)/(c.x*z))%C;B=Math.round((d.xmax-q.x)/(c.x*z))%C;v=Math.round((q.y-d.ymax)/(c.x*z))%y;p=Math.round((q.y-d.ymin)/(c.x*z))%y;w=f===u.minCol?A:0;x=a===u.minRow?v:0;E=f===u.maxCol?B:C;D=a===u.maxRow?p:y;S.setValidBoundary(t,{x:w,y:x},{width:E-w,height:D-x});return[2,t]}})})};l.prototype.getSliceIndex=function(g){for(var a=0;a<this._slices.length;a++){var f=this._slices[a].multidimensionalDefinition;
if(f.length===g.length&&!f.some(function(a){var b=g.filter(function(b){return a.variableName===b.variableName&&b.dimensionName===a.dimensionName})[0];if(!b)return null;var f=Array.isArray(a.values[0])?a.values[0][0]:a.values[0],b=Array.isArray(b.values[0])?b.values[0][0]:b.values[0];return f!==b}))return a}return null};l.prototype.computeBestPyramidLevelForLocation=function(l,a){void 0===a&&(a={});return g.__awaiter(this,void 0,void 0,function(){var f,m,b,k,d,c;return g.__generator(this,function(e){switch(e.label){case 0:if(!this._tilemapCache)return[2,
0];f=this.identifyPixelLocation(l,0,a.datumTransformation);if(null===f)return[2,null];m=0;b=this.rasterInfo.storageInfo.maximumPyramidLevel;k=b-m+this._levelOffset;d=f.srcLocation;e.label=1;case 1:if(!(0<=k))return[3,6];e.label=2;case 2:return e.trys.push([2,4,,5]),[4,this._tilemapCache.fetchAvailability(k,f.row,f.col,a)];case 3:return c=e.sent(),"available"===c?[3,6]:[3,5];case 4:return e.sent(),[3,5];case 5:return k--,m++,f=this.identifyPixelLocation(d,m,a.datumTransformation),null===f?[2,null]:
[3,1];case 6:return-1===k||null==f?[2,null]:[2,m]}})})};l.prototype._fetchRasterInfo=function(l){return g.__awaiter(this,void 0,void 0,function(){var a,f,m,b,k,d,c,e,h,r,n,t,u=this;return g.__generator(this,function(g){a=this.sourceJSON;f=Math.ceil((a.extent.xmax-a.extent.xmin)/a.pixelSizeX-.1);m=Math.ceil((a.extent.ymax-a.extent.ymin)/a.pixelSizeY-.1);b=q.SpatialReference.fromJSON(a.spatialReference||a.extent.spatialReference);if("Map"===this.tileType)return[2,new J({width:f,height:m,bandCount:3,
extent:q.Extent.fromJSON(a.extent),spatialReference:b,pixelSize:new q.Point({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:b}),pixelType:"u8",statistics:null})];k=l.slice;d=l.signal;c=a.hasRasterAttributeTable?x(this.url+"/rasterAttributeTable",{query:{slice:k,f:"json"},signal:d}).then(function(a){return T.fromJSON(a.data)}).catch(function(){return null}):!1;e=a.hasColormap?x(this.url+"/colormap",{query:{slice:k,f:"json"},signal:d}).then(function(a){return a.data&&a.data.colormap}):!1;h=a.hasHistograms?
x(this.url+"/histograms",{query:{slice:k,f:"json"},signal:d}).then(function(a){return a.data&&a.data.histograms}):!1;r=x(this.url+"/keyProperties",{query:{f:"json"},signal:d}).then(function(a){return a.data}).catch(function(){});n=a.hasMultidimensions?x(this.url+"/multidimensionalInfo",{query:{f:"json"},signal:d}).then(function(a){return a.data&&a.data.multidimensionalInfo}):!1;t=a.hasMultidimensions?x(this.url+"/slices",{query:{f:"json"},signal:d}).then(function(a){return a.data&&a.data.slices}).catch(function(){}):
!1;return[2,L.all([c,e,h,r,n,t]).then(function(c){var e=null;if(a.minValues&&a.minValues.length===a.bandCount)for(var e=[],d=0;d<a.minValues.length;d++)e.push({min:a.minValues[d],max:a.maxValues[d],avg:a.meanValues[d],stddev:a.stdvValues[d]});u._slices=c[5]||null;return new J({width:f,height:m,bandCount:a.bandCount,extent:q.Extent.fromJSON(a.extent),spatialReference:b,pixelSize:new q.Point({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:b}),pixelType:a.pixelType.toLowerCase(),statistics:e,attributeTable:c[0]||
null,colormap:c[1]||null,histograms:c[2]||null,keyProperties:c[3]||null,multidimensionalInfo:c[4]||null})})]})})};g.__decorate([G.property({type:String,json:{write:!0}})],l.prototype,"datasetFormat",void 0);g.__decorate([G.property()],l.prototype,"tileType",void 0);return l=g.__decorate([G.subclass("esri.layers.support.rasterDatasets.ImageServerRaster")],l)}(R)});