<template></template>



<script>
	import options from "../assets/config/esriconfig.js";
	import esriLoader from "esri-loader";
	const option = options.options;
	export default {
		name: "ZMap",
		data() {
			return {
				symbol: null,
				originextent: null
			};
		},
		mounted() {
			this.m_constructor();
		},
		computed: {
			//...mapState(["map", "panelid"])
		},
		methods: {
			//map的初始化构造
			m_constructor() {
				var _this = this;
				esriLoader
					.loadModules(
						[
							"esri/Color",
							"esri/symbols/Font",
							"esri/symbols/PictureMarkerSymbol",
							"esri/symbols/SimpleMarkerSymbol",
							"esri/symbols/SimpleLineSymbol",
							"esri/symbols/PictureFillSymbol",
							"esri/symbols/TextSymbol"
						],
						option
					)
					.then(
						([
							Color,
							Font,
							PictureMarkerSymbol,
							SimpleMarkerSymbol,
							SimpleLineSymbol,
							PictureFillSymbol,
							TextSymbol
						]) => {
							if (_this.symbol == null) {
								_this.symbol = {
									Font: Font,
									Color: Color,
									TextSymbol: TextSymbol,
									PictureMarkerSymbol: PictureMarkerSymbol,
									SimpleMarkerSymbol: SimpleMarkerSymbol,
									SimpleLineSymbol: SimpleLineSymbol,
									PictureFillSymbol: PictureFillSymbol
								};
								window.symbol = _this.symbol;
							}
						}
					)
					.catch(err => {
						console.error(err);
					});
			},
			initMap(divid, type) {
				let _this = this;
				esriLoader
					.loadModules(
						[
							"esri/Map",
							"esri/config",
							"esri/request",
							"esri/Color",
							"esri/views/SceneView",
							"esri/widgets/LayerList",
							"esri/layers/BaseTileLayer",
							"esri/views/MapView",
							"widgets/GaodeLayer",
							"dojo/domReady!"
						],
						option
					)
					.then(
						([
							Map,
							esriConfig,
							esriRequest,
							Color,
							SceneView,
							LayerList,
							BaseTileLayer,
							MapView,
							GaodeLayer

						]) => {
							console.log(option);
							let basemaplayer;
							let myview;
							if (type === "Amap") {
								//高德地图
								basemaplayer = new GaodeLayer();

							} else if (type === "Tianmap") {

							} else if (type === "SlicingService") {

							} else if (type === "dynamiclayer") {

							}
							var map = new Map({
								layers: [basemaplayer]
							});
							//根据id判断是三维还是二维
							//判断3d还是2d
							if (divid.includes('2D')) {
								myview = new MapView({
									container: divid,
									map: map,
									center: [110.1, 23.8],
									zoom: 3
								});
							} else {
								//3d
								myview = new SceneView({
									container:divid,
									map: map,
									center: [110.1, 23.8],
									zoom: 1
								})
							}
							




						}
					)
					.catch(err => {
						console.error(err);
					});
			},
			//添加点位
			addPoints(datatype, jsonArr, layId, popWindowParam) {
				var _this = this;
				//////console.log(_this.GetcoverStyle)
				// console.log(777777712121)
				const map = this.map;
				////console.log(this.map)
				esriLoader
					.loadModules(
						[
							"esri/geometry/Point",
							"esri/layers/GraphicsLayer",
							"esri/SpatialReference",
							"esri/tasks/GeometryService",
							"esri/config",
							"esri/graphic"
						],
						option
					)
					.then(
						([
							Point,
							GraphicsLayer,
							SpatialReference,
							GeometryService,
							esriConfig,
							Graphic
						]) => {
							let geometryService = new GeometryService(
								mapconfig.layerUrl.GemoteryUrl
							);
							//参数初始化
							let layer_points = null;
							jsonArr = jsonArr ? jsonArr : [];
							if (jsonArr != null) {
								//判断专题图层是否存在
								////console.log(_this.map)
								var layer = _this.map.getLayer(`${layId}_layer`);
								var layerExist = layer == null ? false : true;
								//专题图层不存在创建图层
								if (layerExist) {
									//清空+移除
									//layer.clear();
									_this.map.removeLayer(_this.map.getLayer(`${layId}_layer`));
									layer_points = new GraphicsLayer({
										id: `${layId}_layer`
									});
									_this.map.addLayer(layer_points, 50);
									//layer_points = layer;
								} else {
									//创建图层
									layer_points = new GraphicsLayer({
										id: `${layId}_layer`
									});
									_this.map.addLayer(layer_points);
									//layer_points.on("click", layerClick);
									//layer_points.on("mouse-over", mouseOverLayer);
									//layer_points.on("mouse-out", mouseOutLayer);
								}
								var html = "";
								//设置覆盖物样式并添加覆盖物到地图
								for (let i = 0; i < jsonArr.length; i++) {
									//初始化数据lon,lat
									var lon = Number(
										jsonArr[i].p_lon ? jsonArr[i].p_lon : jsonArr[i].lon
									);
									var lat = Number(
										jsonArr[i].p_lat ? jsonArr[i].p_lat : jsonArr[i].lat
									);
									if (isNaN(lon) || isNaN(lat) || lon == 0 || lat == 0) {
										continue;
									}
									//添加点位到地图
									var point = new Point([lon, lat]);
									//添加html覆盖物到地图
									$("#map").append(html);
									//获取屏幕坐标点
									var screenPnt = _this.map.toScreen(point);
									jsonArr[i].x = screenPnt.x;
									jsonArr[i].y = screenPnt.y;
									var coverStyle = _this.GetcoverStyle(datatype, jsonArr[i], i);
									html = coverStyle.html;
									//设置html相对于地图偏移的距离
									if (datatype == "water_area") {
										//
										$(`#ring_${datatype}_${i}`).css({
											left: screenPnt.x - 80 + "px",
											top: screenPnt.y - 12 + "px",
											position: "absolute",
											"z-index": "39",
											cursor: "pointer"
										});
									}
									//设置动画
									$(".class_mapIcoDiv").animo({
										animation: ["rollIn"],
										duration: 0.5
									});
									// if(_this.panelid){
									//     alert(77)
									// }
									$(".class_mapIcoDiv").bind("mouseover", function() {
										$(this).animo({
											animation: ["pulse"],
											duration: 0.5
										});
									});
									//开始平移
									var panStart = dojo.connect(
										_this.map,
										"onPanStart",
										function() {
											$(".ring").css("display", "none");
											$(".esriPopup").css("display", "none");
											$(`#ring_${datatype}_${i}`).css("display", "none");
											$(".info").css("display", "none");
										}
									);
									//平移结束
									var panEnd = dojo.connect(_this.map, "onPanEnd", function() {
										for (var i = 0; i < jsonArr.length; i++) {
											var x = jsonArr[i].p_lon;
											var y = jsonArr[i].p_lat;
											var point = new Point(x, y, map.spatialReference);
											screenPnt = _this.map.toScreen(point);
											if (datatype == "water_area") {
												//设置标签离覆盖物偏移距离
												$(`#ring_${datatype}_${i}`).css({
													left: screenPnt.x - 80 + "px",
													top: screenPnt.y - 12 + "px",
													position: "absolute",
													"z-index": "39",
													cursor: "pointer"
												});
											}
										}
										$(".esriPopup").css("display", "block");
										$(".ring").css("display", "block");
										$(".info").css("display", "block");
									});
									//开始缩放
									var zoomStart = dojo.connect(map, "onZoomStart", function() {
										$(".ring").css("display", "none");
										$(".esriPopup").css("display", "none");
										$(`#ring_${datatype}_${i}`).css("display", "none");
									});
									//缩放结束
									var zoomEnd = dojo.connect(_this.map, "onZoomEnd", function() {
										for (var i = 0; i < jsonArr.length; i++) {
											var x = jsonArr[i].p_lon;
											var y = jsonArr[i].p_lat;
											var point = new Point(x, y, map.spatialReference);
											screenPnt = _this.map.toScreen(point);
											if (datatype == "water_area") {
												//设置标签离覆盖物偏移距离
												$(`#ring_${datatype}_${i}`).css({
													left: screenPnt.x - 80 + "px",
													top: screenPnt.y - 12 + "px",
													position: "absolute",
													"z-index": "39",
													cursor: "pointer"
												});
											}
										}
										$(".esriPopup").css("display", "block");
										$(".ring").show();
									});
									var graphic = new Graphic(point, coverStyle.symbol, jsonArr[i]);
									layer_points.add(graphic);
								}
								layer_points.on("click", layerClick);
								layer_points.on("mouse-over", shownamemouse);
								layer_points.on("mouse-out", mouseOutLayer);
								// console.log(7777)
								// console.log(layer_points)
							}
						}
					);

				function layerClick(e) {
					console.log(e);
					esriLoader
						.loadModules(["esri/geometry/Point"], option)
						.then(([Point]) => {
							//获取点位属性。
							const attributes = e.graphic.attributes;
							//获取地图弹出窗宽高。
							let infoWidth = popWindowParam.width;
							let infoHeight = popWindowParam.height;
							let ComponentName = popWindowParam.componentName;
							var Component = null;
							//根据名称判断不同的组件
							if (ComponentName === "Dinner") {
								Component = Dinner;
							} else if (ComponentName === "BaseInfo") {
								Component = BaseInfo;
							}
							//此处判断panelid，进行关闭上个弹窗的操作
							if (_this.panelid) {
								_this.$layer.close(_this.panelid);
							}
							// _this.$layer.closeAll()
							_this.$layer.iframe({
								content: {
									content: Component, //传递的组件对象
									parent: _this, //当前的vue对象
									data: {
										pointinfo: attributes
									} //props
								},
								area: [`${infoWidth}px`, `${infoHeight}px`],
								title: attributes.p_name,
								shade: false, //是否显示遮罩
								shadeClose: false,
								offset: [`${attributes.y}px`, `${attributes.x}px`],
								cancel: () => {
									//关闭事件
								}
							});
							let screenx = e.x + 220;
							let screeny = e.y - 12;
							setTimeout(() => {
								//初始化位置
								$(`#${_this.panelid}`).css("left", `${screenx}px`);
								$(`#${_this.panelid}`).css("top", `${screeny}px`);
								//绑定动画，随地图移动
								//设置动画
								//此处导入Ponit

								$(`#${_this.panelid}`).animo({
									animation: ["rollIn"],
									duration: 0.5
								});
								// if(_this.panelid){
								//     alert(77)
								// }
								$(`#${_this.panelid}`).bind("mouseover", function() {
									$(this).animo({
										animation: ["pulse"],
										duration: 0.5
									});
								});
								//开始平移
								var panStart = dojo.connect(_this.map, "onPanStart", function() {
									$(`#${_this.panelid}`).css("display", "none");
								});
								//平移结束
								var panEnd = dojo.connect(_this.map, "onPanEnd", function() {
									//找到当前点
									const layer = _this.map.getLayer('vuepoint_layer')
									var point = new Point(e.graphic.geometry);
									var screenPnt = _this.map.toScreen(point);
									$(`#${_this.panelid}`).css({
										left: screenPnt.x + 220 + "px",
										top: screenPnt.y - 12 + "px"
									});
									$(`#${_this.panelid}`).show();
								});
								//开始缩放
								var zoomStart = dojo.connect(
									_this.map,
									"onZoomStart",
									function() {
										//$(`#ring_${datatype}_${i}`).css("display", "block");
										$(`#${_this.panelid}`).hide();
									}
								);
								//缩放结束
								var zoomEnd = dojo.connect(_this.map, "onZoomEnd", function() {
									// for (var i = 0; i < jsonArr.length; i++) {
									//   var x = jsonArr[i].p_lon;
									//   var y = jsonArr[i].p_lat;
									//   var point = new Point(x, y, map.spatialReference);
									//   screenPnt = _this.map.toScreen(point);
									//   if (datatype == "water_area") {
									//     //设置标签离覆盖物偏移距离
									var point = new Point(e.graphic.geometry);
									var screenPnt = _this.map.toScreen(point);
									$(`#${_this.panelid}`).css({
										left: screenPnt.x + 220 + "px",
										top: screenPnt.y - 12 + "px"
									});
									//   }
									// }
									$(`#${_this.panelid}`).show();
								});
							}, 50);
						});
					// console.log($(`#${_this.panelid}`));
					//此处
				}

				function shownamemouse(e) {
					// console.log(e)
					var graphic = e.graphic;
					var mapPoint = graphic.geometry;
					var attributes = graphic.attributes;
					var p_id = attributes.p_id;
					var name = attributes.p_name;
					esriLoader
						.loadModules(
							[
								"esri/symbols/TextSymbol",
								"esri/Color",
								"esri/symbols/Font",
								"esri/graphic",
								"esri/layers/GraphicsLayer",
								"esri/SpatialReference"
							],
							option
						)
						.then(
							([
								TextSymbol,
								Color,
								Font,
								Graphic,
								GraphicsLayer,
								SpatialReference
							]) => {
								var textSymbol = new TextSymbol(name)
									.setColor(new Color([128, 0, 0]))
									.setAlign(Font.ALIGN_START)
									.setAngle(0)
									.setFont(new Font("8pt").setWeight(Font.WEIGHT_BOLD));
								textSymbol.setOffset(0, -20);
								var graphictext = new Graphic(mapPoint, textSymbol);
								var graphicsLayer = new GraphicsLayer({
									id: "GL_PointCover_text"
								});
								graphicsLayer.add(graphictext);
								_this.map.addLayer(graphicsLayer, 0);
							}
						);
				}

				function mouseOutLayer(e) {
					var graphic = e.graphic;
					var mapPoint = graphic.geometry;
					var attributes = graphic.attributes;
					var p_id = attributes.p_id;
					var name = attributes.p_name;
					if (_this.map.getLayer("GL_PointCover_text")) {
						_this.map.removeLayer(_this.map.getLayer("GL_PointCover_text"));
					}
				}
				//扩大鼠标点击范围
				function pointToExtent(map, point, toleranceInPixel) {
					var pixelWidth = map.extent.getWidth() / map.width;
					var toleraceInMapCoords = toleranceInPixel * pixelWidth;
					return new esri.geometry.Extent(
						point.x - toleraceInMapCoords,
						point.y - toleraceInMapCoords,
						point.x + toleraceInMapCoords,
						point.y + toleraceInMapCoords,
						map.spatialReference
					);
				}
			},
			//聚焦点位效果方法
			map_HighGraphic(lon, lat) {
				//const map = this.map
				const _this = this;
				esriLoader
					.loadModules(
						[
							"esri/geometry/Point",
							"esri/graphic",
							"esri/layers/GraphicsLayer",
							"esri/SpatialReference",
							"esri/tasks/GeometryService",
							"esri/symbols/PictureMarkerSymbol"
						],
						option
					)
					.then(
						([
							Point,
							Graphic,
							GraphicsLayer,
							SpatialReference,
							GeometryService,
							PictureMarkerSymbol
						]) => {
							let geometryService = new GeometryService(
								mapconfig.layerUrl.GemoteryUrl
							);
							var point = new Point([lon, lat]);
							//console.log(_this.map)
							//map.centerAt(point);
							var pointSymbl = PictureMarkerSymbol({
								url: "./Static/img/hotpointWarn22.gif" /*"IMG/map/hotpoint.gif"*/ ,
								height: 25,
								width: 25,
								yoffset: 0,
								type: "esriPMS"
							});
							pointSymbl.setOffset(0, 0);
							var graphic = new Graphic(point, pointSymbl);
							if (_this.map.getLayer("GL_PointCover_HotPoint")) {
								_this.map.getLayer("GL_PointCover_HotPoint").add(graphic);
							} else {
								var graphicsLayer = new GraphicsLayer({
									id: "GL_PointCover_HotPoint"
								});
								graphicsLayer.add(graphic);
								_this.map.addLayer(graphicsLayer, 0);
							}
						}
					);
			},
			//覆盖物样式设置方法
			GetcoverStyle(datatype, json, i) {
				var Color = window.symbol.Color;
				var PictureMarkerSymbol = window.symbol.PictureMarkerSymbol;
				var SimpleMarkerSymbol = window.symbol.SimpleMarkerSymbol;
				var SimpleLineSymbol = window.symbol.SimpleLineSymbol;
				var PictureFillSymbol = window.symbol.PictureFillSymbol;
				var r = {
					html: "",
					textSym: [],
					symbol: null
				};
				try {
					//初始化数据id,name,lon,lat,value
					var id = json.p_id;
					var name = json.p_name;
					var lon = json.p_lon;
					var p_type = json.p_type;
					var value = json.p_value;
					var color = "#278ac9";
					//value值进行处理
					if (
						value == null ||
						value == "" ||
						value == "—" ||
						value.toString().toUpperCase() == "NAN"
					) {
						value = -9999;
					}
					//①html覆盖物
					r.symbol = new SimpleMarkerSymbol(
						SimpleMarkerSymbol.STYLE_CIRCLE,
						5,
						new SimpleLineSymbol(
							SimpleLineSymbol.STYLE_SOLID,
							new Color([255, 0, 0]),
							1
						),
						new Color([255, 0, 0])
					); //带名称覆盖物旁边的点状标记
					debugger;
					// console.log(mapconfig)
					if (datatype == "waterquality") {
						//水质
						if (json.QualityLevel === 1) {
							r.symbol = new PictureMarkerSymbol({
								url: `${mapconfig.siteurl}/Static/img/ico-I.png`,
								width: 25,
								height: 25
							});
						} else if (json.QualityLevel === 2) {
							r.symbol = new PictureMarkerSymbol({
								url: `${mapconfig.siteurl}/Static/img/ico-II.png`,
								width: 25,
								height: 25
							});
						} else if (json.QualityLevel === 3) {
							r.symbol = new PictureMarkerSymbol({
								url: `${mapconfig.siteurl}/Static/img/ico-III.png`,
								width: 25,
								height: 25
							});
						} else if (json.QualityLevel === 4) {
							r.symbol = new PictureMarkerSymbol({
								url: `${mapconfig.siteurl}/Static/img/IV.png`,
								width: 25,
								height: 25
							});
						} else if (json.QualityLevel === 5) {
							r.symbol = new PictureMarkerSymbol({
								url: `${mapconfig.siteurl}/Static/img/ico-IIII.png`,
								width: 25,
								height: 25
							});
						} else if (json.QualityLevel === 6) {
							r.symbol = new PictureMarkerSymbol({
								url: `${mapconfig.siteurl}/Static/img/ico-IIIII.png`,
								width: 25,
								height: 25
							});
						} else {
							r.symbol = new PictureMarkerSymbol({
								url: `${mapconfig.siteurl}/Static/img/无.png`,
								width: 25,
								height: 25
							});
						}
					} else if (datatype == "water_area") {
						//html类的弹窗
						r.html =
							`<div class="ring" id="ring_${datatype}_${i}">
                                <div class="class_mapIcoDiv" style=" border: 2px solid ${color};">
                                    <div class="colordiv" style=" background: ${color};"></div>
                                     <div class="info">
                                        <ul>
                                            <li>功能区名称:${name}</li>
                                            <li>水质目标:IV</li>
                                        </ul>
                                    </div>
                                </div>
                          </div>`;
						// console.log(`ring_${datatype}_${i}`)
					} else if (datatype == "trace_enterprise") {
						r.symbol = null;
					} else if (datatype === "vuepoint") {
						debugger;
						if (json.biz_type === "diner") {
							r.symbol = new PictureMarkerSymbol({
								url: `${process.env.BASE_URL}img/dinner.png`,
								width: 18,
								height: 18
							});
						} else {
							r.symbol = new PictureMarkerSymbol({
								url: `${process.env.BASE_URL}img/mark.png`,
								width: 18,
								height: 18
							});
						}
						//   r.symbol = new PictureMarkerSymbol({
						//     url:  `${process.env.BASE_URL}img/ico-qsk.png`,
						//     width: 12,
						//     height: 10
						//   });
					} else {
						//如果不是html覆盖物就设置默认点位样式
						r.symbol = new PictureMarkerSymbol({
							url: `${process.env.BASE_URL}img/ico-qsk.png`,
							width: 24,
							height: 24
						});
					}
				} catch (e) {}
				return r;
			},
			//定位
			GaodePos() {
				const _this = this;
				return esriLoader
					.loadModules(
						[
							"esri/graphic",
							"esri/geometry/Point",
							"esri/symbols/SimpleMarkerSymbol",
							"esri/symbols/PictureMarkerSymbol",
							"esri/layers/GraphicsLayer",
							"dojo/domReady!"
						],
						option
					)
					.then(
						([
							Graphic,
							Point,
							SimpleMarkerSymbol,
							PictureMarkerSymbol,
							GraphicsLayer
						]) => {
							var options = {
								showButton: false, //是否显示定位按钮
								/* LT LB RT RB */
								buttonOffset: new AMap.Pixel(10, 20), //定位按钮距离对应角落的距离
								showMarker: false, //是否显示定位点
								markerOptions: {
									//自定义定位点样式，同Marker的Options
									offset: new AMap.Pixel(-18, -36)
								},
								showCircle: false //是否显示定位精度圈
							};
							// $(".zandingload").show();
							AMap.plugin(["AMap.Geolocation"], function() {
								var geolocation = new AMap.Geolocation(options);
								return geolocation.getCurrentPosition(function(status, result) {
									//let maskdom = document.querySelector(".mask");
									if (status == "complete") {
										//将位置信息提交到vuex的store中
										_this.$store.commit("getposinfomation", result);
										//$(".zandingload").hide();
										let lon = result.position.lng;
										let lat = result.position.lat;
										// console.log(status)
										// console.log(result)
										let Posname = result.formattedAddress;
										console.log(_this.map);
										_this.map.centerAndZoom([lon, lat], 18);
										// alert(`您所在的位置为：${Posname}`);
										//新建Graphic用来存放graphic
										var GraphicLayer = new GraphicsLayer({
											id: "pos_layer"
										});
										//将Graphic存放map中
										_this.map.addLayer(GraphicLayer);
										//添加标注
										var newPoint = new Point(
											lon,
											lat,
											_this.map.spatialReference
										);
										// var pictureMarkerSymbol = new PictureMarkerSymbol('img/points/position.png', 25, 25);
										var pictureMarkerSymbol = new PictureMarkerSymbol(
											"/Static/img/loc.png",
											23,
											23
										);
										var pt = new Graphic(newPoint, pictureMarkerSymbol);
										GraphicLayer.add(pt);
									}
								});
							});
						}
					);
			},

			//放大缩小方法
			MapZoom(type) {
				//设置新层级
				let changelevel = null;
				//获取当前地图的层级
				let level = this.map.getLevel();
				if (type == "out") {
					changelevel = ++level;
				} else if (type == "in") {
					changelevel = --level;
				}
				//设置当前层级
				this.map.setLevel(changelevel);
			},


			//底图切换（切片底图时）
			BaseMapChange(type) {
				if (type === "矢量图") {
					this.map.setBasemap("IMG");
				} else {
					this.map.setBasemap("VEC");
				}
			},
			//底图切换（动态底图）
			BaseMapChanges(type) {
				if (type === "矢量图") {
					if (this.map.getLayer("basemapVec_layer")) {
						this.map.getLayer("basemapVec_layer").hide();
					}
					if (this.map.getLayer("basemapImg_layer")) {
						this.map.getLayer("basemapImg_layer").show();
						return;
					}
					this.adddynimicLayer(mapconfig.layerUrl.imglayer, "basemapImg");
					//this.map.setBasemap("IMG");
				} else {
					if (this.map.getLayer("basemapImg_layer")) {
						this.map.getLayer("basemapImg_layer").hide();
					}
					if (this.map.getLayer("basemapVec_layer")) {
						this.map.getLayer("basemapVec_layer").show();
					}
					//this.map.setBasemap("VEC");
				}
			}

		}
	};
</script>
<style>
</style>
