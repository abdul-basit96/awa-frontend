import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsYoutube } from "react-icons/bs";
import { BiCalendarAlt } from "react-icons/bi";
const Header = (props) => {
  return (
    <Container fluid>
      <div className="p-3">
        <Row>
          <Col lg={5} md={5} sm={5}>
            <div className="d-flex justify-content-evenly">
              <div className="d-flex flex-column align-items-center">
                <div className="icon">
                  <FaPhoneAlt size={23} />
                  <span className="ms-1 me-2 text">Call Us Office</span>
                </div>
                <div className="text">00000000</div>
              </div>

              {/* ------------------ */}
              <div className="d-flex flex-column align-items-center">
                <div className="icon">
                  <FaPhoneAlt size={23} />
                  <span className="ms-1 me-2 text">Call Us Office</span>
                </div>
                <div className="text">00000000</div>
              </div>
              {/* ----------------------------- */}
              <div className="d-flex flex-column align-items-center">
                <div className="icon">
                  <MdOutlineEmail size={23} />
                  <span className="ms-1 me-2 text">Email Us</span>
                </div>
                <div className="text">arabicwave@gmail.com</div>
              </div>
            </div>
          </Col>
          <Col lg={1} md={1} sm={1}></Col>
          <Col
            lg={6}
            md={6}
            sm={6}
            className="d-flex align-items-center justify-content-end"
          >
            <div className="d-flex align-items-center justify-content-end p-0 me-0">
              <span className="me-3">
                <FaFacebook size={30} />
              </span>
              <span className="me-3">
                <FaInstagramSquare size={30} />
              </span>
              <span className="me-3">
                <BsYoutube size={30} />
              </span>
              <span className="me-3">
                <FaTwitter size={30} />
              </span>
              <span className="me-3">
                <FaLinkedin size={30} />
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-end ">
              <div className="button">
                <button className=" header-buttons1 ms-2">
                  Join Class Now
                </button>
              </div>
              <div className="button">
                <button className=" header-buttons2 ms-2">
                  <BiCalendarAlt size={25} /> Your Free Trial Class
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Header;
