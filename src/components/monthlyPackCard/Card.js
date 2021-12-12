import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./styles.css";

const Card = (props) => {
  const { _item } = props;
  const [hoverShadow, setHoverShadow] = useState(false);

  return (
    <div
      onMouseLeave={() => setHoverShadow(false)}
      onMouseOver={() => setHoverShadow(true)}
      style={{
        borderRadius: 0,
        marginTop: hoverShadow ? -10 : "",
        transition: "0.3s",
      }}
    >
      <div className="topHeading text-center mb-4">
        <h5 className="fw-bold fs-5 text-uppercase">{_item.days} Days/Week</h5>
      </div>
      <div>
        <div
          className={hoverShadow ? "card shadow shadow-sm" : "card "}
          style={{
            width: "18rem",
          }}
        >
          <div
            className="card-body pt-2 text-center"
            style={{ backgroundColor: _item?.color, color: "#fff" }} //prop of style here
          >
            <h5 className="card-title fs-1 fw-bolder">
              <span className="fs-3 fw-normal ">$</span>
              {_item.bigPrice}
            </h5>
            <p className="card-text">Per Month</p>
          </div>
          <ul className="list-group list-group-flush">
            <li
              className="list-group-item text-center mx-4 mt-3  pb-3 fw-bolder"
              style={{ color: _item.color }}
            >
              £{_item?.price}/Month
            </li>
            <li
              className="list-group-item text-center mx-4 p-3"
              style={{ color: "#777" }}
            >
              30 Minutes/Live Session
            </li>
            <li
              className="list-group-item text-center mx-4 p-3"
              style={{ color: "#777" }}
            >
              8 Classes/Month
            </li>
          </ul>
          <div className="card-body text-center">
            <a
              href="#"
              className="card-link mty btn px-4 btn-md text-decoration-none text-white"
              style={{ backgroundColor: _item?.color, fontWeight: 600 }}
            >
              Enrol Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
