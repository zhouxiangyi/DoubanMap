//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define("require exports tslib ../../shim/WeakMap ../../shim/Map ./Base ../../shim/IntersectionObserver".split(" "),a)})(function(a,f){Object.defineProperty(f,"__esModule",{value:!0});var g=a("tslib"),l=a("../../shim/WeakMap"),m=a("../../shim/Map"),n=a("./Base"),p=a("../../shim/IntersectionObserver"),e=Object.freeze({intersectionRatio:0,
isIntersecting:!1});a=function(a){function d(){var b=null!==a&&a.apply(this,arguments)||this;b._details=new m.default;b._onIntersect=function(c){return function(a){try{for(var h=g.__values(a),d=h.next();!d.done;d=h.next()){var k=d.value;c.set(k.target,{intersectionRatio:k.intersectionRatio,isIntersecting:k.isIntersecting})}}catch(q){e={error:q}}finally{try{d&&!d.done&&(f=h.return)&&f.call(h)}finally{if(e)throw e.error;}}b.invalidate();var e,f}};return b}g.__extends(d,a);d.prototype.get=function(b,
c){void 0===c&&(c={});var a;if(c.root&&(a=this.getNode(c.root),!a))return e;b=this.getNode(b);if(!b)return e;c=this._getDetails(c)||this._createDetails(c,a);c.entries.get(b)||(c.entries.set(b,e),c.observer.observe(b));return c.entries.get(b)||e};d.prototype.has=function(b,a){b=this.getNode(b);a=this._getDetails(a);return!!(a&&b&&a.entries.has(b))};d.prototype._createDetails=function(a,c){var b=new l.default,d=new p.default(this._onIntersect(b),g.__assign({},a,{root:c}));c=g.__assign({observer:d,entries:b},
a);this._details.set(JSON.stringify(a),c);this.own({destroy:function(){return d.disconnect()}});return c};d.prototype._getDetails=function(a){void 0===a&&(a={});return this._details.get(JSON.stringify(a))};return d}(n.Base);f.Intersection=a;f.default=a});