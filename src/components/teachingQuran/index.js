import React from "react";
import { Row } from "react-bootstrap";
import Card from "../cards";
import "./style.css";

const cards = [
  {
    heading: "FLEXIBLE SCHEDULE",
    definition:
      "Learn the basics and a bit beyond, from zero knowlege and skill to decent playing skill",
    imageURL: "/images/flexibility.jpg",
  },
  {
    heading: "USED BY THOUSANDS",
    definition:
      "Learn the basics and a bit beyond, from zero knowlege and skill to decent playing skill",
    imageURL: "/images/thousands.jpg",
  },
  {
    heading: "MONEY BACK GUARANTEE",
    definition:
      "Learn the basics and a bit beyond, from zero knowlege and skill to decent playing skill",
    imageURL: "/images/money-back.jpg",
  },
  {
    heading: "REAL WORK RESULTS",
    definition:
      "Learn the basics and a bit beyond, from zero knowlege and skill to decent playing skill",
    imageURL: `${process.env.PUBLIC_URL}/images/rewards.jpg`,
  },
];

const index = () => {
  return (
    <div className="mt-3">
      <h3 className=" text m-3 text-wrap text-center fw-bold fs-1">
        Teaching Quran all over the world
      </h3>
      <div className="d-flex flex-wrap justify-content-around">
        {cards.map((item, index) => (
          <Card
            key={index}
            heading={item.heading}
            definition={item.definition}
            imageURL={item.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
