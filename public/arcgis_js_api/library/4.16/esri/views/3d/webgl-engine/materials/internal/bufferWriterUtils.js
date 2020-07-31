// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/BufferView","../../lib/Util"],function(H,q,u,m){function D(l,e,a,c,f){var g=a.typedBuffer;a=a.typedBufferStride;var h=l.length;c*=a;if(null==f||1===f)for(var d=0;d<h;++d){var b=2*l[d];g[c]=e[b];g[c+1]=e[b+1];c+=a}else for(d=0;d<h;++d)for(var b=2*l[d],k=0;k<f;++k)g[c]=e[b],g[c+1]=e[b+1],c+=a}function C(l,e,a,c,f){var g=a.typedBuffer;a=a.typedBufferStride;var h=l.length;c*=a;if(null==f||1===f)for(var d=0;d<h;++d){var b=3*l[d];g[c]=e[b];g[c+1]=e[b+
1];g[c+2]=e[b+2];c+=a}else for(d=0;d<h;++d)for(var b=3*l[d],k=0;k<f;++k)g[c]=e[b],g[c+1]=e[b+1],g[c+2]=e[b+2],c+=a}function E(l,e,a,c,f){var g=a.typedBuffer;a=a.typedBufferStride;var h=l.length;c*=a;if(null==f||1===f)for(var d=0;d<h;++d){var b=4*l[d];g[c]=e[b];g[c+1]=e[b+1];g[c+2]=e[b+2];g[c+3]=e[b+3];c+=a}else for(d=0;d<h;++d)for(var b=4*l[d],k=0;k<f;++k)g[c]=e[b],g[c+1]=e[b+1],g[c+2]=e[b+2],g[c+3]=e[b+3],c+=a}function F(l,e,a,c,f,g){if(a){var h=c.typedBuffer;c=c.typedBufferStride;var d=l.length;
f*=c;if(null==g||1===g)for(var b=0;b<d;++b){var k=3*l[b],v=e[k],p=e[k+1],m=e[k+2];h[f]=a[0]*v+a[4]*p+a[8]*m+a[12];h[f+1]=a[1]*v+a[5]*p+a[9]*m+a[13];h[f+2]=a[2]*v+a[6]*p+a[10]*m+a[14];f+=c}else for(b=0;b<d;++b)for(var k=3*l[b],v=e[k],p=e[k+1],m=e[k+2],k=a[0]*v+a[4]*p+a[8]*m+a[12],q=a[1]*v+a[5]*p+a[9]*m+a[13],v=a[2]*v+a[6]*p+a[10]*m+a[14],p=0;p<g;++p)h[f]=k,h[f+1]=q,h[f+2]=v,f+=c}else C(l,e,c,f,g)}function G(l,e,a,c,f,g){if(a){var h=c.typedBuffer;c=c.typedBufferStride;var d=l.length,b=a[0],k=a[1],m=
a[2],p=a[4],q=a[5],u=a[6],A=a[8],B=a[9];a=a[10];var z=1E-5<Math.abs(1-b*b+p*p+A*A)||1E-5<Math.abs(1-k*k+q*q+B*B)||1E-5<Math.abs(1-m*m+u*u+a*a);f*=c;if(null==g||1===g)for(var x=0;x<d;++x){var r=3*l[x],n=e[r],t=e[r+1],y=e[r+2];g=b*n+p*t+A*y;var r=k*n+q*t+B*y,w=m*n+u*t+a*y;z&&(n=g*g+r*r+w*w,.999999>n&&1E-6<n&&(n=Math.sqrt(n),g/=n,r/=n,w/=n));h[f+0]=g;h[f+1]=r;h[f+2]=w;f+=c}else for(x=0;x<d;++x)for(r=3*l[x],n=e[r],t=e[r+1],y=e[r+2],r=b*n+p*t+A*y,w=k*n+q*t+B*y,t=m*n+u*t+a*y,z&&(n=r*r+w*w+t*t,.999999>n&&
1E-6<n&&(n=Math.sqrt(n),r/=n,w/=n,t/=n)),n=0;n<g;++n)h[f+0]=r,h[f+1]=w,h[f+2]=t,f+=c}else C(l,e,c,f,g)}function z(l,e,a,c,f,g){var h=c.typedBuffer;c=c.typedBufferStride;var d=l.length;f*=c;if(null==g||1===g)if(4===a)for(a=0;a<d;++a){var b=4*l[a];h[f]=e[b];h[f+1]=e[b+1];h[f+2]=e[b+2];h[f+3]=e[b+3];f+=c}else{if(3===a)for(a=0;a<d;++a)b=3*l[a],h[f]=e[b],h[f+1]=e[b+1],h[f+2]=e[b+2],h[f+3]=255,f+=c}else if(4===a)for(a=0;a<d;++a)for(var b=4*l[a],k=0;k<g;++k)h[f]=e[b],h[f+1]=e[b+1],h[f+2]=e[b+2],h[f+3]=e[b+
3],f+=c;else if(3===a)for(a=0;a<d;++a)for(b=3*l[a],k=0;k<g;++k)h[f]=e[b],h[f+1]=e[b+1],h[f+2]=e[b+2],h[f+3]=255,f+=c}Object.defineProperty(q,"__esModule",{value:!0});q.writeBufferVec2=D;q.writeBufferVec3=C;q.writeBufferVec4=E;q.writeBufferMat3f=function(l,e,a,c){var f=a.typedBuffer;a=a.typedBufferStride;var g=l.length;c*=a;for(var h=0;h<g;++h){for(var d=9*l[h],b=0;9>b;++b)f[c+b]=e[d+b];c+=a}};q.writeBufferMat4f=function(l,e,a,c){var f=a.typedBuffer;a=a.typedBufferStride;var g=l.length;c*=a;for(var h=
0;h<g;++h){for(var d=16*l[h],b=0;16>b;++b)f[c+b]=e[d+b];c+=a}};q.writePosition=F;q.writeNormal=G;q.writeColor=z;q.writeMultipliedColor=function(l,e,a,c,f,g,h){var d=f.typedBuffer;f=f.typedBufferStride;var b=l.length;g*=f;if(null==h||1===h)if(4===a)for(a=0;a<b;++a){var k=4*l[a];d[g]=e[k]*c[0];d[g+1]=e[k+1]*c[1];d[g+2]=e[k+2]*c[2];d[g+3]=e[k+3]*c[3];g+=f}else{if(3===a){var m=255*c[3];for(a=0;a<b;++a)k=3*l[a],d[g]=e[k]*c[0],d[g+1]=e[k+1]*c[1],d[g+2]=e[k+2]*c[2],d[g+3]=m,g+=f}}else if(4===a)for(a=0;a<
b;++a)for(var k=4*l[a],p=0;p<h;++p)d[g]=e[k]*c[0],d[g+1]=e[k+1]*c[1],d[g+2]=e[k+2]*c[2],d[g+3]=e[k+3]*c[3],g+=f;else if(3===a)for(m=255*c[3],a=0;a<b;++a)for(k=3*l[a],p=0;p<h;++p)d[g]=e[k]*c[0],d[g+1]=e[k+1]*c[1],d[g+2]=e[k+2]*c[2],d[g+3]=m,g+=f};q.writeDefaultAttributes=function(l,e,a,c,f,g){var h=0;for(e=e.fieldNames;h<e.length;h++){var d=e[h],b=l.vertexAttr[d],k=l.indices[d];if(b&&k)switch(d){case m.VertexAttrConstants.POSITION:m.assert(3===b.size);(d=f.getField(d,u.BufferViewVec3f))&&F(k,b.data,
a,d,g);break;case m.VertexAttrConstants.NORMAL:m.assert(3===b.size);(d=f.getField(d,u.BufferViewVec3f))&&G(k,b.data,c,d,g);break;case m.VertexAttrConstants.UV0:m.assert(2===b.size);(d=f.getField(d,u.BufferViewVec2f))&&D(k,b.data,d,g);break;case m.VertexAttrConstants.COLOR:m.assert(3===b.size||4===b.size);(d=f.getField(d,u.BufferViewVec4u8))&&z(k,b.data,b.size,d,g);break;case m.VertexAttrConstants.SYMBOLCOLOR:m.assert(3===b.size||4===b.size);(d=f.getField(d,u.BufferViewVec4u8))&&z(k,b.data,b.size,
d,g);break;case m.VertexAttrConstants.TANGENT:m.assert(4===b.size),(d=f.getField(d,u.BufferViewVec4f))&&E(k,b.data,d,g)}}}});