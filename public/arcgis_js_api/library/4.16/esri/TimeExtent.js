// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./core/JSONSupport ./core/accessorSupport/decorators ./layers/support/timeUtils".split(" "),function(f,v,c,r,d,q){f=function(f){function a(b){b=f.call(this,b)||this;b.end=null;b.start=null;return b}c.__extends(a,f);g=a;Object.defineProperty(a,"allTime",{get:function(){return t},enumerable:!0,configurable:!0});Object.defineProperty(a,"empty",{get:function(){return u},enumerable:!0,configurable:!0});a.prototype.readEnd=function(b,a){return null!=a.end?new Date(a.end):null};
a.prototype.writeEnd=function(b,a){a.end=b?b.getTime():null};Object.defineProperty(a.prototype,"isAllTime",{get:function(){return this.equals(g.allTime)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isEmpty",{get:function(){return this.equals(g.empty)},enumerable:!0,configurable:!0});a.prototype.readStart=function(b,a){return null!=a.start?new Date(a.start):null};a.prototype.writeStart=function(b,a){a.start=b?b.getTime():null};a.prototype.clone=function(){return new g({end:this.end,
start:this.start})};a.prototype.intersection=function(b){var a,c,e,d,f,n,h,p;if(!b)return this.clone();if(this.isEmpty||b.isEmpty)return g.empty;if(this.isAllTime)return b.clone();if(b.isAllTime)return this.clone();var k=null!==(c=null===(a=this.start)||void 0===a?void 0:a.getTime())&&void 0!==c?c:-Infinity;a=null!==(d=null===(e=this.end)||void 0===e?void 0:e.getTime())&&void 0!==d?d:Infinity;e=null!==(n=null===(f=b.start)||void 0===f?void 0:f.getTime())&&void 0!==n?n:-Infinity;b=null!==(p=null===
(h=b.end)||void 0===h?void 0:h.getTime())&&void 0!==p?p:Infinity;var l,m;e>=k&&e<=a?l=e:k>=e&&k<=b&&(l=k);a>=e&&a<=b?m=a:b>=k&&b<=a&&(m=b);return isNaN(l)||isNaN(m)?g.empty:(h=new g,h.start=-Infinity===l?null:new Date(l),h.end=Infinity===m?null:new Date(m),h)};a.prototype.offset=function(a,c){if(this.isEmpty||this.isAllTime)return this.clone();var b=new g,e=this.start,d=this.end;e&&(b.start=q.offsetDate(e,a,c));d&&(b.end=q.offsetDate(d,a,c));return b};a.prototype.equals=function(a){if(!a)return!1;
var b=this.start?this.start.getTime():this.start,c=this.end?this.end.getTime():this.end,d=a.start?a.start.getTime():a.start;a=a.end?a.end.getTime():a.end;return b===d&&c===a};var g;c.__decorate([d.property({type:Date,json:{write:{allowNull:!0}}})],a.prototype,"end",void 0);c.__decorate([d.reader("end")],a.prototype,"readEnd",null);c.__decorate([d.writer("end")],a.prototype,"writeEnd",null);c.__decorate([d.property({dependsOn:["start","end"],readOnly:!0,json:{read:!1}})],a.prototype,"isAllTime",null);
c.__decorate([d.property({dependsOn:["start","end"],readOnly:!0,json:{read:!1}})],a.prototype,"isEmpty",null);c.__decorate([d.property({type:Date,json:{write:{allowNull:!0}}})],a.prototype,"start",void 0);c.__decorate([d.reader("start")],a.prototype,"readStart",null);c.__decorate([d.writer("start")],a.prototype,"writeStart",null);return a=g=c.__decorate([d.subclass("esri.TimeExtent")],a)}(r.JSONSupport);var t=new f,u=new f({start:void 0,end:void 0});return f});