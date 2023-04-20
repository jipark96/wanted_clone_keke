import { useState } from "react";
import "./App.css";
import Main from "./components/layout/main/main";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Employment2 from "./components/employment2/employment2";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path = "/" element={<Main />} />
      <Route path = "/employment2" element = {<Employment2 />} />
      </Routes>
    </div>
  );
}

export default App;
