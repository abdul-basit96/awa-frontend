import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

const BookFreeClass = () => {
	const titles = [ 'Test your Tajweed Ul Quran', 'Evaluate your Tajweed', 'Enroll your Course' ];
	const text = [
		'Fill out the form Below to Book a free Trail Class with our Online Quran Tutors',
		'Take your free Quran lesson with best quran Teachers',
		'After the free trails, choose a monthly plan and get registered for full course'
	];
	const images = [ 'quran.png', 'check-list-icon.png', 'enroll-icon.png' ];

	return (
		<Container className="my-5 bookFreeWrapper" fluid>
			<Row className="justify-content-center">
				{titles.map((item, index) => (
					<Col md={3} className="text-center">
						<div className="BookFreeImgWrapper">
							<img className="BookFreeImg img-fluid" src={`/images/${images[index]}`} />
						</div>
						<p className="BookFreeTitle">{item}</p>
						<p className="BookFreeText">{text[index]}</p>
					</Col>
				))}
			</Row>
			<Row className="justify-content-center">
				<Col className="text-center">
					<button className="BookFreeButton px-3 py-3">BOOK YOUR FREE TRAIL CLASS</button>
				</Col>
			</Row>
		</Container>
	);
};

export default BookFreeClass;
