<template>
	<view>
		<view class="goodsitem">
		<view class="item-left">
			<radio :checked="goods.goods_state" color="red" v-if="showRadio" @click="radioClick"></radio>
			<image :src="goods.goods_small_logo"></image>
		</view>
		<view class="item-right">
			<view class="goods-name">{{goods.goods_name}}</view>
			<view class="goods-info">￥{{goods.goods_price.toFixed(2)}}
			<uni-number-box :min="1" :value="goods.goods_count" v-if="showNum" @change="changeClick"></uni-number-box></view>
			
			
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
			},
			showRadio:{
				type:Boolean,
				default:false
			},
			showNum:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			radioClick(){
				this.$emit('radio-change',{
					goods_id:this.goods.goods_id,
					goods_state:!this.goods.goods_state
				})
			},
			changeClick(val){
				this.$emit('num-change',{
					goods_id:this.goods.goods_id,
					goods_count:val
				})
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
			display: flex;
			justify-content: space-between;
			align-items: center;
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
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}

</style>