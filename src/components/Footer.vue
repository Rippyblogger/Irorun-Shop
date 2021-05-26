<template>
	<div class="grid-column">
		<ul class="show-line">
            <li class="container" v-for="item in companyItems" :key="item.index"><a href="">{{item.name}}</a></li>
        </ul>

        <ul>
            <li class="column" v-for="item in socialMedia" :key="item.index"><a href="">{{item.name}}</a></li>
        </ul>

        <!-- <input type="text"> -->
	</div>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			companyItems: [
				{ name: "About" },
				{ name: "Company" },
				{ name: "Locations" },
				{ name: "Contact" },
				{ name: "Hours" },
			],

			socialMedia: [
				{ name: "Twitter" },
				{ name: "Facebook" },
				{ name: "Instagram" },
				{ name: "LinkedIn" },
			],
		};
	},
};
</script>

<style scoped>
.grid-column {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

li{
    list-style-type: none;
    padding: 0.5rem;
    text-align: center;
}

input{
    height: 1rem;
    margin: 3rem;
    text-align: start;
}

a{
    text-decoration: none;
    color: black;
}

a:hover{
    background-color: #d62828;
    padding: 0.4rem;
    border-radius: 5px;
}

.show-line{
    border-right: 1px solid grey;
    
}


@media only screen and (max-width:767px){
    li{
        text-align: center;
    }


    .show-line{
    border-bottom: 1px solid grey;
    border-right: none;
    
}

}



</style>
