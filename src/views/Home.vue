<template>
  <div class="home">
    <Navbar/>
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero
  },
  data() {
    return {
      
    }
  },
};
</script>

<style scoped>

.home{
  padding: 0;
  margin: 0;
}

</style>
