import ReactModal from 'react-modal';
import './Popup.css';

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		zIndex: '999999',
	},
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

const Popup = ({
	data,
	open,
	setOpen,
	added,
	addCart,
	decrement,
	increment,
	length,
}) => {
	return (
		<ReactModal
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			onRequestClose={() => setOpen(false)}
			isOpen={open}
			style={customStyles}
			contentLabel='Details Modal'>
			<button onClick={() => setOpen(false)} className='popup_close'>
				<i className='fa fa-times'></i>
			</button>
			<div className='popup'>
				<div className='popup_item'>
					<img
						className='popup-img'
						src={data.picturesUrls[0]}
						alt='img'
					/>
				</div>
				<div className='popup_item'>
					<div className='popup_category'>{data.category}</div>
					<div className='popup_name'>{data.name}</div>
					<div className='popup_info'>{data.description}</div>
					<div className='popup_price'>
						Price: <b>৳ {data.price}</b>
					</div>
					{added ? (
						<div className='popup_btn homearea_card-button_added'>
							<span onClick={decrement}>-</span>
							<p>{length} added</p>
							<span onClick={increment}>+</span>
						</div>
					) : (
						<div onClick={addCart} className='popup_btn'>
							add to card
						</div>
					)}
				</div>
			</div>
		</ReactModal>
	);
};

export default Popup;
