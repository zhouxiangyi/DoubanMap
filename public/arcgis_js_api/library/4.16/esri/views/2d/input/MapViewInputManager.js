// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Accessor ../../../core/Handles ../../../core/watchUtils ../../../core/accessorSupport/decorators ./handlers/DoubleClickZoom ./handlers/DoubleTapDragZoom ./handlers/DragPan ./handlers/DragRotate ./handlers/GamepadNavigation ./handlers/KeyPan ./handlers/KeyRotate ./handlers/KeyZoom ./handlers/MouseWheelZoom ./handlers/PinchAction ../../input/BrowserEventSource ../../input/InputManager ../../input/handlers/PreventContextMenu ../../input/recognizers/DoubleTapDrag ../../input/recognizers/Drag ../../input/recognizers/ImmediateDoubleClick ../../input/recognizers/PointerClickHoldAndDrag ../../input/recognizers/SingleAndDoubleClick".split(" "),
function(H,I,b,k,l,d,g,h,m,n,p,q,r,t,u,v,w,x,e,y,z,A,B,C,D){var E={left:"ArrowLeft",right:"ArrowRight",up:"ArrowUp",down:"ArrowDown"},F={zoomIn:["\x3d","+"],zoomOut:["-","_"]},G={clockwiseOption1:"a",clockwiseOption2:"A",counterClockwiseOption1:"d",counterClockwiseOption2:"D",resetOption1:"n",resetOption2:"N"};return function(f){function a(){var a=null!==f&&f.apply(this,arguments)||this;a._handles=new l;return a}b.__extends(a,f);a.prototype.initialize=function(){var a=this;this._handles.add([d.whenNot(this.view,
"ready",function(){return a._disconnect()}),d.when(this.view,"ready",function(){return a._connect()})])};a.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this._disconnect()};a.prototype._disconnect=function(){this._inputManager&&(this.view.viewEvents.disconnect(),this._inputManager.destroy(),this._inputManager=null,this._source.destroy(),this._source=null)};a.prototype._connect=function(){var a=this,b=new x.BrowserEventSource(this.view.surface,this.view.input),
c=[new B.ImmediateDoubleClick,new C.PointerClickHoldAndDrag,new D.SingleAndDoubleClick,new A.Drag(this.view.navigation),new z.DoubleTapDrag],c=new e.InputManager({eventSource:b,recognizers:c});c.installHandlers("prevent-context-menu",[new y.PreventContextMenu],e.ViewEventPriorities.INTERNAL);c.installHandlers("navigation",[new w.PinchRotateAndZoom(this.view),new q.GamepadNavigation(this.view),new v.MouseWheelZoom(this.view),new h.DoubleClickZoom(this.view),new h.DoubleClickZoom(this.view,["Ctrl"]),
new n.DragPan(this.view,"primary"),new r.KeyPan(this.view,E),new u.KeyZoom(this.view,F),new t.KeyRotate(this.view,G),new p.DragRotate(this.view,"secondary"),new m.DoubleTapDragZoom(this.view,"touch")],e.ViewEventPriorities.INTERNAL);this.view.viewEvents.connect(c);this._source=b;this._inputManager=c;d.init(this.view.navigation,"browserTouchPanEnabled",function(b){a._source.browserTouchPanningEnabled=!b})};Object.defineProperty(a.prototype,"test",{get:function(){return{inputManager:this._inputManager}},
enumerable:!0,configurable:!0});b.__decorate([g.property()],a.prototype,"view",void 0);return a=b.__decorate([g.subclass("esri.views.2d.input.MapViewInputManager")],a)}(k)});