import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CourseCard from "../common/card/CourseCard";
import "./styles.css";

const CourseSection = () => {
  const [totalCards, settotalCards] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <Container>
      <div className="heading">
        <h3>Online Quran and Arabic Cources</h3>
      </div>
      <Row>
        {totalCards.map((_item) => (
          <Col lg={4} md={4} sm={4}>
            <CourseCard />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseSection;
