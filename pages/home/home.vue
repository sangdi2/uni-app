<template>
	<view>
		<view class="search-box">
			<search @myclick="goToSearch"></search>
		</view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			
			<swiper-item v-for="(item,i) in swiperList" :key="i">
				<navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id">
					<image :src="item.image_src"></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="nav_list">
			<view class="nav_item" v-for="(item,i) in navList" :key="i" @click="tiaoZhuanCate(item)">
				<image :src="item.image_src" class="nav_img"></image>
			</view>
		</view>
		<view class="floor-list">
			<view class="floor-item" v-for="(item,i) in floorList" :key="i">
				<image :src="item.floor_title.image_src" class="floor-item-title"></image>
				<view class="floor-content">
				<view class="right-floor">
					<navigator class="right-item" :url="item.product_list[0].url">
						<image :src="item.product_list[0].image_src" :style="{width:item.product_list[0].image_width+'rpx'}" mode="widthFix"></image>
					</navigator>
				</view>
				<view class="left-floor">
					<navigator class="left-item" v-for="(item2,i2) in item.product_list" :key="i2" :url="item2.url">
						<image :src="item2.image_src" :style="{width:item2.image_width+'rpx'}" mode="widthFix" v-if="i2!==0"></image>
					</navigator>
				</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {$http} from '@escook/request-miniprogram'
	export default {
		data() {
			return {
				swiperList:[],
				navList:[],
				floorList:[]
			};
		},
		onLoad() {
			this.getSwiperList()
			this.getNavList()
			this.getFloorList()
		},
		methods:{
			async getSwiperList(){
				const {data:res} = await $http.get("https://api-ugo-web.itheima.net/api/public/v1/home/swiperdata")
				console.log(res)
				if(res.meta.status!=200){
					return uni.$showMeg()
				}
				this.swiperList=res.message;
				
			},
			async getNavList(){
				const {data:res} = await $http.get("https://api-ugo-web.itheima.net/api/public/v1/home/catitems")
				console.log(res)
				if(res.meta.status!=200){
					return uni.$showMeg()
				}
				this.navList=res.message;
			},
			tiaoZhuanCate(item){
				if(item.name=="分类")
				{
					uni.switchTab({
						url:"/pages/cate/cate"
					})
				}
			},
			async getFloorList(){
				const {data:res} = await $http.get("https://api-ugo-web.itheima.net/api/public/v1/home/floordata")
				console.log(res)
				if(res.meta.status!=200){
					return uni.$showMeg()
				}
				res.message.forEach(floor=>{
					floor.product_list.forEach(floor2=>{
						floor2.url="/subpkg/goods_list/goods_list?"+floor2.navigator_url.split("?")[1]
					})
				})
				this.floorList=res.message;
			},
			goToSearch(){
				uni.navigateTo({
					url:"/subpkg/search-detail/search-detail"
				})
			}
		}
	}
</script>

<style lang="scss">
 swiper {
	 height: 330rpx;
	 .swiper-item,image{
		 width: 100%;
		 height: 100%;
	 }
 }
 .nav_list{
	 display: flex;
	 justify-content: space-around;
	 margin: 15px 0;
	 .nav_img{
		 width: 144rpx;
		 height: 144rpx;
	 }
 }
 .floor-item-title{
	 width: 100%;
	 height: 66rpx;
 }
 .left-floor{
	 display: flex;
	 flex-wrap: wrap;
	 justify-content: space-around;
 }
 .floor-content{
	 display: flex;
	 
 }
 .right-item{
	 padding-left: 10rpx;
 }
 .search-box{
	 position: sticky;
	 top: 0;
	 z-index: 999;
 }
</style>
