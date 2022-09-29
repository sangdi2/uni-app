<template>
	<view>
		<view class="search">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
							@cancel="cancel" @clear="clear" :radius="100">
			</uni-search-bar>
		</view>
		<view class="searchs" v-if="searchList.length!==0">
			<view class="searchs-item" v-for="(item,i) in searchList" :key="i" @click="gotoDetail()">
				<view class="searchs-content">{{item.goods_name}}</view>
				<uni-icons type="arrowright" size="15"></uni-icons> 
			</view>
		</view>
		<view class="history" v-else>
			<view class="history-title">
				<text>搜索历史</text>
				<uni-icons type="trash" size="15" @click="clean"></uni-icons> 
			</view>
			<view class="history-content">
			    <uni-tag :text="item" v-for="(item,i) in histories" :key="i" @click="gotoList(item)"></uni-tag>
			</view>
		</view>
	</view>
</template>

<script>
	import {$http} from '@escook/request-miniprogram'
	export default {
		data() {
			return {
				timer:null,
				kw:"",
				searchList:[],
				historyList:["a","b","c"]
			};
		},
		computed:{
			histories(){
				return [...this.historyList].reverse()
			}
		},
		onLoad(){
			this.historyList=uni.getStorageSync('kw')||[]
		},
		methods:{
			input(e){
				clearTimeout(this.timer)
				this.timer=setTimeout(()=>{
					console.log(e)
					this.kw=e
					this.getSearchList()
				},500)
			},
			async getSearchList(){
				if(this.kw===""){
					this.searchList=[]
					return
				}
				const {data:res} =await $http.get('https://api-ugo-web.itheima.net/api/public/v1/goods/qsearch',{query:this.kw})
				if(res.meta.status!==200) return uni.$showMeg()
				console.log(res.message)
				this.searchList=res.message
				this.SaveHistoryList()
			},
			gotoDetail(item){
				uni.navigateTo({
					url:'/subpkg/goods_detail/goods_detail'
				})
			},
			gotoList(item){
				uni.navigateTo({
					url:'/subpkg/goods_list/goods_list?query='+item
				})
			},
			SaveHistoryList(){
				const set =new Set(this.historyList)
				set.delete(this.kw)
				set.add(this.kw)
				this.historyList=Array.from(set)
				uni.setStorageSync('kw',this.historyList)
			},
				
			clean(){
				this.historyList=[]
				uni.setStorageSync('kw','[]')
			}
		}
	}
</script>

<style lang="scss">
.search{
	background-color: #bf2238;
}
.searchs{
	padding: 0 15px;
	.searchs-item{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 13px;
		padding: 15px 0;
		border-bottom: 1px solid #efefef;
		.searchs-content{
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			
		}
	}

}
.history{
		padding: 0 5px;
		.history-title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 40px;
			border-bottom: 1px solid #efefef;
			margin-bottom: 5px;
			text{
				font-size: 12px;
			}
		}
		.history-content{
			display: flex;
			flex-wrap: wrap;
			.uni-tag{
				background-color: #efefef;
				margin: 10px 2px;
				color: black;
				border: 0px;
			}
		}
	}
</style>
