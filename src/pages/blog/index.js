import React from "react";
import "./style.css";
import Header from "../../components/header";
import Footer from "../../components/common/footer/Footer";
import { Card } from "react-bootstrap";
import { BsChatLeft, BsShare } from "react-icons/bs";

const BlogPage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="d-flex">
              <div className="jss35">
                <div className="top-left m-2">
                  <div className="text-center" style={{ background: "white" }}>
                    <h5>21</h5>
                    <span>DEC</span>
                  </div>
                </div>
                <img
                  className="jss34 "
                  src="https://www.quranhost.com/wp-content/uploads/2021/12/basic-quran-learning-course-online-1024x682.jpg"
                />
              </div>
              <div className="jss31 mt-3 shadow">
                <div className="jss32 text-center fw-bold text-light">
                  <span style={{ fontSize: "10px" }}>
                    LEARN QURAN ONLINE, LEARN QURAN ONLINE WITH TAJWEED,
                  </span>
                </div>
                <h3 className="text-center mt-1">
                  Learn Quran for Beginner | Best Quran Classes for Beginners
                </h3>
                <div className="text-center">
                  <BsChatLeft className="m-2" />
                  <BsShare />
                </div>
                <div className="mx-2 text-center">
                  <p>
                    Study at your pace, on your schedule, and free of extra
                    cost! Worried that being a beginner How are you going to get
                    the Grasp of Th...
                  </p>
                </div>
                <div className="text-center fw-bold jss33">
                  <a style={{ textDecoration: "none", color: "#6dbb0f" }}>
                    CONTINUE READING...
                  </a>
                </div>
              </div>
            </div>
          </div>
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
