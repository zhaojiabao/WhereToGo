<template>
	<div class="icons">
		<swiper  :options='swiperOption'>
			<swiper-slide>
				<div class="icon" v-for="(item,index) of iconListOne" :key="item.id">
					<img :src="item.url" alt="" />
					<p class="text-hidden" v-text="item.desc"></p>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="icon" v-for="(item,index) of iconListTwo" :key="item.id">
					<img :src="item.url" alt="" />
					<p class="text-hidden" v-text="item.desc"></p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination1" slot='pagination'></div>
		</swiper>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				iconListOne:[
				{
					id:"0001",
					url:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					desc:'景点门票景点门票'
				},{
					id:"0002",
					url:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
					desc:'一日游'
				},{
					id:"0003",
					url:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
					desc:'北京必游'
				},{
					id:"0004",
					url:'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
					desc:'溜娃儿'
				},{
					id:"0005",
					url:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',
					desc:'爬长城'
				},{
					id:"0006",
					url:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
					desc:'故宫'
				},{
					id:"0007",
					url:'http://img1.qunarzz.com/piao/fusion/1803/22/98cbc1ff9e33fe02.png',
					desc:'赏花灯'
				},{
					id:"0008",
					url:'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
					desc:'北京滑雪'
				}
				],
				iconListTwo:[{
					id:"0009",
					url:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
					desc:'泡温泉'
				},{
					id:"0010",
					url:'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png',
					desc:'冰雪季'
				}],
				swiperOption:{
					loop:false,
					pagination:".swiper-pagination1",
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.icons >>> .swiper-pagination-bullet-active
		background:rgba(0,175,190,.8)
	.icons
		padding-bottom:50%
		height:0
		text-align:center
		.icon
			float:left
			width:25%
			height:0
			padding-bottom:25%;
			text-align:center;
			font-size:0.25rem
			img
				width:17vw
				height:17vw;
				margin-top: 2vw;
			p
				height: 6vw;
				line-height: 6vw;
		
</style>