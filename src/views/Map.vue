<template>
	<div class="map">
		<div id="mapdiv">
			<div id="map3D"></div>
		    <!-- <div id="map2D"></div> -->
		</div>
		<z-map ref="ZMap"></z-map>
	</div>
</template>

<script>
	import ZMap from "../components/MapMain.vue";
	export default {
		name: 'Map',
		name: "BaseMap",
		data() {
			return {
				maptype: "Amap",
				ZMap: null
			};
		},
		mounted() {
			this.ZMap = this.$refs.ZMap;
			this.initMapVue()
		},
		methods: {
			initMapVue() {
				this.ZMap.initMap('map3D', this.maptype)
			}
		},
		components: {
			ZMap
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
		        #map2D {
		            width: 100%;
		            height: 100%;
		            background: #f8f8f8;
		            position: absolute;
		        }
				#map3D {
				    width: 100%;
				    height: 100%;
				    background: #f8f8f8;
				    position: absolute;
				}
		    }
</style>
