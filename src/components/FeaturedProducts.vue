<template>
	<div>
		<div class="word-cont">
			<h2><span>Featured Products</span></h2>
		</div>

        <TopProd/>
	</div>
</template>

<script>
import TopProd from "@/components/TopProd.vue"

export default {
	name: "FeaturedProducts",
    components:{
        TopProd,
    },
	data() {
		return {};
	},
};
</script>

<style scoped>
.word-cont {
	padding: 1rem;
}

h2{
    margin: 10px auto;
    text-align: center;
    font-weight: 300;
    position: relative;
}

h2:before{
    content: "";
    display: block;
    width: 36%;
    height: 1px;
    position: absolute;
    background: #d62828;
    left: 0;
    top:50%;
    z-index: -2;
}

h2:after{
    content: "";
    display: block;
    width: 36%;
    height: 1px;
    position: absolute;
    background: #d62828;
    right: 0;
    top:50%;
    z-index: -2;
}

span{
    background: #fff;
}

@media only screen and (max-width:767px){
    .word-cont {
	margin-top: 8rem;
}
}

</style>
