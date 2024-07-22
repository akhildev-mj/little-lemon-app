import About from '../About/About';
import Menu from '../Menu/Menu';
import Testimonials from '../Testimonials/Testimonials';
import './Main.css';

function Main() {
	return (
		<main>
			<div className='hero-div'>
				<div>
					<h1>Little Lemon, Chicago</h1>
					<p>
						We are a family owned Mediterranean restaurant,
						<br /> focused on traditional recipes served with a modern twist.
					</p>
					<button className='reserve-button'>Reserve a Table</button>
				</div>
				<div className='hero-image-container'>
					<img src='assets/images/hero.jpg' alt='Restaurant' />
				</div>
			</div>
			<div className='hero-space'></div>
			<Menu />
			<About />
			<Testimonials />
		</main>
	);
}

export default Main;
