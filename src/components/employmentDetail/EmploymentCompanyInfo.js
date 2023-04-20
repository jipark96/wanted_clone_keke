import React from "react";

const EmploymentCompanyInfo = (props) => {
  return (
    <>
      <li className="employmentCompanyCard_li">
        <img
          src={props.companyCard.img}
          className="employmentCompanyCard_img"
          alt=""
        />
        <div className="employmentCompanyCard_div1">
          <div className="employmentCompanyCard_p2">
            {props.companyCard.job}
          </div>
          <div className="employmentCompanyCard_p3">
            {props.companyCard.name}
          </div>
          <div className="employmentCompanyCard_p4">
            {props.companyCard.speed}
          </div>
          <div className="employmentCompanyCard_p5">
            {props.companyCard.region}
          </div>
          <div className="employmentCompanyCard_p6">
            {props.companyCard.compensation}
          </div>
        </div>
      </li>
    </>
  );
};

export default EmploymentCompanyInfo;
