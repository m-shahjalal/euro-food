import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ sidebar }) => {
	return (
		<div className='fixSidebar'>
			<div
				style={sidebar ? { display: 'block' } : {}}
				className='sidebar'>
				<div className='sidebar_main'>
					<Link to='/' className='sidebar_main-item'>
						All Products
					</Link>
					<Link
						state={'Frozen snacks'}
						to='/frozen-snacks'
						className='sidebar_main-item'>
						Frozen snacks
						<small className='sidebar_main-item-sub'>
							(manufacturing)
						</small>
					</Link>
					<Link
						state={'Frozen fish'}
						to='/frozen-fish'
						className='sidebar_main-item'>
						Frozen fish
						<small className='sidebar_main-item-sub'>
							(fresh water and sea fish)
						</small>
					</Link>
					<Link
						state='Vegetables'
						to='/vegetable'
						className='sidebar_main-item'>
						Vegetables
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
