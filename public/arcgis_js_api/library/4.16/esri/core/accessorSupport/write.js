// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../arrayUtils ../Error ../Logger ../promiseUtils ./PropertyOrigin ./utils ./extensions/serializableProperty".split(" "),function(y,k,r,t,u,v,m,l,n){function w(b,g,c,e,f){var d={};g.write.writer.call(b,e,d,c,f);return d}function p(b,g,c,e,f,d){if(!e||!e.write)return!1;var a=b.get(c);if(!f&&e.write.overridePolicy){var h=e.write.overridePolicy.call(b,a,c,d);void 0!==h&&(f=h)}f||(f=e.write);if(!f||!1===f.enabled)return!1;if((null===a&&!f.allowNull||void 0===a)&&f.isRequired)return(g=
new t("web-document-write:property-required","Missing value for required property '"+c+"' on '"+b.declaredClass+"'",{propertyName:c,target:b}),d)&&d.messages?d.messages.push(g):g&&!d&&x.error(g.name,g.message),!1;if(void 0===a||null===a&&!f.allowNull)return!1;h=e.default;void 0===h?a=!1:null!=e.defaultEquals?a=e.defaultEquals(a):"function"===typeof h?Array.isArray(a)?(b=h.call(b,c,d),a=r.equals(b,a)):a=!1:a=h===a;return a?!1:void 0!==e.default?!0:!f.ignoreOrigin&&d&&d.origin&&g.store.originOf(c)<
m.nameToId(d.origin)?!1:!0}function q(b,g,c){if(b&&"function"===typeof b.toJSON&&(!b.toJSON.isDefaultToJSON||!b.write))return l.merge(g,b.toJSON());var e=l.getProperties(b),f=e.metadatas,d=function(a){var d=n.originSpecificWritePropertyDefinition(f[a],c);if(!p(b,e,a,d,null,c))return"continue";var h=b.get(a),k=w(b,d,"string"===typeof d.write.target?d.write.target:a,h,c);0<Object.keys(k).length&&(g=l.merge(g,k),c&&c.resources&&c.resources.pendingOperations&&c.resources.pendingOperations.length&&v.all(c.resources.pendingOperations).then(function(){return l.merge(g,
k)}),c&&c.writtenProperties&&c.writtenProperties.push({target:b,propName:a,oldOrigin:m.idToReadableName(e.store.originOf(a)),newOrigin:c.origin}))},a;for(a in f)d(a);return g}Object.defineProperty(k,"__esModule",{value:!0});var x=u.getLogger("esri.core.accessorSupport.write");k.willPropertyWrite=function(b,g,c,e){var f=l.getProperties(b),d=n.originSpecificWritePropertyDefinition(f.metadatas[g],e);return d?p(b,f,g,d,c,e):!1};k.write=q;k.default=q});