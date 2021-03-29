import React from "react";
import {
  Button,
  Card,
  Col,
  OverlayTrigger,
  Popover,
  Row,
} from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";
import styles from "../scss/price_card.module.scss";

const PriceCard = ({ totalPrice }) => {
  const PricePopover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <small style={{ marginRight: "1.5rem" }}>Base Price</small>
        <small>₹{totalPrice}</small>
        <br />
        <small style={{ marginRight: "1.2rem" }}>GST @23%</small>
        <small>₹{totalPrice * 0.23}</small>
      </Popover.Content>
    </Popover>
  );

  const DeliveryPopover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <small>
          Free Shipping On All Orders Above <strong>599</strong>
        </small>
      </Popover.Content>
    </Popover>
  );

  return (
    <>
      <Card className={styles.price_card}>
        <span
          className="pb-3 text-black-50 font-weight-bold"
          style={{ fontSize: "15px" }}
        >
          PRICE INFORMATION
        </span>
        <Row className="mb-1">
          <Col className={styles.price_cols} lg={6}>
            <span>
              Sub-total{" "}
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={PricePopover}
              >
                <InfoCircle size={12} color="grey" />
              </OverlayTrigger>
            </span>
          </Col>
          <Col className={styles.price_cols} lg={6}>
            <span className="float-right">
              ₹{totalPrice + totalPrice * 0.23}
            </span>
          </Col>
        </Row>
        <Row>
          <Col className={styles.price_cols} lg={6}>
            <span>
              Delivery Charges{" "}
              <OverlayTrigger
                trigger="click"
                placement="top"
                overlay={DeliveryPopover}
              >
                <InfoCircle size={12} color="grey" />
              </OverlayTrigger>
            </span>
          </Col>
          <Col className={styles.price_cols} lg={6}>
            <span className="float-right">FREE</span>
          </Col>
        </Row>
        <hr style={{ color: "black", margin: "15px 0 0" }} />
        <Row className="my-3">
          <Col className={styles.price_cols} lg={6}>
            <span className="font-weight-bolder">Final Price</span>
          </Col>
          <Col className={styles.price_cols} lg={6}>
            <span
              className="float-right font-weight-bolder"
              style={{ color: "rgb(0, 128, 132)" }}
            >
              ₹{totalPrice + totalPrice * 0.23}
            </span>
          </Col>
        </Row>
      </Card>

      <Button className={styles.select_address_btn}>SELECT ADDRESS</Button>
    </>
  );
};

export default PriceCard;
