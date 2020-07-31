// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/lang ../core/screenUtils ../core/accessorSupport/decorators ./FillSymbol ./support/urlUtils".split(" "),function(n,p,c,k,e,d,m,l){return function(g){function a(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];b=g.apply(this,b)||this;b.type="picture-fill";b.url=null;b.xscale=1;b.yscale=1;b.width=12;b.height=12;b.xoffset=0;b.yoffset=0;b.source=null;return b}c.__extends(a,g);h=a;a.prototype.normalizeCtorArgs=function(b,a,c,d){if(b&&"string"!==typeof b&&
null==b.imageData)return b;var f={};b&&(f.url=b);a&&(f.outline=a);null!=c&&(f.width=e.toPt(c));null!=d&&(f.height=e.toPt(d));return f};a.prototype.clone=function(){var a=new h({color:k.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});a._set("source",k.clone(this.source));return a};a.prototype.hash=function(){return g.prototype.hash.call(this)+"."+this.color.hash()+
"."+this.height+"."+this.url+"."+this.width+"."+this.xoffset+"."+this.xscale+"."+this.yoffset+"."+this.yscale};var h;c.__decorate([d.enumeration({esriPFS:"picture-fill"})],a.prototype,"type",void 0);c.__decorate([d.property(l.urlPropertyDefinition)],a.prototype,"url",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"xscale",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"yscale",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],
a.prototype,"width",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"height",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"xoffset",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"yoffset",void 0);c.__decorate([d.property(l.sourcePropertyDefinition)],a.prototype,"source",void 0);return a=h=c.__decorate([d.subclass("esri.symbols.PictureFillSymbol")],a)}(m)});