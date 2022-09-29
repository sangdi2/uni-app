<template>
	<view>
		<view class="goodslist">
			<view  v-for="(item) in goodslist" :key="item.goods_id" @click="gotoDetail(item)">
				
					<my-goods :goods="item"></my-goods>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	import {$http} from '@escook/request-miniprogram'
	export default {
		data() {
			return {
				queryobj:{
					query:'',
					cid:0,
					pagenum:1,
					pagesize:20
				},
				goodslist:[],
				total:0,
				isloading:false
			};
		},
		onLoad(options) {
			console.log(options)
			this.queryobj.query=options.query||''
			this.queryobj.cid=options.cid||''
			this.getgoodslist()
		},
		methods:{
			async getgoodslist(){
				this.isloading=true
				const {data:res}=await $http.get('https://api-ugo-web.itheima.net/api/public/v1/goods/search',this.queryobj)
				this.isloading=false
				if(res.meta.status!==200){
					return uni.$showMeg()
				}
				this.total=res.message.total
				this.goodslist=[...this.goodslist,...res.message.goods]
				console.log(res)
			},
			gotoDetail(item){
				uni.navigateTo({
					url:'/subpkg/goods_detail/goods_detail?goods_id='+item.goods_id
				})
			},
			onReachBottom(){
				console.log('fvvvvvvvvv')
				if(this.queryobj.pagenum*this.queryobj.pagesize>=this.total) return uni.$showMeg('数据加载完毕')
				if(this.isloading){
					return 
				}
				this.queryobj.pagenum++
				this.getgoodslist()
			}
			
			
		}
	}
</script>

<style lang="scss">
.goodslist{
	
			height: initial;
			overflow-y: initial;
			min-height: 100vh;
	

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
}
</style>
