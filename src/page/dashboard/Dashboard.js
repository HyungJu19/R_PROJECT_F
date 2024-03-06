import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SalesVolumeChart from "./item/SalesVolumeChart"; // 경로는 실제 구조에 맞게 조정해주세요.
import UserFeedbackScoreChart from "./item/UserFeedbackScoreChart"; // 경로는 실제 구조에 맞게 조정해주세요.
import PerformanceIndicatorChart from "./item/PerformanceIndicatorChart"; // 경로는 실제 구조에 맞게 조정해주세요.
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

 const 판매량Data = transformSalesVolumeData(data);
 const 사용자피드백점수Data = transformUserFeedbackScoreData(data);
 const 성능지표BarData = transformPerformanceIndicatorData(data);

  return (
    <Container>
      <Row>
        <Col>
          <SalesVolumeChart data={판매량Data} />
        </Col>
        <Col>
          <UserFeedbackScoreChart data={사용자피드백점수Data} />
        </Col>
        <Col>
          <PerformanceIndicatorChart data={성능지표BarData} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
