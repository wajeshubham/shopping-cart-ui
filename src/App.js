import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "./components/CartItem";
import { Card, Row, Col, Container } from "react-bootstrap";
import PerksCard from "./components/PerksCard";
import PinCodeCard from "./components/PinCodeCard";
import PriceCard from "./components/PriceCard";
import Header from "./layout/Header";
import axios from "axios";
import { server } from "./utils/server";
import styles from "./scss/app.module.scss";
import CustomSpinner from "./components/CustomSpinner";
import { BagX } from "react-bootstrap-icons";

const App = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(server);
      setProducts(res.data.photos);
      let tempTotal = 0;
      res.data.photos.map((prod) => {
        tempTotal =
          parseInt(tempTotal) + parseInt(prod.price.replace(/,/g, ""));
        return 0;
      });
      setTotal(tempTotal);
      setIsLoading(false);
    } catch (error) {
      console.error("axios error-->", error);
      setIsLoading(false);
    }
  };

  const handleRemoval = (id) => {
    setProducts([
      ...products.filter((prod) => {
        setTotal(
          total - prod.quantity * parseInt(prod.price.replace(/,/g, ""))
        );
        return prod.id !== id;
      }),
    ]);
  };

  const handleIncrement = (id) => {
    setProducts([
      ...products.map((prod) => {
        if (prod.id === id) {
          prod.quantity += 1;
          setTotal(total + parseInt(prod.price.replace(/,/g, "")));
        }
        return prod;
      }),
    ]);
  };

  const handleDecrement = (id) => {
    setProducts([
      ...products.map((prod) => {
        if (prod.id === id && prod.quantity > 1) {
          prod.quantity -= 1;
          setTotal(total - parseInt(prod.price.replace(/,/g, "")));
        }
        return prod;
      }),
    ]);
  };

  useEffect(() => fetchProducts(), []);

  return (
    <>
      <Header />
      <Container className={styles.container}>
        {!isLoading ? (
          <>
            <Row className="my-4">
              <Col className={styles.container_cols} lg={8}>
                {products.length > 0 ? (
                  <Card className={styles.cart_card}>
                    <Card.Title
                      className="pt-3 pb-4 text-black-50 font-weight-bold"
                      style={{ fontSize: "15px" }}
                    >
                      {products.length} ITEMS
                    </Card.Title>
                    {products.map((product, i) => (
                      <CartItem
                        key={product.id}
                        product={product}
                        handleRemoval={handleRemoval}
                        handleDecrement={handleDecrement}
                        handleIncrement={handleIncrement}
                      />
                    ))}
                  </Card>
                ) : (
                  <Card className={styles.cart_empty_card}>
                    <BagX size={80} color="rgb(0, 128, 132)" />
                    <span style={{ color: "rgb(0, 128, 132)" }}>
                      Bag is empty
                    </span>
                  </Card>
                )}
              </Col>
              <Col className={styles.container_cols} lg={4}>
                <PinCodeCard />
                <PerksCard />
                <PriceCard totalPrice={total} />
              </Col>
            </Row>
            {/* Following row is only for mobile checkout */}
            <Row className={styles.mobile_checkout_row}>
              <Col className={styles.container_cols} xs={6}>
                <span
                  className="font-weight-bolder"
                  style={{ color: "rgb(0, 128, 132)" }}
                >
                  ₹{total + total * 0.23}
                </span>
                <br />
                <small>(inclusive of all taxes)</small>
              </Col>
              <Col className={styles.container_cols} xs={6}>
                <span className={styles.select_address_btn}>
                  SELECT ADDRESS
                </span>
              </Col>
            </Row>
          </>
        ) : (
          <CustomSpinner />
        )}
      </Container>
    </>
  );
};

export default App;
