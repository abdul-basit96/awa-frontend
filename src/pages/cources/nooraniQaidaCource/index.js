import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FreeClass from "../../../components/freeclass";
import Header from "../../../components/header";
import ReconnetKids from "../../../components/reconnect-kids";
import "./styles.css";

const NooraniQaidaCourse = () => {
  const [bgc, setBgc] = useState(false);
  const [bgc2, setBgc2] = useState(false);
  const [bgc3, setBgc3] = useState(false);
  return (
    <>
      <Header />
      <Container>
        <Row className="align-items-center p-3">
          <Col lg={6} md={6} sm={6}>
            <div className="left-content">
              <h3>Learn Noorani Qaida Online</h3>
              <p className="paragraph">
                <span
                  className="paragraph"
                  style={{ fontWeight: 700, color: "#777" }}
                >
                  Qaida Noorania Online
                </span>{" "}
                or Noorani Qaida Online is a basic course for all who want to
                learn to read Quran from the very beginning. This short course
                has all the important lessons for the correct recitation of the
                Holy Quran. Noorani Qaida Course starts with the Arabic Alphabet
                and gradually leads the student from individual letters to
                joined letters, Arabic words, sentences, and the rules of
                Tajweed. Book your <a href="">FREE Trials Classes</a> for this
                course to see how does it work and how our expert tutors teach
                Qaida to kids with patience friendly.
              </p>
              <p className="paragraph">
                This Online Noorani Qaida Course improves the Quran recitation
                skills of children very fast. In a short time, your kids will be
                able to <a href="">read Quran in Arabic</a> fluently without
                mistakes. Noorani Qaida is considered a basic part of learning
                the Quran with Tajweed around the world. Because this Qaida
                comprises all the essential rules of Quran recitation and
                Tajweed. Once a student learns Noorani Qaida with the{" "}
                <a href="">Online Quran Tutors</a> then, he faces no hurdles in
                reciting Quran with Tajweed.{" "}
              </p>
              <p className="paragraph">
                We have designed ready-made lessons for students of all age
                groups to learn Qaida easily in a very short time. On the
                completion of this short online course, your kids will read
                Quran with Tajweed very fluently. We have male and{" "}
                <a href="">female Online teachers</a> for kids and adults. Get
                Registered or Book your FREE Trials and enjoy Online Classes
                with expert online.
              </p>
              <h3 className="second-heading">
                Course Outline of Online Noorani Qaida Course
              </h3>
              <ol className="order-list">
                <li>
                  <i>Arabic Alphabet & their Proper Pronunciation</i>
                </li>
                <li>
                  <i>Letter Recognition</i>
                </li>
                <li>
                  <i>Letter Positions</i>
                </li>
                <li>
                  <i>Connecting Letters</i>
                </li>
                <li>
                  <i>Short Vowels (Harakat)</i>
                </li>
                <li>
                  <i>Long Vowels (Huroof Maddah)</i>
                </li>
                <li>
                  <i>Sukoon</i>
                </li>
                <li>
                  <i>Tanween</i>
                </li>
                <li>
                  <i>Letters of Leen</i>
                </li>
                <li>
                  <i>Rules of Noon Sakinah & Tanween</i>
                </li>
                <li>
                  <i>Rules of Raa</i>
                </li>
                <li>
                  <i>Rules of Laam</i>
                </li>
                <li>
                  <i>Noon Qutni</i>
                </li>
                <li>
                  <i>Waqf (Proper Pausing and Stopping) </i>
                </li>
              </ol>
              <p className="paragraph">
                Let’s start the blessed journey towards the beautiful recitation
                of the Quran with Noorani Qaida online. We have well-trained and
                experienced teachers for kids and beginners. We also offer some
                other Qaida courses like Noor-ul-Bayan, Iqra Qaida, and Qaida
                Baghdadi
              </p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className="image p-3">
              <img
                className="img-fluid shadow shadow-md shadow-primary rounded"
                src="https://www.quranhost.com/wp-content/uploads/2019/09/1234.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
        <FreeClass />
      </Container>
      <Container fluid>
        <div className="lowerContainer bg-secondary pt-2 m-0">
          <Container className="mt-5">
            <Row className="text-center bg-white mt-5">
              <Col
                lg={6}
                md={6}
                sm={6}
                onMouseHover={() => setBgc(true)}
                onMouseLeave={() => setBgc(false)}
              >
                <div className="d-flex flex-column align-items-center mt-5">
                  <div
                    className={
                      bgc
                        ? "box-icon bg-primary d-flex align-center"
                        : "box-icon bg-light d-flex align-center"
                    }
                  >
                    <img
                      className={"img-fluid align-center p-3"}
                      src="https://www.quranhost.com/wp-content/uploads/2019/03/age-limit-icon.png"
                      alt=""
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default NooraniQaidaCourse;
