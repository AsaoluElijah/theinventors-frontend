import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Footer from './components/Footer';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
