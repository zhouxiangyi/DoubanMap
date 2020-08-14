import proj4 from 'proj4'
import { BaiduMapAPI } from '../api/httpapi'
import config from '../../config/config'
//地图操作类
class MapAction {
	constructor(map, view, ZMap, moudls, mapview, scenview,Baselayers) {
		if (!(map instanceof Object)) {
			// eslint-disable-next-line no-console
			console.log("地图对象未指定，请指定目标地图对象");
			return;
		}
		this.map = map;
		this.view = view;
		this.Zmap = ZMap;
		this.moudls = moudls;
		this.mapview = mapview;
		this.scenview = scenview;
		this.Baselayers = Baselayers;
		this.centerBD = null;
		this.centerGD = null;
	}
	//定位
	location() {
		const _this = this
		var options = {
			'showButton': false, //是否显示定位按钮
			/* LT LB RT RB */
			'buttonOffset': new AMap.Pixel(10, 20), //定位按钮距离对应角落的距离
			'showMarker': false, //是否显示定位点
			'markerOptions': { //自定义定位点样式，同Marker的Options
				'offset': new AMap.Pixel(-18, -36),
			},
			'showCircle': false, //是否显示定位精度圈
		}
		AMap.plugin(["AMap.Geolocation"], function () {
			var geolocation = new AMap.Geolocation(options);
			geolocation.getCurrentPosition(function (status, result) {
				console.log(result)
				if (status == "complete") {
					let lon = result.position.lng
					let lat = result.position.lat
					let Posname = result.formattedAddress;
					//此处生成定位图层
					let locationlayer = new _this.moudls.GraphicsLayer({
						id: "positionlletayer"
					});
					//TODO,加入重力感应.
					//创建点
					let Point = {
						type: "point", // autocasts as new Point()
						longitude: lon,
						latitude: lat
					};
					let markerSymbol = {
						type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
						color: [51, 133, 255],
						outline: {
							// autocasts as new SimpleLineSymbol()
							color: [255, 255, 255],
							width: 2
						}
					};
					//创建grapha
					let pointGraphic = new _this.moudls.Graphic({
						geometry: Point,
						symbol: markerSymbol
					});
					locationlayer.graphics.add(pointGraphic);
					_this.map.add(locationlayer);
					console.log(locationlayer)
					//_this.view.goTo(pointGraphic)
					//定位到
					_this.view.goTo({
						target: pointGraphic,
						zoom: 18
					});
					//高德坐标
					_this.centerGD = [lon,lat]
					//火星坐标转百度
					_this.centerBD = bd09togcj02(lon,lat)

					

				}
			});
			//AMap.event.addListener(geolocation, 'complete', onComplete);
		});
	}
	//底图切换
	BaseMapchanges(type){
		for(let item of this.Baselayers){
			if(item.id.includes(type)){
				item.visible  = true
			}else{
				item.visible =  false
			}
		}
	
	}
}
export default MapAction
