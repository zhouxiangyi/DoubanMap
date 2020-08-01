// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/libs/gl-matrix-2/vec3"],function(h,f,g){function d(a){var c=a*a;0>a&&(c*=-1);return c}Object.defineProperty(f,"__esModule",{value:!0});f.quadraticAccentuation=d;f.resetTransformation=function(a){a.translation[0]=0;a.translation[1]=0;a.translation[2]=0;a.heading=0;a.tilt=0;return a};f.extractTransformation=function(a,c,b){var e=a.state;a=a.device;c="forward-down"===c.tiltDirection?1:-1;"standard"===a.deviceType?(b.translation[0]=d(e.axes[0]),b.translation[1]=
d(e.axes[1]),b.translation[2]=d(e.buttons[7])-d(e.buttons[6]),b.heading=d(e.axes[2]),b.tilt=d(e.axes[3])):"spacemouse"===a.deviceType&&(b.translation[0]=1.2*d(e.axes[0]),b.translation[1]=1.2*d(e.axes[1]),b.translation[2]=2*-d(e.axes[2]),b.heading=1.2*d(e.axes[5]),b.tilt=1.2*d(e.axes[3]));b.tilt*=c;g.vec3.scale(b.translation,b.translation,1);return b};f.extractTransformationKeyboard=function(a,c){c.translation[0]=a[1]-a[0];c.translation[1]=a[3]-a[2];c.translation[2]=a[4]-a[5];c.heading=a[7]-a[6];c.tilt=
a[8]-a[9];c.zoom=a[10]-a[11];return c};f.isZeroTransformation=function(a){return 0===a.translation[0]&&0===a.translation[1]&&0===a.translation[2]&&0===a.heading&&0===a.tilt&&0===a.zoom}});