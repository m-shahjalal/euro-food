import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/Cart/CartItem';
import { ProductContext } from '../contexts/ProductContext';

const Cart = () => {
	const { cart, clearCart } = useContext(ProductContext);
	const navigate = useNavigate();
	const clearCartItems = () => clearCart();
	const clickHandler = () => navigate('/');

	const totalItems = () => {
		let total = 0;
		cart.forEach((item) => (total = total + item.count));
		return total;
	};

	const totalAmount = () => {
		let total = 0;
		cart.forEach((item) => {
			total = item.price * item.count + total;
		});
		return total;
	};

	// if card is empty then this will render
	if (cart?.length === 0) {
		return (
			<div
				style={{ maxWidth: '700px', boxShadow: 'none' }}
				className='cart-container'>
				<div className='cart'>
					<i className='fas fa-cart-arrow-down'></i>
					<p className='not-found-title'>No Product Found</p>
					<button onClick={clickHandler} className='not-found-button'>
						Start Shopping New
					</button>
				</div>
			</div>
		);
	}

	// if cart items is exists
	return (
		<div className='cart-container'>
			{/* individual cart items */}

			{cart.length &&
				cart.map((item) => <CartItem data={item} key={item._id} />)}

			{/* bottom line of cart */}
			<div className='cart-bottom'>
				<div className='cart-bottom-items'>
					<i className='fas fa-cart'></i>
					{totalItems()} items
				</div>
				<div className='cart-bottom-total'>Total: {totalAmount()}</div>
				<div className='cart-bottom-total'>
					<button>Place Order</button>
					<i onClick={clearCartItems} className='fas fa-times'></i>
				</div>
			</div>
		</div>
	);
};

export default Cart;
