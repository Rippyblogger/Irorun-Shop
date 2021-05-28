import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		topItems: [
			{
				image: require("../assets/Top/Sneaker1.png"),
				itemName: "Airmax",
				price: 119.99,
			},
			{
				image: require("../assets/Top/Sneaker2.png"),
				itemName: "Airfly `99",
				price: 149.99,
			},
			{
				image: require("../assets/Top/Sneaker3.png"),
				itemName: "Roshe 12",
				price: 99.95,
			},
		],
		cartCounter: 0,
		allItems: [
			{
				image: require("../assets/Male/Male1.png"),
				itemName: "Airmax",
				price: 119.99,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male2.png"),
				itemName: "Airfly `99",
				price: 149.99,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male3.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male4.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male5.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male6.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male7.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male8.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male9.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Male/Male10.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
			},
			{
				image: require("../assets/Female/Female1.png"),
				itemName: "Airmax",
				price: 119.99,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female2.png"),
				itemName: "Airfly `99",
				price: 149.99,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female3.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female4.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female5.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female6.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female7.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female8.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female9.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
			{
				image: require("../assets/Female/Female10.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
			},
		],
	},
	mutations: {
		setCounter(state, value) {
			state.cartCounter = value;
		},
	},
	actions: {
		updateCounter({ commit }, payload) {
			commit("setCounter", payload);
		},
	},
	modules: {},
	getters: {
		maleItems: (state) => {
			return state.allItems.filter(function (item) {
				if (item.gender == "Male") {
					return item;
				}
			});
		},
		femaleItems: (state) => {
			return state.allItems.filter(function (item) {
				if (item.gender == "Female") {
					return item;
				}
			});
		},
	},
});
