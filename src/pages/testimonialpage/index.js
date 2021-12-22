import React from "react";
import Headers from "../../components/header";
import Footer from "../../components/common/footer/Footer";
import "./styles.css";
import { Carousel } from "react-bootstrap";
function TestimonialPage() {
  return (
    <>
      <Headers />
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-lg m-auto text-center">
            <h1 style={{ color: "chocolate" }}>Testimonials</h1>
            <p className="fw-bold">What Parents and Students say about us </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg d-flex">
            <div className="col-lg-2 m-2">
              <img
                className="avatar1"
                src="https://www.quranhost.com/wp-content/uploads/2019/04/avatar_female-imgage.png"
              />
            </div>
            <div>
              <div className="mt-2">
                <div className="my-2">
                  <span>Salma Ghadban </span>
                  <span style={{ fontWeight: "600", color: "#d2973b" }}>
                    - Orleans Canada
                  </span>
                </div>
              </div>
              <span className="text-center">
                Living in Canada is hard to keep up children with religion and
                Quran learning, and I was so worried about how to connect my son
                Ali with quran.
              </span>
              <div className="my-2">
                <p className="">
                  A friend told me about QuranHost and I believe that it is an
                  amazing program. The teacher always acommodates your
                  availablity here. My son Ali learnt Quran reading with his
                  tutor in short time. He memorized many suras and also learnt a
                  lot about Islam.
                </p>
              </div>
              <span>
                The teachers are qualified and give the parents update
                regularly. It's a wonderfull program.
              </span>
            </div>
          </div>
          <div className="col-lg d-flex">
            <div className="col-lg-2 m-2">
              <img
                className="avatar1"
                src="https://www.quranhost.com/wp-content/uploads/2019/04/avatar_female-imgage.png"
              />
            </div>
            <div>
              <div className="mt-2">
                <div className="my-2">
                  <span>Shabina Islam </span>
                  <span style={{ fontWeight: "600", color: "#d2973b" }}>
                    - Denmark
                  </span>
                </div>
              </div>
              <span className="text-center">
                QuranHost is highly recommended to anyone who is interested in
                learning Quran for themselves or their children.
              </span>
              <div className="my-2">
                <p className="">
                  The teachers are very responsive and dedicated. My kids Kabir
                  and Sahar are really enjoying their Quran classes and making
                  great progress in Quran reading and memorization. I myself
                  also started with a female teacher, who is simply a great
                  teacher.
                </p>
              </div>
              <span>
                Many thanks to the entire team of QuranHost for all your efforts
                to teach me and my children Quran. I am forever grateful to you.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TestimonialPage;
