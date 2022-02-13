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
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
};

export default HeaderBottom;
