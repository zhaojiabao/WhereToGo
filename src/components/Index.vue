<template>
	<div class="hello">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<div style="height:20px"></div>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
</template>

<script>
	import HomeHeader from '../common/vue/Header'
	import HomeSwiper from '../common/vue/Swiper'
	import HomeIcons from '../common/vue/Icons'
	import HomeRecommend from '../common/vue/Recommend'
	import HomeWeekend from '../common/vue/Weekend'
	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			console.log(this.$store.state.city)
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		activated () {
			console.log('111111')
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
			
</style>