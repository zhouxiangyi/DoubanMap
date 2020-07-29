import esrimoudls from "./Maploadmoduls.js"
console.log(esrimoudls)
class ZMaps {
	//构造函数
	constructor(modules) {
		this._Map = null;
		this._BaseMap = null;
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
		this.createView('2d','mapBOX')
		this.ActiveView = this._MapView;
		//新建3d视图
		this.createView('3d',null)
		
		this.MapWidgets()
	}
	//初始化地图
	initMap(type) {
		//新建底图图层
		let basemaplayer
		//判断类型
		if (type === "Amap") {
			//高德地图
			basemaplayer = new this.modules.GaodeLayer();

		} else if (type === "Tianmap") {

		} else if (type === "SlicingService") {

		} else if (type === "dynamiclayer") {

		}
		//新建底图类
		this._BaseMap = new this.modules.Basemap({
			title: "地图底图",
			id: "BaseForMap",
			baseLayers: basemaplayer
		});
		//新建地图类
		this._Map = new this.modules.Map({
			basemap: this._BaseMap
		})
	}
	//初始化地图容器
	createView(type,divid) {
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
	MapWidgets(){
		//隐藏缩放组件
		this.ActiveView.ui._removeComponents(['zoom'])
		//缩放组件
		let zoom = new this.modules.Zoom({
		       view: this.ActiveView
		})
		//this.ActiveView.ui.add(zoom, 'bottom-left')
		
	}
	//
	

}
export default ZMaps
