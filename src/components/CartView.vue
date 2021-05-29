<template>
    <div>
        <p v-if="cartShow">{{empty}}</p>
    </div>
</template>

<script>
    export default {
        name:"CartView",
        props: {
            cartShow: {
                type: Number
            },
        },
        data() {
            return {
                empty: "Your Cart is empty"
            }
        },
    }
</script>

<style scoped>

p{
    font-size: 1.3rem;
}

</style>