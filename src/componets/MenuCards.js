import React from "react";
import { Button, Card } from "react-bootstrap";

export const MenuCards = ({ menu }) => {
  return (
    <div style={{ display: "flex" }}>
      {menu.map((menu) => (
        <Card style={{ width: "18rem" }} key={menu.itemName}>
          <Card.Img variant="top" src={menu.foodImage} />
          <Card.Body>
            <Card.Title>{menu.itemName}</Card.Title>
            <Card.Text>{menu.description}</Card.Text>
            <p>price: {menu.price}</p>
            <Button variant="primary">order now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
