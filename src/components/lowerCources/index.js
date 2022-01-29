import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./styles.css";
const LowerCources = () => {
  return (
    <div className="lower-cources border border-top-1 ">
      <Container>
        <div className="cources-heading text-center mt-5 mb-5">
          <h3
            className="fw-bold"
            style={{ fontSize: "30px", color: "#B5651D" }}
          >
            Cources we offer
          </h3>
        </div>
        <Row className="mx-5 px-5 mb-5">
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card className="course-card" style={{ width: "16rem" }}>
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                  data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text className="text-center fw-bold">
                    Qaida Noorania Online
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card className="course-card" style={{ width: "16rem" }}>
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/tafseer-ul-quraan-1.jpg"
                  data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text className=" text-center fw-bold">
                    Online Quran Reading
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card className="course-card" style={{ width: "16rem" }}>
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/Online-Quran-with-Tajweed-1.jpg"
                  data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text
                    className="fw-bold text-center"
                    style={{ fontSize: 16 }}
                  >
                    Reading Quran with Tajweed
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card className="course-card" style={{ width: "16rem" }}>
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/Memorizing-Quran-Online.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text className="fw-bold text-center">
                    Quran Memorization Online
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="mx-5 px-5 pb-5">
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card className="course-card" style={{ width: "16rem" }}>
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/tajweed-course.jpg"
                  data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text className="text-center fw-bold">
                    Advance Tajweed Course
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card
                className="course-card"
                className="course-card"
                style={{ width: "16rem" }}
              >
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/learning-arabicc-1.jpg"
                  data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text className=" text-center fw-bold">
                    Basic Islamic Teaching
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card className="course-card" style={{ width: "16rem" }}>
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/quranic-arabic-online.jpg"
                  data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text
                    className="fw-bold text-center"
                    style={{ fontSize: 16 }}
                  >
                    Arabic Language Online
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={3} md={3} sm={3} className="px-auto">
            <div className="image-card">
              <Card className="course-card" style={{ width: "16rem" }}>
                <Card.Img
                  variant="center"
                  src="https://www.quranhost.com/wp-content/uploads/2019/03/Arabic-Language-Online.jpg"
                  data-wood-src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1.jpg"
                />
                <Card.Body className="cardbody">
                  <Card.Text className="fw-bold text-center">
                    Quranic Arabic Online
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LowerCources;
