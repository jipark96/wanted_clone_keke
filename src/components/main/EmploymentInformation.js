import { useState } from "react";

function EmploymentInformation() {
  let [information, setInformation] = useState([
    "채용공고",
    "내 프로필",
    "매치업",
    "직군별 연봉",
  ]);
  return (
    <div className="employmentInfo">
      <div className="employmentInfo_div1">
        <h2 className="employmentInfo_h2">채용 정보를 찾고 계셨나요?</h2>
      </div>
      <div className="employmentInfo_wrap">
        {information.map((a, i) => {
          return (
            <div className="employmentInfo_item">
              <div className="employmentInfo_icon">
                <img
                  src={process.env.PUBLIC_URL + "/search.png"}
                  className="employmentInfo_img"
                  alt=""
                />
              </div>
              <div className="employmentInfo_div2">{information[i]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmploymentInformation;
