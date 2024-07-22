import './About.css';

function About() {
	return (
		<section id='about' className='section'>
			<div className='section-title'>
				<h1>About Us</h1>
			</div>
			<div className='about-content'>
				<div className='about-text'>
					<h2>Little Lemon</h2>
					<h3>Chicago</h3>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
						ullamco est sit aliqua dolor do amet sint. Velit officia consequat
						duis enim velit mollit.
					</p>
				</div>
				<div className='about-image-container'>
					<img
						src='assets/images/about.jpg'
						alt='About Us'
						className='about-image'
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
