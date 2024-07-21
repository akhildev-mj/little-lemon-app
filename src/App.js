import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage/BookingPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import OrderPage from './components/OrderPage/OrderPage';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/booking' element={<BookingPage />} />
				<Route path='/order' element={<OrderPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
