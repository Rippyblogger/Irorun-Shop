<template>
	<div class="hello">
		<div class="header">
			<p>Irorun Shop</p>
			<img
        @click="navSwitch"
				v-if="displayed"
				class="burger"
				src="../assets/icons8-menu-90.png"
				alt=""
			/>
		</div>

		<div class="navi">
			<hr />
			<ul class="flex-cont" v-if="navShow">
				<li><a href="">HOME</a></li>
				<li><a href="">ALL</a></li>
				<li><a href="">WOMEN</a></li>
				<li><a href="">MEN</a></li>
				<li><a href="">CART</a></li>
			</ul>
			<hr />
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	props: {
		msg: String,
	},
	data() {
		return {
			displayed: false,
			Width: window.innerWidth,
      navShow: true,
		};
	},
	created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.Width = window.innerWidth;
            if(this.Width <= 767){
              this.displayed = !this.displayed
              this.navShow = !this.navShow
            }else if(this.Width > 767){
              this.displayed = false
            }
        },

        navSwitch(){
          this.navShow = !this.navShow
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{
  box-sizing: border-box;
}

.header {
	font-weight: 300;
	font-size: 2rem;
	margin: 30px;
	color: #d40406;
}

li {
	margin: 0 10px;
	list-style-type: none;
	padding: 0 2rem;
	border-left: 1px solid black;
	border-right: 1px solid black;
}

li a {
	text-decoration: none;
	color: black;
}

li a:hover {
	color: #d62828;
}

.flex-cont {
	display: flex;
	flex-direction: row;
	justify-content: center;
	list-style-type: none;
	padding: 0;
	font-weight: 300;
	font-size: 0.9rem;
}

hr {
	color: black;
	width: 80%;
	display: block;
}

@media only screen and (max-width: 767px) {
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
    align-items: center;
	}

	.flex-cont {
		flex-direction: column;
	}

	.burger {
    height: 2rem;
	}

  .burger:hover{
    border: 1px solid #d62828;
    padding: 2px;
    border-radius: 5px;
  }

	hr {
		display: none;
	}

	li {
		border-left: none;
		border-right: none;
		padding: 0.5rem;
	}
}
</style>
