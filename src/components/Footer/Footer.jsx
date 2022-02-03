import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<>
			<br />
			<br />
			<br />
			<div className='footer'>
				<div className='footer_col'>
					<p className='header-logo-footer'>BAZAR</p>
					<div className='footer_col-social'>
						<i className='fa fa-facebook' aria-hidden='true'></i>
						<i className='fa fa-instagram' aria-hidden='true'></i>
						<i className='fa fa-linkedin' aria-hidden='true'></i>
						<i className='fa fa-youtube' aria-hidden='true'></i>
					</div>
					<button className='footer_col-app'>BAZAR app</button>
					<div className='footer_col-credit'>BAZAR © 2021</div>
				</div>
				<div className='footer_col'>
					<h3 className='footer_col_title'>Useful Links</h3>
					<div className='footer_col-link'>
						<Link to='#' className='footer_col-link_item'>
							About Bazar
						</Link>
						<Link to='#' className='footer_col-link_item'>
							FAQ{' '}
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Contact Us
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Career
						</Link>
					</div>
				</div>
				<div className='footer_col'>
					<h3 className='footer_col_title'>Helpful Links</h3>
					<div className='footer_col-link'>
						<Link to='#' className='footer_col-link_item'>
							About BAZAR
						</Link>
						<Link to='#' className='footer_col-link_item'>
							FAQ{' '}
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Contact Us
						</Link>
						<Link to='#' className='footer_col-link_item'>
							Career
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
