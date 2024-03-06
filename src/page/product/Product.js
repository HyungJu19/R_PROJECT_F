import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ImageDisplay from "./item/ImageDisplay";
import ColorSelector from "./item/ColorSelector";
import ColorButtons from "./item/ColorButtons";

const products = [
  {
    색상: "기본",
    이미지URL:
      "https://eatablebucket.s3.ap-northeast-2.amazonaws.com/sirboto1%EB%B9%A8%EA%B0%95.jpg",
  },
  {
    색상: "빨강",
    이미지URL:
      "https://eatablebucket.s3.ap-northeast-2.amazonaws.com/sirboto1%EB%A0%88%EB%93%9C.jpg",
  },
  {
    색상: "녹색",
    이미지URL:
      "https://eatablebucket.s3.ap-northeast-2.amazonaws.com/sirboto1%EB%85%B9%EC%83%89.jpg",
  },
  {
    색상: "파랑",
    이미지URL:
      "https://eatablebucket.s3.ap-northeast-2.amazonaws.com/sirboto1%ED%8C%8C%EB%9E%91.jpg",
  },
];

function ProductSelector() {
  const [selectedColor, setSelectedColor] = useState(products[0].이미지URL);
  const [opacity, setOpacity] = useState(1);

  const changeImage = (newImageURL) => {
    setOpacity(0);
    setTimeout(() => {
      setSelectedColor(newImageURL);
      setOpacity(1);
    }, 200);
  };

  const handleSelect = (e) => {
    const newImage = products.find(
      (product) => product.색상 === e.target.value
    ).이미지URL;
    changeImage(newImage);
  };

  const handleColorClick = (color) => {
    const newImage = products.find(
      (product) => product.색상 === color
    ).이미지URL;
    changeImage(newImage);
  };

  return (
    <>
      <hr />
      <Container>
        <Row>
              <h5>주문 결제 가능한 서빙로복 알지티 써봇(주문결제형)</h5>
          <Col md={6}>
            <ImageDisplay imageUrl={selectedColor} opacity={opacity} />
          </Col>
          <Col md={6}>
            <div style={{ marginBottom: "20px" }}>
            </div>
            <ColorSelector products={products} onSelect={handleSelect} />
            <ColorButtons products={products} onClick={handleColorClick} />
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
}

export default ProductSelector;
