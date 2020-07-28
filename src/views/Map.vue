<template>
	<div class="map">
		<div id="mapdiv">
			<div id="mapBOX"></div>
			<!-- 工具栏 -->
			<div class="mapTool">
				<div class="search">
					<van-search v-model="value" shape="round" placeholder="搜地点,查公交,查路线" background="transparent" :left-icon="logourl"
					 right-icon="weapp-nav" />
				</div>
				<!-- 地图小工具 -->
				<div class="littletool">
					<ul>
						<li v-for="(item,index) in maptools" :key="item.type">
							<span class="icondiv" :class="item.icon"></span>
							<span class="text">
								{{item.name}}
							</span>

						</li>
					</ul>
				</div>
				<!-- 放大缩小 -->
				<div class="zoomdiv">
					<ul>
						<li>
							<span class="icondiv esri-icon-plus"></span>
						</li>
						<li>
							<span class="icondiv esri-icon-minus"></span>									
						</li>
					</ul>
				</div>
				<!-- 定位 -->
				<div class="location">
					<span class="icondiv esri-icon-radio-checked"></span>
				</div>
				<!-- 底部搜索查询路线 -->
				<div class="bottomdiv">
					<ul>
						<li>
							<span class="icondiv esri-icon-plus"></span>
							<span class="text">
								发现周边
							</span>
						</li>
						<li>
							<span class="icondiv esri-icon-plus"></span>
							<span class="text">
								路线
							</span>
						</li>
						<li>
							<span class="icondiv esri-icon-plus"></span>
							<span class="text">
								出行助手
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import ZMap from "../assets/js/map/map.js"
	import gisMoudls from "../assets/js/map/Maploadmoduls.js"
	export default {
		name: 'Map',
		name: "BaseMap",
		data() {
			return {
				maptype: "Amap",
				ZMaps: null,
				value: '',
				logourl: require("../assets/default.png"),
				//小工具
				maptools: [{
						name: "图层",
						icon: "esri-icon-collection",
						type: "layers"
					},
					{
						name: "距离",
						icon: "esri-icon-measure-line",
						type: "measureline"
					},
					{
						name: "面积",
						icon: "esri-icon-measure-area",
						type: "measurearea"
					}
				]
			};
		},
		mounted() {
			// this.ZMap = this.$refs.ZMap;
			this.initMapVue()
		},
		methods: {
			initMapVue() {
				gisMoudls.loadArcgisMoudls().then((res) => {
					// console.log(res)
					this.ZMaps = new ZMap(res)
					this.ZMaps.init()
					// console.log(zmaps.moudls)
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import url('https://js.arcgis.com/4.15/esri/themes/light/main.css');

	#mapdiv {
		height: 100%;
		width: 100%;
		padding: 0px;
		margin: 0px;

		#mapBOX {
			width: 100%;
			height: 100%;
			background: #f8f8f8;
			position: absolute;
			outline: none !important;
		}

		.mapTool {

			.search {
				position: absolute;
				width: 100%;
				top: 2.666666rem;

				.van-search__content--round {
					box-shadow: 0.16rem 0.32rem 0.266666rem #888888;
					border: 0.053333rem solid #dcdada;
				}

			}

			.littletool {
				position: absolute;
				right: 0.64rem;
				top: 5.866666rem;
				box-shadow: 0.16rem 0.32rem 0.266666rem #888888;
				border: 0.053333rem solid #dcdada;
				border-radius: 5%;

				ul {
					display: flex;
					flex-direction: column;
					background: white;
					font-size: 0.64rem;

					li {
						display: flex;
						flex-direction: column;
						padding: 0.213333rem 0.16rem;
						border-bottom: 0.053333rem solid #dad1d1;
						span{
							text-align: center;
							margin-bottom: 0.16rem;
						}
					}
				}
			}
			.zoomdiv{
				position: absolute;
				right: 0.64rem;
				box-shadow: 0.16rem 0.32rem 0.266666rem #888888;
				border: 0.053333rem solid #dcdada;
				border-radius: 5%;
				top: 16.16rem;
				ul {
					display: flex;
					flex-direction: column;
					background: white;
					font-size: 0.64rem;
				
					li {
						padding: 0.213333rem 0.373333rem;
						border-bottom: 0.053333rem solid #dad1d1;
					}
				}
			}
			.location{
				position: absolute;
				box-shadow: 0.16rem 0.32rem 0.266666rem #888888;
				border: 0.053333rem solid #dcdada;
				background-color: white;
				bottom: 8.586666rem;
				left: 0.64rem;
				padding: 0.213333rem;
			}
			.bottomdiv{
				position: absolute;
				box-shadow: 0.16rem 0.32rem 0.266666rem #888888;
				border: 0.053333rem solid #dcdada;
				background-color: white;
				bottom: 3.626666rem;
				left: 7.306666rem;
			}
		}


	}
</style>
