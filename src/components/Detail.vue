<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<detail-list :list='list'></detail-list>
		<div style="height: 1000px;">
			
		</div>
	</div>
</template>

<script>
	import DetailBanner from '../views/Detail/Banner'
	import DetailHeader from '../views/Detail/Header'
	import DetailList from '../views/Detail/List'
	import axios from 'axios'
	export default{
		methods:{
			getDataInfo(){
				axios.get('../../static/detail.json').then(res=>{
					console.log(res.data.data)
				})
			}
		},
		data(){
			return{
				list:[{
					title:'成人票'
				},{
					title:'学生票'
				},{
					title:'儿童票'
				},{
					title:'特惠票'
				}]
			}
		},
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		mounted(){
			this.getDataInfo();
		}
	}
</script>

<style lang="stylus" scoped="scoped">
	
</style>