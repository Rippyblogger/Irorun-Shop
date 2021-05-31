<template>
	<div class="home">
		<Navbar />
		<Steps/>
		<CartView :cartShow="cartCounter" />
		<Triad/>
		<Footer/>
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Triad from "@/components/Triad.vue";
import Steps from "@/components/Steps.vue";
import Footer from "@/components/Footer.vue";
import CartView from "@/components/CartView.vue"
import {mapState, mapGetters} from 'vuex';

export default {
	name: "Cart",
	components: {
		Navbar,
		Triad,
		Steps,
		Footer,
		CartView
	},
	data() {
		return {
			
		};
	},
	computed: {
		...mapState(["cartCounter"]),
		...mapGetters(["myCart"])
	},
};
</script>

<style scoped>
.home {
	padding: 0;
	margin: 0;
}
</style>
