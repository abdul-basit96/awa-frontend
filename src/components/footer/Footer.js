import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import './style.css';
const Footer = (props) => {
	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col lg={3} md={3} sm={3}>
					<div className="d-flex flex-column align-items-center py-3 px-4">
						<div className="heading-about-us text-center">
							<h1 className="heading">About Us</h1>
						</div>
						<div className="text-center my-3 fs-4">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type specimen book.
						</div>
					</div>
				</Col>
				<Col lg={3} md={3} sm={3}>
					<div className="d-flex flex-column align-items-center py-3 px-4">
						<div className="heading-about-us text-center">
							<h3 className="heading ">Important Links</h3>
						</div>
						<div className="text-center my-3">
							<ListGroup className="list" variant="flush">
								<ListGroup.Item className="border-0" style={{ fontWeight: 600 }}>
									Curriculum
								</ListGroup.Item>
								<ListGroup.Item className="border-0" style={{ fontWeight: 600 }}>
									Home
								</ListGroup.Item>
								<ListGroup.Item className="border-0" style={{ fontWeight: 600 }}>
									Contact Us
								</ListGroup.Item>
								<ListGroup.Item className="border-0" style={{ fontWeight: 600 }}>
									About Us
								</ListGroup.Item>
								<ListGroup.Item className="border-0" style={{ fontWeight: 600 }}>
									Our Teachers
								</ListGroup.Item>
								<ListGroup.Item className="border-0" style={{ fontWeight: 600 }}>
									Blogs
								</ListGroup.Item>
								<ListGroup.Item className="border-0" style={{ fontWeight: 600 }}>
									Price & Plans
								</ListGroup.Item>
							</ListGroup>
						</div>
					</div>
				</Col>
				<Col lg={3} md={3} sm={3}>
					<div className="d-flex flex-column py-3 justify-space-between">
						<div className="heading-about-us text-center">
							<h1 className="heading">Download the App</h1>
						</div>
						<div className="image">
							<img className="img-fluid px-5" src="/images/google-app.png" alt="" />
						</div>
						<div className="safe text-center px-3">
							<h4>We are using safe payment</h4>
						</div>
					</div>
					<div>
						<img className="img-fluid" src="/images/payment.png" alt="" />
					</div>
				</Col>
			</Row>
			<Row className="py-4 mt-5 bg-dark text-white px-1">
				<Col md={1} />
				<Col md={6}>
					<div style={{ fontWeight: 600 }}>
						<i>Copyright Novazone Consulting Services LLP icon 2021. All Right Reserved</i>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
