// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error","../../core/promiseUtils","../../support/actions/ActionButton"],function(k,b,e,d,h){Object.defineProperty(b,"__esModule",{value:!0});b.zoomToFeature=new h({id:"zoom-to-feature",title:"{messages.zoom}",className:"esri-icon-zoom-in-magnifying-glass"});b.removeSelectedFeature=new h({id:"remove-selected-feature",title:"{messages.remove}",className:"esri-icon-trash"});b.all=[b.zoomToFeature,b.removeSelectedFeature];b.triggerAction=function(a){var f=a.view,
c=a.event.action;a=f&&f.popup;if(!c)return d.reject(new e("trigger-action:missing-arguments","Event has no action"));if(!a)return d.reject(new e("trigger-action:missing-arguments","view.popup is missing"));var g=c.disabled,c=c.id;if(!c)return d.reject(new e("trigger-action:invalid-action","action.id is missing"));if(g)return d.reject(new e("trigger-action:invalid-action","Action is disabled"));if(c===b.zoomToFeature.id)return a.viewModel.zoomToLocation();if(c===b.removeSelectedFeature.id){a.close();
a=a.selectedFeature;if(!a)return d.reject(new e("trigger-action:"+b.removeSelectedFeature.id,"selectedFeature is required",{selectedFeature:a}));(g=a.sourceLayer)?g.remove(a):f.graphics.remove(a)}return d.resolve()}});