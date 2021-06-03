<template>
	<div>
		<div v-if="(myCart == 0)">
			<p>{{ empty }}</p>
		</div>

		<div v-else>
			<item-list
				:storeItems="myCart"
				:cartAdd="increaseCounter"
				:cartCount="cartCounter"
			/>
		</div>

		<div class="checkout">
			<button>Proceed to Checkout</button>
		</div>
	</div>
</template>

<script>
import ItemList from "@/components/ItemList.vue";
import { mapActions, mapState, mapGetters } from "vuex";
// import {mapState} from 'vuex';
export default {
	components: { ItemList },
	name: "CartView",
	data() {
		return {
			empty: "Your Cart is empty",
		};
	},
	computed: {
		...mapState(["cartCounter", "cartItems"]),
		...mapGetters(["myCart"]),
	},
	methods: {
		...mapActions(["updateCounter"]),
		increaseCounter(x) {
			let payload = this.cartItems;
			payload.push(x);
			console.log(payload);
			this.updateCounter(payload);
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

.checkout{
	margin-top: 1rem;
}
</style>
