import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About component', () => {
	render(<About />);
	const titleElement = screen.getByText(/About Us/i);
	expect(titleElement).toBeInTheDocument();
});

test('renders correct headings and paragraph', () => {
	render(<About />);
	const h2Element = screen.getByText(/Little Lemon/i);
	const h3Element = screen.getByText(/Chicago/i);
	const paragraphElement = screen.getByText(
		/Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint/i
	);
	expect(h2Element).toBeInTheDocument();
	expect(h3Element).toBeInTheDocument();
	expect(paragraphElement).toBeInTheDocument();
});

test('renders about image', () => {
	render(<About />);
	const imageElement = screen.getByAltText(/About Us/i);
	expect(imageElement).toBeInTheDocument();
});
