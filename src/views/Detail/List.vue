<template>
	<div class="detail-list">
		<div class="item" v-for="(item,index) in list" :key="index">
			<div class="item-title">
				<span class="item-title-icon"></span>
				<span class="item-title-text" v-text="item.title"></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		activated(){
			
		},
		deactivated(){
			
		},
		props:{
			list:Array
		}
	}
</script>

<style lang='stylus' scoped="scoped">
	@import '~styles/varibles.styl'
	.detail-list
		.item
			.item-title
				position:relative
				line-height: .8rem;
				font-size: .32rem;
				padding: 0 .2rem;
				border-bottom: 1px solid #eee;
				.item-title-icon
					display: inline-block;
					width: .36rem;
					height: .36rem;
					position:absolute
					background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
					left: .2rem;
					top:.22rem
					background-size: .4rem 3rem;
				.item-title-text
					margin-left:.4rem
</style>