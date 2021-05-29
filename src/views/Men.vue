<template>
	<div class="home">
		<Navbar />
		<div class="grid-box">
			<ItemList :storeItems="maleItems" :cartAdd="increaseCounter" :cartCount="cartCounter" class="pushdown"/>
			<Wording class="order1" />
		</div>
	</div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import Navbar from "@/components/Navbar.vue";
import ItemList from "@/components/ItemList.vue";
import Wording from "@/components/Wording.vue";

export default {
	name: "Men",
	components: {
		Navbar,
		ItemList,
		Wording,
	},
	props: {
		myRange: Number
	},
	data() {
		return {
			
		};
	},
	computed: {
		...mapState(["cartCounter"]),
		...mapGetters(["maleItems"]),
		
		
	},
	methods: {
		...mapActions(["updateCounter"]),
		increaseCounter() {
			let payload = this.cartCounter;
			payload++;
			this.updateCounter(payload);
		},
	},
};
</script>

<style scoped>
.home {
	padding: 0;
	margin: 0;
}

.grid-box {
	display: grid;
	grid-template-columns: 75% 25%;
}

@media only screen and (max-width: 767px) {
	.grid-box {
		display: flex;
		flex-direction: column;
	}

	.order1 {
		order: -1;
	}

	.pushdown{
		margin-top: 5rem;
	}
}
</style>
