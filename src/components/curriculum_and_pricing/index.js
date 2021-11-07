import React, { useState } from "react";
import "./styles.css";
import Tabs from "../tabs";
import Cards from "../cards";

const tabs = [
  { level: "Begginers", grade: "(Grade 1)" },
  { level: "Intermediate", grade: "(Grade 2-3)" },
  { level: "Advance", grade: "(Grade 4-6)" },
  { level: "Professional", grade: "(Grade 7-9)" },
  { level: "Applied Tech", grade: "(Grade 10+)" },
];
const CurriculumPrice = () => {
  return (
    <div className="container">
      <h2 className="curriculum__heading font-futura-bold">
        Curriculum &amp; Pricing
      </h2>
      <div className="curriculum__tabs-container" data-learning-type="1:1">
        {tabs.map((item, key) => (
          <Tabs key={key} level={item.level} grade={item.grade} />
        ))}
      </div>
      <div
        className="plan_cont d-flex justify-content-around p-5"
        data-pricing-plan-type="one_time"
      >
        {tabs.map((item, ind) => ind <= 2 && <Cards />)}
      </div>
    </div>
  );
};

export default CurriculumPrice;
