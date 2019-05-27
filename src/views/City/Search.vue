<template>
	<div>
		<div class="city-search">
			<input v-model="keyword" type="text" placeholder="请输入城市名" />
		</div>
		<div v-show="keyword" ref='searchcontent' class="search-content">
			<ul>
				<li  class="search-item" v-for="(item,index) in list" :key='index' v-text="item.name" @click='handleClickCity(item.name)'></li>
				<li v-if='list.length==0' class="search-item">
					没有找到匹配数据
				</li>
			</ul>
	</div>
</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default{
		data(){
			return{
				keyword:'',
				list:[],
				timer:null
			}
		},
		methods:{
			handleClickCity (city) {
				this.$store.dispatch('changeCity',city)
//				this.$store.state.city = city
				this.$router.push('/')
			}
		},
		props:['cities'],
		watch:{
			keyword(){
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(this.keyword==""){
					this.list=[]
					return;
				}
				this.timer = setTimeout(()=>{
					const result = [];
					console.log(this.cities) 
					for(let i in this.cities){
						this.cities[i].forEach((item,index)=>{
							if(item.spell.indexOf(this.keyword)>-1 || item.name.indexOf(this.keyword)>-1){
								result.push(item)
							}
						})
					}
					this.list = result;
				},100)
			}
		},
		mounted(){
			this.scroll = new Bscroll(this.$refs.searchcontent)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.city-search
		height:.72rem
		padding:0 0.1rem
		background:$bgColor
		input
			box-sizing:border-box
			height:.62rem
			line-height:.62rem
			width:100%
			border-radius:.06rem
			text-align:center
			color:#888
			padding:0 .1rem
			font-family:'微软雅黑'
	.search-content
		overflow: hidden
		position: absolute
		top: 1.58rem
		z-index: 1
		left: 0
		right: 0
		bottom: 0
		background: #eee
		.search-item
			line-height: .62rem
			padding-left:.2rem 
			color: #888
			background: #fff
			border-bottom: 1px solid #eee
		
		
	
</style>