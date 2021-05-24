<template>
	<div class="grid-cont">
		<div v-for="item in triadObject" :key="item.index">
			<img class="imgsize" v-bind:src="item.image" alt="customer" />
			<p class="bolder">{{ item.heading }}</p>
			<p>{{ item.subheading }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Triad",
	data() {
		return {
			triadObject: [
				{
					index: 0,
					image: require("../assets/support.svg"),
					heading: "24/7 CUSTOMER SERVICE",
					subheading: "Call Us Anytime",
				},
				{
					index: 1,
					image: require("../assets/delivery.svg"),
					heading: "EASY ONLINE RETURNS",
					subheading: "Send Within 30 Days",
				},
				{
					index: 2,
					image: require("../assets/online-shopping.svg"),
					heading: "FREE SHIPPING GLOBALLY",
					subheading: "Delivery In 4 Days",
				},
			],
            
		};
	},
};
</script>

<style scoped>
div {
	box-sizing: border-box;
}

.grid-cont {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding-top: 4rem;
    /* column-gap: 4rem; */
}

.grid-cont > div{
    border-radius: 5px;
    margin: 2rem;
    padding: 2rem;
    /* border: 1px solid grey; */
    box-shadow: 3px 7px 9px 5px rgba(198, 204, 203, 0.8);
}

.bolder{
    font-weight: 500;
}

.imgsize{
    width: 35%;
}

</style>
