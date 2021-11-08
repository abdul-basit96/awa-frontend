import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./styles.css";

const Cards = () => {
  return (
    <div
      className="plan basic"
      data-course-plan-type="basic"
      data-credit-count="8"
      data-course-duration="60"
      data-selling-price="US$ 249"
    >
      <div className="heading">
        <h4 className="font-futura-bold">Introduction to Coding</h4>
        <div className="details">
          <div>8 classNamees</div>
        </div>
      </div>
      <div className="plan_desc  ">
        <h6 className="font-futura-bold">Curriculum Includes</h6>
        <div className="content">
          Sequence, Fundamentals Coding Blocks, Loops
        </div>
        <a
          href="https://s3-cdnwhjr.whjr.online/website/curriculumpdf/02-04-2021/beg.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="color-primary viewCurriculumDetails"
        >
          View Detailed curriculum
        </a>
      </div>
      <div className="price_desc ">
        <div className="plan_tag popular d-none">MOST POPULAR</div>
        <div className="plan_tag best-value d-none">BEST VALUE</div>
        <div className="price">
          <h3 className="font-futura-bold">US$ 249</h3>
        </div>
        <div className="color-1565D8">Price Per className US$ 31</div>
        <button
          className="submit-btn text-bold btn-primary"
          data-id="80"
          data-affiliate-id=""
        >
          <span className="text-bold">Buy Now</span>
        </button>
        <div className="content_center">
          <div className="curriculum__bg global-icon curriculum__bg__achievement-star"></div>
          <h6 className="font-futura-bold">Achievements</h6>
        </div>
        <div className="achievements">
          <div className="box">
            <div className="curriculum__bg-circle">
              <div className="curriculum__bg global-icon curriculum__bg__achievement-coding"></div>
            </div>
            <div className="detail">Introduction To Coding</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
{
  /* <Card
  className="shadow-lg"
  style={{ maxWidth: "21rem", minWidth: "21rem", minHeight: "747px" }}
>
  <Card.Body style={{ maxHeight: "124px" }}>
    <div className="d-flex flex-column p-2 justify-content-between">
      <div className="h5">Introduction to Coding</div>
      <div className="mt-4">8 classes.</div>
    </div>
  </Card.Body>
  <hr className="mt-1" />
  <div style={{ height: 208, padding: 20 }}>
    <div>
      <h5>Curriculum Inclues</h5>
    </div>
    <div>
      <p>
        Sequence, Fundamentals, Coding Blocks, Loops
        <br />
        View Detailed Curriculum
      </p>
    </div>
  </div>
  {/* <Card.Body
          className="card-center pb-5"
          style={{ height: "208px", padding: 20 }}
        >
          <Card.Title className="title">Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body> */
}
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Cras justo odio</ListGroupItem>
//     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>; */}
