import { useState } from "react";
import { companyData } from "../../data";
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
function CompanyInfo(props) {
  return (
    <>
      <li className="companyCard_li">
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F28689%2Fnsqn3gukqjh20dog__400_400.png&w=400&q=75"
          className="companyCard_img"
          alt=""
        />
        <div className="companyCard_div2">
          <div className="companyCard_h2">{props.company.job}</div>
          <div className="companyCard_p1">{props.company.name}</div>
          <div className="companyCard_p4">{props.company.speed}</div>
          <div className="companyCard_p2">{props.company.region}</div>
          <div className="companyCard_p3">{props.company.compensation}</div>
        </div>
      </li>
    </>
  );
}

export default CompanyCard;
