import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage/BookingPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/booking' element={<BookingPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
