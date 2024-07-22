import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuItem from './MenuItem';

const item = {
	name: 'Test Dish',
	description: 'Delicious test dish',
	price: '$10.00',
	image: 'https://example.com/image.jpg',
};

const renderWithRouter = ui => {
	return render(ui, { wrapper: BrowserRouter });
};

test('renders menu item with correct details', () => {
	renderWithRouter(<MenuItem item={item} />);
	expect(screen.getByAltText(item.name)).toHaveAttribute('src', item.image);
	expect(screen.getByText(item.name)).toBeInTheDocument();
	expect(screen.getByText(item.price)).toBeInTheDocument();
	expect(screen.getByText(item.description)).toBeInTheDocument();
	expect(screen.getByText('Order a delivery')).toBeInTheDocument();
});
