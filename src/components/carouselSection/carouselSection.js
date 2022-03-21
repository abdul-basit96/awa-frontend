import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import './styles.css';
const CarouselSection = () => {
	return (
		<React.Fragment>
			<Container fluid>
				<Row className="justify-content-center align-items-center">
					{/* Carousel here */}
					<Col md={6}>
						<Carousel className="text-center my-3">
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="http://www.icelandprocruises.co.uk/media/img/gallery/home/0002-gallery-iceland-waterfall-1.jpg"
									alt="First slide"
								/>
								<Carousel.Caption>
									{/* <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
									<button className="btn btn-md slider-button mb-3 px-4">Book Your Free Trial</button>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QklxMXu7RTQJ57Srm7_4Nv5ZSc1WK1Q01Gw-5yWhU_All5M5MQBKBuJgRaMNsGdoQyc&usqp=CAU"
									alt="Second slide"
								/>

								<Carousel.Caption>
									{/* <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p> */}
									<button className="btn btn-md slider-button mb-2 px-4">Book Your Free Trial</button>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
									alt="Third slide"
								/>

								<Carousel.Caption>
									{/* <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p> */}
									<button className="btn btn-md slider-button mb-2 px-4">Book Your Free Trial</button>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</Col>
					{/* Kid image here */}
					<Col md={6}>
						<img src="/images/whole_scene.png" className="img-fluid" />
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

export default CarouselSection;
