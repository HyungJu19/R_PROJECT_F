import React, { useState, useEffect, useRef } from "react";
import "./Simulation.css";
import { Col, Container, Row } from "react-bootstrap";

const targets = [
  { id: "호출벨", x: 2, y: 3, isBouncing: false },
  { id: "엘리베이터", x: 5, y: 5, isBouncing: false },
  { id: "차임벨", x: 8, y: 2, isBouncing: false },
  { id: "도착지점", x: 9, y: 9, isBouncing: false },
];

const Simulation = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0 });
  const [currentTargetIndex, setCurrentTargetIndex] = useState(null);
  const [isBouncingRobot, setIsBouncingRobot] = useState(true);
  const [movementStarted, setMovementStarted] = useState(false);
  const [robotState, setRobotState] = useState("대기중");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const gridSize = 500;
    canvas.width = gridSize;
    canvas.height = gridSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#ddd";
    for (let i = 0; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo((i * gridSize) / 10, 0);
      ctx.lineTo((i * gridSize) / 10, gridSize);
      ctx.moveTo(0, (i * gridSize) / 10);
      ctx.lineTo(gridSize, (i * gridSize) / 10);
      ctx.stroke();
    }
  }, []);

  useEffect(() => {
    if (currentTargetIndex === null || !movementStarted) return;

    const target = targets[currentTargetIndex];
    const move = () => {
      if (robotPosition.x !== target.x) {
        setRobotPosition((prev) => ({
          ...prev,
          x: prev.x < target.x ? prev.x + 1 : prev.x - 1,
        }));
      } else if (robotPosition.y !== target.y) {
        setRobotPosition((prev) => ({
          ...prev,
          y: prev.y < target.y ? prev.y + 1 : prev.y - 1,
        }));
      } else {
     
        handleTargetReached(target.id); 

        let nextIndex = currentTargetIndex + 1;
        if (nextIndex < targets.length) {
          targets[currentTargetIndex].isBouncing = false;
          targets[nextIndex].isBouncing = true;
          setCurrentTargetIndex(nextIndex);
         
        } else {
          resetSimulation();
        }
      }
    };

    const intervalId = setInterval(move, 800);
    return () => clearInterval(intervalId);
  }, [robotPosition, currentTargetIndex, movementStarted]);

  const resetSimulation = () => {
    targets.forEach((target) => (target.isBouncing = false));
    setRobotPosition({ x: 0, y: 0 });
    setIsBouncingRobot(true);
    setMovementStarted(false);
    setCurrentTargetIndex(null);
    setRobotState("대기중");
  };

  const changeRobotState = (newState) => {
    setRobotState(newState);
  };
  const handleTargetReached = (targetId) => {
    let nextState = "이동중"; 

    switch (targetId) {
      case "호출벨":
        nextState = "경로탐색";
        break;
      case "엘리베이터":
        nextState = "엘리베이터 호출";
        break;
      case "차임벨":
        nextState = "차임벨";
        break;
      case "도착지점":
        nextState = "복귀완료";
        break;
    }

    changeRobotState(nextState);

 
    const nextIndex = targets.findIndex((t) => t.id === targetId) + 1;
    if (nextIndex < targets.length) {
      setTimeout(
        () => {
          
          if (
            targetId === "엘리베이터" ||
            targetId === "호출벨" ||
            targetId === "차임벨"
          ) {
            changeRobotState("이동중");
          }
        },
        targetId === "엘리베이터" ? 1000 : 500
      );
    }
  };

  const startMovement = () => {
    setIsBouncingRobot(false);
    targets[0].isBouncing = true;
    setMovementStarted(true);
    setCurrentTargetIndex(0);
    changeRobotState("호출!!");
   
    setTimeout(() => {
      changeRobotState("이동중");
    }, 500); 
  };

  return (
    <Container>
      <div>
        <div style={{marginTop:"50px" ,fontSize:"30px"}}>자율주행 로봇 시뮬레이션</div>
        <div className="simulation" style={{marginTop:"30px"}}>
          <canvas ref={canvasRef} className="simulation-canvas"></canvas>
          <div
            className={`robot ${isBouncingRobot ? "bouncing" : ""}`}
            style={{
              top: `${robotPosition.y * 50}px`,
              left: `${robotPosition.x * 50}px`,
            }}
          >
            <img
              src="https://eatablebucket.s3.ap-northeast-2.amazonaws.com/free-icon-rpa-10384593.png"
              alt="Robot"
              style={{ width: "100%", maxWidth: "40px" }}
            />
            <div className="speech-bubble">
              {robotState === "대기중" && "대기중"}
              {robotState === "경로탐색" && "경로탐색"}
              {robotState === "호출!!" && "호출!!"}
              {robotState === "이동중" && "이동중"}
              {robotState === "엘리베이터 호출" && "엘리베이터 호출"}
              {robotState === "차임벨" && "차임벨"}
              {robotState === "복귀중" && "복귀중"}
            </div>
          </div>
          {targets.map((target, index) => (
            <div
              key={index}
              className={`target ${target.isBouncing ? "bouncing" : ""}`}
              style={{ top: `${target.y * 50}px`, left: `${target.x * 50}px` }}
            >
              {target.id}
            </div>
          ))}
          <button onClick={startMovement} disabled={movementStarted}>
            Start
          </button>
          <button onClick={resetSimulation}>Reset</button>
        </div>
      </div>
    </Container>
  );
};

export default Simulation;

// import React, { useRef, useEffect, useState } from "react";
// import "./Simulation.css";
// import Simulation2 from "./Simulation2";

// const gridSize = 10;
// const cellSize = 50;
// const devices = {
//   호출벨: { x: 2, y: 3, color: "yellow" },
//   엘리베이터: { x: 5, y: 5, color: "blue" },
//   차임벨: { x: 8, y: 2, color: "green" },
// };
// const path = [
//   { x: 0, y: 0 },
//   { x: 2, y: 3 },
//   { x: 5, y: 5 },
//   { x: 8, y: 2 },
//   { x: 9, y: 9 },
// ];

// const Simulation = () => {
//   const canvasRef = useRef(null);
//   const [start, setStart] = useState(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let robotAnimationFrameId;

//     const drawGrid = () => {
//       ctx.strokeStyle = "#ddd";
//       for (let i = 0; i <= gridSize; i++) {
//         ctx.beginPath();
//         ctx.moveTo(i * cellSize, 0);
//         ctx.lineTo(i * cellSize, gridSize * cellSize);
//         ctx.moveTo(0, i * cellSize);
//         ctx.lineTo(gridSize * cellSize, i * cellSize);
//         ctx.stroke();
//       }
//     };

//     const drawDevices = () => {
//       Object.entries(devices).forEach(([name, device]) => {
//         ctx.fillStyle = device.color;
//         ctx.fillRect(
//           device.x * cellSize,
//           device.y * cellSize,
//           cellSize,
//           cellSize
//         );
//         ctx.fillStyle = "black";
//         ctx.textAlign = "center";
//         ctx.fillText(
//           name,
//           (device.x + 0.5) * cellSize,
//           (device.y + 0.5) * cellSize
//         );
//       });
//     };

//     const drawRobot = (x, y) => {
//       ctx.fillStyle = "red";
//       ctx.beginPath();
//       ctx.arc(
//         x * cellSize + cellSize / 2,
//         y * cellSize + cellSize / 2,
//         20 / 2,
//         0,
//         2 * Math.PI
//       );
//       ctx.fill();
//     };

//     drawGrid();
//     drawDevices();
//     drawRobot(path[0].x, path[0].y);

//     if (!start) return;

//     let currentPosIndex = 0;
//     const speed = 0.05;

//     const moveRobot = () => {
//       if (currentPosIndex < path.length - 1) {
//         let currentPos = path[currentPosIndex];
//         let targetPos = path[currentPosIndex + 1];

//         if (Math.abs(targetPos.x - currentPos.x) > speed) {
//           currentPos.x += targetPos.x > currentPos.x ? speed : -speed;
//         } else if (Math.abs(targetPos.y - currentPos.y) > speed) {
//           currentPos.y += targetPos.y > currentPos.y ? speed : -speed;
//         } else {
//           currentPosIndex++;
//         }

//         ctx.clearRect(0, 0, gridSize * cellSize, gridSize * cellSize);
//         drawGrid();
//         drawDevices();
//         drawRobot(currentPos.x, currentPos.y);

//         robotAnimationFrameId = requestAnimationFrame(moveRobot);
//       }
//     };

//     moveRobot();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       cancelAnimationFrame(robotAnimationFrameId);
//     };
//   }, [start]);

//   const handleClick = () => {
//     setStart(true);
//   };

//   return (
//     <>
//       <div>
//         <button onClick={handleClick}>시작하기</button>
//         <canvas
//           ref={canvasRef}
//           width={gridSize * cellSize}
//           height={gridSize * cellSize}
//         />
//         <Simulation2 />
//       </div>

//     </>
//   );
// };

// export default Simulation;
