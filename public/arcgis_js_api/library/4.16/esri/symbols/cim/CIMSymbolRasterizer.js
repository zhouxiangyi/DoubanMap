// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../core/promiseUtils ../../core/screenUtils ../../core/string ../../geometry/support/jsonUtils ./cimAnalyzer ./cimSymbolUtils ./Rasterizer ./TextRasterizer ./utils ../support/Symbol3DAnchorPosition2D".split(" "),function(F,B,t,L,G,n,M,C,H,N,O,P,l,Q){function R(c){return(c?Object.keys(c):[]).map(function(a){return{name:a,alias:a,type:"string"===typeof c[a]?"esriFieldTypeString":"esriFieldTypeDouble"}})}function S(c){if(!(c&&c.data&&c.data.symbol))return null;
switch(c.data.symbol.type){case "CIMPointSymbol":case "CIMTextSymbol":return"esriGeometryPoint";case "CIMLineSymbol":return"esriGeometryPolyline";case "CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function x(c,a,b,d){if("function"===typeof c.materialHash){var e=c.materialHash;a=e(a,b,d);c=H.analyzeCIMResource(c.cim,c.materialOverrides)}else a=c.materialHash,c=c.cim;return{analyzedCIM:c,hash:a}}Object.defineProperty(B,"__esModule",{value:!0});var I;(function(c){c.Legend="legend";
c.Preview="preview"})(I=B.GeometryStyle||(B.GeometryStyle={}));var E=function(c,a,b){if(c&&c.targetSize){var d=void 0;return d=b?c.targetSize/n.pt2px(Math.max(b.frame.xmax-b.frame.xmin,b.frame.ymax-b.frame.ymin)):c.targetSize/a.referenceSize}return c?c.scaleFactor:1},J={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,
100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:-2,ymin:2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}};F=function(){function c(a,b){this._spatialReference=a;this._avoidSDF=b;this._resourceCache=new Map;this._rasterizer=new O.default;
this._textRasterizer=new P.default;this._pictureMarkerCache=new Map}c.prototype.rasterizeCIMSymbolAsync=function(a,b,d,e,h,k,r,f){return t.__awaiter(this,void 0,void 0,function(){var g;return t.__generator(this,function(c){switch(c.label){case 0:return e=e||(b?null!=b.centroid?"esriGeometryPolygon":C.getJsonType(b.geometry):null)||S(a),[4,this.analyzeCIMSymbol(a,b?R(b.attributes):null,d,e,f)];case 1:return g=c.sent(),[2,this.rasterizeCIMSymbol(g,b,e,h,k,r)]}})})};c.prototype.analyzeCIMSymbol=function(a,
b,d,e,h){return t.__awaiter(this,void 0,void 0,function(){var k,r,f,g,c,m,p;return t.__generator(this,function(q){switch(q.label){case 0:return[4,N.fetchSymbol(a,h)];case 1:return k=q.sent(),r=[],b?f={geometryType:e,spatialReference:this._spatialReference,fields:b}:(k=k.clone(),"CIMSymbolReference"===k.data.type&&(k.data.primitiveOverrides=[],f=null)),[4,H.analyzeCIMSymbol(k.data,f,r,this._avoidSDF)];case 2:q.sent();G.throwIfAborted(h);c=0;for(m=r;c<m.length;c++){p=m[c];if("CIMPictureMarker"===p.cim.type||
"CIMPictureFill"===p.cim.type||"CIMPictureStroke"===p.cim.type)g||(g=[]),g.push(this.fetchPictureMarkerResource(p,h));d&&"text"===p.type&&"string"===typeof p.text&&-1<p.text.indexOf("[")&&(p.text=l.createLabelOverrideFunction(d,p.text,p.cim.textCase))}return g?[4,G.all(g)]:[3,4];case 3:q.sent(),q.label=4;case 4:return[2,r]}})})};c.prototype.fetchPictureMarkerResource=function(a,b){return t.__awaiter(this,void 0,void 0,function(){var d,e,h;return t.__generator(this,function(c){switch(c.label){case 0:return d=
a.materialHash,this._pictureMarkerCache.get(d)?[3,2]:[4,L(a.cim.url,{responseType:"image",signal:b&&b.signal})];case 1:e=c.sent(),h=e.data,this._pictureMarkerCache.set(d,h),c.label=2;case 2:return[2]}})})};c.prototype.rasterizeCIMSymbol=function(a,b,d,e,h,c){for(var r=[],f=0;f<a.length;f++){var g=a[f];e&&"function"===typeof e.scaleFactor&&(e.scaleFactor=e.scaleFactor(b,h,c));var k=this._getRasterizedResource(g,b,d,e,h,c);if(k){var m=0,p=k.anchorX||0,n=k.anchorY||0,K=!1,t=0,y=0;if("esriGeometryPoint"===
d)if(y=E(e,g,null),t=l.evaluateValueOrFunction(g.offsetX,b,h,c)*y||0,y=l.evaluateValueOrFunction(g.offsetY,b,h,c)*y||0,"marker"===g.type)m=l.evaluateValueOrFunction(g.rotation,b,h,c)||0,K=g.rotateClockwise?g.rotateClockwise:!1;else if("text"===g.type){m=l.evaluateValueOrFunction(g.angle,b,h,c)||0;if(void 0!==g.horizontalAlignment)switch(g.horizontalAlignment){case "left":p=-.5;break;case "right":p=.5;break;default:p=0}if(void 0!==g.verticalAlignment)switch(g.verticalAlignment){case "top":n=.5;break;
case "bottom":n=-.5;break;case "baseline":n=-.25;break;default:n=0}}null!=k&&r.push({angle:m,rotateClockWise:K,anchorX:p,anchorY:n,offsetX:t,offsetY:y,rasterizedResource:k})}}return this.getSymbolImage(r)};c.prototype.getSymbolImage=function(a){for(var b=document.createElement("canvas"),d=b.getContext("2d"),e=0,c=0,k=0,r=0,f=[],g=0;g<a.length;g++){var q=a[g],m=q.rasterizedResource;if(m){var p=m.size,l=q.offsetX,t=q.offsetY,x=q.anchorX,y=q.anchorY,B=q.rotateClockWise||!1,q=q.angle,u=n.pt2px(l)-p[0]*
(.5+x),z=n.pt2px(t)-p[1]*(.5+y),D=u+p[0],w=z+p[1];if(q){B&&(q=-q);var v=Math.sin(q*Math.PI/180),A=Math.cos(q*Math.PI/180),p=u*A-z*v,C=u*v+z*A,E=u*A-w*v,F=u*v+w*A,G=D*A-w*v,w=D*v+w*A,H=D*A-z*v,v=D*v+z*A,u=Math.min(p,E,G,H),z=Math.min(C,F,w,v),D=Math.max(p,E,G,H),w=Math.max(C,F,w,v)}e=u<e?u:e;c=z<c?z:c;k=D>k?D:k;r=w>r?w:r;u=d.createImageData(m.size[0],m.size[1]);u.data.set(new Uint8ClampedArray(m.image.buffer));m={offsetX:l,offsetY:t,rotateClockwise:B,angle:q,rasterizedImage:u,anchorX:x,anchorY:y};
f.push(m)}}b.width=k-e;b.height=r-c;a=-e;for(g=0;g<f.length;g++)m=f[g],e=this._imageDataToCanvas(m.rasterizedImage),c=a-m.rasterizedImage.width*(.5+m.anchorX),k=r-m.rasterizedImage.height*(.5-m.anchorY),m.angle?(l=(360-m.angle)*Math.PI/180,d.save(),d.translate(n.pt2px(m.offsetX),-n.pt2px(m.offsetY)),d.translate(a,r),d.rotate(l),d.translate(-a,-r),d.drawImage(e,c,k),d.restore()):d.drawImage(e,c+n.pt2px(m.offsetX),k-n.pt2px(m.offsetY));f=new Q.default({x:a/b.width-.5,y:r/b.height-.5});return{imageData:0!==
b.width&&0!==b.height?d.getImageData(0,0,b.width,b.height):d.createImageData(1,1),anchorPosition:f}};c.prototype._imageDataToCanvas=function(a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var b=this._imageDataCanvas,d=b.getContext("2d");b.width=a.width;b.height=a.height;d.putImageData(a,0,0);return b};c.prototype._imageTo32Array=function(a,b,d){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var c=this._imageDataCanvas,h=c.getContext("2d");
c.width=b;c.height=d;h.drawImage(a,0,0,b,d);return new Uint32Array(h.getImageData(0,0,b,d).data.buffer)};c.prototype._getRasterizedResource=function(a,b,c,e,h,k){var d,f,g;if("esriGeometryPolyline"===c||"esriGeometryPolygon"===c)if(d=e&&e.style?e.style:I.Legend,d="esriGeometryPolyline"===c?J.stroke[d]:J.fill[d],"line"===a.type)if("CIMSolidStroke"===a.cim.type)a=x(a,b,h,k),f=a.analyzedCIM,g=a.hash,f=this._embedCIMLayerInVectorMarker(f,d);else return"CIMPictureStroke"===a.cim.type?(f=l.evaluateValueOrFunction(a.width,
b,h,k),g=e=c=void 0,b=this._getPictureResource(a,f),c=b.image,e=b.width,g=b.height,this._rasterizePictureResource(a,c,e,g,d,f)):null;else if("marker"===a.type)if("CIMPictureMarker"!==a.cim.type&&"CIMVectorMarker"===a.cim.type)a.cim.offsetX=l.evaluateValueOrFunction(a.offsetX,b,h,k),a.cim.offsetY=l.evaluateValueOrFunction(a.offsetY,b,h,k),a.cim.rotation=l.evaluateValueOrFunction(a.rotation,b,h,k),a.cim.markerPlacement=a.markerPlacement,f=x(a,b,h,k).analyzedCIM,g=M.numericHash(JSON.stringify(f)).toString(),
f=this._embedCIMLayerInVectorMarker(f,d);else return null;else{if("text"===a.type)return null;if("fill"===a.type){if("CIMHatchFill"===a.cim.type||"CIMVectorMarker"===a.cim.type||"CIMPictureMarker"===a.cim.type||"CIMPictureFill"===a.cim.type)return f=a.cim.size||a.cim.height,g=e=c=void 0,"CIMPictureMarker"===a.cim.type||"CIMPictureFill"===a.cim.type?(b=this._getPictureResource(a,f),c=b.image,e=b.width,g=b.height):(b=x(a,b,h,k),f=b.analyzedCIM,g=b.hash,b=this._rasterizer.rasterizeJSONResource(f,this._avoidSDF),
c=b.image,e=b.size[0],g=b.size[1]),this._rasterizePictureResource(a,c,e,g,d,null);if("CIMSolidFill"===a.cim.type)a=x(a,b,h,k),f=a.analyzedCIM,g=a.hash,f=this._embedCIMLayerInVectorMarker(f,d);else return null}}else{if("text"===a.type)return d=this._rasterizeTextResource(a,b,e,h,k);d=x(a,b,h,k);f=d.analyzedCIM;g=d.hash;d=E(e,a,null);if("CIMPictureMarker"===a.cim.type)return f=l.evaluateValueOrFunction(a.size,b,h,k)*d,d=this._getPictureResource(a,f),c=d.image,e=d.width,g=d.height,d={image:c,size:[e,
g],sdf:!1,simplePattern:!1,anchorX:a.anchorPoint?a.anchorPoint.x:0,anchorY:a.anchorPoint?a.anchorPoint.y:0};f.size*=d}g+=c;e&&(g+=JSON.stringify(e));a=this._resourceCache;if(a.has(g))return a.get(g);d=this._rasterizer.rasterizeJSONResource(f,this._avoidSDF);a.set(g,d);return d};c.prototype._rasterizeTextResource=function(a,b,c,e,h){var d=E(c,a,null);c=l.evaluateValueOrFunction(a.text,b,e,h);if(!c||0===c.length)return null;var r=l.evaluateValueOrFunction(a.fontName,b,e,h),f=l.evaluateValueOrFunction(a.style,
b,e,h),g=l.evaluateValueOrFunction(a.weight,b,e,h),q=l.evaluateValueOrFunction(a.decoration,b,e,h),d=l.evaluateValueOrFunction(a.size,b,e,h)*d,m=l.evaluateValueOrFunction(a.horizontalAlignment,b,e,h),p=l.evaluateValueOrFunction(a.verticalAlignment,b,e,h),n=l.colorToArray(l.evaluateValueOrFunction(a.color,b,e,h)),t=l.colorToArray(l.evaluateValueOrFunction(a.outlineColor,b,e,h));a=l.evaluateValueOrFunction(a.outlineSize,b,e,h);return this._textRasterizer.rasterizeText(c,{color:n,size:d,horizontalAlignment:m,
verticalAlignment:p,font:{family:r,style:f,weight:g,decoration:q},halo:{size:a||0,color:t,style:f},pixelRatio:1,premultiplyColors:!this._avoidSDF})};c.prototype._rasterizePictureResource=function(a,b,c,e,h,k){var d=document.createElement("canvas"),f=d.getContext("2d");d.height=n.pt2px(Math.max(Math.abs(h.frame.ymax-h.frame.ymin),k));d.width=n.pt2px(Math.abs(h.frame.xmax-h.frame.xmin));c=f.createImageData(c,e);c.data.set(new Uint8ClampedArray(b.buffer));b=this._imageDataToCanvas(c);b=f.createPattern(b,
"repeat");c=Math.cos((-a.cim.rotation||0)*Math.PI/180);e=Math.sin((-a.cim.rotation||0)*Math.PI/180);b.setTransform({m11:c,m12:e,m21:-e,m22:c,m41:n.pt2px(a.cim.offsetX)||0,m42:n.pt2px(a.cim.offsetY)||0});a=h.canvasPaths;var g,l,m;C.isPolygon(a)?(g=a.rings,f.fillStyle=b,l=f.fill,m=["evenodd"]):C.isPolyline(a)&&(g=a.paths,f.strokeStyle=b,f.lineWidth=k,l=f.stroke,g[0][0][1]=d.height/2,g[0][1][1]=d.height/2);f.beginPath();for(k=0;k<g.length;k++)if(h=(a=g[k])?a.length:0,1<h){b=a[0];f.moveTo(n.pt2px(b[0]),
n.pt2px(b[1]));for(c=1;c<h;++c)b=a[c],f.lineTo(n.pt2px(b[0]),n.pt2px(b[1]));f.closePath()}l.apply(f,m);f=f.getImageData(0,0,d.width,d.height);f=new Uint8Array(f.data);return{size:[d.width,d.height],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}};c.prototype._getPictureResource=function(a,b){a=this._pictureMarkerCache.get(a.materialHash);if(!a)return null;var c=a.height/a.width,e=b?1<c?n.pt2px(b):n.pt2px(b)/c:a.width;b=b?1<c?n.pt2px(b)*c:n.pt2px(b):a.height;return{image:this._imageTo32Array(a,
e,b),width:e,height:b}};c.prototype._embedCIMLayerInVectorMarker=function(a,b){var c=C.isPolygon(b.geometry)?"CIMPolygonSymbol":"CIMLineSymbol";return{type:"CIMVectorMarker",frame:b.frame,markerGraphics:[{type:"CIMMarkerGraphic",geometry:b.geometry,symbol:{type:c,symbolLayers:[a]}}]}};return c}();B.CIMSymbolRasterizer=F});