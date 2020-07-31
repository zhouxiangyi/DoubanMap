// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Evented ../../../../../core/has ../../../../../core/libs/rbush/rbush ./Tile ../../../tiling/TileCoverage ../../../tiling/TileKey".split(" "),function(f,k,q,r,t,u,v,w,x){Object.defineProperty(k,"__esModule",{value:!0});var g={added:[],removed:[]},n=new Set,y=new x(0,0,0,0);f=function(f){function b(a){var c=f.call(this)||this;c._tiles=new Map;c._index=u(9,t("csp-restrictions")?function(a){return{minX:a.bounds[0],minY:a.bounds[1],maxX:a.bounds[2],maxY:a.bounds[3]}}:
[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]);c.tiles=[];c.tileScheme=a;return c}q.__extends(b,f);b.prototype.destroy=function(){this._tiles.clear()};b.prototype.clear=function(){this._tiles.clear();this._index.clear()};b.prototype.has=function(a){return this._tiles.has(a)};b.prototype.get=function(a){return this._tiles.get(a)};b.prototype.findByKey=function(a){return this._tiles.get(a.id)};b.prototype.intersections=function(a,c){var h="string"===typeof a?this.get(a):a;if(!h)return[];var b=
c*h.resolution;c=h.bounds[0]-b;a=h.bounds[1]-b;for(var g=h.bounds[2]+b,h=h.bounds[3]+b,b=[],e=0,f=this._index.search({minX:c,minY:a,maxX:g,maxY:h});e<f.length;e++){var l=f[e],d=l.bounds.slice();d[0]=Math.max(d[0],c);d[1]=Math.max(d[1],a);d[2]=Math.min(d[2],g);d[3]=Math.min(d[3],h);0<d[2]-d[0]&&0<d[3]-d[1]&&b.push({bounds:d,tile:l})}return b};b.prototype.boundsIntersections=function(a){return this._index.search({minX:a[0],minY:a[1],maxX:a[2],maxY:a[3]})};b.prototype.setViewState=function(a){if(a=this.tileScheme.getTileCoverage(a,
0)){var c=a.spans,b=a.lodInfo,f=b.level;if(0<c.length)for(var p=0;p<c.length;p++)for(var e=c[p],k=e.row,l=e.colTo,d=e.colFrom;d<=l;d++){var m=y.set(f,k,b.normalizeCol(d),b.getWorldForColumn(d)).id;n.add(m);this.has(m)||(e=new v.default(this.tileScheme,m),this._tiles.set(m,e),this._index.insert(e),this.tiles.push(e),g.added.push(e))}for(c=this.tiles.length-1;0<=c;c--)e=this.tiles[c],n.has(e.id)||(this._tiles.delete(e.id),this.tiles.splice(c,1),this._index.remove(e),g.removed.push(e));(g.added.length||
g.removed.length)&&this.emit("update",g);w.pool.release(a);n.clear();g.added.length=0;g.removed.length=0}};return b}(r);k.default=f});