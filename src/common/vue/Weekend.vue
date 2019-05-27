<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="(item,index) of weekDataList" :key='index'>
				<img class="item-img" :src="item.imgUrl" :alt="item.title" />
				<p class="item-title text-hidden" v-text="item.title"></p>
				<p class="item-desc text-hidden"  v-text="item.desc"></p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				weekDataList:[{
					id:"0001",
					imgUrl:'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
					title:'京城周末撒欢',
					desc:'在帝都过周末，不仅仅是城中游！'
				},{
					id:"0002",
					imgUrl:'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
					title:'京城溜娃必去',
					desc:'德智体美劳全面发展的亲子日，这些地方该去看看这些地方该去看看这些地方该去看看…！'
				},{
					id:"0003",
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
					title:'帝都必打卡',
					desc:'来北京必去的景点非这些地方莫属'
				},{
					id:"0004",
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
					title:'寻找北京的皇城范儿',
					desc:'数百年的宫廷庙宇，至今依旧威严霸气'
				}]
			}
		}
	}
</script>

<style lang='stylus' scoped>
	.title
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.item
		border-bottom:.1rem solid #eee
		img
			height:36.2vw
			width:100%
			display:inline-block
		.item-title
			line-height:.6rem
			height:.6rem
			padding-left:.2rem
			font-size:0.28rem
		.item-desc
			line-height:.4rem
			height:.4rem
			padding-left:.2rem
			font-size:0.2rem
			color:#888
			margin-bottom:.2rem
				
</style>