import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`product/${product._id}`}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
      </Card.Body>
      <Card.Text as="h3">{product.price}</Card.Text>
    </Card>
  );
}
