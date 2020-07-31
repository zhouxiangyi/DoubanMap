// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/promiseUtils ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./Spinner/SpinnerViewModel ./support/widget".split(" "),function(n,p,c,k,l,d,m,f,g){return function(h){function b(a,e){a=h.call(this,a,e)||this;a._animationDelay=500;a._animationPromise=null;a.location=null;a.view=null;a.viewModel=new f;a.visible=!1;return a}c.__extends(b,h);b.prototype.initialize=function(){var a=this;this.own([l.watch(this,"visible",function(e){return a._visibleChange(e)})])};
b.prototype.destroy=function(){this._animationPromise=null};b.prototype.show=function(a){var e=this,b=a.location;a=a.promise;b&&(this.viewModel.location=b);this.visible=!0;b=function(){return e.hide()};a&&a.catch(function(){}).then(b)};b.prototype.hide=function(){this.visible=!1};b.prototype.render=function(){var a,b=this.visible,c=!!this.viewModel.screenLocation,b=(a={},a["esri-spinner--start"]=b&&c,a["esri-spinner--finish"]=!b&&c,a);a=this._getPositionStyles();return g.tsx("div",{class:this.classes("esri-spinner",
b),styles:a})};b.prototype._visibleChange=function(a){var b=this;if(a)this.viewModel.screenLocationEnabled=!0;else{var c=k.after(this._animationDelay);this._animationPromise=c;c.catch(function(){}).then(function(){b._animationPromise===c&&(b.viewModel.screenLocationEnabled=!1,b._animationPromise=null)})}};b.prototype._getPositionStyles=function(){var a=this.viewModel,b=a.screenLocation,a=a.view;if(!a||!b)return{};a=a.padding;return{left:b.x-a.left+"px",top:b.y-a.top+"px"}};c.__decorate([d.aliasOf("viewModel.location")],
b.prototype,"location",void 0);c.__decorate([d.aliasOf("viewModel.view")],b.prototype,"view",void 0);c.__decorate([d.property({type:f}),g.renderable(["viewModel.screenLocation","viewModel.screenLocationEnabled"])],b.prototype,"viewModel",void 0);c.__decorate([d.aliasOf("viewModel.visible")],b.prototype,"visible",void 0);return b=c.__decorate([d.subclass("esri.widgets.Spinner")],b)}(m)});