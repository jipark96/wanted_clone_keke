import React, { useState } from "react";
import * as S from "../components/search/SearchStyles";
import { searchRanking } from "../data";
import { Route, Routes, useNavigate } from "react-router-dom";
import companyDate2 from "../db/companyData2.json";
import SearchResult from "./SearchResult";
const Search = ({ setSearchResults }) => {
  const navigate = useNavigate();
  let [searchKeyword, setSearchKeyword] = useState("");
  const [searchRank, setSearchRank] = useState(searchRanking);
  const [searchBenefit, setSearchBenefit] = useState([
    "#연봉상위2~5%",
    "#재택근무",
    "#주4일근무",
    "#퇴사율5%이하",
    "#주35시간",
  ]);
  const handleSearch = (e) => {
    e.preventDefault();
    const results = companyDate2.filter((item) =>
      item.job.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setSearchResults(results);
    navigate(`/search/${searchKeyword}`);
  };

  return (
    <>
      <S.SearchWrap>
        <S.SearchClose
          onClick={() => {
            navigate("/");
          }}>
          &times;
        </S.SearchClose>
        <form onSubmit={handleSearch}>
          <S.SearchInputDiv>
            <S.SearchInput
              type="search"
              placeholder="검색어를 입력해 주세요."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </S.SearchInputDiv>
        </form>
        <div>
          <S.SearchH4>추천 검색어</S.SearchH4>
          <S.SearchUl>
            {searchBenefit.map((data, i) => {
              return <S.SearchLi>{searchBenefit[i]}</S.SearchLi>;
            })}
          </S.SearchUl>
          <S.SearchH4>
            인기 검색어
            <S.SearchSpan>17:00 기준</S.SearchSpan>
          </S.SearchH4>
          <S.SearchUl>
            {searchRank.map((data, i) => {
              return (
                <S.SearchLi2>
                  <S.SearchSpan3>
                    <S.SearchSpan1>{data.id}</S.SearchSpan1>
                    <S.SearchSpan2>{data.name}</S.SearchSpan2>
                  </S.SearchSpan3>
                </S.SearchLi2>
              );
            })}
          </S.SearchUl>
        </div>
      </S.SearchWrap>
    </>
  );
};

export default Search;
