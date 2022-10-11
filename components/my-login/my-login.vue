<template>
	<view class="unlogin">
		<uni-icons type="person" size="100"></uni-icons>
		<button type="primary" class="btn-login" @click="userlogin">一键登录</button>
		<view class="login-person">登录后尽享更多权益</view>
	</view>
</template>

<script>
	import store from '@/store/store.js'
	import {$http} from '@escook/request-miniprogram'
	export default {
		
		name:"my-login",
		data() {
			return {
				userinfo:{}
			};
		},
		methods:{
			
			 userlogin(){
				uni.login({
				  provider: 'weixin',
				  success: function (loginRes) {
				    console.log(loginRes);
				    // 获取用户信息
				    uni.getUserInfo({
				      provider: 'weixin',
				      success: function (infoRes) {
				        console.log( infoRes);
						const query={
							code:loginRes.code,
							encryptedData:infoRes.encryptedData,
							iv:infoRes.iv,
							rawData:infoRes.rawData,
							signature:infoRes.signature
						}
						const res= $http.post('https://api-ugo-web.itheima.net/api/public/v1/users/wxlogin',query)
						store.commit('updateToken',loginRes.code)
						if(store.state.redirectinfo&&store.state.redirectinfo.opentype==='switchTab'){
							uni.switchTab({
								url:store.state.redirectinfo.from,
								complete:()=> {
									store.commit('updateredirectinfo',null)
								}
							})
							
						}
				      }
				    });
					
				  }
				});
				

			}
			
			  
		}
	}
</script>

<style lang="scss">
.unlogin{
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	justify-content:center;
	align-items: center;
	.btn-login{
		width: 650rpx;
		border-radius: 100px;
		font-size: 13px;
		margin: 10px 0;
		background-color: #bf2238;
	}
	.login-person{
		font-size: 13px;
		color: gray;
	}
}
</style>