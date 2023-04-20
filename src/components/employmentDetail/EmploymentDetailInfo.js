import React, { useState } from "react";

const EmploymentDetailInfo = () => {
  let [benefit, setBenefit] = useState([
    "#자율복장",
    "#주차",
    "#건강검진",
    "#복지포인트",
    "#자기계발",
    "#재택근무",
  ]);
  return (
    <div className="employmentDetailInfo">
      <h2 className="employmentDetailInfo_h2">프론트엔드 시니어 개발자</h2>
      <div className="employmentDetailInfo_div">
        <p className="employmentDetailInfo_p1">29CM(무신사)</p>
        <div className="employmentDetailInfo_div1">
          <span className="employmentDetailInfo_p2">응답률 높음</span>
          <span className="employmentDetailInfo_span1">|</span>
          <span className="employmentDetailInfo_span2">서울·한국</span>
        </div>
      </div>
      <div className="employmentDetailInfo_div2">
        <ul className="employmentDetailInfo_ui">
          {benefit.map((a, i) => {
            return <li className="employmentDetailInfo_li">{benefit[i]}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default EmploymentDetailInfo;
