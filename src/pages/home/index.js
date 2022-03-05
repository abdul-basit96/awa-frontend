import React from 'react';
import HeaderBottom from '../../components/header/headerBottom/headerBottom';
import HeaderTop from '../../components/header/headerTop/headerTop';
import CarouselSection from '../../components/carouselSection/carouselSection';

const HomePage = () => {
	return (
		<div>
			<HeaderTop />
			<HeaderBottom />
			<CarouselSection />
		</div>
	);
};

export default HomePage;
