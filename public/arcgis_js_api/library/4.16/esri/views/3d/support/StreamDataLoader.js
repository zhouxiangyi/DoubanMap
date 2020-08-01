// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../request ../../../core/Accessor ../../../core/arrayUtils ../../../core/Error ../../../core/lang ../../../core/maybe ../../../core/promiseUtils ../../../core/accessorSupport/decorators ./AsyncWorkerQueue ./StreamDataLoaderTask ../webgl-engine/lib/Util ../../../views/support/Scheduler".split(" "),function(k,h,l,p,u,v,w,x,q,m,r,y,z,A,B){function C(c){if(2>c.byteLength)return"unknown";c=new Uint8Array(c,0,c.byteLength);return 137===c[0]&&80===c[1]?"image/png":71===
c[0]&&73===c[1]?"image/gif":66===c[0]&&77===c[1]?"image/bmp":255===c[0]&&216===c[1]?"image/jpeg":"unknown"}Object.defineProperty(h,"__esModule",{value:!0});k=function(c){function d(){var a=null!==c&&c.apply(this,arguments)||this;a.tasks=new Map;a.onLoadQueue=[];a.doneQueue=[];a.updating=!1;return a}l.__extends(d,c);d.prototype.setup=function(a,b,d){var e=this;this.loadQueue=new y.AsyncWorkerQueue(function(a,b){return e.startLoading(a,b)},function(a,b){return e.doneLoadingCallback(a,b)},a,b);d&&(this.taskHandle=
d.registerTask(B.Task.STREAM_DATA_LOADER,function(a){return e.update(a)},function(){return 0<e.doneQueue.length||0<e.onLoadQueue.length}))};d.prototype.destroy=function(){this.taskHandle&&(this.taskHandle.remove(),this.taskHandle=null);this.tasks.forEach(function(a){a.abortController&&a.abortController.abort()});this.loadQueue.clear();this.tasks=this.doneQueue=this.onLoadQueue=this.loadQueue=null};Object.defineProperty(d.prototype,"busy",{get:function(){return this.loadQueue.busy},enumerable:!0,configurable:!0});
d.prototype.request=function(a,b,d,e){var c=this;void 0===e&&(e={});var f=m.createResolver();f.__signal=q.isSome(e)?e.signal:null;var D=this.createOrUpdateTask(a,b,d,e,f);m.onAbort(e,function(){return c.cancelRequest(D,f)});return f.promise};d.prototype.createTask=function(a,b,d,e,c,f){a=new z.default(a,b,d,e,c);this.updateTask(a,f);this.tasks.set(c,a);1===this.tasks.size&&this._set("updating",!0);this.loadQueue.push(a);return a};d.prototype.cancelRequest=function(a,b){v.removeUnordered(a.resolvers,
b);b.reject(m.createAbortError());0===a.resolvers.length&&(2===a.status&&(a.status=4,this.loadQueue.cancel(a),a.abortController.abort(),a.request=null,a.abortController=null),a.status=4,this.tasks.delete(a.key),0===this.tasks.size&&this._set("updating",!1))};d.prototype.taskKey=function(a,b,d){return a+":"+b+":"+d};d.prototype.updateTask=function(a,b){a.resolvers.push(b)};d.prototype.createOrUpdateTask=function(a,b,d,e,c){var f=q.isSome(e)&&e.uid||a,f=this.taskKey(f,b,d),g=this.tasks.get(f);return g?
(this.updateTask(g,c),g):this.createTask(a,e,b,d,f,c)};d.prototype.doneLoadingCallback=function(a,b){this.loadQueue&&(A.assert(2===a.status),a.status=3,this.taskHandle?this.doneQueue.push({task:a,err:b}):this.doneLoading(a,b))};d.prototype.update=function(a){for(;!a.done&&0<this.onLoadQueue.length;){var b=this.onLoadQueue.shift();m.throwIfAborted(b.task.abortController);b.task.abortController=null;b.callback(b.task);a.madeProgress()}for(;!a.done&&0<this.doneQueue.length;)b=this.doneQueue.shift(),
3!==b.task.status&&(b.err=b.err||m.createAbortError()),this.doneLoading(b.task,b.err),a.madeProgress()};d.prototype.doneLoading=function(a,b){for(var d=a.result instanceof HTMLImageElement?0:a.resolvers.length,c=0,g=a.resolvers;c<g.length;c++){var f=g[c];if(b)m.isAbortError(b)?f.reject(b):f.reject(new w("stream-data-loader:request-error","Failed to request resource at '"+a.url+"'. "+b,{url:a.url,error:b}));else{--d;var l=0>=d?a.result:x.clone(a.result);f.resolve(l)}}this.tasks.delete(a.key);0===this.tasks.size&&
this._set("updating",!1)};d.prototype.startLoading=function(a,b){var d=this;if(4===a.status)return!1;a.startTime=performance.now();a.status=2;var c,g;switch(a.docType){case "binary":g="array-buffer";c=0;break;case "image":g="image";break;case "image+type":g="array-buffer";break;default:g="json"}a.abortController=m.createAbortController();var f=a.abortController.signal;a.request=p(a.url,l.__assign(l.__assign({},a.options),{responseType:g,timeout:c,signal:f}));var h=function(){},k=function(c){a.duration=
performance.now()-a.startTime;a.size=c instanceof ArrayBuffer?c.byteLength:a.size||0;a.result=c;d.taskHandle?d.onLoadQueue.push({callback:b,task:a}):(a.abortController=null,b(a))},n=function(c){2===a.status&&b(a,c);h()};if("image+type"!==a.docType)return a.request.then(function(a){return k(a.data)},n),!0;a.request.then(function(b){b=b.data;var d=C(b);g="image";a.size=b.byteLength;if("unknown"===d)a.request=p(a.url,{responseType:g,timeout:c,signal:f}),a.request.then(function(a){return k(a.data)},n);
else{b=new Blob([b],{type:d});var e=window.URL.createObjectURL(b);h=function(){return window.URL.revokeObjectURL(e)};a.request=p(e,{responseType:g,timeout:c,signal:f});a.request.then(function(a){return k(new t(a.data,d,h))},n)}},n);return!0};Object.defineProperty(d.prototype,"test",{get:function(){return{loadQueue:this.loadQueue}},enumerable:!0,configurable:!0});l.__decorate([r.property({readOnly:!0})],d.prototype,"updating",void 0);return d=l.__decorate([r.subclass("esri.views.3d.support.StreamDataLoader")],
d)}(u);h.StreamDataLoader=k;var t=function(){function c(c,a,b){this.image=c;this.type=a;this.release=b}Object.defineProperty(c.prototype,"isOpaque",{get:function(){return"image/jpeg"===this.type},enumerable:!0,configurable:!0});return c}();h.ImageWithType=t;h.default=k});