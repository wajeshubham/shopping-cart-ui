import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { DashCircleFill, PlusCircleFill } from "react-bootstrap-icons";
import styles from "../scss/cart_item.module.scss";

const CartItem = ({ setProducts, products, product, total, setTotal }) => {
  return (
    <React.Fragment key={product.id}>
      <Row>
        <Col lg={2}>
          <Card.Img className="mt-2" src={product.src?.large2x} />
        </Col>
        <Col className="pt-2 px-0" lg={6}>
          <Col lg={12}>
            <span style={{ fontSize: "17px" }}>{product.name}</span>
          </Col>
          <Col lg={12}>
            <span className={styles.prod_price}>₹ {product.price}</span>
          </Col>
        </Col>
        <Col className="pt-2 px-0" lg={4}>
          <Col lg={12}>
            <span
              className={styles.remove_span}
              onClick={() => {
                setProducts([
                  ...products.filter((prod) => {
                    setTotal(
                      total -
                        product.quantity *
                          parseInt(product.price.replace(/,/g, ""))
                    );
                    return prod.id !== product.id;
                  }),
                ]);
              }}
            >
              REMOVE
            </span>
          </Col>
          <Col className="mt-5" lg={12}>
            <span style={{ fontSize: "15px", float: "right" }}>
              Quantity:
              <PlusCircleFill
                className="ml-2"
                size={30}
                color="#cccccc"
                cursor="pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setProducts([
                    ...products.map((prod) => {
                      if (prod.id === product.id) {
                        prod.quantity += 1;
                        setTotal(
                          total + parseInt(prod.price.replace(/,/g, ""))
                        );
                      }
                      return prod;
                    }),
                  ]);
                }}
              />
              <span className="mx-2">{product.quantity}</span>
              <DashCircleFill
                size={30}
                color="#cccccc"
                cursor="pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setProducts([
                    ...products.map((prod) => {
                      if (prod.id === product.id && prod.quantity > 1) {
                        prod.quantity -= 1;
                        setTotal(
                          total - parseInt(prod.price.replace(/,/g, ""))
                        );
                      }
                      return prod;
                    }),
                  ]);
                }}
              />
            </span>
          </Col>
        </Col>
      </Row>
      <hr className="my-4"></hr>
    </React.Fragment>
  );
};

export default CartItem;
