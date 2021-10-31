import React from "react";
import { Card, Button } from "react-bootstrap";

const index = (props) => {
  return (
    <div>
      <Card className="mx-auto mt-5" style={{ width: "18rem" }}>
        <Card.Img
          style={{
            width: "85%",
            borderRadius: 15,
            margin: "20px auto 0px",
          }}
          className="img-fluid"
          variant="top"
          src={props?.imageURL}
        />

        <Card.Body>
          <Card.Title className="text-center">
            <h3 className="fw-bolder fs-2 mt-0 pt-0 ">{props?.heading}</h3>
          </Card.Title>
          <Card.Text
            className="fw-bold text-secondary"
            style={{ textAlign: "justify", margin: "10px" }}
          >
            {props?.definition}
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default index;
