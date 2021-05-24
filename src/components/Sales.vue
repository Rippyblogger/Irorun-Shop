<template>
    <div class="background">
        <div class="text">
            <h1>NEW</h1>
            <p>Men Sneakers</p>
            <p>Collection</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sales",
        data(){
            return{

            }
        },
    }
</script>

<style scoped>

.background{
    background-image: url("../assets/Daco2.png");
	margin: 0;
    padding: 0;
	height: 36rem;
	background-repeat: no-repeat;
	background-size: 41rem auto;
	background-position: 80%;
}

.text{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}

</style>