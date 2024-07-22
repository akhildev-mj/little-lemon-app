import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders LoginPage with login form and links', () => {
	render(<LoginPage />);
	expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
	expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
	expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
	expect(screen.getByText(/Forgot Password\?/i)).toBeInTheDocument();
	expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument();
	expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
});
