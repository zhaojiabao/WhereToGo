<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<router-link :to='"/Detail/"+item.id' tag= 'li' class="item" v-for="(item,index) of recommendList" :key='item.id'>
					<img class="item-img" :src="item.imgUrl" :alt="item.title" />
					<div class="item-info">
						<p class="item-title text-hidden" v-text="item.title"></p>
						<p class="item-desc text-hidden" v-text="item.desc"></p>
						<button class="item-button">查看详情</button>
					</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				recommendList:[{
					id:1,
					imgUrl:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
					title:'故宫',
					desc:'世界五大宫之首，穿越与您近在咫尺'
				},{
					id:2,
					imgUrl:'http://img1.qunarzz.com/sight/p0/1503/dc/dc651cd2e01fb900.img.jpg_200x200_04f5b7b7.jpg',
					title:'南宫温泉水世界',
					desc:'南宫旅游'
				},{
					id:3,
					imgUrl:'http://img1.qunarzz.com/sight/p0/1511/a5/a57e18e2084ec48190.water.jpg_200x200_60287f5d.jpg',
					title:'温都水城',
					desc:'随买随用'
				},{
					id:4,
					imgUrl:'http://img1.qunarzz.com/sight/p0/1512/b1/b18989acafa7fb0190.img.jpg_200x200_e8bb95ba.jpg',
					title:'静之湖滑雪场',
					desc:'昌平区'
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
		display:flex
		height:2rem 
		overflow:hidden
		.item-img
			height:1.8rem;
			width: 1.8rem;
			margin: 0.1rem;
			margin-right:.3rem
		.item-info
			flex:1
			min-width:0
			.item-title
				line-height:.8rem
				font-size:.32rem
			.item-desc
				line-height:.5rem
				color:#888
				font-size:.2rem
			.item-button
				margin-top:.1rem
				background:#ff9300
				border-radius:.06rem
				color:#fff
				font-size:.24rem
				padding:0.02rem 0.2rem
				
</style>