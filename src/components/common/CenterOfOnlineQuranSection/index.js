import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

const OnlineQuranSection = () => {
  return (
    <Container>
      <div className="myTopDiv d-flex">
        {/* Div for left text */}
        <div className="wpb_column vc_column_container vc_col-sm-6">
          <div className="vc_column-inner">
            <div className="top-class-heading">
              <h2 className="fs-1 fw-bolder">
                Center of Online Quran and Arabic Classes
              </h2>
              <div className="wpb_text_column wpb_content_element vc_custom_1636946049382">
                <div className="wpb_wrapper">
                  <p>
                    Learning correct recitation of the Holy Quran and
                    understanding it is obligatory for every Muslim. QuranHost’s
                    goal is to provide a friendly and interactive environment
                    for students to{" "}
                    <a
                      className="anchor"
                      href="https://www.quranhost.com/learn-arabic-online/"
                    >
                      learn Arabic
                    </a>
                    ,{" "}
                    <a
                      className="anchor"
                      href="https://www.quranhost.com/learn-quran-with-tajweed/"
                    >
                      Quran reading with Tajweed
                    </a>
                    , and Islamic Values through Online classes at home comfort.
                  </p>
                  <p>
                    QuranHost is the pioneer and the{" "}
                    <a
                      className="anchor"
                      href="https://www.quranhost.com/about-online-quran-academy/"
                    >
                      best Online Quran Academy
                    </a>
                    , providing Online Quran and Arabic classes since 2010. You
                    and your kids can learn Quran reading with highly qualified
                    and trained&nbsp; Quran teachers at home.
                  </p>
                  <p>
                    We have native Arab and non-Arab teachers from Saudi Arabia,
                    Egypt, and Pakistan who can teach Quran to your kids in
                    English, Arabic, and Urdu, and many other languages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Div for left text */}

        {/* Div for video */}
        <div className="wpb_column col-b vc_column_container vc_col-sm-6 vc_hidden-sm vc_hidden-xs">
          <div className="vc_column-inner vc_custom_1567502046620">
            <div className="wpb_wrapper">
              <div className="wpb_video_widget wpb_content_element vc_clearfix vc_custom_1615882678862 vc_video-aspect-ratio-169 vc_video-el-width-100 vc_video-align-left">
                <div className="wpb_wrapper">
                  <div className="wpb_video_wrapper">
                    <div className="woodmart-video-poster-wrapper">
                      <div
                        className="woodmart-video-poster"
                        style={{
                          backgroundImage: `url("https://www.quranhost.com/wp-content/uploads/2021/03/Suffa-Video-banner.jpg")`,
                        }}
                      ></div>
                      <div className="button-play"></div>
                    </div>
                    <iframe
                      className="myiframe"
                      title="How to Learn Quran Online"
                      width="500"
                      height="281"
                      src="https://www.youtube.com/embed/gVscj1CSuEA?feature=oembed"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Div for video */}
      </div>
      <div className="vc_row wpb_row vc_inner vc_row-fluid about-inner-row vc_custom_1567500628043 vc_column-gap-20 vc_row-o-equal-height vc_row-o-content-middle vc_row-flex">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element vc_custom_1615882850505">
                <div className="wpb_wrapper">
                  <p>
                    Online Quran Classes are the greatest revolution in the
                    Quran teaching for kids where the children can learn{" "}
                    <a
                      className="anchor"
                      href="https://www.quranhost.com/online-quran-reading/"
                    >
                      Quran reading online
                    </a>{" "}
                    with very qualified and experienced Quran teachers
                    one-on-one. We use the latest technology where the teacher
                    and students interact with each other as they are in one
                    classroom.{" "}
                    <em>
                      All you need to start learning is just a Laptop or iPad
                      and an internet connection.&nbsp;
                    </em>
                    &nbsp;In a very short time, your child will be able to{" "}
                    <a
                      className="anchor"
                      href="https://www.quranhost.com/learn-quran-with-tajweed/"
                    >
                      read Quran with Tajweed
                    </a>{" "}
                    without any mistakes. No matter, what your age is, and how
                    busy is your schedule, but if you didn’t get a chance to
                    learn how to read Quran,{" "}
                    <a
                      className="anchor"
                      href="https://www.quranhost.com/get-a-free-trial/"
                    >
                      Get a Free Tria
                    </a>
                    l&nbsp;for easy and affordable online Quran classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OnlineQuranSection;
