import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTocard, Deletecard } from "../../action/cartAction";
import { useParams } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
export default function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cardItem } = cart;
  useEffect(() => {
    if (id) {
      dispatch(addTocard(id));
    }
  }, [dispatch, id]);
  console.log(cardItem);

  const removehandler = (id) => {
    dispatch(Deletecard(id));
    window.location.href = "/cart";
  };
  return (
    <div>
      <Row>
        <Col md={8}>
          <h2>سبد خرید</h2>
          {cardItem.length === 0 ? (
            <p>سبد خالی است</p>
          ) : (
            <ListGroup variant="flush">
              {cardItem.map((item) => {
                return (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} fluid rounded />
                      </Col>
                      <Col md={3}>{item.name}</Col>
                      <Col md={2}>{item.price}</Col>
                      <Col md={2}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removehandler(item.product)}
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                مجموع: {cardItem.reduce((acc, item) => acc + item.price, 0)}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
