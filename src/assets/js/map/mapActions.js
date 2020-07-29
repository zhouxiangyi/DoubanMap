//地图操作类
class MapAction {
	constructor(map, view, ZMap) {
		if (!(map instanceof Object)) {
			// eslint-disable-next-line no-console
			console.log("地图对象未指定，请指定目标地图对象");
			return;
		}
		this.map = map;
		this.view = view;
	}
	//定位
	location() {
		console.log(AMap)
		
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
		AMap.plugin(["AMap.Geolocation"], function() {
			var geolocation = new AMap.Geolocation(options);
			geolocation.getCurrentPosition(function(status, result) {
				console.log(result)
				if (status == "complete") {
					let lon = result.position.lng
					let lat = result.position.lat
					// let pointxy = transform([lon, lat], 'EPSG:4326', 'EPSG:3857')
					console.log(status)
					console.log(result)
					return
					let Posname = result.formattedAddress;
					
					map.getView().setCenter([lon, lat])
					map.getView().setZoom(14)
	
	
					let iconStyle = new Style({
						image: new Icon(({
							size: [18, 25],
							src: '/static/img/default-point.png'
						}))
					});
					let geometry = new Point([lon, lat])
					let feature = new Feature(geometry);
					let features = []
					//设置点位样式
					feature.setStyle(iconStyle);
					features.push(feature)
					//判断有没有图层，有的话清除
					const layerlocation = conmonMethods.getWantedLayer('locationlayer', map)
					if (typeof(layerlocation) != "undefined") {
						console.log('进来了')
						layerlocation.setSource(null)
						layerlocation.setSource(new VectorSource({
							features: features
						}))
					} else {
						let locationlayer = new VectorLayer({
							style: function(feature) {
								return feature.get('style');
							},
							source: new VectorSource({
								features: features
							}),
							name: 'locationlayer'
						})
						map.addLayer(locationlayer)
					}
					alert(`您当前的位置为${Posname}`)
				}
			});
			//AMap.event.addListener(geolocation, 'complete', onComplete);
		});
	}
}
export default MapAction
