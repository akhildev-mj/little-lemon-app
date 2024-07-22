import MenuGrid from '../MenuGrid/MenuGrid';
import './Menu.css';

const Menu = () => {
	return (
		<section id='menu' className='section'>
			<div className='section-title'>
				<h1>Specials</h1>
				<button className='order-now-button'>Online Menu</button>
			</div>
			<MenuGrid />
		</section>
	);
};

export default Menu;
