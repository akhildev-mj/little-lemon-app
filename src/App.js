import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import BookingPage from './components/pages/BookingPage/BookingPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import OrderPage from './components/pages/OrderPage/OrderPage';
import ReservationSuccessfulPage from './components/pages/ReservationSuccessfulPage/ReservationSuccessfulPage';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/booking' element={<BookingPage />} />
				<Route path='/order' element={<OrderPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route
					path='/booking-completed'
					element={<ReservationSuccessfulPage />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
