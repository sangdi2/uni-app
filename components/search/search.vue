<template>
	<view>
		<view class="search-container" @click="searchBoxHandler">
			<view class="search-item">
				 <icon type="search" size="15"/>
				 <text>搜索</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				
			};
		},
		methods:{
			searchBoxHandler(){
				this.$emit('myclick')
			}
		}
	}
</script>

<style lang="scss">
.search-container{
	background-color: #bf2238;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0 12px;
	.search-item{
		width: 100%;
		border-radius: 18px;
		background-color: #fff;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		text{
			margin-left: 5px;
		}
	}
}
</style>