<template>
	<div>
		<div v-if="myCart == 0">
			<p>{{ empty }}</p>
		</div>

		<div v-else>
			<CartList
				:storeItems="myCart"
				:cartRemove="increaseCounter"
				:cartCount="cartCounter"
			/>

			<div class="checkout">
				<h4> Total: {{cartTotal}}</h4>
				<button>Proceed to Checkout</button>
			</div>
		</div>
	</div>
</template>

<script>
import CartList from "@/components/CartList.vue";
import { mapActions, mapState, mapGetters } from "vuex";
// import {mapState} from 'vuex';
export default {
	components: { CartList },
	name: "CartView",
	data() {
		return {
			empty: "Your Cart is empty",
		};
	},
	computed: {
		...mapState(["cartCounter", "cartItems"]),
		...mapGetters(["myCart", "cartTotal"]),
	},
	methods: {
		...mapActions(["updateCounter"]),
		increaseCounter(x) {
			let firstpayload = this.cartItems;
			let myIndex = firstpayload.indexOf(x)
			let payload = function(){if(firstpayload.length == 1){
				return firstpayload.pop()
			}else{
				return firstpayload.splice(myIndex, 1)
			}}
			
			this.updateCounter(payload());
		},
	},
};
</script>

<style scoped>
p {
	font-size: 1.3rem;
}

button {
	background-color: #d62828;
	color: white;
	border: none;
	padding: 0.5rem;
	border-radius: 5px;
}

button:hover {
	transform: scale(1.1);
}

.checkout {
	margin-top: 5rem;
}
</style>
