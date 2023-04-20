function CompanyInfo(props) {
    return (
      <>
        <li className="companyCard_li">
          <img
            src={props.company.img}
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

  export default CompanyInfo;