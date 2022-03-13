import React from 'react';
import Marquee from 'react-fast-marquee';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './style.css';
const HeaderBottom = () => {
	return (
		<Container fluid>
			<Navbar bg="light" variant="light">
				<Container fluid className="px-5">
					<Navbar.Brand href="#home">
						<img width={170} src="/images/logo-image.png" className="img-fluid" />
					</Navbar.Brand>
					<Nav className="ms-auto">
						<Nav.Link className="px-3 fw-bold border-primary border-right" href="#home">
							Home
						</Nav.Link>
						<Nav.Link className="px-3 fw-bold" href="#features">
							Curriculum
						</Nav.Link>
						<Nav.Link className="px-3 fw-bold" href="#pricing">
							Our Teachers
						</Nav.Link>
						<Nav.Link className="px-3 fw-bold" href="#pricing">
							Blogs
						</Nav.Link>
						<Nav.Link className="px-3 fw-bold" href="#pricing">
							About Us
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			{/*-----------Sliding ayat text here------ */}
			<div className="top-marquee-div py-3 text-white">
				<Marquee direction="right" pauseOnHover="true" gradientColor={'none'}>
					<strong className="fs-4">
						بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ نٓ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ مَآ أَنتَ بِنِعْمَةِ
						رَبِّكَ بِمَجْنُونٍۢ وَإِنَّ لَكَ لَأَجْرًا غَيْرَ مَمْنُونٍۢ وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍۢ
						فَسَتُبْصِرُ وَيُبْصِرُونَ بِأَييِّكُمُ ٱلْمَفْتُونُ إِنَّ رَبَّكَ هُوَ أَعْلَمُ بِمَن ضَلَّ عَن
						سَبِيلِهِۦ وَهُوَ أَعْلَمُ بِٱلْمُهْتَدِينَ فَلَا تُطِعِ ٱلْمُكَذِّبِينَ وَدُّوا۟ لَوْ تُدْهِنُ
						فَيُدْهِنُونَ وَلَا تُطِعْ كُلَّ حَلَّافٍۢ مَّهِينٍ هَمَّازٍۢ مَّشَّآءٍۭ بِنَمِيمٍۢ مَّنَّاعٍۢ
						لِّلْخَيْرِ مُعْتَدٍ أَثِيمٍ عُتُلٍّۭ بَعْدَ ذَٰلِكَ زَنِيمٍ أَن كَانَ ذَا مَالٍۢ وَبَنِينَ
						إِذَا تُتْلَىٰ عَلَيْهِ ءَايَـٰتُنَا قَالَ أَسَـٰطِيرُ ٱلْأَوَّلِينَ سَنَسِمُهُۥ عَلَى
						ٱلْخُرْطُومِ إِنَّا بَلَوْنَـٰهُمْ كَمَا بَلَوْنَآ أَصْحَـٰبَ ٱلْجَنَّةِ إِذْ أَقْسَمُوا۟
						لَيَصْرِمُنَّهَا مُصْبِحِينَ وَلَا يَسْتَثْنُونَ
					</strong>
				</Marquee>
			</div>
		</Container>
	);
};

export default HeaderBottom;
