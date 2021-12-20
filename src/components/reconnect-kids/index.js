import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css";

function ReconnetKids(props) {
  return (
    <Container fluid>
      <div className="bgImg">
        <Container>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-left text-light">
              <div>
                <img
                  style={{ width: 75, marginRight: 10, marginTop: 5 }}
                  src="https://www.svgrepo.com/show/4294/quran-book.svg"
                  alt=""
                />
              </div>
              <div className="">
                <h4 className="info-box-content">
                  {props.heading
                    ? props.heading
                    : "Learn Quran Online with Egyptian Quran Teachers"}
                </h4>
                {props.heading && (
                  <p>
                    Start One Week Free Classes today with the Best Online Quran
                    Tutors.
                  </p>
                )}
              </div>
            </div>
            <div className="btnkid1">
              <button className="btnkids m-3">
                <span className="text-light fw-bold">
                  GET 3 DAY FREE CLASSES
                </span>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
}

export default ReconnetKids;
