<template>
	<div class="content">
		<div class="tabcard">
			<ul>

				<li v-for="(item,index) in tablist">
					<img :src="item.iconurl" alt="">
					<div class="title">
						{{item.name}}
					</div>
				</li>

			</ul>
		</div>
		<!-- 横向滚动热门榜单 -->
		<div class="hotrow">
			<div class="htitle">
				<span class="hottitle">热门</span>
				<div class="totalcount">
					<span class="count">查看全部{{hottatal}}部</span>
					<!-- 	<van-icon name="arrow" /> -->
				</div>
			</div>
			<ul>

				<li v-for="(item,index) in hotitemlist" :key="item.id">
					<!-- 电影图片 -->
					<img :src="item.images.medium" alt="">
					<!-- 信息 -->
					<div class="base">
						<!-- 名字与可不可播放 -->
						<div class="title">
							<!-- 	<van-icon class="icons" name="live" /> -->
							<div class="name">{{item.title}}</div>
						</div>
						<!-- 评分 -->
						<div class="rate">
							<van-rate count="5" :allow-half="halfstart" size="6px" v-model="item.halfrate" readonly  color="#ffd21e" />
							<div class="value">
								{{item.rating.average}}
							</div>
						</div>

					</div>

				</li>
			</ul>
		</div>
		<!-- 口碑,top横向榜单 -->
		<div class="doubantop">
			<ul class="doubantop-content">
				<li v-for="(item,index) in danbantoplist" class="doubantop-item" :key = "index">
					<!-- 背景圖高斯模糊處理 -->
					<div class="bg" :style='{backgroundImage:"url("+ item.bgimg + ")" }'>
					</div>
					<!-- 背景圖颜色模糊 -->
					<div class="bgs">
					
					</div>
					<div class="doubantop-item-content">
						<div class="toptitle">
							<div class="title">{{item.title}}</div>
							<!-- 	<div class="updatetime">每周五更新一次</div> -->
						</div>
						<div class="itemlist">
							<ul>
								<li v-for="(sonitem,sonindex) in item.items" class="itemlist-item" :key = "sonindex">
									<div class="index">{{sonindex+1}}</div>
									<div class="itemlist-item-content">

										<img :src="sonitem.images.medium" alt="">
										<div class="itemlist-item-content-rate">
											<div class="ratemain-content">
												<span class="name">
													{{sonitem.title}}
												</span>
												<div class="rate">
													<van-rate count="5" :allow-half="halfstart" size="6px" v-model="sonitem.halfrate" readonly    color="#ffd21e" />
													<div class="value">
														{{sonitem.rating.average}}
													</div>
												</div>
											</div>

										</div>
									</div>
								</li>
							</ul>
						</div>

					</div>
				</li>
			</ul>
		</div>
		<!-- 找电影 -->
		<div class="findmovie">
			<div class="title">找电影</div>
			<div class="findmovecontent">
				<div class="findline">
					 <ul>
						 
						 <li 
						 	v-for= "(item,index) in findmovieline" 
							:key="index"
							@click="tooglemore(item.type,$event)"
						 >
							<div class="texe">{{item.name}}</div>
							<van-icon :name="item.iconclass" />
						 </li>
						 <li>
							<van-icon name="more-o" />
							<div class="texe">更多</div>		
						 </li>
					 </ul>

				</div>
				<div class="findmore" v-show="showfindmore">
					<ul>
						<li v-for="(item,index) in findmoivemorelist" :key="index">
							{{item}}
						</li>
					
					</ul>	
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import config from "../../assets/config/config.js"
	export default {
		name: "DoubanContent",
		data() {
			return {
				type: null,
				value: 2.2,
				halfstart: true,
				tablist: [{
						name: "找电影",
						iconurl: "./img/search.png"
					},
					{
						name: "榜单",
						iconurl: "./img/排行榜.png"
					},
					{
						name: "即将上映",
						iconurl: "./img/倒计时.png"
					},
					{
						name: "片单",
						iconurl: "./img/电影.png"
					}
				],
				hotitemlist: null,
				hottatal: null,
				danbantoplist: [],
				findmovieline:[
					{
						name:"类型",
						iconclass:"arrow-down",
						type:"genres"
					},
					{
						name:"地区",
						iconclass:"arrow-down",
						type:"pubdates"
					},
					{
						name:"年代",
						iconclass:"arrow-down",
						type:"year"
					}
				],
				findmoivemore:{
					genres:[
						'全部'
					],
					pubdates:[
						'全部'
					],
					year:[
						'全部'
					],
				},
			    findmoivemorelist:[],
				showfinddata:false,
				showfindmore:false

			}
		},
		created() {
			this.type = this.$route.params.id
			//根据类型判断list的内容
			if (this.type === 'movie') {
				this.tablist = [{
						name: "找电影",
						iconurl: "./img/search.png"
					},
					{
						name: "榜单",
						iconurl: "./img/排行榜.png"
					},
					{
						name: "即将上映",
						iconurl: "./img/倒计时.png"
					},
					{
						name: "片单",
						iconurl: "./img/电影.png"
					}
				]
			} else if (this.type === 'tv') {
				this.tablist = [{
						name: "找电视",
						iconurl: "./img/search.png"
					},
					{
						name: "榜单",
						iconurl: "./img/排行榜.png"
					},
					{
						name: "即将播出",
						iconurl: "./img/倒计时.png"
					},
					{
						name: "播出时间表",
						iconurl: "./img/时间.png"
					}
				]
			} else if (this.type === 'book') {
				this.tablist = [{
						name: "找图书",
						iconurl: "./img/search.png"
					},
					{
						name: "榜单",
						iconurl: "./img/排行榜.png"
					},
					{
						name: "日推",
						iconurl: "./img/木马.png"
					},
					{
						name: "书单",
						iconurl: "./img/icon_书架.png"
					}
				]
			}
		},
		mounted() {
			if (this.type === 'movie') {
				this.dataformatMovie()
				console.log(this.danbantoplist)


			}

		},
		methods: {
			//获取热门电影数据
			getHotMovie() {
				this.DBAPI.getHotMovie({
					apikey: config.doubankey
				}, 'get').then((res) => {
					console.log(res)
					//赋值
					this.hotitemlist = res.subjects
					this.hottatal = res.total
					for(let item of this.hotitemlist){
						item.halfrate = item.rating.average/2
					}
					//this.danbantoplist.push(res)
				})
			},
			//获取周榜电影数据
			getWeeklyMoive() {
				this.DBAPI.getWeeklyMoive({
					apikey: config.doubankey
				}, 'get').then((res) => {
					console.log(res)
					//处理提取subject到subjects
					res.items = []
					for (let item of res.subjects) {
						res.items.push(item.subject)
					}
					res.items = res.items.splice(0, 3)
					res.updatetime = ""
					//背景图设置，排名第一的
					res.bgimg = res.items[0].images.medium
					for(let item of res.items){
						item.halfrate = item.rating.average/2
					}
					//赋值
					this.danbantoplist.push(res)

				})
			},
			//获取top电影数据
			getTopMoive() {
				this.DBAPI.getTopMoive({
					apikey: config.doubankey,
					count: 3
				}, 'get').then((res) => {
					console.log(res)
					//赋值
					res.items = res.subjects
					//背景图设置，排名第一的
					res.bgimg = res.items[0].images.medium
					this.danbantoplist.push(res)
					for(let item of res.items){
						item.halfrate = item.rating.average/2
					}

				})
			},
			//获取top电影数据所有的
			getTopMoives() {
				this.DBAPI.getTopMoive({
					apikey: config.doubankey,
					count: 250
				}, 'get').then((res) => {
				
					for(let item of res.subjects){
						//添加类型
						for(let sonitem of item.genres){
						
							this.findmoivemore.genres.push(sonitem)
						
						}
						//地区
						if(item.pubdates.length===1){
							let pub = item.pubdates[0].slice(11, item.pubdates[0].length-1)
							this.findmoivemore.pubdates.push(pub)
						}else{
							let pub = item.pubdates[1].slice(11, item.pubdates[1].length-1)
							this.findmoivemore.pubdates.push(pub)
						}
						//时间
						this.findmoivemore.year.push(item.year)
						

					}
					this.findmoivemore.genres = new Set(this.findmoivemore.genres)
					this.findmoivemore.pubdates = new Set(this.findmoivemore.pubdates)
					this.findmoivemore.year = new Set(this.findmoivemore.year)

					this.showfinddata = true

					
					

				})
			},
			//获取新片的排行
			getNewmovies() {
				this.DBAPI.getNewmovies({
					apikey: config.doubankey
				}, 'get').then((res) => {
					console.log(res)
					//赋值
					res.items = res.subjects
					res.items = res.items.splice(0, 3)
					//背景图设置，排名第一的
					res.bgimg = res.items[0].images.medium
					this.danbantoplist.push(res)
					for(let item of res.items){
						item.halfrate = item.rating.average/2
					}

				})
			},
			//获取即将上映的影片
			getComingMovie() {
				this.DBAPI.getComingMovie({
					apikey: config.doubankey
				}, 'get').then((res) => {
					console.log(res)
					
			
				})
			},
			//电影页数据整理，并赋值
			dataformatMovie() {
				this.getHotMovie()
				this.getTopMoive()
				this.getNewmovies()
				this.getWeeklyMoive()
				this.getTopMoives()
				
			},
			//找电影，点击事件
			tooglemore(type,e){
				if(type === 'genres'){
					this.findmoivemorelist = this.findmoivemore.genres
				}else if(type === 'pubdates'){
					this.findmoivemorelist = this.findmoivemore.pubdates
				}else{
					this.findmoivemorelist = this.findmoivemore.year
				}
			

				if(this.showfinddata){
					this.showfindmore = !this.showfindmore
				}
			
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin-top: .86rem;

		.tabcard {
			ul {
				display: flex;
				font-size: .6rem;
				justify-content: space-around;

				// box-shadow:2px 2px 5px #333333;
				li {
					background: white;
					text-align: center;
					width: 20%;
					padding: .32rem 0;
					border-radius: 5%;
					border: 1px solid #cdcbcb;
					//box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.9); 
					box-shadow: .1rem -.1rem .26rem #333333;
				}
			}
		}

		.hotrow {
			margin-top: 1.32rem;

			.htitle {
				display: flex;
				justify-content: space-between;
				color: black;
				padding: 0 .48rem;
				margin-bottom: .96rem;

				.hottitle {
					font-weight: bold;
				}

				.count {
					font-size: .64rem;
					line-height: 1.12rem;
				}
			}

			ul {
				padding-left: .48rem;
				display: flex;
				overflow-x: auto;
				overflow-y: hidden;
				scrollbar-width: none;
				/* Firefox */
				-ms-overflow-style: none;

				/* IE 10+ */
				li {
					width: 5.26rem;
					padding-right: .4rem;

					// height: 6.08rem;
					img {
						// width: 100%;
						height: 7.08rem;
						border-radius: 5%;
					}

					.base {

						.title {
							.icons {
								color: #efaeee;
							}

							.name {
								font-size: .6rem;
								color: black;
								font-weight: bold;
								line-height: 1.12rem;
								word-break: keep-all;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
							}

							display: flex;
						}

						.rate {
							display: flex;
							justify-content: space-between;

							.value {
								font-size: .53rem;
							}
						}

					}
				}
			}

			ul::-webkit-scrollbar {
				/* WebKit */
				width: 0;
				height: 0;
			}
		}

		.doubantop {
			margin-top: 1.32rem;
			height: 10.7rem;
			color: white;

			.doubantop-content {
				padding-left: .48rem;
				display: flex;
				overflow-x: auto;
				overflow-y: hidden;
				scrollbar-width: none;
				/* Firefox */
				-ms-overflow-style: none;

				// width: 100%;
				.doubantop-item {
					position: relative;
					box-sizing: border-box;

					.bg {
						width: 100%;
						height: 100%;
						background-size: 100% 100%;

						background-repeat: no-repeat;
						position: absolute;
						z-index: -1;
						// filter: blur(2px);
					}
					.bgs{
						width: 100%;
						height: 75%;
						background-size: 100% 100%;
						background: rgba($color:#2b2a2acc, $alpha: .8);
						background-repeat: no-repeat;
						position: absolute;
						z-index: -1;
						filter: blur(1.06rem);
						top: 19%;
						
					}

					//width:200px;
					// flex-shrink:0;
					margin-right: .4rem;
					background-size: cover;

					background-position: center 0;


					//display: flex;
					.doubantop-item-content {
						padding: .96rem;
						// filter: blur(5px);

						.toptitle {
							line-height: .53rem;
							display: flex;
							justify-content: space-between;

							.title {
								// font-weight: bold;
							}

							.updatetime {
								font-size: .53rem;
							}
						}

						.itemlist {
							width: 13.3rem;
							margin-top: 1.173rem;

							.itemlist-item {
								font-size: .69rem;
								display: flex;
								padding-bottom: 0.8rem;

								.index {
									// line-height: 2.933333rem;
									line-height: 1.706666rem;
								}

								.itemlist-item-content {
									display: flex;
									margin-left: 1.066666rem;

									img {
										width: 1.226666rem;
										height: 1.813333rem;
										border-radius: 5%;
									}

									.itemlist-item-content-rate {
										// display: flex;
										margin-left: 0.533333rem;

										.ratemain-content {
											margin-top: 0.32rem;

											.rate {
												display: flex;

												.value {
													margin-left: 0.533333rem;
												}
											}
										}

									}
								}
							}
						}
					}


				}

		

			}
		}
		.findmovie{
			margin-top: 20px;
			height: 10000px;
			width: 100%;
			.findmovecontent{
				.findline{
					width: 100%;
					border:1px solid red ;
					border-left:none ;
					border-right:none ;
					ul{
					   display: flex;
					   justify-content: space-around;
					       padding: 0.53rem 0;
					   li{
						   display: flex;
						   font-size: .6rem;
					   }
					}
					
				}
				.findmore{
					width: 100%;
					background: #e2e2e2;;
					font-size: .6rem;
					border-radius:0px 0px 1rem 1rem;
					ul{
						display: flex;
						padding: 0.53rem;
						justify-content: space-around;
						flex-wrap:wrap;
						li{
							background: white;
							width: 22%;
							height:1.44rem;
							line-height: 1.44rem;
    						text-align: center;
							margin-bottom: .533rem;
						}
					}
				}
			}
		}
	}
</style>
