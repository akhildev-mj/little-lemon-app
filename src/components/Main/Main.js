import About from '../AboutPage/About';
import Menu from '../Menu/Menu';
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
					<img src='assets/images/about.jpg' alt='Restaurant' />
				</div>
			</div>
			<div className='hero-space'></div>
			<Menu />
			<About />
		</main>
	);
}

export default Main;
