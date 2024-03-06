import React from "react";

const colorToHex = (color) => {
  switch (color) {
    case "기본":
      return "#ffffff"; // 하얀색
    case "빨강":
      return "#ff0000"; // 빨간색
    case "녹색":
      return "#00ff00"; // 녹색
    case "파랑":
      return "#0000ff"; // 파란색
    default:
      return "#ffffff"; // 기본값은 하얀색
  }
};

const ColorButtons = ({ products, onClick }) => (
  <div style={{ display: "flex", gap: "10px" }}>
    {products.map((product, index) => (
      <button
        key={index}
        onClick={() => onClick(product.색상)}
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: colorToHex(product.색상),
          cursor: "pointer",
      
        }}
        aria-label={`색상 ${product.색상} 선택`}
      ></button>
    ))}
  </div>
);

export default ColorButtons;
