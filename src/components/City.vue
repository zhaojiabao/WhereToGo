<template>
	<div>
		<city-header></city-header>
		<city-search :cities='cities'></city-search>
		<city-list :letter='letter' :hot='hotCityList' :cities='cities'></city-list>
		<city-alphabet @change='handleChangeClick' :cities='cities'></city-alphabet>
	</div>
</template>
 
<script>
	import CityHeader from '../views/City/Header'
	import CitySearch from '../views/City/Search'
	import CityList from '../views/City/List'
	import CityAlphabet from '../views/City/Alphabet'
	import axios from 'axios'
	export default{
		data(){
			return{
				hotCityList:[],
				cities:{},
				letter:''
			}
		},
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		mounted(){
			this.getCityInfo();
		},
		methods:{
			getCityInfo(){
				axios.get('../../static/city.json').then(res=>{
					const data = res.data.data
					this.hotCityList = data.hotCities
					this.cities =data.cities
				})
			},
			handleChangeClick(letter){
				this.letter=letter;
			}
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>