import React, { Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/header";
import { BsChevronRight } from "react-icons/bs";
import "./styles.css";
import FreeClass from "../../../components/freeclass";
import LowerCources from "../../../components/lowerCources";
import ReconnetKids from "../../../components/reconnect-kids";
import Footer from "../../../components/common/footer/Footer";

const OnlineQuranReading = () => {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <Container>
        <Row className="mx-2 align-items-center">
          <Col lg={6} md={6} sm={6}>
            <div className="online-quran-heading">
              <h3 className="fw-bolder primary-heading">
                Online Quran Reading
              </h3>
            </div>
            <div className="learn-reading">
              <h3 className="fw-bold fs-4">
                Learn Quran Reading with Qualified Teacher
              </h3>
            </div>
            <div className="paragraph">
              <p>
                This course provides you with a great opportunity to learn how
                to read the Holy Quran with correct pronunciation and rules of
                Tajweed. Anyone who has completed the{" "}
                <a href="#">Online Qaida Course</a> can start this course to
                learn to read the Quran in Arabic properly.
              </p>

              <p className="paragraph">
                In this course, the teacher will help you to correct the
                mistakes while reciting the Holy Quran and improve your skills
                to recite the Holy Quran with tarteel fluently and accurately.
              </p>

              <p className="paragraph">
                QuranHost has <a href="#">qualified Quran teachers</a> for
                beginners and advanced-level students of all ages. All our
                teachers are fluent in Arabic and English languages at the same
                time.
              </p>
              <p>
                It is very important for kids to{" "}
                <a href="#">start learning Quran</a> at an early age. At this
                stage, they can improve their pronunciation skills very fast and
                easily. Kids are very energetic and they can learn fast and
                ingest values before stepping out of their home.
              </p>
            </div>
            <div className="outline mb-3">
              <h3 className="fw-bold">Course Outline</h3>
            </div>
            <div className="course-cotent ">
              <p className="paragraph ">
                On the successful completion of this course, you will be able to
                read the Holy Quran without any mistakes. Moreover, you will
                also learn the followings during this course:
              </p>
            </div>
            <div className="content-list">
              <ul style={{ listStyle: "none" }}>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>Important Rules of Tajweed.</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>Six elements of Iman (Faith)</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>Five pillars of Islam</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>How to perform wudhu (ablution)</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>How to offer five times prayers</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>Six Kalmas and Azan (call for prayer).</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>Memorization of daily Sunnah Duas</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>Memorization of the last ten Suras from the Quran.</i>
                </li>
                <li>
                  <BsChevronRight
                    size={12}
                    className="me-3"
                    style={{ color: "#777" }}
                  />
                  <i>Islamic Etiquettes</i>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className="right-image">
              <img
                className="img-fluid mx-3 shadow shadow-md shadow-secondary rounded"
                src="https://www.quranhost.com/wp-content/uploads/2019/03/Readd-Quran-online.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="background">
          <div className="get-free-class py-1">
            <FreeClass />
          </div>
        </div>
        <div
          className="free-trial-button"
          style={{
            backgroundImage:
              "url('https://www.quranhost.com/wp-content/uploads/2019/05/read-quran-new-image-bg.jpg?id=2774')",
          }}
        >
          <div className="d-flex flex-column align-items-center">
            <div className="heading-trial">
              <h3 className="text-center pt-5 mb-3 text-white fs-1 fw-bold">
                Learn How to Read Quran Online with proper pronunciation
              </h3>
            </div>
            <div className="heading-trial-2">
              <h3 className="text-center text-white fs-5 fw-bold">
                Start FREE Trials today with The Best Online Quran Teachers
              </h3>
            </div>
            <div className="heading-trial-2">
              <Button
                variant="none"
                className="mb-5 trial-button text-white px-4 py-2 mt-3 rounded border border-1"
              >
                START FREE TRAIL
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {/* How to start this course */}
      <Container>
        <Row className="align-items-center mt-5">
          <Col lg={6} md={6} sm={6} className="p-5">
            <div className="how-to-start ">
              <h3 className="fs-5 fw-bold">How to Start This Course?</h3>
              <div className="d-flex ">
                <div>
                  <BsChevronRight
                    size={10}
                    className="me-3 mt-2"
                    style={{ color: "#777" }}
                  />
                </div>
                <div>
                  <p className="paragraph mt-2">
                    Fill out the <a href="">Registration Form</a> and we will
                    contact you for three days free trial classes. After the
                    free trial classes, you can start regular classes to learn
                    Reading Quran Online.
                  </p>
                </div>
              </div>
            </div>
            <div className="quran-reading">
              <h3 className="fw-bold fs-5">
                Quran Reading - The Best Gift to Your Kids
              </h3>
              <div className="d-flex">
                <p className="paragraph mt-2">
                  As a Muslim, the best gift you can give your kids is to teach
                  them How to Read the Holy Quran with Tajweed and the Quran
                  will give them all they need.
                </p>
              </div>
              <p className="paragraph mt-2">
                Let's <a href="">Learn Quran Online</a> with our
                <a href=""> best Online Quran Teacher</a> at home.
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className="p-5">
            <div>
              <img
                className="img-fluid shadow shadow-md shadow-primary rounded"
                src="https://www.quranhost.com/wp-content/uploads/2019/03/learn-to-read-quran.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
        {/* How to start this course */}
      </Container>
      <LowerCources />
      <ReconnetKids heading="Reconnect your kids with Quran" />
      <Footer />
    </React.Fragment>
  );
};

export default OnlineQuranReading;
