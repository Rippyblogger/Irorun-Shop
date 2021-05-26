<template>
	<div class="background">
		<p class="heading">
			"The surprising styles of Irorun Shop are advanced for all outings and
			seasons."
		</p>

		<p>Thomas Gunnarsson</p>
	</div>
</template>

<script>
export default {
	name: "LowHeader",
};
</script>

<style scoped>
.background {
	background-image: url("../assets/low-background.jpg");
    flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 400px;
	background-repeat: no-repeat;
	background-size: cover;
	text-align: center;
}


p {
	color: white;
}

.heading {
	font-weight: 500;
	font-size: 1.3rem;
    font-style: italic;
}
</style>
