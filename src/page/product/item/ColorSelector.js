import React from "react";
import { Form } from "react-bootstrap";

const ColorSelector = ({ products, onSelect }) => (
  <Form.Select
    aria-label="제품 색상 선택"
    onChange={onSelect}
    style={{ marginBottom: "10px", width: "120px" }}
  >
    {products.map((product, index) => (
      <option key={index} value={product.색상}>
        {product.색상}
      </option>
    ))}
  </Form.Select>
);

export default ColorSelector;
