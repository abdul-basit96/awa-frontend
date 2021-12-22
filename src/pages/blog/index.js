import React from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/common/footer/Footer";
import { Card } from "react-bootstrap";

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-9"></div>
          <div className="col-lg-3">
            <div>
              <h4 className="fw-bold text-center" style={{ color: "#b5651d" }}>
                Courses we offer:
              </h4>
            </div>
            <Card className="flex flex-row jss30">
              <Card.Img
                className="courseimg"
                variant="left"
                src="https://www.quranhost.com/wp-content/uploads/2019/03/noorani-qaidaa-1-105x105.jpg"
              />
              <div>
                <Card.Title
                  className="m-4 fw-bold text-center"
                  style={{ fontSize: "14px" }}
                >
                  Qaida Noorania Online
                </Card.Title>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
