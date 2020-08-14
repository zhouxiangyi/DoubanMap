import esrimoudls from "./Maploadmoduls.js"
console.log(esrimoudls)
class ZMaps {
	//构造函数
	constructor(modules) {
		this._Map = null;
		this._BaseMap = null;
		this._BaseLayers = [];
		this._MapView = null;
		this._SceneView = null;
		this.ActiveView = null;
		this.modules = modules
		this._container = null
	}
	async init() {
		//新建地图
		this.initMap('Amap')
		//新建2d视图
		this.createView('2d', 'mapBOX')
		this.ActiveView = this._MapView;
		//新建3d视图
		this.createView('3d', null)

		this.MapWidgets()
	}
	//初始化地图
	initMap(type) {

		//新建底图类
		this._BaseMap = new this.modules.Basemap({
			title: "地图底图",
			id: "BaseForMap"
		});
		//新建底图图层
		this.initBaseLayer(type)
		//新建地图类
		this._Map = new this.modules.Map({
			basemap: this._BaseMap
		})

	}
	//初始化地图容器
	createView(type, divid) {
		if (type === '2d') {
			this._MapView = new this.modules.MapView({
				container: divid,
				map: this._Map,
				center: [110.1, 23.8],
				zoom: 3
			});
		} else {
			this._SceneView = new this.modules.SceneView({
				container: null,
				map: this._Map,
				center: [110.1, 23.8],
				zoom: 1
			})
		}

	}
	//初始化地图控件
	MapWidgets() {
		//隐藏缩放组件
		this.ActiveView.ui._removeComponents(['zoom'])
		//缩放组件
		let zoom = new this.modules.Zoom({
			view: this.ActiveView
		})
		//this.ActiveView.ui.add(zoom, 'bottom-left')

	}
	//创建GraphicLayer。用于绘制和各种临时点的显示
	//基础地图的加载
	initBaseLayer(type) {
		if (type === "Amap") {
			//高德地图
			var basemaplayerVector = new this.modules.GaodeLayer({
				urlTemplate: "http://webst01.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}",
				tint: new this.modules.Color("#004FBB"),
				title: "高德电子地图",
				id: "Vector"
			});
			this._BaseLayers.push(basemaplayerVector)
			var stamenTileLayer = new this.modules.GaodeLayer({
				urlTemplate: "http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
				tint: new this.modules.Color("#004FBB"),
				title: "高德影像地图",
				id: "Image"
			});
			this._BaseLayers.push(stamenTileLayer)
			var digitallTileLayer = new this.modules.GaodeLayer({
				urlTemplate: 'http://webst01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
				tint: new this.modules.Color("#004FBB"),
				title: "高德影像注记",
				id: "ImageTag"
			});

			this._BaseLayers.push(digitallTileLayer)
			//显隐处理
			basemaplayerVector.visible = true
			stamenTileLayer.visible = false
			digitallTileLayer.visible = false

		} else if (type === "Tianmap") {

		} else if (type === "Baidu") {
			//百度地图
			basemaplayer = new this.modules.BaiduMapLayer();
		} else if (type === "SlicingService") {

		} else if (type === "dynamiclayer") {

		}

		this._BaseMap.baseLayers = this._BaseLayers
	}
	addPoints(datatype, jsonArr, layId, popWindowParam) {

		//参数初始化
		let layer_points = null
		jsonArr = jsonArr ? jsonArr : [];
		//当数据存在的时候
		if(jsonArr != null){
			var layer = this._Map.findLayerById(`${layId}_layer`);
			

		}


	}



}
export default ZMaps
