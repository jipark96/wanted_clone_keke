import React, { useState } from "react";
import { detailImg } from "../../data";
import companyDetailImg from "../../db/companyDetailImg.json";

const EmploymentDetailImg = () => {
  let [companyImg, setCompanyImg] = useState(companyDetailImg);

  return (
    <div className="employmentDetailImg">
      <div className="employmentDetailImg_div1">
        <button className="employmentDetailImg_btn1">{"<"}</button>
        <button className="employmentDetailImg_btn2">{">"}</button>
        <div className="employmentDetailImg_div2">
          {companyImg.map((data, i) => {
            return (
              <div className="employmentDetailImg_div3">
                <img
                  src={data.img}
                  className="employmentDetailImg_img"
                  alt=""
                  key={i}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmploymentDetailImg;
