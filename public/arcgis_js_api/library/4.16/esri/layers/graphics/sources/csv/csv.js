// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib"],function(B,f,u){function m(c,g,k){var a,d,b;return u.__generator(this,function(e){switch(e.label){case 0:a=0,e.label=1;case 1:if(!(a<=c.length))return[3,4];d=c.indexOf(g,a);b=c.substring(a,-1<d?d:void 0);a+=b.length+1;return k&&!b.trim()?[3,3]:[4,b];case 2:e.sent(),e.label=3;case 3:return[3,1];case 4:return[2]}})}function v(c,g){return m(c,g,!1)}Object.defineProperty(f,"__esModule",{value:!0});var y=/^\s*"([\S\s]*)"\s*$/,z=/""/g,p=[","," ",";","|","\t"];f.readRows=
function(c){return m(c,"\n",!0)};f.readRowParts=v;f.inferDelimiter=function(c){c=c.trim();for(var g=0,k="",a=0;a<p.length;a++){var d=p[a],b=c.split(d).length;b>g&&(g=b,k=d)}return""===k?null:k};f.parseRows=function(c,g,k){var a,d,b,e,f,m,p,w,r,t,A,x;return u.__generator(this,function(l){switch(l.label){case 0:d=a="",b=0,e=[],l.label=1;case 1:f=c.next();m=f.value;if(p=f.done)return[2];w=v(m,k);a:for(;;){r=w.next();t=r.value;if(A=r.done)break a;a+=d+t;d="";l=b;for(var n=t,q=0,h=void 0,h=n.indexOf('"',
0);0<=h;)q++,h=n.indexOf('"',h+1);b=l+q;if(0===b%2){if(0<b)if(x=y.exec(a))e.push(x[1].replace(z,'"'));else return e=[],a="",b=0,[3,1];else e.push(a);a="";b=0}else d=k}if(0!==b)return[3,3];l=e;n={};q=g.length;for(h=0;h<q;h++)n[g[h]]=l[h];return[4,n];case 2:return l.sent(),e=[],[3,4];case 3:d="\n",l.label=4;case 4:return[3,1];case 5:return[2]}})}});