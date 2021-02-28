import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from './Rating'

const Product = ({ product }) => {
  //   const { name, image, description,brand, price, rating, numReviews } = props;
  //     console.log(props)
  return (
    <Card className="my-3 p-3 rounded" >
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className="m-0">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating  rating={product.rating} reviewText={ `${product.numReviews} reviews`}/>
        </Card.Text>

        <Card.Text as="h3">{`${product.price}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
