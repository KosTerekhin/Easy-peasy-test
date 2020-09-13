import { action } from 'easy-peasy';

const addProduct = (state, payload) => {
	console.log(state, payload, 'STATE');
	return {
		...state,
		items: [ ...state.items, payload ]
	};
};

const productsModel = {
	items: [ { id: 1, name: 'Broccoli', price: 2.5 }, { id: 2, name: 'Carrots', price: 4 } ],

	addProduct: action((state, payload) => {
		return addProduct(state, payload);
	})
};

export default productsModel;
