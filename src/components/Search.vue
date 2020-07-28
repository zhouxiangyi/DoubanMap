<!--
 * @Author: zxy
 * @Date: 2020-07-01 17:01:06
 * @LastEditors: zxy
 * @LastEditTime: 2020-07-01 17:05:40
 * @Description: 
-->
<template>
	<div class="content">
		<van-tabbar v-model="active" @change="onChange" inactive-color="#fff" active-color="#d3b813">
			<van-tabbar-item icon="video-o" name="Douban">书影</van-tabbar-item>
			<van-tabbar-item icon="service-o" name="MainMusic">音乐</van-tabbar-item>
			<van-tabbar-item icon="location-o" name="Map">地图</van-tabbar-item>
			<van-tabbar-item icon="manager-o" name="My">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
	export default {
		name: "ztabbar",
		data() {
			return {
				active: 'Douban'
			}
		},
		methods: {
			//路由切换
			onChange(index) {
				console.log(index)
				this.$router.push({
					name: index
				})
			},
		}
	}
</script>
