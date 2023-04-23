import { useState } from "react";

function JobSelect() {
  let [index, setIndex] = useState(0);
  let [benefit, setBenefit] = useState([
    "연봉이 최고의 복지",
    "재택근무",
    "퇴사율 10% 이하",
    "병력특례",
    "업력 5년 이상",
    "유연 근무",
    "연봉이 최고의 복지",
    "재택근무",
    "연봉이 최고의 복지",
  ]);

  const prevClick = () => {
      if (index > 0) { // index가 0보다 크면 index 값을 1 감소
        setIndex(index - 1)
      }
    }
    
    const nextClick = () => {
      if (index < benefit.length) { // index가 button1 배열의 길이보다 작으면 index 값을 1 증가
        setIndex(index + 1)
      }
    }
    

  return (
    <>
      <div className="jobSelect">
        <div className="jobSelect_div1">
          <div>
            <span className="jobSelect_span1">전체</span>
            <button className="jobSelect_btn">∨</button>
            <span className="jobSelect_span2">|</span>
            <span className="jobSelect_span3">직군을 선택해주세요.</span>
          </div>
          <div className="jobSelect_div2">
            <button className="jobSelect_btn1">
              <span className="jobSelect_btn1_span1">지역</span>
              <span className="jobSelect_btn1_span2">한국</span>
            </button>
            <button className="jobSelect_btn1">
              <span className="jobSelect_btn1_span1">경력</span>
              <span className="jobSelect_btn1_span2">전체▼</span>
            </button>
            <button className="jobSelect_btn1">
              <span className="jobSelect_btn1_span1">기술스택▼</span>
            </button>
            <button className="jobSelect_btn1" style={{ marginLeft: 610 }}>
              <span className="jobSelect_btn1_span1">응답률순▼</span>
            </button>
          </div>
        </div>
        <hr style={{ width: 1060, marginTop: 30 }} />

        <div className="jobSelect_div3">
          <div className="jobSelect_div4">
            <div className="jobSelect_div5">
              <div className="jobSelect_button_start">
                <button className="jobSelect_button1" onClick={prevClick}>{"<"}</button>
              </div>
              <div className="jobSelect_button_end">
                <button className="jobSelect_button1" onClick={nextClick}>{">"}</button>
              </div>
              {benefit.slice(index, index + benefit.length).map((a, i) => {
                return (
                  <button type="button" className="jobSelect_btn2">
                    {benefit[i + index]}
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                      style={{ width: 16, height: 16 }}
                      alt=""
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: 40 }} />
    </>
  );
}

export default JobSelect;
