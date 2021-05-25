<template>
	<div class="price-grid">
		<!-- <p>fdgdfhd</p> -->
		<div v-for="item in items" :key="item.index" class="price">
			<img class="image-size" :src="item.image" alt="" />
			<h3>{{ item.itemName }}</h3>
			<p>$ {{ item.price }}</p>
			<button>Add To Cart</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "TopProd",
	data() {
		return {
			items:[{
			    image:require("../assets/Top/Sneaker1.png"),
			    itemName:"Airmax",
			    price: 119.99
			},
			{
			    image:require("../assets/Top/Sneaker2.png"),
			    itemName:"Airfly `99",
			    price: 119.99
			},
			{
			    image:require("../assets/Top/Sneaker3.png"),
			    itemName:"Roshe 12",
			    price: 119.99
			}]
		};
	},
};
</script>

<style scoped>

.price{
    padding: 1.5rem;
}

.price-grid{
    display: grid;
    padding-top: 7rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.image-size{
    width: 50%;
}

button{
    background-color: #d62828;
    color: white;
    border: none;
    padding: 0.5rem;
    border-radius: 5px;
}

button:hover{
    transform: scale(1.1);
}

@media only screen and (max-width: 767px){
    .price-grid{
        margin-top: -5rem;
    }
}

</style>
