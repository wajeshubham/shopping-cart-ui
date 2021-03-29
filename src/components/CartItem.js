import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { DashCircleFill, PlusCircleFill } from "react-bootstrap-icons";
import styles from "../scss/cart_item.module.scss";

const CartItem = ({
  handleRemoval,
  product,
  handleIncrement,
  handleDecrement,
}) => {
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
                handleRemoval(product.id);
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
                  handleIncrement(product.id);
                }}
              />
              <span className="mx-2">{product.quantity}</span>
              <DashCircleFill
                size={30}
                color="#cccccc"
                cursor="pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleDecrement(product.id);
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
