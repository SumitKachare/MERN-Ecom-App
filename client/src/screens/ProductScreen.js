import React from "react";
import { Col, Row, Image, ListGroup, ListGroupItem, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link to="/" className="btn btn-secondary my-3">
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                rating={product.rating}
                reviewText={`${product.numReviews} ratings`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>Description : {product.description}</ListGroupItem>
          </ListGroup>
          </Col>

        <Col md={3}>
        <Card>
            <ListGroup  variant="flush">
                <ListGroupItem>
                    <Row>
                        <Col>
                            Price:
                        </Col>
                        <Col>
                        <strong>${product.price}</strong>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                <Row>
                        <Col>
                        Status:
                        </Col>
                        <Col>
                        {product.countInStock === 0 ? "Out Of Stock" : "In Stock"}
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Button className="btn btn-block btn-dark" type="button" disabled={product.countInStock===0}>
                        Add To Cart
                    </Button>
                </ListGroupItem>
            </ListGroup>
        </Card>
        </Col>

            {/* <Col md={3} >
            <ListGroup>
                <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                Status :{" "}
                {product.countInStock === 0 ? "Out Of Stock" : "In Stock"}
                </ListGroup.Item>
                <ListGroup.Item>
                <Link to="/" className="btn btn-secondary ">
                    ADD TO CART
                </Link>
                </ListGroup.Item>
            </ListGroup>
            </Col> */}
      </Row>
    </>
  );
};

export default ProductScreen;
