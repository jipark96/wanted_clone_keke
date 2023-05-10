import { useState } from "react";
import CompanyInfo from "./CompanyInfo";
import companyData2 from "../../db/companyData2.json";
import { addCompany } from "../../store";
import { useDispatch } from "react-redux";

function CompanyCard() {
  let [company, setCompany] = useState(companyData2);
  const dispatch = useDispatch();
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
