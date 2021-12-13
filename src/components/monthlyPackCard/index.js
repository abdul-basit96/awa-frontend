import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "./Card";
const cardProps = [
  {
    id: 1,
    color: "#FAA831",
    bigPrice: 40,
    price: 30,
    classesPerMonth: 8,
    days: 2,
  },
  {
    id: 2,
    color: "#89BE47",
    bigPrice: 50,
    price: 38,
    classesPerMonth: 12,
    days: 3,
  },
  {
    id: 3,
    color: "#0096D8",
    bigPrice: 65,
    price: 40,
    classesPerMonth: 16,
    days: 4,
  },
  {
    id: 4,
    color: "#F47D35",
    bigPrice: 75,
    price: 50,
    classesPerMonth: 20,
    days: 5,
  },
];
const MonthlyPackages = () => {
  return (
    <Container fluid>
      <Container className="mt-5 mb-5" style={{ padding: "0px 60px" }}>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="d-flex justify-content-center">
              <h3 className="fw-bold fs-2">Monthly Packages</h3>
            </div>
          </Col>
        </Row>
        <Row>
          {cardProps?.map((item) => (
            <Col lg={3} md={3} sm={3} className="mt-5 ">
              <Card key={item.id} _item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
    </Container>
  );
};

export default MonthlyPackages;
