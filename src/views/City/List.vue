<template>
	<div>
		<div class="city-list" ref='wapper'>
			<div>	
				<div class="area">
					<div class="now-title">
						当前城市
					</div>
					<div class="button-list">
						<div class="button-wrapper">
							<div class="button">
								{{this.$store.state.city}}
							</div>
						</div>
					</div>
				</div>
				<div class="area">
					<div class="hot-title">
						热门城市
					</div>
					<div class="button-list">
						<div class="button-wrapper" v-for="(item,index) of hot" :key='item.id' @click='handleClickCity(item.name)'>
							<div class="button" v-text="item.name"></div>
						</div>
					</div>
				</div>
				<div class="area" :ref='key' v-for='(item,key,index) of cities' :key='index'>
					<div class="hot-title" v-text="key"></div>
					<div class="item-list">
						<div 
							class="item"
							v-for="inneritem of item"
							:key='inneritem.id'
							v-text="inneritem.name"
							@click='handleClickCity(inneritem.name)'
						></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	export default{
		props:['hot','cities',"letter"],
		mounted(){
			this.scroll = new Bscroll(this.$refs.wapper)
		},
		watch:{
			letter(){
				if(this.letter){
					const element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		},
		methods:{
			handleClickCity (city) {
				this.$store.dispatch('changeCity',city)
//				this.$store.state.city = city
				this.$router.push('/')
			}
		}
	}
</script>


<style lang="stylus" scoped>
	.city-list
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		.now-title,.hot-title
			height:.44rem
			line-height:.44rem
			background:#eee
			color:#888
			padding:.1rem .2rem
			font-size:.26rem
		.button-list
			overflow:hidden;
			padding:.1rem .6rem .1rem .1rem;
			.button-wrapper
				float: left
				width:33.33%
				.button
					border:.02rem solid #ccc;
					text-align:center
					margin: .1rem
					padding: .1rem 0
					border-radius:.06rem
					color: #888
		.item-list
			.item
				line-height:.54rem
				color:#888
				padding-left:.2rem
				border-bottom:.02rem solid #ccc
				
</style>