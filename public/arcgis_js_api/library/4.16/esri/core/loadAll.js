// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./asyncUtils ./Collection ./Loadable ./maybe".split(" "),function(r,a,d,m,n,p,q){function g(a,k){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(d){switch(d.label){case 0:return[4,a.load()];case 1:return d.sent(),[2,e(a,k)]}})})}function e(a,k){return d.__awaiter(this,void 0,void 0,function(){var l,h,f,g=this;return d.__generator(this,function(e){switch(e.label){case 0:return l=[],h=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=
arguments[b];for(b=0;b<a.length;b++){var c=a[b];q.isNone(c)||(Array.isArray(c)?h.apply(void 0,c):n.isCollection(c)?c.forEach(function(a){return h(a)}):p.isLoadable(c)&&l.push(c))}},k(h),f=null,[4,m.map(l,function(a){return d.__awaiter(g,void 0,void 0,function(){var b;return d.__generator(this,function(c){switch(c.label){case 0:return[4,m.result("loadAll"in a&&"function"===typeof a.loadAll?a.loadAll():a.load())];case 1:return b=c.sent(),!1!==b.ok||f||(f=a),[2]}})})})];case 1:e.sent();if(f)throw f.loadError;
return[2,a]}})})}Object.defineProperty(a,"__esModule",{value:!0});a.loadAll=g;a.loadAllChildren=e;a.default=g});