<template>
	<div id="app">
		<div id="nav"></div>
		<router-view />
	</div>
</template>

<style>
#app {
	@import url("https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&display=swap");
	font-family: "Roboto";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: black;
	box-sizing: border-box;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
