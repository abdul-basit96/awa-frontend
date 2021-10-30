import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { scryRenderedComponentsWithType } from "react-dom/cjs/react-dom-test-utils.production.min";
import "./style.css";

const CarouselTop = (props) => {
  const [index, setIndex] = useState(0);
  const [active1, setActive1] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <Carousel fade className="carousel">
            {/*First Item */}
            <Carousel.Item interval={5000}>
              <img
                className="d-block w-100 image"
                src={`${process.env.PUBLIC_URL}/images/mosque-615415__480.png`}
                alt="First slide"
              />
              <Carousel.Caption className="caption d-none d-md-block">
                <h3 className="heading text-start animate__animated animate__flipInY animate_fast">
                  Basics of Quran & Arabic Language
                </h3>
                <Row>
                  <Col lg={7} md={7} sm={12}>
                    <p className="carousel-text mt-4 animate__animated  animate__backInRight  animate__slow ">
                      Learning a spoken Arabic course with Arabic Wave Academy
                      will let you learn the wider aspects of arabic language.
                    </p>
                  </Col>

                  <Col lg={5} md={5}>
                    <img
                      style={{ borderRadius: "20px" }}
                      className=" inner-image mt-4 animate__animated animate__rotateIn animate__delay-1s animate__slow img-fluid shadow-lg "
                      src={`${process.env.PUBLIC_URL}/images/abc.jpg`}
                    />
                  </Col>
                </Row>
                <br />
                <br />
                <Button
                  variant="primary"
                  size="lg"
                  className="button animate__animated animate__fadeInUp animate__slow hover-overlay hover-zoom hover-shadow ripple"
                >
                  <strong>Register now</strong>
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            {/*First Item */}

            {/* Second Item*/}
            <Carousel.Item interval={5000}>
              <img
                className="image2 d-block w-100 "
                src={`${process.env.PUBLIC_URL}/images/1114526.jpg`}
                alt="Second slide"
              />

              <Carousel.Caption className="caption d-none d-md-block">
                <h3 className="heading2">Basics of Tajweed ul Quran</h3>

                <Row>
                  <Col lg={6} md={6} sm={12} className="d-none d-md-block">
                    <p className="carousel-text2 mt-4 animate__animated  animate__backInLeft  animate__slow ">
                      The system of Arabic Wave Academy chooses Shahidi Qaida,
                      as a default Tajweed Qaida. But you are free to choose any
                      of the three.
                    </p>
                  </Col>
                  <Col lg={2} md={2}></Col>
                  <Col lg={4} md={4} sm={6} className="d-none d-md-block">
                    <img
                      className="img-fluid mt-4 animate__animated  animate__zoomIn animate__delay-2s animate__slow "
                      src={`${process.env.PUBLIC_URL}/images/158.webp`}
                    />
                  </Col>
                </Row>

                <br />
                <br />
                <Button
                  className="animate__animated animate__fadeInUp animate__slow font-weight-bold"
                  variant="primary"
                  size="lg"
                  style={{ fontWeight: "bolder" }}
                >
                  Test Your Tajweed Free
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            {/*Second Item */}

            {/*Third Item */}
            <Carousel.Item interval={5000}>
              <img
                className="image3 d-block w-100"
                src={`${process.env.PUBLIC_URL}/images/online-quran-classes-skype.jpg`}
                alt="Third slide"
              />
              <Carousel.Caption className="caption d-none d-md-block m-0 p-0">
                <Row className="mt-5">
                  <Col lg={4} md={4}>
                    <img
                      className="img-fluid bg-transparent shadow shadow-lg animate__animated animate__slow animate__fadeInLeftBig"
                      style={{ borderRadius: "20px" }}
                      src={`${process.env.PUBLIC_URL}/images/quran-qareem.jpg`}
                    />
                  </Col>
                  <Col lg={8} md={8}>
                    <div className="d-flex flex-column">
                      <div className="animate__animated animate__slow animate__fadeInRightBig">
                        <h3 className="heading3 fw-bolder">
                          We are very intent on our dicipline and curriculam
                        </h3>
                      </div>
                      <div className="heading3 p-3 mt-3 animate__animated animate__slow animate__fadeInRightBig animate__slower">
                        <h3 className="text fw-bolder">
                          And only concentrate on how we can give our best. We
                          do not endorse any particular sect on our platform.
                        </h3>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={3} md={3} className="mx-auto">
                    <div className="mt-5 animate__animated animate__slow animate__fadeInUp">
                      <Button
                        style={{ borderRadius: 15 }}
                        className=" button btn btn w-100 p-2 btn-lg text-white text-center fs-3 fw-bold"
                      >
                        Read More
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
            {/*Third Item */}

            {/* Fourth Item*/}
            <Carousel.Item interval={5000}>
              <img
                style={{ maxHeight: "600px" }}
                className="image3 img-fluid md-block w-100"
                src={`${process.env.PUBLIC_URL}/images/lighted-candle-holder-kuran-red-prayer-beads-wooden-desk.jpg`}
                alt="Third slide"
              />
              <Carousel.Caption className="caption d-none d-md-block m-0 p-0">
                <Row className="mt-5">
                  <Col lg={5} md={5}>
                    <img
                      className="img-fluid bg-transparent shadow shadow-lg animate__animated animate__slow animate__rollIn"
                      style={{ borderRadius: "20px" }}
                      src={`${process.env.PUBLIC_URL}/images/lighted-candle-holder-kuran-red-prayer-beads-wooden-desk.jpg`}
                    />
                  </Col>
                  <Col lg={7} md={7}>
                    <div className="animate__animated animate__slow animate__zoomInDown">
                      <h3 className="heading4 fw-bolder text-capitalize">
                        GENERAL STATS FOR TRAINERS, LEARNERS & CERTIFIED BY US
                      </h3>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col lg={6} md={6} className="mx-auto">
                    <div className="mt-5 animate__animated animate__slow animate__fadeInUp">
                      <Button
                        style={{ borderRadius: 15 }}
                        className="text-wrap w-100 p-2 btn btn-primary button text-white text-center fs-3 fw-bold"
                      >
                        Lets Schedule Free Trial Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default CarouselTop;
