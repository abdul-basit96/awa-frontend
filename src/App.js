import './App.css';
import HomePage from './pages/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import CurriculamPage from './pages/curriculamPage';
import CoursePage from './pages/course/Course';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/curriculum-page" element={<CurriculamPage />} />
				<Route path="/course-page" element={<CoursePage />} />
			</Routes>
		</div>
	);
}

export default App;
