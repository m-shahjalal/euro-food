import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../contexts/ProductContext';
import './Header.css';

const Header = ({ showHide }) => {
	const { cart } = useContext(ProductContext);

	return (
		<header className='header'>
			<div className='header_hamburger'>
				<div onClick={showHide} className='hamburger-icon'>
					<i className='fas fa-bars'></i>
				</div>
			</div>
			<div className='header_left'>
				<Link to='/' className='header_left-logo'>
					<p className='header-logo'>BAZAR</p>
				</Link>
			</div>

			<div className='header_right'>
				<Link to='#' className='header_right-item'>
					<i className='fas fa-search'></i>
					Search
				</Link>
				<Link to='#' className='header_right-item header-location'>
					<i className='fas fa-map-marker-alt'></i>
					Location
				</Link>
				<Link to='#' className='header_right-item header-signin'>
					<i className='fas fa-user'></i>
					Sing in
				</Link>
				<Link to='/cart' className='header_right-item'>
					<i className='fas fa-cart-plus'></i>
					<span className='cart_counter'>{cart.length}</span>
				</Link>
			</div>
		</header>
	);
};

export default Header;
