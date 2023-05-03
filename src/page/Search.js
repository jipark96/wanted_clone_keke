import React, { useState } from "react";
import * as S from "../components/search/SearchStyles";
import { searchRanking } from "../data";
const Search = () => {
  const [searchRank, setSearchRank] = useState(searchRanking);
  const [searchBenefit, setSearchBenefit] = useState([
    "#연봉상위2~5%",
    "#재택근무",
    "#주4일근무",
    "#퇴사율5%이하",
    "#주35시간",
  ]);
  return (
    <>
      <S.SearchWrap>
        <S.SearchClose>&times;</S.SearchClose>
        <S.SearchInputDiv>
          <S.SearchInput type="search" placeholder="검색어를 입력해 주세요." />
        </S.SearchInputDiv>
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
