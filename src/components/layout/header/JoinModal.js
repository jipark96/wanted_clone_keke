import { useState } from "react"
import JoinModalCheckBox from "./JoinModalCheckBox";

function JoinModal (props) {
    let [country, setCountry] = useState(["South Korea +82","Japan +81","Taiwan +886","Hong Kong +852","Singapore +65","Afghanistan +93"]);

    return (
        <div className="joinModal">
            <div className="joinModal_content">
                <span className="joinModal_close" onClick={() => {
                    props.setJoinModal(false);
                }}>&times;</span>
                <h1 className="joinModal_h1">회원가입</h1>
                <div className="joinModal_div1">
            <span className="joinModal_span">이메일</span>
          </div>
          <input type="text" className="joinModal_input" placeholder="abc@gmail.com" disabled />
          <div className="joinModal_div1">
            <span className="joinModal_span">이름</span>
          </div>
          <input type="text" className="joinModal_input2" placeholder="이름을 입력해 주세요" />
          <div className="joinModal_div1">
            <span className="joinModal_span">휴대폰 번호</span>
          </div>
          <div>
            <div className="joinModal_div2">
              <select className="joinModal_select">
                {
                    country.map((a,i) => {
                        return (
                            <option>{country[i]}</option>
                        )
                    })
                }
                
              </select>
            </div>
            <div className="joinModal_div3">
              <input type="text" className="joinModal_input3" placeholder="(예시)01012345678" />
              <button className="joinModal_button1">
                <span className="joinModal_span2">인증번호 받기</span>
              </button>
              </div>
              <div className="joinModal_div4">
                <input type="text" className="joinModal_input" placeholder="인증번호를 입력해주세요." />
              </div>
          </div>
          <div className="joinModal_div1">
            <span className="joinModal_span">비밀번호</span>
          </div>
          <input type="password" className="joinModal_input2" placeholder="비밀번호를 입력해주세요."/>
          <input type="password" className="joinModal_input2" placeholder="비밀번호를 다시 한번 입력해주세요."/>
          <div style={{marginTop: 5}}>
            <p className="joinModal_p">영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상 16자 이하로 입력해주세요.</p>
          </div>
                <JoinModalCheckBox />
            </div>
        </div>
    )
}

export default JoinModal;