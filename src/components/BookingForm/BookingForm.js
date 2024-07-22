import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../utils/utils';
import './BookingForm.css';

function BookingForm() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [date, setDate] = useState('');
	const [time, setTime] = useState('');
	const [guests, setGuests] = useState('');
	const [occasion, setOccasion] = useState('');

	const [availableTimes, setAvailableTimes] = useState([]);

	const [errors, setErrors] = useState({});
	const [submissionError, setSubmissionError] = useState('');

	const navigate = useNavigate();

	const validate = () => {
		const newErrors = {};

		if (!firstName) newErrors.firstName = 'First Name is required';
		else if (firstName.length > 30)
			newErrors.firstName = 'First Name must be less than 30 characters';

		if (!lastName) newErrors.lastName = 'Last Name is required';
		else if (lastName.length > 30)
			newErrors.lastName = 'Last Name must be less than 30 characters';

		if (!date) newErrors.date = 'Date is required';

		if (!time) newErrors.time = 'Time is required';

		if (date && time) {
			const selectedDateTime = new Date(`${date}T${time}`);
			if (selectedDateTime <= new Date()) {
				newErrors.time = 'Selected date and time must be in the future';
			}
		}

		if (!guests) newErrors.guests = 'Number of guests is required';
		else if (guests < 1 || isNaN(guests))
			newErrors.guests = 'Number of guests must be at least 1';

		if (!occasion) newErrors.occasion = 'Occasion is required';

		return newErrors;
	};

	const handleSubmit = e => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setErrors({});
		setSubmissionError('');
		const success = submitAPI({
			firstName,
			lastName,
			date,
			time,
			guests,
			occasion,
		});
		if (success) {
			navigate('/booking-completed');
		} else {
			setSubmissionError('Submission failed. Please try again.');
		}
	};

	useEffect(() => {
		if (date) {
			const availableTimes = fetchAPI(new Date(date));
			setAvailableTimes(availableTimes);
		} else {
			setAvailableTimes([]);
		}
	}, [date]);

	const getTodayDate = () => {
		const today = new Date();
		const yyyy = today.getFullYear();
		const mm = String(today.getMonth() + 1).padStart(2, '0');
		const dd = String(today.getDate()).padStart(2, '0');
		return `${yyyy}-${mm}-${dd}`;
	};

	const isToday = date => {
		const today = new Date();
		const selectedDate = new Date(date);
		return today.toDateString() === selectedDate.toDateString();
	};

	const filterAvailableTimes = times => {
		if (isToday(date)) {
			const currentTime = new Date();
			return times.filter(t => {
				const [hours, minutes] = t.split(':');
				const time = new Date(date);
				time.setHours(hours, minutes, 0);
				return time > currentTime;
			});
		}
		return times;
	};

	return (
		<form className='booking-form' onSubmit={handleSubmit}>
			{submissionError && <div className='error'>{submissionError}</div>}
			<div className='form-group'>
				<label htmlFor='res-first-name'>First Name</label>
				<input
					type='text'
					id='res-first-name'
					value={firstName}
					onChange={e => setFirstName(e.target.value)}
					required
					maxLength={30}
				/>
				{errors.firstName && <div className='error'>{errors.firstName}</div>}
			</div>

			<div className='form-group'>
				<label htmlFor='res-last-name'>Last Name</label>
				<input
					type='text'
					id='res-last-name'
					value={lastName}
					onChange={e => setLastName(e.target.value)}
					required
					maxLength={30}
				/>
				{errors.lastName && <div className='error'>{errors.lastName}</div>}
			</div>

			<div className='form-group'>
				<label htmlFor='res-date'>Choose date</label>
				<input
					type='date'
					id='res-date'
					value={date}
					onChange={e => setDate(e.target.value)}
					required
					min={getTodayDate()}
				/>
				{errors.date && <div className='error'>{errors.date}</div>}
			</div>

			<div className='form-group'>
				<label htmlFor='res-time'>Choose time</label>
				<select
					id='res-time'
					value={time}
					onChange={e => setTime(e.target.value)}
					required
					disabled={!date}
				>
					<option value=''>Select time</option>
					{filterAvailableTimes(availableTimes).map(t => (
						<option key={t} value={t}>
							{t}
						</option>
					))}
				</select>
				{errors.time && <div className='error'>{errors.time}</div>}
			</div>

			<div className='form-group'>
				<label htmlFor='res-guests'>Number of guests</label>
				<input
					type='number'
					id='res-guests'
					value={guests}
					onChange={e => setGuests(e.target.value)}
					required
					min='1'
				/>
				{errors.guests && <div className='error'>{errors.guests}</div>}
			</div>

			<div className='form-group'>
				<label htmlFor='res-occasion'>Occasion</label>
				<select
					id='res-occasion'
					value={occasion}
					onChange={e => setOccasion(e.target.value)}
					required
				>
					<option value=''>Select occasion</option>
					<option value='Birthday'>Birthday</option>
					<option value='Anniversary'>Anniversary</option>
				</select>
				{errors.occasion && <div className='error'>{errors.occasion}</div>}
			</div>

			<button className='submit-button' type='submit'>
				Submit reservation
			</button>
		</form>
	);
}

export default BookingForm;
