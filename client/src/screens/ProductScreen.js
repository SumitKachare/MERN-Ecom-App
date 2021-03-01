import React , {useEffect} from "react";
import { Col, Row, Image, ListGroup, ListGroupItem, Card, Button } from "react-bootstrap";
import { useDispatch  , useSelector} from "react-redux";
import { Link } from "react-router-dom";


import Rating from "../components/Rating";
import {listProductDetails} from '../actions/productActions'
import Loader from "../components/Loader";


const ProductScreen = ({ match }) => {
  const dispatch = useDispatch()
  const productDetail = useSelector(state => state.productDetail)
  const {product , loading} = productDetail
  
    useEffect(() => {
        dispatch(listProductDetails(match.params.id))

    }, [dispatch , match])

    
  return (
    <>
      <Link to="/" className="btn btn-secondary my-3">
        Back
      </Link>
      {loading ? (<Loader/>) : 
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
      </Row>}
    </>
  );
};

export default ProductScreen;
