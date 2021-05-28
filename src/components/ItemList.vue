<template>
	<div class="price-grid">
		<div v-for="item in storeItems" :key="item.index" class="price">
			<div class="img-div">
                <img class="image-size" :src="item.image" alt="" />
            </div>
			<h3>{{ item.itemName }}</h3>
			<p>$ {{ item.price }}</p>
			<button @click="cartAdd">Add To Cart</button>
		</div>

        <div>
            Number of Cart items: {{cartCount}}
        </div>
	</div>
</template>

<script>

export default {
	name: "TopProd",
    props: {
        storeItems: Array,
        cartAdd: Function,
        cartCount: Number
    },
	data() {
		return {
            
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

/* .img-div{
    height: 100px;
} */

.image-size{
    width: 50%;
    height: auto;
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
