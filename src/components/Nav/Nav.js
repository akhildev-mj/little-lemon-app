import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
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
		<nav>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>

				<li>
					<a href='/#menu' onClick={e => handleScrollToSection(e, 'menu')}>
						Menu
					</a>
				</li>
				<li>
					<a href='/#about' onClick={e => handleScrollToSection(e, 'about')}>
						About
					</a>
				</li>

				<li>
					<NavLink to='/booking'>Book Table</NavLink>
				</li>
				<li>
					<NavLink to='/order'>Order</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
