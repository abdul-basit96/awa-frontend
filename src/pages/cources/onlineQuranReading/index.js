import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/header";
import { BsChevronRight } from "react-icons/bs";
import "./styles.css";

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
    </React.Fragment>
  );
};

export default OnlineQuranReading;
