import React from 'react';
import { Container } from 'react-bootstrap';
// import tajweed from process.env.PUBLIC_URL+"/images/tajweed_ul_quran.png";
import './style.css';
const TajweedImportance = () => {
	return (
		<Container>
			<div className="tajweed-ul-quran mt-5">
				<img className="img-fluid" src={`${process.env.PUBLIC_URL}/images/tajweedQuran.png`} alt="" />
				<h2>THE IMPORTANCE OF</h2>
				<h1>TAJWEED UL QURAN</h1>
				<button className="btn btn-lg">BOOK YOUR FREE TRIAL CLASS</button>
			</div>
		</Container>
	);
};

export default TajweedImportance;
