import React from "react";
import { Image } from "react-bootstrap";

const ImageDisplay = ({ imageUrl, opacity }) => (
  <div style={{ opacity, transition: "opacity 0.5s ease-in-out" }}>
    <Image
      src={imageUrl}
      rounded
      style={{ width: "100%", maxWidth: "400px", height: "auto" }}
    />
  </div>
);

export default ImageDisplay;
