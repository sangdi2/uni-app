<template>
	<view>
		<view class="goodsitem">
		<view class="item-left">
			<image :src="goods.goods_small_logo"></image>
		</view>
		<view class="item-right">
			<view class="goods-name">{{goods.goods_name}}</view>
			<view class="goods-info">￥{{goods.goods_price.toFixed(2)}}</view>
		</view> 
		</view>
	</view>
</template>

<script>
	
	export default {
		name:"my-goods",
		data() {
			return {
				
			};
		},
		filters:{
			tofixe(num){
				return Number(num).toFixed(2)
			}
		},
		props:{
			goods:{
				type:Object
			}
		}
		
	}
</script>

<style lang="scss">

	.goodsitem{
		display: flex;
		border-bottom: 1px solid #f0f0f0;
		
		padding: 10px;
		.item-left{
			margin-right: 10px;
			image{
				width: 100px;
				height: 100px;
			}
		}
		.item-right{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// align-items: center;
			.goods-name{
				font-size: 12px;
			}
			.goods-info{
				font-size: 15px;
				color: red;
			}
		}
	}

</style>