// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../../ViewAnimation ./CameraController".split(" "),function(f,g,h,c,d,l,k,b){Object.defineProperty(g,"__esModule",{value:!0});f=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}h.__extends(a,e);Object.defineProperty(a.prototype,"canStop",{get:function(){return!0},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"asyncResult",{get:function(){return this._asyncResult},
set:function(a){this._asyncResult&&(this._asyncResult.reject(d.createAbortError()),this._asyncResult=null);this.state===b.State.Finished||this.state===b.State.Stopped?this.state===b.State.Finished?a.resolve():a.reject(d.createAbortError()):this._asyncResult=a},enumerable:!0,configurable:!0});a.prototype.onControllerStart=function(){var a=this;this.state=b.State.Running;c.isSome(this.viewAnimation)&&this.viewAnimation.when(function(){return a.updateStateFromViewAnimation()},function(){return a.updateStateFromViewAnimation()})};
a.prototype.updateStateFromViewAnimation=function(){!c.isSome(this.viewAnimation)||this.state!==b.State.Ready&&this.state!==b.State.Running||(this.viewAnimation.state===k.State.FINISHED?this.finish():this.viewAnimation.state===k.State.STOPPED&&(this.state=b.State.Stopped))};a.prototype.onControllerEnd=function(){c.isSome(this.viewAnimation)&&!this.viewAnimation.done&&(this.state===b.State.Finished?this.viewAnimation.finish():this.state===b.State.Stopped&&this.viewAnimation.stop());this._asyncResult&&
(this.state===b.State.Finished?this._asyncResult.resolve():this._asyncResult.reject(d.createAbortError()))};a.prototype.finish=function(){this.finishController()};return a=h.__decorate([l.subclass("esri.views.3d.state.controllers.AnimationController")],a)}(b.CameraController);g.AnimationController=f});