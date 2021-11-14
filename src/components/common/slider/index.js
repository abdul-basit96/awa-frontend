import React, { Component } from "react";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Row } from "react-bootstrap";

const MySlider = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    dots: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickPlay: true,
    adaptiveHeight: true,
  };
  return (
    <div className="container-fluid mt-5">
      <Slider {...settings}>
        <div className="mb-3 mt-5">
          <Row>
            <Col lg={10} md={10}>
              <h2 className="mb-3">
                Live 1:1 Online Coding Classes for Kids in Grade 1- 12
              </h2>
              <h3 className=" text-justify mt-3">
                Empower your kids with the joy of building their own apps, games
                and even companies. The worlds leading tech curriculum for kids
              </h3>
              <br />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} className="mx-auto">
              <button
                className="btn btn-lg border border-0 fw-bolder mt-3"
                style={{
                  color: "white",
                  backgroundColor: "#FF8600",
                  padding: "0px 55px",
                  height: "50px",
                }}
              >
                Signup as a Teacher
              </button>
            </Col>
          </Row>
        </div>
        <div className="mb-3 mt-5">
          <Row>
            <Col lg={10} md={10} className="mx-auto">
              <h2 className="mb-3">
                Live 1:1 Online Coding Classes for Kids in Grade 1- 12
              </h2>
              <h3 className="text-justify mt-3">
                Empower your kids with the joy of building their own apps, games
                and even companies. The worlds leading tech curriculum for kids
              </h3>
              <br />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} className="mx-auto">
              <button
                className="btn btn-lg border border-0 fw-bolder mt-3"
                style={{
                  color: "white",
                  backgroundColor: "#FF8600",
                  padding: "0px 55px",
                  height: "50px",
                }}
              >
                Signup as a Student
              </button>
            </Col>
          </Row>
        </div>
        <div className="mb-3 mt-5">
          <Row>
            <Col lg={10} md={10} className="">
              <h2 className="mb-3">
                Live 1:1 Online Coding Classes for Kids in Grade 1- 12
              </h2>
              <h3 className="text-justify">
                Empower your kids with the joy of building their own apps, games
                and even companies. The worlds leading tech curriculum for kids
              </h3>
              <br />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} className="mx-auto">
              <button
                className="btn btn-lg border border-0 fw-bolder mt-3"
                style={{
                  color: "white",
                  backgroundColor: "#FF8600",
                  padding: "0px 55px",
                  height: "50px",
                }}
              >
                Test your Tajweed
              </button>
            </Col>
          </Row>
        </div>
      </Slider>
    </div>
  );
};
export default MySlider;
