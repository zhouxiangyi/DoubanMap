<!--
 * @Author: zxy
 * @Date: 2020-07-01 17:01:06
 * @LastEditors: zxy
 * @LastEditTime: 2020-07-01 17:05:40
 * @Description: 
-->
<template>
	<div class="content">
			<div class="header">
				 <img src="../assets/default.png" alt="">
				 <div class="title">SunFlower</div>
				 <!-- <van-icon class="icons" name="search"/> -->
			</div>
	</div>
</template>
<script>
    import $ from 'jquery'
	export default {
		name: "mheader",
		data() {
			return {
				
			}
		},
		props:{
		  'htmlwidth':{
			   default:350,
         	   type:Number
		   }
		},
		mounted(){
			console.log(this.htmlwidth)
			// $(".header").width(this.htmlwidth)
		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
	.content{
		.header{
			display: flex;
			line-height:2.135rem;
			justify-content:center;
			padding: 0.27rem  0.5rem;
			position: fixed;
			width: 100%;
    		top: 0;
    		z-index: 99;
			background: white;
			border-bottom:.053333rem solid #efeaea;
			img{
				//max-width: 2.135rem;
				width: 2.135rem;
				height: 2.135rem;
			}
			.icons{
				line-height:2.135rem;
			}
		}
	}
</style>
