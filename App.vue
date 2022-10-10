<script>
	import store from '@/store/store.js'
	export default {
		data(){
			return {
				cart:[],
				d:0
			}
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			
			this.setbadage()
		},
		onHide: function() {
			console.log('App Hide')
			
		},
		computed:{
			tabbarnum(){
				return store.getters.totalcart
			}
		},
		watch:{
			tabbarnum(){
				this.setbadage()
			}
		},
		
		methods:{
			setbadage(){
				
				uni.setTabBarBadge({
					index:2,
					text:this.tabbarnum+''
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
