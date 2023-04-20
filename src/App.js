import { useState } from "react";
import "./App.css";
import Main from "./components/layout/main/main";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Employment2 from "./components/employment2/employment2";
import EmploymentDetail from "./components/employmentDetail/EmploymentDetail";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element={<Main />} />
      <Route path = "/employment2" element = {<Employment2 />} />
      <Route path = "/employment/detail" element={<EmploymentDetail />} />
      </Routes>
    </div>
  );
}

export default App;
