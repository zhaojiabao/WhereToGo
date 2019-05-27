<template>
	<transition>
		<slot>
			
		</slot>
	</transition>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	.v-enter,.v-leave-to
		opacity:0
	.v-enter-active,.v-leave-active
		transition:opacity .5s
</style>