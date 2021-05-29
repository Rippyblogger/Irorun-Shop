<template>
	<div>
		<h3>Special Sale</h3>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
			laboriosam cumque blanditiis quia quis doloremque voluptas pariatur omnis
			reiciendis quod!
		</p>
		<p>Filter by price:</p>
		<p>Max price: $</p>

		<div>
			<input type="range" name="filter" id="filter" min="0" max="150" v-model="myRange" />
		</div>
	</div>
</template>

<script>
export default {
	name: "Wording",
    data() {
        return {
            myRange: 0,
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

</style>
