<template>
	<div class="list">
		<ul>
			<li v-for="(item,key) of letters" v-text="item" :key='item' @click="handleClick"></li>
		</ul>
	</div>
</template>

<script>
	
	export default {
		props:['cities'],
		mounted(){
			
		},
		methods:{
			handleClick(e){
				this.$emit('change',e.target.innerText)
			}
		},
		computed:{
			letters(){
				const letters = [];
				for(let i in this.cities){
					letters.push(i)
				}
				return letters;
			}
		}
	}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.list
		display:flex
		flex-direction:column
		justify-content:center
		position:absolute
		top:1.58rem
		right:0
		bottom:0
		width:0.4rem
		text-align:center
		line-height:.4rem
		color:$bgColor
</style>