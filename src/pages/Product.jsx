import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Single from '../components/Single/Single';
import { ProductContext } from '../contexts/ProductContext';

const Product = () => {
	const location = useLocation();
	const { product, getCategory, loading } = useContext(ProductContext);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => getCategory(location.pathname), [location.pathname]);

	return (
		<>
			<h1 className='hemearea_lead'>
				{location.state === null ? 'Products' : location.state}
			</h1>
			{loading && (
				<div className='product_loader'>
					<div className='loader'></div>
				</div>
			)}
			<div className='homearea_content'>
				{product?.length &&
					product.map((itm) => <Single key={itm._id} data={itm} />)}
			</div>
		</>
	);
};

export default Product;
