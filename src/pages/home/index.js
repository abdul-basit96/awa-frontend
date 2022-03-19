import React from 'react';
import HeaderBottom from '../../components/header/headerBottom/headerBottom';
import HeaderTop from '../../components/header/headerTop/headerTop';
import CarouselSection from '../../components/carouselSection/carouselSection';
import LetterSection from '../../components/letter-section';
import Footer from '../../components/footer/Footer';
import BookFreeClass from '../../components/BookFreeClass';
import TestTajweed from '../../components/testTajweed/TestTajweed';
import Flagship from '../../components/flagship';
import Syllabus from '../../components/syllabus';
import TeacherSection from '../../components/TeacherSection';
import ArabicWaveFeatures from '../../components/arabicWaveFeatures/ArabicWaveFeatures';

const HomePage = () => {
	return (
		<div>
			<HeaderTop />
			<HeaderBottom />
			<CarouselSection />
			<LetterSection />
			<TestTajweed />
			<BookFreeClass />
			<Flagship />
			<ArabicWaveFeatures />
			<Syllabus />
			<TeacherSection />
			<TajweedImportance />
			<Footer />
		</div>
	);
};
export default HomePage;
