import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingPage from './BookingPage';

test('renders BookingPage with title and BookingForm', () => {
	render(
		<MemoryRouter>
			<BookingPage />
		</MemoryRouter>
	);
	expect(screen.getByText(/Reserve a Table/i)).toBeInTheDocument();
});
