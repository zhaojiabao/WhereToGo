<template>
	<div class="city-header">
		城市选择
		<router-link to='/' tag='div'>
			<i class="iconfont icon-fanhui city-back-icon"></i>
		</router-link>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl' 
	.city-header
		line-height:.86rem
		height:.86rem
		background:$bgColor
		color:#fff
		text-align:center
		width:100%
		font-size:.32rem
		position:relative
		.city-back-icon
			position:absolute
			width:.64rem
			height:100%
			text-align:center
			top:0
			left:0
			
</style>