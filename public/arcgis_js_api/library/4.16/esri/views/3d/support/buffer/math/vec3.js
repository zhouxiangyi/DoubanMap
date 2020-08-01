// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./common"],function(C,d,z){Object.defineProperty(d,"__esModule",{value:!0});d.transformMat4=function(b,c,a){if(b.count!==c.count)z.logger.error("source and destination buffers need to have the same number of elements");else{var A=b.count,f=a[0],g=a[1],e=a[2],h=a[4],k=a[5],d=a[6],v=a[8],w=a[9],t=a[10],u=a[12],r=a[13];a=a[14];var n=b.typedBuffer;b=b.typedBufferStride;var l=c.typedBuffer;c=c.typedBufferStride;for(var m=0;m<A;m++){var p=m*b,q=m*c,x=l[q],y=l[q+1],q=l[q+2];
n[p]=f*x+h*y+v*q+u;n[p+1]=g*x+k*y+w*q+r;n[p+2]=e*x+d*y+t*q+a}}};d.transformMat3=function(b,c,a){if(b.count!==c.count)z.logger.error("source and destination buffers need to have the same number of elements");else{var d=b.count,f=a[0],g=a[1],e=a[2],h=a[3],k=a[4],B=a[5],v=a[6],w=a[7];a=a[8];var t=b.typedBuffer;b=b.typedBufferStride;var u=c.typedBuffer;c=c.typedBufferStride;for(var r=0;r<d;r++){var n=r*b,l=r*c,m=u[l],p=u[l+1],l=u[l+2];t[n]=f*m+h*p+v*l;t[n+1]=g*m+k*p+w*l;t[n+2]=e*m+B*p+a*l}}};d.scale=
function(b,c,a){var d=Math.min(b.count,c.count),f=b.typedBuffer;b=b.typedBufferStride;var g=c.typedBuffer;c=c.typedBufferStride;for(var e=0;e<d;e++){var h=e*b,k=e*c;f[h]=a*g[k];f[h+1]=a*g[k+1];f[h+2]=a*g[k+2]}};d.shiftRight=function(b,c,a){var d=Math.min(b.count,c.count),f=b.typedBuffer;b=b.typedBufferStride;var g=c.typedBuffer;c=c.typedBufferStride;for(var e=0;e<d;e++){var h=e*b,k=e*c;f[h]=g[k]>>a;f[h+1]=g[k+1]>>a;f[h+2]=g[k+2]>>a}}});