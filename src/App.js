import './App.css';
import HomePage from './pages/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import CurriculamPage from './pages/curriculamPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/curriculum-page" element={<CurriculamPage />} />
			</Routes>
		</div>
	);
}

export default App;
