import React from "react";

const EmploymentDetailCompany = () => {
  return (
    <div className="employmentDetailCompany">
      <div className="employmentDetailCompany_div1">
        <span className="employmentDetailCompany_span1">마감일</span>
        <span className="employmentDetailCompany_span2">상시</span>
      </div>
      <div className="employmentDetailCompany_div1">
        <span className="employmentDetailCompany_span1">근무지역</span>
        <span className="employmentDetailCompany_span2">
          서울시 성동구 성수동 2가 277-47, 무신사 캠퍼스 N1
        </span>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/wanted2.png"}
        className="employmentDetailCompany_img"
        alt=""
      />
    </div>
  );
};

export default EmploymentDetailCompany;
