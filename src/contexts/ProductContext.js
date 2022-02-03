import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();

const initializeCart = JSON.parse(localStorage.getItem('cart')) || [];

const ProductProvider = ({ children }) => {
	const [all, setAll] = useState(null);
	const [product, setProduct] = useState(null);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);
	const [initial, setInitial] = useState(true);
	const [cart, setCart] = useState(initializeCart);

	const getCategory = (url) => {
		const query = `category=${url.substring(1)}`;
		axios
			.get(`http://localhost:5000/products?${query}`)
			.then((data) => setProduct(data?.data))
			.catch((e) => setError(e.message))
			.finally(() => setLoading(false));
	};

	const addToCart = (item) => {
		setCart([...cart, item]);
	};
	const removeFromCart = (id) => setCart(cart.filter((i) => i._id !== id));
	const clearCart = () => setCart([]);

	const increaseCart = (id) => {
		const items = [...cart];
		const foundIndex = items.findIndex((x) => x._id === id);
		if (foundIndex > -1) {
			const newObj = {
				...items[foundIndex],
				count: items[foundIndex].count + 1,
			};
			items[foundIndex] = newObj;
			setCart(items);
		}
	};

	const decreaseCart = (id) => {
		const items = [...cart];
		const foundIndex = items.findIndex((x) => x._id === id);
		if (foundIndex > -1) {
			const newObj = {
				...items[foundIndex],
				count: items[foundIndex].count - 1,
			};
			items[foundIndex] = newObj;
			setCart(items);
		}
	};

	useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart]);
	useEffect(() => {
		axios
			.get(`http://localhost:5000/products`)
			.then((data) => setAll(data.data))
			.catch((err) => setError(err.message))
			.finally(() => setInitial(false));
	}, []);

	return (
		<ProductContext.Provider
			value={{
				all,
				product,
				loading,
				error,
				initial,
				cart,
				getCategory,
				addToCart,
				removeFromCart,
				clearCart,
				increaseCart,
				decreaseCart,
			}}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
