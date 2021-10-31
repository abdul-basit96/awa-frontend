import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const icons = [
  "fab fa-facebook",
  "fab fa-instagram",
  "fab fa-twitter",
  "fab fa-google-plus",
];
const index = () => {
  return (
    <Container fluid>
      <section className="footer">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-11">
              <div className="row">
                <div className="col-lg-4">
                  <h5 className="fas fa-graduation-cap">Wave Academy</h5>
                  <p>
                    Edubin perfect for online courses and other institutes. It’s
                    a complete solution with lms features and functionalities.
                  </p>
                </div>
                <div className="col-lg-4 mx-auto me-3">
                  <h5>Contact Us</h5>
                  <p>
                    <i className="fas fa-home me-3">New York,NY 10012,US</i>
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3">Info@example.com</i>
                  </p>
                  <p>
                    <i className="fas fa-phone me-3">+1456789021</i>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 py-5">
                  <h5>You can also find us on</h5>
                  <span>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <span>
                    <i className="fab fa-instagram"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                  <span>
                    <i className="fab fa-google-plus"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="text-center">© 2021 Pixelcurve. All rights reserved.</p>
        </div>
      </section>
    </Container>
  );
};

export default index;
