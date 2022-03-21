import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './styles.css';

const TestTajweed = () => {
	return (
		<Container fluid className="mt-2 px-0">
			<div style={{ borderTop: '8px solid #3382c3' }} />
			<Container>
				<Row className="justify-content-center">
					<Col className="text-center">
						<div className="tajweed-heading-1 fs-1 mt-5">
							Test Your Tajweed Ul Quran by Arabic Wave's Certified Trainer
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col className="text-center">
						<div className="tajweed-heading-mid fs-1">
							Learn Tajweed Ul Quran and other Arabic Cources of on Place
						</div>
					</Col>
				</Row>
				<br />
				<br />
				<Row className="justify-content-center">
					<Col className="text-center">
						<button className="tajweed-button px-5 py-3 fs-2">TEST YOUR TAJWEED Ul QURAN</button>
					</Col>
				</Row>
				<br />
				<br />
				<Row className="justify-content-center">
					<Col className="text-center">
						<div className="tajweed-heading-2 fs-1">
							Start learning the Quran with easy Method by Arabic Wave Academy
						</div>
						<hr style={{ color: '#1cbba0', height: '2px' }} />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default TestTajweed;
