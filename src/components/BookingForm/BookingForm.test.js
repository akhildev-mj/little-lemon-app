import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

test('renders BookingForm with all input fields', () => {
	render(
		<BrowserRouter>
			<BookingForm />
		</BrowserRouter>
	);

	const firstNameInput = screen.getByLabelText(/First Name/i);
	const lastNameInput = screen.getByLabelText(/Last Name/i);
	const dateInput = screen.getByLabelText(/Choose date/i);
	const timeInput = screen.getByLabelText(/Choose time/i);
	const guestsInput = screen.getByLabelText(/Number of guests/i);
	const occasionInput = screen.getByLabelText(/Occasion/i);

	expect(firstNameInput).toBeInTheDocument();
	expect(lastNameInput).toBeInTheDocument();
	expect(dateInput).toBeInTheDocument();
	expect(timeInput).toBeInTheDocument();
	expect(guestsInput).toBeInTheDocument();
	expect(occasionInput).toBeInTheDocument();
});

test('shows error messages on submitting empty form', () => {
	render(
		<BrowserRouter>
			<BookingForm />
		</BrowserRouter>
	);

	const submitButton = screen.getByText(/Submit reservation/i);
	fireEvent.click(submitButton);

	expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
	expect(screen.getByText(/Last Name is required/i)).toBeInTheDocument();
	expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
	expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
	expect(screen.getByText(/Number of guests is required/i)).toBeInTheDocument();
	expect(screen.getByText(/Occasion is required/i)).toBeInTheDocument();
});

test('allows form submission when all fields are filled', () => {
	render(
		<BrowserRouter>
			<BookingForm />
		</BrowserRouter>
	);

	fireEvent.change(screen.getByLabelText(/First Name/i), {
		target: { value: 'John' },
	});
	fireEvent.change(screen.getByLabelText(/Last Name/i), {
		target: { value: 'Doe' },
	});
	fireEvent.change(screen.getByLabelText(/Choose date/i), {
		target: { value: '2024-12-31' },
	});
	fireEvent.change(screen.getByLabelText(/Choose time/i), {
		target: { value: '23:00' },
	});
	fireEvent.change(screen.getByLabelText(/Number of guests/i), {
		target: { value: '2' },
	});
	fireEvent.change(screen.getByLabelText(/Occasion/i), {
		target: { value: 'Birthday' },
	});

	const submitButton = screen.getByText(/Submit reservation/i);
	fireEvent.click(submitButton);

	expect(screen.queryByText(/First Name is required/i)).not.toBeInTheDocument();
	expect(screen.queryByText(/Last Name is required/i)).not.toBeInTheDocument();
	expect(screen.queryByText(/Date is required/i)).not.toBeInTheDocument();
	expect(screen.queryByText(/Time is required/i)).not.toBeInTheDocument();
	expect(
		screen.queryByText(/Number of guests is required/i)
	).not.toBeInTheDocument();
	expect(screen.queryByText(/Occasion is required/i)).not.toBeInTheDocument();
});
