import React, { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDeatilAction } from "../../action/ProductAction";

export default function Products() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;
  useEffect(() => {
    dispatch(productDeatilAction(id));
  }, [dispatch, id]);
  const addToCartHandler = () => {
    window.location.href = `/cart/${id}`;
  };
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        بازگشت به صفحه اصلی
      </Link>
      {loading ? (
        <h1> در حال لود کردن محصول</h1>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product?.image} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product?.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>{product?.price}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>{product?.description}</h4>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Button
                  className="btn btn-block"
                  type="button"
                  onClick={() => addToCartHandler()}
                >
                  افزودن به سبد خرید
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}
