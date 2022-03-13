import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import {
  FaPhoneAlt,
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { BsYoutube } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
const HeaderBottom = () => {
  return (
    <Container fluid>
      <Navbar bg="light" variant="light">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home">
            <img
              width={170}
              src="/images/logo-image.png"
              className="img-fluid"
            />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              className="px-3 fw-bold border-primary border-right"
              href="#home"
            >
              Home
            </Nav.Link>
            <Nav.Link className="px-3 fw-bold" href="#features">
              Curriculum
            </Nav.Link>
            <Nav.Link className="px-3 fw-bold" href="#pricing">
              Our Teachers
            </Nav.Link>
            <Nav.Link className="px-3 fw-bold" href="#pricing">
              Blogs
            </Nav.Link>
            <Nav.Link className="px-3 fw-bold" href="#pricing">
              About Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default HeaderBottom;
