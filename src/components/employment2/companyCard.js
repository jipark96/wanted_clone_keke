import { useState } from "react";
import { companyData } from "../../data";
import CompanyInfo from "./CompanyInfo";
import axios from "axios";

function CompanyCard() {
  let [company, setCompany] = useState(companyData);

  return (
    <>
      <button
        onClick={() => {
          axios
            .get("./companyData2.json")
            .then((결과) => {
              console.log(결과.data);
            })
            .catch(() => {
              console.log("실패함");
            });
        }}>
        버튼
      </button>
      <div className="companyCard">
        <ul className="companyCard_ul">
          {company.map((a, i) => {
            return <CompanyInfo company={company[i]} i={i} key={i} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default CompanyCard;
