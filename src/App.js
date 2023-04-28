import "./App.css";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import EmploymentDetail from "./page/EmploymentDetail";
import Employment2 from "./page/Employment2";
import Main from "./page/Main";
import { companyData } from "./data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/employment2" element={<Employment2 />} />
        <Route path="/employment/detail" element={<EmploymentDetail />} />
        <Route
          path="/employment/detail/:id"
          element={<EmploymentDetail companyData={companyData} />}
        />
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
