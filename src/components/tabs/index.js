import React from "react";
import "./styles.css";

const Tabs = (props) => {
  const { level, grade } = props;
  return (
    <div>
      <div
        class="tab active"
        data-pricing-plan="beginner"
        data-learning-type="1:1"
      >
        <h5 class="font-futura-bold">{level}</h5>
        <div class="text font-futura-bold">{grade}</div>
      </div>
    </div>
  );
};

export default Tabs;
