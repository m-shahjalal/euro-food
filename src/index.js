import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import CartProvider from './contexts/ProductContext';

ReactDOM.render(
	<React.StrictMode>
		<CartProvider>
			<App />
		</CartProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
