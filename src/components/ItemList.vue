<template>
	<div class="price-grid">
		<div v-for="item in storeItems" :key="item.index" class="price">
			<div class="img-div">
				<img class="image-size" :src="item.image" alt="" />
			</div>
			<h3>{{ item.itemName }}</h3>
			<p>$ {{ item.price }}</p>
			<button :id="item.id" @click="cartAdd(item.id)">Add To Cart</button>
		</div>

		<div>Number of Cart items: {{ cartCount }}</div>
	</div>
</template>

<script>
export default {
	name: "TopProd",
	props: {
		storeItems: Array,
		cartAdd: Function,
		cartCount: Number,
	},
	data() {
		return {
			rangeVal: 0
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
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.price:hover {
	border-radius: 5px;
	box-shadow: 3px 7px 9px 5px rgba(198, 204, 203, 0.8);
}

.img-div {
	height: 6rem;
}

.image-size {
	width: 50%;
}

.image-size:hover {
	transform: scale(1.6);
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
