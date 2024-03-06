import React from "react";
import ProductTop from "../product/ProductTop";
import ProductSelector from "../product/Product";
import { Container } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <ProductTop />
      <ProductSelector />
    </Container>
  );
};

export default Main;
