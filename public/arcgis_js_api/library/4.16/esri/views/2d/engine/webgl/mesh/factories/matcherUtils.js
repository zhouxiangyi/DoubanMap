// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/Error ../../../../../../core/Logger ../../util/Matcher".split(" "),function(l,e,f,g,h,b){Object.defineProperty(e,"__esModule",{value:!0});var k=h.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");e.createMatcher=function(c,d,a){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(e){if(!a)return[2,new b.GraphicMatcher(c)];switch(a.type){case "simple":case "dot-density":return[2,b.FeatureMatcher.fromBasicRenderer(a,
c,d)];case "unique-value":return[2,b.MapMatcher.fromUVRenderer(a,c,d)];case "class-breaks":return[2,b.IntervalMatcher.fromCBRenderer(a,c,d)];case "dictionary":return[2,b.DictionaryMatcher.fromDictionaryRenderer(a,c,d)];default:return k.error(new g("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),[2,null]}})})}});