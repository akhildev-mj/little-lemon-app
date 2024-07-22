import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Menu';

const renderWithRouter = (ui, { route = '/' } = {}) => {
	window.history.pushState({}, 'Test page', route);
	return render(ui, { wrapper: BrowserRouter });
};

test('renders Specials section title', () => {
	renderWithRouter(<Menu />);
	const title = screen.getByText(/Specials/i);
	expect(title).toBeInTheDocument();
});

test('renders Online Menu button', () => {
	renderWithRouter(<Menu />);
	const button = screen.getByText(/Online Menu/i);
	expect(button).toBeInTheDocument();
});
