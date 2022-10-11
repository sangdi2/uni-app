<template>
	<view class="mypage">
		<my-login v-if="!checked"></my-login>
		<my-userinfo v-else></my-userinfo>
	</view>
</template>

<script>
	import store from '@/store/store.js'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			checked(){
				return store.state.token
			}
		}
	}
</script>

<style lang="scss">
page,.mypage{
	background-color: #f4f4f4;
}
</style>
