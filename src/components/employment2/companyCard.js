import { useState } from "react";
import { companyData } from "../../data";
import CompanyInfo from "./CompanyInfo";

function CompanyCard() {
  let [company, setCompany] = useState(companyData);

  return (
    <div className="companyCard">
      <ul className="companyCard_ul">
        {company.map((a, i) => {
          return <CompanyInfo company={company[i]} i={i} key={i} />;
        })}
      </ul>
    </div>
  );
}


export default CompanyCard;
