import React from "react";
import Layout from "../components/layout/Layout";
import { useParams } from "react-router-dom";
import JobSelect from "../components/employment2/JobSelect";
import BookMark from "../components/employment2/BookMark";

const SearchResult = ({ searchResults }) => {
  const { searchKeyword } = useParams();

  return (
    <Layout>
      <div className="searchResult_div1">
        <h2 className="searchResult_h2">{searchKeyword}</h2>
      </div>
      <hr style={{ width: 1060 }} />
      <JobSelect />
      <div className="companyCard">
        <ul className="companyCard_ul">
          {searchResults.map((item) => {
            return (
              <>
                <li key={item.id} className="companyCard_li">
                  <img src={item.img} className="companyCard_img" alt="" />
                  <div className="companyCard_div2">
                    <div className="companyCard_h2">{item.job}</div>
                    <div className="companyCard_p1">{item.name}</div>
                    <div className="companyCard_p4">{item.speed}</div>
                    <div className="companyCard_p2">{item.region}</div>
                    <div className="companyCard_p3">{item.compensation}</div>
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default SearchResult;
