import React from 'react';
import HeaderBottom from '../../components/header/headerBottom/headerBottom';
import HeaderTop from '../../components/header/headerTop/headerTop';
import CarouselSection from '../../components/carouselSection/carouselSection';
// import Footer from '../../components/footer/Footer';

const HomePage = () => {
	return (
		<div>
			<HeaderTop />
			<HeaderBottom />
			<CarouselSection />
			{/* <Footer /> */}
		</div>
	);
};

export default HomePage;
