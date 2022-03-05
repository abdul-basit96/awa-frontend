import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaPhoneAlt, FaInstagramSquare, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

import { BsYoutube } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import './styles.css';
const HeaderTop = () => {
	return (
		<Navbar expand="lg" className="navbar-top">
			{/*bg="#ffcc34" */}
			<Container fluid className="px-sm-5 mx-sm-3">
				<Navbar.Brand href="#">
					<div className="d-flex flex-column flex-xs-row flex-xxs-row align-items-center">
						<div className="icon">
							<FaPhoneAlt size={23} color="white" />
							<span className="ms-1 me-2 text-white">Call Us Office</span>
						</div>
						<div className="text-white">00000000</div>
					</div>
				</Navbar.Brand>
				<Navbar.Brand href="#">
					<div className="d-flex flex-column align-items-center">
						<div className="icon">
							<FaPhoneAlt size={23} color="white" />
							<span className="ms-1 me-2 text-white">Call UK Office</span>
						</div>
						<div className="text-white">00000000</div>
					</div>
				</Navbar.Brand>
				<Navbar.Brand href="#">
					<div className="d-flex flex-column align-items-center">
						<div className="icon">
							<MdOutlineEmail size={23} color="white" />
							<span className="ms-1 me-2 text-white">Email Us</span>
						</div>
						<div className="text-white">arabicwave@gmail.com</div>
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="ms-auto me-3 my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
						<Nav.Link href="#action1">
							<FaFacebook size={30} color="black" />
						</Nav.Link>
						<Nav.Link href="#action2">
							<FaInstagramSquare size={30} color="black" />
						</Nav.Link>
						<Nav.Link href="#action2">
							<BsYoutube size={30} color="black" />
						</Nav.Link>
						<Nav.Link href="#action2">
							<FaTwitter size={30} color="black" />
						</Nav.Link>
						<Nav.Link href="#action2">
							<FaLinkedin size={30} color="black" />
						</Nav.Link>
						{/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
					</Nav>
					{/* <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            
          </Form> */}
					<Button size="lg" className="btn-first text-black bg-white px-4 me-2">
						Join Class Now
					</Button>
					<Button size="lg" className="btn-second px-4">
						Your Free Trial Class
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default HeaderTop;
