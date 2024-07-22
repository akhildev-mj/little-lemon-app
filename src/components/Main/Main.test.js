import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

const renderWithRouter = (ui, { route = '/' } = {}) => {
	window.history.pushState({}, 'Test page', route);
	return render(ui, { wrapper: BrowserRouter });
};

test('renders hero section with title and description', () => {
	renderWithRouter(<Main />);
	const title = screen.getByText(/Little Lemon, Chicago/i);
	const description = screen.getByText(
		/We are a family owned Mediterranean restaurant/i
	);
	expect(title).toBeInTheDocument();
	expect(description).toBeInTheDocument();
});

test('renders hero image', () => {
	renderWithRouter(<Main />);
	const heroImage = screen.getByAltText(/Restaurant/i);
	expect(heroImage).toBeInTheDocument();
});

test('renders reserve button', () => {
	renderWithRouter(<Main />);
	const button = screen.getByText(/Reserve a Table/i);
	expect(button).toBeInTheDocument();
});

test('renders About component', () => {
	renderWithRouter(<Main />);
	const aboutTitle = screen.getByText(/About Us/i);
	expect(aboutTitle).toBeInTheDocument();
});

test('renders Testimonials component', () => {
	renderWithRouter(<Main />);
	const testimonialsTitle = screen.getByText(/Testimonials/i);
	expect(testimonialsTitle).toBeInTheDocument();
});
