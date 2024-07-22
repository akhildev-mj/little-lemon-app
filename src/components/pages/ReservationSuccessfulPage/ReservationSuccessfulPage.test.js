import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ReservationSuccessfulPage from './ReservationSuccessfulPage';

test('renders ReservationSuccessfulPage with title and message', () => {
	render(
		<MemoryRouter>
			<ReservationSuccessfulPage />
		</MemoryRouter>
	);

	expect(screen.getByText(/Reservation Successful/i)).toBeInTheDocument();
	expect(
		screen.getByText(/Your reservation has been successfully completed./i)
	).toBeInTheDocument();
	expect(
		screen.getByRole('link', { name: /Go to Home Page/i })
	).toBeInTheDocument();
});
