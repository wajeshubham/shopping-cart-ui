import React, { useState } from "react";
import {
  Card,
  OverlayTrigger,
  Popover,
  Modal,
  FormControl,
} from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";
import styles from "../scss/perks_card.module.scss";

const PerksCard = () => {
  const [modalShow, setModalShow] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <small>New Users get 20 Perks on signing up</small>
      </Popover.Content>
    </Popover>
  );

  const CouponInputModal = () => {
    return (
      <Modal
        className="p-2 text-center"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setModalShow(false)}
      >
        <Modal.Body style={{ width: "100%" }}>
          <FormControl placeholder="Enter Code" />
        </Modal.Body>
        <span
          className="mb-3 font-weight-bold align-self-center"
          style={{ cursor: "pointer", color: "rgb(0, 128, 132)" }}
          onClick={() => {
            setModalShow(false);
          }}
        >
          APPLY COUPON
        </span>
      </Modal>
    );
  };

  return (
    <>
      {CouponInputModal()}
      <Card className={styles.perks_card}>
        <span className="pb-3 text-black-50 font-weight-bold">
          PERKS AND COUPONS
        </span>
        <span className="font-weight-bold align-self-center">
          LOGIN TO REDEEM PERKS
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <InfoCircle
              className="ml-3"
              size={18}
              color="grey"
              style={{ verticalAlign: "top", marginTop: "2px" }}
            />
          </OverlayTrigger>
        </span>
        <small className="mt-1 align-self-center">
          Perks can get you a discount of up to 20%
        </small>
        <small className="my-2 align-self-center text-black-50 font-weight-bold row">
          <hr /> OR
          <hr />
        </small>
        <span
          className="my-1 font-weight-bold align-self-center"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setModalShow(true);
          }}
        >
          APPLY COUPON
        </span>
      </Card>
    </>
  );
};

export default PerksCard;
