<template>
    <div class="background">
        <div class="text">
            <p class="bigger">50%</p>
            <p class="smaller1">Storewide Sale</p>
            <p class="smaller2">Summer</p>
            <p class="smallest">ALL ACCESSORIES</p>
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
    position: relative;
}

.bigger{
    font-weight: 500;
    font-size: 17rem;
    opacity: 0.4;
    color: grey;
    left: 10%;
    position: absolute;
    top: -6.5rem;
}

.smaller1{
    font-weight: 300;
    font-size: 4rem;
    position: absolute;
    left: 11.5%;
    top: 12rem;
    color: #188B46;
    /* word-spacing: 0.5rem; */
}

.smaller2{
    font-weight: 300;
    font-size: 4rem;
    position: absolute;
    left: 29rem;
    top: 17rem;
}

.smallest{
    font-weight: 100;
    font-size: 1.5rem;
    position: absolute;
    left: 20rem;
    top: 26rem;
}

@media only screen and (max-width: 767px){
    .bigger{
        left: -1rem;
        top: 14rem;
        font-size: 13rem;
    }

    .smaller1{
        top: 28rem;
        font-size: 2.5rem;
        /* right: 7rem; */
    }

    .smaller2{
        left: 6.5rem;
        top: 29rem;
        font-size: 4rem;
    }

    .smallest{
    font-size: 1.5rem;
    left: 0;
    left: 5rem;
    top: 40rem;
}
}

</style>