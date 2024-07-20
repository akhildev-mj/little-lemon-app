import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
	return (
		<header className='header'>
			<img src='assets/images/logo.png' alt='Little Lemon Logo' />
			<Nav />
		</header>
	);
}

export default Header;
