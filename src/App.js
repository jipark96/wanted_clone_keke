import { useState } from "react";
import "./App.css";
import Footer from "./components/layout/footer/footer";
import Header from "./components/layout/header/header";
import Main from "./components/layout/main/main";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import companyData from "./data";
import TypeButton from "./components/layout/main/typeButton";
import Employment2 from "./components/employment2/employment2";

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Employment2 /> */}
    </div>
  );
}

export default App;
