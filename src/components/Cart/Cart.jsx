import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import './Cart.css';
import CartItem from './CartItem';

const Cart = () => {
	const { cart, clearCart } = useContext(ProductContext);
	const navigate = useNavigate();
	const clearCartItems = () => clearCart();
	const clickHandler = () => navigate('/');

	// if card is empty then this will render
	if (cart.cartItems.length === 0) {
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
			<div className='cart-top'>
				{/* individual cart items */}
				<div className='cart-right'>
					{cart.cartItems.length &&
						cart.cartItems.map((item) => (
							<CartItem item={item} key={item.key} />
						))}
				</div>
			</div>

			{/* bottom line of cart */}
			<div className='cart-bottom'>
				<div className='cart-bottom-items'>
					<i className='fas fa-cart'></i>
					{cart.cartTotalQuantity} items
				</div>
				<div className='cart-bottom-total'>
					Total: {cart.cartTotalAmount}{' '}
				</div>
				<div className='cart-bottom-total'>
					<button>Place Order</button>
					<i onClick={clearCartItems} className='fas fa-times'></i>
				</div>
			</div>
		</div>
	);
};

export default Cart;
