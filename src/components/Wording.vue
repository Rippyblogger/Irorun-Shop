<template>
	<div>
		<div>
			<h3>Special Sale</h3>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
			laboriosam cumque blanditiis quia quis doloremque voluptas pariatur omnis
			reiciendis quod!
		</p>
		</div>
		

		<div>
			<p>Number of items in Cart: {{cartCount}}</p>
		</div>
	</div>
</template>

<script>

export default {
	name: "Wording",
	props: {
		cartCount: Number,
	},
    data() {
        return {
        }
    },
};
</script>

<style scoped>

input{
    width: 100%;
}

p{

    text-justify: auto;
}

h3{
	color: #d62828;
}

</style>
