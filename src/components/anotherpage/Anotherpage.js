import React, { useState, useCallback } from 'react';
import { useStoreActions } from 'easy-peasy';
import { useStateGetter } from './hooks/useStateGetter';

export function Anotherpage() {
	const [ input, setInput ] = useState('');

	const addProductToBasket = useStoreActions((actions) => actions.basket.addProduct);
	// const data = useStateGetter([ 'basket.productIds', 'products.items' ]);
	const { items: products } = useStateGetter([ [ 'products', 'items' ], [ 'basket', 'productIds' ] ]);
	const onAddToBasketClick = useCallback(async (id) => {
		addProductToBasket(id); //
	}, []);

	return (
		<div>
			{products.map((prod, i) => (
				<div key={i}>
					<p>
						{prod.name}
						{'   '}
						{prod.price}
					</p>
					<button type="button" onClick={() => onAddToBasketClick(prod.id)}>
						{' '}
						Add count
					</button>
				</div>
			))}
			<input type="text" onChange={(e) => setInput(e.target.value)} />
			<p />
			{/* <button type="button" onClick={AddProduct}>
				{' '}
				Add product{' '}
			</button> */}
		</div>
	);
}
