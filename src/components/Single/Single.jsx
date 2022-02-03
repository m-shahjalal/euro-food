import { useContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { ProductContext } from '../../contexts/ProductContext';
import Popup from '../Popup/Popup';
import './Single.css';

const Single = ({ data }) => {
	const [added, setAdded] = useState(false);
	const [open, setOpen] = useState(false);
	const { cart, addToCart, removeFromCart, increaseCart, decreaseCart } =
		useContext(ProductContext);

	const addCart = () => {
		setAdded(1);
		addToCart({ ...data, count: 1 });
	};
	const remove = () => {
		removeFromCart(data._id);
		setAdded(false);
	};
	const increment = () => increaseCart(data._id);
	const decrement = () => decreaseCart(data._id);

	useEffect(() => {
		const alreadyAdded = cart.filter((item) => item._id === data._id);
		if (alreadyAdded.length) setAdded(alreadyAdded[0].count);
	}, [cart, data._id]);

	return (
		<>
			<div className='card_container'>
				<div className='homearea_card'>
					<div className='homearea_card-tag'>{data.category}</div>
					<div className='homearea_card-media'>
						<img
							src={data.picturesUrls[0]}
							alt=''
							className='img-responsive'
						/>
					</div>
					<div className='homearea_card-title'>{data.name}</div>
					<div className='homearea_card-count'>
						{data.description}
					</div>
					<div className='homearea_card-price'>
						৳{' '}
						<span className='homearea_card-num'> {data.price}</span>
					</div>
					<div className='card_overlay'>
						<div className='top'>
							{added ? (
								<div className='overlay_controller'>
									{added > 1 ? (
										<span onClick={decrement}>-</span>
									) : (
										<span onClick={remove}>-</span>
									)}
									<p className='overlay_inner-text'>
										{added}
									</p>
									<span onClick={increment}>+</span>
								</div>
							) : (
								<div onClick={addCart} className='details'>
									addTo card
								</div>
							)}
						</div>
						<div onClick={() => setOpen(true)} className='detail'>
							details
						</div>
					</div>
				</div>
				{added ? (
					<div className='homearea_card-button homearea_card-button_added'>
						{added > 1 ? (
							<span onClick={decrement}>-</span>
						) : (
							<span onClick={remove}>-</span>
						)}
						<p>{added} added</p>
						<span onClick={increment}>+</span>
					</div>
				) : (
					<div onClick={addCart} className='homearea_card-button'>
						addTo card
					</div>
				)}
			</div>

			<Popup
				decrement={decrement}
				increment={increment}
				addCart={addCart}
				data={data}
				added={added}
				open={open}
				setOpen={setOpen}
				length={added}
			/>
		</>
	);
};

export default Single;
