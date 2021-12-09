import React from "react";
import OnlineQuranSection from "../../components/common/CenterOfOnlineQuranSection";
import Footer from "../../components/common/footer/Footer";
import CourseSection from "../../components/courseSection/CourseSection";
import FreeClass from "../../components/freeclass";
import Header from "../../components/header";
import LearningQuran from "../../components/learningQuran";
import BelowHeader from "../../components/learnquran";
import ReconnetKids from "../../components/reconnect-kids";
import "./style.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <BelowHeader />
      <LearningQuran />
      <FreeClass />
      <CourseSection />
      <ReconnetKids />
      <OnlineQuranSection />
      <Footer />
    </>
  );
};

export default HomePage;
