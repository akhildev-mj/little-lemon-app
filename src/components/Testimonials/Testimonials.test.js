import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';

test('renders Testimonials section with correct content', () => {
	render(<Testimonials />);

	// Check if the section title is rendered
	expect(screen.getByText(/Testimonials/i)).toBeInTheDocument();

	// Check if the testimonials are rendered with their content
	expect(screen.getByAltText(/Avatar of John Doe/i)).toBeInTheDocument();
	expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
	expect(
		screen.getByText(/The online ordering experience was fantastic!/i)
	).toBeInTheDocument();

	expect(screen.getByAltText(/Avatar of Jane Smith/i)).toBeInTheDocument();
	expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
	expect(
		screen.getByText(
			/Amazing app! I love how seamless the ordering process is./i
		)
	).toBeInTheDocument();

	expect(screen.getByAltText(/Avatar of Alice Johnson/i)).toBeInTheDocument();
	expect(screen.getByText(/Alice Johnson/i)).toBeInTheDocument();
	expect(
		screen.getByText(
			/The app is pretty good, but I experienced some delays with my order./i
		)
	).toBeInTheDocument();

	expect(screen.getByAltText(/Avatar of Bob Brown/i)).toBeInTheDocument();
	expect(screen.getByText(/Bob Brown/i)).toBeInTheDocument();
	expect(
		screen.getByText(
			/Very convenient for busy days. The delivery was quick, and the food was delicious./i
		)
	).toBeInTheDocument();
});
