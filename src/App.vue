<!--
 * @Author: zxy
 * @Date: 2020-07-01 16:27:12
 * @LastEditors: zxy
 * @LastEditTime: 2020-07-01 17:09:37
 * @Description: 
-->
<template>
	<div id="app">
		<!-- header和logo -->
		<mheader/>
		<!-- tab栏 -->
		<ztabbar />
		<transition 
			enter-active-class="animated slideInLeft" 
			leave-active-class="animated slideOutRight">
			<router-view />
		</transition>
	</div>
</template>
<script>
	import ztabbar from "./components/ztab.vue"
	import mheader from "./components/header.vue"
	export default {

		name: 'App',
		mounted(){
			//移动端适配
			//获得屏幕大小
			let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;  //浏览器兼容
			console.log("屏幕宽度："+htmlwidth) //iphone5:320 iphone6:375
			//获得html DOM元素
			let htmlDom = document.getElementsByTagName('html')[0];
			
			//给DOM元素设置样式
			htmlDom.style.fontSize = htmlwidth/20 + 'px';  			
		},
		components: {
			ztabbar,
			mheader
		}
	}
</script>

<style lang="scss">
   @import '~styles/base.scss';
	// #app {
	// 	font-family: Avenir, Helvetica, Arial, sans-serif;
	// 	-webkit-font-smoothing: antialiased;
	// 	-moz-osx-font-smoothing: grayscale;
	// 	text-align: center;
	// 	color: #2c3e50;
		
	// }
</style>
