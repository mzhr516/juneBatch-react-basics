import React from "react";
import { Button, Card } from "react-bootstrap";

export const CityCard = ({
  cityName = "****",
  pinCode = "0000",
  state = "----",
  src = "img-2.jpg",
}) => {
  // console.log(props)
  // const {cityName,state,src}=props
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{cityName}</Card.Title>
        <Card.Text>{state}</Card.Text>
        <Button variant="primary">{pinCode}</Button>
      </Card.Body>
    </Card>
  );
};
