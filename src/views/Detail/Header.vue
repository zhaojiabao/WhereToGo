<template>
	<div>
		<router-link to='/' v-show='showAbs' class="header-abs" tag='div' ><i class="iconfont icon-fanhui" style="color: #FFF;font-size: .4rem;"></i></router-link>
		<div class="header-fixed" v-show='!showAbs'>
			<router-link tag='div' to='/' class="header-left">
				<i class="iconfont icon-fanhui"></i>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showAbs:true
			}
		},
		methods: {
			handleScroll(){
				const top = document.documentElement.scrollTop
				if(top>60){
					this.showAbs=false
				}else{
					this.showAbs=true
				}

			}
		},
		activated(){
			window.addEventListener('scroll',this.handleScroll)
		},
		deactivated(){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>

<style lang='stylus' scoped="scoped">
	@import '~styles/varibles.styl'
	.header-abs
		top :.2rem
		height:.8rem
		line-height:.8rem
		width:.8rem
		position:absolute
		left:.2rem
		background:rgba(0,0,0,.8)
		border-radius:.4rem
		text-align:center
	.header-fixed
		position:fixed
		z-index:2
		top:0
		left:0
		height:.86rem;
		line-height:.86rem;
		background:$bgColor;
		width:100%
		color: #fff;
		text-align:center;
		.header-left
			position:absolute
			width:.64rem;
			text-align: center;
</style>