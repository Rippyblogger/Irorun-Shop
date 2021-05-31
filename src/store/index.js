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
				price: 105.99,
				gender: "Male",
				id: "20",
			},
			{
				image: require("../assets/Male/Male2.png"),
				itemName: "Airfly `99",
				price: 144.99,
				gender: "Male",
				id: "1",
			},
			{
				image: require("../assets/Male/Male3.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Male",
				id: "2",
			},
			{
				image: require("../assets/Male/Male4.png"),
				itemName: "Roshe 12",
				price: 94.95,
				gender: "Male",
				id: "3",
			},
			{
				image: require("../assets/Male/Male5.png"),
				itemName: "Roshe 12",
				price: 111.95,
				gender: "Male",
				id: "4",
			},
			{
				image: require("../assets/Male/Male6.png"),
				itemName: "Roshe 12",
				price: 124.95,
				gender: "Male",
				id: "5",
			},
			{
				image: require("../assets/Male/Male7.png"),
				itemName: "Roshe 12",
				price: 104.95,
				gender: "Male",
				id: "6",
			},
			{
				image: require("../assets/Male/Male8.png"),
				itemName: "Roshe 12",
				price: 128.95,
				gender: "Male",
				id: "7",
			},
			{
				image: require("../assets/Male/Male9.png"),
				itemName: "Roshe 12",
				price: 115.95,
				gender: "Male",
				id: "8",
			},
			{
				image: require("../assets/Male/Male10.png"),
				itemName: "Roshe 12",
				price: 97.95,
				gender: "Male",
				id: "9",
			},
			{
				image: require("../assets/Female/Female1.png"),
				itemName: "Airmax",
				price: 96.99,
				gender: "Female",
				id: "10",
			},
			{
				image: require("../assets/Female/Female2.png"),
				itemName: "Airfly `99",
				price: 125.99,
				gender: "Female",
				id: "11",
			},
			{
				image: require("../assets/Female/Female3.png"),
				itemName: "Roshe 12",
				price: 100.95,
				gender: "Female",
				id: "12",
			},
			{
				image: require("../assets/Female/Female4.png"),
				itemName: "Roshe 12",
				price: 129.95,
				gender: "Female",
				id: "13",
			},
			{
				image: require("../assets/Female/Female5.png"),
				itemName: "Roshe 12",
				price: 113.95,
				gender: "Female",
				id: "14",
			},
			{
				image: require("../assets/Female/Female6.png"),
				itemName: "Roshe 12",
				price: 98.95,
				gender: "Female",
				id: "15",
			},
			{
				image: require("../assets/Female/Female7.png"),
				itemName: "Roshe 12",
				price: 107.95,
				gender: "Female",
				id: "16",
			},
			{
				image: require("../assets/Female/Female8.png"),
				itemName: "Roshe 12",
				price: 130.95,
				gender: "Female",
				id: "17",
			},
			{
				image: require("../assets/Female/Female9.png"),
				itemName: "Roshe 12",
				price: 121.95,
				gender: "Female",
				id: "18",
			},
			{
				image: require("../assets/Female/Female10.png"),
				itemName: "Roshe 12",
				price: 99.95,
				gender: "Female",
				id: "19",
			},
		],
		rangeValue: 0,
		cartItems: [],
	},
	mutations: {
		setCounter(state, value) {
			state.cartItems = value;
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
		myCart: (state) => {
			let koko = state.allItems.filter((f) =>
				state.cartItems.includes(parseInt(f.id))
			);

			console.log(koko);
			return koko;
		},
	},
});
