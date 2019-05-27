<template>
	<div class="container" @click="grllaryClose">
		<div class="warpper">
			<swiper :options='swiperOption'>
				<swiper-slide class='swiper-slide' v-for='(item,index) of imgs' :key='index'>
					<img class="gallary-img" :src="item" alt="" />
				</swiper-slide>
				<div class="swiper-pagination" slot='pagination'></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default{
		props:['imgs'],
		data(){
			return{
				swiperOption: {
					pagination:".swiper-pagination",
					loop:true,
					paginationType:'fraction'
				}
			}
		},
		methods:{
			grllaryClose(){
				this.$emit('close')
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	.container >>> .swiper-container 
		overflow:inherit
	.container
		display :flex
		flex-direction: column
		justify-content: center
		position:fixed
		top: 0
		left: 0
		right: 0
		bottom : 0
		background: #000
		z-index:10
		.warpper
			width:100%
			.gallary-img
				width:100%
			.swiper-pagination
				color: #fff;
				bottom:-1rem
</style>