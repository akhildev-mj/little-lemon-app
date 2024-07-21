import MenuGrid from '../MenuGrid/MenuGrid';
import './Menu.css';

const Menu = () => {
	return (
		<section id='menu' className='section'>
			<div className='section-title'>
				<h1>Explore Our Menu</h1>
			</div>
			<MenuGrid />
		</section>
	);
};

export default Menu;
