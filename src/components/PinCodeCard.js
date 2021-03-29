import React, { useState } from "react";
import { Card, FormControl, InputGroup } from "react-bootstrap";
import styles from "../scss/pin_code_card.module.scss";

const PinCodeCard = () => {
  const [pinCode, setPinCode] = useState("");
  const [isPinCodeValid, setIsPinCodeValid] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    var reg = new RegExp("^[1-9]{1}[0-9]{2}[0-9]{3}$");
    var pinCodeTest = reg.test(pinCode);
    if (pinCodeTest) {
      setIsPinCodeValid(true);
    }
  };

  return (
    <Card className={styles.pin_code_card}>
      <span className="pb-3">Enter your pincode to check availability</span>
      <InputGroup>
        <FormControl type="text" onChange={(e) => setPinCode(e.target.value)} />
        <InputGroup.Append>
          <InputGroup.Text style={{ backgroundColor: "white" }}>
            {isPinCodeValid && pinCode !== "" ? (
              <span
                className="font-weight-bold"
                style={{ color: "green", fontSize: "15px", cursor: "pointer" }}
              >
                DELIVERABLE
              </span>
            ) : (
              <span
                className="font-weight-bold"
                style={{ fontSize: "15px", cursor: "pointer" }}
                onClick={handleCheck}
              >
                CHECK
              </span>
            )}
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <small className="mt-1">
        {isPinCodeValid && pinCode !== "" ? (
          <span>
            We can deliver to your location{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              with free shipping
            </span>
          </span>
        ) : (
          <span style={{ color: "red" }}>Please enter valid pincode</span>
        )}
      </small>
    </Card>
  );
};

export default PinCodeCard;
