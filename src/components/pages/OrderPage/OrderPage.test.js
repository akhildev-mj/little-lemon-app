import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OrderPage from './OrderPage';

test('renders OrderPage with title and MenuGrid', () => {
	render(
		<MemoryRouter>
			<OrderPage />
		</MemoryRouter>
	);

	expect(screen.getByText(/Order Online/i)).toBeInTheDocument();
	expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
