import React from "react"; // React 임포트 추가
import "./App.css";
import Header from "./page/fragment/Header";
import Main from "./page/main/Main";
import Simulation from "./page/simulation/Simulation";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./page/dashboard/Dashboard";

function App() {
  const preventRightClick = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    document.addEventListener("contextmenu", preventRightClick);

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  return (
      <div className="App">
          <Header />

        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/home" element={<Main/>} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
  );
}

export default App;
