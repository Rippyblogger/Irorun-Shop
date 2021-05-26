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
	},
	mutations: {
		setCounter(state, value) {
			state.cartCounter = value;
		},
	},
  actions: {
    updateCounter({ commit }, payload) {
      commit('setCounter', payload)
    }
  },
	modules: {},
});
