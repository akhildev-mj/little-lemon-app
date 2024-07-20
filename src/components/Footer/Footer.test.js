import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer text', () => {
	render(<Footer />);
	const linkElement = screen.getByText(
		/2024 Little Lemon. All rights reserved./i
	);
	expect(linkElement).toBeInTheDocument();
});
