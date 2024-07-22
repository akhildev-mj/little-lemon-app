import { useEffect, useState } from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
	const navigate = useNavigate();
	const [targetHash, setTargetHash] = useState(null);

	const handleScrollToSection = (e, sectionId) => {
		e.preventDefault();
		setTargetHash(sectionId);
		navigate('/');
	};

	useEffect(() => {
		if (targetHash) {
			const handleScroll = () => {
				const section = document.getElementById(targetHash);
				if (section) {
					section.scrollIntoView({ behavior: 'smooth' });
					setTargetHash(null);
				}
			};

			const timer = setTimeout(handleScroll, 100);
			return () => clearTimeout(timer);
		}
	}, [targetHash, navigate]);

	return (
		<footer>
			<div className='footer-column logo-column'>
				<img src='assets/images/logo.png' alt='Little Lemon Logo' />
				<p>
					&copy; 2024 <span>Little Lemon</span>. All rights reserved.
				</p>
			</div>
			<div className='footer-column nav-column'>
				<div className='nav-column-wrapper'>
					<h3>Navigation</h3>
					<ul>
						<li>
							<NavLink to='/'>Home</NavLink>
						</li>

						<li>
							<a
								href='/#about'
								onClick={e => handleScrollToSection(e, 'about')}
							>
								About
							</a>
						</li>

						<li>
							<a href='/#menu' onClick={e => handleScrollToSection(e, 'menu')}>
								Menu
							</a>
						</li>

						<li>
							<NavLink to='/booking'>Reservations</NavLink>
						</li>

						<li>
							<NavLink to='/order'>Order Online</NavLink>
						</li>

						<li>
							<NavLink to='/login'>Login</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className='footer-column contact-column'>
				<h3>Contact</h3>
				<p>2548 Matthews Street, Chicago, Illinois - 60631</p>
				<p>815-582-5830</p>
				<p>contact1@littlelemon.com</p>
				<p>contact2@littlelemon.com</p>
			</div>
			<div className='footer-column social-media-column'>
				<h3>Social Media</h3>
				<div className='social-media-icons'>
					<a
						href='https://www.facebook.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaFacebook />
					</a>
					<a
						href='https://www.twitter.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaTwitter />
					</a>
					<a
						href='https://www.instagram.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaInstagram />
					</a>
					<a
						href='https://www.linkedin.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedin />
					</a>
					<a
						href='https://www.youtube.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaYoutube />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
