import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

export default function Facilities() {
  return (
    <Container fluid>
      <section id="learn" className="">
        <div
          className="container-fluid"
          style={{ backgroundImage: `url(/images/mos.jpg)` }}
        >
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="video-button d-flex justify-content-center">
                <i class="fas fa-play"></i>
              </div>
            </div>
            <div className="col-md-6 p-5 text-white text-div">
              <h2 className="px-5 mt-2">Our Facilities</h2>
              <div className="row mb-5 mt-5">
                <div className="col-md-2 pt-2">
                  <img
                    className="img-fluid"
                    src="https://arabicwave.com/wp-content/uploads/2019/08/055-contract-11-100x100.png"
                  />
                </div>
                <div className="col-md-8">
                  <h3>Certificates</h3>
                  <p>
                    Certifications- After the course, we also provide an
                    authentic certificate from Arabic Wave Academy to every
                    candidate
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-2">
                  <img
                    className="img-fluid"
                    src="https://arabicwave.com/wp-content/uploads/2019/08/015-answer-100x100.png"
                  />
                </div>
                <div className="col-md-8">
                  <h3>Alumni Supports</h3>
                  <p>
                    If You Still Have Some Queries Feel free to ask the help
                    center of Arabic Wave Academy
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img
                    className="img-fluid mt-4"
                    src="https://arabicwave.com/wp-content/uploads/2019/08/034-ebook-100x100.png"
                  />
                </div>
                <div className="col-md-8">
                  <h3>Schedule Plan</h3>
                  <p>
                    Arabic Wave Academy team realizes that not everyone is
                    familiar with their level of tajweed and Arabic required for
                    the Quran.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <a href="" className="btn btn-primary fw-bold mt-3">
                  Join Free Trail className
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
