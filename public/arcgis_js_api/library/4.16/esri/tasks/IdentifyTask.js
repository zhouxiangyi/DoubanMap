// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../request ../core/accessorSupport/decorators ../geometry/support/normalizeUtils ./Task ./operations/identify ./support/IdentifyParameters ./support/IdentifyResult".split(" "),function(r,t,d,k,f,l,m,n,p,q){return function(h){function b(a){a=h.call(this,a)||this;a.gdbVersion=null;a.url=null;return a}d.__extends(b,h);b.prototype.execute=function(a,b){var e=this;a=this._normalizeParams(a);var f=a.geometry?[a.geometry]:[],g=this._parseUrl(this.url);g.path+="/identify";return l.normalizeCentralMeridian(f).then(function(c){c=
n.identifyToIdentifyRESTParameters(a,{geometry:c&&c[0]});c=e._encode(d.__assign(d.__assign(d.__assign({},g.query),{f:"json"}),c));e.gdbVersion&&(c.gdbVersion=e.gdbVersion);c={query:c};if(e.requestOptions||b)c=d.__assign(d.__assign(d.__assign({},e.requestOptions),b),c);return k(g.path,c).then(e._handleExecuteResponse)})};b.prototype._handleExecuteResponse=function(a){a=a.data;a.results=a.results||[];var b={results:[]};b.results=a.results.map(function(a){return q.fromJSON(a)});return b};b.prototype._normalizeParams=
function(a){return a=p.from(a)};d.__decorate([f.property()],b.prototype,"gdbVersion",void 0);d.__decorate([f.property()],b.prototype,"url",void 0);return b=d.__decorate([f.subclass("esri.tasks.IdentifyTask")],b)}(m)});