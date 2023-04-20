import React, { useState } from "react";
import CompanyInfo from "../employment2/CompanyInfo";
import { companyData } from "../../data";
import EmploymentCompanyInfo from "./EmploymentCompanyInfo";

const EmploymentCompanyCard = () => {
  let [companyCard, setCompanyCard] = useState(companyData);
  return (
    <div className="employmentCompanyCard">
      <p className="employmentCompanyCard_p">이 포지션을 찾고 계셨나요?</p>
      <ul className="employmentCompanyCard_ui">
        {companyCard.map((data, i) => {
          return (
            <EmploymentCompanyInfo companyCard={companyCard[i]} i={i} key={i} />
          );
        })}
      </ul>
    </div>
  );
};

export default EmploymentCompanyCard;
