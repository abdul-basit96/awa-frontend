import './App.css';
import HomePage from './pages/home';
import { Routes, Route } from 'react-router-dom';
import CurriculamPage from './pages/curriculamPage';
import CoursePage from './pages/course/Course';
import AboutUs from './pages/aboutUs/AboutUs';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/curriculum-page" element={<CurriculamPage />} />
				<Route path="/course-page" element={<CoursePage />} />
				<Route path='/about-us' element={<AboutUs />} />
			</Routes>
		</div>
	);
}

export default App;
