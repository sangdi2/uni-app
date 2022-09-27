<template>
	<view>
		<search @myclick="goToSearch"></search>
		<view class="scroll">
			<scroll-view class="left-scroll" scroll-y="true" :style="{height:windowHeight+'px'}">
				<view class="cate1" v-for="(item,i) in cate1List" :key="i" @click="cateChange(i)">
				<view :class="['left-scroll-item',active==i?'active':'']">{{item.cat_name}}</view>
				</view>
			</scroll-view>
			<scroll-view class="right-scroll" scroll-y="true" :style="{height:windowHeight+'px'}" :scroll-top="scrollTop">
				<view class="right-scroll-title" v-for="(item1,i1) in cate2List" :key="i2">
					<view class="right-scroll-title-item">/{{item1.cat_name}}/</view>
					<view class="right-scroll-content">
						<view class="right-scroll-content-item" v-for="(item2,i2) in item1.children" :key="i2" @click="gotoGoodsList(item2)">
							<image :src="item2.cat_icon"></image>
							<text>{{item2.cat_name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {$http} from '@escook/request-miniprogram'
	export default {
		data() {
			return {
				windowHeight:0,
				cate1List:[],
				active:0,
				cate2List:[],
				scrollTop:0
			};
		},
		onLoad() {
			const wh =uni.getSystemInfoSync()
			console.log(wh)
			this.windowHeight=wh.windowHeight
			this.getcateList()
		},
		methods:{
			async getcateList(){
				const {data:res} = await $http.get("https://api-ugo-web.itheima.net/api/public/v1/categories")
				console.log(res)
				if(res.meta.status!=200){
					return uni.$showMeg()
				}
				this.cate1List=res.message;
				this.cate2List=res.message[0].children
			},
			cateChange(i){
				this.active=i
				this.cate2List=this.cate1List[i].children
				this.scrollTop=this.scrollTop===0?1:0
			},
			gotoGoodsList(item2){
				uni.navigateTo({
					url:'/subpkg/goods_list/goods_list?cid='+item2.cat_id
				})
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
.scroll{
	display: flex;
	.left-scroll{
		width: 200rpx;
		.left-scroll-item{
			height: 100rpx;
			background-color: #fff;
			text-align: center;
			font-size: 25rpx;
			line-height: 100rpx;
		}
		.active {
			background-color: #f3f3f3;
			position: relative;
		}
		.active::before{
			content: '';
			width: 6rpx;
			height: 60rpx;
			background-color: #c00000;
			position: absolute;
			top:50%;
			left: 0;
			transform: translateY(-50%);
		}
	}
	.right-scroll-title-item{
		text-align: center;
		font-size: 25rpx;
		font-weight: 800;
		margin: 20px 0;
	}
	.right-scroll-content{
		display: flex;
		flex-wrap: wrap;
		.right-scroll-content-item{
			width: 33.33%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image{
				width: 60px;
				height: 60px;
			}
			text{
				font-size: 28rpx;
				
			}
		}
	}
}
</style>
