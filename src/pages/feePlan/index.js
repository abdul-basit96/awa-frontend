import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Header from "../../components/header";
import { BsChevronRight } from "react-icons/bs";
import "./styles.css";
import Footer from "../../components/common/footer/Footer";
const FeePlan = () => {
  return (
    <div className="mb-3">
      <Header />
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="monthly-package-header mt-2 text-center">
            <h3 className="fw-bolder fs-2 primary-text1">
              Monthly Packages for Online Quran and Arabic Classes
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="monthly-package-header mt-4 text-center">
            <h3 className=" free-trial-heading">
              <a href="#" className="text-decoration-none">
                Click here to get your 3-days, FREE Trial Classes
              </a>
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="monthly-package-header mt-4 text-center">
            <h3 className="select-monthly primary-text2">
              Select a Monthly Plan and Get Registered Now
            </h3>
          </div>
        </Col>
      </Row>

      <hr />
      <div className="d-flex justify-content-center mt-5 mb-5">
        <h1>Cards here</h1>
      </div>
      <hr />
      {/* Discount and Customized Plans */}
      <Container>
        <div className="d-flex flex-row text-white m-4 mb-5">
          <div className="discounts w-50 pb-3 me-2">
            <div className="discount-heading  ms-3 mt-4">
              <h3 className="discount-text pb-2">Discounts</h3>
            </div>
            <div className="list mt-4 ms-3">
              <ul>
                <li style={{ fontSize: 16 }}>
                  <BsChevronRight size="0.8rem" style={{ marginRight: 5 }} />
                  <span style={{ fontWeight: 600 }}>Family Package:</span> 15%
                  Discount for Families.
                </li>
                <li>
                  <BsChevronRight size="0.8rem" style={{ marginRight: 5 }} />
                  <span style={{ fontWeight: 600 }}>Low-income Families: </span>
                  10% Discount for those who can’t afford the full fee
                </li>
              </ul>
            </div>
          </div>

          <div className="customize-plan ms-2 w-50 pb-3">
            <div className="cutomize-plan-heading  ms-3 mt-4 ">
              <h3 className="cutomize-text pb-2">Customized Plan</h3>
            </div>
            <div className="list mt-4 ms-3">
              <ul>
                <li className="pe-3" style={{ fontSize: 16 }}>
                  <span style={{ fontWeight: 600 }}>Pay Per Class:</span> If you
                  don’t want to take a monthly plan, Pay $5 Per Class (30
                  Minutes)
                </li>
                <li>
                  <span style={{ fontWeight: 600 }}>Customized Plan: </span>
                  Contact us if you need a customized plan for your kids to meet
                  your needs
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* -----------------Key Features------------------- */}
        <div className="key-features mt-5 d-flex justify-content-center">
          <h3 className="primary-text3">Key Features of Monthly Packages:</h3>
        </div>
        {/* First Key Feature Cart */}
        <div className="d-flex mt-3 mx-4 justify-content-center">
          <div className="key-feature-1 pe-2 pt-4 ps-3 me-2">
            <ul style={{ padding: 0 }}>
              <li>
                <span style={{ float: "left" }}>
                  <BsChevronRight size="0.8rem" />
                </span>
                <p style={{ paddingLeft: 25, marginBottom: 10 }}>
                  Eid Holidays are included in the monthly fees of the students
                  and there is no refund for that.
                </p>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  <BsChevronRight size="0.8rem" />
                </span>
                <p style={{ paddingLeft: 25, marginBottom: 10 }}>
                  There is no refund for missed classes during a month; however,
                  you can take make-up classes for those days.
                </p>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  <BsChevronRight size="0.8rem" />
                </span>
                <p style={{ paddingLeft: 25, marginBottom: 10 }}>
                  We recommend One on One Classes for kids, but if the parents
                  can’t afford it, more than one child can share the classes
                  also without any extra payment.
                </p>
              </li>
            </ul>
          </div>
          {/* Second Key Feature Card */}
          <div className="key-feature-2 pe-4 pt-4 ps-3 ms-2">
            <ul style={{ padding: 0 }}>
              <li>
                <span style={{ float: "left" }}>
                  <BsChevronRight size="0.8rem" />
                </span>
                <p style={{ paddingLeft: 25, marginBottom: 10 }}>
                  All packages for Quran Classes are time-based, not
                  courses-based.
                </p>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  <BsChevronRight size="0.8rem" />
                </span>
                <p style={{ paddingLeft: 25, marginBottom: 10 }}>
                  Payment is charged after the Free Trials in advance, on a
                  monthly basis.
                </p>
              </li>
              <li>
                <span style={{ float: "left" }}>
                  <BsChevronRight size="0.8rem" />
                </span>
                <p
                  style={{
                    paddingLeft: 25,
                    marginBottom: 10,
                    fontSize: "16px",
                  }}
                >
                  If a student misses some classes during the month, still he or
                  she has to pay for that day, but he/she can take make-up
                  classes for those days.
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* ----------Key Features------------------- */}

        {/* Payment methods */}
        <div className="d-flex flex-column mt-5 mb-5 align-items-center">
          <div className="payment-heading primary-text2 text-center">
            <h3>Payment Methods</h3>
          </div>
          <div className="payment mt-2 text-center">
            <h3>
              PayPal, All Credit / Debit Cards, Western Union or Bank Transfer
            </h3>
          </div>
        </div>
      </Container>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FeePlan;
