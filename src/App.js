import "./App.css";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import EmploymentDetail from "./page/EmploymentDetail";
import Employment2 from "./page/Employment2";
import Main from "./page/Main";
import { companyData } from "./data";
import Search from "./page/Search";
import SearchResult from "./page/SearchResult";
import { useState } from "react";
import Bookmark from "./page/Bookmark";
import Event from "./page/Event";

function App() {
  let [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/search"
          element={
            <Search
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route
          path="/search/:searchKeyword"
          element={
            <SearchResult
              searchResults={searchResults}
              setSearchResults={setSearchResults}
            />
          }
        />
        <Route path="/employment2" element={<Employment2 />} />
        <Route path="/employment/detail" element={<EmploymentDetail />}>
          <Route
            path=":id"
            element={<EmploymentDetail companyData={companyData} />}
          />
        </Route>
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/event" element={<Event />} />
        <Route path="*" element={<div>없는 페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
