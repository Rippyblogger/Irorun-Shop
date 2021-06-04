<template>
	<div class="price-grid">
		<div v-for="item in storeItems" :key="item.index" class="price">
			<div class="img-div">
				<img class="image-size" :src="item.image" alt="" />
			</div>
			<h3>{{ item.itemName }}</h3>
			<p>$ {{ item.price }}</p>
			<button :id="item.id" @click="cartRemove(item.id)">Remove from Cart</button>
		</div>

	</div>
</template>

<script>
export default {
	name: "TopProd",
	props: {
		storeItems: Array,
		cartRemove: Function,
		cartCount: Number,
	},
	data() {
		return {
		};
	},
};
</script>

<style scoped>
.price {
	padding: 1.5rem;
}

.price-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	margin-top: 2rem;
}

.price:hover {
	border-radius: 5px;
	box-shadow: 3px 7px 9px 5px rgba(198, 204, 203, 0.8);
}

.img-div {
	height: 6rem;
	padding-bottom: 5.5rem;
}

.image-size {
	width: 30%;
}

.image-size:hover {
	transform: scale(1.4);
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

@media only screen and (max-width: 767px) {
	.price-grid {
		margin-top: -5rem;
	}
}
</style>
