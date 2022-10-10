<template>
	<view class="mysettle">
		<view class="left">
			<radio :checked="isfullchecked" color="red" @click="ChangeAllState"></radio>
			<view class="quan">全选</view>
		</view>
		<view class="zhong">
			<view>合计：</view>
			<view class="zong-price">￥{{goodsPrice.toFixed(2)}}</view>
		</view>
		<view class="right">结算({{checkedtotal}})</view>
		
	</view>
</template>

<script>
	import store from '@/store/store.js'
	export default {
		name:"my-settle",
		data() {
			return {
				
			};
		},
		methods:{
			ChangeAllState(){
				store.commit('updateState',!this.isfullchecked)
				this.$emit('quancart')
				
			}
		},
		computed:{
			checkedtotal(){
				return store.getters.checkedcount
			},
			uncheckedtotal(){
				return store.getters.totalcart
			},
			isfullchecked(){
				if(this.checkedtotal===this.uncheckedtotal){
					return true
				}
				return false
			},
			goodsPrice(){
				return store.getters.checkedGoodsPrice
			}
		}
	}
</script>

<style lang="scss" scoped>
.mysettle{
	padding-left: 10px;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 13px;
	background-color: #ffffff;
	.left{
		
		display: flex;
		align-items: center;
	}
	.zhong{
		
		display: flex;
		align-items: center;
		.zong-price{
			color: red;
		}
	}
	.right{
		
		line-height: 50px;
		min-width: 100px;
		text-align: center;
		color: white;
		background-color: #c10001;
	}
}
</style>