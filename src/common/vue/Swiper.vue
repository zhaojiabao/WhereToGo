<template>
	<div class="warpper">
		<swiper :options='swiperOption'>
			<swiper-slide class='swiper-slide' v-for='(item,index) of bannerList' :key='index'>
				<img :src="item" alt="" />
			</swiper-slide>
			<div class="swiper-pagination" slot='pagination'></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
					pagination:".swiper-pagination",
					loop:true
				},
				bannerList: [
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/3921acb51460dc6fa9e3c7464fac5cbb.jpg_750x200_d992573a.jpg', 
				'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg',
				'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/a211765c0bb579b18c6e7d6d75997a48.jpg_750x200_b6921fa6.jpg',
				'http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/99d97f5421741c2a2028dced52b66391.jpg_750x200_9e38628d.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/db060ae95b1d57f39654f0b425c56249.jpg_750x200_6e703a23.jpg',
				'http://img1.qunarzz.com/piao/fusion/1808/70/5603e6a535062402.jpg_750x200_2c552f2c.jpg',
				'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/c64e6f7308f67f0862adb64b9d9fcff0.jpg_750x200_37c4c320.jpg'
				]
			}
		},
		methods: {
			callback() {}
		}
	}
</script>

<style lang='stylus' scoped="scoped">
	.warpper >>> .swiper-pagination-bullet-active
		background:#fff
	.warpper
		height:30vw
		.swiper-slide 
			height:30vw
			width:100%
			img 
				width: 100%
				height: 100%
</style>