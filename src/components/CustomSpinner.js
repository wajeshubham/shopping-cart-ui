import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "../scss/custom_spinner.module.scss";

const CustomSpinner = () => {
  return (
    <div className={styles.Center}>
      <Spinner animation="grow" style={{ color: "rgb(0, 128, 132)" }} />
      <Spinner animation="grow" style={{ color: "rgb(0, 128, 132)" }} />
      <Spinner animation="grow" style={{ color: "rgb(0, 128, 132)" }} />
    </div>
  );
};

export default CustomSpinner;
