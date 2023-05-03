import { useState } from "react";
import { companyData } from "../../data";
import CompanyInfo from "./CompanyInfo";
import axios from "axios";
import companyData2 from "../db/companyData2.json";

function CompanyCard() {
  let [company, setCompany] = useState(companyData2);

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
