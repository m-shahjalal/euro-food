import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';
import './Cart.css';

const CartItem = ({ data }) => {
	const { removeFromCart, increaseCart, decreaseCart } =
		useContext(ProductContext);

	const remove = () => removeFromCart(data._id);
	const increment = () => increaseCart(data._id);
	const decrement = () => decreaseCart(data._id);

	return (
		<div className='item-card'>
			<div className='cart-interact'>
				<button onClick={increment}>+</button>
				<p>{data?.count}</p>
				<button onClick={decrement}>-</button>
			</div>
			<img
				src={data?.picturesUrls[0]}
				alt='products'
				width='100px'
				style={{ padding: '10px' }}
			/>
			<div className='item-details'>
				<div className='item-name'>{data?.name}</div>
				<div className='item-price'>৳ {data?.price} </div>
			</div>
			<div className='item-total'>৳ {data?.price * data?.count}</div>
			<div onClick={remove} className='item-clear'>
				<i className='fas fa-times'></i>
			</div>
		</div>
	);
};

export default CartItem;
