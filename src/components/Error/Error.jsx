import './Error.css';

const Error = () => {
	return (
		<div className='error'>
			<h1 className='error-404'>404</h1>
			<div className='error-sub'>
				The page you requested was not found.
			</div>
		</div>
	);
};

export default Error;
