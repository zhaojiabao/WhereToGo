<template>
	<div>
		<div class="detail-banner">
			<div class="banner-top">
				<img class="detail-banner-img" src="https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="" />
				<div class="banner-info">
					<div class="banner-info-title">故宫(AAAAA景区)</div>
					<div class="banner-info-number" @click="handleShowGallary"><i class="iconfont icon-tupian" style="font-size: .24rem;"></i> 40</div>
				</div>
			</div>
		</div>
		<fade-animation>
			<gallary @close='close' :imgs='imgs' v-if='showGallary'></gallary>
		</fade-animation>
	</div>
</template>

<script>
	import Gallary from 'commonvue/Gallary'
	import FadeAnimation from 'commonvue/Fade'
	export default{
		data(){
			return{
				imgs:['http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/3921acb51460dc6fa9e3c7464fac5cbb.jpg_750x200_d992573a.jpg', 
				'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg',
				'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a211765c0bb579b18c6e7d6d75997a48.jpg_750x200_b6921fa6.jpg',
				'http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/99d97f5421741c2a2028dced52b66391.jpg_750x200_9e38628d.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/db060ae95b1d57f39654f0b425c56249.jpg_750x200_6e703a23.jpg',
				'http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/c64e6f7308f67f0862adb64b9d9fcff0.jpg_750x200_37c4c320.jpg'],
				showGallary:false
			}
		},
		components:{
			Gallary,
			FadeAnimation
		},
		methods:{
			handleShowGallary(){
				this.showGallary = true;
			},
			close(){
				this.showGallary = false;
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	.detail-banner
		.banner-top
			position:relative
			.detail-banner-img
				height:55vw
				width:100%
			.banner-info
				position:absolute
				left:0
				right:0
				bottom:0
				line-height:.6rem
				display:flex
				background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
				.banner-info-title
					flex:1
					color:#fff
					padding-left:.2rem
					font-size:.32rem
				.banner-info-number
					height:.4rem
					text-align:center
					color:#fff
					background:rgba(0,0,0,.8)
					border-radius:.2rem
					padding 0 .4rem
					line-height:.4rem
					margin-right:.2rem
					margin-top:.1rem
					font-size:.24rem
					
					
			
</style>