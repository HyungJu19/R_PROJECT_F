import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SalesVolumeChart from "./item/SalesVolumeChart"; 
import UserFeedbackScoreChart from "./item/UserFeedbackScoreChart"; 
import PerformanceIndicatorChart from "./item/PerformanceIndicatorChart"; 
import { transformPerformanceIndicatorData, transformSalesVolumeData, transformUserFeedbackScoreData } from "./item/ChartData";

const data = {
  판매량: [
    { 월: "1월", 제품A: 120, 제품B: 150, 제품C: 80 },
    { 월: "2월", 제품A: 200, 제품B: 180, 제품C: 160 },
    { 월: "3월", 제품A: 150, 제품B: 210, 제품C: 190 },
  ],
  사용자피드백점수: [
    { 제품: "제품A", 점수: 4.5 },
    { 제품: "제품B", 점수: 4.7 },
    { 제품: "제품C", 점수: 4.3 },
  ],
  성능지표: [
    { 제품: "제품A", 배터리수명: "10시간", 처리속도: "빠름" },
    { 제품: "제품B", 배터리수명: "12시간", 처리속도: "보통" },
    { 제품: "제품C", 배터리수명: "8시간", 처리속도: "느림" },
  ],
};


const Dashboard = () => {
 const backgroundImageUrl =
   "https://eatablebucket.s3.ap-northeast-2.amazonaws.com/text3.png";


 const 판매량Data = transformSalesVolumeData(data);
 const 사용자피드백점수Data = transformUserFeedbackScoreData(data);
 const 성능지표BarData = transformPerformanceIndicatorData(data);

  return (
    <div
      style={{
        width: "100%",
        height: "93.3vh",
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImageUrl})`,
        position: "relative", // 이 div는 상대적 위치 지정의 기준이 됩니다.
      }}
    >
      <div
        style={{
            margin:"auto",
          width: "100%",
        }}
      >
        <Container style={{ padding: "0px" }}>
          <div>
            <img
              src="https://eatablebucket.s3.ap-northeast-2.amazonaws.com/text1.png"
              style={{ margin: "30px" }}
            />
          </div>
          <Row
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              height: "400px",
              margin:"auto",
                paddingTop:"60px"
            }}
          >
            <Col>
              <span>판매량</span>
              <SalesVolumeChart data={판매량Data} />
            </Col>
            <Col>
              <span>피드백 점수</span>
              <UserFeedbackScoreChart data={사용자피드백점수Data} />
            </Col>
            <Col>
              <span>성능지표</span>
              <PerformanceIndicatorChart data={성능지표BarData} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
