<template>
	<view class="cont" v-if="cart.length!==0">
		<my-address></my-address>
		<view class="title">
			<uni-icons type="shop" size="15" color="gray"></uni-icons>
			<view class="title-text">购物车</view>
		</view>
		<view class="goods">
			<uni-swipe-action>
			<view class="goods-item" v-for="(item,i) in cart" :key="i">
				<uni-swipe-action-item :right-options="options" @click="deleteHandler(item)">
				<my-goods :goods="item" :showRadio="true" :showNum="true" @radio-change="radioChangeHandler" @num-change="numChangeHandler"></my-goods>
				</uni-swipe-action-item>
			</view>
			</uni-swipe-action>
		</view>
		<view class="settle">
			<my-settle @quancart="cartquan"></my-settle>
		</view>
		
	</view>
	<view class="empty-cart" v-else>
		<image src="../../static/empty.png"></image>
		<view class="empty">空空如也~</view>
	</view>
</template>

<script>
	import store from '@/store/store.js'
	
	export default {
		data() {
			return {
				cart:[],
				options:[{
					text:'删除',
					style:{
						backgroundColor:'#c00000'
					}
				}]
				
			};
		},
		created() {
			
				 this.cart=JSON.parse(uni.getStorageSync('cart'))||'[]'
			 
			
		},
		onShow() {
			 this.cart=JSON.parse(uni.getStorageSync('cart'))||'[]'
		},
		
		methods:{
			radioChangeHandler(e){
				store.commit('changeRadio',e)
				this.cart=JSON.parse(uni.getStorageSync('cart'))||'[]'
				console.log(e)
			},
			cartquan(){
				this.cart=JSON.parse(uni.getStorageSync('cart'))||'[]'
			},
				
			numChangeHandler(e){
				store.commit('updateNumber',e)
				console.log(e)
			},
			deleteHandler(item){
				store.commit('deleteById',item)
				this.cart=JSON.parse(uni.getStorageSync('cart'))||'[]'
				
			}
		}
	}
</script>

<style lang="scss">
   .title{
	   display: flex;
	   align-items: center;
	   padding: 5px;
	   border-bottom: 1px solid #efefef;
	   .title-text{
		   margin-left: 10px;
		   font-size: 13px;
	   }
   }
   .settle{
	   width: 100%;
	   position: fixed;
	   bottom: 0;
	   left: 0;
   }
   .cont{
	   padding-bottom: 50px;
   }
   .empty-cart{
	   display: flex;
	   justify-content: center;
	   flex-direction: column;
	   align-items: center;
	   margin-top: 200px;
	   image{
		   width: 50px;
		   height: 50px;
	   }
	   .empty{
		   color: gray;
		   font-size: 12px;
		   margin-top: 10px;
	   }
   }
</style>
