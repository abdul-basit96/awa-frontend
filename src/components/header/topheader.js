import React from "react";
import { Container } from "react-bootstrap";

const TopHeader = () => {
  return (
    <div className=" tophead ">
      <Container>
        <div className="row d-flex">
          <div className="col-md-6">
            <div className="d-flex m-2">
              <div className="contact d-flex">
                <i
                  className="fas fa-phone-volume ms-2"
                  style={{ fontSize: "2.7em" }}
                ></i>
                <div className="ms-2">
                  <h5>Call US Office</h5>
                  <p>+1-551-333-1082</p>
                </div>
              </div>
              <div className="contact ms-4 d-flex">
                <i
                  className="fas fa-tty me-6 icon "
                  style={{ fontSize: "2.7em" }}
                ></i>
                <div className="ms-2">
                  <h5>Call US Office</h5>
                  <p>+1-551-333-1082</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex top-righ-head justify-content-end me-5">
              <div className="icons">
                <i
                  className="fab fa-twitter me-2"
                  style={{ fontSize: "1.1em" }}
                ></i>
                <i
                  className="fab fa-facebook me-2"
                  style={{ fontSize: "1.1em" }}
                ></i>
                <i
                  className="fab fa-instagram me-2"
                  style={{ fontSize: "1.1em" }}
                ></i>
                <i
                  className="fab fa-youtube me-2"
                  style={{ fontSize: "1.1em" }}
                ></i>
                <i
                  className="fab fa-pinterest me-2"
                  style={{ fontSize: "1.1em" }}
                ></i>
                <i
                  className="fab fa-linkedin-in me-2"
                  style={{ fontSize: "1.1em" }}
                ></i>
              </div>
              <div>
                <button type="button" className="btn btn-light btn-sm me-2">
                  LOGIN
                </button>
                <button type="button" className="btn btn-light btn-sm">
                  BOOK A FREE TRIAL
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TopHeader;
