<template>
	<div class="header">
		<div class="header-left">
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div class="header-input">
			<i class="iconfont icon-sousuo"></i>
			输入城市/景点/游玩主题
		</div>
		<router-link to='/City' tag='div'>
			<div class="header-right">
				{{$store.state.city}}
				<i class="iconfont icon-caret-down down-squre"></i>
			</div>
		</router-link>
	</div>
</template>

<script>
</script>

<style lang="stylus">
	@import '~styles/varibles.styl'
	.header
		display:flex;
		height:.86rem;
		line-height:.86rem;
		background:$bgColor;
		color: #fff;
		.header-left
			width:.64rem;
			float:left;
			text-align: center;
		.header-input
			flex:1;
			background:#fff;
			border-radius:.1rem;
			height:.64rem;
			line-height:.64rem;
			margin-top:.11rem;
			margin-left:.2rem;
			color: #ccc;
			padding-left:.2rem;
		.header-right
			min-width:1.04rem;
			padding:0 .1rem
			float:right;
			text-align:center;
			.down-squre
				font-size: 10px;
				margin-left:-0.04rem;
			
</style>