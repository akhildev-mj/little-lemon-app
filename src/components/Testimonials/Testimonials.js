import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Testimonials.css';

function Testimonials() {
	const testimonials = [
		{
			image: 'assets/images/avatar1.png',
			name: 'John Doe',
			rating: 5,
			text: 'The online ordering experience was fantastic! The website is easy to navigate, and my food arrived on time and hot. Highly recommend!',
		},
		{
			image: 'assets/images/avatar2.png',
			name: 'Jane Smith',
			rating: 5,
			text: 'Amazing app! I love how seamless the ordering process is. The menu is clear, and I can customize my order easily. Great service!',
		},
		{
			image: 'assets/images/avatar3.png',
			name: 'Alice Johnson',
			rating: 5,
			text: "The app is pretty good, but I experienced some delays with my order. The customer service was helpful, though. I'll give it another try.",
		},
		{
			image: 'assets/images/avatar4.png',
			name: 'Bob Brown',
			rating: 4.5,
			text: "Very convenient for busy days. The delivery was quick, and the food was delicious. The app could use some design improvements, but overall, it's great!",
		},
	];

	const renderStars = rating => {
		const fullStars = Math.floor(rating);
		const halfStar = rating % 1 !== 0;
		const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

		return (
			<>
				{Array(fullStars)
					.fill()
					.map((_, index) => (
						<FaStar key={`full-${index}`} color='#ffcc00' />
					))}
				{halfStar && <FaStarHalfAlt color='#ffcc00' />}
				{Array(emptyStars)
					.fill()
					.map((_, index) => (
						<FaRegStar key={`empty-${index}`} color='#ffcc00' />
					))}
			</>
		);
	};

	return (
		<section id='testimonials' className='section'>
			<div className='section-title'>
				<h1>Testimonials</h1>
			</div>
			<div className='testimonials-content'>
				{testimonials.map((testimonial, index) => (
					<div key={index} className='testimonial-box'>
						<div className='rating'>{renderStars(testimonial.rating)}</div>
						<div className='testimonial-header'>
							<div className='testimonial-avatar'>
								<img
									src={testimonial.image}
									alt={`Avatar of ${testimonial.name}`}
									className='avatar-image'
								/>
							</div>
							<div className='testimonial-name'>{testimonial.name}</div>
						</div>
						<div className='testimonial-text'>
							<p>{testimonial.text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Testimonials;
