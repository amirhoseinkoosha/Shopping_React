import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "../product/Product";
import { productListAction } from "../../action/ProductAction";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);
  return (
    <div>
      <h1>محصولات</h1>
      {loading ? (
        <h2>درحال دریافت محصولات....</h2>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4}>
                <Product product={item} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
}
