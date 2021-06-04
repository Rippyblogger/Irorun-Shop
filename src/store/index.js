import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		topItems: [
			{
				image: require("../assets/Top/Sneaker1.png"),
				itemName: "Air max 1",
				price: 159.99,
				gender: "Male",
				id: "21",
			},
			{
				image: require("../assets/Male/Male2.png"),
				itemName: "Air fly `99",
				price: 144.99,
				gender: "Male",
				id: "1",
			},
			{
				image: require("../assets/Male/Male10.png"),
				itemName: "Roju 12",
				price: 97.95,
				gender: "Male",
				id: "9",
			},
		],
		allItems: [
			{
				image: require("../assets/Top/Sneaker1.png"),
				itemName: "Air max 1",
				price: 159.99,
				gender: "Male",
				id: "21",
			},
			{
				image: require("../assets/Male/Male1.png"),
				itemName: "Kollington",
				price: 105.99,
				gender: "Male",
				id: "20",
			},
			{
				image: require("../assets/Male/Male2.png"),
				itemName: "Air fly `99",
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
				itemName: "Swish",
				price: 94.95,
				gender: "Male",
				id: "3",
			},
			{
				image: require("../assets/Male/Male5.png"),
				itemName: "Tangiro 3",
				price: 111.95,
				gender: "Male",
				id: "4",
			},
			{
				image: require("../assets/Male/Male6.png"),
				itemName: "Rengoku",
				price: 124.95,
				gender: "Male",
				id: "5",
			},
			{
				image: require("../assets/Male/Male7.png"),
				itemName: "Rush 5",
				price: 104.95,
				gender: "Male",
				id: "6",
			},
			{
				image: require("../assets/Male/Male8.png"),
				itemName: "Pison 3",
				price: 128.95,
				gender: "Male",
				id: "7",
			},
			{
				image: require("../assets/Male/Male9.png"),
				itemName: "Eren",
				price: 115.95,
				gender: "Male",
				id: "8",
			},
			{
				image: require("../assets/Male/Male10.png"),
				itemName: "Spire",
				price: 97.95,
				gender: "Male",
				id: "9",
			},
			{
				image: require("../assets/Female/Female1.png"),
				itemName: "Kaneo Sparkle",
				price: 96.99,
				gender: "Female",
				id: "10",
			},
			{
				image: require("../assets/Female/Female2.png"),
				itemName: "Clean 33",
				price: 125.99,
				gender: "Female",
				id: "11",
			},
			{
				image: require("../assets/Female/Female3.png"),
				itemName: "Pink Alice",
				price: 100.95,
				gender: "Female",
				id: "12",
			},
			{
				image: require("../assets/Female/Female4.png"),
				itemName: "Pink Rose",
				price: 129.95,
				gender: "Female",
				id: "13",
			},
			{
				image: require("../assets/Female/Female5.png"),
				itemName: "Pink Balance",
				price: 113.95,
				gender: "Female",
				id: "14",
			},
			{
				image: require("../assets/Female/Female6.png"),
				itemName: "Sturdy",
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
				itemName: "Church Mummy",
				price: 130.95,
				gender: "Female",
				id: "17",
			},
			{
				image: require("../assets/Female/Female9.png"),
				itemName: "Shine Shine",
				price: 121.95,
				gender: "Female",
				id: "18",
			},
			{
				image: require("../assets/Female/Female10.png"),
				itemName: "Pro Runner",
				price: 99.95,
				gender: "Female",
				id: "19",
			},
		],
		atest: [],
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
			const koko = state.cartItems.reduce((acc, curr) => {
				const isExist = state.allItems.find((o) => o.id === curr.toString());
				if (isExist) acc.push(isExist);
				state.atest = acc;
				return acc;
			}, []);
			return koko;
		},
		cartCounter: (state) => {
			let mynum = state.cartItems.length;
			return mynum;
		},

		cartTotal: (state) => {
			let kolo = [];
			state.atest.forEach(function (item) {
				kolo.push(item.price)
			});
			let finalSum = kolo.reduce((a, b) => a + b);
			return finalSum;

		}
	},
});
