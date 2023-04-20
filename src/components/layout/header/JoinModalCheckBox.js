import { useState } from "react";

function JoinModalCheckBox() {
    let [smsAgreement,setSmsAgreement] = useState(["이메일","앱 푸시","문자 메시지"]);
    let [isCheckedAll, setIsCheckedAll] = useState(false); // 전체 동의 체크 상태
    let [isChecked1, setIsChecked1] = useState(false); // 만 14세 이상 체크 상태
    let [isChecked2, setIsChecked2] = useState(false); // 이용약관 체크 상태
    let [isChecked3, setIsChecked3] = useState(false); // 개인정보 수집 및 이용 체크 상태
    let [isChecked4, setIsChecked4] = useState(false); // 채용 소식, 커리어 콘텐츠, 이벤트 체크 상태

  const handleCheckAll = (e) => {
    setIsCheckedAll(e.target.checked);
    setIsChecked1(e.target.checked);
    setIsChecked2(e.target.checked);
    setIsChecked3(e.target.checked);
    setIsChecked4(e.target.checked);
  };
  const handleCheck1 = (e) => {
    setIsChecked1(e.target.checked);
  };
  const handleCheck2 = (e) => {
    setIsChecked2(e.target.checked);
  };
  const handleCheck3 = (e) => {
    setIsChecked3(e.target.checked);
  };
  const handleCheck4 = (e) => {
    setIsChecked4(e.target.checked);
  };
    return (
        <>
            <div className="joinModal_div5">
              <input type="checkbox" className="joinModal_checkbox"
              checked={isCheckedAll}
              onChange={handleCheckAll}/>
              <span className="joinModal_span3">전체 동의</span>
          </div>
          <hr />
          <div className="joinModal_div6">
            <input type="checkbox" className="joinModal_checkbox"
            checked={isChecked1}
            onChange={handleCheck1}/>
            <span className="joinModal_span4">만 14세 이상입니다. (필수)</span>
        </div>
        <div className="modal2_div6">
          <input type="checkbox" className="joinModal_checkbox"
          checked={isChecked2}
          onChange={handleCheck2}/>
          <span className="joinModal_span4">원티드 이용약관 동의 (필수)</span>
          <span className="joinModal_span5">자세히</span>
      </div>
      <div className="joinModal_div6">
        <input type="checkbox" className="joinModal_checkbox"
        checked={isChecked3}
        onChange={handleCheck3}/>
        <span className="joinModal_span4">원티드 개인정보 수집 및 이용 동의 (필수)</span>
        <span className="joinModal_span6">자세히</span>
    </div>
    <div className="joinModal_div6">
      <input type="checkbox" className="joinModal_checkbox" id="joinModal_chk"
      checked={isChecked4}
      onChange={handleCheck4}/>
      <span className="joinModal_span4">채용 소식. 커리어 콘텐츠, 이벤트 등 원티드 맞춤 정보 받기</span>
  </div>
          <div className="joinModal_div7">
            {
                smsAgreement.map((a,i) => {
                    return (
                        <label for="joinModal_chk" className="joinModal_label">
              <input type="checkbox" className="joinModal_checkbox2"/>
              <span className="joinModal_span7">✓</span>
              <p className="joinModal_p1">{smsAgreement[i]}</p>
            </label>
                    )
                })
            }
          </div>
          <div className="joinModal_div8">
            <div className="joinModal_div9"></div>
            <button type="submit" className="joinModal_button2" disabled>
              <span className="joinModal_span8">가입하기</span>
            </button>
          </div>
          </>
    )
}

export default JoinModalCheckBox;