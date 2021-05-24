<template>
	<div class="hero-div">
		<div class="hero-text">
			<h1 class="faded">NEW</h1>
			<h1 class="faded-below">ARRIVALS</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hero",
    data() {
        return {
            Active: true
        }
    },
};
</script>

<style scoped>
.hero-div {
	background-image: url("../assets/Daco.png");
	margin: 0;
    padding: 0;
	height: 36rem;
	background-repeat: no-repeat;
	background-size: 41rem auto;
	background-position: 40%;
}

.hero-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
}

.faded {
	font-size: 12rem;
    padding: 1rem;
    margin: 0;
    margin-right: 50%;
    align-self: center;
}

.faded-below {
	font-size: 10rem;
    padding: 0.5rem;
    margin: 0;
    margin-left: 30%;
    margin-top: 4rem;
    align-self: center;
}



@media only screen and (max-width : 767px){
    .faded{
        margin: 0;
        margin-top: -1rem;
        font-size: 10rem;
    }

    .faded-below{
        margin: 0;
        margin-top: 7rem;
        padding: 0;
        font-size: 4.7rem;
    }
}

</style>
