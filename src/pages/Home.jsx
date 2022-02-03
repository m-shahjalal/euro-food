import React from 'react';
import { useContext } from 'react/cjs/react.development';
import Single from '../components/Single/Single';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
	const { all } = useContext(ProductContext);
	return (
		<>
			<h1 className='hemearea_lead'>All Products</h1>
			<div className='homearea_content'>
				{all?.length &&
					all.map((itm) => <Single key={itm._id} data={itm} />)}
			</div>
		</>
	);
};

export default Home;
