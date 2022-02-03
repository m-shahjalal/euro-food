import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from '../components/Error/Error';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import { ProductContext } from '../contexts/ProductContext';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Product from '../pages/Product';
import './base.css';
Modal.setAppElement('#root');

const App = () => {
	const { initial } = useContext(ProductContext);
	const [sidebar, setSidebar] = useState();
	const showHide = () => setSidebar(!sidebar);

	if (initial) {
		return (
			<div className='loading-initialized'>
				<p className='logo-initial'>BAZAR</p>
				<div className='loader'></div>
			</div>
		);
	}
	return (
		<BrowserRouter>
			<Header showHide={showHide} />
			<Sidebar sidebar={sidebar} />
			<div className='layout'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:id' element={<Product />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
