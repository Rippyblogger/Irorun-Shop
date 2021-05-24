<template>
  <div class="home">
    <Navbar/>
    <Hero/>
    <Triad/>
    <Sales/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Triad from "@/components/Triad.vue";
import Sales from "@/components/Sales.vue";


export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Triad,
    Sales
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
