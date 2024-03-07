import React from 'react';
import { Container } from 'react-bootstrap';

const ProductTop = () => {
    return (
      <Container>
        <div style={{height:"200px" ,display:"flex" , justifyContent:"center",alignContent:"center",flexDirection:"column"}}>
          <div style={{ fontSize: "30px" }}>
            로봇을 접한 사람들에게{" "}
            <span style={{ color: "darkblue", fontWeight: "bold" }}>
              좋은 추억
            </span>
            을 제공합니다.
          </div>
          <br />
        </div>
          <div style={{ marginBottom: "10px" }}>
            <span
              style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}
            >
              SIRBOT
            </span>
          </div>
      </Container>
    );
};

export default ProductTop;