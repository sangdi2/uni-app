<template>
	<view>
		<view class="my-cont">
			<view class="top-box">
				<image :src="userin.avatarUrl"></image>
				<view class="top-text">{{userin.nickName}}</view>
			</view>
			
		</view>
		<view class="panel-list">
			<view class="panel1">
				<view class="panel-item">
					<view>8</view>
					<view class="text">收藏的店铺</view>
				</view>
				<view class="panel-item">
					<view>14</view>
					<view class="text">收藏的商品</view>
				</view>
				<view class="panel-item">
					<view>18</view>
					<view class="text">关注的商品</view>
				</view>
				<view class="panel-item">
					<view>84</view>
					<view class="text">足迹</view>
				</view>
			</view>
			<view class="panel2">
				<view class="panel-title">我的订单</view>
				<view class="panel1">
					<view class="panel-item">
						<image src="../../static/fu.png"></image>
						<view class="text">待付款</view>
					</view>
					<view class="panel-item">
						<image src="../../static/shou.png"></image>
						<view class="text">待收货</view>
					</view>
					<view class="panel-item">
						<image src="../../static/tui.png"></image>
						<view class="text">退款/退货</view>
					</view>
					<view class="panel-item">
						<image src="../../static/all.png"></image>
						<view class="text">全部订单</view>
					</view>
				</view>
			</view>
			<view class="panel3">
				<view class="panel3-item">
					<view class="text">收货地址</view>
					<uni-icons type="forward"></uni-icons>
				</view>
				<view class="panel3-item">
					<view class="text">联系客服</view>
					<uni-icons type="forward"></uni-icons>
				</view>
				<view class="panel3-item" @click="gooutlogin">
					<view class="text" >退出登录</view>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import store from '@/store/store.js'
	export default {
		name:"my-userinfo",
		data() {
			return {
				
			};
		},
		computed:{
			userin(){
				return store.state.userinfo
			}
		},
		methods:{
			async gooutlogin(){
				const res=await uni.showModal({
					title:'提示',
					content:'确认退出登录吗？'
				}).catch(err=>err)
				console.log(res)
				if(res&&res.confirm){
					store.commit('updateAddress',{})
					store.commit('updateUserinfo',{})
					store.commit('updateToken','')
				}
			}
			
		}
	}
</script>

<style lang="scss">
.my-cont{
	width: 100%;
	height: 180px;
	background-color: #bf2238;
	display: flex;
	justify-content: center;
	align-items: center;
	.top-box{
		
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image{
			width: 90px;
			height: 90px;
			border: 1px solid white;
			box-shadow: 0 2px 2px black;
			border-radius: 45px;
		}
		.top-text{
			color: white;
			font-size: 13px;
			margin-top: 5px;
		}
	}
	
	
}
.panel-list{
		padding: 0 10px;
		
		position: relative;
		top:-10px;
		left: 0;
		
		.panel1{
			background-color: #ffffff;
			border-radius: 5px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 10px;
			.panel-item{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 13px;
				font-weight: 600;
				.text{
					font-size: 10px;
					margin-top: 5px;
				}
				image{
					width: 30px;
					height: 30px;
				}
			}
		}
		.panel2{
			background-color: #ffffff;
			border-radius: 5px;
			margin: 10px 0;
			.panel-title{
				font-size: 13px;
				padding: 10px;
				border-bottom: 1px solid #efefef;
			}
		}
		.panel3{
			background-color: #ffffff;
			border-radius: 5px;
			margin: 10px 0;
			.panel3-item{
				display:flex;
				justify-content: space-between;
				align-items: center;
				padding: 10px;
				font-size: 13px;
			}
		}
	}
</style>