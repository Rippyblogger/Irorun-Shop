<template>
	<div class="price-grid">
		<!-- <p>fdgdfhd</p> -->
		<div v-for="item in topItems" :key="item.index" class="price">
			<div class="img-div">
                <img class="image-size" :src="item.image" alt="" />
            </div>
			<h3>{{ item.itemName }}</h3>
			<p>$ {{ item.price }}</p>
			<button @click="increaseCounter(item.id)">Add To Cart</button>
		</div>

        <!-- <div>
            Number of Cart items: {{cartCounter}}
        </div> -->
	</div>
</template>

<script>
import { mapActions, mapState,mapGetters } from 'vuex';

export default {
	name: "TopProd",
	data() {
		return {
            
		};
	},
    computed: {

        ...mapState([
            'topItems',
            'cartItems',
        ]),
        ...mapGetters(["cartCounter"]),
    },
    methods: {
        ...mapActions(['updateCounter']),
        increaseCounter(x){
            let payload = this.cartItems;
			payload.push(x);
			this.updateCounter(payload);
        }
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

.img-div {
	height: 6rem;
}

@media only screen and (max-width: 767px){
    .price-grid{
        margin-top: -5rem;
    }
}

</style>
