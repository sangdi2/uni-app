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
		<view class="right" @click="jiesuan">结算({{checkedtotal}})</view>
		
	</view>
</template>

<script>
	import store from '@/store/store.js'
	export default {
		name:"my-settle",
		data() {
			return {
				second:3,
				timer:null
			};
		},
		methods:{
			ChangeAllState(){
				store.commit('updateState',!this.isfullchecked)
				this.$emit('quancart')
				
			},
			showTips(n){
				uni.showToast({
										title: '请先登录,在'+n+'秒之后将会跳转到登录页面',
										icon: 'none',
										duration: 1500
							  })  
			},
			
			jiesuan(){
				if(!store.getters.checkedcount) 
					return uni.showToast({
											title: '请先选择要结算的商品',
											icon: 'none',
											duration: 2000
										})  
				if(!store.getters.addre) 
					return uni.showToast({
											title: '请选择地址',
											icon: 'none',
											duration: 2000
										})  
				if(!store.state.token) 
					return this.delay() 
			},
			delay(){
				this.second=3
				this.showTips(this.second)
				this.timer=setInterval(()=>{
					this.second--
					if(this.second<=0){
						clearInterval(this.timer)
						uni.switchTab({
							url:'/pages/my/my'
						})
						store.commit('updateredirectinfo',{
							opentype:'switchTab',
							from:'/pages/cart/cart'
						})
						return
					}
					this.showTips(this.second)
				},1000)
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