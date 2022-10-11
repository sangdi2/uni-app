<template>
	<view class="address-box">
		<view class="address-choose" v-if="JSON.stringify(address)==='{}'">
			<button type="primary" size="mini" @click="chooseAddress">请选择收货地址+</button>
		</view>
		<view class="address-info" v-else @click="chooseAddress">
			<view class="row1">
				<view class="username">收货人：{{address.userName}}</view>
				<view class="phone-info">
					<view class="phone">电话：{{address.telNumber}}</view>
					<uni-icons type="forward"></uni-icons>
				</view>
			</view>
			<view class="row2">
				<view class="address-text">收货地址:</view>
				<view class="address">{{addre}}</view>
			</view>
			
		</view>
		<image src="../../static/border.png"></image>
	</view>
</template>

<script>
	import store from '@/store/store.js'
	export default {
		name:"my-address",
		data() {
			return {
				address:{
				
				}
			};
		},
		created() {
			this.address=store.state.address
		},
		onShow() {
			this.address=store.state.address
		},
		methods:{
			async chooseAddress(){
				const res=await uni.chooseAddress().catch(err=>err)
				console.log(res)
				if(res.errMsg==='chooseAddress:ok'){
					// console.log(succ)
					store.commit('updateAddress',res)
					this.address=store.state.address
				}
			}
		},
		computed:{
			addre(){
				if(this.address.provinceName==='') return ''
				return this.address.provinceName+this.address.cityName+this.address.countyName+this.address.detailInfo
			}
		}
	}
</script>

<style lang="scss">
	
image{
	display: block;
	width: 100%;
	height: 5px;
}
.address-choose{
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200rpx;
}
.address-info{
	font-size: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding:0 10px;
	.row1{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 0;
		padding-bottom: 10px;
		border-bottom: 1px solid #efefef;
		.phone-info{
			display: flex;
			align-items: center;
		}
	
	}
	.row2{
		display: flex;
		
		align-items: center;
		margin-bottom: 10px;
		.address-text{
			white-space: nowrap;
		}
	}
	
}
</style>