import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/header";

const NooraniQaidaCource = () => {
  return (
    <React.Fragment>
      <Header />
      <hr />
      <Container>
        <Row>
          <Col lg={6} md={6} sm={6}>
            <div className="online-quran-heading">
              <h1 className="fw-bolder primary-heading">
                Online Quran Reading
              </h1>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NooraniQaidaCource;
