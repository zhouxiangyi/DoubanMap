// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./common"],function(H,d,t){function w(a,b,c){var e=b[0],h=b[1],m=b[2],g=b[3],p=b[4],k=b[5],l=b[6],d=b[7];b=b[8];var n=c[0],r=c[1],f=c[2],x=c[3],u=c[4],v=c[5],t=c[6],y=c[7];c=c[8];a[0]=n*e+r*g+f*l;a[1]=n*h+r*p+f*d;a[2]=n*m+r*k+f*b;a[3]=x*e+u*g+v*l;a[4]=x*h+u*p+v*d;a[5]=x*m+u*k+v*b;a[6]=t*e+y*g+c*l;a[7]=t*h+y*p+c*d;a[8]=t*m+y*k+c*b;return a}function G(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];a[6]=b[6]-c[6];a[7]=b[7]-
c[7];a[8]=b[8]-c[8];return a}Object.defineProperty(d,"__esModule",{value:!0});d.fromMat4=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[4];a[4]=b[5];a[5]=b[6];a[6]=b[8];a[7]=b[9];a[8]=b[10];return a};d.copy=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];return a};d.set=function(a,b,c,e,h,m,g,p,k,l){a[0]=b;a[1]=c;a[2]=e;a[3]=h;a[4]=m;a[5]=g;a[6]=p;a[7]=k;a[8]=l;return a};d.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=
0;a[7]=0;a[8]=1;return a};d.transpose=function(a,b){if(a===b){var c=b[1],e=b[2],h=b[5];a[1]=b[3];a[2]=b[6];a[3]=c;a[5]=b[7];a[6]=e;a[7]=h}else a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8];return a};d.invert=function(a,b){var c=b[0],e=b[1],h=b[2],m=b[3],g=b[4],p=b[5],k=b[6],l=b[7];b=b[8];var d=b*g-p*l,n=-b*m+p*k,r=l*m-g*k,f=c*d+e*n+h*r;if(!f)return null;f=1/f;a[0]=d*f;a[1]=(-b*e+h*l)*f;a[2]=(p*e-h*g)*f;a[3]=n*f;a[4]=(b*c-h*k)*f;a[5]=(-p*c+h*m)*f;a[6]=r*
f;a[7]=(-l*c+e*k)*f;a[8]=(g*c-e*m)*f;return a};d.adjoint=function(a,b){var c=b[0],e=b[1],h=b[2],m=b[3],g=b[4],d=b[5],k=b[6],l=b[7];b=b[8];a[0]=g*b-d*l;a[1]=h*l-e*b;a[2]=e*d-h*g;a[3]=d*k-m*b;a[4]=c*b-h*k;a[5]=h*m-c*d;a[6]=m*l-g*k;a[7]=e*k-c*l;a[8]=c*g-e*m;return a};d.determinant=function(a){var b=a[3],c=a[4],e=a[5],h=a[6],m=a[7],g=a[8];return a[0]*(g*c-e*m)+a[1]*(-g*b+e*h)+a[2]*(m*b-c*h)};d.multiply=w;d.translate=function(a,b,c){var e=b[0],h=b[1],m=b[2],g=b[3],d=b[4],k=b[5],l=b[6],q=b[7];b=b[8];var n=
c[0];c=c[1];a[0]=e;a[1]=h;a[2]=m;a[3]=g;a[4]=d;a[5]=k;a[6]=n*e+c*g+l;a[7]=n*h+c*d+q;a[8]=n*m+c*k+b;return a};d.rotate=function(a,b,c){var e=b[0],h=b[1],d=b[2],g=b[3],p=b[4],k=b[5],l=b[6],q=b[7];b=b[8];var n=Math.sin(c);c=Math.cos(c);a[0]=c*e+n*g;a[1]=c*h+n*p;a[2]=c*d+n*k;a[3]=c*g-n*e;a[4]=c*p-n*h;a[5]=c*k-n*d;a[6]=l;a[7]=q;a[8]=b;return a};d.scale=function(a,b,c){var e=c[0],h=c[1];c=c[2];a[0]=e*b[0];a[1]=e*b[1];a[2]=e*b[2];a[3]=h*b[3];a[4]=h*b[4];a[5]=h*b[5];a[6]=c*b[6];a[7]=c*b[7];a[8]=c*b[8];return a};
d.scaleByVec2=function(a,b,c){var e=c[0];c=c[1];a[0]=e*b[0];a[1]=e*b[1];a[2]=e*b[2];a[3]=c*b[3];a[4]=c*b[4];a[5]=c*b[5];return a};d.fromTranslation=function(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=b[0];a[7]=b[1];a[8]=1;return a};d.fromRotation=function(a,b){var c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=c;a[2]=0;a[3]=-c;a[4]=b;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};d.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=b[1];a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};d.fromMat2d=function(a,
b){a[0]=b[0];a[1]=b[1];a[2]=0;a[3]=b[2];a[4]=b[3];a[5]=0;a[6]=b[4];a[7]=b[5];a[8]=1;return a};d.fromQuat=function(a,b){var c=b[0],e=b[1],h=b[2];b=b[3];var d=c+c,g=e+e,p=h+h,c=c*d,k=e*d,e=e*g,l=h*d,q=h*g,h=h*p,d=b*d,g=b*g;b*=p;a[0]=1-e-h;a[3]=k-b;a[6]=l+g;a[1]=k+b;a[4]=1-c-h;a[7]=q-d;a[2]=l-g;a[5]=q+d;a[8]=1-c-e;return a};d.normalFromMat4Legacy=function(a,b){var c=b[0],e=b[1],d=b[2],m=b[4],g=b[5],p=b[6],k=b[8],l=b[9];b=b[10];var q=b*g-p*l,n=-b*m+p*k,r=l*m-g*k,f=c*q+e*n+d*r;if(!f)return null;f=1/f;
a[0]=q*f;a[1]=(-b*e+d*l)*f;a[2]=(p*e-d*g)*f;a[3]=n*f;a[4]=(b*c-d*k)*f;a[5]=(-p*c+d*m)*f;a[6]=r*f;a[7]=(-l*c+e*k)*f;a[8]=(g*c-e*m)*f;return a};d.normalFromMat4=function(a,b){var c=b[0],e=b[1],d=b[2],m=b[3],g=b[4],p=b[5],k=b[6],l=b[7],q=b[8],n=b[9],r=b[10],f=b[11],t=b[12],u=b[13],v=b[14];b=b[15];var F=c*p-e*g,y=c*k-d*g,z=c*l-m*g,w=e*k-d*p,A=e*l-m*p,B=d*l-m*k,C=q*u-n*t,D=q*v-r*t,q=q*b-f*t,E=n*v-r*u,n=n*b-f*u,r=r*b-f*v,f=F*r-y*n+z*E+w*q-A*D+B*C;if(!f)return null;f=1/f;a[0]=(p*r-k*n+l*E)*f;a[1]=(k*q-g*
r-l*D)*f;a[2]=(g*n-p*q+l*C)*f;a[3]=(d*n-e*r-m*E)*f;a[4]=(c*r-d*q+m*D)*f;a[5]=(e*q-c*n-m*C)*f;a[6]=(u*B-v*A+b*w)*f;a[7]=(v*z-t*B-b*y)*f;a[8]=(t*A-u*z+b*F)*f;return a};d.projection=function(a,b,c){a[0]=2/b;a[1]=0;a[2]=0;a[3]=0;a[4]=-2/c;a[5]=0;a[6]=-1;a[7]=1;a[8]=1;return a};d.str=function(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+")"};d.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],
2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2))};d.add=function(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=b[6]+c[6];a[7]=b[7]+c[7];a[8]=b[8]+c[8];return a};d.subtract=G;d.multiplyScalar=function(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;a[8]=b[8]*c;return a};d.multiplyScalarAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=
b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*d;a[8]=b[8]+c[8]*d;return a};d.exactEquals=function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]};d.equals=function(a,b){var c=a[0],d=a[1],h=a[2],m=a[3],g=a[4],p=a[5],k=a[6],l=a[7];a=a[8];var q=b[0],n=b[1],r=b[2],f=b[3],x=b[4],u=b[5],v=b[6],w=b[7];b=b[8];return Math.abs(c-q)<=t.EPSILON*Math.max(1,Math.abs(c),Math.abs(q))&&Math.abs(d-n)<=t.EPSILON*
Math.max(1,Math.abs(d),Math.abs(n))&&Math.abs(h-r)<=t.EPSILON*Math.max(1,Math.abs(h),Math.abs(r))&&Math.abs(m-f)<=t.EPSILON*Math.max(1,Math.abs(m),Math.abs(f))&&Math.abs(g-x)<=t.EPSILON*Math.max(1,Math.abs(g),Math.abs(x))&&Math.abs(p-u)<=t.EPSILON*Math.max(1,Math.abs(p),Math.abs(u))&&Math.abs(k-v)<=t.EPSILON*Math.max(1,Math.abs(k),Math.abs(v))&&Math.abs(l-w)<=t.EPSILON*Math.max(1,Math.abs(l),Math.abs(w))&&Math.abs(a-b)<=t.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))};d.mul=w;d.sub=G});