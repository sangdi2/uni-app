export default{
	namespaced:true,
	state:()=>({
		cart:[]
	}),
	mutations:{
		changecart(state,goods){
			const sts=state.cart.find((x)=>x.goods_id===goods.goods_id)
			if(sts){
				sts.goods_count++
			}else{
				state.cart.push(goods)
			}
			console.log(state.cart)
		}
	},
	getters:{}
}