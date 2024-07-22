import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

const renderWithRouter = (ui, { route = '/' } = {}) => {
	window.history.pushState({}, 'Test page', route);
	return render(ui, { wrapper: BrowserRouter });
};

test('renders footer logo and copyright text', () => {
	renderWithRouter(<Footer />);
	const copyright = screen.getByText(/Little Lemon/i);
	expect(copyright).toBeInTheDocument();
});

test('renders navigation links', () => {
	renderWithRouter(<Footer />);
	const homeLink = screen.getByText(/Home/i);
	const aboutLink = screen.getByText(/About/i);
	const menuLink = screen.getByText(/Menu/i);
	const reservationsLink = screen.getByText(/Reservations/i);
	const orderLink = screen.getByText(/Order Online/i);
	const loginLink = screen.getByText(/Login/i);
	expect(homeLink).toBeInTheDocument();
	expect(aboutLink).toBeInTheDocument();
	expect(menuLink).toBeInTheDocument();
	expect(reservationsLink).toBeInTheDocument();
	expect(orderLink).toBeInTheDocument();
	expect(loginLink).toBeInTheDocument();
});

test('renders contact information', () => {
	renderWithRouter(<Footer />);
	const address = screen.getByText(
		/2548 Matthews Street, Chicago, Illinois - 60631/i
	);
	const phone = screen.getByText(/815-582-5830/i);
	const email1 = screen.getByText(/contact1@littlelemon.com/i);
	const email2 = screen.getByText(/contact2@littlelemon.com/i);
	expect(address).toBeInTheDocument();
	expect(phone).toBeInTheDocument();
	expect(email1).toBeInTheDocument();
	expect(email2).toBeInTheDocument();
});
