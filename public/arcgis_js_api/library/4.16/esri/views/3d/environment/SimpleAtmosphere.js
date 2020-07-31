// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Logger ../../../core/mathUtils ../../../core/mathUtils ../../../core/promiseUtils ../../../core/watchUtils ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec2f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ./atmosphereUtils ./SimpleAtmosphereTechnique ./resources/SimpleAtmosphereTexture ../support/earthUtils ../support/imageUtils ../support/mathUtils ../support/buffer/glUtil ../support/buffer/InterleavedLayout ../webgl-engine/lib/DefaultVertexAttributeLocations ../webgl-engine/lib/glUtil3D ../webgl-engine/lib/Util ../../webgl/BufferObject ../../webgl/Texture ../../webgl/Util ../../webgl/VertexArrayObject".split(" "),
function(u,Z,D,E,F,p,G,H,I,J,K,k,m,v,q,L,l,M,N,O,P,Q,R,w,S,T,x,U){function y(h,c,b,a,f){var e=k.vec3.length(h),g=a*Math.sqrt(e*e-a*a)/e,d=f.silCircleV1,l=f.silCircleV2;k.vec3.scale(f.silCircleCenter,h,Math.sqrt(a*a-g*g)/e);k.vec3.cross(d,h,c);1>k.vec3.squaredLength(d)&&k.vec3.cross(d,h,b);k.vec3.scale(d,d,g/k.vec3.length(d));k.vec3.cross(l,d,h);k.vec3.scale(l,l,g/k.vec3.length(l));return g}function z(h,c,b,a){k.vec3.add(n,a.silCircleCenter,a.silCircleV2);k.vec3.scale(r,n,A);H.mat4.lookAt(t,c,n,b);
w.project(n,t,h.projectionMatrix,h.viewport);w.project(r,t,h.projectionMatrix,h.viewport);return k.vec3.distance(n,r)/h.height}var V=D.getLogger("esri.views.3d.environment.SimpleAtmosphere"),B=-v.INNER_ATMOSPHERE_DEPTH,W=(l.earthRadius+B)/l.earthRadius,X=(l.earthRadius+0)/l.earthRadius,A=(l.earthRadius+3E5)/l.earthRadius,Y=N.makePiecewiseLinearFunction([[50,.1015625],[500,.21875],[5E3,.51171875],[5E4,.4140625]]);u=function(){function h(c,b){this.slot=14;this._renderData={texV:K.vec2f64.create(),silCircleCenter:m.vec3f64.create(),
silCircleV1:m.vec3f64.create(),silCircleV2:m.vec3f64.create(),altitudeFade:0,innerScale:0,undergroundFadeAlpha:0};this._fadeVaoCount=0;this._readyResolver=p.createResolver();this._readyController=p.createAbortController();this._techniqueRepository=b;this._atmosphereTechniqueConfig=new q.SimpleAtmosphereTechniqueConfiguration;this.view=c}Object.defineProperty(h.prototype,"canRender",{get:function(){return null!=this._texture},enumerable:!0,configurable:!0});h.prototype.when=function(){return this._readyResolver.promise};
h.prototype.initializeRenderContext=function(c){var b=this,a=c.rctx;this._cameraChangeHandle=G.init(this.view,"state.camera",function(){return c.requestRender()},!0);this._atmosphereTechniqueConfig.geometry=0;this._atmosphereConeTechnique=this._techniqueRepository.acquireAndReleaseExisting(q.SimpleAtmosphereTechnique,this._atmosphereTechniqueConfig,this._atmosphereConeTechnique);this._atmosphereTechniqueConfig.geometry=2;this._atmosphereUndergroundTechnique=this._techniqueRepository.acquireAndReleaseExisting(q.SimpleAtmosphereTechnique,
this._atmosphereTechniqueConfig,this._atmosphereUndergroundTechnique);this._vao=this._createRibbon(a);this._vaoCount=x.vertexCount(this._vao,"geometry");this._fadeVao=R.createQuadVAO(a);this._fadeVaoCount=x.vertexCount(this._fadeVao,"geometry");M.requestImage(L,{signal:this._readyController.signal}).then(function(f){b._texture=new T(a,{pixelFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!0},f);c.requestRender();b._readyController=null;b._readyResolver.resolve()}).catch(function(a){p.isAbortError(a)||
V.error("Unable to initialize simple atmosphere: image request failed",a);b._readyResolver.reject()})};h.prototype.uninitializeRenderContext=function(){this.destroy()};h.prototype.destroy=function(){this._readyResolver.reject();this._cameraChangeHandle&&(this._cameraChangeHandle.remove(),this._cameraChangeHandle=null);this._texture&&(this._texture.dispose(),this._texture=null);this._fadeVao&&(this._fadeVao.dispose(),this._fadeVao=null);this._vao&&(this._vao.dispose(),this._vao=null);this._readyController&&
(this._readyController.abort(),this._readyController=null)};h.prototype.render=function(c){if(c.slot!==this.slot||0!==c.pass)return!1;this._update(c.camera);var b=c.rctx;this._atmosphereConeTechnique.bindPipelineState(b);if(1>this._renderData.undergroundFadeAlpha){var a=this._atmosphereConeTechnique.program;b.bindProgram(a);a.setUniformMatrix4fv("proj",c.camera.projectionMatrix);a.setUniformMatrix4fv("view",c.camera.viewMatrix);a.setUniform3fv("silCircleCenter",this._renderData.silCircleCenter);a.setUniform3fv("silCircleV1",
this._renderData.silCircleV1);a.setUniform3fv("silCircleV2",this._renderData.silCircleV2);a.setUniform2fv("texV",this._renderData.texV);b.bindTexture(this._texture,0);a.setUniform1i("tex",0);c.scenelightingData.setLightDirectionUniform(a);a.setUniform1f("altitudeFade",this._renderData.altitudeFade);a.setUniform1f("innerScale",this._renderData.innerScale);b.bindVAO(this._vao);b.drawArrays(4,0,this._vaoCount)}0<this._renderData.undergroundFadeAlpha&&(a=this._atmosphereUndergroundTechnique.program,b.bindProgram(a),
a.setUniform1f("undergroundFadeAlpha",this._renderData.undergroundFadeAlpha),c.scenelightingData.setLightDirectionUniform(a),a.setUniform3fv("cameraPosition",c.camera.eye),b.bindVAO(this._fadeVao),b.drawArrays(5,0,this._fadeVaoCount));return!0};h.prototype._update=function(c){var b=m.vec3f64.create(),a=l.earthRadius,f=k.vec3.length(c.eye),e=f-a;this._renderData.undergroundFadeAlpha=0>e?Math.min(-e/5E3,1):0;var g=a+B,d=a+Math.max(50,e);this._renderData.innerScale=d*d/(Math.sqrt(d*d-a*a)*Math.sqrt(d*
d-g*g)+a*g)-1;this._renderData.altitudeFade=v.computeInnerAltitudeFade(e);k.vec3.scale(b,c.eye,(a+50)/f);y(b,c.center,c.up,a,this._renderData);b=z(c,b,c.up,this._renderData);f=Y(e);g=.001953125;d=0+b*f*1;50<e&&(y(c.eye,c.center,c.up,a,this._renderData),c=z(c,c.eye,c.up,this._renderData),c=E.clamp((c-1.5)/(b-1.5),0,1),g=0+.001953125*c,d=0+1*F.lerp(1,b*f,c));J.vec2.set(this._renderData.texV,g,d)};h.prototype._createRibbon=function(c){var b=new Float32Array(1155),a=new Uint32Array(1920);b[0]=0;b[1]=
0;b[2]=-1;for(var f=0;128>f;f++){var e=9*f+3;b[e+0]=f;b[e+1]=W;b[e+2]=-1;b[e+3]=f;b[e+4]=X;b[e+5]=0;b[e+6]=f;b[e+7]=A;b[e+8]=1;var e=3*f+1,g=127===f?1:e+3,d=15*f;a[d+0]=e;a[d+1]=e+1;a[d+2]=g+1;a[d+3]=g+1;a[d+4]=g;a[d+5]=e;a[d+6]=e+1;a[d+7]=e+2;a[d+8]=g+2;a[d+9]=g+2;a[d+10]=g+1;a[d+11]=e+1;a[d+12]=e;a[d+13]=g;a[d+14]=0}e=C.createBuffer(a.length);g=e.position;for(f=0;f<a.length;++f)d=3*a[f],g.set(f,0,b[d]),g.set(f,1,b[d+1]),g.set(f,2,b[d+2]);return new U(c,Q.Default3D,{geometry:O.glLayout(C)},{geometry:S.createVertex(c,
35044,e.buffer)})};return h}();var t=I.mat4f64.create(),n=m.vec3f64.create(),r=m.vec3f64.create(),C=P.newLayout().vec3f("position");return u});