import BookingForm from '../../BookingForm/BookingForm';
import './BookingPage.css';

function BookingPage() {
	return (
		<main className='booking-page'>
			<h1>Reserve a Table</h1>
			<BookingForm />
		</main>
	);
}

export default BookingPage;
