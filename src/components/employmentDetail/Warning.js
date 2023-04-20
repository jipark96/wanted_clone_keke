import React from "react";

const Warning = () => {
  return (
    <div className="warning">
      <div className="warning_div1">
        <div className="warning_div2">
          🚫
          <div className="warning_div3">
            <p className="warning_p">
              본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
              없으며, 구직활동 이외의
              <br />
              용도로 사용할 수 없습니다.
            </p>
            <div>
              <span className="warning_btn">∨</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
