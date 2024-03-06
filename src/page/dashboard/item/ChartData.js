// 판매량 데이터를 변환하는 함수
export const transformSalesVolumeData = (data) => ({
  labels: data.판매량.map((item) => item.월),
  datasets: [
    {
      label: "제품A",
      data: data.판매량.map((item) => item.제품A),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "제품B",
      data: data.판매량.map((item) => item.제품B),
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
    {
      label: "제품C",
      data: data.판매량.map((item) => item.제품C),
      borderColor: "rgb(255, 206, 86)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
  ],
});

// 사용자 피드백 점수 데이터를 변환하는 함수
export const transformUserFeedbackScoreData = (data) => ({
  labels: data.사용자피드백점수.map((item) => item.제품),
  datasets: [
    {
      label: "사용자 피드백 점수",
      data: data.사용자피드백점수.map((item) => item.점수),
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
});

// 성능지표 데이터를 변환하는 함수
export const transformPerformanceIndicatorData = (data) => ({
  labels: data.성능지표.map((item) => item.제품),
  datasets: [
    {
      label: "배터리수명 (시간)",
      data: data.성능지표.map((item) => parseFloat(item.배터리수명)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "처리속도",
      data: data.성능지표.map((item) => {
        switch (item.처리속도) {
          case "빠름":
            return 3;
          case "보통":
            return 2;
          case "느림":
            return 1;
          default:
            return 0;
        }
      }),
      backgroundColor: "rgba(54, 162, 235, 0.5)",
    },
  ],
});
