import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/header";
import "./styles.css";

const NooraniQaidaCourse = () => {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <Container>
        <Row className="mx-2">
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
                  <i>Important Rules of Tajweed.</i>
                </li>
              </ul>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NooraniQaidaCourse;
