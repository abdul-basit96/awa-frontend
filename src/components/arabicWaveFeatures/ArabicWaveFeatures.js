import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeatureImage from './featureImage';
import './styles.css';
const featureImageArr = [
	{
		id: 1,
		img: '/feature_images/Icon 01.png',
		text: 'Certified and expert Trainers'
	},
	{
		id: 2,
		img: '/feature_images/Icon 02.png',
		text: 'Flexible calendar'
	},
	{
		id: 3,
		img: '/feature_images/Icon 03.png',
		text: 'Interactive classes'
	},
	{
		id: 4,
		img: '/feature_images/Icon 04.png',
		text: 'One to One Sessions'
	},
	{
		id: 5,
		img: '/feature_images/Icon 05.png',
		text: 'Pffline Practice'
	},
	{
		id: 6,
		img: '/feature_images/Icon 06.png',
		text: 'Activities'
	}
];
const contentDescription = [
	{
		id: 1,
		img: '/contentDesc_images/Icon 07.png',
		text: 'Free trials and Schedule Plans'
	},
	{
		id: 2,
		img: '/contentDesc_images/Icon 08.png',
		text: 'One to One Sessions'
	},
	{
		id: 3,
		img: '/contentDesc_images/Icon 09.png',
		text: 'Groups Virtual class sessions'
	},
	{
		id: 4,
		img: '/contentDesc_images/Icon 10.png',
		text: 'Weekend Sessions'
	},
	{
		id: 5,
		img: '/contentDesc_images/Icon 11.png',
		text: 'Group competition and Quizzes'
	},
	{
		id: 6,
		img: '/contentDesc_images/Icon 12.png',
		text: 'Female to Female with complete privacy'
	},
	{
		id: 7,
		img: '/contentDesc_images/Icon 13.png',
		text: 'Evaluating and reporting'
	},
	{
		id: 8,
		img: '/contentDesc_images/Icon 13.png',
		text: 'Certifications'
	}
];
const ArabicWaveFeatures = () => {
	return (
		<Container fluid>
			<div className="feature-div py-3 pb-5">
				<Container>
					<Row className="justify-content-center">
						<Col md={12} className="px-4 py-2 mb-4 bg-white" style={{ borderRadius: 30 }}>
							<div
								className="w-100 text-center fs-3"
								style={{ color: 'rgb(20, 68, 130)', fontWeight: 700 }}
							>
								<i>Arabic Wave's most features</i>
							</div>
						</Col>
					</Row>
					<Row className="justify-content-center">
						{featureImageArr.map((item, ind) => (
							<Col md={2} className="p-0 m-0">
								<FeatureImage key={ind} image={item.img} text={item.text} />
							</Col>
						))}
					</Row>
					<br />
					<br />
					<Row className="justify-content-center px-0 my-0">
						<Col md={5}>
							<h3 className="description-heading fs-3 text-center">
								The appropriate content description
							</h3>
							<hr style={{ position: 'relative', top: '-10px', marginBottom: 50 }} />
						</Col>
					</Row>
				</Container>
				<hr
					className="p-0 m-0 text-white"
					style={{ position: 'relative', zIndex: 999, top: '-50px', height: 5 }}
				/>

				<Container>
					<Row className="justify-content-center">
						<div className="d-flex">
							{contentDescription.map((item, ind) => (
								<FeatureImage key={ind} image={item.img} text={item.text} />
							))}
						</div>
					</Row>
				</Container>
			</div>
		</Container>
	);
};

export default ArabicWaveFeatures;
