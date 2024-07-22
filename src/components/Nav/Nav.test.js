import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

const renderWithRouter = ui => {
	return render(ui, { wrapper: BrowserRouter });
};

test('renders navigation links', () => {
	renderWithRouter(<Nav />);
	expect(screen.getByText(/Home/i)).toBeInTheDocument();
	expect(screen.getByText(/About/i)).toBeInTheDocument();
	expect(screen.getByText(/Menu/i)).toBeInTheDocument();
	expect(screen.getByText(/Reservations/i)).toBeInTheDocument();
	expect(screen.getByText(/Order Online/i)).toBeInTheDocument();
	expect(screen.getByText(/Login/i)).toBeInTheDocument();
});
