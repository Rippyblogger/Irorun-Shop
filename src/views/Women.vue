<template>
	<div class="home">
		<Navbar />
		<Hero />
		<Triad />
	</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Triad from "@/components/Triad.vue";

export default {
	name: "Women",
	components: {
		Navbar,
		Hero,
		Triad,
	},
	data() {
		return {};
	},
};
</script>

<style scoped>
.home {
	padding: 0;
	margin: 0;
}
</style>
