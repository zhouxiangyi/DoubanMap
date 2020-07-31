// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils","../support/mathUtils","./TerrainConst"],function(v,w,x,t,y){Object.defineProperty(w,"__esModule",{value:!0});v=function(){function u(b,c,d){this.samplerData=null;this.level=b[0];this.i=b[1];this.j=b[2];this.extent=c;b=d.noDataValue;for(var f=d.values,a=Infinity,e=-Infinity,h=!0,g=!1,k=0;k<f.length;k++){var l=f[k];l!==b?(a=l<a?l:a,e=l>e?l:e,h=!1):g=!0}h&&(e=a=0);this.samplerData={pixelData:d.values,width:d.width,height:d.height,noDataValue:b,safeWidth:.99999999*
(d.width-1),dx:(d.width-1)/(c[2]-c[0]),dy:(d.width-1)/(c[3]-c[1]),x0:c[0],y1:c[3]};this.bounds=[a,-3E38<e?e:0];this.hasNoDataValues=g}u.prototype.release=function(){this.bounds=this.samplerData=null};u.prototype.computeMinMaxValue=function(b,c,d,f){f.min=Infinity;f.max=-Infinity;f.hasNoDataValues=!1;b-=this.level;if(0>=b)return f;var a=Math.pow(2,b);if(Math.floor(c/a)!==this.i||Math.floor(d/a)!==this.j)return f;var e=Infinity,h=-Infinity,g=this.samplerData.width,k=this.samplerData.pixelData,l=.5*
y.ELEVATION_NODATA_VALUE;b=(g-1)/a;d=(d-this.j*a)*b;var m=(c-this.i*a)*b;if(1>b){var r=Math.floor(d),q=Math.floor(m),n=r+q*g;c=k[n];var a=k[n+1],p=k[n+g],n=k[n+g+1];if(c+a+p+n<l)return e=d-r,l=m-q,h=t.bilerp(c,a,p,n,e,l),g=t.bilerp(c,a,p,n,e+b,l),k=t.bilerp(c,a,p,n,e,l+b),b=t.bilerp(c,a,p,n,e+b,l+b),f.min=Math.min(h,g,k,b),f.max=Math.max(h,g,k,b),f;d=r;m=q;b=1}else d=Math.floor(d),m=Math.floor(m),b=Math.ceil(b);for(c=d;c<=d+b;c++)for(a=m;a<=m+b;a++)n=c+a*g,p=k[n],p<l?(e=Math.min(e,p),h=Math.max(h,
p)):f.hasNoDataValues=!0;f.min=e;f.max=h;return f};u.sample=function(b,c,d){for(var f=0;f<d.length;f++){var a=d[f];if(a){var e=a.safeWidth,h=a.width,g=a.pixelData,k=x.clamp(a.dy*(a.y1-c),0,e),a=x.clamp(a.dx*(b-a.x0),0,e),e=Math.floor(k),l=Math.floor(a),m=e*h+l,r=m+h,q=g[m],h=g[r],m=g[m+1],g=g[r+1];if(q+h+m+g<.5*y.ELEVATION_NODATA_VALUE)return k-=e,a-=l,b=q+(m-q)*a,b+(h+(g-h)*a-b)*k}}return null};return u}();w.ElevationData=v});