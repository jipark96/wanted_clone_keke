import React, { useState } from "react";
import { detailImg } from "../../data";

const EmploymentDetailImg = () => {
  let [companyImg, setCompanyImg] = useState(detailImg);
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
