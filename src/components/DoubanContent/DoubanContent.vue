<template>
	<div class="content">
		<div class="tabcard">
			<ul>

				<li v-for="(item,index) in tablist" :key="index" @click="togglediv(item.name,$event)">
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
							<van-rate count="5" :allow-half="halfstart" size="10px" v-model="item.halfrate" readonly color="#ffd21e" />
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
				<li v-for="(item,index) in danbantoplist" class="doubantop-item" :key="index">
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
								<li v-for="(sonitem,sonindex) in item.items.slice(0, 3)" class="itemlist-item" :key="sonindex">
									<div class="index">{{sonindex+1}}</div>
									<div class="itemlist-item-content">

										<img :src="sonitem.images.medium" alt="">
										<div class="itemlist-item-content-rate">
											<div class="ratemain-content">
												<span class="name">
													{{sonitem.title}}
												</span>
												<div class="rate">
													<van-rate count="5" :allow-half="halfstart" size="10px" v-model="sonitem.halfrate" readonly color="#ffd21e" />
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

						<li v-for="(item,index) in findmovieline" :key="index" @click="tooglemore(item.type,$event)">
							<div class="texe">{{item.name}}</div>
							<van-icon :name="item.iconclass" />
						</li>
						<!-- <li>
							<van-icon name="more-o" />
							<div class="texe">更多</div>
						</li> -->
					</ul>

				</div>
				<div class="findmore" v-show="showfindmore">
					<ul>
						<li v-for="(item,index) in findmoivemorelist" :key="index" @click="findmoresingle(item,$event)">
							{{item}}
						</li>

					</ul>
				</div>
				<keep-alive>
					<div class="movielist">
					<ul>
						<li v-for="item in filtermovies" :key="item.id">
							<div class="images">
            					<div class="left">
									<img :src="item.images.medium" alt="">
								</div>
            					<div class="right">
									<van-swipe  :loop="false">
  										<van-swipe-item v-for="(sonitem, index) in item.Movieimg" :key="index">
    									<img v-lazy="sonitem.cover"/>
  										</van-swipe-item>
									</van-swipe>
								</div>
          					</div>
          					<div class="info">
          					  <!-- 名称 -->
          					  <div class="titlemoive">
									<span>{{item.title}}</span>
									（<span class="year">{{item.year}}</span>）
							  </div>
          					  <!-- 评分 -->
          					  <div class="rate">
									<van-rate count="5" :allow-half="halfstart" size="6px" gutter="6px" v-model="item.halfrate" readonly color="#ffd21e" />
									<div class="value">
										{{item.halfrate*2}}
									</div>
							  </div>
          					  <!-- 简介 -->
          					  <div class="simpleinfo">
									{{item.hotcommit}}
							  </div>
          					  <!-- 标签 -->
          					  <div class="tags">
									<ul>
										<van-tag  class="biaoqian" round  color="#f1c496"  text-color="#81502d">{{item.genres[0]}},{{item.genres[1]}}</van-tag>
										<van-tag round  color="#f1c496" text-color="#81502d">{{item.directors[0].name}}</van-tag>
									</ul>
								</div>
          					</div>
						</li>
					</ul>
					</div>
				</keep-alive>
			</div>
		</div>
		
	</div>
</template>

<script>
	import config from "../../assets/config/config.js"
	import $ from 'jquery'
	import _ from 'lodash'
	export default {
		name: "DoubanContent",
		data() {
			return {
				images: [
        			'https://img.yzcdn.cn/vant/apple-1.jpg',
        			'https://img.yzcdn.cn/vant/apple-2.jpg',
				 ],
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
				findmovieline: [{
						name: "类型",
						iconclass: "arrow-down",
						type: "genres"
					},
					{
						name: "地区",
						iconclass: "arrow-down",
						type: "pubdates"
					},
					{
						name: "年代",
						iconclass: "arrow-down",
						type: "year"
					}
				],
				findmoivemore: {
					genres: [
						'全部'
					],
					pubdates: [
						'全部'
					],
					year: [
						'全部'
					],
				},
				findmoivemorelist: [],
				allmovies:[],//所有的电影
				filtermovies:[],//筛选的电影
				showfindmore: false,
				currentgenres:'全部', //当前类型
				currentpubdates:'全部',//当前地区
				currentyear:'全部',//当前年份
				currentype:'genres'//当前类型

			}
		},
		created() {
			this.$Toast.loading({
				message: '努力加载中...',
				duration: 0, //展示时长(ms)，值为 0 时，toast 不会消失
				overlay: true, //是否显示遮罩层
				forbidClick: true //是否禁止背景点击
			});
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
			if (this.type === 'movie') {
				this.dataformatMovie()
				console.log(this.danbantoplist)


			}
		},
		mounted() {
		

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
					for (let item of this.hotitemlist) {
						item.halfrate = item.rating.average / 2
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
					for (let item of res.items) {
						item.halfrate = item.rating.average / 2
					}
					//赋值
					this.danbantoplist.push(res)

				})
			},
			//获取top电影数据
			getTopMoive() {
				this.DBAPI.getTopMoive({
					apikey: config.doubankey,
					count: 250
				}, 'get').then((res) => {
					for (let item of res.subjects) {
						//添加类型
						for (let sonitem of item.genres) {

							this.findmoivemore.genres.push(sonitem)

						}
						//地区
						if (item.pubdates.length === 1) {
							let pub = item.pubdates[0].slice(11, item.pubdates[0].length - 1)
							if(pub==='' || pub==='陆'){
								pub = '其他地区'
							}
							this.findmoivemore.pubdates.push(pub)
							item.pubdates = pub
							//强制刷新
							 this.$forceUpdate();
						} else {
							let pub = item.pubdates[1].slice(11, item.pubdates[1].length - 1)
							if(pub==='' || pub==='陆'){
								pub = '其他地区'
							}
							this.findmoivemore.pubdates.push(pub)
							item.pubdates = pub
							//强制刷新
							 this.$forceUpdate();
						}
						//时间
						
						//根据年份进行年代判断
						if(Number(item.year)>=1980&&Number(item.year)<1990){
							this.findmoivemore.year.push('1980')
							item.pubyear = '80年代'
							 this.$forceUpdate();
						}else if(Number(item.year)>=1990&&Number(item.year)<2000){
							this.findmoivemore.year.push('1990')
							item.pubyear = '90年代'
							 this.$forceUpdate();
						}else if(Number(item.year)>=2000&&Number(item.year)<2010){
							this.findmoivemore.year.push('2000')
							item.pubyear = '2000年代'
							 this.$forceUpdate();
						}else if(Number(item.year)>=1960&&Number(item.year)<1970){
							this.findmoivemore.year.push('1960')
							item.pubyear = '60年代'
							 this.$forceUpdate();
						}else if(Number(item.year)>=1970&&Number(item.year)<1980){
							this.findmoivemore.year.push('1970')
							item.pubyear = '70年代'
							 this.$forceUpdate();
						}else if(Number(item.year)>=2010&&Number(item.year)<2015){
								this.findmoivemore.year.push('2010')
									item.pubyear = '2010年代'
									 this.$forceUpdate();
						}else if(Number(item.year)>=2015){
							this.findmoivemore.year.push(item.year)
								item.pubyear =item.year
								 this.$forceUpdate();
						}
						else{
							this.findmoivemore.year.push('1800')
							item.pubyear ='更早'
							 this.$forceUpdate();
						}
						//电影详情页
						//请求电影剧照
						this.DBAPI.getMovieimg({
							apikey: config.doubankey,
							count: 4
						},item.id,'get').then((res)=>{
							//剧照
							item.Movieimg = res.photos
							 this.$forceUpdate();
							//console.log(item.Movieimg)

						})
						//请求电影详细，描述和标签
						this.DBAPI.getMoviemore({
							apikey: config.doubankey
						},item.id,'get').then((res)=>{
							//剧照
							item.moreinfos = res
							item.hotcommit = res.popular_comments[0].content
							 this.$forceUpdate();

						})

					}
					//给全部电影赋值
					this.allmovies = res.subjects //_.shuffle(res.subjects)
					this.filtermovies = this.allmovies.slice(0,30)
					console.log('所有电影')
				    console.log(this.allmovies)
					this.findmoivemore.genres = new Set(this.findmoivemore.genres)
					this.findmoivemore.pubdates = new Set(this.findmoivemore.pubdates)
					//处理年代排序
					let years = []
					years = [...new Set(this.findmoivemore.year)]
					years.sort(function(a, b){return b - a});
					this.findmoivemore.year = []
					for(let item of years){
						if(item === '1960'){
							item='60年代'
						}else if(item === '1970'){
							item='70年代'
						}else if(item === '1980'){
							item='80年代'
						}else if(item === '1990'){
							item='90年代'
						}else if(item === '2000'){
							item='2000年代'
						}else if(item === '2010'){
							item='2010年代'
						}else if(item === '1800'){
							item='更早'
						}
						this.findmoivemore.year.push(item)
						
					}
					//this.findmoivemore.year = _.orderBy()

					
					//赋值
					res.items = res.subjects
					//背景图设置，排名第一的
					res.bgimg = res.items[0].images.medium
					this.danbantoplist.push(res)
					for (let item of res.items) {
						item.halfrate = item.rating.average / 2
					}
					
				    this.$Toast.clear()
					
					


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
					for (let item of res.items) {
						item.halfrate = item.rating.average / 2
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
				//this.getTopMoives()

			},
			//找电影，点击事件
			tooglemore(type, e) {
				
				this.showfindmore = !this.showfindmore
				

				let litype = null
				if (type === 'genres') {
					this.findmoivemorelist = this.findmoivemore.genres
					litype = this.currentgenres
				} else if (type === 'pubdates') {
					this.findmoivemorelist = this.findmoivemore.pubdates
					litype = this.currentpubdates
				} else {
					this.findmoivemorelist = this.findmoivemore.year
					litype = this.currentyear
				}
				//当前类型
				this.currenttype = type
			
				//循环li ，进行筛选
				setTimeout(()=>{
					for(let item of $(".findmore ul li")){
						if(item.innerText=== litype){
							item.click()
						}
					}
				},200)
			


			},

			findmoresingle(name, e) {
				//电影数据的筛选
		
				console.log(this.findmoivemorelist)
				//dom对象转jq对象
				let jqe = $(e.target)
				//获取下标
				jqe.addClass('active').siblings().removeClass('active')
				//判断类型进行赋值
				if(this.currenttype==='genres'){
						this.currentgenres = jqe[0].innerText
				}
				else if(this.currenttype==='pubdates'){
					this.currentpubdates = jqe[0].innerText
				}else{
					this.currentyear = jqe[0].innerText
				}

				this.moviefilter(this.currentgenres,this.currentpubdates,this.currentyear)
				//console.log(this.currentyear,this.currentgenres,this.currentpubdates)
				
				
			},
		    moviefilter(genres, pubdates, year) {
      			//filtermovies
      			//allmovies
      			//进行筛选
				  //1.当genres是全部的时候，其他不的时候
      			if (genres === "全部" && (pubdates !== "全部") & (year !== "全部")) {
		  			this.filtermovies = this.allmovies.filter((res)=>{
						
						  if(res.pubdates===pubdates&&res.pubyear===year){
							  return res
						   }
					})
					if(this.filtermovies.length===0){
						this.$Toast.fail('暂无数据');
						this.filtermovies = this.allmovies.slice(0,30)
					}
					this.$forceUpdate();
				
					 
      			}
      			//2.当pubdates是全部的时候，其他不的时候
     			else if (genres !== "全部" && (pubdates === "全部") & (year !== "全部")) {
					this.filtermovies = this.allmovies.filter((res)=>{
						 let mygeners = res.genres.join(',')
						  if(mygeners.includes(genres)&&res.pubyear===year){
							  return res
						  }
					})
					if(this.filtermovies.length===0){
						this.$Toast.fail('暂无数据');
						this.filtermovies = this.allmovies.slice(0,30)
					}
					this.$forceUpdate();
     			}
     			//3.当year是全部的时候，其他不的时候
     			else if (genres !== "全部" && (pubdates !== "全部") & (year === "全部")) {
					 this.filtermovies = this.allmovies.filter((res)=>{
						 let mygeners = res.genres.join(',')
						  if(mygeners.includes(genres)&&res.pubdates===pubdates){
							  return res
						  }
					})
					if(this.filtermovies.length===0){
						this.$Toast.fail('暂无数据');
						this.filtermovies = this.allmovies.slice(0,30)
					}
					this.$forceUpdate();
	 			}
	 			//4.当genres,pubdates是全部的时候，year不的时候
     			else if (genres === "全部" && (pubdates === "全部") & (year !== "全部")) {
					this.filtermovies = this.allmovies.filter((res)=>{
						  
						  if(res.pubyear===year){
							  return res
						  }
					})
					if(this.filtermovies.length===0){
						this.$Toast.fail('暂无数据');
						this.filtermovies = this.allmovies.slice(0,30)
					}
					this.$forceUpdate();
	 			}
	 			//5.当genres,year是全部的时候，pubdates不的时候
	 			else if (genres === "全部" && (pubdates !== "全部") & (year === "全部")) {
					this.filtermovies = this.allmovies.filter((res)=>{
						  
						  if(res.pubdates===pubdates){
							  return res
						  }
					})
					if(this.filtermovies.length===0){
						this.$Toast.fail('暂无数据');
						this.filtermovies = this.allmovies.slice(0,30)
					}
					this.$forceUpdate();


				} 
	 			//6.当pubdates,year是全部的时候，genres不的时候
	 			else if (genres !== "全部" && (pubdates === "全部") & (year === "全部")) {
					  	
					 	this.filtermovies = this.allmovies.filter((res)=>{
						  let mygeners = res.genres.join(',')
						  if(mygeners.includes(genres)){
							  return res
						  }
						})
						if(this.filtermovies.length===0){
							this.$Toast.fail('暂无数据');
							this.filtermovies = this.allmovies.slice(0,30)
						}
						this.$forceUpdate();
	 			}
	 			 //7.当全是的时候
	 			else if (genres === "全部" && (pubdates === "全部") & (year === "全部")) {
					this.filtermovies = this.allmovies.slice(0,30)
	 			}
	 			 //8.当全不是的时候
	 			else if (genres !== "全部" && (pubdates !== "全部") & (year !== "全部")) {
				    this.filtermovies = this.allmovies.filter((res)=>{
						 let mygeners = res.genres.join(',')
						  if(mygeners.includes(genres)&&res.pubdates===pubdates&&res.pubyear===year){
							  return res
						  }
					})
					if(this.filtermovies.length===0){
						this.$Toast.fail('暂无数据');
						this.filtermovies = this.allmovies.slice(0,30)
					}
					this.$forceUpdate();
     			}
			},
			togglediv(name,e){
				let jqe = $(e.target)
				if(name==='找电影'){
					var findmovie_top = $('.findmovie').offset().top;
					$('html,body').animate({scrollTop:findmovie_top-70},500);
       			 	
				}

			},
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

					.bgs {
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

		.findmovie {
			margin-top: 1.75rem;
			width: 100%;
			.title{
				color: black;
    			padding: 0 .48rem;
   	 			margin-bottom: .96rem;
				font-weight: bold;
			}
			.findmovecontent {
				.findline {
					width: 100%;
					border: .0625rem solid #dcdada;
					border-left: none;
					border-right: none;

					ul {
						display: flex;
						justify-content: space-around;
						padding: 0.53rem 0;

						li {
							display: flex;
							font-size: .6rem;
						}
					}

				}

				.findmore {
					width: 100%;
					background: #e2e2e2;
					;
					font-size: .6rem;
					border-radius: 0px 0px 1rem 1rem;
					z-index: 1;
					position: absolute;
					ul {
						display: flex;
						padding: 0.53rem;
						justify-content: space-around;
						flex-wrap: wrap;

						li {
							background: white;
							width: 22%;
							height: 1.44rem;
							line-height: 1.44rem;
							text-align: center;
							margin-bottom: .533rem;
							border-radius: .3125rem;
						}

						li.active {
							background: #05d714;
							color: white;

						}
					}
				}
				.movielist{
					padding: .48rem;
					ul{
						li{
							margin-bottom: 1.066667rem;
							.images{
								display: flex;
								justify-content: space-between;
								.left{
									height: 7.08rem;
    								width: 25%;
									img{
										width: 100%;
										height: 100%;
										border-radius: 5%;
									}
								}
								.right{
									width: 72%;
									height:7.08rem; 
									border-radius:5%;
									.van-swipe{
										width: 100% !important;
										height: 100% !important;
										border-radius:5%;
										img{
											width: 100% ;
											height: 100% ;
											border-radius:5%;
										}
									}
								}
							}
							.info{
								.titlemoive{
									color: black;
									font-size: .853333rem;
									.year{
										color: #717070;
									}
								}
								margin-top: .533333rem;
								.rate{
									display: flex;
									margin: .426667rem 0;
									.value{
										margin-left: .48rem;
										font-size:.266667rem;
									}
								}
								.simpleinfo{
									font-size: .533333rem;
									margin-bottom: .266667rem;
								}
								.tags{
									ul{
										display: flex;
										.biaoqian{
											margin-right: .373333rem;	
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
</style>
