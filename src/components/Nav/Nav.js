import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing hamburger and close icons
import { NavLink, useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
	const navigate = useNavigate();
	const [targetHash, setTargetHash] = useState(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleScrollToSection = (e, sectionId) => {
		e.preventDefault();
		setTargetHash(sectionId);
		navigate('/');
		setIsMenuOpen(false);
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

	const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

	return (
		<nav>
			{/* Hamburger Icon */}
			<div className='hamburger-icon' onClick={toggleMenu}>
				{isMenuOpen ? <FaTimes /> : <FaBars />}
			</div>

			{/* Nav Items */}
			<div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
				<ul>
					<li>
						<NavLink to='/' onClick={() => setIsMenuOpen(false)}>
							Home
						</NavLink>
					</li>
					<li>
						<a href='/#about' onClick={e => handleScrollToSection(e, 'about')}>
							About
						</a>
					</li>
					<li>
						<a href='/#menu' onClick={e => handleScrollToSection(e, 'menu')}>
							Menu
						</a>
					</li>
					<li>
						<NavLink to='/booking' onClick={() => setIsMenuOpen(false)}>
							Reservations
						</NavLink>
					</li>
					<li>
						<NavLink to='/order' onClick={() => setIsMenuOpen(false)}>
							Order Online
						</NavLink>
					</li>
					<li>
						<NavLink to='/login' onClick={() => setIsMenuOpen(false)}>
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
