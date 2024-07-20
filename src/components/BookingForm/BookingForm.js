import { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [guests, setGuests] = useState('');
	const [occasion, setOccasion] = useState('');

	const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

	const handleSubmit = e => {
		e.preventDefault();
		console.log({ date, time, guests, occasion });
	};

	return (
		<form className='booking-form' onSubmit={handleSubmit}>
			<div className='form-group'>
				<label htmlFor='res-date'>Choose date</label>
				<input
					type='date'
					id='res-date'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='res-time'>Choose time</label>
				<select
					id='res-time'
					value={time}
					onChange={e => setTime(e.target.value)}
				>
					<option value=''>Select time</option>
					{availableTimes.map(t => (
						<option key={t} value={t}>
							{t}
						</option>
					))}
				</select>
			</div>

			<div className='form-group'>
				<label htmlFor='res-guests'>Number of guests</label>
				<input
					type='number'
					id='res-guests'
					value={guests}
					onChange={e => setGuests(e.target.value)}
					min='1'
				/>
			</div>

			<div className='form-group'>
				<label htmlFor='res-occasion'>Occasion</label>
				<select
					id='res-occasion'
					value={occasion}
					onChange={e => setOccasion(e.target.value)}
				>
					<option value=''>Select occasion</option>
					<option value='Birthday'>Birthday</option>
					<option value='Anniversary'>Anniversary</option>
				</select>
			</div>

			<button className='submit-button' type='submit'>
				Submit reservation
			</button>
		</form>
	);
}

export default BookingForm;
