import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../scss/header.module.scss";

const Header = () => {
  return (
    <Navbar className={styles.header}>
      <Container>
        <Navbar.Brand href="#home" style={{ fontWeight: "bolder" }}>
          <Image src={logo} width="180px" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
