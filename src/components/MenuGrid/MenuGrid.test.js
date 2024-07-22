import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuGrid from './MenuGrid';

jest.mock('../MenuItem/MenuItem', () => () => <div>MenuItem</div>);

const renderWithRouter = ui => {
	return render(ui, { wrapper: BrowserRouter });
};

test('renders menu items', () => {
	renderWithRouter(<MenuGrid />);
	const menuItems = screen.getAllByText(/MenuItem/i);
	expect(menuItems).toHaveLength(6);
});
