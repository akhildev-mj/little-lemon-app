import './ReservationSuccessfulPage.css';

function ReservationSuccessfulPage() {
	return (
		<main className='reservation-successful-page'>
			<h1>Reservation Successful</h1>
			<div className='message-container'>
				<p>Your reservation has been successfully completed.</p>
				<a href='/' className='home-link'>
					Go to Home Page
				</a>
			</div>
		</main>
	);
}

export default ReservationSuccessfulPage;
