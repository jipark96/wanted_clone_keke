import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import EmploymentDetail from "./components/employmentDetail/EmploymentDetail";
import Employment2 from "./components/employment2/Employment2";


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
