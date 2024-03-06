import React, { useRef, useEffect } from "react";
import "./Simulation.css";

const gridSize = 10;
const cellSize = 50; // 각 격자 셀의 크기 (픽셀 단위)
const devices = {
  호출벨: { x: 2, y: 3 },
  엘리베이터: { x: 5, y: 5 },
  차임벨: { x: 8, y: 2 },
};
const path = [
  { x: 0, y: 0 },
  { x: 2, y: 3 },
  { x: 5, y: 5 },
  { x: 8, y: 2 },
  { x: 9, y: 9 },
];

const Simulation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const robotSize = 20; // 로봇의 크기
    let pathIndex = 0;

    // 격자 그리기
    const drawGrid = () => {
      for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, gridSize * cellSize);
        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(gridSize * cellSize, i * cellSize);
        ctx.stroke();
      }
    };

    // 기기 그리기
    const drawDevices = () => {
      Object.values(devices).forEach((device) => {
        ctx.fillStyle = "yellow";
        ctx.fillRect(
          device.x * cellSize,
          device.y * cellSize,
          cellSize,
          cellSize
        );
      });
    };

    // 로봇 그리기
    const drawRobot = (x, y) => {
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(
        x * cellSize + cellSize / 2,
        y * cellSize + cellSize / 2,
        robotSize / 2,
        0,
        2 * Math.PI
      );
      ctx.fill();
    };

    // 경로 따라 이동
    const moveAlongPath = () => {
      if (pathIndex < path.length) {
        const position = path[pathIndex];
        drawGrid();
        drawDevices();
        drawRobot(position.x, position.y);
        pathIndex++;
        setTimeout(moveAlongPath, 1000);
      }
    };

    drawGrid();
    drawDevices();
    moveAlongPath();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={gridSize * cellSize}
      height={gridSize * cellSize}
    />
  );
};

export default Simulation;
