<template>
	<div>
		<div class="container">
			<div class="flex-cont">
				<p class="num-cont">01</p>
				<p class="cart-text">Shopping Cart</p>
			</div>
			<div class="flex-cont">
				<p class="num-cont-2">02</p>
				<p class="cart-text">Check out</p>
			</div>
			<div class="flex-cont">
				<p class="num-cont-2">03</p>
				<p class="cart-text">Order complete</p>
			</div>
		</div>

		<hr />
	</div>
</template>

<script>
export default {
	name: "Steps",
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 3rem;
}

.container div{
    
    vertical-align: middle;
}

.num-cont {
	border: 1px #d62828 solid;
	padding: 3rem;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #d62828;
	font-size: 2rem;
	color: white;
	font-weight: 700;
}

.num-cont-2 {
	border: 1px grey solid;
	padding: 3rem;
    width: 50px;
	height: 50px;
	border-radius: 50%;
	font-size: 2rem;
	color: black;
	font-weight: 700;
}

hr {
	color: grey;
	height: 1px;
}

.cart-text{
    font-size: 1.3rem;
    font-weight: 500;
}

@media only screen and (max-width: 767px) {
	.container {
		flex-direction: column;
	}

    .flex-cont{
        display: flex;
        flex-direction: column;
    }

    .num-cont, .num-cont-2{
        align-self: center;
    }

    
}
</style>
