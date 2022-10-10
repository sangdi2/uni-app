<template>
	<view>
		<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
						:duration="duration">
						<swiper-item v-for="(item,i) in detail_info.pics" :key="i">
							<image :src="item.pics_big" @click="preview(i)"></image>
						</swiper-item>
						
		</swiper>
		<view class="detail-info">
			<view class="price">￥{{detail_info.goods_price}}</view>
			<view class="info-box">
				<view class="name">{{detail_info.goods_name}}</view>
				<view class="scbox">
					<uni-icons type="star" size="15" color="gray"></uni-icons>
					<view>收藏</view>
				</view>
			</view>
			<view class="yf">快递:免运费--</view>
		</view>
		<view class="goodsnav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import {$http} from '@escook/request-miniprogram'
	import store from '@/store/store.js'
	// import { mapState } from 'vuex'
	
	export default {
		data() {
			return {
				detail_info:{},
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				cart:[],
				c:0,
				b:0,
				d:0,
				options: [ {
				            icon: 'shop',
				            text: '店铺',
				           
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info:0
				        }],
				buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			};
		},
		onLoad(options){
			const goods_id=options.goods_id
			this.getgoodsdetails(goods_id)
			this.cart=store.state.cart
			console.log("ccccc")
			console.log(this.cart)
		    this.cart.forEach(x=>this.d+=x.goods_count)
			this.options[1].info=this.d
			this.d=0
		},
		
		computed:{
			num(){
				return store.state.count
			}
			
			// getinfo(){
			// 	return store.getters.total
			// }
		},
		// watch:{
		// 	total(newVal){
		// 		this.options[1].info=newVal
		// 	}
		// },
		methods:{
			async getgoodsdetails(goods_id){
				const {data:res} =await $http.get('https://api-ugo-web.itheima.net/api/public/v1/goods/detail',{goods_id})
				console.log(res)
				if(res.meta.status!==200){
					return uni.$showMeg()
				}
				this.detail_info=res.message
			},
			buttonClick(e){
				if(e.content.text=="加入购物车"){
					const goods={
						goods_id:this.detail_info.goods_id,
						goods_name:this.detail_info.goods_name,
						goods_price:this.detail_info.goods_price,
						goods_count:1,
						goods_small_logo:this.detail_info.goods_small_logo,
						goods_state:true
					}
					store.commit('changecart',goods)
					// this.options[1].info=
					this.cart=JSON.parse(uni.getStorageSync('cart'))||'[]'
					this.cart.forEach(x=>this.b+=x.goods_count)
					this.c=this.b
					this.b=0
					this.options[1].info=this.c
					
					
				}
			},
			preview(i){
				uni.previewImage({
					current:i,
					urls:this.detail_info.pics.map(x=>x.pics_big)
				})
			},
			onClick(e){
				console.log(e)
				if(e.content.text=='购物车'){
					uni.switchTab({
						url:'/pages/cart/cart'
					})
				}
			},
			
		}
	}
</script>

<style lang="scss">
.swiper{
	height: 750rpx;
	swiper-item{
		image{
			width: 100%;
			height: 100%
		}
	}
}
.detail-info{
	padding: 10px;
	.price{
		font-size: 15px;
		color: red;
		margin-bottom: 10px;
	}
	.info-box{
		display: flex;
		justify-content: space-between;
		.name{
			font-size: 13px;
			margin-right: 10px;
		}
		.scbox{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: gray;
			border-left: 1px solid #efefef;
			padding: 0 5px;
			view{
				font-size: 10px;
				width: 20px;
			}
		}
	}
	.yf{
		font-size: 12px;
		color: gray;
		margin-top: 10px;
	}
}
.goodsnav{
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	uni-goods-nav{
		width: 100%;
		height: 100%;
	}
}
</style>
