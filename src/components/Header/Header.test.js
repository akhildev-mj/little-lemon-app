import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const renderWithRouter = (ui, { route = '/' } = {}) => {
	window.history.pushState({}, 'Test page', route);
	return render(ui, { wrapper: BrowserRouter });
};

test('renders header logo', () => {
	renderWithRouter(<Header />);
	const logo = screen.getByAltText(/Little Lemon Logo/i);
	expect(logo).toBeInTheDocument();
});

test('renders navigation component', () => {
	renderWithRouter(<Header />);
	const nav = screen.getByRole('navigation');
	expect(nav).toBeInTheDocument();
});
